const API_URL = "https://aptiprep-1zyu.onrender.com/api";

let companyId = null;
let topicId = null;

let questions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const params =
        new URLSearchParams(window.location.search);

    companyId = params.get("company");
    topicId = params.get("topic");


    if (!companyId || !topicId) {

        showPageError(
            "Company or topic was not selected."
        );

        return;
    }


    loadCompany();
    loadQuestions();


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

});


/* =========================================
   LOAD COMPANY
========================================= */

async function loadCompany() {

    try {

        const response =
            await fetch(
                `${API_URL}/companies/${companyId}`
            );


        const data =
            await response.json();


        if (!response.ok || !data.success) {
            throw new Error(
                "Unable to load company"
            );
        }


        document.getElementById(
            "companyBadge"
        ).textContent =
            data.company.name;


        document.title =
            `${data.company.name} Aptitude | AptiPrep`;


    } catch (error) {

        console.error(error);

    }

}


/* =========================================
   LOAD QUESTIONS
========================================= */

async function loadQuestions() {

    const container =
        document.getElementById(
            "questionContainer"
        );


    try {

        const response =
            await fetch(
                `${API_URL}/questions/topic/${topicId}`
            );


        const data =
            await response.json();


        if (!response.ok || !data.success) {

            throw new Error(
                data.message ||
                "Unable to load questions"
            );

        }


        questions =
            data.questions;


        if (!questions.length) {

            container.innerHTML = `

                <div class="empty-state">

                    <h2>
                        Questions Coming Soon
                    </h2>

                    <p>
                        Questions for this topic have not been added yet.
                    </p>

                    <a
                        href="companies.html"
                        class="btn btn-primary"
                    >
                        ← Back to Companies
                    </a>

                </div>

            `;

            document.getElementById(
                "submitBtn"
            ).style.display = "none";

            return;
        }


        document.getElementById(
            "totalQuestions"
        ).textContent =
            questions.length;


        displayQuestion();


    } catch (error) {

        console.error(
            "Question loading error:",
            error
        );


        container.innerHTML = `

            <div class="error-message">

                <h2>
                    Unable to Load Questions
                </h2>

                <p>
                    ${error.message}
                </p>

                <button
                    class="btn btn-primary"
                    onclick="loadQuestions()"
                >
                    Try Again
                </button>

            </div>

        `;

    }

}


/* =========================================
   DISPLAY QUESTION
========================================= */

function displayQuestion() {

    const question =
        questions[currentIndex];


    const container =
        document.getElementById(
            "questionContainer"
        );


    selectedAnswer = null;
    answered = false;


    document.getElementById(
        "submitBtn"
    ).disabled = true;


    document.getElementById(
        "submitBtn"
    ).style.display = "inline-flex";


    document.getElementById(
        "nextBtn"
    ).style.display = "none";


    document.getElementById(
        "answerResult"
    ).style.display = "none";


    document.getElementById(
        "explanationBox"
    ).style.display = "none";


    document.getElementById(
        "currentQuestion"
    ).textContent =
        currentIndex + 1;


    const progress =
        ((currentIndex + 1) /
            questions.length) * 100;


    document.getElementById(
        "progressBar"
    ).style.width =
        `${progress}%`;


    container.innerHTML = `

        <div class="question-number">
            Question ${currentIndex + 1}
        </div>


        <h2 class="question-text">
            ${question.question}
        </h2>


        <div class="options-container">

            ${createOption(
                "A",
                question.option_a
            )}

            ${createOption(
                "B",
                question.option_b
            )}

            ${createOption(
                "C",
                question.option_c
            )}

            ${createOption(
                "D",
                question.option_d
            )}

        </div>

    `;


    addOptionEvents();

}


/* =========================================
   CREATE OPTION
========================================= */

function createOption(letter, text) {

    return `

        <label
            class="option"
            data-answer="${letter}"
        >

            <input
                type="radio"
                name="answer"
                value="${letter}"
            >

            <span class="option-letter">
                ${letter}
            </span>

            <span class="option-text">
                ${text}
            </span>

        </label>

    `;

}


/* =========================================
   OPTION CLICK
========================================= */

