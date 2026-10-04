const API_URL = "https://aptiprep-1zyu.onrender.com/api";

let questions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;

let timeLeft = 20 * 60;
let timerInterval;


// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const params =
        new URLSearchParams(window.location.search);

    const companyId =
        params.get("company_id");

    if (!companyId) {

        showError(
            "Company ID is missing."
        );

        return;
    }

    loadMockTest(companyId);
});


// =====================================================
// LOAD MOCK QUESTIONS
// =====================================================

async function loadMockTest(companyId) {

    try {

        const response =
            await fetch(
                `${API_URL}/questions/company/${companyId}/mock`
            );

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );
        }

        const data =
            await response.json();

        console.log(
            "Mock questions:",
            data
        );


        if (
            !data.success ||
            !data.questions ||
            data.questions.length === 0
        ) {

            showError(
                "No MCQ questions are available for this company."
            );

            return;
        }


        questions =
            data.questions;

        currentIndex = 0;
        score = 0;

        // Company name
        setCompanyName(companyId);

        // Start 20 minute timer
        startTimer();

        // Show first question
        displayQuestion();

    }
    catch (error) {

        console.error(
            "Mock test loading error:",
            error
        );

        showError(
            "Unable to load mock test questions."
        );
    }
}


// =====================================================
// COMPANY NAME
// =====================================================

function setCompanyName(companyId) {

    const names = {

    1: "TCS Mock Test",

        2: "Infosys Mock Test",

        3: "Wipro Mock Test",

        5: "Accenture Mock Test",

        6: "Capgemini Mock Test",

        7: "HCLTech Mock Test",

        8: "Tech Mahindra Mock Test",

        9: "Zoho Mock Test",

        10: "IBM Mock Test",

        11: "Deloitte Mock Test"

    };


    const element =
        document.getElementById(
            "companyName"
        );


    element.textContent =
        names[companyId] ||
        "Company Mock Test";
}


// =====================================================
// DISPLAY QUESTION
// =====================================================

function displayQuestion() {

    const container =
        document.getElementById(
            "mockQuestionContainer"
        );

    const progress =
        document.getElementById(
            "progress"
        );

    const q =
        questions[currentIndex];


    selectedAnswer = null;
    answered = false;


    progress.textContent =
        `Question ${currentIndex + 1} of ${questions.length}`;


    container.innerHTML = `

        <div class="question-card">

            <div class="question-number">
                Question ${currentIndex + 1}
                / ${questions.length}
            </div>


            <h2 class="question-text">
                ${q.question}
            </h2>


            <button
                class="option"
                data-answer="A"
            >
                A. ${q.option_a}
            </button>


            <button
                class="option"
                data-answer="B"
            >
                B. ${q.option_b}
            </button>


            <button
                class="option"
                data-answer="C"
            >
                C. ${q.option_c}
            </button>


            <button
                class="option"
                data-answer="D"
            >
                D. ${q.option_d}
            </button>


            <button
                id="submitBtn"
                class="submit-btn"
            >
                Submit Answer
            </button>


            <div
                id="answerMessage"
                class="answer-message"
            ></div>


            <div
                id="explanation"
                class="explanation"
            >

                <strong>
                    💡 Explanation
                </strong>

                <p>
                    ${
                        q.explanation ||
                        "Explanation is not available."
                    }
                </p>


                ${
                    q.source
                    ?
                    `
                    <div class="source">
                        Source: ${q.source}
                    </div>
                    `
                    :
                    ""
                }

            </div>


            <button
                id="nextBtn"
                class="next-btn"
            >
                ${
                    currentIndex === questions.length - 1
                    ? "Finish Test"
                    : "Next Question →"
                }
            </button>

        </div>
    `;


    // =================================================
    // OPTION CLICK
    // =================================================

    document.querySelectorAll(".option").forEach(button => {

        button.addEventListener("click", () => {

            // Already submitted -> don't allow changing
            if (answered) return;

            // Remove previous selection
            document
                .querySelectorAll(".option")
                .forEach(btn => {
                    btn.classList.remove("selected");
                });

            // Select clicked option
            button.classList.add("selected");

            // Store selected answer
            selectedAnswer = button.dataset.answer;

        });

    });


    // =================================================
    // SUBMIT BUTTON
    // =================================================

    document
        .getElementById("submitBtn")
        .addEventListener(
            "click",
            submitAnswer
        );


    // =================================================
    // NEXT BUTTON
    // =================================================

    document
        .getElementById("nextBtn")
        .addEventListener(
            "click",
            nextQuestion
        );
}


