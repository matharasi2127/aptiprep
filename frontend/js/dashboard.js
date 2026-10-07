const API_URL = "https://aptiprep-1zyu.onrender.com/api";

document.addEventListener("DOMContentLoaded", () => {
    loadDashboard();
});

window.addEventListener("storage", event => {
    if (event.key === "aptiprep_performance_updated") {
        try {
            loadPerformanceStats(
                JSON.parse(localStorage.getItem("aptiprep_user") || "null")
            );
        } catch (error) {
            console.error("Unable to read the logged-in user:", error);
        }
    }
});

async function loadDashboard() {

    try {

        const storedUser =
            localStorage.getItem("aptiprep_user");

        if (!storedUser) {
            window.location.href = "login.html";
            return;
        }

        const user = JSON.parse(storedUser);

        const loadedUserName =
            user.name ||
            user.full_name ||
            user.username ||
            "Learner";

        const loadedWelcomeName =
            document.getElementById("welcomeName");

        if (loadedWelcomeName) {
            loadedWelcomeName.textContent = loadedUserName;
        }

        const loadedHeaderName = document.getElementById("headerUserName");
        if (loadedHeaderName) {
            loadedHeaderName.textContent = loadedUserName;
        }

        await loadPerformanceStats(user);
        return;

        const userId =
            user.id ||
            user.user_id ||
            user.userId;

        if (!userId) {
            console.error("User ID not found.");
            return;
        }

        console.log("Loading dashboard for user:", userId);

        const response = await fetch(
            `${API_URL}/dashboard/${userId}`
        );

        const result = await response.json();

        console.log("Dashboard API:", result);

        if (!response.ok || !result.success) {
            throw new Error(
                result.message || "Dashboard loading failed."
            );
        }

        const data = result.data;

        // -------------------------------------------------
        // USER NAME
        // -------------------------------------------------

        const userName =
            user.name ||
            user.full_name ||
            user.username ||
            "Learner";

        const welcomeName =
            document.getElementById("welcomeName");

        if (welcomeName) {
            welcomeName.textContent = userName;
        }

        return;

        // -------------------------------------------------
        // STATS
        // -------------------------------------------------

        setText(
            "questionsSolved",
            data.stats.questionsSolved
        );

        setText(
            "correctAnswers",
            data.stats.correctAnswers
        );

        setText(
            "accuracy",
            `${data.stats.accuracy}%`
        );

        setText(
            "testsCompleted",
            data.stats.testsCompleted
        );

        // -------------------------------------------------
        // TOPICS
        // -------------------------------------------------

        loadTopics(data.topics);

        // -------------------------------------------------
        // COMPANIES
        // -------------------------------------------------

        loadCompanies(data.companies);

        // -------------------------------------------------
        // RECENT ACTIVITY
        // -------------------------------------------------

        loadRecentActivity(data.recentActivity);

        // -------------------------------------------------
        // DAILY CHALLENGE
        // -------------------------------------------------

        loadDailyChallenge(data.dailyChallenge);

    } catch (error) {

        console.error(
            "Dashboard loading error:",
            error
        );
    }
}


