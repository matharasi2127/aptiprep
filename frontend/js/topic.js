const API_URL = "https://aptiprep-1zyu.onrender.com/api";

let questions = [];
const QUESTIONS_PER_PAGE = 10;
let currentPage = 0;
let score = 0;
const answerStates = new Map();

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

        currentPage = 0;
        score = 0;

        displayQuestionPage();
        renderPagination();

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
// DISPLAY CURRENT TOPIC PAGE
// =====================================================

function displayQuestionPage() {
    const container = document.getElementById("questionsContainer");
    if (!container) return;

    const firstQuestionIndex = currentPage * QUESTIONS_PER_PAGE;
    const pageQuestions = questions.slice(
        firstQuestionIndex,
        firstQuestionIndex + QUESTIONS_PER_PAGE
    );

    container.innerHTML = pageQuestions.map((question, pageIndex) => {
        const questionIndex = firstQuestionIndex + pageIndex;
        const savedAnswer = answerStates.get(question.id);
        const selectedAnswer = savedAnswer ? savedAnswer.selectedAnswer : "";

        return `
            <div class="question-card" data-question-index="${questionIndex}">
                <div class="question-number">
                    Question ${questionIndex + 1} / ${questions.length}
                </div>

                <h2 class="question-text">${question.question}</h2>

                <div class="options">
                    ${["A", "B", "C", "D"].map(option => `
                        <label class="option">
                            <input
                                type="radio"
                                name="answer-${questionIndex}"
                                value="${option}"
                                data-question-index="${questionIndex}"
                                ${selectedAnswer === option ? "checked" : ""}
                                ${savedAnswer && savedAnswer.answered ? "disabled" : ""}
                            >
                            <span>${option}</span>
                            ${question[`option_${option.toLowerCase()}`] || ""}
                        </label>
                    `).join("")}
                </div>

                <button
                    type="button"
                    class="submit-answer-btn topic-submit-answer"
                    data-question-index="${questionIndex}"
                    ${savedAnswer && savedAnswer.answered ? "disabled" : ""}
                >${savedAnswer && savedAnswer.answered ? "Answer Submitted ✓" : "Submit Answer"}</button>

                <div id="answerResult-${questionIndex}" class="answer-result"></div>
                <div id="explanationBox-${questionIndex}" class="explanation-box"></div>
            </div>
        `;
    }).join("");

    container.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener("change", () => {
            const question = questions[Number(radio.dataset.questionIndex)];
            const savedAnswer = answerStates.get(question.id) || {};
            answerStates.set(question.id, {
                ...savedAnswer,
                selectedAnswer: radio.value
            });
        });
    });

    container.querySelectorAll(".topic-submit-answer").forEach(button => {
        button.addEventListener("click", () => {
            submitAnswer(Number(button.dataset.questionIndex));
        });
    });

    pageQuestions.forEach((question, pageIndex) => {
        const questionIndex = firstQuestionIndex + pageIndex;
        const savedAnswer = answerStates.get(question.id);
        if (savedAnswer && savedAnswer.answered) {
            showAnswerFeedback(question, questionIndex, savedAnswer);
        }
    });

    updateQuestionRange();
}


// =====================================================
// SUBMIT ANSWER FUNCTION
// =====================================================

function submitAnswer(questionIndex) {
    const question = questions[questionIndex];
    const answerState = question && answerStates.get(question.id);

    if (!question || !answerState || answerState.answered) return;

    if (!answerState.selectedAnswer) {
        alert("Please select an answer first.");
        return;
    }

    const correctAnswer = String(question.correct_answer || "")
        .trim()
        .toUpperCase();
    const userAnswer = String(answerState.selectedAnswer)
        .trim()
        .toUpperCase();
    const isCorrect = userAnswer === correctAnswer;

    answerState.answered = true;
    answerState.isCorrect = isCorrect;
    answerStates.set(question.id, answerState);

    score = Array.from(answerStates.values())
        .filter(answer => answer.answered && answer.isCorrect).length;

    const scoreElement = document.getElementById("score");
    if (scoreElement) scoreElement.textContent = score;

    showAnswerFeedback(question, questionIndex, answerState);
    renderPagination();
}


