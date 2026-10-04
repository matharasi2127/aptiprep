const express = require("express");
const db = require("../database");

const router = express.Router();


// GET ALL COMPANIES
// GET /api/companies

router.get("/", function (req, res) {

    const sql = "SELECT id, name, logo, description, website FROM companies ORDER BY id";

    db.all(sql, [], function (err, companies) {

        if (err) {
            console.error("Error fetching companies:", err.message);

            return res.status(500).json({
                success: false,
                message: "Failed to fetch companies"
            });
        }

        res.json({
            success: true,
            count: companies.length,
            companies: companies
        });

    });

});


// GET SINGLE COMPANY
// GET /api/companies/1

router.get("/:id", function (req, res) {

    const companyId = req.params.id;

    const sql = "SELECT id, name, logo, description, website FROM companies WHERE id = ?";

    db.get(sql, [companyId], function (err, company) {

        if (err) {
            console.error("Error fetching company:", err.message);

            return res.status(500).json({
                success: false,
                message: "Database error"
            });
        }

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found"
            });
        }

        res.json({
            success: true,
            company: company
        });

    });

});


// GET TOPICS FOR COMPANY
// GET /api/companies/1/topics

router.get("/:id/topics", function (req, res) {

    const companyId = req.params.id;

    const sql =
        "SELECT topics.id, topics.name, topics.description " +
        "FROM topics " +
        "INNER JOIN company_topics " +
        "ON topics.id = company_topics.topic_id " +
        "WHERE company_topics.company_id = ? " +
        "ORDER BY topics.id";

    db.all(sql, [companyId], function (err, topics) {

        if (err) {
            console.error("Error fetching topics:", err.message);

            return res.status(500).json({
                success: false,
                message: "Failed to fetch company topics"
            });
        }

        res.json({
            success: true,
            companyId: Number(companyId),
            count: topics.length,
            topics: topics
        });

    });

});


module.exports = router;