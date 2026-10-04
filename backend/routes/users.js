const express = require("express");
const db = require("../database");
const authenticateToken = require("../middleware/auth");

const router = express.Router();


/* =========================
   GET CURRENT USER
========================= */

router.get("/me", authenticateToken, (req, res) => {

    const sql = `
        SELECT id, name, email, created_at
        FROM users
        WHERE id = ?
    `;

    db.get(sql, [req.user.id], (err, user) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database error"
            });
        }

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            user: user
        });

    });

});


/* =========================
   UPDATE PROFILE
========================= */

router.put("/profile", authenticateToken, (req, res) => {

    const { name } = req.body;

    if (!name || !name.trim()) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    const sql = `
        UPDATE users
        SET name = ?
        WHERE id = ?
    `;

    db.run(
        sql,
        [name.trim(), req.user.id],
        function (err) {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Profile update failed"
                });
            }

            res.json({
                success: true,
                message: "Profile updated successfully"
            });

        }
    );

});


module.exports = router;