const express = require("express");
const router = express.Router();

const db = require("../database");

// ==========================================
// GET ALL TOPICS
// ==========================================
router.get("/", (req, res) => {

    const sql = `
        SELECT id, name, description
        FROM topics
        ORDER BY id
    `;

    db.all(sql, [], (err, rows) => {

        if (err) {
            console.error("Error loading topics:", err);

            return res.status(500).json({
                success: false,
                message: "Unable to load topics"
            });
        }

        res.json({
            success: true,
            topics: rows
        });
    });
});


// ==========================================
// GET TOPICS FOR A COMPANY
// ==========================================
router.get("/company/:companyId", (req, res) => {

    const companyId = Number(req.params.companyId);

    console.log("Loading topics for company:", companyId);

    if (!companyId) {
        return res.status(400).json({
            success: false,
            message: "Invalid company ID"
        });
    }

    const sql = `
        SELECT
            t.id,
            t.name,
            t.description,
            COUNT(q.id) AS question_count
        FROM topics t

        INNER JOIN company_topics ct
            ON t.id = ct.topic_id

        LEFT JOIN questions q
            ON q.topic_id = t.id
            AND q.company_id = ?

        WHERE ct.company_id = ?

        GROUP BY
            t.id,
            t.name,
            t.description

        ORDER BY t.id
    `;

    db.all(
        sql,
        [companyId, companyId],
        (err, rows) => {

            if (err) {

                console.error(
                    "Error loading company topics:",
                    err
                );

                return res.status(500).json({
                    success: false,
                    message: "Unable to load topics",
                    error: err.message
                });
            }

            console.log(
                `Found ${rows.length} topics for company ${companyId}`
            );

            res.json({
                success: true,
                topics: rows
            });
        }
    );
});


// ==========================================
// GET SINGLE TOPIC
// ==========================================
router.get("/:id", (req, res) => {

    const topicId = Number(req.params.id);

    const sql = `
        SELECT id, name, description
        FROM topics
        WHERE id = ?
    `;

    db.get(sql, [topicId], (err, row) => {

        if (err) {

            console.error("Error loading topic:", err);

            return res.status(500).json({
                success: false,
                message: "Unable to load topic"
            });
        }

        if (!row) {
            return res.status(404).json({
                success: false,
                message: "Topic not found"
            });
        }

        res.json({
            success: true,
            topic: row
        });
    });
});


module.exports = router;