const API_URL = "https://aptiprep-1zyu.onrender.com/api";

let questions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let answered = false;

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    const topicId = params.get("topic_id");
    const companyId = params.get("company_id");

    if (!topicId) {
        showError("Topic ID is missing.");
        return;
    }

    loadQuestions(topicId, companyId);
});


// =====================================================
// LOAD QUESTIONS
// =====================================================

async function loadQuestions(topicId, companyId) {

    const container =
        document.getElementById("questionsContainer");

    if (!container) {
        console.error("questionsContainer not found");
        return;
    }

    container.innerHTML = `
        <div class="loading">
            Loading questions...
        </div>
    `;

    try {

        let url =
            `${API_URL}/questions/topic/${topicId}`;

        if (companyId) {
            url += `?company_id=${companyId}`;
        }

        console.log("Questions API:", url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        console.log("Questions:", data);

        if (
            !data.success ||
            !data.questions ||
            data.questions.length === 0
        ) {

            container.innerHTML = `
                <div class="empty-state">
                    <h2>No Questions Available</h2>
                    <p>
                        Questions are not available
                        for this topic.
                    </p>
                </div>
            `;

            return;
        }

        questions = data.questions;

        const totalQuestions = document.getElementById("totalQuestions");

        if (totalQuestions) {
            totalQuestions.textContent = questions.length;
        }

        currentQuestionIndex = 0;
        score = 0;

        displayQuestion();

    } catch (error) {

        console.error("Question loading error:", error);

        container.innerHTML = `
            <div class="error-box">
                <h2>Something went wrong</h2>
                <p>Unable to load questions.</p>
            </div>
        `;
    }
}


// =====================================================
// DISPLAY CURRENT QUESTION
// =====================================================

function displayQuestion() {

    const container =
        document.getElementById("questionsContainer");

    if (!container) return;

    const q =
        questions[currentQuestionIndex];

    selectedAnswer = null;
    answered = false;

    container.innerHTML = `

        <div class="question-card">

            <div class="question-number">
                Question ${currentQuestionIndex + 1}
                / ${questions.length}
            </div>

            <h2 class="question-text">
                ${q.question}
            </h2>

            <div class="options">

                <label class="option">
                    <input
                        type="radio"
                        name="answer"
                        value="A"
                    >
                    <span>A</span>
                    ${q.option_a}
                </label>

                <label class="option">
                    <input
                        type="radio"
                        name="answer"
                        value="B"
                    >
                    <span>B</span>
                    ${q.option_b}
                </label>

                <label class="option">
                    <input
                        type="radio"
                        name="answer"
                        value="C"
                    >
                    <span>C</span>
                    ${q.option_c}
                </label>

                <label class="option">
                    <input
                        type="radio"
                        name="answer"
                        value="D"
                    >
                    <span>D</span>
                    ${q.option_d}
                </label>

            </div>

            <button
                type="button"
                id="submitAnswerBtn"
                class="submit-answer-btn"
            >
                Submit Answer
            </button>

            <div
                id="answerResult"
                class="answer-result"
            ></div>

            <div
                id="explanationBox"
                class="explanation-box"
            ></div>

            <button
                type="button"
                id="nextQuestionBtn"
                class="next-question-btn"
                style="display:none;"
            >
                ${
                    currentQuestionIndex === questions.length - 1
                    ? "View Result"
                    : "Next Question →"
                }
            </button>

        </div>
    `;


    // =================================================
    // SELECT ANSWER
    // =================================================

    const radioButtons =
        document.querySelectorAll(
            'input[name="answer"]'
        );

    radioButtons.forEach(radio => {
radio.addEventListener("change", (event) => {

    event.preventDefault();
    event.stopPropagation();

    selectedAnswer = radio.value;

});

    });


    // =================================================
    // SUBMIT ANSWER
    // =================================================

    const submitButton =
        document.getElementById(
            "submitAnswerBtn"
        );

   submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    submitAnswer(event);
});


    // =================================================
    // NEXT QUESTION
    // =================================================

    const nextButton =
        document.getElementById(
            "nextQuestionBtn"
        );

    nextButton.addEventListener(
        "click",
        goToNextQuestion
    );
}


