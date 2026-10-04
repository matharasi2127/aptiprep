const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../database");

const router = express.Router();


// Secret key for JWT
const JWT_SECRET = "aptiprep_secret_key_2026";


// =====================================================
// REGISTER
// POST /api/auth/register
// =====================================================

router.post("/register", async (req, res) => {

    try {

        const name = req.body.name
            ? req.body.name.trim()
            : "";

        const email = req.body.email
            ? req.body.email.trim().toLowerCase()
            : "";

        const password = req.body.password
            ? req.body.password
            : "";


        // -------------------------
        // Validation
        // -------------------------

        if (!name || !email || !password) {

            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });

        }


        if (password.length < 6) {

            return res.status(400).json({
                success: false,
                message: "Password must contain at least 6 characters"
            });

        }


        // -------------------------
        // Check email
        // -------------------------

        db.get(
            "SELECT id FROM users WHERE email = ?",
            [email],
            async (err, user) => {

                if (err) {

                    console.error(
                        "Check user error:",
                        err.message
                    );

                    return res.status(500).json({
                        success: false,
                        message: "Database error"
                    });

                }


                if (user) {

                    return res.status(409).json({
                        success: false,
                        message: "Email already registered"
                    });

                }


                // -------------------------
                // Hash password
                // -------------------------

                const hashedPassword =
                    await bcrypt.hash(password, 10);


                // -------------------------
                // Insert user
                // -------------------------

                db.run(
                    `
                    INSERT INTO users
                    (name, email, password)
                    VALUES (?, ?, ?)
                    `,
                    [
                        name,
                        email,
                        hashedPassword
                    ],
                    function (insertError) {

                        if (insertError) {

                            console.error(
                                "Insert user error:",
                                insertError.message
                            );

                            return res.status(500).json({
                                success: false,
                                message: "Failed to create account"
                            });

                        }


                        console.log(
                            "New user registered. ID:",
                            this.lastID
                        );


                        return res.status(201).json({

                            success: true,

                            message:
                                "Account created successfully",

                            user: {
                                id: this.lastID,
                                name: name,
                                email: email
                            }

                        });

                    }
                );

            }
        );

    } catch (error) {

        console.error(
            "Register error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Server error"
        });

    }

});


// =====================================================
// LOGIN
// POST /api/auth/login
// =====================================================

router.post("/login", async (req, res) => {

    try {

        const email = req.body.email
            ? req.body.email.trim().toLowerCase()
            : "";

        const password = req.body.password
            ? req.body.password
            : "";


        // -------------------------
        // Validation
        // -------------------------

        if (!email || !password) {

            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });

        }


        // -------------------------
        // Find user
        // -------------------------

        db.get(
            "SELECT * FROM users WHERE email = ?",
            [email],
            async (err, user) => {

                if (err) {

                    console.error(
                        "Login database error:",
                        err.message
                    );

                    return res.status(500).json({
                        success: false,
                        message: "Database error"
                    });

                }


                if (!user) {

                    return res.status(401).json({
                        success: false,
                        message: "Invalid email or password"
                    });

                }


                // -------------------------
                // Check password
                // -------------------------

                const passwordMatch =
                    await bcrypt.compare(
                        password,
                        user.password
                    );


                if (!passwordMatch) {

                    return res.status(401).json({
                        success: false,
                        message: "Invalid email or password"
                    });

                }


                // -------------------------
                // Create token
                // -------------------------

                const token = jwt.sign(
                    {
                        id: user.id,
                        email: user.email
                    },
                    JWT_SECRET,
                    {
                        expiresIn: "7d"
                    }
                );


                console.log(
                    "User logged in:",
                    user.email
                );


                return res.status(200).json({

                    success: true,

                    message: "Login successful",

                    token: token,

                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }

                });

            }
        );

    } catch (error) {

        console.error(
            "Login error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Server error"
        });

    }

});


module.exports = router;