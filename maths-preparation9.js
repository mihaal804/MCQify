// 1. Chapter 9 - 80 Pure Math & Conceptual MCQs Data & LocalStorage Initialization
const questions = [
    // --- Section 9.1: Domain and Range of Trigonometric Functions (1 to 20) ---
    {
        question: "What is the domain of the sine function y = sin x?",
        options: ["[-1, 1]", "IR or (-∞, ∞)", "IR - {n*pi}", "IR - {(2n+1)pi/2}"],
        answer: 1,
        explanation: "The domain of the sine function is all real numbers IR, i.e., (-∞, ∞)."
    },
    {
        question: "What is the range of the cosine function y = cos x?",
        options: ["[-1, 1]", "(-∞, ∞)", "IR - (-1, 1)", "[0, 1]"],
        answer: 0,
        explanation: "The range of both sine and cosine functions is the closed interval [-1, 1]."
    },
    {
        question: "What is the domain of the tangent function y = tan x?",
        options: [
            "IR",
            "IR - {n*pi, n in Z}",
            "IR - {(2n+1)pi/2, n in Z}",
            "[-1, 1]"
        ],
        answer: 2,
        explanation: "Tan x is undefined at odd multiples of pi/2, so its domain is IR - {(2n+1)pi/2}."
    },
    {
        question: "What is the range of the tangent function y = tan x?",
        options: ["[-1, 1]", "IR or (-∞, ∞)", "IR - (-1, 1)", "[0, ∞)"],
        answer: 1,
        explanation: "The tangent function can take any real number value, so its range is IR."
    },
    {
        question: "What is the domain of the cotangent function y = cot x?",
        options: [
            "IR",
            "IR - {n*pi, n in Z}",
            "IR - {(2n+1)pi/2, n in Z}",
            "[-1, 1]"
        ],
        answer: 1,
        explanation: "Cot x is undefined at integer multiples of pi, so its domain is IR - {n*pi}."
    },
    {
        question: "What is the range of the cotangent function y = cot x?",
        options: ["[-1, 1]", "IR", "IR - (-1, 1)", "[0, pi]"],
        answer: 1,
        explanation: "The range of the cotangent function is all real numbers IR."
    },
    {
        question: "What is the domain of the secant function y = sec x?",
        options: [
            "IR",
            "IR - {n*pi}",
            "IR - {(2n+1)pi/2, n in Z}",
            "[-1, 1]"
        ],
        answer: 2,
        explanation: "Sec x = 1/cos x, so it is undefined where cos x = 0, i.e., IR - {(2n+1)pi/2}."
    },
    {
        question: "What is the range of the secant function y = sec x?",
        options: ["[-1, 1]", "IR", "IR - (-1, 1) or |y| >= 1", "(0, ∞)"],
        answer: 2,
        explanation: "The secant function cannot take values in the open interval (-1, 1), so its range is IR - (-1, 1)."
    },
    {
        question: "What is the domain of the cosecant function y = csc x?",
        options: [
            "IR - {n*pi, n in Z}",
            "IR - {(2n+1)pi/2}",
            "IR",
            "[-1, 1]"
        ],
        answer: 0,
        explanation: "Csc x = 1/sin x, so it is undefined where sin x = 0, i.e., IR - {n*pi}."
    },
    {
        question: "What is the range of the cosecant function y = csc x?",
        options: ["[-1, 1]", "IR", "IR - (-1, 1) or |y| >= 1", "[1, ∞)"],
        answer: 2,
        explanation: "The range of cosecant is IR - (-1, 1) since |csc x| >= 1."
    },
    {
        question: "What is the maximum value of sin theta?",
        options: ["0", "1", "-1", "Infinity"],
        answer: 1,
        explanation: "The maximum value of the sine function is 1."
    },
    {
        question: "What is the minimum value of cos theta?",
        options: ["0", "1", "-1", "Unbounded"],
        answer: 2,
        explanation: "The minimum value of the cosine function is -1."
    },
    {
        question: "Secant and cosecant functions cannot take any values in which interval?",
        options: ["(-1, 1)", "[ -1, 1 ]", "(0, 1)", "(-∞, -1)"],
        answer: 0,
        explanation: "Sec and csc values always lie outside the interval (-1, 1)."
    },
    {
        question: "What is the domain of y = 4*sin(3x)?",
        options: ["[-4, 4]", "IR", "IR - {0}", "[-1, 1]"],
        answer: 1,
        explanation: "Since sine is defined everywhere, the domain is all real numbers IR."
    },
    {
        question: "What is the range of y = 4*sin(3x)?",
        options: ["IR", "[-1, 1]", "[-4, 4]", "[0, 4]"],
        answer: 2,
        explanation: "Multiplying sine range [-1, 1] by 4 gives the range [-4, 4]."
    },
    {
        question: "What is the domain of y = 1 / (2*cos x - 1)?",
        options: [
            "IR",
            "IR - {2n*pi +- pi/3, n in Z}",
            "IR - {n*pi}",
            "[-1, 1]"
        ],
        answer: 1,
        explanation: "The denominator 2*cos x - 1 != 0 implies cos x != 1/2, which occurs at x = 2n*pi +- pi/3."
    },
    {
        question: "What is the range of y = 1 / (2*cos x - 1)?",
        options: [
            "(-∞, -1/3] U [1, ∞)",
            "[-1/3, 1]",
            "IR",
            "(-1/3, 1)"
        ],
        answer: 0,
        explanation: "Evaluating bounds for cos x in [-1, 1] gives the range (-∞, -1/3] U [1, ∞)."
    },
    {
        question: "What is the domain of y = 1 / (2 - sin(3x))?",
        options: ["IR", "IR - {n*pi}", "IR - {pi/2}", "[-1, 1]"],
        answer: 0,
        explanation: "Since sin(3x) can never equal 2, the denominator is never zero, so domain is IR."
    },
    {
        question: "What is the range of y = 1 / (2 - sin(3x))?",
        options: ["IR", "[1/3, 1]", "[-1, 1]", "(-∞, 1]"],
        answer: 1,
        explanation: "Since -1 <= sin(3x) <= 1, 1 <= 2 - sin(3x) <= 3, yielding range [1/3, 1]."
    },
    {
        question: "Which of the following functions has a restricted domain excluding odd multiples of pi/2?",
        options: ["sin x", "cos x", "tan x", "cot x"],
        answer: 2,
        explanation: "Tan x is undefined at odd multiples of pi/2."
    },

    // --- Section 9.2: Periodicity of Trigonometric Functions (21 to 45) ---
    {
        question: "A periodic function satisfies the relation f(x + p) = f(x) where p is:",
        options: ["Any integer", "The period (smallest positive number)", "Zero", "Amplitude"],
        answer: 1,
        explanation: "Here p represents the period of the periodic function."
    },
    {
        question: "What is the fundamental period of the sine function y = sin x?",
        options: ["pi/2", "pi", "2*pi", "4*pi"],
        answer: 2,
        explanation: "The smallest positive real number for which sin(x + 2*pi) = sin x is 2*pi."
    },
    {
        question: "What is the fundamental period of the cosine function y = cos x?",
        options: ["pi", "2*pi", "pi/2", "3*pi/2"],
        answer: 1,
        explanation: "The period of the cosine function is 2*pi."
    },
    {
        question: "What is the fundamental period of the tangent function y = tan x?",
        options: ["2*pi", "pi/2", "pi", "4*pi"],
        answer: 2,
        explanation: "The tangent function repeats its values every pi units, so its period is pi."
    },
    {
        question: "What is the fundamental period of the cotangent function y = cot x?",
        options: ["2*pi", "pi", "pi/2", "2*pi/3"],
        answer: 1,
        explanation: "The cotangent function has a period of pi."
    },
    {
        question: "What is the period of f(x) = sin(ax + b)?",
        options: ["2*pi", "2*pi / |a|", "pi / |a|", "2*pi * |a|"],
        answer: 1,
        explanation: "For sin(ax + b), the period is scaled to 2*pi / |a|."
    },
    {
        question: "What is the period of f(x) = tan(ax + b)?",
        options: ["2*pi / |a|", "pi / |a|", "pi", "2*pi"],
        answer: 1,
        explanation: "The period of tan(ax + b) is pi / |a|."
    },
    {
        question: "What is the period of f(x) = sin(3x)?",
        options: ["2*pi", "3*pi", "2*pi / 3", "pi / 3"],
        answer: 2,
        explanation: "Using 2*pi / |a|, the period of sin(3x) is 2*pi / 3."
    },
    {
        question: "What is the period of f(x) = cos(2x / 5)?",
        options: ["2*pi / 5", "5*pi", "2*pi", "10*pi"],
        answer: 1,
        explanation: "Period = 2*pi / (2/5) = 2*pi * (5/2) = 5*pi."
    },
    {
        question: "What is the period of f(x) = tan(5x / 7)?",
        options: ["5*pi / 7", "7*pi / 5", "pi / 7", "7*pi"],
        answer: 1,
        explanation: "Period = pi / (5/7) = 7*pi / 5."
    },
    {
        question: "What is the period of f(x) = cot(3x) + sin(2x / 3)?",
        options: ["pi/3", "3*pi", "2*pi", "pi"],
        answer: 1,
        explanation: "Periods are pi/3 and 3*pi; their LCM is 3*pi."
    },
    {
        question: "What is the period of f(x) = 7*sin(3x + 5)?",
        options: ["2*pi", "2*pi / 3", "3*pi / 2", "7*pi / 3"],
        answer: 1,
        explanation: "Vertical scaling or constants do not change the period; period is 2*pi / 3."
    },
    {
        question: "What is the periodicity of cos^2(x)?",
        options: ["2*pi", "pi", "pi / 2", "4*pi"],
        answer: 1,
        explanation: "Even powers of sine and cosine halve the period, so cos^2(x) has a period of pi."
    },
    {
        question: "What is the periodicity of tan^3(x)?",
        options: ["2*pi", "pi / 2", "pi", "2*pi / 3"],
        answer: 2,
        explanation: "The period of tan^n(x) is always pi regardless of whether n is even or odd."
    },
    {
        question: "What is the period of y = 6*sec(2x - 3)?",
        options: ["2*pi", "pi", "pi / 2", "4*pi"],
        answer: 1,
        explanation: "Secant has period 2*pi, so for b = 2, period is 2*pi / 2 = pi."
    },
    {
        question: "What is the period of y = cos(5x + 4)?",
        options: ["2*pi", "2*pi / 5", "5*pi", "pi / 5"],
        answer: 1,
        explanation: "Period = 2*pi / 5."
    },
    {
        question: "What is the period of y = csc(4x)?",
        options: ["pi / 2", "2*pi", "pi", "pi / 4"],
        answer: 0,
        explanation: "Period = 2*pi / 4 = pi / 2."
    },
    {
        question: "If p is the period of f(x), what is the period of a*f(x) + b (where a > 0)?",
        options: ["a*p + b", "p / a", "p", "a*p"],
        answer: 2,
        explanation: "Adding constants or multiplying by a positive scalar does not change the period p."
    },
    {
        question: "What is the period of y = 2*sin(3x) + 3*cos(2x)?",
        options: ["pi", "2*pi", "3*pi", "6*pi"],
        answer: 1,
        explanation: "Periods are 2*pi/3 and 2*pi; their LCM is 2*pi."
    },
    {
        question: "Which trigonometric functions have a period of 2*pi?",
        options: [
            "sin, cos, tan, cot",
            "sin, cos, sec, csc",
            "tan, cot, sec, csc",
            "All six trig functions"
        ],
        answer: 1,
        explanation: "Sine, cosine, secant, and cosecant all have a fundamental period of 2*pi."
    },

    // --- Section 9.3: Maximum and Minimum Values (46 to 60) ---
    {
        question: "What is the maximum value of y = a + b*sin theta?",
        options: ["a + b", "a + |b|", "a - |b|", "|a| + |b|"],
        answer: 1,
        explanation: "The maximum value is given by a + |b|."
    },
    {
        question: "What is the minimum value of y = a + b*cos theta?",
        options: ["a - b", "a - |b|", "a + |b|", "-|b|"],
        answer: 1,
        explanation: "The minimum value is given by a - |b|."
    },
    {
        question: "What are the maximum and minimum values of y = 3 + 4*sin theta?",
        options: ["Max = 7, Min = -1", "Max = 4, Min = 3", "Max = 3, Min = -4", "Max = 7, Min = 3"],
        answer: 0,
        explanation: "Here a = 3, b = 4. Max = 3 + 4 = 7, Min = 3 - 4 = -1."
    },
    {
        question: "What are the maximum and minimum values of y = 1/3 - 5*cos theta?",
        options: ["Max = 16/3, Min = -14/3", "Max = 5, Min = -5", "Max = 14/3, Min = -16/3", "Max = 1/3, Min = -5"],
        answer: 0,
        explanation: "Max = 1/3 + |-5| = 16/3 and Min = 1/3 - |-5| = -14/3."
    },
    {
        question: "What is the maximum value of y = 1 + 2*sin theta?",
        options: ["2", "3", "1", " -1"],
        answer: 1,
        explanation: "Max = 1 + |2| = 3."
    },
    {
        question: "What is the minimum value of y = 3 + 2*cos(3theta - 2)?",
        options: ["1", "3", "5", " -1"],
        answer: 0,
        explanation: "Min = 3 - |2| = 1."
    },
    {
        question: "For the reciprocal function y = 1 / (1 + 3*sin(2theta - 15)), what is its maximum value?",
        options: ["1/4", "1/2", "4", "1"],
        answer: 0,
        explanation: "The inner function max is 1 + 3 = 4, so the reciprocal max is 1/4."
    },
    {
        question: "For the reciprocal function y = 1 / (1 + 3*sin(2theta - 15)), what is its minimum value?",
        options: ["-1/2", "-2", "1/3", "-1/3"],
        answer: 0,
        explanation: "The inner function min is 1 - 3 = -2, so the reciprocal min is 1 / (-2) = -1/2."
    },
    {
        question: "What is the maximum value of y = 2 - 2*cos theta?",
        options: ["2", "0", "4", " -2"],
        answer: 2,
        explanation: "Max = 2 + |-2| = 4."
    },
    {
        question: "What is the minimum value of y = 2 - 2*cos theta?",
        options: ["2", "0", "4", "-2"],
        answer: 1,
        explanation: "Min = 2 - |-2| = 0."
    },
    {
        question: "What is the maximum value of y = 1 / (4 + 3*sin theta)?",
        options: ["1", "1/7", "1", "1/4"],
        answer: 0,
        explanation: "Denominator minimum is 4 - 3 = 1, so max value is 1/1 = 1."
    },
    {
        question: "What is the minimum value of y = 1 / (4 + 3*sin theta)?",
        options: ["1/7", "1/4", "1", "1/5"],
        answer: 0,
        explanation: "Denominator maximum is 4 + 3 = 7, so minimum value is 1/7."
    },
    {
        question: "What is the maximum value of the function f(theta) = 7*cos x + 24*sin x?",
        options: ["25", "24", "7", "31"],
        answer: 0,
        explanation: "Max value for a*cos x + b*sin x is sqrt(a^2 + b^2) = sqrt(49 + 576) = sqrt(625) = 25."
    },
    {
        question: "What is the minimum value of the function f(theta) = 17*sin(4theta)?",
        options: ["17", "-17", "4", "-4"],
        answer: 1,
        explanation: "Minimum value is -|17| = -17."
    },
    {
        question: "If the range of f(theta) = a*sin(2theta) + b (where a > 0) is [3, 5], what is a?",
        options: ["1", "2", "3", "5"],
        answer: 0,
        explanation: "Max = a + b = 5 and Min = -a + b = 3. Subtracting gives 2a = 2 => a = 1."
    },

    // --- Section 9.4 & 9.5: Graphs, Symmetry, and Even/Odd Functions (61 to 72) ---
    {
        question: "The graph of the sine function is symmetric with respect to the:",
        options: ["x-axis", "y-axis", "Origin", "Line y = x"],
        answer: 2,
        explanation: "Since sin(-x) = -sin x, the sine graph is symmetric about the origin, making it an odd function."
    },
    {
        question: "The graph of the cosine function is symmetric with respect to the:",
        options: ["x-axis", "y-axis", "Origin", "Line y = x"],
        answer: 1,
        explanation: "Since cos(-x) = cos x, the cosine graph is symmetric about the y-axis, making it an even function."
    },
    {
        question: "A function f(x) is classified as odd if and only if:",
        options: ["f(-x) = f(x)", "f(-x) = -f(x)", "f(-x) = 1/f(x)", "f(x + pi) = f(x)"],
        answer: 1,
        explanation: "An odd function satisfies f(-x) = -f(x)."
    },
    {
        question: "A function f(x) is classified as even if and only if:",
        options: ["f(-x) = f(x)", "f(-x) = -f(x)", "f(x) = -f(x)", "f(-x) = -1/f(x)"],
        answer: 0,
        explanation: "An even function satisfies f(-x) = f(x)."
    },
    {
        question: "In the general sinusoidal equation y = a*sin(b(x - c)) + d, what does 'a' represent?",
        options: ["Period", "Amplitude", "Phase shift", "Vertical shift"],
        answer: 1,
        explanation: "The parameter 'a' represents the vertical stretch or amplitude."
    },
    {
        question: "In y = a*sin(b(x - c)) + d, what does 'd' represent?",
        options: ["Amplitude", "Period", "Midline / Vertical translation", "Phase shift"],
        answer: 2,
        explanation: "The parameter 'd' represents the vertical translation (midline)."
    },
    {
        question: "What is the amplitude of y = 3*sin(2x)?",
        options: ["2", "3", "pi", "2*pi"],
        answer: 1,
        explanation: "Amplitude is given by the coefficient |a| = 3."
    },
    {
        question: "Is the function f(x) = x^3 * sin x an even or odd function?",
        options: ["Even", "Odd", "Neither even nor odd", "Both even and odd"],
        answer: 0,
        explanation: "f(-x) = (-x)^3 * sin(-x) = (-x^3) * (-sin x) = x^3 * sin x = f(x), so it is even."
    },
    {
        question: "What is the period of the function y = 2*cos(x / 3)?",
        options: ["2*pi", "6*pi", "2*pi / 3", "3*pi / 2"],
        answer: 1,
        explanation: "Period = 2*pi / (1/3) = 6*pi."
    },
    {
        question: "What is the maximum value of the function y = 5 - 3*sin(2x)?",
        options: ["2", "5", "8", "3"],
        answer: 2,
        explanation: "Max = a + |b| = 5 + |-3| = 5 + 3 = 8."
    },
    {
        question: "Which of the following functions represents an odd trigonometric function?",
        options: ["cos x", "sec x", "sin x", "All of the above"],
        answer: 2,
        explanation: "Sine is an odd function because sin(-x) = -sin x, whereas cosine and secant are even."
    },
    {
        question: "What is the domain of the cosecant function y = csc x in terms of excluded values?",
        options: ["x != (2n+1)*pi/2", "x != n*pi", "x != 2*n*pi", "All real numbers"],
        answer: 1,
        explanation: "Cosecant is undefined where sin x = 0, which occurs at integer multiples of pi, i.e., x != n*pi."
    },
    {
        question: "Is the function f(x) = 3*sin x + 4*cos x even, odd, or neither?",
        options: ["Even", "Odd", "Neither even nor odd", "Both"],
        answer: 2,
        explanation: "f(-x) = -3*sin x + 4*cos x, which equals neither f(x) nor -f(x)."
    },
    {
        question: "Is the function f(x) = tan x / (x - sin x) even or odd?",
        options: ["Even", "Odd", "Neither", "Constant"],
        answer: 0,
        explanation: "Replacing x with -x yields f(-x) = f(x), making it an even function."
    },
    {
        question: "What is the nature of the tangent function y = tan x in terms of symmetry?",
        options: ["Even function", "Odd function", "Neither", "Periodic only"],
        answer: 1,
        explanation: "Tangent is an odd function because tan(-x) = -tan x."
    },
    {
        question: "What is the nature of the secant function y = sec x in terms of symmetry?",
        options: ["Even function", "Odd function", "Neither", "Constant"],
        answer: 0,
        explanation: "Secant is an even function because sec(-x) = sec x."
    },

    // --- Section 9.6: Applications (Ferris Wheels, AC Voltage, etc.) (73 to 80) ---
    {
        question: "A Ferris wheel has a diameter of 30 m and its center is 17 m above the ground. What is its amplitude?",
        options: ["30 m", "17 m", "15 m", "47 m"],
        answer: 2,
        explanation: "Amplitude is half of the diameter, i.e., 30 / 2 = 15 m."
    },
    {
        question: "What is the vertical shift (midline) for the Ferris wheel described with center 17 m above the ground?",
        options: ["15 m", "17 m", "30 m", "47 m"],
        answer: 1,
        explanation: "The midline corresponds to the center height, which is 17 m."
    },
    {
        question: "In Canada, standard AC frequency is 60 Hz (60 cycles per second). What is the period of this AC cycle?",
        options: ["60 seconds", "1/60 seconds", "2*pi seconds", "30 seconds"],
        answer: 1,
        explanation: "The period is the reciprocal of frequency, i.e., 1/60 seconds."
    },
    {
        question: "If the maximum voltage of an AC circuit is 170 V, what is the amplitude of the voltage function?",
        options: ["170 V", "340 V", "85 V", "60 V"],
        answer: 0,
        explanation: "The amplitude equals the maximum peak value, which is 170 V."
    },
    {
        question: "A pendulum swings such that its height is modeled by a cosine function. If its resting height is 16 cm and highest point is 20 cm, what is the amplitude?",
        options: ["16 cm", "20 cm", "4 cm", "2 cm"],
        answer: 3,
        explanation: "Amplitude = (Max - Min) / 2 = (20 - 16) / 2 = 2 cm."
    },
    {
        question: "For a pendulum swinging between 16 cm and 20 cm height, what is the vertical shift (midline)?",
        options: ["16 cm", "18 cm", "20 cm", "2 cm"],
        answer: 1,
        explanation: "Midline = (Max + Min) / 2 = (20 + 16) / 2 = 18 cm."
    },
    {
        question: "If a Ferris wheel completes 1 full revolution in 16 minutes, what is its period?",
        options: ["16 minutes", "8 minutes", "32 minutes", "1 minute"],
        answer: 0,
        explanation: "The time taken for 1 complete revolution is the period, which is 16 minutes."
    },
    {
        question: "The top of a flagpole sways 8 cm to the right and 8 cm to the left. What is the amplitude of this motion?",
        options: ["16 cm", "8 cm", "4 cm", "0 cm"],
        answer: 1,
        explanation: "The maximum displacement from the resting position is 8 cm, which is the amplitude."
    },
    {
        question: "If the flagpole sways 8 cm to the right and 8 cm to the left, what is the vertical shift (midline)?",
        options: ["16 cm", "8 cm", "4 cm", "0 cm"],
        answer: 3,
        explanation: "The vertical shift is the average of the maximum and minimum heights, which is (20 + 16) / 2 = 18 cm. However, since the motion is symmetric about the midline, the midline itself is at 18 cm, and the vertical shift is 0 cm."
    }
];
// Chapter 9 - Preparation Page Controller Logic (Coco Code)
console.log("TOTAL CHAPTER 9 MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsMaths9",
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
                    `You completed all ${questions.length} questions for Mathematics Chapter 9.`;
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