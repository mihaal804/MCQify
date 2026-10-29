const allQuestions =
    JSON.parse(localStorage.getItem("mcqQuestionsChapter12")) || [];

const testQuestions = [...allQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 15);

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".mcq-card h2");
const optionsContainer = document.querySelector(".options");
const feedback = document.querySelector(".feedback");
const nextButton = document.querySelector(".next-button");

const progressCount =
    document.querySelector(".progress-top span:first-child");

const progressText =
    document.querySelector(".progress-top span:last-child");

const progressFill =
    document.querySelector(".progress-fill");


function loadQuestion() {

    const q = testQuestions[currentQuestion];

    answered = false;

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent = q.question;

    progressCount.textContent =
        `Question ${currentQuestion + 1} of ${testQuestions.length}`;

    const percentage =
        (currentQuestion / testQuestions.length) * 100;

    progressText.textContent =
        `${Math.round(percentage)}% Complete`;

    progressFill.style.width =
        `${percentage}%`;

    optionsContainer.innerHTML = "";

    feedback.style.display = "none";

    nextButton.style.display = "none";


    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        optionsContainer.appendChild(button);

    });

}


function selectAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const q = testQuestions[currentQuestion];

    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(button => {
        button.disabled = true;
    });


    if (selectedIndex === q.answer) {

        score++;

        selectedButton.style.backgroundColor = "#dcfce7";
        selectedButton.style.borderColor = "#22c55e";

        feedback.innerHTML = `
            <strong>Correct! ✓</strong>
            <p>${q.explanation}</p>
        `;

    } else {

        selectedButton.style.backgroundColor = "#fee2e2";
        selectedButton.style.borderColor = "#ef4444";

        allOptions[q.answer].style.backgroundColor = "#dcfce7";
        allOptions[q.answer].style.borderColor = "#22c55e";

        feedback.innerHTML = `
            <strong>Wrong ✗</strong>

            <p>
                Correct answer:
                ${String.fromCharCode(65 + q.answer)}.
                ${q.options[q.answer]}
            </p>

            <p>
                ${q.explanation}
            </p>
        `;

    }


    feedback.style.display = "block";

    nextButton.style.display = "block";

}


nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < testQuestions.length) {

        loadQuestion();

    } else {

        showResult();

    }

});


function showResult() {

    const percentage =
        Math.round((score / testQuestions.length) * 100);


    questionNumber.textContent =
        "TEST COMPLETED";

    questionText.textContent =
        "Test Complete!";


    optionsContainer.innerHTML = "";


    feedback.style.display = "block";

    feedback.innerHTML = `
        <strong>Your Score: ${score}/${testQuestions.length}</strong>

        <p>
            You answered ${score} questions correctly
            out of ${testQuestions.length}.
        </p>

        <p>
            Percentage: ${percentage}%
        </p>
    `;


    nextButton.style.display = "none";


    progressFill.style.width = "100%";

    progressCount.textContent =
        `Completed ${testQuestions.length} of ${testQuestions.length}`;

    progressText.textContent =
        "100% Complete";

}


if (testQuestions.length > 0) {

    loadQuestion();

} else {

    questionNumber.textContent =
        "NO QUESTIONS";

    questionText.textContent =
        "No revised MCQs found.";

    feedback.style.display = "block";

    feedback.innerHTML = `
        <p>
            Please complete the Chapter 12 preparation first.
        </p>
    `;

}