function addOptionEvents() {

    const options =
        document.querySelectorAll(
            ".option"
        );


    options.forEach(function (option) {

        option.addEventListener(
            "click",
            function () {

                if (answered) {
                    return;
                }


                options.forEach(function (item) {

                    item.classList.remove(
                        "selected"
                    );

                });


                option.classList.add(
                    "selected"
                );


                selectedAnswer =
                    option.dataset.answer;


                document.getElementById(
                    "submitBtn"
                ).disabled = false;

            }
        );

    });

}


/* =========================================
   SUBMIT ANSWER
========================================= */

function submitAnswer() {

    if (!selectedAnswer || answered) {
        return;
    }


    answered = true;


    const question =
        questions[currentIndex];


    const correctAnswer =
        question.correct_answer
            .toUpperCase();


    const options =
        document.querySelectorAll(
            ".option"
        );


    options.forEach(function (option) {

        const answer =
            option.dataset.answer;


        if (answer === correctAnswer) {

            option.classList.add(
                "correct"
            );

        }


        if (
            answer === selectedAnswer &&
            selectedAnswer !== correctAnswer
        ) {

            option.classList.add(
                "wrong"
            );

        }

    });


    const result =
        document.getElementById(
            "answerResult"
        );


    result.style.display = "block";


    if (
        selectedAnswer ===
        correctAnswer
    ) {

        score++;


        result.className =
            "answer-result correct-result";


        result.innerHTML = `

            <strong>✓ Correct!</strong>

            <span>
                Great job! Your answer is correct.
            </span>

        `;

    } else {

        result.className =
            "answer-result wrong-result";


        result.innerHTML = `

            <strong>✗ Wrong!</strong>

            <span>
                Correct Answer:
                <b>${correctAnswer}</b>
            </span>

        `;

    }


    document.getElementById(
        "score"
    ).textContent = score;


    /* SHOW EXPLANATION */

    const explanationBox =
        document.getElementById(
            "explanationBox"
        );


    const explanationContent =
        document.getElementById(
            "explanationContent"
        );


    explanationContent.innerHTML =
        formatExplanation(
            question.explanation
        );


    explanationBox.style.display =
        "block";


    document.getElementById(
        "submitBtn"
    ).style.display = "none";


    if (
        currentIndex <
        questions.length - 1
    ) {

        document.getElementById(
            "nextBtn"
        ).style.display =
            "inline-flex";

    } else {

        document.getElementById(
            "nextBtn"
        ).textContent =
            "View Result →";


        document.getElementById(
            "nextBtn"
        ).style.display =
            "inline-flex";

    }

}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    if (
        currentIndex >=
        questions.length - 1
    ) {

        goToResult();

        return;
    }


    currentIndex++;

    displayQuestion();

}


/* =========================================
   FORMAT EXPLANATION
========================================= */

function formatExplanation(text) {

    if (!text) {

        return `
            <p>
                Explanation will be available soon.
            </p>
        `;

    }


    const steps =
        text
            .split("\n")
            .filter(line => line.trim() !== "");


    if (steps.length === 1) {

        return `
            <p>
                ${steps[0]}
            </p>
        `;

    }


    return steps
        .map(function (step, index) {

            return `

                <div class="explanation-step">

                    <span>
                        ${index + 1}
                    </span>

                    <p>
                        ${step}
                    </p>

                </div>

            `;

        })
        .join("");

}


/* =========================================
   RESULT PAGE
========================================= */

function goToResult() {

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    sessionStorage.setItem(
        "quizScore",
        score
    );


    sessionStorage.setItem(
        "quizTotal",
        questions.length
    );


    sessionStorage.setItem(
        "quizPercentage",
        percentage
    );


    sessionStorage.setItem(
        "quizCompanyId",
        companyId
    );


    sessionStorage.setItem(
        "quizTopicId",
        topicId
    );


    window.location.href =
        `result.html?company=${companyId}&topic=${topicId}`;

}


/* =========================================
   ERROR
========================================= */

function showPageError(message) {

    document.getElementById(
        "questionContainer"
    ).innerHTML = `

        <div class="error-message">

            <h2>
                Something went wrong
            </h2>

            <p>
                ${message}
            </p>

            <a
                href="companies.html"
                class="btn btn-primary"
            >
                ← Back to Companies
            </a>

        </div>

    `;

}