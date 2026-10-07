const express = require("express");
const db = require("../database");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

function findAuthenticatedUser(req, callback) {
    const userId = Number(req.user.id || req.user.user_id || req.user.userId);
    const email = String(req.user.email || "").trim().toLowerCase();

    if (!userId) {
        callback(null, null);
        return;
    }

    if (!email) {
        db.get(
            "SELECT id, name, email, created_at FROM users WHERE id = ?",
            [userId],
            callback
        );
        return;
    }

    db.get(
        `
        SELECT id, name, email, created_at
        FROM users
        WHERE (id = ? AND email = ?)
           OR (email = ? AND NOT EXISTS (
                SELECT 1 FROM users WHERE id = ?
           ))
        LIMIT 1
        `,
        [userId, email, email, userId],
        callback
    );
}


/* =========================
   GET CURRENT USER
========================= */

router.get("/me", authenticateToken, (req, res) => {
    findAuthenticatedUser(req, (err, user) => {

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

    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    findAuthenticatedUser(req, (lookupError, user) => {
        if (lookupError) {
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

        db.run(
            "UPDATE users SET name = ? WHERE id = ?",
            [name.trim(), user.id],
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

});


module.exports = router;