// =====================================================
// SUBMIT ANSWER
// =====================================================

function submitAnswer() {

    if (answered) return;


    if (!selectedAnswer) {

        alert(
            "Please select an answer first."
        );

        return;
    }


    answered = true;


    const q =
        questions[currentIndex];


    const correctAnswer =
        String(q.correct_answer)
            .trim()
            .toUpperCase();


    const submitBtn =
        document.getElementById(
            "submitBtn"
        );


    const message =
        document.getElementById(
            "answerMessage"
        );


    const explanation =
        document.getElementById(
            "explanation"
        );


    const nextBtn =
        document.getElementById(
            "nextBtn"
        );


    const options =
        document.querySelectorAll(
            ".option"
        );


    submitBtn.disabled = true;


    // Disable all options

    options.forEach(button => {

        button.disabled = true;


        if (
            button.dataset.answer ===
            correctAnswer
        ) {

            button.classList.add(
                "correct"
            );

        }

    });


    // Check answer

    if (
        selectedAnswer ===
        correctAnswer
    ) {

        score++;


        message.innerHTML =
            "✓ Correct Answer!";

        message.style.color =
            "green";

    }
    else {

        const selected =
            document.querySelector(
                `.option[data-answer="${selectedAnswer}"]`
            );


        if (selected) {

            selected.classList.add(
                "wrong"
            );

        }


        message.innerHTML =
            `
            ✗ Wrong Answer
            <br>
            Correct Answer:
            ${correctAnswer}
            `;

        answerMessage.style.color =
            "#dc2626";
    }

    // Explanation appears ONLY AFTER SUBMIT
    explanation.style.display =
        "block";

    // Show Next button
    nextBtn.style.display =
        "inline-block";
}


// =====================================================
// NEXT QUESTION
// =====================================================

function nextQuestion() {

    if (!answered) {

        alert(
            "Please submit your answer first."
        );

        return;
    }


    currentIndex++;


    if (
        currentIndex >=
        questions.length
    ) {

        finishTest();

        return;
    }


    displayQuestion();
}


// =====================================================
// FINISH TEST
// =====================================================

function finishTest() {

    clearInterval(
        timerInterval
    );


    const total =
        questions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    const progress =
        document.getElementById(
            "progress"
        );


    const container =
        document.getElementById(
            "mockQuestionContainer"
        );


    progress.textContent =
        "Mock Test Completed";


    container.innerHTML = `

        <div class="completed">

            <h1>
                🎉 Test Completed!
            </h1>

            <h2>
                ${score} / ${total}
            </h2>

            <p>
                Percentage:
                <strong>
                    ${percentage}%
                </strong>
            </p>


            <button
                class="submit-btn"
                onclick="location.href='mock-test.html'"
            >
                Back to Mock Tests
            </button>


            <button
                class="submit-btn"
                onclick="location.reload()"
            >
                Retry Test
            </button>

        </div>

    `;
}


// =====================================================
// TIMER
// =====================================================

function startTimer() {

    updateTimer();


    timerInterval =
        setInterval(() => {

            timeLeft--;


            updateTimer();


            if (timeLeft <= 0) {

                clearInterval(
                    timerInterval
                );


                alert(
                    "⏰ Time is up!"
                );


                finishTest();

            }

        }, 1000);
}


function updateTimer() {

    const timer =
        document.getElementById(
            "timer"
        );


    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


// =====================================================
// ERROR
// =====================================================

function showError(message) {

    const container =
        document.getElementById(
            "mockQuestionContainer"
        );


    container.innerHTML = `

        <div class="error">

            <h2>
                Something went wrong
            </h2>

            <p>
                ${message}
            </p>

            <button
                class="submit-btn"
                onclick="location.href='mock-test.html'"
            >
                Back to Mock Tests
            </button>

        </div>

    `;
}