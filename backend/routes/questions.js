const express = require("express");
const router = express.Router();

const db = require("../database");
const authenticateToken = require("../middleware/auth");

// =====================================================
// GET QUESTIONS BY TOPIC
// =====================================================

router.get("/topic/:topicId", (req, res) => {

    const topicId = req.params.topicId;
    const companyId = req.query.company_id;

    let sql = `
        SELECT
            id,
            company_id,
            topic_id,
            question,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer,
            explanation,
            source
        FROM questions
        WHERE topic_id = ?
    `;

    const params = [topicId];

    if (companyId) {
        sql += ` AND company_id = ?`;
        params.push(companyId);
    }

    sql += ` ORDER BY id ASC`;

    db.all(sql, params, (err, rows) => {

        if (err) {
            console.error("Question fetch error:", err.message);

            return res.status(500).json({
                success: false,
                message: "Unable to load questions"
            });
        }

        res.json({
            success: true,
            count: rows.length,
            questions: rows
        });
    });
});


// =====================================================
// MOCK TEST QUESTIONS BY COMPANY
// =====================================================

router.get("/company/:companyId/mock", (req, res) => {

    const companyId = req.params.companyId;

    const sql = `
        SELECT
            id,
            company_id,
            topic_id,
            question,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer,
            explanation,
            source
        FROM questions
        WHERE company_id = ?
        ORDER BY RANDOM()
        LIMIT 20
    `;

    db.all(sql, [companyId], (err, rows) => {

        if (err) {
            console.error("Mock test fetch error:", err.message);

            return res.status(500).json({
                success: false,
                message: "Unable to load mock test questions"
            });
        }

        if (!rows || rows.length === 0) {

            return res.status(404).json({
                success: false,
                message: "No mock test questions available for this company"
            });
        }

        res.json({
            success: true,
            count: rows.length,
            questions: rows
        });
    });
});


// =====================================================
// DAILY CHALLENGE
// =====================================================

function getLocalDate() {
    const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(new Date());

    const values = {};
    for (const part of parts) {
        values[part.type] = part.value;
    }

    return `${values.year}-${values.month}-${values.day}`;
}

function getOrCreateDailyChallenge(userId, callback) {
    const today = getLocalDate();

    db.get(
        `SELECT * FROM daily_challenges
         WHERE user_id = ? AND challenge_date = ?`,
        [userId, today],
        (err, existing) => {
            if (err) return callback(err);
            if (existing) return callback(null, existing);

            db.all(
                `SELECT id FROM questions ORDER BY RANDOM() LIMIT 5`,
                [],
                (questionErr, rows) => {
                    if (questionErr) return callback(questionErr);

                    if (!rows || rows.length !== 5) {
                        return callback(
                            new Error("Exactly five questions are required.")
                        );
                    }

                    const ids = rows.map(row => row.id);

                    db.run(
                        `INSERT OR IGNORE INTO daily_challenges
                         (user_id, challenge_date, score, completed,
                          question_ids, answers_json, current_index)
                         VALUES (?, ?, 0, 0, ?, '[]', 0)`,
                        [userId, today, JSON.stringify(ids)],
                        (insertErr) => {
                            if (insertErr) return callback(insertErr);

                            db.get(
                                `SELECT * FROM daily_challenges
                                 WHERE user_id = ? AND challenge_date = ?`,
                                [userId, today],
                                callback
                            );
                        }
                    );
                }
            );
        }
    );
}

function sendDailyChallenge(res, challenge) {
    if (challenge.completed) {
        return res.json({
            success: true,
            completed: true,
            message: "You have completed today's challenge. Come back tomorrow!",
            score: challenge.score,
            count: 5,
            questions: []
        });
    }

    let ids;
    try {
        ids = JSON.parse(challenge.question_ids || "[]");
    } catch {
        return res.status(500).json({
            success: false,
            message: "Saved daily challenge data is invalid."
        });
    }

    if (
        !Array.isArray(ids) ||
        ids.length !== 5 ||
        ids.some(id => !Number.isInteger(id) || id <= 0)
    ) {
        return res.status(500).json({
            success: false,
            message: "Today's challenge does not contain five questions."
        });
    }

    db.all(
        `SELECT id, company_id, topic_id, question,
                option_a, option_b, option_c, option_d, explanation, source
         FROM questions
         WHERE id IN (${ids.map(() => "?").join(",")})`,
        ids,
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Unable to load today's questions."
                });
            }

            const byId = new Map(rows.map(row => [row.id, row]));
            const ordered = ids.map(id => byId.get(id)).filter(Boolean);

            if (ordered.length !== 5) {
                return res.status(500).json({
                    success: false,
                    message: "Some saved daily questions are unavailable."
                });
            }

            res.json({
                success: true,
                completed: false,
                date: challenge.challenge_date,
                score: challenge.score,
                current_index: challenge.current_index || 0,
                count: 5,
                questions: ordered
            });
        }
    );
}

