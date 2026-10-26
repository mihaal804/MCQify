const questions = [
    // --- Basic Concepts & Definitions (1 - 15) ---
    {
        question: "A physical quantity which can be completely specified by its magnitude only is called a:",
        options: ["Scalar", "Vector", "Unit vector", "Position vector"],
        answer: 0,
        explanation: "A physical quantity which can be completely specified by its magnitude only is called a scalar."
    },
    {
        question: "A physical quantity which is completely specified by its magnitude as well as direction is called a:",
        options: ["Scalar", "Vector", "Null vector", "Constant"],
        answer: 1,
        explanation: "A physical quantity specified by both magnitude and direction is called a vector."
    },
    {
        question: "Geometrically, a vector is represented by a:",
        options: ["Straight line", "Line segment with an arrowhead", "Circle", "Curve"],
        answer: 1,
        explanation: "Geometrically a vector is represented by a line segment with an arrowhead at its one end."
    },
    {
        question: "The length of the line segment representing a vector describes its:",
        options: ["Direction", "Magnitude", "Initial point", "Terminal point"],
        answer: 1,
        explanation: "The length of the line segment describes the magnitude and the arrowhead indicates the direction."
    },
    {
        question: "If the initial and terminal points of a vector coincide, the vector is called a:",
        options: ["Unit vector", "Equal vector", "Zero or null vector", "Position vector"],
        answer: 2,
        explanation: "If initial and terminal points coincide, the vector has zero length and is called a zero or null vector."
    },
    {
        question: "A vector which has magnitude 1 and is in the direction of a non-zero vector is called a:",
        options: ["Null vector", "Unit vector", "Position vector", "Symmetric vector"],
        answer: 1,
        explanation: "A vector in the direction of non-zero vector with magnitude 1 is called a unit vector."
    },
    {
        question: "The process of finding the unit vector of a given vector is called:",
        options: ["Normalizing vector", "Scalar multiplication", "Cross product", "Dot product"],
        answer: 0,
        explanation: "The process of finding the unit vector of a vector is called normalizing vector."
    },
    {
        question: "Two non-zero vectors are parallel if a = λb, where λ is:",
        options: ["A scalar", "Zero", "Always 1", "A matrix"],
        answer: 0,
        explanation: "Two non-zero vectors are parallel if a = λb where λ is a scalar."
    },
    {
        question: "The position vector of a point P with respect to origin O has its tail at:",
        options: ["Point P", "Origin O", "Infinity", "Any random point"],
        answer: 1,
        explanation: "The tail of the position vector is at origin and tip at the point P."
    },
    {
        question: "The formula for the position vector of a point dividing the line segment joining A(a) and B(b) internally in the ratio m:n is:",
        options: ["(mb + na)/(m + n)", "(ma + nb)/(m + n)", "(na - mb)/(n - m)", "(a + b)/2"],
        answer: 0,
        explanation: "The position vector for internal division is given by r = (mb + na) / (m + n)."
    },
    {
        question: "If a point divides the line segment in the ratio 1:1, the position vector of the midpoint is:",
        options: ["(a + b)/2", "(a - b)/2", "2(a + b)", "a + b"],
        answer: 0,
        explanation: "For ratio 1:1, the midpoint formula becomes r = (a + b) / 2."
    },
    {
        question: "The magnitude of a vector r = xi + yj + zk in space is given by:",
        options: ["x + y + z", "sqrt(x^2 + y^2 + z^2)", "x^2 + y^2 + z^2", "sqrt(x + y + z)"],
        answer: 1,
        explanation: "The magnitude of a vector in space is |r| = sqrt(x^2 + y^2 + z^2)."
    },
    {
        question: "The dot product of two non-zero vectors a and b with angle θ between them is defined as:",
        options: ["|a||b| sin θ", "|a||b| cos θ", "|a||b| tan θ", "0"],
        answer: 1,
        explanation: "The dot product is defined as a . b = |a||b| cos θ."
    },
    {
        question: "Two non-zero vectors a and b are orthogonal (perpendicular) if and only if:",
        options: ["a . b = 1", "a . b = 0", "a x b = 0", "a = b"],
        answer: 1,
        explanation: "Two vectors are orthogonal if their dot product is zero, i.e., a . b = 0."
    },
    {
        question: "The sum of the squares of the direction cosines of a vector is always equal to:",
        options: ["0", "1", "2", "-1"],
        answer: 1,
        explanation: "The sum of squares of direction cosines is unity: cos²α + cos²β + cos²γ = 1."
    },

    // --- Cross Product & Products Properties (16 - 30) ---
    {
        question: "The cross product of two parallel non-zero vectors is always:",
        options: ["1", "-1", "Zero vector", "Undefined"],
        answer: 2,
        explanation: "If two non-zero vectors are parallel, the value of their cross product is a zero vector."
    },
    {
        question: "The magnitude of the cross product |a x b| represents the area of:",
        options: ["A triangle", "A parallelogram", "A rectangle", "A circle"],
        answer: 1,
        explanation: "Magnitude of cross product |a x b| equals the area of the parallelogram formed by them."
    },
    {
        question: "The area of a triangle having adjacent sides a and b is given by:",
        options: ["|a x b|", "(1/2)|a x b|", "2|a x b|", "a . b"],
        answer: 1,
        explanation: "Area of a triangle with adjacent sides a and b is (1/2)|a x b|."
    },
    {
        question: "The vector moment (torque) M of a force F about a point with position vector r is given by:",
        options: ["r . F", "r x F", "F x r", "(r + F)/2"],
        answer: 1,
        explanation: "The vector moment is defined as M = r x F."
    },
    {
        question: "The scalar triple product of three vectors a, b, and c is denoted by:",
        options: ["a . (b x c)", "a x (b . c)", "(a x b) x c", "a . b . c"],
        answer: 0,
        explanation: "Scalar triple product is represented as a . (b x c)."
    },
    {
        question: "The volume of a parallelepiped with coterminal edges a, b, and c is equal to:",
        options: ["|a x b|", "a . (b x c)", "(1/6) a . (b x c)", "0"],
        answer: 1,
        explanation: "Volume of a parallelepiped is given by the scalar triple product a . (b x c)."
    },
    {
        question: "The volume of a tetrahedron with three coterminal edges a, b, and c is:",
        options: ["a . (b x c)", "(1/3) a . (b x c)", "(1/6) a . (b x c)", "(1/2) a . (b x c)"],
        answer: 2,
        explanation: "Volume of a tetrahedron is (1/6) * [a b c]."
    },
    {
        question: "Three vectors a, b, and c are coplanar if and only if:",
        options: ["a . (b x c) = 0", "a . (b x c) = 1", "a x b = c", "a . b = c"],
        answer: 0,
        explanation: "The condition for three vectors to be coplanar is a . (b x c) = 0."
    },
    {
        question: "Work done by a constant force F in displacing an object by displacement vector S is:",
        options: ["F x S", "F . S", "|F||S| sin θ", "F / S"],
        answer: 1,
        explanation: "Work done by a constant force is defined as Work Done = F . S."
    },
    {
        question: "The cross product of fundamental unit vectors i x j is equal to:",
        options: ["0", "i", "j", "k"],
        answer: 3,
        explanation: "The cross product i x j = k."
    },
    {
        question: "If a vector has direction angles α, β, and γ with coordinate axes, then sin²α + sin²β + sin²γ is equal to:",
        options: ["1", "2", "3", "0"],
        answer: 1,
        explanation: "Since cos²α + cos²β + cos²γ = 1, converting them gives sin²α + sin²β + sin²γ = 2."
    },
    {
        question: "The dot product of a vector with itself, i.e., a . a is equal to:",
        options: ["|a|", "|a|²", "1", "0"],
        answer: 1,
        explanation: "a . a = |a||a| cos(0) = |a|²."
    },
    {
        question: "If a . b = |a||b|, then the angle between a and b is:",
        options: ["0°", "90°", "180°", "45°"],
        answer: 0,
        explanation: "cos θ = 1, which means θ = 0° (vectors are in the same direction)."
    },
    {
        question: "If a . b = -|a||b|, then the angle between a and b is:",
        options: ["0°", "90°", "180°", "60°"],
        answer: 2,
        explanation: "cos θ = -1, which means θ = 180° (vectors are in opposite directions)."
    },
    {
        question: "The projection of vector a along vector b is given by:",
        options: ["a . b / |b|", "a . b / |a|", "a x b / |b|", "|a||b|"],
        answer: 0,
        explanation: "Projection of a on b is equal to (a . b) / |b|."
    },

    // --- Unit Vectors & Components (31 - 45) ---
    {
        question: "The unit vector in the direction of vector a is given by:",
        options: ["a . |a|", "a / |a|", "|a| / a", "a x |a|"],
        answer: 1,
        explanation: "Unit vector is calculated by dividing the vector by its magnitude: â = a / |a|."
    },
    {
        question: "If i, j, k are standard orthonormal triad of vectors, then i . j is:",
        options: ["1", "0", "k", "-k"],
        answer: 1,
        explanation: "Perpendicular unit vectors have a dot product of 0."
    },
    {
        question: "The value of j . j is equal to:",
        options: ["0", "1", "-1", "k"],
        answer: 1,
        explanation: "Dot product of a unit vector with itself is 1."
    },
    {
        question: "The value of j x k is equal to:",
        options: ["i", "-i", "j", "0"],
        answer: 0,
        explanation: "Cyclic order for cross product gives j x k = i."
    },
    {
        question: "The value of k x j is equal to:",
        options: ["i", "-i", "k", "0"],
        answer: 1,
        explanation: "Reversing the cyclic order gives k x j = -i."
    },
    {
        question: "If vector a = 2i - 3j + k, its magnitude is:",
        options: ["sqrt(14)", "6", "14", "sqrt(12)"],
        answer: 0,
        explanation: "|a| = sqrt(2² + (-3)² + 1²) = sqrt(4 + 9 + 1) = sqrt(14)."
    },
    {
        question: "The angle between two identical non-zero vectors is:",
        options: ["0°", "90°", "180°", "30°"],
        answer: 0,
        explanation: "An identical vector lies on itself, so the angle is 0°."
    },
    {
        question: "If vectors a and b are perpendicular, then (a + b) . (a - b) equals:",
        options: ["0", "|a|² - |b|²", "|a|² + |b|²", "2|a|²"],
        answer: 1,
        explanation: "(a+b).(a-b) = |a|² - |b|² regardless of perpendicularity, but dot product simplifies nicely."
    },
    {
        question: "The scalar components of vector r = 3i - 4j + 5k are:",
        options: ["3, -4, 5", "i, j, k", "3i, -4j, 5k", "sqrt(50)"],
        answer: 0,
        explanation: "The scalar components are the coefficients of i, j, and k, which are 3, -4, and 5."
    },
    {
        question: "Vector components of vector r = 3i - 4j + 5k are:",
        options: ["3, -4, 5", "3i, -4j, 5k", "i, j, k", "None"],
        answer: 1,
        explanation: "Vector components include the unit vectors: 3i, -4j, and 5k."
    },
    {
        question: "If a = 3i + j - 2k and b = i - 2j + k, then a . b is:",
        options: ["1", "-1", "3", "-3"],
        answer: 1,
        explanation: "a . b = (3)(1) + (1)(-2) + (-2)(1) = 3 - 2 - 2 = -1."
    },
    {
        question: "The cross product of a vector with itself is always:",
        options: ["1", "-1", "Zero vector", "Undefined"],
        answer: 2,
        explanation: "a x a = |a||a| sin(0°) n̂ = 0 (zero vector)."
    },
    {
        question: "If λ is a negative scalar, the direction of λa is:",
        options: ["Same as a", "Opposite to a", "Perpendicular to a", "Zero"],
        answer: 1,
        explanation: "Multiplication by a negative scalar reverses the direction of the vector."
    },
    {
        question: "The position vector of the origin with respect to itself is:",
        options: ["i + j + k", "Null vector", "Unit vector", "Undefined"],
        answer: 1,
        explanation: "Initial and terminal points coincide at origin, making it a null vector."
    },
    {
        question: "If a and b represent adjacent sides of a parallelogram, its area is:",
        options: ["|a x b|", "(1/2)|a x b|", "a . b", "(1/2) a . b"],
        answer: 0,
        explanation: "Area of a parallelogram with adjacent sides a and b is |a x b|."
    },

    // --- Scalar Triple Product & Geometry (46 - 65) ---
    {
        question: "If diagonals of a parallelogram are given by d1 and d2, its area is given by:",
        options: ["|d1 x d2|", "(1/2)|d1 x d2|", "2|d1 x d2|", "d1 . d2"],
        answer: 1,
        explanation: "Area of a parallelogram using diagonals is (1/2)|d1 x d2|."
    },
    {
        question: "Scalar triple product is also known as:",
        options: ["Dot product", "Box product", "Cross product", "Vector product"],
        answer: 1,
        explanation: "Scalar triple product a . (b x c) is commonly referred to as the box product denoted by [a b c]."
    },
    {
        question: "In a scalar triple product, interchanging any two vectors results in:",
        options: ["No change", "Change of sign", "Zero value", "Square of volume"],
        answer: 1,
        explanation: "Swapping any two adjacent vectors in a scalar triple product reverses its sign."
    },
    {
        question: "Cyclic permutation of vectors in a scalar triple product:",
        options: ["Changes the sign", "Does not change the value", "Makes it zero", "Doubles it"],
        answer: 1,
        explanation: "[a b c] = [b c a] = [c a b], cyclic permutation preserves the value."
    },
    {
        question: "If any two vectors in a scalar triple product are equal, the value of the product is:",
        options: ["1", "-1", "0", "Undefined"],
        answer: 2,
        explanation: "If two vectors are identical, the determinant has identical rows/columns, making it 0."
    },
    {
        question: "Vector triple product of three vectors a, b, and c is given by:",
        options: ["a x (b x c)", "a . (b x c)", "(a x b) x (c x d)", "a x b x c"],
        answer: 0,
        explanation: "Vector triple product is written as a x (b x c)."
    },
    {
        question: "The expansion of vector triple product a x (b x c) is equal to:",
        options: ["(a . c)b - (a . b)c", "(a . b)c - (a . c)b", "a(b . c) - b(a . c)", "None"],
        answer: 0,
        explanation: "Standard formula: a x (b x c) = (a . c)b - (a . b)c."
    },
    {
        question: "The scalar product is commutative, meaning:",
        options: ["a . b = b . a", "a . b = -b . a", "a . b = b x a", "a . b = 0"],
        answer: 0,
        explanation: "Dot product satisfies commutative property: a . b = b . a."
    },
    {
        question: "The vector product is anti-commutative, meaning:",
        options: ["a x b = b x a", "a x b = -b x a", "a x b = 0", "a x b = a . b"],
        answer: 1,
        explanation: "Cross product is anti-commutative: a x b = -(b x a)."
    },
    {
        question: "If a = i + j and b = j + k, then a x b is:",
        options: ["i - j + k", "i + j + k", "-i + j - k", "0"],
        answer: 0,
        explanation: "Determinant expansion gives i(1) - j(1) + k(1) = i - j + k."
    },
    {
        question: "The distance between two points P1(x1, y1, z1) and P2(x2, y2, z2) in space is:",
        options: ["sqrt((x2-x1)² + (y2-y1)² + (z2-z1)²)", "(x2+x1)/2", "x2-x1 + y2-y1", "sqrt(x1²+y1²+z1²)"],
        answer: 0,
        explanation: "Distance formula in 3D Cartesian coordinate space is derived using magnitude of position vectors."
    },
    {
        question: "Direction angles of a vector are the angles that the vector makes with:",
        options: ["Coordinate planes", "Positive coordinate axes", "Origin", "Each other"],
        answer: 1,
        explanation: "Direction angles α, β, γ are measured with the positive x, y, and z axes respectively."
    },
    {
        question: "If a vector lies in the xy-plane, its direction angle with the z-axis is:",
        options: ["0°", "45°", "90°", "180°"],
        answer: 2,
        explanation: "A vector in the xy-plane is perpendicular to the z-axis, so the angle is 90°."
    },
    {
        question: "If a vector is parallel to the z-axis, its direction cosines are:",
        options: ["(1, 1, 1)", "(0, 0, 1)", "(1, 0, 0)", "(0, 1, 0)"],
        answer: 1,
        explanation: "Cosines of angles with x and y axes are 0 (cos 90°), and with z-axis is 1 (cos 0°)."
    },
    {
        question: "The scalar product of two vectors is always a:",
        options: ["Vector", "Scalar", "Matrix", "Complex number"],
        answer: 1,
        explanation: "Dot product results in a single real number, hence it is a scalar product."
    },

    // --- Advanced Properties & Angles (66 - 80) ---
    {
        question: "The vector product of two vectors is always a:",
        options: ["Scalar", "Vector", "Zero always", "Tensor"],
        answer: 1,
        explanation: "Cross product results in a vector perpendicular to both input vectors."
    },
    {
        question: "If |a| = 4, |b| = 3, and a . b = 6, the angle between a and b is:",
        options: ["0°", "30°", "60°", "90°"],
        answer: 2,
        explanation: "cos θ = 6 / (4 * 3) = 6 / 12 = 1/2, so θ = 60°."
    },
    {
        question: "If |a| = 2, |b| = 5, and |a x b| = 5, the angle between a and b is:",
        options: ["30°", "45°", "60°", "90°"],
        answer: 0,
        explanation: "sin θ = 5 / (2 * 5) = 1/2, so θ = 30°."
    },
    {
        question: "Which of the following properties holds for vector addition?",
        options: ["Commutative", "Associative", "Both commutative and associative", "Neither"],
        answer: 2,
        explanation: "Vector addition is both commutative (a+b = b+a) and associative ((a+b)+c = a+(b+c))."
    },
    {
        question: "Multiplication of a vector by a scalar satisfies which law with respect to scalar addition?",
        options: ["Distributive law", "Commutative law", "Associative law", "Cancellation law"],
        answer: 0,
        explanation: "(m + n)a = ma + na demonstrates the distributive law over scalar addition."
    },
    {
        question: "If a and b are unit vectors and θ is the angle between them, then |a - b| is equal to:",
        options: ["2 sin(θ/2)", "2 cos(θ/2)", "sin θ", "cos θ"],
        answer: 0,
        explanation: "|a - b|² = |a|² + |b|² - 2|a||b|cos θ = 2 - 2cos θ = 4 sin²(θ/2), taking square root gives 2 sin(θ/2)."
    },
    {
        question: "If a and b are unit vectors, then |a + b| is equal to:",
        options: ["2 sin(θ/2)", "2 cos(θ/2)", "1 + cos θ", "sin θ"],
        answer: 1,
        explanation: "|a + b|² = 2 + 2cos θ = 4 cos²(θ/2), taking square root gives 2 cos(θ/2)."
    },
    {
        question: "The component of vector a along vector b can also be written as:",
        options: ["a . b̂", "a x b̂", "(a . b) b", "a / |b|"],
        answer: 0,
        explanation: "Component of a along b is a dotted with the unit vector of b: a . b̂."
    },
    {
        question: "If vectors 2i + j + k and i - 4j + λk are perpendicular, the value of λ is:",
        options: ["2", "-2", "1", "0"],
        answer: 0,
        explanation: "(2)(1) + (1)(-4) + (1)(λ) = 0 => 2 - 4 + λ = 0 => λ = 2."
    },
    {
        question: "The vectors i, j, and k form a right-handed system because:",
        options: ["i x j = k", "i . j = 0", "i + j = k", "i = j = k"],
        answer: 0,
        explanation: "A standard right-handed orthogonal triad satisfies i x j = k, j x k = i, and k x i = j."
    },
    {
        question: "If a, b, c are mutually orthogonal vectors of equal magnitudes, then angle between a + b + c and any of them is:",
        options: ["cos⁻¹(1/sqrt(3))", "0°", "90°", "45°"],
        answer: 0,
        explanation: "Due to symmetry with equal magnitude, the angle is given by cos⁻¹(1/sqrt(3))."
    },
    {
        question: "The expression (a x b)² + (a . b)² is always equal to:",
        options: ["|a|² |b|²", "0", "|a| + |b|", "1"],
        answer: 0,
        explanation: "(|a||b|sinθ)² + (|a||b|cosθ)² = |a|²|b|²(sin²θ + cos²θ) = |a|²|b|²."
    },
    {
        question: "If a and b are non-zero vectors such that a x b = 0 and a . b = 0, what can be inferred?",
        options: ["a and b are parallel", "a and b are perpendicular", "At least one of a or b is a zero vector", "They are unit vectors"],
        answer: 2,
        explanation: "Both parallel and perpendicular conditions can only simultaneously hold if one of them is a zero vector."
    },
    {
        question: "If the position vectors of points A and B are 2i - j + k and 3i + 4j - k respectively, then vector AB is:",
        options: ["i + 5j - 2k", "5i + 3j", "-i - 5j + 2k", "i - 5j + 2k"],
        answer: 0,
        explanation: "Position vector of B minus position vector of A: (3-2)i + (4-(-1))j + (-1-1)k = i + 5j - 2k."
    },
    {
        question: "Which vector is perpendicular to both i + j and j + k?",
        options: ["i - j + k", "i + j + k", "2i - j", "0"],
        answer: 0,
        explanation: "Cross product of (i + j) and (j + k) results in i - j + k, which is orthogonal to both."
    },
    {
        question: "According to Lagrange's identity, for any two vectors a and b, |a x b|² + (a . b)² is equal to:",
        options: ["|a|² |b|²", "0", "|a| + |b|", "1"],
        answer: 0,
        explanation: "Lagrange's identity states that |a x b|² + (a . b)² = |a|² |b|²."
    },
    {
        question: "The value of the scalar triple product i . (j x k) is:",
        options: ["0", "1", "-1", "3"],
        answer: 1,
        explanation: "Since j x k = i, therefore i . i = 1."
    },
    {
        question: "If a, b, and c are three non-coplanar vectors, then [a b c] is always:",
        options: ["Zero", "Non-zero", "Negative", "Equal to 1"],
        answer: 1,
        explanation: "For non-coplanar vectors, the scalar triple product (box product) is always non-zero."
    },
    {
        question: "If the direction ratios of a vector are a, b, and c, then the relation with its direction cosines (l, m, n) is:",
        options: ["l = a, m = b, n = c", "l = a/k, m = b/k, n = c/k (where k = ±√(a²+b²+c²))", "l = ka, m = kb, n = kc", "l+m+n = a+b+c"],
        answer: 1,
        explanation: "Direction cosines are obtained by dividing each direction ratio by the magnitude k = ±√(a²+b²+c²)."
    },
    {
        question: "The vector equation of a plane passing through a point with position vector a and perpendicular to a normal vector n is:",
        options: ["r . n = a . n", "r x n = a x n", "r = a + tn", "r . a = n"],
        answer: 0,
        explanation: "The standard dot product equation of a plane is r . n = a . n."
    }
];

console.log("TOTAL CHAPTER 3 MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsMaths3",
    JSON.stringify(questions)
);

// preparation page controls (matching Chapter 2 style)
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
                    `You completed all ${questions.length} questions for Mathematics Chapter 3.`;
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