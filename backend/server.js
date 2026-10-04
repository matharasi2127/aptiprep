const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = 5000;


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


// =====================================================
// DATABASE
// =====================================================

require("./database");


// =====================================================
// FRONTEND
// =====================================================

app.use(
    express.static(
        path.join(__dirname, "../frontend")
    )
);


// =====================================================
// AUTH ROUTES
// =====================================================

const authRoutes = require("./routes/auth");

app.use(
    "/api/auth",
    authRoutes
);


// =====================================================
// COMPANY ROUTES
// =====================================================

const companyRoutes = require("./routes/companies");
const dashboardRoutes = require("./routes/dashboard");

app.use(
    "/api/companies",
    companyRoutes
);

app.use("/api/topics", require("./routes/topics"));
app.use("/api/questions", require("./routes/questions"));
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", require("./routes/users"));


// =====================================================
// HOME / TEST
// =====================================================

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "AptiPrep backend is running"
    });

});


// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {

    console.log("");
    console.log("======================================");
    console.log("       APTIPREP BACKEND SERVER");
    console.log("======================================");
    console.log(`Server running: http://localhost:${PORT}`);
    console.log("Authentication: /api/auth");
    console.log("Companies:      /api/companies");
    console.log("======================================");
    console.log("");

});