function showAnswerFeedback(question, questionIndex, answerState) {
    const result = document.getElementById(`answerResult-${questionIndex}`);
    const explanationBox = document.getElementById(`explanationBox-${questionIndex}`);
    const correctAnswer = String(question.correct_answer || "")
        .trim()
        .toUpperCase();

    if (result) {
        result.innerHTML = answerState.isCorrect
            ? '<div class="correct-message">✓ Correct Answer!</div>'
            : `<div class="wrong-message">
                   ✗ Wrong Answer<br><br>
                   Correct Answer: <strong>${correctAnswer}</strong>
               </div>`;
    }

    if (explanationBox) {
        explanationBox.innerHTML = `
            <div class="explanation-title">💡 Explanation</div>
            <p>${question.explanation || "Explanation is not available."}</p>
            ${question.source ? `<small>Source: ${question.source}</small>` : ""}
        `;
        explanationBox.style.display = "block";
    }
}


function updateQuestionRange() {
    const rangeElement = document.getElementById("questionRange");
    if (!rangeElement || questions.length === 0) return;

    const firstQuestion = currentPage * QUESTIONS_PER_PAGE + 1;
    const lastQuestion = Math.min(
        firstQuestion + QUESTIONS_PER_PAGE - 1,
        questions.length
    );

    rangeElement.textContent = `${firstQuestion}-${lastQuestion}`;

    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
        const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
        progressBar.style.width = `${((currentPage + 1) / totalPages) * 100}%`;
    }
}


function renderPagination() {
    const pagination = document.getElementById("topicPagination");
    const pageNumbers = document.getElementById("topicPageNumbers");
    if (!pagination || !pageNumbers) return;

    const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
    pagination.hidden = questions.length === 0;

    document.getElementById("topicPreviousPage").disabled = currentPage === 0;
    document.getElementById("topicNextPage").disabled = currentPage >= totalPages - 1;

    const pages = getVisiblePages(currentPage + 1, totalPages);
    pageNumbers.innerHTML = pages.map(page => page === "..."
        ? '<span class="topic-page-ellipsis" aria-hidden="true">...</span>'
        : `<button
                type="button"
                class="topic-page-number${page === currentPage + 1 ? " is-active" : ""}"
                data-page="${page}"
                aria-label="Page ${page}"
                aria-current="${page === currentPage + 1 ? "page" : "false"}"
            >${page}</button>`
    ).join("");

    pageNumbers.querySelectorAll(".topic-page-number").forEach(button => {
        button.addEventListener("click", () => {
            changePage(Number(button.dataset.page) - 1);
        });
    });

    document.getElementById("topicPreviousPage").onclick = () => {
        if (currentPage > 0) changePage(currentPage - 1);
    };

    document.getElementById("topicNextPage").onclick = () => {
        if (currentPage < totalPages - 1) changePage(currentPage + 1);
    };

    const allQuestionsAnswered = questions.every(question => {
        const answer = answerStates.get(question.id);
        return answer && answer.answered;
    });
    const viewResultButton = document.getElementById("topicViewResult");
    viewResultButton.hidden = !allQuestionsAnswered;
    viewResultButton.onclick = showFinalResult;

    document.getElementById("topicRetryPage").onclick = () => {
        const firstQuestionIndex = currentPage * QUESTIONS_PER_PAGE;
        const pageQuestions = questions.slice(
            firstQuestionIndex,
            firstQuestionIndex + QUESTIONS_PER_PAGE
        );
        pageQuestions.forEach(question => answerStates.delete(question.id));
        score = Array.from(answerStates.values())
            .filter(answer => answer.answered && answer.isCorrect).length;

        const scoreElement = document.getElementById("score");
        if (scoreElement) scoreElement.textContent = score;
        displayQuestionPage();
        renderPagination();
    };
}


function getVisiblePages(current, total) {
    if (total <= 5) {
        return Array.from({ length: total }, (_, index) => index + 1);
    }

    if (current <= 3) return [1, 2, 3, "...", total];
    if (current >= total - 2) {
        return [1, "...", total - 2, total - 1, total];
    }

    return [1, "...", current - 1, current, current + 1, "...", total];
}


function changePage(pageIndex) {
    const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
    if (pageIndex < 0 || pageIndex >= totalPages || pageIndex === currentPage) return;

    currentPage = pageIndex;
    displayQuestionPage();
    renderPagination();
    document.getElementById("questionsContainer").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =====================================================
// FINAL RESULT
// =====================================================

function showFinalResult() {

    const total = questions.length;
    document.getElementById("topicPagination").hidden = true;

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