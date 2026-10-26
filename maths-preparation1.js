const questions = [
    // --- Basic Concepts & Definitions (1 - 15) ---
    {
        question: "What is the standard form of a complex number z as defined in the textbook?",
        options: ["z = x + iy or (x, y)", "z = x - iy^2", "z = x + y", "z = (x, y, z)"],
        answer: 0,
        explanation: "A complex number z is represented by an expression of the form z = x + iy or of the form (x, y) where x and y are real numbers and i = sqrt(-1)."
    },
    {
        question: "In the complex number z = x + iy, what is y called?",
        options: ["Imaginary part", "Real part", "Modulus", "Conjugate"],
        answer: 0,
        explanation: "In a complex number z = x + iy, x is called the real part and y is called the imaginary part."
    },
    {
        question: "What is the Euler's notation value for the imaginary unit i?",
        options: ["i^2 = -1", "i^2 = 1", "i = 0", "i^2 = 0"],
        answer: 0,
        explanation: "Remember that i^2 = -1 is the Euler's notation for the imaginary unit number where i = sqrt(-1)."
    },
    {
        question: "If the imaginary part of a complex number is zero, what is the number called?",
        options: ["Real number", "Pure imaginary number", "Complex conjugate", "Polar number"],
        answer: 0,
        explanation: "If the imaginary part of the complex number is zero, then it is called a real number."
    },
    {
        question: "If the real part of a complex number is zero, it is called a:",
        options: ["Pure imaginary number", "Real number", "Rational number", "Scalar number"],
        answer: 0,
        explanation: "If the real part of a complex number is zero then it is called a pure imaginary number."
    },
    {
        question: "The set of real numbers R is a _________ of the set of complex numbers C.",
        options: ["Subset", "Super-set", "Disjoint set", "Power set"],
        answer: 0,
        explanation: "Since every real number x can be written as x + i0, the set of real numbers is a subset of set of complex numbers, R subset of C."
    },
    {
        question: "Two complex numbers z1 = x1 + iy1 and z2 = x2 + iy2 are equal if and only if:",
        options: ["x1 = x2 and y1 = y2", "x1 = y1 and x2 = y2", "x1 + y1 = x2 + y2", "x1 = -x2 and y1 = -y2"],
        answer: 0,
        explanation: "Two complex numbers are said to be equal if and only if both have the same real and imaginary parts, i.e., x1 = x2 and y1 = y2."
    },
    {
        question: "Every real number is also a _________ number.",
        options: ["complex", "natural", "integer", "rational"],
        answer: 0,
        explanation: "Every real number is also a complex number."
    },
    {
        question: "Every complex number has how many parts?",
        options: ["Two", "One", "Three", "No parts"],
        answer: 0,
        explanation: "Every complex number has two parts (real and imaginary)."
    },
    {
        question: "In the complex plane, the imaginary part is drawn along:",
        options: ["y-axis", "x-axis", "origin", "xy-plane"],
        answer: 0,
        explanation: "In complex plane imaginary part is drawn along y-axis."
    },
    {
        question: "Diagram representing a complex number is called:",
        options: ["Argand diagram", "Venn diagram", "Vector diagram", "Ordered pair diagram"],
        answer: 0,
        explanation: "Diagram representing a complex number is called argand diagram."
    },
    {
        question: "What is the value of i^31?",
        options: ["-i", "i", "1", "-1"],
        answer: 0,
        explanation: "i^31 = i^30 * i = (i^2)^15 * i = (-1)^15 * i = -i."
    },
    {
        question: "What is the value of (-i)^6?",
        options: ["-1", "1", "i", "-i"],
        answer: 0,
        explanation: "(-i)^6 = i^6 = i^4 * i^2 = 1 * (-1) = -1."
    },
    {
        question: "What is the value of i^4n where n is an integer?",
        options: ["1", "-1", "i", "-i"],
        answer: 0,
        explanation: "Since i^4 = 1, raising it to any integer power n gives i^(4n) = 1."
    },
    {
        question: "What is the value of the product (sqrt(-25)) * (sqrt(-4))?",
        options: ["-10", "10", "10i", "-10i"],
        answer: 0,
        explanation: "sqrt(-25) = 5i and sqrt(-4) = 2i; product is (5i)(2i) = 10i^2 = -10."
    },

    // --- Algebraic Operations (16 - 35) ---
    {
        question: "What is the sum of two complex numbers z1 = (x1, y1) and z2 = (x2, y2)?",
        options: ["(x1 + x2, y1 + y2)", "(x1 - x2, y1 - y2)", "(x1 x2, y1 y2)", "(x1 + y2, y2 + x1)"],
        answer: 0,
        explanation: "The sum of two complex numbers is given by z1 + z2 = (x1 + x2, y1 + y2)."
    },
    {
        question: "What is the difference z1 - z2 for complex numbers (x1, y1) and (x2, y2)?",
        options: ["(x1 - x2, y1 - y2)", "(x1 + x2, y1 + y2)", "(x1 - y2, y2 - x1)", "(x1 x2, y1 y2)"],
        answer: 0,
        explanation: "The difference is given by (x1 - x2, y1 - y2)."
    },
    {
        question: "What is the real part of the product of two complex numbers z1 = a + ib and z2 = c + id?",
        options: ["ac - bd", "ac + bd", "ad + bc", "ad - bc"],
        answer: 0,
        explanation: "The product is (ac - bd) + i(ad + bc), so the real part is ac - bd."
    },
    {
        question: "To divide two complex numbers z1 / z2, what process is applied to the denominator?",
        options: ["Rationalize by multiplying and dividing by the conjugate of the denominator", "Multiply by denominator itself", "Square the denominator", "Take modulus"],
        answer: 0,
        explanation: "To make the denominator a single term we rationalize using the conjugate of the denominator."
    },
    {
        question: "What is the real part of (3 + 4i)^2?",
        options: ["-7", "25", "7", "24"],
        answer: 0,
        explanation: "Re(z^2) = (Re z)^2 - (Im z)^2 = 3^2 - 4^2 = 9 - 16 = -7."
    },
    {
        question: "What is the imaginary part of (3 + 4i)^2?",
        options: ["24", "-7", "12", "-24"],
        answer: 0,
        explanation: "Im(z^2) = 2(Re z)(Im z) = 2(3)(4) = 24."
    },
    {
        question: "Find the real part of (3 + 4i)^(-1).",
        options: ["3/25", "-3/25", "4/25", "-4/25"],
        answer: 0,
        explanation: "Re(z^-1) = Re(z) / |z|^2 = 3 / (3^2 + 4^2) = 3/25."
    },
    {
        question: "Find the imaginary part of (3 + 4i)^(-1).",
        options: ["-4/25", "4/25", "3/25", "-3/25"],
        answer: 0,
        explanation: "Im(z^-1) = -Im(z) / |z|^2 = -4 / 25."
    },
    {
        question: "If z_1 = 3 + 2i and z_2 = 5 + 6i, which inequality holds true regarding their magnitudes?",
        options: ["|z_1| < |z_2|", "|z_1| > |z_2|", "|z_1| = |z_2|", "z_1 > z_2"],
        answer: 0,
        explanation: "|z_1| = sqrt(9+4) = sqrt(13) and |z_2| = sqrt(25+36) = sqrt(61), so |z_1| < |z_2|."
    },
    {
        question: "What is the value of i^23 + i^58 + i^21?",
        options: ["-1", "i", "-i", "1"],
        answer: 0,
        explanation: "i^23 = -i, i^58 = -1, i^21 = i; sum is -i - 1 + i = -1."
    },
    {
        question: "If z = 3 + 4i, what is its multiplicative inverse z^(-1) in rectangular form?",
        options: ["(3/25) - (4/25)i", "(3/25) + (4/25)i", "(-3/25) + (4/25)i", "3 - 4i"],
        answer: 0,
        explanation: "z^(-1) = (3 - 4i) / (3^2 + 4^2) = (3/25) - (4/25)i."
    },
    {
        question: "What is the value of i^(-25)?",
        options: ["-i", "i", "1", "-1"],
        answer: 0,
        explanation: "i^(-25) = 1 / i^25 = 1 / i = -i."
    },
    {
        question: "Find the real part of the product (1 + i)(2 - i).",
        options: ["3", "1", "2", "5"],
        answer: 0,
        explanation: "(1+i)(2-i) = 2 - i + 2i - i^2 = 3 + i, real part is 3."
    },
    {
        question: "What is the least positive integer value of n for which ((1 + i) / (1 - i))^n = 1?",
        options: ["4", "2", "1", "8"],
        answer: 0,
        explanation: "(1+i)/(1-i) = i, so i^n = 1 means least positive n is 4."
    },
    {
        question: "What is the sum of z1 = 2 + 3i and z2 = 6 + 8i?",
        options: ["8 + 11i", "8 - 11i", "4 + 5i", "12 + 24i"],
        answer: 0,
        explanation: "(2+6) + (3+8)i = 8 + 11i."
    },
    {
        question: "What is the difference z1 - z2 if z1 = 4 - 3i and z2 = 7 + 6i?",
        options: ["-3 - 9i", "3 + 9i", "-3 + 9i", "11 + 3i"],
        answer: 0,
        explanation: "(4-7) + (-3-6)i = -3 - 9i."
    },
    {
        question: "What is the product of z1 = (2, -6) and z2 = (4, 9)?",
        options: ["62 - 6i", "62 + 6i", "-62 - 6i", "8 - 54i"],
        answer: 0,
        explanation: "(2-6i)(4+9i) = 8 + 18i - 24i - 54i^2 = 62 - 6i."
    },
    {
        question: "If z1 = 3 + 7i and z2 = -4 + 6i, what is z1 + z2?",
        options: ["-1 + 13i", "1 - 13i", "7 + i", "-7 - i"],
        answer: 0,
        explanation: "(3-4) + (7+6)i = -1 + 13i."
    },
    {
        question: "If z1 = 3 + 7i and z2 = -4 + 6i, what is z1 - z2?",
        options: ["7 + i", "-1 + 13i", "-7 + i", "7 - i"],
        answer: 0,
        explanation: "(3 - (-4)) + (7 - 6)i = 7 + i."
    },
    {
        question: "If z1 = 3 + 7i and z2 = -4 + 6i, what is the real part of their product?",
        options: ["-54", "-12", "42", "18"],
        answer: 0,
        explanation: "(3+7i)(-4+6i) = -12 - 10i - 42 = -54 - 10i, real part is -54."
    },

    // --- Conjugate & Modulus Properties (36 - 55) ---
    {
        question: "What is the conjugate of the complex number z = x + iy?",
        options: ["x - iy", "-x + iy", "-x - iy", "x + iy"],
        answer: 0,
        explanation: "Conjugate of z = x + iy is denoted by bar(z) = x - iy."
    },
    {
        question: "Geometrically, what does the conjugate of a complex number represent?",
        options: ["Mirror image about the x-axis", "Mirror image about the y-axis", "Rotation about origin", "Translation along y=x"],
        answer: 0,
        explanation: "Geometrically, conjugate of a complex number is its mirror image about the x-axis."
    },
    {
        question: "If z is a complex number, what is its mirror image in the complex plane?",
        options: ["bar(z)", "1/z", "-z", "z"],
        answer: 0,
        explanation: "If z is a complex number then its mirror image is bar(z)."
    },
    {
        question: "What is the absolute value or modulus of a complex number z = x + iy?",
        options: ["sqrt(x^2 + y^2)", "x^2 + y^2", "x - y", "sqrt(x - y)"],
        answer: 0,
        explanation: "The modulus of z = x + iy is defined as |z| = sqrt(x^2 + y^2)."
    },
    {
        question: "For any complex number z, what is the relationship between |z| and zero?",
        options: ["|z| >= 0", "|z| < 0", "|z| = 0 always", "|z| > 1"],
        answer: 0,
        explanation: "For any complex number z, |z| >= 0 and |z| = 0 iff z = 0."
    },
    {
        question: "What is the value of overline(z1 * z2)?",
        options: ["overline(z1) * overline(z2)", "overline(z1) + overline(z2)", "z1 * z2", "overline(z1) / overline(z2)"],
        answer: 0,
        explanation: "The conjugate of a product is the product of the conjugates: overline(z1 z2) = overline(z1) * overline(z2)."
    },
    {
        question: "What is the modulus of the product of two complex numbers, i.e., |z1 z2|?",
        options: ["|z1| * |z2|", "|z1| + |z2|", "|z1| / |z2|", "||z1| - |z2||"],
        answer: 0,
        explanation: "The modulus of a product is the product of moduli: |z1 z2| = |z1| * |z2|."
    },
    {
        question: "If z is a real number, then which of the following is true?",
        options: ["z = overline(z)", "z = -overline(z)", "|z| = 0", "z = i"],
        answer: 0,
        explanation: "A complex number is real if and only if z = overline(z)."
    },
    {
        question: "If z is a pure imaginary number, what is the relation between z and its conjugate?",
        options: ["overline(z) = -z", "overline(z) = z", "overline(z) = 1/z", "overline(z) = |z|"],
        answer: 0,
        explanation: "If z is pure imaginary, overline(z) = -z."
    },
    {
        question: "For any two complex numbers z1 and z2, what is the triangle inequality regarding modulus?",
        options: ["|z1 + z2| <= |z1| + |z2|", "|z1 + z2| >= |z1| + |z2|", "|z1 + z2| = |z1| * |z2|", "|z1 + z2| < ||z1| - |z2||"],
        answer: 0,
        explanation: "The triangle inequality states that |z1 + z2| <= |z1| + |z2|."
    },
    {
        question: "If |z| = 1, what is the multiplicative inverse z^(-1) in terms of its conjugate?",
        options: ["overline(z)", "-overline(z)", "z", "-z"],
        answer: 0,
        explanation: "If |z| = 1, then z^(-1) = overline(z) / |z|^2 = overline(z)."
    },
    {
        question: "What is the conjugate of z = (1 + i)(2 - i)?",
        options: ["3 - i", "3 + i", "-3 - i", "-3 + i"],
        answer: 0,
        explanation: "z = 3 + i, so its conjugate is 3 - i."
    },
    {
        question: "What is the magnitude of 11 + 12i?",
        options: ["sqrt(265)", "23", "sqrt(23)", "121"],
        answer: 0,
        explanation: "|11 + 12i| = sqrt(11^2 + 12^2) = sqrt(121 + 144) = sqrt(265)."
    },
    {
        question: "What is Re(iz) equal to?",
        options: ["-Im(z)", "Im(z)", "Re(z)", "-Re(z)"],
        answer: 0,
        explanation: "For z = x + iy, iz = i(x + iy) = -y + ix, so Re(iz) = -y = -Im(z)."
    },
    {
        question: "What is Im(iz) equal to?",
        options: ["Re(z)", "-Re(z)", "Im(z)", "-Im(z)"],
        answer: 0,
        explanation: "Im(iz) = x = Re(z)."
    },
    {
        question: "What is the value of overline(z1 / z2)?",
        options: ["overline(z1) / overline(z2)", "overline(z1) * overline(z2)", "overline(z1) + overline(z2)", "z1 / z2"],
        answer: 0,
        explanation: "The conjugate of a quotient is the quotient of conjugates: overline(z1 / z2) = overline(z1) / overline(z2)."
    },
    {
        question: "What is the magnitude of the quotient |z1 / z2|?",
        options: ["|z1| / |z2|", "|z1| * |z2|", "|z1| + |z2|", "||z1| - |z2||"],
        answer: 0,
        explanation: "|z1 / z2| = |z1| / |z2|."
    },
    {
        question: "If z is real, which condition is necessary and sufficient?",
        options: ["z = overline(z)", "z = -overline(z)", "|z| = 1", "z = 0"],
        answer: 0,
        explanation: "z is real if and only if z = overline(z)."
    },
    {
        question: "What does the expression |z - z_0| = r geometrically represent in the complex plane?",
        options: ["A circle with center z_0 and radius r", "A straight line", "An ellipse", "A parabola"],
        answer: 0,
        explanation: "It represents a circle with center at z_0 and radius r."
    },
    {
        question: "What is the conjugate of 3i + 8?",
        options: ["8 - 3i", "-8 - 3i", "3i - 8", "-8 + 3i"],
        answer: 0,
        explanation: "Writing in standard form z = 8 + 3i, its conjugate is 8 - 3i."
    },

    // --- Polar Form & Arguments (56 - 70) ---
    {
        question: "What is the polar form representation of a complex number z = x + iy?",
        options: ["r(cos theta + i sin theta)", "r(sin theta + i cos theta)", "r(cos theta - i sin theta)", "r^2(cos theta + i sin theta)"],
        answer: 0,
        explanation: "The polar form is z = r(cos theta + i sin theta) where r = |z|."
    },
    {
        question: "What is the argument theta of a complex number z = x + iy given by?",
        options: ["theta = tan^(-1)(y / x)", "theta = tan^(-1)(x / y)", "theta = sin^(-1)(y/r)", "theta = cos^(-1)(x/r)"],
        answer: 0,
        explanation: "The argument is given by theta = tan^(-1)(y / x) with quadrant adjustments."
    },
    {
        question: "What is the interval for the principal argument Arg(z) of a complex number?",
        options: ["-pi < Arg(z) <= pi", "0 <= Arg(z) < 2pi", "-pi/2 <= Arg(z) <= pi/2", "0 <= Arg(z) <= pi"],
        answer: 0,
        explanation: "The principal argument of z lies in the interval -pi < Arg(z) <= pi."
    },
    {
        question: "If z = r(cos theta + i sin theta), what is its multiplicative inverse z^(-1) in polar form?",
        options: ["(1/r)(cos theta - i sin theta)", "r(cos theta - i sin theta)", "(1/r)(cos theta + i sin theta)", "-r(cos theta + i sin theta)"],
        answer: 0,
        explanation: "The polar inverse is z^(-1) = (1/r)(cos theta - i sin theta)."
    },
    {
        question: "What is the product of two complex numbers in polar form, z1 * z2?",
        options: ["r1 r2 [cos(theta1 + theta2) + i sin(theta1 + theta2)]", "r1 r2 [cos(theta1 - theta2) + i sin(theta1 - theta2)]", "(r1/r2)[cos(theta1 + theta2)]", "r1+r2 [cos(theta1+theta2)]"],
        answer: 0,
        explanation: "z1 z2 = r1 r2 [cos(theta1 + theta2) + i sin(theta1 + theta2)]."
    },
    {
        question: "What is the division of two complex numbers in polar form, z1 / z2?",
        options: ["(r1 / r2)[cos(theta1 - theta2) + i sin(theta1 - theta2)]", "(r1 / r2)[cos(theta1 + theta2) + i sin(theta1 + theta2)]", "(r1 r2)[cos(theta1 - theta2)]", "r1 r2 [sin(theta1 - theta2)]"],
        answer: 0,
        explanation: "z1 / z2 = (r1 / r2)[cos(theta1 - theta2) + i sin(theta1 - theta2)]."
    },
    {
        question: "What is the polar form modulus r of z = sqrt(3) + i?",
        options: ["2", "sqrt(3)", "1", "4"],
        answer: 0,
        explanation: "r = sqrt((sqrt(3))^2 + 1^2) = sqrt(3 + 1) = 2."
    },
    {
        question: "What is the principal argument of z = sqrt(3) + i?",
        options: ["pi/6", "pi/3", "pi/4", "pi/2"],
        answer: 0,
        explanation: "theta = tan^(-1)(1 / sqrt(3)) = pi/6 (1st quadrant)."
    },
    {
        question: "What is the principal argument of z = -sqrt(3) + i?",
        options: ["5pi/6", "pi/6", "-pi/6", "-5pi/6"],
        answer: 0,
        explanation: "Lying in the 2nd quadrant, theta = pi - pi/6 = 5pi/6."
    },
    {
        question: "What is the principal argument of z = -sqrt(3) - i?",
        options: ["-5pi/6", "5pi/6", "pi/6", "-pi/6"],
        answer: 0,
        explanation: "Lying in the 3rd quadrant, theta = -pi + pi/6 = -5pi/6."
    },
    {
        question: "What is the principal argument of z = sqrt(3) - i?",
        options: ["-pi/6", "pi/6", "5pi/6", "-5pi/6"],
        answer: 0,
        explanation: "Lying in the 4th quadrant, theta = -pi/6."
    },
    {
        question: "What is Euler's formula representing cos(theta) + i sin(theta)?",
        options: ["e^(i theta)", "e^(-i theta)", "e^theta", "i e^theta"],
        answer: 0,
        explanation: "cos theta + i sin theta = e^(i theta) is known as Euler's formula."
    },
    {
        question: "What is Arg(z1 * z2) in terms of principal arguments?",
        options: ["Arg(z1) + Arg(z2)", "Arg(z1) - Arg(z2)", "Arg(z1) * Arg(z2)", "Arg(z1) / Arg(z2)"],
        answer: 0,
        explanation: "Arg(z1 z2) = Arg(z1) + Arg(z2) (subject to 2pi multiples)."
    },
    {
        question: "What is Arg(z1 / z2) in terms of principal arguments?",
        options: ["Arg(z1) - Arg(z2)", "Arg(z1) + Arg(z2)", "Arg(z2) - Arg(z1)", "Arg(z1) * Arg(z2)"],
        answer: 0,
        explanation: "Arg(z1 / z2) = Arg(z1) - Arg(z2)."
    },
    {
        question: "For z = 0, what can be said about arg(z)?",
        options: ["It is undefined", "It is 0", "It is pi/2", "It is pi"],
        answer: 0,
        explanation: "For z = 0 the arg(z) is undefined, so z != 0 in polar coordinates."
    },

    // --- Polynomials, Quadratic Equations & Real-World Applications (71 - 80) ---
    {
        question: "How can the polynomial z^2 + a^2 be factored into linear factors?",
        options: ["(z + ia)(z - ia)", "(z + a)(z - a)", "(z + ia)^2", "(z - ia)^2"],
        answer: 0,
        explanation: "z^2 + a^2 = z^2 - i^2 a^2 = (z + ia)(z - ia)."
    },
    {
        question: "A system of linear equations with complex coefficients is called _________ if it has at least one solution.",
        options: ["consistent", "inconsistent", "homogeneous", "trivial"],
        answer: 0,
        explanation: "A system of equations is consistent if it has at least one solution."
    },
    {
        question: "A system of equations which has no solution is called:",
        options: ["inconsistent", "consistent", "independent", "complete"],
        answer: 0,
        explanation: "A system of equations which has no solution is called inconsistent."
    },
    {
        question: "In simple harmonic motion, the position formula of a microscopic particle is given by:",
        options: ["x = x_max * e^(i theta)", "x = x_max + e^(i theta)", "x = x_max * cos(theta)", "x = e^(i theta) / x_max"],
        answer: 0,
        explanation: "The equation giving the position of the particle from mean position is x = x_max e^(i theta)."
    },
    {
        question: "In electrical engineering, what formula relates voltage E, current I, and impedance Z?",
        options: ["E = I * Z", "I = E * Z", "Z = E * I", "E = I / Z"],
        answer: 0,
        explanation: "The flow of electricity I, impedance Z, and voltage E are related by E = I * Z."
    },
    {
        question: "What is the degree of a complex polynomial P(z) = a_0 + a_1 z + ... + a_n z^n where a_n != 0?",
        options: ["n", "n-1", "0", "infinite"],
        answer: 0,
        explanation: "It is called a complex polynomial of degree n if a_n != 0."
    },
    {
        question: "What are the roots of the quadratic equation z^2 - 2z + 5 = 0?",
        options: ["1 + 2i and 1 - 2i", "1 + i and 1 - i", "2 + i and 2 - i", "-1 + 2i and -1 - 2i"],
        answer: 0,
        explanation: "Solving z^2 - 2z + 5 = 0 by completing squares gives z = 1 +- 2i."
    },
    {
        question: "What is the impedance Z of a resistor in an AC circuit where R is resistance?",
        options: ["Z_R = R", "Z_R = iR", "Z_R = 1/R", "Z_R = R^2"],
        answer: 0,
        explanation: "Since R is real, the impedance Z_R of a resistor is a real number equal to R."
    },
    {
        question: "What is the solution set of the quadratic equation z^2 - 6z + 25 = 0?",
        options: ["{3 + 4i, 3 - 4i}", "{3 + 5i, 3 - 5i}", "{4 + 3i, 4 - 3i}", "{-3 + 4i, -3 - 4i}"],
        answer: 0,
        explanation: "Using completing square or quadratic formula for z^2 - 6z + 25 = 0 yields roots 3 +- 4i."
    },
    {
        question: "Which branch of physics heavily depends upon complex numbers in modern science?",
        options: ["Quantum mechanics", "Classical mechanics", "Geometrical optics", "Thermodynamics"],
        answer: 0,
        explanation: "Complex numbers are used in many branches of science; especially quantum mechanics heavily depends upon complex numbers."
    }
];

