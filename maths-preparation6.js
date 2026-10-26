// 1. Chapter 6 - 80 Pure Math MCQs Data & LocalStorage Initialization
const questions = [
    // --- Factorials & Basic Counting (1 to 20) ---
    {
        question: "The value of 0! is:",
        options: ["0", "1", "Infinity", "Undefined"],
        answer: 1,
        explanation: "By definition and factorial properties, 0! = 1."
    },
    {
        question: "The value of 6! / (3! × 2!) is:",
        options: ["60", "120", "30", "360"],
        answer: 0,
        explanation: "6! / (3! × 2!) = 720 / (6 × 2) = 720 / 12 = 60."
    },
    {
        question: "The value of 8! / 5! is:",
        options: ["336", "56", "720", "40320"],
        answer: 0,
        explanation: "8! / 5! = (8 × 7 × 6 × 5!) / 5! = 336."
    },
    {
        question: "In general, for any positive integers m and n, (m × n)! is:",
        options: ["Equal to m! × n!", "Not equal to m! × n!", "Equal to (m+n)!", "Equal to m! + n!"],
        answer: 1,
        explanation: "In general, (m × n)! ≠ m! × n!."
    },
    {
        question: "The relation (m + n)! is generally:",
        options: ["Equal to m! + n!", "Not equal to m! + n!", "Equal to m! × n!", "Equal to n! / m!"],
        answer: 1,
        explanation: "In general, (m + n)! ≠ m! + n!."
    },
    {
        question: "The value of 1! is:",
        options: ["0", "1", "2", "Undefined"],
        answer: 1,
        explanation: "1! is equal to 1."
    },
    {
        question: "The value of 2! × 4! is:",
        options: ["48", "40320", "12", "24"],
        answer: 0,
        explanation: "2! = 2 and 4! = 24, so 2 × 24 = 48."
    },
    {
        question: "The value of 3! + 5! is:",
        options: ["126", "720", "6", "120"],
        answer: 0,
        explanation: "3! = 6 and 5! = 120, so 6 + 120 = 126."
    },
    {
        question: "If n = 0, then the property (n + 1)! = (n + 1)n! gives:",
        options: ["0! = 1", "1! = 1", "Both a and b", "None of these"],
        answer: 2,
        explanation: "Putting n = 0 gives 1! = 1 × 0!, which leads to 0! = 1."
    },
    {
        question: "The value of expression n! / (n-1)! for n ≥ 1 is:",
        options: ["n", "n-1", "1/n", "n!"],
        answer: 0,
        explanation: "n! / (n-1)! = [n(n-1)!] / (n-1)! = n."
    },
    {
        question: "The value of n! / (n-2)! when n = 31 is:",
        options: ["930", "870", "900", "960"],
        answer: 0,
        explanation: "n(n-1) = 31 × 30 = 930."
    },
    {
        question: "If n! = 990(n-3)!, then the value of n is:",
        options: ["8", "9", "10", "11"],
        answer: 2,
        explanation: "n(n-1)(n-2) = 990 = 11 × 10 × 9, which gives n = 10."
    },
    {
        question: "The value of (n+1)! / (n-1)! is equal to:",
        options: ["n(n+1)", "n(n-1)", "n+1", "n-1"],
        answer: 0,
        explanation: "(n+1)n(n-1)! / (n-1)! = (n+1)n."
    },
    {
        question: "The value of 10! / (7! × 3! × 2!) is:",
        options: ["360", "720", "120", "180"],
        answer: 0,
        explanation: "Evaluating expression gives 360."
    },
    {
        question: "The value of 4! - 2! is:",
        options: ["22", "24", "2", "20"],
        answer: 0,
        explanation: "4! = 24 and 2! = 2, so 24 - 2 = 22."
    },
    {
        question: "The value of 3! + 4! is:",
        options: ["30", "72", "24", "18"],
        answer: 0,
        explanation: "3! = 6 and 4! = 24, so 6 + 24 = 30."
    },
    {
        question: "If (n+2)! = 56(n!), then the value of n is:",
        options: ["6", "7", "8", "9"],
        answer: 0,
        explanation: "(n+2)(n+1)n! = 56n! ⇒ (n+2)(n+1) = 56 = 8 × 7 ⇒ n = 6."
    },
    {
        question: "If (n+2)! = 60(n-1)!, then the value of n is:",
        options: ["2", "3", "4", "5"],
        answer: 1,
        explanation: "Solving yields n = 3."
    },
    {
        question: "The product of r consecutive positive integers is always divisible by:",
        options: ["r!", "(r+1)", "r! + 1", "2r!"],
        answer: 0,
        explanation: "The product of r consecutive integers is divisible by r!."
    },
    {
        question: "If n! / (n-5)! = 20[n! / (n-3)!], then n is:",
        options: ["5", "6", "7", "8"],
        answer: 2,
        explanation: "Solving gives n = 7."
    },

    // --- Permutations & Counting Principle (21 to 45) ---
    {
        question: "The formula for n-permutation-r (^nP_r) is:",
        options: ["n! / r!", "n! / (n-r)!", "n! / (r!(n-r)!)", "(n-r)! / n!"],
        answer: 1,
        explanation: "^nP_r = n! / (n-r)!."
    },
    {
        question: "The number of arrangements of n distinct objects taken all at a time (^nP_n) is:",
        options: ["1", "0", "n!", "(n-1)!"],
        answer: 2,
        explanation: "^nP_n = n! / 0! = n!."
    },
    {
        question: "If 3(^nP_3) = ^nP_4, then the value of n is:",
        options: ["5", "6", "7", "8"],
        answer: 1,
        explanation: "Solving yields n = 6."
    },
    {
        question: "In how many ways can 6 people out of 8 be seated in a row?",
        options: ["20160", "5040", "40320", "720"],
        answer: 0,
        explanation: "^8P_6 = 8! / (8-6)! = 8! / 2! = 20160."
    },
    {
        question: "If there are n objects with n1 alike of first kind, n2 alike of second kind, total permutations are:",
        options: ["n! / (n1! n2!...)", "n! / n1!", "n1! n2!... / n!", "n! / (n-r)!"],
        answer: 0,
        explanation: "Formula for permutations with alike objects is n! / (n1! n2!... nk!)."
    },
    {
        question: "How many different arrangements of the word EVENING can be made?",
        options: ["1260", "2520", "5040", "630"],
        answer: 0,
        explanation: "Total letters = 7, E repeats 2 times, N repeats 2 times. 7! / (2!2!) = 1260."
    },
    {
        question: "The number of arrangements of n distinct objects in a circle is:",
        options: ["n!", "(n-1)!", "(n+1)!", "n! / 2"],
        answer: 1,
        explanation: "Circular arrangement of n distinct objects is (n-1)!."
    },
    {
        question: "In how many ways can 8 people sit around a circular table for dinner?",
        options: ["5040", "40320", "720", "362880"],
        answer: 0,
        explanation: "(8-1)! = 7! = 5040 ways."
    },
    {
        question: "When objects arranged in a circle can be flipped (like a necklace or keychain), the number of ways is:",
        options: ["(n-1)!", "(n-1)! / 2", "n! / 2", "n!"],
        answer: 1,
        explanation: "When clockwise and anticlockwise are identical due to flipping, it is (n-1)! / 2."
    },
    {
        question: "The number of ways of arranging 7 keys in a key chain is:",
        options: ["360", "720", "2520", "5040"],
        answer: 0,
        explanation: "Circular arrangement with flipping is given by (7-1)! / 2 = 6! / 2 = 360."
    },
    {
        question: "How many 3-digit even numbers can be formed from digits 1, 2, 3, 4, 5, 6 without repetition?",
        options: ["60", "120", "36", "72"],
        answer: 0,
        explanation: "Unit place can be filled by 2, 4, 6 (3 ways), remaining 2 places by 5 and 4 digits = 3 × 5 × 4 = 60."
    },
    {
        question: "How many 4-digit numbers can be formed with digits 1, 2, 3, 4, 5, 6 when repetition is allowed?",
        options: ["1296", "360", "720", "216"],
        answer: 0,
        explanation: "Each digit has 6 choices, so 6 × 6 × 6 × 6 = 6^4 = 1296."
    },
    {
        question: "How many words can be formed from the letters of the word FRIDAY?",
        options: ["720", "120", "360", "24"],
        answer: 0,
        explanation: "6 distinct letters can be arranged in 6! = 720 ways."
    },
    {
        question: "How many words from the letters of FRIDAY will end with F?",
        options: ["120", "720", "24", "60"],
        answer: 0,
        explanation: "Fixing F at the end, remaining 5 letters can be arranged in 5! = 120 ways."
    },
    {
        question: "How many different permutations of the word STATESMAN can be formed?",
        options: ["30240", "60480", "15120", "7560"],
        answer: 0,
        explanation: "Total letters = 9, S repeats 2 times, T repeats 2 times, A repeats 2 times. 9! / (2!2!2!) = 30240."
    },
    {
        question: "In how many ways can 5 men and 5 women be seated at a round table alternately?",
        options: ["2880", "1440", "362880", "720"],
        answer: 0,
        explanation: "(5-1)! × 5! = 4! × 120 = 24 × 120 = 2880."
    },
    {
        question: "The chief secretary of Sindh calls a meeting of 10 secretaries around a round table where 3 particular secretaries want to sit together. Number of ways:",
        options: ["30240", "362880", "40320", "120960"],
        answer: 0,
        explanation: "8 secretaries minus 3 plus 1 = 8 entities around round table = 7! ways, and 3 secretaries can arrange in 3! ways. 5040 × 6 = 30240."
    },
    {
        question: "How many 3-letter words can be formed from the word ENGLISH without repetition?",
        options: ["210", "120", "504", "720"],
        answer: 0,
        explanation: "^7P_3 = 7 × 6 × 5 = 210."
    },
    {
        question: "If ^nP_r = n(^nP_r-1), then this is a standard property true for:",
        options: ["Permutations", "Combinations", "Factorials", "Binomial coefficients"],
        answer: 0,
        explanation: "It is a standard permutation property."
    },
    {
        question: "The identity ^nP_r = ^n-1P_r + r(^n-1P_r-1) is a property of:",
        options: ["Permutations", "Combinations", "Factorials", "Indices"],
        answer: 0,
        explanation: "Standard permutation reduction formula."
    },
    {
        question: "If ^nP_n = 2(^nP_n-2), then the value of n is:",
        options: ["3", "2", "4", "5"],
        answer: 0,
        explanation: "For n=3 it holds true as ^3P_3 = 6 and 2(^3P_1) = 6."
    },
    {
        question: "How many signals can be made with 2 blue, 3 yellow, and 4 green flags using all at a time?",
        options: ["1260", "2520", "630", "5040"],
        answer: 0,
        explanation: "Total = 9 flags, 2 blue, 3 yellow, 4 green. 9! / (2!3!4!) = 1260."
    },
    {
        question: "The number of ways in which r letters can be posted in n letter boxes is:",
        options: ["n^r", "^nP_r", "^nC_r", "r^n"],
        answer: 0,
        explanation: "Each letter has n choices, total = n^r."
    },
    {
        question: "The formula for n-combination-r (^nC_r) is:",
        options: ["n! / (r!(n-r)!)", "n! / (n-r)!", "n! / r!", "(n-r)! / r!"],
        answer: 0,
        explanation: "Combination formula is ^nC_r = n! / (r!(n-r)!)."
    },
    {
        question: "The correct relation between permutation and combination is:",
        options: ["^nP_r = r! ^nC_r", "^nC_r = r! ^nP_r", "^nP_r = ^nC_r", "^nC_r = n! ^nP_r"],
        answer: 0,
        explanation: "Permutation and combination are related as ^nP_r = r! ^nC_r."
    },
    {
        question: "Pascal's identity for combinations is given by:",
        options: ["^nC_r + ^nC_r-1 = ^n+1C_r", "^nC_r + ^nC_r-1 = ^nC_r+1", "^nC_r + ^n-1C_r = ^n+1C_r+1", "None of these"],
        answer: 0,
        explanation: "Pascal's identity states that ^nC_r + ^nC_r-1 = ^n+1C_r."
    },
    {
        question: "The number of arrangements of n distinct objects in a circular order is given by:",
        options: ["n!", "(n-1)!", "(n+1)!", "n! / 2"],
        answer: 1,
        explanation: "Circular permutation formula for n distinct objects is (n-1)!."
    },
    {
        question: "The formula for finding the number of diagonals in an n-sided polygon is:",
        options: ["n(n-3) / 2", "n(n-1) / 2", "^nC_2", "n(n-2) / 2"],
        answer: 0,
        explanation: "Number of diagonals in an n-sided polygon is given by n(n-3)/2."
    },
    {
        question: "If word 'PAK' is arranged, total number of permutations of its letters is:",
        options: ["6", "3", "9", "27"],
        answer: 0,
        explanation: "3 distinct letters can be arranged in 3! = 6 ways."
    },
    {
        question: "The number of 3-digit numbers formed with 0, 2, 3, 4, 5, 7 without repetition is:",
        options: ["100", "120", "60", "24"],
        answer: 0,
        explanation: "Calculated using permutation principles."
    },

    // --- Combinations & Applications (46 to 75) ---
    {
        question: "The combination formula ^nC_r or C(n,r) is defined as:",
        options: ["n! / (r!(n-r)!)", "n! / (n-r)!", "r! / (n-r)!", "n! / r!"],
        answer: 0,
        explanation: "^nC_r = n! / (r!(n-r)!)."
    },
    {
        question: "The relationship between permutation and combination is:",
        options: ["^nP_r = r! ^nC_r", "^nC_r = r! ^nP_r", "^nP_r = ^nC_r", "^nC_r = n! ^nP_r"],
        answer: 0,
        explanation: "^nP_r = r! ^nC_r."
    },
    {
        question: "The value of ^nC_n and ^nC_0 is always equal to:",
        options: ["1", "0", "n", "Undefined"],
        answer: 0,
        explanation: "^nC_n = ^nC_0 = 1."
    },
    {
        question: "The complementary combination property states that ^nC_r is equal to:",
        options: ["^nC_n-r", "^nC_r-1", "^n-1C_r", "^n+1C_r"],
        answer: 0,
        explanation: "^nC_r = ^nC_n-r."
    },
    {
        question: "The value of ^nC_1 or ^nC_n-1 is equal to:",
        options: ["n", "1", "0", "n!"],
        answer: 0,
        explanation: "^nC_1 = ^nC_n-1 = n."
    },
    {
        question: "Pascal's identity for combinations is given by:",
        options: ["^nC_r + ^nC_r-1 = ^n+1C_r", "^nC_r + ^nC_r-1 = ^nC_r+1", "^nC_r + ^n-1C_r = ^n+1C_r+1", "None"],
        answer: 0,
        explanation: "^nC_r + ^nC_r-1 = ^n+1C_r."
    },
    {
        question: "If 10 students applied for 6 HEC scholarships, the number of ways to choose them is:",
        options: ["210", "151200", "5040", "720"],
        answer: 0,
        explanation: "^10C_6 = 10! / (6!4!) = 210."
    },
    {
        question: "If ^nC_5 = ^nC_7, then the value of n is:",
        options: ["12", "2", "35", "7"],
        answer: 0,
        explanation: "Using property p + q = n ⇒ 5 + 7 = 12."
    },
    {
        question: "If ^nC_r = ^nC_q, then:",
        options: ["p = q or p + q = n", "p = q always", "p + q = 2n", "p = n - q"],
        answer: 0,
        explanation: "Standard property of equality of combinations."
    },
    {
        question: "In how many ways can 11 players be chosen out of 16 with no restriction?",
        options: ["4368", "8008", "11440", "1287"],
        answer: 0,
        explanation: "^16C_11 = ^16C_5 = 4368."
    },
    {
        question: "Out of 5 men and 3 women, a committee of 3 is to be formed. Ways to form it with at least one man:",
        options: ["55", "56", "48", "35"],
        answer: 0,
        explanation: "Total ways (^8C_3 = 56) minus ways with no man (^3C_3 = 1) = 56 - 1 = 55."
    },
    {
        question: "There are 10 points on a circle. The number of straight lines that can be drawn is:",
        options: ["45", "90", "10", "20"],
        answer: 0,
        explanation: "^10C_2 = (10 × 9) / 2 = 45."
    },
    {
        question: "There are 10 points on a circle. The number of triangles that can be drawn is:",
        options: ["120", "720", "45", "210"],
        answer: 0,
        explanation: "^10C_3 = (10 × 9 × 8) / (3 × 2 × 1) = 120."
    },
    {
        question: "The number of diagonals in an n-sided polygon is:",
        options: ["n(n-3) / 2", "n(n-1) / 2", "^nC_2", "n(n-2) / 2"],
        answer: 0,
        explanation: "Number of diagonals = ^nC_2 - n = n(n-3)/2."
    },
    {
        question: "If the number of diagonals in an n-sided polygon is 35, the value of n is:",
        options: ["10", "7", "8", "9"],
        answer: 0,
        explanation: "n(n-3)/2 = 35 ⇒ n(n-3) = 70 = 10 × 7 ⇒ n = 10."
    },
    {
        question: "In how many ways can a group of 10 girls be divided into two groups of 3 and 7 girls?",
        options: ["120", "210", "720", "5040"],
        answer: 0,
        explanation: "^10C_3 × ^7C_7 = 120 × 1 = 120."
    },
    {
        question: "For 6 officer posts, 100 applicants apply, where 2 posts are reserved for 20 serving candidates. Ways of selection:",
        options: ["^20C_2 × ^80C_4", "^100C_6", "^20C_2 × ^100C_4", "^20C_6"],
        answer: 0,
        explanation: "2 serving candidates from 20 can be chosen in ^20C_2 ways, and remaining 4 from 80 applicants in ^80C_4 ways."
    },
    {
        question: "A question paper has parts A, B, C with 8 questions each. Student chooses 5 from A, and 3 each from B and C. Ways:",
        options: ["^8C_5 × ^8C_3 × ^8C_3", "^8C_5 + ^8C_3", "^24C_11", "None"],
        answer: 0,
        explanation: "^8C_5 × ^8C_3 × ^8C_3."
    },
    {
        question: "If ^nC_2 = 10, then the positive value of n is:",
        options: ["5", "4", "6", "10"],
        answer: 0,
        explanation: "n(n-1)/2 = 10 ⇒ n(n-1) = 20 = 5 × 4 ⇒ n = 5."
    },
    {
        question: "The property r(^nC_r) = n(^n-1C_r-1) is equal to:",
        options: ["True", "False", "Only for even r", "Only for prime n"],
        answer: 0,
        explanation: "This is a standard identity given in exercise 6.3."
    },
    {
        question: "The identity ^2nC_n = [2^n {1 · 3 · 5 ... (2n-1)}] / n! is a property of:",
        options: ["Combinations", "Permutations", "Binomial theorem", "Sequences"],
        answer: 0,
        explanation: "Standard combination identity from Exercise 6.3."
    },
    {
        question: "If ^nC_p = ^nC_q, then p = q or:",
        options: ["p + q = n", "p - q = n", "pq = n", "p = nq"],
        answer: 0,
        explanation: "p = q or p + q = n."
    },
    {
        question: "The expression ^nC_r + 2(^nC_r-1) + ^nC_r-2 is equal to:",
        options: ["^n+2C_r", "^n+1C_r", "^nC_r+2", "^2nC_r"],
        answer: 0,
        explanation: "Using Pascal's identity twice, it equals ^n+2C_r."
    },
    {
        question: "The product of k consecutive integers is always divisible by:",
        options: ["k!", "k", "(k-1)!", "2k!"],
        answer: 0,
        explanation: "Divisible by k!."
    },
    {
        question: "Out of 6 men and 4 women, a committee of 5 is formed with exactly 2 women. Number of ways:",
        options: ["120", "60", "240", "36"],
        answer: 0,
        explanation: "^4C_2 × ^6C_3 = 6 × 20 = 120."
    },

    // --- Review Exercise & Additional Math MCQs (76 to 80) ---
    {
        question: "If 3(^nP_3) = ^nP_4, then n is:",
        options: ["6", "5", "7", "8"],
        answer: 0,
        explanation: "From review exercise, n = 6."
    },
    {
        question: "The number of ways of arranging the letters of the word 'GARDEN' is:",
        options: ["720", "120", "840", "600"],
        answer: 0,
        explanation: "6! = 720."
    },
    {
        question: "The number of ways in which 3 boys and 3 girls can be seated in a row such that all the boys sit together is:",
        options: ["144", "720", "288", "36"],
        answer: 0,
        explanation: "Treating 3 boys as 1 unit, 4 units arrange in 4! ways, and 3 boys in 3! ways. 4! × 3! = 144."
    },
    {
        question: "If ^nP_r = 30240 and ^nC_r = 252, then the value of r is:",
        options: ["5", "4", "6", "3"],
        answer: 0,
        explanation: "Since ^nP_r = r! × ^nC_r, we have 30240 = r! × 252 ⇒ r! = 120, so r = 5."
    },
    {
        question: "The number of ways in which a committee of 4 members can be selected out of 6 men and 4 women so that exactly 2 men are included is:",
        options: ["90", "60", "120", "48"],
        answer: 0,
        explanation: "Selecting 2 men from 6 is ^6C_2 = 15, and 2 women from 4 is ^4C_2 = 6. Total = 15 × 6 = 90."
    }
];

  // Chapter 6 - Preparation Page Controller Logic
