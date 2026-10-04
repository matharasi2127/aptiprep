const API_URL = "https://aptiprep-1zyu.onrender.com/api";

let questions = [];
let currentIndex = 0;
let selectedAnswer = null;
let answered = false;
let score = 0;

let timeLeft = 300;
let timerInterval = null;
let authToken = null;


/* =========================================
   START CHALLENGE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const startButton =
        document.getElementById("startChallengeBtn");

    let user;
    try {
        user = JSON.parse(localStorage.getItem("aptiprep_user") || "null");
    } catch (error) {
        user = null;
    }

    authToken = localStorage.getItem("aptiprep_token");

    if (!authToken || !Number.isInteger(Number(user?.id)) || Number(user.id) <= 0) {
        if (startButton) startButton.disabled = true;

        const intro = document.getElementById("introScreen");
        if (intro) {
            const notice = document.createElement("p");
            notice.textContent = "Please log in to take the daily challenge.";
            intro.appendChild(notice);
        }
        return;
    }

    if (startButton) {
        startButton.addEventListener("click", startChallenge);
    }

});


/* =========================================
   START
========================================= */

async function startChallenge() {

    const introScreen =
        document.getElementById("introScreen");

    const questionScreen =
        document.getElementById("questionScreen");

    if (introScreen) introScreen.style.display = "none";

    if (questionScreen) questionScreen.style.display = "block";

    await loadDailyQuestions();

}


/* =========================================
   LOAD QUESTIONS
========================================= */

async function loadDailyQuestions() {

    const container =
        document.getElementById("dailyContainer");

    if (!container) return;

    container.innerHTML = `
        <div class="question-card">
            <h2>Loading today's challenge...</h2>
            <p>Please wait...</p>
        </div>
    `;

    try {

        const response = await fetch(
            `${API_URL}/questions/daily-challenge`,
            {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }
        );

        const data = await response.json();
        if (!response.ok || !data.success) {
            throw new Error(data.message || `Server error: ${response.status}`);
        }

        console.log(
            "Daily Challenge Data:",
            data
        );


        if (data.completed) {
            clearInterval(timerInterval);
            document.getElementById("questionScreen").style.display = "none";
            document.getElementById("completedScreen").style.display = "block";
            document.getElementById("finalScore").textContent = `${data.score} / 5`;
            return;
        }

        if (!Array.isArray(data.questions) || data.questions.length !== 5) {
            throw new Error("Today's challenge must contain exactly five questions.");
        }

        questions = data.questions;
        currentIndex = Number(data.current_index || 0);
        score = Number(data.score || 0);
        selectedAnswer = null;
        answered = false;

        if (currentIndex >= questions.length) {
            throw new Error("Challenge progress is invalid.");
        }

        displayQuestion();

        startTimer();

    }
    catch (error) {

        console.error(
            "Daily Challenge Error:",
            error
        );

        container.innerHTML = `
            <div class="question-card">

                <h2>
                    ❌ Unable to load questions
                </h2>

                <p>${escapeHTML(error.message)}</p>

                <button
                    type="button"
                    class="submit-btn"
                    id="retryChallengeBtn">

                    Try Again

                </button>

            </div>
        `;

        document.getElementById("retryChallengeBtn")
            .addEventListener("click", loadDailyQuestions);

    }

}


/* =========================================
   DISPLAY QUESTION
========================================= */

function displayQuestion() {

    const question =
        questions[currentIndex];

    const container =
        document.getElementById("dailyContainer");


    selectedAnswer = null;

    answered = false;


    document.getElementById("progress").innerText =
        `Question ${currentIndex + 1} / ${questions.length}`;


    container.innerHTML = `

        <div class="question-card">

            <div class="question-number">
                Question ${currentIndex + 1}
            </div>


            <div class="question-text">
                ${escapeHTML(question.question)}
            </div>


            <div
                class="option"
                data-answer="A">

                A. ${escapeHTML(question.option_a)}

            </div>


            <div
                class="option"
                data-answer="B">

                B. ${escapeHTML(question.option_b)}

            </div>


            <div
                class="option"
                data-answer="C">

                C. ${escapeHTML(question.option_c)}

            </div>


            <div
                class="option"
                data-answer="D">

                D. ${escapeHTML(question.option_d)}

            </div>


            <div
                id="answerMessage"
                class="answer-message">
            </div>


            <div
                id="explanation"
                class="explanation">

            </div>


            <div class="button-area">

                <button
                    type="button"
                    id="submitBtn"
                    class="submit-btn">

                    Submit Answer →

                </button>


                <button
                    type="button"
                    id="nextBtn"
                    class="next-btn">

                    Next Question →

                </button>

            </div>


            <div class="source">

                Source:
                ${escapeHTML(question.source || "AptiPrep")}

            </div>

        </div>

    `;


    const options =
        document.querySelectorAll(".option");


    options.forEach(option => {

        option.addEventListener(
            "click",
            () => selectOption(option)
        );

    });


    document
        .getElementById("submitBtn")
        .addEventListener(
            "click",
            submitAnswer
        );


    document
        .getElementById("nextBtn")
        .addEventListener(
            "click",
            nextQuestion
        );

}


