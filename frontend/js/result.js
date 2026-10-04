// =====================================================
// APTIPREP - QUIZ RESULT
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // ---------------------------------------------
    // Get result values from URL
    // ---------------------------------------------

    const urlParams = new URLSearchParams(window.location.search);

    const topicId = urlParams.get("topic_id");
    const companyId = urlParams.get("company_id");

    const score = parseInt(urlParams.get("score")) || 0;
    const total = parseInt(urlParams.get("total")) || 0;

    // ---------------------------------------------
    // Calculate percentage
    // ---------------------------------------------

    let percentage = 0;

    if (total > 0) {
        percentage = Math.round((score / total) * 100);
    }

    // ---------------------------------------------
    // Get HTML elements
    // ---------------------------------------------

    const scoreElement = document.getElementById("score");
    const totalElement = document.getElementById("total");
    const percentageElement = document.getElementById("percentage");

    const resultMessage = document.getElementById("resultMessage");
    const resultCircle = document.getElementById("resultCircle");

    const correctCount = document.getElementById("correctCount");
    const wrongCount = document.getElementById("wrongCount");

    const retryBtn = document.getElementById("retryBtn");
    const dashboardBtn = document.getElementById("dashboardBtn");

    // ---------------------------------------------
    // Display score
    // ---------------------------------------------

    if (scoreElement) {
        scoreElement.textContent = score;
    }

    if (totalElement) {
        totalElement.textContent = total;
    }

    if (percentageElement) {
        percentageElement.textContent = `${percentage}%`;
    }

    // ---------------------------------------------
    // Correct / Wrong count
    // ---------------------------------------------

    const wrong = total - score;

    if (correctCount) {
        correctCount.textContent = score;
    }

    if (wrongCount) {
        wrongCount.textContent = wrong;
    }

    // ---------------------------------------------
    // Result message
    // ---------------------------------------------

    if (resultMessage) {

        if (percentage >= 80) {
            resultMessage.textContent =
                "Excellent! You have a strong understanding of this topic.";
        }
        else if (percentage >= 60) {
            resultMessage.textContent =
                "Good job! Keep practicing to improve your score.";
        }
        else if (percentage >= 40) {
            resultMessage.textContent =
                "You are making progress. Practice more questions.";
        }
        else {
            resultMessage.textContent =
                "Keep practicing. Review the concepts and try again.";
        }
    }

    // ---------------------------------------------
    // Result circle
    // ---------------------------------------------

    if (resultCircle) {
        resultCircle.style.setProperty(
            "--progress",
            `${percentage}%`
        );
    }

    // ---------------------------------------------
    // Save latest result
    // ---------------------------------------------

    const resultData = {
        topicId: topicId,
        companyId: companyId,
        score: score,
        total: total,
        percentage: percentage,
        completedAt: new Date().toISOString()
    };

    localStorage.setItem(
        "aptiprep_last_result",
        JSON.stringify(resultData)
    );

    // ---------------------------------------------
    // Retry button
    // ---------------------------------------------

    if (retryBtn) {

        retryBtn.addEventListener("click", () => {

            if (!topicId) {
                window.location.href = "topics.html";
                return;
            }

            let url = `question.html?topic_id=${encodeURIComponent(topicId)}`;

            if (companyId) {
                url += `&company_id=${encodeURIComponent(companyId)}`;
            }

            window.location.href = url;
        });
    }

    // ---------------------------------------------
    // Dashboard button
    // ---------------------------------------------

    if (dashboardBtn) {

        dashboardBtn.addEventListener("click", () => {
            window.location.href = "dashboard.html";
        });
    }

    // ---------------------------------------------
    // Console information
    // ---------------------------------------------

    console.log("=================================");
    console.log("AptiPrep Quiz Result");
    console.log("Topic ID:", topicId);
    console.log("Company ID:", companyId);
    console.log("Score:", score);
    console.log("Total:", total);
    console.log("Percentage:", percentage);
    console.log("=================================");

});