console.log("TOTAL UNIT 1 MATHS MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsMaths1",
    JSON.stringify(questions)
);

// preparation page controls
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

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent = question.question;

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

        // Correct answer is already marked in Preparation
        if (index === Number(question.answer)) {
            button.classList.add("correct");
        }

        // Clicking an option only gives feedback
        button.addEventListener("click", () => {
            document.querySelectorAll(".option").forEach(btn => {
                btn.classList.remove("wrong");
            });

            if (index === Number(question.answer)) {
                button.classList.add("correct");
                feedback.querySelector("strong").textContent = "Correct!";
                feedback.querySelector("p").textContent = question.explanation;
            } else {
                button.classList.add("wrong");
                feedback.querySelector("strong").textContent = "Correct answer:";
                feedback.querySelector("p").textContent = 
                    `${String.fromCharCode(65 + Number(question.answer))}. ${question.options[Number(question.answer)]}`;
            }

            feedback.style.display = "block";
        });

        optionsContainer.appendChild(button);
    });

    // Explanation is already visible in Preparation
    feedback.style.display = "block";
    feedback.querySelector("strong").textContent = "Correct!";
    feedback.querySelector("p").textContent = question.explanation;

    progressCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percentage =
        Math.round(((currentQuestion + 1) / questions.length) * 100);

    progressText.textContent = `${percentage}% Complete`;
    progressFill.style.width = `${percentage}%`;

    previousButton.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Finish";
    } else {
        nextButton.textContent = "Next →";
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        questionText.textContent = "Preparation Complete!";
        questionNumber.textContent = "COMPLETED";
        optionsContainer.innerHTML = "";
        feedback.style.display = "block";
        feedback.querySelector("strong").textContent = "Well Done!";
        feedback.querySelector("p").textContent = 
            `You completed all ${questions.length} questions for Mathematics Chapter 1.`;

        nextButton.style.display = "none";
        previousButton.style.display = "none";
    }
});

previousButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

loadQuestion();