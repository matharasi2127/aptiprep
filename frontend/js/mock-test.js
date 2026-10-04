const API_URL = "https://aptiprep-1zyu.onrender.com/api";

let questions = [];

let currentIndex = 0;

let score = 0;

let selectedAnswer = null;

let answered = false;

let timeLeft = 20 * 60;

let timerInterval;


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const companyId =
            params.get("company_id");

        if (!companyId) {

            showError(
                "Company ID is missing."
            );

            return;
        }

        loadMockQuestions(companyId);

    }
);


// =====================================================
// LOAD QUESTIONS
// =====================================================

async function loadMockQuestions(companyId) {

    const container =
        document.getElementById(
            "mockQuestionContainer"
        );

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
            "Mock test questions:",
            data
        );


        if (
            !data.success ||
            !data.questions ||
            data.questions.length === 0
        ) {

            showError(
                "No questions available for this company."
            );

            return;
        }


        questions =
            data.questions;

        startTimer();

        displayQuestion();

    } catch (error) {

        console.error(
            "Mock test error:",
            error
        );

        showError(
            "Unable to load mock test questions."
        );
    }
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

        <div class="mock-question-card">

            <h2 class="question-text">
                ${q.question}
            </h2>


            <button
                class="mock-option"
                data-answer="A"
            >
                A. ${q.option_a}
            </button>


            <button
                class="mock-option"
                data-answer="B"
            >
                B. ${q.option_b}
            </button>


            <button
                class="mock-option"
                data-answer="C"
            >
                C. ${q.option_c}
            </button>


            <button
                class="mock-option"
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
                    ${q.explanation || ""}
                </p>

                ${
                    q.source
                    ? `<small>Source: ${q.source}</small>`
                    : ""
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


    // Select option

    document
        .querySelectorAll(".mock-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    if (answered) return;

                    document
                        .querySelectorAll(
                            ".mock-option"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "selected"
                            )
                        );

                    button.classList.add(
                        "selected"
                    );

                    selectedAnswer =
                        button.dataset.answer;

                }
            );

        });


    // Submit

    document
        .getElementById("submitBtn")
        .addEventListener(
            "click",
            submitAnswer
        );


    // Next

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
            "Please select an answer."
        );

        return;
    }


    answered = true;


    const q =
        questions[currentIndex];


    const options =
        document.querySelectorAll(
            ".mock-option"
        );


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


    submitBtn.disabled = true;


    options.forEach(btn => {

        btn.disabled = true;


        if (
            btn.dataset.answer ===
            q.correct_answer
        ) {

            btn.classList.add(
                "correct"
            );

        }

    });


    if (
        selectedAnswer ===
        q.correct_answer
    ) {

        score++;


        message.innerHTML =
            "✓ Correct Answer!";

    } else {

        const selected =
            document.querySelector(
                `.mock-option[data-answer="${selectedAnswer}"]`
            );

        if (selected) {

            selected.classList.add(
                "wrong"
            );

        }


        message.innerHTML =
            `✗ Wrong Answer — Correct Answer: ${q.correct_answer}`;

    }


    explanation.style.display =
        "block";


    nextBtn.style.display =
        "inline-block";
}


// =====================================================
// NEXT QUESTION
// =====================================================

function nextQuestion() {

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


    const container =
        document.getElementById(
            "mockQuestionContainer"
        );


    document.getElementById(
        "progress"
    ).textContent =
        "Test Completed";


    container.innerHTML = `

        <div class="mock-question-card"
             style="text-align:center;">

            <h2>
                🎉 Mock Test Completed!
            </h2>

            <h1>
                ${score} / ${total}
            </h1>

            <p>
                Score:
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
                    "Time is up!"
                );

                finishTest();

            }

        }, 1000);
}


function updateTimer() {

    const minutes =
        Math.floor(
            timeLeft / 60
        );

    const seconds =
        timeLeft % 60;


    document.getElementById(
        "timer"
    ).textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


// =====================================================
// ERROR
// =====================================================

function showError(message) {

    document.getElementById(
        "mockQuestionContainer"
    ).innerHTML = `

        <div class="error">

            <h2>
                Something went wrong
            </h2>

            <p>
                ${message}
            </p>

        </div>

    `;
}