router.get("/daily-challenge", authenticateToken, (req, res) => {
    getOrCreateDailyChallenge(Number(req.user.id), (err, challenge) => {
        if (err) {
            console.error("Daily challenge load error:", err.message);
            return res.status(500).json({
                success: false,
                message: "Unable to load daily challenge."
            });
        }

        sendDailyChallenge(res, challenge);
    });
});

router.post("/daily-challenge/answer", authenticateToken, (req, res) => {
    const userId = Number(req.user.id);
    const questionId = Number(req.body.question_id);
    const selectedAnswer = String(req.body.selected_answer || "")
        .trim()
        .toUpperCase();

    if (
        !Number.isInteger(questionId) || questionId <= 0 ||
        !["A", "B", "C", "D"].includes(selectedAnswer)
    ) {
        return res.status(400).json({
            success: false,
            message: "Valid question and answer are required."
        });
    }

    getOrCreateDailyChallenge(userId, (err, challenge) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Unable to check today's challenge."
            });
        }

        if (challenge.completed) {
            return res.status(409).json({
                success: false,
                completed: true,
                message: "Today's challenge is already completed."
            });
        }

        let ids;
        let answers;
        try {
            ids = JSON.parse(challenge.question_ids || "[]");
            answers = JSON.parse(challenge.answers_json || "[]");
        } catch {
            return res.status(500).json({
                success: false,
                message: "Saved challenge data is invalid."
            });
        }

        const index = Number(challenge.current_index || 0);
        if (!Array.isArray(ids) || !Array.isArray(answers) ||
            index >= 5 || ids[index] !== questionId) {
            return res.status(409).json({
                success: false,
                message: "This is not the current challenge question."
            });
        }

        db.get(
            `SELECT correct_answer FROM questions WHERE id = ?`,
            [questionId],
            (questionErr, question) => {
                if (questionErr || !question) {
                    return res.status(500).json({
                        success: false,
                        message: "Unable to verify the answer."
                    });
                }

                const correct = selectedAnswer ===
                    String(question.correct_answer || "").trim().toUpperCase();
                const updatedAnswers = [
                    ...answers,
                    {
                        question_id: questionId,
                        selected_answer: selectedAnswer,
                        is_correct: correct
                    }
                ];
                const newScore = Number(challenge.score || 0) + (correct ? 1 : 0);
                const newIndex = index + 1;
                const isComplete = newIndex === 5;

                db.run(
                    `UPDATE daily_challenges
                     SET answers_json = ?,
                         current_index = ?,
                         score = ?,
                         completed = ?,
                         completed_at = CASE WHEN ? = 1
                             THEN CURRENT_TIMESTAMP ELSE completed_at END
                     WHERE id = ? AND completed = 0 AND current_index = ?`,
                    [
                        JSON.stringify(updatedAnswers),
                        newIndex,
                        newScore,
                        isComplete ? 1 : 0,
                        isComplete ? 1 : 0,
                        challenge.id,
                        index
                    ],
                    function (updateErr) {
                        if (updateErr) {
                            return res.status(500).json({
                                success: false,
                                message: "Unable to save your answer."
                            });
                        }

                        if (this.changes !== 1) {
                            return res.status(409).json({
                                success: false,
                                message: "This answer was already submitted."
                            });
                        }

                        res.json({
                            success: true,
                            correct,
                            correct_answer: question.correct_answer,
                            score: newScore,
                            current_index: newIndex,
                            completed: isComplete,
                            message: isComplete
                                ? "Challenge completed. Come back tomorrow!"
                                : "Answer saved."
                        });
                    }
                );
            }
        );
    });
});


// =====================================================
// SAVE PRACTICE ATTEMPT
// =====================================================

router.post("/practice-attempt", (req, res) => {

    const {
        user_id: userId,
        company_id: companyId,
        topic_id: topicId,
        question_id: questionId,
        selected_answer: selectedAnswer,
        is_correct: isCorrect
    } = req.body;

    if (!userId) {
        return res.status(400).json({
            success: false,
            message: "User ID is required"
        });
    }

    const sql = `
        INSERT INTO practice_attempts (
            user_id,
            company_id,
            topic_id,
            question_id,
            selected_answer,
            is_correct
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(
        sql,
        [
            userId,
            companyId || null,
            topicId || null,
            questionId || null,
            selectedAnswer || null,
            isCorrect ? 1 : 0
        ],
        function (err) {

            if (err) {
                console.error(
                    "Practice attempt save error:",
                    err.message
                );

                return res.status(500).json({
                    success: false,
                    message: "Unable to save practice attempt"
                });
            }

            res.status(201).json({
                success: true,
                attempt_id: this.lastID
            });
        }
    );
});


// =====================================================
// EXPORT ROUTER
// =====================================================

module.exports = router;