/* =========================================
   SELECT OPTION
========================================= */

function selectOption(option) {

    if (answered) {
        return;
    }


    document
        .querySelectorAll(".option")
        .forEach(item => {

            item.classList.remove(
                "selected"
            );

        });


    option.classList.add("selected");

    selectedAnswer =
        option.dataset.answer;

}


/* =========================================
   SUBMIT ANSWER
========================================= */

async function submitAnswer() {
    if (answered) return;

    if (!selectedAnswer) {
        alert("Please select an answer first.");
        return;
    }

    const question = questions[currentIndex];
    const submitButton = document.getElementById("submitBtn");
    submitButton.disabled = true;

    try {
        const response = await fetch(
            `${API_URL}/questions/daily-challenge/answer`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`
                },
                body: JSON.stringify({
                    question_id: question.id,
                    selected_answer: selectedAnswer
                })
            }
        );

        const data = await response.json();
        if (!response.ok || !data.success) {
            throw new Error(data.message || "Unable to save answer.");
        }

        answered = true;
        score = Number(data.score || 0);

        const correctAnswer = String(data.correct_answer || "")
            .trim()
            .toUpperCase();
        const options = document.querySelectorAll(".option");

        options.forEach(option => {
            option.style.pointerEvents = "none";

            if (option.dataset.answer === correctAnswer) {
                option.classList.add("correct");
            }

            if (
                option.dataset.answer === selectedAnswer &&
                !data.correct
            ) {
                option.classList.add("wrong");
            }
        });

        const message = document.getElementById("answerMessage");
        message.textContent = data.correct
            ? "Correct answer!"
            : `Wrong answer. Correct answer: ${correctAnswer}`;
        message.style.color = data.correct ? "#16a34a" : "#dc2626";

        const explanation = document.getElementById("explanation");
        explanation.innerHTML = `
            <strong>Explanation:</strong><br>
            ${escapeHTML(question.explanation || "Explanation not available.")}
        `;
        explanation.style.display = "block";

        const scoreElement = document.getElementById("score");
        if (scoreElement) scoreElement.textContent = String(score);

        const nextButton = document.getElementById("nextBtn");
        nextButton.style.display = "inline-block";
        if (data.completed) nextButton.textContent = "View Result";
    } catch (error) {
        console.error("Submit answer error:", error);
        alert(error.message);
        submitButton.disabled = false;
    }
}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    if (!answered) {
        return;
    }


    currentIndex++;


    if (
        currentIndex >= questions.length
    ) {

        finishChallenge();

        return;

    }


    displayQuestion();

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    clearInterval(timerInterval);


    timeLeft = 300;


    updateTimer();


    timerInterval = setInterval(() => {

        timeLeft--;


        updateTimer();


        if (timeLeft <= 0) {

            clearInterval(
                timerInterval
            );

            loadDailyQuestions();

        }

    }, 1000);

}


/* =========================================
   UPDATE TIMER
========================================= */

function updateTimer() {

    const timer =
        document.getElementById("timer");


    const minutes =
        Math.floor(timeLeft / 60);


    const seconds =
        timeLeft % 60;


    timer.innerText =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


/* =========================================
   FINISH
========================================= */

function finishChallenge() {

    clearInterval(timerInterval);


    document
        .getElementById("questionScreen")
        .style.display = "none";


    document
        .getElementById("completedScreen")
        .style.display = "block";


    document
        .getElementById("finalScore")
        .innerText =
        `${score} / ${questions.length}`;

}


function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}