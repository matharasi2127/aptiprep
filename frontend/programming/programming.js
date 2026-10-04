
const languageData = {
  c: {
    name: "C Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    questions: () => window.cQuestions
  },
  cpp: {
    name: "C++ Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    questions: () => window.cppQuestions
  },
  java: {
    name: "Java Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    questions: () => window.javaQuestions
  },
  python: {
    name: "Python Programming",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    questions: () => window.pythonQuestions
  }
};

const languageSection = document.getElementById("languageSection");
const questionSection = document.getElementById("questionSection");
const selectedLogo = document.getElementById("selectedLogo");
const selectedLanguage = document.getElementById("selectedLanguage");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const feedback = document.getElementById("feedback");
const submitButton = document.getElementById("submitButton");
const nextButton = document.getElementById("nextButton");
const resultBox = document.getElementById("resultBox");

let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let activeLanguage = "";

document.querySelectorAll(".language-card").forEach(card => {
  card.addEventListener("click", () => {
    openLanguage(card.dataset.language);
  });
});

function openLanguage(language) {
  const data = languageData[language];
  const bank = data.questions();

  if (!Array.isArray(bank) || bank.length === 0) {
    alert(`${data.name} questions are not loaded. Check the question bank file.`);
    return;
  }

  activeLanguage = language;
  activeQuestions = bank.slice(0, 50);
  currentIndex = 0;
  score = 0;

  languageSection.hidden = true;
  questionSection.hidden = false;
  resultBox.hidden = true;

  selectedLogo.src = data.logo;
  selectedLanguage.textContent = data.name;

  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  answered = false;
  const q = activeQuestions[currentIndex];

  progressText.textContent =
    `Question ${currentIndex + 1} of ${activeQuestions.length}`;

  progressBar.style.width =
    `${((currentIndex + 1) / activeQuestions.length) * 100}%`;

  questionNumber.textContent = `QUESTION ${currentIndex + 1}`;
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  nextButton.hidden = true;
  submitButton.hidden = false;
  submitButton.disabled = false;

  q.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = option;

    const text = document.createElement("span");
    text.textContent = option;

    label.append(radio, text);
    optionsContainer.appendChild(label);
  });
}

submitButton.addEventListener("click", () => {
  if (answered) return;

  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    feedback.textContent = "Please select an option first.";
    feedback.style.color = "#d97706";
    return;
  }

  answered = true;
  submitButton.disabled = true;
  submitButton.hidden = true;

  const q = activeQuestions[currentIndex];
  const correctAnswer = String(q.answer).trim();
  const selectedAnswer = String(selected.value).trim();
  const isCorrect = selectedAnswer === correctAnswer;

  const explanationHTML = q.explanation
    ? `<span class="explanation-text">💡 Explanation: ${q.explanation}</span>`
    : "";

  if (isCorrect) {
    score++;
    feedback.className = "feedback correct-feedback";
    feedback.innerHTML =
      `✅ Correct Answer!${explanationHTML}`;
  } else {
    feedback.className = "feedback wrong-feedback";
    feedback.innerHTML =
      `❌ Wrong Answer!<br>
       <strong>Correct answer: ${correctAnswer}</strong>
       ${explanationHTML}`;
  }

  document.querySelectorAll(".option").forEach(label => {
    const radio = label.querySelector("input");
    radio.disabled = true;

    if (String(radio.value).trim() === correctAnswer) {
      label.classList.add("correct");
    } else if (radio.checked && !isCorrect) {
      label.classList.add("wrong");
    }
  });

  if (currentIndex === activeQuestions.length - 1) {
    nextButton.textContent = "View Final Score →";
  } else {
    nextButton.textContent = "Next Question →";
  }

  nextButton.hidden = false;
});

nextButton.addEventListener("click", () => {
  if (currentIndex < activeQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  optionsContainer.hidden = true;
  questionText.hidden = true;
  questionNumber.hidden = true;
  feedback.hidden = true;
  submitButton.hidden = true;
  nextButton.hidden = true;
  resultBox.hidden = false;

  document.getElementById("finalScore").textContent =
    `Your score: ${score} / ${activeQuestions.length}`;
}

function resetQuestionView() {
  optionsContainer.hidden = false;
  questionText.hidden = false;
  questionNumber.hidden = false;
  feedback.hidden = false;
}

document.getElementById("backButton").addEventListener("click", () => {
  questionSection.hidden = true;
  languageSection.hidden = false;
  resultBox.hidden = true;
  resetQuestionView();
});

document.getElementById("languagesButton").addEventListener("click", () => {
  questionSection.hidden = true;
  languageSection.hidden = false;
  resultBox.hidden = true;
  resetQuestionView();
});

document.getElementById("retryButton").addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  resultBox.hidden = true;
  resetQuestionView();
  renderQuestion();
});