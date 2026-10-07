// =====================================================
// AptiPrep - Questions Practice
// frontend/js/questions.js
// =====================================================
window.addEventListener("beforeunload", function () {
    console.log("PAGE UNLOADING");
    console.trace();
});

const API_URL = "https://aptiprep-1zyu.onrender.com/api";

// =====================================================
// GLOBAL VARIABLES
// =====================================================

let questions = [];
let currentIndex = 0;
let selectedAnswer = null;
let answered = false;
let score = 0;

// =====================================================
// URL PARAMETERS
// =====================================================

const params = new URLSearchParams(window.location.search);

const topicId = params.get("topic_id");
const companyId = params.get("company_id");

// =====================================================
// DOM ELEMENTS
// =====================================================

const questionNumber =
    document.getElementById("questionNumber");

const totalQuestions =
    document.getElementById("totalQuestions");

const topicTitle =
    document.getElementById("topicTitle");

const progress =
    document.getElementById("progress");

const questionText =
    document.getElementById("questionText");

const optionA =
    document.getElementById("optionA");

const optionB =
    document.getElementById("optionB");

const optionC =
    document.getElementById("optionC");

const optionD =
    document.getElementById("optionD");

const submitBtn =
    document.getElementById("submitBtn");

const nextBtn =
    document.getElementById("nextBtn");

const answerMessage =
    document.getElementById("answerMessage");

const explanation =
    document.getElementById("explanation");

const explanationText =
    document.getElementById("explanationText");


// =====================================================
// GET LOGGED-IN USER
// =====================================================

function getLoggedInUser() {

    const userData =
        localStorage.getItem("aptiprep_user");

    if (!userData) {

        console.error(
            "No logged-in user found."
        );

        return null;
    }

    try {

        const user =
            JSON.parse(userData);

        console.log(
            "Logged-in user:",
            user
        );

        return user;

    } catch (error) {

        console.error(
            "Unable to read logged-in user:",
            error
        );

        return null;
    }
}


// =====================================================
// GET USER ID
// =====================================================

function getUserId() {

    const user =
        getLoggedInUser();

    if (!user) {
        return null;
    }

    return (
        user.id ||
        user.user_id ||
        user.userId ||
        null
    );
}


// =====================================================
// PAGE LOAD
// =====================================================

console.log(
    "================================="
);

console.log(
    "AptiPrep Questions JS Loaded"
);

console.log(
    "Topic ID:",
    topicId
);

console.log(
    "Company ID:",
    companyId
);

console.log(
    "================================="
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "AptiPrep Questions Page Ready"
        );

        const userId =
            getUserId();

        if (!userId) {

            alert(
                "Please login first."
            );

            window.location.href =
                "login.html";

            return;
        }

        if (!topicId) {

            alert(
                "Topic ID is missing."
            );

            return;
        }

        // Setup answer options
        setupOptionButtons();

        // =================================================
        // SUBMIT BUTTON
        // ONLY ONE CLICK HANDLER
        // =================================================

        if (submitBtn) {

            submitBtn.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    event.stopPropagation();

                    console.log(
                        "SUBMIT BUTTON CLICKED"
                    );

                    submitAnswer();

                }
            );
        }


        // =================================================
        // NEXT BUTTON
        // ONLY ONE CLICK HANDLER
        // =================================================

        if (nextBtn) {

            nextBtn.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    event.stopPropagation();

                    console.log(
                        "NEXT BUTTON CLICKED"
                    );

                    nextQuestion();

                }
            );
        }


        // Load questions
        loadQuestions();

    }
);


// =====================================================
// SETUP OPTION BUTTONS
// =====================================================

function setupOptionButtons() {

    const options = [

        optionA,
        optionB,
        optionC,
        optionD

    ];

    options.forEach(
        function (option) {

            if (!option) {
                return;
            }

            option.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    event.stopPropagation();


                    if (answered) {
                        return;
                    }


                    // Remove previous selection

                    options.forEach(
                        function (item) {

                            if (item) {

                                item.classList.remove(
                                    "selected"
                                );

                            }

                        }
                    );


                    // Select current option

                    option.classList.add(
                        "selected"
                    );


                    selectedAnswer =
                        option.dataset.option;


                    console.log(
                        "Selected answer:",
                        selectedAnswer
                    );

                }
            );

        }
    );
}


// =====================================================
// LOAD QUESTIONS
// =====================================================