// =====================================================
// SUBMIT ANSWER FUNCTION
// =====================================================

function submitAnswer(event) {

    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (answered) {
        return;
    }

    if (!selectedAnswer) {
        alert("Please select an answer first.");
        return;
    }

    const q = questions[currentQuestionIndex];

    if (!q) {
        console.error("Current question not found.");
        return;
    }

    answered = true;

    const submitButton = document.getElementById("submitAnswerBtn");
    const result = document.getElementById("answerResult");
    const explanationBox = document.getElementById("explanationBox");
    const nextButton = document.getElementById("nextQuestionBtn");

    const correctAnswer = String(q.correct_answer || "")
        .trim()
        .toUpperCase();

    const userAnswer = String(selectedAnswer)
        .trim()
        .toUpperCase();

    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
        score++;
    }

    // Show score
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.textContent = score;
    }

    // Show correct/wrong answer
    if (result) {
        result.innerHTML = isCorrect
            ? '<div class="correct-message">✓ Correct Answer!</div>'
            : `<div class="wrong-message">
                   ✗ Wrong Answer<br><br>
                   Correct Answer: <strong>${correctAnswer}</strong>
               </div>`;
    }

    // Show explanation
    if (explanationBox) {
        explanationBox.innerHTML = `
            <div class="explanation-title">💡 Explanation</div>
            <p>${q.explanation || "Explanation is not available."}</p>
            ${q.source ? `<small>Source: ${q.source}</small>` : ""}
        `;

        explanationBox.style.display = "block";
    }

    // Disable options after submission
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.disabled = true;
    });

    // Update Submit button
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Answer Submitted ✓";
    }

    // Show Next Question / View Result button
    if (nextButton) {
        nextButton.style.display = "inline-block";
        nextButton.disabled = false;
        nextButton.textContent =
            currentQuestionIndex === questions.length - 1
                ? "View Result"
                : "Next Question →";
    }

    console.log("Answer checked:", {
        questionId: q.id,
        selectedAnswer: userAnswer,
        correctAnswer,
        isCorrect,
        score
    });
}


// =====================================================
// NEXT QUESTION
// =====================================================

function goToNextQuestion() {

    if (!answered) {
        alert("Please submit your answer first.");
        return;
    }

    currentQuestionIndex++;

    if (
        currentQuestionIndex >=
        questions.length
    ) {

        showFinalResult();

        return;
    }

    displayQuestion();
}


// =====================================================
// FINAL RESULT
// =====================================================

function showFinalResult() {

    const total = questions.length;

    const percentage =
        Math.round(
            (score / total) * 100
        );

    localStorage.setItem(
        "aptiprepLastResult",
        JSON.stringify({
            score: score,
            total: total,
            percentage: percentage
        })
    );


    const container =
        document.getElementById(
            "questionsContainer"
        );

    container.innerHTML = `

        <div class="final-result">

            <h2>🎉 Practice Completed!</h2>

            <div class="final-score">
                ${score} / ${total}
            </div>

            <p>
                Your Score:
                <strong>${percentage}%</strong>
            </p>

            <button
                type="button"
                onclick="location.reload()"
            >
                Retry
            </button>

            <button
                type="button"
                onclick="window.location.href='companies.html'"
            >
                Back to Companies
            </button>

        </div>

    `;
}


// =====================================================
// ERROR
// =====================================================

function showError(message) {

    const container =
        document.getElementById(
            "questionsContainer"
        );

    if (container) {

        container.innerHTML = `
            <div class="error-box">
                <h2>Something went wrong</h2>
                <p>${message}</p>
            </div>
        `;

    }
}