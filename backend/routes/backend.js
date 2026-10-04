const express = require("express");
const router = express.Router();

const db = require("../database");

// =====================================================
// GET DASHBOARD DATA
// =====================================================

router.get("/:userId", (req, res) => {

    const userId = Number(req.params.userId);

    if (!userId) {
        return res.status(400).json({
            success: false,
            message: "Invalid user ID."
        });
    }

    const dashboard = {
        stats: {},
        topics: [],
        companies: [],
        recentActivity: [],
        dailyChallenge: null
    };

    // -------------------------------------------------
    // 1. BASIC STATS
    // -------------------------------------------------

    const statsSQL = `
        SELECT
            COUNT(*) AS total_attempts,
            COUNT(DISTINCT question_id) AS questions_solved,
            SUM(
                CASE
                    WHEN is_correct = 1 THEN 1
                    ELSE 0
                END
            ) AS correct_answers
        FROM practice_attempts
        WHERE user_id = ?
    `;

    db.get(statsSQL, [userId], (err, stats) => {

        if (err) {
            console.error("Dashboard stats error:", err.message);

            return res.status(500).json({
                success: false,
                message: "Unable to load dashboard statistics."
            });
        }

        const totalAttempts = Number(stats.total_attempts || 0);
        const questionsSolved = Number(stats.questions_solved || 0);
        const correctAnswers = Number(stats.correct_answers || 0);

        const accuracy =
            totalAttempts > 0
                ? Math.round((correctAnswers / totalAttempts) * 100)
                : 0;

        dashboard.stats = {
            questionsSolved,
            correctAnswers,
            accuracy,
            totalAttempts
        };

        // -------------------------------------------------
        // 2. MOCK TEST COUNT
        // -------------------------------------------------

        const testSQL = `
            SELECT COUNT(*) AS tests_completed
            FROM test_attempts
            WHERE user_id = ?
        `;

        db.get(testSQL, [userId], (err, testData) => {

            if (err) {
                console.error("Test count error:", err.message);

                return res.status(500).json({
                    success: false,
                    message: "Unable to load test statistics."
                });
            }

            dashboard.stats.testsCompleted =
                Number(testData.tests_completed || 0);

            // -------------------------------------------------
            // 3. TOPIC PROGRESS
            // -------------------------------------------------

            const topicSQL = `
                SELECT
                    t.id,
                    t.name,

                    COUNT(DISTINCT q.id) AS total_questions,

                    COUNT(
                        DISTINCT CASE
                            WHEN pa.question_id IS NOT NULL
                            THEN q.id
                        END
                    ) AS solved_questions

                FROM topics t

                LEFT JOIN questions q
                    ON q.topic_id = t.id

                LEFT JOIN practice_attempts pa
                    ON pa.question_id = q.id
                    AND pa.user_id = ?

                GROUP BY t.id, t.name

                ORDER BY t.id
            `;

            db.all(topicSQL, [userId], (err, topics) => {

                if (err) {
                    console.error("Topic progress error:", err.message);

                    return res.status(500).json({
                        success: false,
                        message: "Unable to load topic progress."
                    });
                }

                dashboard.topics = topics.map(topic => {

                    const total = Number(topic.total_questions || 0);
                    const solved = Number(topic.solved_questions || 0);

                    const percentage =
                        total > 0
                            ? Math.round((solved / total) * 100)
                            : 0;

                    return {
                        id: topic.id,
                        name: topic.name,
                        totalQuestions: total,
                        solvedQuestions: solved,
                        percentage
                    };
                });

                // -------------------------------------------------
                // 4. COMPANY PROGRESS
                // -------------------------------------------------

                const companySQL = `
                    SELECT
                        c.id,
                        c.name,
                        c.logo,

                        COUNT(DISTINCT q.id) AS total_questions,

                        COUNT(
                            DISTINCT CASE
                                WHEN pa.question_id IS NOT NULL
                                THEN q.id
                            END
                        ) AS solved_questions

                    FROM companies c

                    LEFT JOIN questions q
                        ON q.company_id = c.id

                    LEFT JOIN practice_attempts pa
                        ON pa.question_id = q.id
                        AND pa.user_id = ?

                    GROUP BY c.id, c.name, c.logo

                    ORDER BY solved_questions DESC, c.name
                `;

                db.all(companySQL, [userId], (err, companies) => {

                    if (err) {
                        console.error(
                            "Company progress error:",
                            err.message
                        );

                        return res.status(500).json({
                            success: false,
                            message: "Unable to load company progress."
                        });
                    }

                    dashboard.companies = companies.map(company => {

                        const total =
                            Number(company.total_questions || 0);

                        const solved =
                            Number(company.solved_questions || 0);

                        const percentage =
                            total > 0
                                ? Math.round((solved / total) * 100)
                                : 0;

                        return {
                            id: company.id,
                            name: company.name,
                            logo: company.logo,
                            totalQuestions: total,
                            solvedQuestions: solved,
                            percentage
                        };
                    });

                    // -------------------------------------------------
                    // 5. RECENT ACTIVITY
                    // -------------------------------------------------

                    const activitySQL = `
                        SELECT
                            pa.id,
                            pa.question_id,
                            pa.selected_answer,
                            pa.is_correct,
                            pa.created_at,

                            c.name AS company_name,
                            c.logo AS company_logo,

                            t.name AS topic_name,

                            q.question

                        FROM practice_attempts pa

                        LEFT JOIN questions q
                            ON q.id = pa.question_id

                        LEFT JOIN companies c
                            ON c.id = pa.company_id

                        LEFT JOIN topics t
                            ON t.id = pa.topic_id

                        WHERE pa.user_id = ?

                        ORDER BY pa.created_at DESC

                        LIMIT 10
                    `;

                    db.all(
                        activitySQL,
                        [userId],
                        (err, activities) => {

                            if (err) {
                                console.error(
                                    "Recent activity error:",
                                    err.message
                                );

                                return res.status(500).json({
                                    success: false,
                                    message:
                                        "Unable to load recent activity."
                                });
                            }

                            dashboard.recentActivity = activities;

                            // -------------------------------------------------
                            // 6. DAILY CHALLENGE
                            // -------------------------------------------------

                            const dailySQL = `
                                SELECT
                                    id,
                                    challenge_date,
                                    score,
                                    completed,
                                    completed_at

                                FROM daily_challenges

                                WHERE user_id = ?

                                ORDER BY challenge_date DESC

                                LIMIT 1
                            `;

                            db.get(
                                dailySQL,
                                [userId],
                                (err, daily) => {

                                    if (err) {
                                        console.error(
                                            "Daily challenge error:",
                                            err.message
                                        );

                                        return res.status(500).json({
                                            success: false,
                                            message:
                                                "Unable to load daily challenge."
                                        });
                                    }

                                    dashboard.dailyChallenge =
                                        daily || null;

                                    // -------------------------------------------------
                                    // FINAL RESPONSE
                                    // -------------------------------------------------

                                    return res.json({
                                        success: true,
                                        data: dashboard
                                    });
                                }
                            );
                        }
                    );
                });
            });
        });
    });
});

module.exports = router;