async function loadQuestions() {

    try {

        let url;


        if (companyId) {

            url =
                `${API_URL}/questions/topic/${topicId}?company_id=${companyId}`;

        } else {

            url =
                `${API_URL}/questions/topic/${topicId}`;

        }


        console.log(
            "Loading questions from:",
            url
        );


        const response =
            await fetch(url);


        console.log(
            "Questions API status:",
            response.status
        );


        if (!response.ok) {

            throw new Error(
                `Questions API failed: ${response.status}`
            );

        }


        const data =
            await response.json();


        console.log(
            "Questions API response:",
            data
        );


        if (
            !data.success ||
            !Array.isArray(data.questions)
        ) {

            throw new Error(
                "Invalid questions response."
            );

        }


        questions =
            data.questions;


        if (
            questions.length === 0
        ) {

            alert(
                "No questions available for this topic."
            );

            return;

        }


        console.log(
            "Questions loaded:",
            questions.length
        );


        currentIndex = 0;

        score = 0;


        displayQuestion();


    } catch (error) {

        console.error(
            "Question loading error:",
            error
        );


        if (questionText) {

            questionText.textContent =
                "Unable to load questions.";

        }

    }
}


// =====================================================
// DISPLAY QUESTION
// =====================================================

function displayQuestion() {

    if (
        !questions ||
        questions.length === 0
    ) {

        return;

    }


    const question =
        questions[currentIndex];


    if (!question) {

        return;

    }


    console.log(
        "Displaying question:",
        question
    );


    // Reset state

    selectedAnswer = null;

    answered = false;


    // Question number

    if (questionNumber) {

        questionNumber.textContent =
            `Question ${currentIndex + 1}`;

    }


    // Total

    if (totalQuestions) {

        totalQuestions.textContent =
            questions.length;

    }


    // Current small number

    const currentQuestionNumber =
        document.getElementById(
            "currentQuestionNumber"
        );


    if (currentQuestionNumber) {

        currentQuestionNumber.textContent =
            currentIndex + 1;

    }


    // Topic

    if (topicTitle) {

        topicTitle.textContent =
            question.topic_name ||
            question.topic ||
            "Aptitude Practice";

    }


    // Question

    if (questionText) {

        questionText.textContent =
            question.question || "";

    }


    // Options

    setOption(
        optionA,
        "A",
        question.option_a
    );

    setOption(
        optionB,
        "B",
        question.option_b
    );

    setOption(
        optionC,
        "C",
        question.option_c
    );

    setOption(
        optionD,
        "D",
        question.option_d
    );


    // Progress

    if (progress) {

        const percentage =
            (
                (currentIndex + 1) /
                questions.length
            ) * 100;


        progress.style.width =
            `${percentage}%`;

    }


    // Reset option styles

    resetOptionStyles();


    // Reset answer message

    if (answerMessage) {

        answerMessage.textContent = "";

        answerMessage.className =
            "answer-message";

        answerMessage.style.display =
            "none";

    }


    // Hide explanation

    if (explanation) {

        explanation.style.display =
            "none";

    }


    if (explanationText) {

        explanationText.textContent =
            "";

    }


    // Submit visible

    if (submitBtn) {

        submitBtn.style.display =
            "inline-flex";

        submitBtn.disabled =
            false;

    }


    // Next hidden

    if (nextBtn) {

        nextBtn.style.display =
            "none";

        nextBtn.disabled =
            false;

    }

}


// =====================================================
// SET OPTION
// =====================================================

function setOption(
    element,
    letter,
    value
) {

    if (!element) {

        return;

    }


    element.dataset.option =
        letter;


    const textElement =
        element.querySelector(
            ".option-text"
        );


    if (textElement) {

        textElement.textContent =
            value || "";

    } else {

        element.textContent =
            value || "";

    }

}


// =====================================================
// RESET OPTION STYLES
// =====================================================

function resetOptionStyles() {

    const options = [

        optionA,
        optionB,
        optionC,
        optionD

    ];


    options.forEach(
        function (option) {

            if (!option) {
                return;
            }


            option.classList.remove(
                "selected"
            );

            option.classList.remove(
                "correct"
            );

            option.classList.remove(
                "wrong"
            );


            option.disabled =
                false;

        }
    );

}


// =====================================================
// SUBMIT ANSWER
// =====================================================

function submitAnswer() {

    console.log(
        "submitAnswer() FUNCTION CALLED"
    );


    if (answered) {

        console.log(
            "Already answered."
        );

        return;

    }


    if (!selectedAnswer) {

        alert(
            "Please select an answer first."
        );

        return;

    }


    const question =
        questions[currentIndex];


    if (!question) {

        console.error(
            "Question not found."
        );

        return;

    }


    answered = true;


    const correctAnswer =
        String(
            question.correct_answer || ""
        )
        .trim()
        .toUpperCase();


    const userAnswer =
        String(
            selectedAnswer || ""
        )
        .trim()
        .toUpperCase();


    const isCorrect =
        userAnswer === correctAnswer;


    if (isCorrect) {

        score++;

    }


    // Show result

    showAnswerResult(
        question,
        isCorrect
    );


    // Hide Submit

    if (submitBtn) {

        submitBtn.style.display =
            "none";

    }


    // Show Next

    if (nextBtn) {

        nextBtn.style.display =
            "inline-flex";

        nextBtn.disabled =
            false;

        nextBtn.textContent =
            "Next Question →";

    }


    // Save attempt in background

    savePracticeAttempt(
        question,
        userAnswer
    )
    .catch(
        function (error) {

            console.error(
                "Practice attempt save error:",
                error
            );

        }
    );

}