async function loadPerformanceStats(user = null) {
    const token = localStorage.getItem("aptiprep_token");
    if (!token) {
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch(`${API_URL}/dashboard/performance`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const result = await response.json();

        if (response.ok && result.success) {
            renderPerformanceStats(result.data);
            return;
        }

        const userId = user && (user.id || user.user_id || user.userId);
        if (!userId) {
            throw new Error(result.message || "Performance stats could not be loaded.");
        }

        const legacyResponse = await fetch(
            `${API_URL}/dashboard/${encodeURIComponent(userId)}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        const legacyResult = await legacyResponse.json();

        if (!legacyResponse.ok || !legacyResult.success) {
            throw new Error(legacyResult.message || "Performance stats could not be loaded.");
        }

        const stats = legacyResult.data.stats || {};
        const totalAttempted = Number(stats.totalAttempts || 0);
        const correctAnswers = Number(stats.correctAnswers || 0);
        renderPerformanceStats({
            totalAttempted,
            correctAnswers,
            wrongAnswers: totalAttempted - correctAnswers
        });
    } catch (error) {
        console.error("Performance statistics loading error:", error);
    }
}


function renderPerformanceStats(stats) {
    const totalAttempted = Number(stats.totalAttempted || 0);
    const correctAnswers = Number(stats.correctAnswers || 0);
    const wrongAnswers = Number(stats.wrongAnswers || 0);

    setText("totalAttempted", totalAttempted);
    setText("correctAnswers", correctAnswers);
    setText("wrongAnswers", wrongAnswers);

    const chart = document.getElementById("performanceChart");
    if (!chart) return;

    const correctShare = totalAttempted > 0
        ? (correctAnswers / totalAttempted) * 100
        : 0;

    chart.style.setProperty("--correct-share", `${correctShare}%`);
    chart.dataset.empty = totalAttempted === 0 ? "true" : "false";
    chart.setAttribute(
        "aria-label",
        `Performance: ${correctAnswers} correct and ${wrongAnswers} wrong out of ${totalAttempted} attempted`
    );
}


// =====================================================
// SET TEXT
// =====================================================

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = value;
    }
}


// =====================================================
// TOPICS
// =====================================================

function loadTopics(topics) {

    const container =
        document.getElementById("topicProgress");

    if (!container) return;

    container.innerHTML = "";

    if (!topics || topics.length === 0) {

        container.innerHTML =
            "<p>No topic progress yet.</p>";

        return;
    }

    topics.forEach(topic => {

        const div =
            document.createElement("div");

        div.className = "practice-item";

        div.innerHTML = `
            <div class="practice-icon">
                📚
            </div>

            <div class="practice-info">

                <h4>${escapeHTML(topic.name)}</h4>

                <p>
                    ${topic.solvedQuestions}
                    of
                    ${topic.totalQuestions}
                    questions completed
                </p>

                <div class="progress-small">
                    <div
                        style="width:${topic.percentage}%">
                    </div>
                </div>

            </div>

            <span class="progress-percent">
                ${topic.percentage}%
            </span>
        `;

        container.appendChild(div);
    });
}


// =====================================================
// COMPANIES
// =====================================================

function loadCompanies(companies) {

    const container =
        document.getElementById("companyProgress");

    if (!container) return;

    container.innerHTML = "";

    if (!companies || companies.length === 0) {

        container.innerHTML =
            "<p>No company practice yet.</p>";

        return;
    }

    companies
        .filter(company => company.solvedQuestions > 0)
        .slice(0, 5)
        .forEach(company => {

            const div =
                document.createElement("div");

            div.className = "company-progress-item";

            div.innerHTML = `

                <div class="company-mini">

                    ${
                        company.logo
                            ? `<img src="${company.logo}"
                                    alt="${escapeHTML(company.name)}">`
                            : `<span>🏢</span>`
                    }

                </div>

                <div class="company-progress-info">

                    <strong>
                        ${escapeHTML(company.name)}
                    </strong>

                    <small>
                        ${company.solvedQuestions}
                        /
                        ${company.totalQuestions}
                        questions
                    </small>

                </div>

                <strong>
                    ${company.percentage}%
                </strong>

            `;

            container.appendChild(div);
        });

    if (container.innerHTML === "") {

        container.innerHTML =
            "<p>Start practicing company questions to see progress.</p>";
    }
}


// =====================================================
// RECENT ACTIVITY
// =====================================================

function loadRecentActivity(activities) {

    const container =
        document.getElementById("recentActivity");

    if (!container) return;

    container.innerHTML = "";

    if (!activities || activities.length === 0) {

        container.innerHTML = `
            <p>
                No practice activity yet.
            </p>
        `;

        return;
    }

    activities.slice(0, 5).forEach(activity => {

        const div =
            document.createElement("div");

        div.className = "practice-item";

        const status =
            Number(activity.is_correct) === 1
                ? "Correct"
                : "Wrong";

        div.innerHTML = `

            <div class="practice-icon">
                ${
                    Number(activity.is_correct) === 1
                        ? "✅"
                        : "❌"
                }
            </div>

            <div class="practice-info">

                <h4>
                    ${escapeHTML(
                        activity.company_name || "Practice"
                    )}
                </h4>

                <p>
                    ${
                        escapeHTML(
                            activity.topic_name || "Aptitude"
                        )
                    }
                    •
                    ${status}
                </p>

            </div>
        `;

        container.appendChild(div);
    });
}


// =====================================================
// DAILY CHALLENGE
// =====================================================

function loadDailyChallenge(daily) {

    const element =
        document.getElementById("dailyChallengeStatus");

    if (!element) return;

    if (!daily) {

        element.textContent =
            "Not completed yet";

        return;
    }

    if (Number(daily.completed) === 1) {

        element.textContent =
            `Completed • Score ${daily.score || 0}/5`;

    } else {

        element.textContent =
            "Not completed yet";
    }
}


// =====================================================
// HTML ESCAPE
// =====================================================

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}