console.log("TOTAL CHAPTER 6 MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsMaths6",
    JSON.stringify(questions)
);

// Preparation page controls
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".mcq-card h2");
const optionsContainer = document.querySelector(".options");
const feedback = document.querySelector(".feedback");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const progressCount = document.querySelector(".progress-top span:first-child");
const progressText = document.querySelector(".progress-top span:last-child");
const progressFill = document.querySelector(".progress-fill");

let currentQuestion = 0;

function loadQuestion() {
    const question = questions[currentQuestion];

    if (questionNumber) {
        questionNumber.textContent = `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;
    }
    if (questionText) {
        questionText.textContent = question.question;
    }
    if (optionsContainer) {
        optionsContainer.innerHTML = "";

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "option";
            button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

            if (index === Number(question.answer)) {
                button.classList.add("correct");
            }

            button.addEventListener("click", () => {
                document.querySelectorAll(".option").forEach(btn => {
                    btn.classList.remove("wrong");
                });

                if (index === Number(question.answer)) {
                    button.classList.add("correct");
                    if (feedback) {
                        feedback.querySelector("strong").textContent = "Correct!";
                        feedback.querySelector("p").textContent = question.explanation;
                    }
                } else {
                    button.classList.add("wrong");
                    if (feedback) {
                        feedback.querySelector("strong").textContent = "Correct answer:";
                        feedback.querySelector("p").textContent = 
                            `${String.fromCharCode(65 + Number(question.answer))}. ${question.options[Number(question.answer)]}`;
                    }
                }

                if (feedback) feedback.style.display = "block";
            });

            optionsContainer.appendChild(button);
        });
    }

    if (feedback) {
        feedback.style.display = "block";
        feedback.querySelector("strong").textContent = "Correct!";
        feedback.querySelector("p").textContent = question.explanation;
    }

    if (progressCount) {
        progressCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    }

    const percentage = Math.round(((currentQuestion + 1) / questions.length) * 100);

    if (progressText) {
        progressText.textContent = `${percentage}% Complete`;
    }
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }

    if (previousButton) {
        previousButton.disabled = currentQuestion === 0;
    }

    if (nextButton) {
        if (currentQuestion === questions.length - 1) {
            nextButton.textContent = "Finish";
        } else {
            nextButton.textContent = "Next →";
        }
    }
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion();
        } else {
            if (questionText) questionText.textContent = "Preparation Complete!";
            if (questionNumber) questionNumber.textContent = "COMPLETED";
            if (optionsContainer) optionsContainer.innerHTML = "";
            if (feedback) {
                feedback.style.display = "block";
                feedback.querySelector("strong").textContent = "Well Done!";
                feedback.querySelector("p").textContent = 
                    `You completed all ${questions.length} questions for Mathematics Chapter 6.`;
            }
            if (nextButton) nextButton.style.display = "none";
            if (previousButton) previousButton.style.display = "none";
        }
    });
}

if (previousButton) {
    previousButton.addEventListener("click", () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion();
        }
    });
}

loadQuestion();