// =====================================================
// SHOW ANSWER RESULT
// =====================================================

function showAnswerResult(
    question,
    isCorrect
) {

    const options = [

        optionA,
        optionB,
        optionC,
        optionD

    ];


    // Disable options

    options.forEach(
        function (option) {

            if (option) {

                option.disabled =
                    true;

            }

        }
    );


    // Correct option

    const correctAnswer =
        String(
            question.correct_answer || ""
        )
        .trim()
        .toUpperCase();


    const correctOption =
        options.find(
            function (option) {

                return (
                    option &&
                    option.dataset.option ===
                    correctAnswer
                );

            }
        );


    if (correctOption) {

        correctOption.classList.add(
            "correct"
        );

    }


    // Wrong selected option

    if (!isCorrect) {

        const selectedOption =
            options.find(
                function (option) {

                    return (
                        option &&
                        option.dataset.option ===
                        selectedAnswer
                    );

                }
            );


        if (selectedOption) {

            selectedOption.classList.add(
                "wrong"
            );

        }

    }


    // Answer message

    if (answerMessage) {

        if (isCorrect) {

            answerMessage.textContent =
                "✓ Correct Answer!";

            answerMessage.className =
                "answer-message correct-message";

        } else {

            answerMessage.textContent =
                `✗ Wrong Answer! Correct answer is ${question.correct_answer}`;

            answerMessage.className =
                "answer-message wrong-message";

        }


        answerMessage.style.display =
            "block";

    }


    // Explanation

    if (explanation) {

        explanation.style.display =
            "block";

    }


    if (explanationText) {

        explanationText.textContent =
            question.explanation ||
            "Explanation not available.";

    }

}


// =====================================================
// SAVE PRACTICE ATTEMPT
// =====================================================

async function savePracticeAttempt(
    question,
    selectedAnswerValue,
    isCorrect
) {

    const userId = getUserId();
    const token =
        localStorage.getItem("aptiprep_token");


    if (!userId || !token) {

        console.error(
            "Cannot save attempt: logged-in user or authentication token not found."
        );

        return;

    }


    const attemptData = {
        user_id: Number(userId),
        company_id: question.company_id || (companyId ? Number(companyId) : null),
        topic_id: question.topic_id || (topicId ? Number(topicId) : null),
        question_id:
            Number(question.id),

        selected_answer:
            selectedAnswerValue,

        is_correct: isCorrect

    };


    console.log(
        "Saving practice attempt:",
        attemptData
    );


    try {

        const response =
            await fetch(
                `${API_URL}/questions/practice-attempt`,
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`

                    },

                    body:
                        JSON.stringify(
                            attemptData
                        )

                }
            );


        const data =
            await response.json();


        console.log(
            "Practice attempt API response:",
            data
        );


        if (!response.ok) {

            console.error(
                "Practice attempt save failed:",
                data
            );

            return;

        }


        if (data.success) {

            localStorage.setItem(
                "aptiprep_performance_updated",
                String(Date.now())
            );

            console.log(
                "✓ Practice attempt saved successfully."
            );

        } else {

            console.error(
                "Practice attempt was not saved:",
                data
            );

        }


    } catch (error) {

        console.error(
            "Practice attempt save error:",
            error
        );

    }

}


// =====================================================
// NEXT QUESTION
// =====================================================

function nextQuestion() {

    console.log(
        "nextQuestion() called"
    );


    if (!answered) {

        return;

    }


    currentIndex++;


    if (
        currentIndex <
        questions.length
    ) {

        displayQuestion();

        return;

    }


    finishQuiz();

}


// =====================================================
// FINISH QUIZ
// =====================================================

function finishQuiz() {

    console.log(
        "Quiz completed."
    );


    console.log(
        "Score:",
        score,
        "/",
        questions.length
    );


    const percentage =
        Math.round(
            (
                score /
                questions.length
            ) * 100
        );


    const result = {

        score:
            score,

        total:
            questions.length,

        percentage:
            percentage,

        companyId:
            companyId,

        topicId:
            topicId,

        completedAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "lastQuizResult",
        JSON.stringify(result)
    );


    window.location.href =
        `result.html?score=${score}&total=${questions.length}&percentage=${percentage}&company_id=${companyId || ""}&topic_id=${topicId || ""}`;

}