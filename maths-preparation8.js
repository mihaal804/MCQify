// 1. Chapter 8 - 80 Pure Math & Conceptual MCQs Data & LocalStorage Initialization
const questions = [
    // --- Section 8.1 & 8.2: Distance Formula & Fundamental Law (1 to 20) ---
    {
        question: "The distance between two points (x1, y1) and (x2, y2) in a plane is given by:",
        options: [
            "sqrt((x1+x2)^2 + (y1+y2)^2)",
            "sqrt((x1-x2)^2 + (y1-y2)^2)",
            "(x1-x2)^2 + (y1-y2)^2",
            "sqrt(x1^2 + y1^2)"
        ],
        answer: 1,
        explanation: "The standard distance formula is d = sqrt((x1-x2)^2 + (y1-y2)^2)."
    },
    {
        question: "What is the fundamental law of trigonometry?",
        options: [
            "cos(alpha - beta) = cos(alpha)cos(beta) + sin(alpha)sin(beta)",
            "cos(alpha + beta) = cos(alpha)cos(beta) + sin(alpha)sin(beta)",
            "sin(alpha - beta) = sin(alpha)cos(beta) - cos(alpha)sin(beta)",
            "sin(alpha + beta) = sin(alpha)cos(beta) + cos(alpha)sin(beta)"
        ],
        answer: 0,
        explanation: "The fundamental law states that cos(alpha - beta) = cos(alpha)cos(beta) + sin(alpha)sin(beta)."
    },
    {
        question: "By using the fundamental law, cos(alpha + beta) is equal to:",
        options: [
            "cos(alpha)cos(beta) + sin(alpha)sin(beta)",
            "cos(alpha)cos(beta) - sin(alpha)sin(beta)",
            "sin(alpha)cos(beta) + cos(alpha)sin(beta)",
            "sin(alpha)cos(beta) - cos(alpha)sin(beta)"
        ],
        answer: 1,
        explanation: "Replacing beta with -beta in fundamental law gives cos(alpha + beta) = cos(alpha)cos(beta) - sin(alpha)sin(beta)."
    },
    {
        question: "The value of cos(-beta) is always equal to:",
        options: ["-cos(beta)", "sin(beta)", "cos(beta)", "-sin(beta)"],
        answer: 2,
        explanation: "Cosine is an even function, so cos(-beta) = cos(beta)."
    },
    {
        question: "The value of sin(-theta) is equal to:",
        options: ["sin(theta)", "-sin(theta)", "cos(theta)", "-cos(theta)"],
        answer: 1,
        explanation: "Sine is an odd function, so sin(-theta) = -sin(theta)."
    },
    {
        question: "What is the value of cos(90 degrees - beta)?",
        options: ["cos(beta)", "-cos(beta)", "sin(beta)", "-sin(beta)"],
        answer: 2,
        explanation: "Deduction from fundamental law shows cos(90 degrees - beta) = sin(beta)."
    },
    {
        question: "The value of sin(90 degrees + alpha) is equal to:",
        options: ["sin(alpha)", "-sin(alpha)", "cos(alpha)", "-cos(alpha)"],
        answer: 2,
        explanation: "Using fundamental law deductions, sin(90 degrees + alpha) = cos(alpha)."
    },
    {
        question: "The value of cos(90 degrees + alpha) is equal to:",
        options: ["sin(alpha)", "-sin(alpha)", "cos(alpha)", "-cos(alpha)"],
        answer: 1,
        explanation: "cos(90 degrees + alpha) evaluates to -sin(alpha)."
    },
    {
        question: "The expansion of tan(alpha + beta) is given by:",
        options: [
            "(tan(alpha) + tan(beta)) / (1 - tan(alpha)tan(beta))",
            "(tan(alpha) - tan(beta)) / (1 + tan(alpha)tan(beta))",
            "(tan(alpha) + tan(beta)) / (1 + tan(alpha)tan(beta))",
            "tan(alpha)tan(beta) / (1 - tan(alpha)tan(beta))"
        ],
        answer: 0,
        explanation: "tan(alpha + beta) = sin(alpha+beta)/cos(alpha+beta) simplifies to (tan(alpha)+tan(beta))/(1-tan(alpha)tan(beta))."
    },
    {
        question: "The expansion of tan(alpha - beta) is given by:",
        options: [
            "(tan(alpha) + tan(beta)) / (1 - tan(alpha)tan(beta))",
            "(tan(alpha) - tan(beta)) / (1 + tan(alpha)tan(beta))",
            "1 - tan(alpha)tan(beta) / tan(alpha) + tan(beta)",
            "(tan(alpha) - tan(beta)) / (1 - tan(alpha)tan(beta))"
        ],
        answer: 1,
        explanation: "tan(alpha - beta) = (tan(alpha) - tan(beta)) / (1 + tan(alpha)tan(beta))."
    },
    {
        question: "Angles connected with basic angles by a right angle or its multiple are called:",
        options: ["Complementary angles", "Supplementary angles", "Allied angles", "Coterminal angles"],
        answer: 2,
        explanation: "Angles of measure pi/2 +- theta, pi +- theta, etc., are called allied angles."
    },
    {
        question: "When an allied angle contains an odd multiple of a right angle, the trigonometric ratio:",
        options: [
            "Remains unchanged",
            "Changes to its co-ratio",
            "Becomes zero",
            "Becomes undefined"
        ],
        answer: 1,
        explanation: "Sine changes to cosine, tangent to cotangent, etc., for odd multiples of pi/2."
    },
    {
        question: "When an allied angle contains an even multiple of a right angle, the trigonometric ratio:",
        options: [
            "Changes to its co-ratio",
            "Does not change",
            "Becomes reciprocal",
            "Becomes negative"
        ],
        answer: 1,
        explanation: "Trigonometric ratios remain unchanged when the allied angle contains an even multiple of pi/2."
    },
    {
        question: "If alpha, beta, gamma are interior angles of a triangle, then tan(alpha) + tan(beta) + tan(gamma) equals:",
        options: [
            "tan(alpha)tan(beta)tan(gamma)",
            "0",
            "1",
            "cot(alpha)cot(beta)cot(gamma)"
        ],
        answer: 0,
        explanation: "For any triangle, tan(alpha) + tan(beta) + tan(gamma) = tan(alpha)tan(beta)tan(gamma)."
    },
    {
        question: "If alpha, beta, gamma are interior angles of a triangle, then cot(beta)cot(gamma) + cot(alpha)cot(gamma) + cot(alpha)cot(beta) equals:",
        options: ["0", "1", "-1", "3"],
        answer: 1,
        explanation: "Dividing the triangle tangent identity by its product yields cot(beta)cot(gamma) + cot(alpha)cot(gamma) + cot(alpha)cot(beta) = 1."
    },
    {
        question: "The expression a*sin(theta) + b*cos(theta) can be expressed in the form r*sin(theta + phi) where r equals:",
        options: ["a + b", "sqrt(a^2 + b^2)", "a^2 - b^2", "sqrt(a - b)"],
        answer: 1,
        explanation: "Here r = sqrt(a^2 + b^2) and phi = tan^(-1)(b/a)."
    },
    {
        question: "In expressing a*sin(theta) + b*cos(theta) as r*sin(theta + phi), the phase angle phi is given by:",
        options: ["tan^(-1)(a/b)", "sin^(-1)(b/a)", "tan^(-1)(b/a)", "cos^(-1)(a/r)"],
        answer: 2,
        explanation: "The angle phi is given by tan^(-1)(b/a)."
    },
    {
        question: "What is the exact value of cos(15 degrees) using 60 degrees - 45 degrees?",
        options: [
            "(sqrt(6) - sqrt(2)) / 4",
            "(sqrt(6) + sqrt(2)) / 4",
            "(sqrt(3) - 1) / 2",
            "1 / sqrt(2)"
        ],
        answer: 1,
        explanation: "cos(15 degrees) = cos(60 - 45) = cos60cos45 + sin60sin45 = (sqrt(6) + sqrt(2))/4."
    },
    {
        question: "What is the exact value of sin(15 degrees)?",
        options: [
            "(sqrt(6) - sqrt(2)) / 4",
            "(sqrt(6) + sqrt(2)) / 4",
            "sqrt(3)/2",
            "1/2"
        ],
        answer: 0,
        explanation: "sin(15 degrees) = sin(60 - 45) = (sqrt(6) - sqrt(2))/4."
    },
    {
        question: "The exact value of tan(15 degrees) is:",
        options: ["2 - sqrt(3)", "2 + sqrt(3)", "sqrt(3)", "1 / sqrt(3)"],
        answer: 0,
        explanation: "tan(15 degrees) = sin15/cos15 = 2 - sqrt(3)."
    },

    // --- Section 8.5: Double, Half, and Triple Angle Identities (21 to 55) ---
    {
        question: "The double angle identity for sin(2alpha) is:",
        options: [
            "2*sin(alpha)*cos(alpha)",
            "cos^2(alpha) - sin^2(alpha)",
            "2*cos^2(alpha) - 1",
            "2*tan(alpha) / (1 + tan^2(alpha))"
        ],
        answer: 0,
        explanation: "sin(2alpha) = 2*sin(alpha)*cos(alpha)."
    },
    {
        question: "Which of the following is an expression for cos(2alpha)?",
        options: [
            "cos^2(alpha) - sin^2(alpha)",
            "2*cos^2(alpha) - 1",
            "1 - 2*sin^2(alpha)",
            "All of the above"
        ],
        answer: 3,
        explanation: "cos(2alpha) has multiple equivalent forms: cos^2-sin^2, 2cos^2-1, and 1-2sin^2."
    },
    {
        question: "The double angle formula for tan(2alpha) is:",
        options: [
            "2*tan(alpha) / (1 - tan^2(alpha))",
            "2*tan(alpha) / (1 + tan^2(alpha))",
            "tan^2(alpha) / (1 - tan(alpha))",
            "1 - tan^2(alpha) / 2*tan(alpha)"
        ],
        answer: 0,
        explanation: "tan(2alpha) = 2*tan(alpha) / (1 - tan^2(alpha))."
    },
    {
        question: "The half-angle identity for cos(theta/2) in terms of cos(theta) is:",
        options: [
            "sqrt((1 - cos(theta)) / 2)",
            "sqrt((1 + cos(theta)) / 2)",
            "(1 - cos(theta)) / sin(theta)",
            "sqrt(1 - cos^2(theta))"
        ],
        answer: 1,
        explanation: "cos(theta/2) = +-sqrt((1 + cos(theta))/2)."
    },
    {
        question: "The half-angle identity for sin(theta/2) is:",
        options: [
            "sqrt((1 + cos(theta)) / 2)",
            "sqrt((1 - cos(theta)) / 2)",
            "(1 + cos(theta)) / sin(theta)",
            "2*sin(theta/2)*cos(theta/2)"
        ],
        answer: 1,
        explanation: "sin(theta/2) = +-sqrt((1 - cos(theta))/2)."
    },
    {
        question: "The half-angle identity for tan(theta/2) is:",
        options: [
            "sqrt((1 - cos(theta)) / (1 + cos(theta))",
            "(1 - cos(theta)) / sin(theta)",
            "sin(theta) / (1 + cos(theta))",
            "All of the above"
        ],
        answer: 3,
        explanation: "tan(theta/2) can be expressed in all these equivalent forms."
    },
    {
        question: "The triple angle identity for sin(3alpha) is:",
        options: [
            "3*sin(alpha) - 4*sin^3(alpha)",
            "4*cos^3(alpha) - 3*cos(alpha)",
            "3*sin(alpha) + 4*sin^3(alpha)",
            "4*sin^3(alpha) - 3*sin(alpha)"
        ],
        answer: 0,
        explanation: "sin(3alpha) = 3*sin(alpha) - 4*sin^3(alpha)."
    },
    {
        question: "The triple angle identity for cos(3alpha) is:",
        options: [
            "3*cos(alpha) - 4*cos^3(alpha)",
            "4*cos^3(alpha) - 3*cos(alpha)",
            "4*cos^3(alpha) + 3*cos(alpha)",
            "3*cos^3(alpha) - 4*cos(alpha)"
        ],
        answer: 1,
        explanation: "cos(3alpha) = 4*cos^3(alpha) - 3*cos(alpha)."
    },
    {
        question: "The triple angle identity for tan(3alpha) is:",
        options: [
            "(3*tan(alpha) - tan^3(alpha)) / (1 - 3*tan^2(alpha))",
            "(3*tan(alpha) + tan^3(alpha)) / (1 + 3*tan^2(alpha))",
            "(tan(alpha) - 3*tan^3(alpha)) / (3 - tan^2(alpha))",
            "3*tan(alpha) / (1 - 3*tan^2(alpha))"
        ],
        answer: 0,
        explanation: "tan(3alpha) = (3*tan(alpha) - tan^3(alpha)) / (1 - 3*tan^2(alpha))."
    },
    {
        question: "What is the value of (sin(theta) + cos(theta))^2 simplified?",
        options: [
            "1",
            "1 + sin(2theta)",
            "1 - sin(2theta)",
            "2*sin(theta)*cos(theta)"
        ],
        answer: 1,
        explanation: "(sin(theta) + cos(theta))^2 = sin^2 + cos^2 + 2sin*cos = 1 + sin(2theta)."
    },
    {
        question: "What is the value of (sin(theta) - cos(theta))^2 simplified?",
        options: [
            "1 - sin(2theta)",
            "1 + sin(2theta)",
            "cos(2theta)",
            "sin(2theta) - 1"
        ],
        answer: 0,
        explanation: "(sin(theta) - cos(theta))^2 = 1 - sin(2theta)."
    },
    {
        question: "What is cos^4(x) - sin^4(x) equal to?",
        options: ["cos(4x)", "cos(2x)", "sin(2x)", "1"],
        answer: 1,
        explanation: "cos^4 - sin^4 = (cos^2 - sin^2)(cos^2 + sin^2) = cos(2x)(1) = cos(2x)."
    },
    {
        question: "The expression cos^2(alpha) in terms of double angle is:",
        options: [
            "(1 + cos(2alpha)) / 2",
            "(1 - cos(2alpha)) / 2",
            "1 + cos(2alpha)",
            "cos(2alpha) / 2"
        ],
        answer: 0,
        explanation: "cos^2(alpha) = (1 + cos(2alpha)) / 2."
    },
    {
        question: "The expression sin^2(alpha) in terms of double angle is:",
        options: [
            "(1 + cos(2alpha)) / 2",
            "(1 - cos(2alpha)) / 2",
            "1 - cos(2alpha)",
            "sin(2alpha) / 2"
        ],
        answer: 1,
        explanation: "sin^2(alpha) = (1 - cos(2alpha)) / 2."
    },
    {
        question: "What is the exact value of sin(22.5 degrees)*cos(22.5 degrees)?",
        options: ["1/2", "sqrt(2)/4", "1 / (2*sqrt(2))", "sqrt(3)/4"],
        answer: 2,
        explanation: "sin(22.5)cos(22.5) = sin(45)/2 = (1/sqrt(2))/2 = 1 / (2*sqrt(2))."
    },
    {
        question: "Expressing 4*sin^4(x) in terms of cosines to power 1 contains which multiple angle terms?",
        options: ["cos(2x) and cos(4x)", "cos(3x)", "cos(x) and cos(3x)", "cos(4x) only"],
        answer: 0,
        explanation: "Reducing power gives terms involving constants, cos(2x), and cos(4x)."
    },
    {
        question: "csc(2alpha) is equal to which of the following?",
        options: [
            "(tan(alpha) + cot(alpha)) / 2",
            "2*sin(alpha)*cos(alpha)",
            "1 / (2*sin(alpha))",
            "sec(alpha)/2"
        ],
        answer: 0,
        explanation: "csc(2alpha) = 1/sin(2alpha) = (tan(alpha) + cot(alpha))/2."
    },
    {
        question: "Which of the following identities represents cot(beta/2) + tan(beta/2)?",
        options: [
            "2*csc(beta)",
            "2*sec(beta)",
            "cot(beta)",
            "tan(beta)"
        ],
        answer: 0,
        explanation: "tan(beta/2) + cot(beta/2) = 2*csc(beta)."
    },
    {
        question: "The expression csc(2alpha) - cot(2alpha) is identically equal to:",
        options: ["tan(alpha)", "cot(alpha)", "sin(alpha)", "cos(alpha)"],
        answer: 0,
        explanation: "csc(2alpha) - cot(2alpha) simplifies to tan(alpha)."
    },
    {
        question: "What is the value of (1 - cos(2theta)) / sin(2theta)?",
        options: ["tan(theta)", "cot(theta)", "sin(theta)", "cos(theta)"],
        answer: 0,
        explanation: "(2*sin^2(theta)) / (2*sin(theta)*cos(theta)) = tan(theta)."
    },
    {
        question: "If sin(theta) = 3/5 in quadrant I, what is the value of sin(2theta)?",
        options: ["24/25", "7/25", "12/25", "6/25"],
        answer: 0,
        explanation: "sin(2theta) = 2*(3/5)*(4/5) = 24/25."
    },
    {
        question: "If sin(theta) = 3/5 in quadrant I, what is the value of cos(2theta)?",
        options: ["24/25", "7/25", "-7/25", "-24/25"],
        answer: 1,
        explanation: "cos(2theta) = 1 - 2*(3/5)^2 = 7/25."
    },
    {
        question: "What is the exact value of sin(75 degrees)?",
        options: [
            "(sqrt(6) + sqrt(2)) / 4",
            "(sqrt(6) - sqrt(2)) / 4",
            "sqrt(3)/2",
            "1/2"
        ],
        answer: 0,
        explanation: "sin(75 degrees) = cos(15 degrees) = (sqrt(6) + sqrt(2))/4."
    },
    {
        question: "What is the exact value of cos(75 degrees)?",
        options: [
            "(sqrt(6) + sqrt(2)) / 4",
            "(sqrt(6) - sqrt(2)) / 4",
            "(sqrt(3) - 1) / (2*sqrt(2))",
            "Both B and C"
        ],
        answer: 3,
        explanation: "cos(75 degrees) = (sqrt(6) - sqrt(2))/4."
    },
    {
        question: "Verify whether (1 + cos(2theta)) / sin(2theta) equals:",
        options: ["cot(theta)", "tan(theta)", "sec(theta)", "csc(theta)"],
        answer: 0,
        explanation: "(2*cos^2(theta)) / (2*sin(theta)*cos(theta)) = cot(theta)."
    },
    {
        question: "The formula sqrt((1 - cos(theta)) / (1 + cos(theta))) is equal to which half-angle form?",
        options: ["tan(theta/2)", "cot(theta/2)", "sin(theta/2)", "cos(theta/2)"],
        answer: 0,
        explanation: "This is the positive/principal half-angle expression for tan(theta/2)."
    },
    {
        question: "What is the value of cos^2(x) - sin^2(x) when x = 30 degrees?",
        options: ["1/2", "sqrt(3)/2", "0", "1"],
        answer: 0,
        explanation: "cos(60 degrees) = 1/2."
    },
    {
        question: "If alpha is in quadrant III, then sin(alpha/2) will be:",
        options: ["Positive", "Negative", "Zero", "Undefined"],
        answer: 0,
        explanation: "If alpha is in QIII (pi < alpha < 3pi/2), then alpha/2 is in QII (pi/2 < alpha/2 < 3pi/4), where sine is positive."
    },
    {
        question: "If alpha is in quadrant III, then cos(alpha/2) will be:",
        options: ["Positive", "Negative", "Zero", "Undefined"],
        answer: 1,
        explanation: "In QII, cosine is negative."
    },
    {
        question: "Which identity relates sec(2x) with sum of fractions involving sin(x) and cos(x)?",
        options: [
            "sec(2x) = cos(x)/(cos(x)+sin(x)) + sin(x)/(cos(x)-sin(x))",
            "sec(2x) = tan(x) + cot(x)",
            "sec(2x) = 1 / cos(2x)",
            "Both A and C"
        ],
        answer: 3,
        explanation: "The fractional decomposition is a verified identity for sec(2x)."
    },

    // --- Section 8.6: Sum, Difference, and Product Formulas (56 to 80) ---
    {
        question: "The product-to-sum formula for 2*sin(alpha)*cos(beta) is:",
        options: [
            "sin(alpha + beta) + sin(alpha - beta)",
            "sin(alpha + beta) - sin(alpha - beta)",
            "cos(alpha + beta) + cos(alpha - beta)",
            "cos(alpha + beta) - cos(alpha - beta)"
        ],
        answer: 0,
        explanation: "2*sin(alpha)*cos(beta) = sin(alpha + beta) + sin(alpha - beta)."
    },
    {
        question: "The product-to-sum formula for 2*cos(alpha)*sin(beta) is:",
        options: [
            "sin(alpha + beta) + sin(alpha - beta)",
            "sin(alpha + beta) - sin(alpha - beta)",
            "cos(alpha + beta) + cos(alpha - beta)",
            "-2*sin(alpha)*sin(beta)"
        ],
        answer: 1,
        explanation: "2*cos(alpha)*sin(beta) = sin(alpha + beta) - sin(alpha - beta)."
    },
    {
        question: "The product-to-sum formula for 2*cos(alpha)*cos(beta) is:",
        options: [
            "sin(alpha + beta) + sin(alpha - beta)",
            "cos(alpha + beta) + cos(alpha - beta)",
            "cos(alpha + beta) - cos(alpha - beta)",
            "-2*sin(alpha)*sin(beta)"
        ],
        answer: 1,
        explanation: "2*cos(alpha)*cos(beta) = cos(alpha + beta) + cos(alpha - beta)."
    },
    {
        question: "The product-to-sum formula for -2*sin(alpha)*sin(beta) is:",
        options: [
            "cos(alpha + beta) - cos(alpha - beta)",
            "cos(alpha + beta) + cos(alpha - beta)",
            "sin(alpha + beta) - sin(alpha - beta)",
            "sin(alpha + beta) + sin(alpha - beta)"
        ],
        answer: 0,
        explanation: "-2*sin(alpha)*sin(beta) = cos(alpha + beta) - cos(alpha - beta)."
    },
    {
        question: "The sum-to-product formula for sin(p) + sin(q) is:",
        options: [
            "2*sin((p+q)/2)*cos((p-q)/2)",
            "2*cos((p+q)/2)*sin((p-q)/2)",
            "2*cos((p+q)/2)*cos((p-q)/2)",
            "-2*sin((p+q)/2)*sin((p-q)/2)"
        ],
        answer: 0,
        explanation: "sin(p) + sin(q) = 2*sin((p+q)/2)*cos((p-q)/2)."
    },
    {
        question: "The sum-to-product formula for sin(p) - sin(q) is:",
        options: [
            "2*sin((p+q)/2)*cos((p-q)/2)",
            "2*cos((p+q)/2)*sin((p-q)/2)",
            "2*cos((p+q)/2)*cos((p-q)/2)",
            "-2*sin((p+q)/2)*sin((p-q)/2)"
        ],
        answer: 1,
        explanation: "sin(p) - sin(q) = 2*cos((p+q)/2)*sin((p-q)/2)."
    },
    {
        question: "The sum-to-product formula for cos(p) + cos(q) is:",
        options: [
            "2*sin((p+q)/2)*cos((p-q)/2)",
            "2*cos((p+q)/2)*sin((p-q)/2)",
            "2*cos((p+q)/2)*cos((p-q)/2)",
            "-2*sin((p+q)/2)*sin((p-q)/2)"
        ],
        answer: 2,
        explanation: "cos(p) + cos(q) = 2*cos((p+q)/2)*cos((p-q)/2)."
    },
    {
        question: "The sum-to-product formula for cos(p) - cos(q) is:",
        options: [
            "2*cos((p+q)/2)*cos((p-q)/2)",
            "-2*sin((p+q)/2)*sin((p-q)/2)",
            "2*sin((p+q)/2)*sin((p-q)/2)",
            "-2*cos((p+q)/2)*cos((p-q)/2)"
        ],
        answer: 1,
        explanation: "cos(p) - cos(q) = -2*sin((p+q)/2)*sin((p-q)/2)."
    },
    {
        question: "What is the product form of cos(45 degrees) - cos(15 degrees)?",
        options: [
            "-2*sin(30 degrees)*sin(15 degrees)",
            "2*cos(30 degrees)*cos(15 degrees)",
            "-2*cos(30 degrees)*sin(15 degrees)",
            "2*sin(30 degrees)*cos(15 degrees)"
        ],
        answer: 0,
        explanation: "Using sum-to-product formula: -2*sin((45+15)/2)*sin((45-15)/2) = -2*sin(30)*sin(15)."
    },
    {
        question: "The expression (sin(x) + sin(y)) / (cos(x) + cos(y)) simplifies to:",
        options: [
            "tan((x+y)/2)",
            "cot((x+y)/2)",
            "tan(x-y)",
            "cot(x+y)"
        ],
        answer: 0,
        explanation: "Applying sum-to-product formulas for both numerator and denominator gives tan((x+y)/2)."
    },
    {
        question: "What is the product value of cos(80 degrees)*cos(60 degrees)*cos(40 degrees)*cos(20 degrees)?",
        options: ["1/16", "1/8", "1/4", "sqrt(3)/16"],
        answer: 0,
        explanation: "This product equals 1/16."
    },
    {
        question: "What is the product value of sin(70 degrees)*sin(50 degrees)*sin(30 degrees)*sin(10 degrees)?",
        options: ["1/16", "1/8", "3/16", "1/32"],
        answer: 0,
        explanation: "This product equals 1/16."
    },
    {
        question: "Expressing 2*cos(6theta)*sin(3theta) as a sum or difference yields:",
        options: [
            "sin(9theta) - sin(3theta)",
            "sin(9theta) + sin(3theta)",
            "cos(9theta) - cos(3theta)",
            "cos(9theta) + cos(3theta)"
        ],
        answer: 0,
        explanation: "2*cos(alpha)*sin(beta) = sin(alpha+beta) - sin(alpha-beta) = sin(9theta) - sin(3theta)."
    },
    {
        question: "What is the simplified value of sin(40 degrees)*cos(20 degrees) + cos(40 degrees)*sin(20 degrees)?",
        options: ["sqrt(3)/2", "1/2", "1", "sqrt(2)/2"],
        answer: 0,
        explanation: "This expands to sin(40 + 20) = sin(60 degrees) = sqrt(3)/2."
    },
    {
        question: "The ratio (sin(6beta) + sin(4beta)) / (sin(6beta) - sin(4beta)) is equal to:",
        options: [
            "tan(5beta) * cot(beta)",
            "cot(5beta) * tan(beta)",
            "tan(3beta) * cot(2beta)",
            "tan(beta) * cot(beta)"
        ],
        answer: 0,
        explanation: "Using sum-to-product formulas simplifies this ratio to tan(5beta)*cot(beta)."
    },
    {
        question: "The expression (cos(3theta) + cos(theta)) / (cos(3theta) - cos(theta)) is equal to:",
        options: [
            "-cot(2theta) * cot(theta)",
            "tan(2theta) * tan(theta)",
            "-tan(2theta) * cot(theta)",
            "cot(2theta) * tan(theta)"
        ],
        answer: 0,
        explanation: "Applying sum-to-product formulas gives -cot(2theta)*cot(theta)."
    },
    {
        question: "What is the expansion of sin(3theta) + sin(theta) using sum-to-product?",
        options: [
            "4*cos^2(theta)*sin(theta)",
            "2*sin(2theta)*cos(theta)",
            "4*sin^2(theta)*cos(theta)",
            "2*cos(2theta)*sin(theta)"
        ],
        answer: 0,
        explanation: "sin(3theta) + sin(theta) = 2*sin(2theta)*cos(theta) which further simplifies to 4*cos^2(theta)*sin(theta)."
    },
    {
        question: "The expression cos(3x) + cos(x) is equal to:",
        options: [
            "2*cos(2x)*cos(x)",
            "2*sin(2x)*sin(x)",
            "2*cos(2x)*sin(x)",
            "4*cos^3(x)"
        ],
        answer: 0,
        explanation: "cos(3x) + cos(x) = 2*cos((3x+x)/2)*cos((3x-x)/2) = 2*cos(2x)*cos(x)."
    },
    {
        question: "Which of the following equals 2*sin(2y)*sin(3y)?",
        options: [
            "cos(y) - cos(5y)",
            "cos(5y) - cos(y)",
            "sin(5y) - sin(y)",
            "cos(y) + cos(5y)"
        ],
        answer: 0,
        explanation: "Using product formula, -2*sin(2y)*sin(3y) = cos(5y) - cos(y), hence 2*sin(2y)*sin(3y) = cos(y) - cos(5y)."
    },
    {
        question: "What is the exact value of sin(pi/9)*sin(2pi/9)*sin(3pi/9)*sin(4pi/9)?",
        options: ["3/16", "1/16", "1/8", "sqrt(3)/16"],
        answer: 0,
        explanation: "This product evaluates to 3/16."
    },
    {
        question: "If sin(alpha) = 4/5 and tan(beta) = -5/12 in specified quadrants, what is the value of cos(alpha + beta)?",
        options: ["33/65", "-33/65", "16/65", "-16/65"],
        answer: 0,
        explanation: "Using trigonometric addition formulas with appropriate quadrant signs yields 33/65."
    },
    {
        question: "The expression sin(alpha + beta) * sin(alpha - beta) is identically equal to:",
        options: [
            "cos^2(beta) - cos^2(alpha)",
            "sin^2(alpha) - sin^2(beta)",
            "All of the above",
            "cos^2(alpha) - sin^2(beta)"
        ],
        answer: 2,
        explanation: "Both cos^2(beta)-cos^2(alpha) and sin^2(alpha)-sin^2(beta) are valid equivalent identities."
    },
    {
        question: "What is the simplified form of (tan(x + y)) / (cot(x - y))?",
        options: [
            "(tan^2(x) - tan^2(y)) / (1 - tan^2(x)*tan^2(y))",
            "(tan(x) + tan(y)) / (1 - tan(x)tan(y))",
            "1",
            "tan^2(x) + tan^2(y)"
        ],
        answer: 0,
        explanation: "Expanding and rewriting yields (tan^2(x) - tan^2(y)) / (1 - tan^2(x)*tan^2(y))."
    },
    {
        question: "The expression cot(alpha - beta) is equal to:",
        options: [
            "(cot(alpha)*cot(beta) + 1) / (cot(beta) - cot(alpha))",
            "(cot(alpha)*cot(beta) - 1) / (cot(beta) + cot(alpha))",
            "(cot(alpha) - cot(beta)) / (1 + cot(alpha)cot(beta))",
            "1 / tan(alpha - beta)"
        ],
        answer: 0,
        explanation: "cot(alpha - beta) = (cot(alpha)*cot(beta) + 1) / (cot(beta) - cot(alpha))."
    },
    {
        question: "What is the exact value of sin(105 degrees)?",
        options: [
            "(sqrt(6) + sqrt(2)) / 4",
            "(sqrt(6) - sqrt(2)) / 4",
            "sqrt(3)/2",
            "1/2"
        ],
        answer: 0,
        explanation: "sin(105 degrees) = cos(15 degrees) = (sqrt(6) + sqrt(2))/4."
    },
    {
        question: "What is the simplified form of the identity $\\frac{1 - \\cos^2\\beta}{2 - 2\\cos\\beta}$?",
        options: [
            "\\cos^2\\left(\\frac{\\beta}{2}\\right)",
            "\\sin^2\\left(\\frac{\\beta}{2}\\right)",
            "\\tan^2\\left(\\frac{\\beta}{2}\\right)",
            "1"
        ],
        answer: 0,
        explanation: "Simplifying using half-angle and trigonometric identities yields \\cos^2(\\beta/2)."
    },
    {
        question: "If we express $3\\sin\\theta + 4\\cos\\theta$ in the form $r\\sin(\\theta + \\phi)$, what is the value of $r$?",
        options: ["3", "4", "5", "7"],
        answer: 2,
        explanation: "The magnitude parameter is calculated as $r = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$."
    },
    {
        question: "What is the exact value of $\\cos(120^\\circ)$?",
        options: ["1/2", "-1/2", "\\sqrt{3}/2", "-\\sqrt{3}/2"],
        answer: 1,
        explanation: "Using allied angles, $\\cos(180^\\circ - 60^\\circ) = -\\cos(60^\\circ) = -1/2$."
    },
    {
        question: "The expression $\\tan\\left(\\frac{\\theta}{2}\\right)$ is identically equal to which of the following alternative forms?",
        options: [
            "\\frac{1 - \\cos\\theta}{\\sin\\theta}",
            "\\frac{\\sin\\theta}{1 + \\cos\\theta}",
            "Both A and B",
            "\\frac{1 + \\cos\\theta}{\\sin\\theta}"
        ],
        answer: 2,
        explanation: "Both $\\frac{1-\\cos\\theta}{\\sin\\theta}$ and $\\frac{\\sin\\theta}{1+\\cos\\theta}$ are valid standard half-angle identities for tangent."
    },
    {
        question: "Which formula represents the sum-to-product conversion for $\\cos p - \\cos q$?",
        options: [
            "-2\\sin\\left(\\frac{p+q}{2}\\right)\\sin\\left(\\frac{p-q}{2}\\right)",
            "2\\cos\\left(\\frac{p+q}{2}\\right)\\cos\\left(\\frac{p-q}{2}\\right)",
            "2\\sin\\left(\\frac{p+q}{2}\\right)\\cos\\left(\\frac{p-q}{2}\\right)",
            "-2\\cos\\left(\\frac{p+q}{2}\\right)\\sin\\left(\\frac{p-q}{2}\\right)"
        ],
        answer: 0,
        explanation: "The standard sum-to-product identity is $\\cos p - \\cos q = -2\\sin\\left(\\frac{p+q}{2}\\right)\\sin\\left(\\frac{p-q}{2}\\right)$."
    }
];

// Chapter 8 - Preparation Page Controller Logic (Coco Code)
console.log("TOTAL CHAPTER 8 MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsMaths8",
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
                    `You completed all ${questions.length} questions for Mathematics Chapter 8.`;
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