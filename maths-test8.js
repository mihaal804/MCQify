const questions = JSON.parse(
    localStorage.getItem("mcqQuestionsMaths8")
) || [];

// Select 15 random questions from the Chapter 8 preparation questions
const testQuestions = [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 15);

// Test page controls
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".mcq-card h2");
const optionsContainer = document.querySelector(".options");

const feedback = document.querySelector(".feedback");
const feedbackTitle = feedback.querySelector("strong");
const feedbackText = feedback.querySelector("p");

const nextButton = document.querySelector(".next-button");

const progressCount = document.querySelector(
    ".progress-top span:first-child"
);

const progressText = document.querySelector(
    ".progress-top span:last-child"
);

const progressFill = document.querySelector(".progress-fill");

let currentQuestion = 0;
let score = 0;
let answered = false;

const userAnswers = new Array(testQuestions.length).fill(null);

// Load question
function loadQuestion() {
    if (testQuestions.length === 0) {
        questionText.textContent = "No questions found! Please visit the Chapter 8 preparation page first.";
        optionsContainer.innerHTML = "";
        return;
    }

    const question = testQuestions[currentQuestion];
    answered = userAnswers[currentQuestion] !== null;

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent = question.question;

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.addEventListener("click", () => {
            if (answered) return;
            checkAnswer(index);
        });

        optionsContainer.appendChild(button);
    });

    feedback.style.display = "none";
    feedbackTitle.textContent = "";
    feedbackText.textContent = "";

    if (answered) {
        showPreviousAnswer();
    }

    updateProgress();

    if (currentQuestion === testQuestions.length - 1) {
        nextButton.textContent = "Finish Test →";
    } else {
        nextButton.textContent = "Next →";
    }
}

// Check answer
function checkAnswer(selectedIndex) {
    const question = testQuestions[currentQuestion];
    const correctAnswer = Number(question.answer);
    answered = true;
    userAnswers[currentQuestion] = selectedIndex;

    const optionButtons =
        optionsContainer.querySelectorAll(".option");

    optionButtons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === correctAnswer) {
        score++;
        feedbackTitle.textContent = "Correct!";
        feedbackText.textContent =
            "Your answer is correct.";
    } else {
        feedbackTitle.textContent = "Wrong!";
        feedbackText.textContent =
            `Correct answer: ${String.fromCharCode(65 + correctAnswer)}. ${question.options[correctAnswer]}`;
    }

    feedback.style.display = "block";

    optionButtons[selectedIndex].classList.add(
        selectedIndex === correctAnswer
            ? "correct"
            : "wrong"
    );

    optionButtons[correctAnswer].classList.add("correct");
}

// Show previously answered question
function showPreviousAnswer() {
    const question = testQuestions[currentQuestion];
    const correctAnswer = Number(question.answer);
    const selectedIndex = userAnswers[currentQuestion];

    const optionButtons =
        optionsContainer.querySelectorAll(".option");

    optionButtons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === correctAnswer) {
        feedbackTitle.textContent = "Correct!";
        feedbackText.textContent =
            "Your answer is correct.";
        optionButtons[selectedIndex].classList.add("correct");
    } else {
        feedbackTitle.textContent = "Wrong!";
        feedbackText.textContent =
            `Correct answer: ${String.fromCharCode(65 + correctAnswer)}. ${question.options[correctAnswer]}`;
        optionButtons[selectedIndex].classList.add("wrong");
        optionButtons[correctAnswer].classList.add("correct");
    }

    feedback.style.display = "block";
}

// Progress
function updateProgress() {
    const completed =
        userAnswers.filter(answer => answer !== null).length;

    const percentage =
        Math.round((completed / testQuestions.length) * 100);

    progressCount.textContent =
        `Question ${currentQuestion + 1} of ${testQuestions.length}`;

    progressText.textContent =
        `${percentage}% Complete`;

    progressFill.style.width =
        `${percentage}%`;
}

// Next button
nextButton.addEventListener("click", () => {
    if (!answered) {
        return;
    }

    if (currentQuestion === testQuestions.length - 1) {
        showResult();
        return;
    }

    currentQuestion++;
    loadQuestion();
});

// Final result
function showResult() {
    const percentage =
        Math.round((score / testQuestions.length) * 100);

    questionNumber.textContent = "TEST COMPLETED";

    questionText.textContent =
        "Test Complete!";

    optionsContainer.innerHTML = "";

    feedback.style.display = "block";

    feedbackTitle.textContent =
        `Your Score: ${score} / ${testQuestions.length}`;

    feedbackText.innerHTML =
        `You answered ${score} questions correctly out of ${testQuestions.length}.<br><br>
        Percentage: ${percentage}%`;

    nextButton.style.display = "none";

    progressCount.textContent =
        `Completed ${testQuestions.length} of ${testQuestions.length}`;

    progressText.textContent =
        "100% Complete";

    progressFill.style.width =
        "100%";
}

// Start test
loadQuestion();