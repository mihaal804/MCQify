const questions = [
    {
        question: "A quantity which has both magnitude and direction is called:",
        options: [
            "Scalar quantity",
            "Vector quantity",
            "Physical constant",
            "Derived unit"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A vector quantity has both magnitude and direction."
    },

    {
        question: "Which of the following is a scalar quantity?",
        options: [
            "Displacement",
            "Velocity",
            "Speed",
            "Force"
        ],
       answer: 2,
        difficulty: "Easy",
        explanation: "Speed has magnitude only, so it is a scalar quantity."
    },

    {
        question: "Which of the following is a vector quantity?",
        options: [
            "Mass",
            "Time",
            "Temperature",
            "Acceleration"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "Acceleration has both magnitude and direction."
    },

    {
        question: "The magnitude of a vector is always:",
        options: [
            "A scalar quantity",
            "A vector quantity",
            "A unit vector",
            "Zero"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The magnitude of a vector is a scalar quantity."
    },

    {
        question: "A vector having magnitude one is called:",
        options: [
            "Zero vector",
            "Unit vector",
            "Equal vector",
            "Position vector"
        ],
       answer: 1,
        difficulty: "Normal",
        explanation: "A unit vector has a magnitude equal to one."
    },

    {
        question: "Two vectors are equal when they have:",
        options: [
            "Same magnitude only",
            "Same direction only",
            "Same magnitude and same direction",
            "Different magnitude and direction"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Equal vectors have the same magnitude and the same direction."
    },

    {
        question: "The resultant of two vectors is obtained by:",
        options: [
            "Adding only their magnitudes",
            "Vector addition",
            "Multiplying their units",
            "Subtracting their directions"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The resultant vector is found using vector addition."
    },

    {
        question: "If two equal vectors act in opposite directions, their resultant is:",
        options: [
            "Maximum",
            "Twice either vector",
            "Zero",
            "One"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Equal vectors in opposite directions cancel each other, giving zero resultant."
    },

    {
        question: "The scalar product of two perpendicular vectors is:",
        options: [
            "Maximum",
            "Zero",
            "One",
            "Negative one"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "A · B = AB cos θ. For perpendicular vectors, θ = 90°, so cos 90° = 0."
    },

    {
        question: "The scalar product of two vectors gives:",
        options: [
            "A vector quantity",
            "A scalar quantity",
            "A unit vector",
            "No quantity"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The dot product or scalar product gives a scalar quantity."
    }
    ,
{
    question: "The x-component of a vector A making angle θ with the x-axis is:",
    options: [
        "A sin θ",
        "A cos θ",
        "A tan θ",
        "A / cos θ"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The component along the x-axis is Ax = A cos θ."
},

{
    question: "The y-component of a vector A making angle θ with the x-axis is:",
    options: [
        "A cos θ",
        "A sin θ",
        "A tan θ",
        "A / sin θ"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The component along the y-axis is Ay = A sin θ."
},

{
    question: "A vector has components 6 units and 8 units. Its magnitude is:",
    options: [
        "10 units",
        "12 units",
        "14 units",
        "48 units"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "A = √(6² + 8²) = √100 = 10 units."
},

{
    question: "The direction of a vector with components Ax and Ay can be found using:",
    options: [
        "sin θ = Ax/Ay",
        "cos θ = Ay/Ax",
        "tan θ = Ay/Ax",
        "tan θ = AxAy"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "For a vector, tan θ = Ay/Ax."
},

{
    question: "Two vectors of 5 N each act in the same direction. Their resultant is:",
    options: [
        "0 N",
        "5 N",
        "10 N",
        "25 N"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "For vectors in the same direction, their magnitudes are added: 5 + 5 = 10 N."
},

{
    question: "Two equal vectors act in opposite directions. The magnitude of their resultant is:",
    options: [
        "Twice one vector",
        "Equal to one vector",
        "Zero",
        "Half of one vector"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Equal vectors in opposite directions cancel each other."
},

{
    question: "If the resultant of two vectors is zero, the two vectors must be:",
    options: [
        "Equal and in the same direction",
        "Equal and in opposite directions",
        "Perpendicular",
        "Unequal and perpendicular"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Two equal vectors in opposite directions have a zero resultant."
},

{
    question: "Which operation is commutative for vector addition?",
    options: [
        "A + B = B + A",
        "A × B = B × A",
        "A − B = B − A",
        "A × B = −B × A"
    ],
    answer: 0,
    difficulty: "Difficult",
    explanation: "Vector addition is commutative: A + B = B + A."
},

{
    question: "If A = 3i + 4j, the unit vector in the direction of A is:",
    options: [
        "3i + 4j",
        "4i + 3j",
        "0.6i + 0.8j",
        "0.8i + 0.6j"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Magnitude of A is 5, so the unit vector is A/|A| = 0.6i + 0.8j."
},

{
    question: "A vector has magnitude 10 and makes an angle of 60° with the x-axis. Its x-component is:",
    options: [
        "5 units",
        "8.66 units",
        "10 units",
        "20 units"
    ],
    answer: 0,
    difficulty: "Difficult",
    explanation: "Ax = A cos 60° = 10 × 0.5 = 5 units."
},
    ,
{
    question: "The dot product of a vector with itself is equal to:",
    options: [
        "Zero",
        "Its magnitude",
        "The square of its magnitude",
        "One"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "A · A = A² cos 0° = A²."
},

{
    question: "The dot product of two parallel vectors is:",
    options: [
        "Zero",
        "Equal to the product of their magnitudes",
        "Always negative",
        "Always one"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "For parallel vectors, θ = 0°, so A · B = AB cos 0° = AB."
},

{
    question: "Which physical quantity is an example of a scalar product?",
    options: [
        "Torque",
        "Angular momentum",
        "Work",
        "Position"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Work is the scalar product of force and displacement: W = F · d."
},

{
    question: "A force of 10 N moves an object through 5 m in the same direction. The work done is:",
    options: [
        "2 J",
        "15 J",
        "50 J",
        "100 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "W = Fd cos θ. Since θ = 0°, W = 10 × 5 = 50 J."
},

{
    question: "If force and displacement are perpendicular, the work done is:",
    options: [
        "Maximum",
        "Zero",
        "Equal to force",
        "Equal to displacement"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "W = Fd cos θ. For θ = 90°, cos 90° = 0, so work is zero."
},

{
    question: "Electric flux through a surface can be represented by:",
    options: [
        "E · A",
        "E × A",
        "E + A",
        "E − A"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Electric flux is the scalar product of electric field and area vector: Φ = E · A."
},

{
    question: "The magnitude of A × B is maximum when the angle between A and B is:",
    options: [
        "0°",
        "30°",
        "60°",
        "90°"
    ],
    answer: 3,
    difficulty: "Normal",
    explanation: "A × B = AB sin θ. The maximum value occurs when sin θ = 1, at 90°."
},

{
    question: "The cross product of two parallel vectors is:",
    options: [
        "Maximum",
        "Zero",
        "Equal to AB",
        "Always negative"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "A × B = AB sin θ. For parallel vectors, θ = 0°, so the cross product is zero."
},

{
    question: "Which quantity is represented by the cross product of force and position vector?",
    options: [
        "Work",
        "Power",
        "Torque",
        "Energy"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Torque is given by τ = r × F."
},

{
    question: "If two vectors have magnitudes 3 and 4 and are perpendicular, their cross-product magnitude is:",
    options: [
        "0",
        "1",
        "7",
        "12"
    ],
    answer: 3,
    difficulty: "Difficult",
    explanation: "|A × B| = AB sin 90° = 3 × 4 = 12."
},
    ,
{
    question: "The number of perpendicular components of a vector in 2-D is:",
    options: [
        "1",
        "2",
        "3",
        "4"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A vector in two dimensions can be resolved into two perpendicular components: x-component and y-component."
},

{
    question: "The magnitude of a unit vector is:",
    options: [
        "0",
        "1",
        "2",
        "Depends on direction"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A unit vector always has magnitude equal to 1."
},

{
    question: "The magnitude of vector A = 3i + 4j is:",
    options: [
        "3",
        "4",
        "5",
        "7"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Magnitude = √(3² + 4²) = 5."
},

{
    question: "A force of 10 N makes an angle of 30° with the x-axis. Its x-component is:",
    options: [
        "5 N",
        "8.66 N",
        "10 N",
        "5.77 N"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Fx = F cos θ = 10 cos 30° = 8.66 N."
},

{
    question: "A force of 10 N makes an angle of 30° with the x-axis. Its y-component is:",
    options: [
        "5 N",
        "8.66 N",
        "10 N",
        "3.33 N"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Fy = F sin θ = 10 sin 30° = 5 N."
},

{
    question: "If two vectors are perpendicular, their scalar product is:",
    options: [
        "Maximum",
        "Minimum",
        "Zero",
        "One"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "A · B = AB cos θ. For perpendicular vectors, θ = 90° and cos 90° = 0."
},

{
    question: "The scalar product of two vectors gives:",
    options: [
        "A vector quantity",
        "A scalar quantity",
        "A unit vector",
        "A null vector"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "The dot product of two vectors produces a scalar quantity."
},

{
    question: "The direction of A × B is determined by:",
    options: [
        "Left-hand rule",
        "Right-hand rule",
        "Triangle rule",
        "Parallelogram rule"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "The direction of the cross product is determined using the right-hand rule."
},

{
    question: "The magnitude of the cross product of two perpendicular vectors A and B is:",
    options: [
        "A + B",
        "A − B",
        "AB",
        "0"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "A × B = AB sin θ. For θ = 90°, sin 90° = 1, so the magnitude is AB."
},

{
    question: "Which statement about the vector product is correct?",
    options: [
        "A × B = B × A",
        "A × B = −B × A",
        "A × B is always zero",
        "A × B is always a scalar"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Vector product is anti-commutative, so A × B = −B × A."
},
,
{
    question: "A vector with zero magnitude is called:",
    options: [
        "Unit vector",
        "Zero vector",
        "Equal vector",
        "Position vector"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A vector having zero magnitude is called a zero vector."
},

{
    question: "The resultant of two vectors is maximum when the angle between them is:",
    options: [
        "0°",
        "45°",
        "90°",
        "180°"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "The resultant is maximum when both vectors act in the same direction."
},

{
    question: "The resultant of two vectors is minimum when the angle between them is:",
    options: [
        "0°",
        "60°",
        "90°",
        "180°"
    ],
    answer: 3,
    difficulty: "Easy",
    explanation: "The resultant is minimum when the vectors act in opposite directions."
},

{
    question: "If a vector has only an x-component, its y-component is:",
    options: [
        "Equal to the x-component",
        "Zero",
        "Maximum",
        "Negative of x-component"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "A vector lying completely along the x-axis has zero y-component."
},

{
    question: "If a vector has only a y-component, its x-component is:",
    options: [
        "Zero",
        "Equal to the y-component",
        "Maximum",
        "Negative of y-component"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "A vector lying completely along the y-axis has zero x-component."
},

{
    question: "Two vectors of magnitudes 6 N and 8 N are perpendicular. Their resultant is:",
    options: [
        "2 N",
        "10 N",
        "14 N",
        "48 N"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "R = √(6² + 8²) = √100 = 10 N."
},

{
    question: "Which rule is commonly used to find the resultant of two vectors graphically?",
    options: [
        "Ohm's law",
        "Parallelogram law",
        "Hooke's law",
        "Newton's third law"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "The parallelogram law is used to determine the resultant of two vectors graphically."
},

{
    question: "If A · B is positive, the angle between vectors A and B is:",
    options: [
        "90°",
        "Greater than 90°",
        "Less than 90°",
        "Always 180°"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "A · B = AB cos θ. A positive dot product means cos θ is positive, so θ is less than 90°."
},
,
{
    question: "A vector has components 3 units and 4 units. What is its magnitude?",
    options: [
        "5 units",
        "7 units",
        "12 units",
        "1 unit"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Magnitude = √(3² + 4²) = √25 = 5 units."
},

{
    question: "A force of 10 N acts at 60° to the x-axis. What is its x-component?",
    options: [
        "10 N",
        "8.66 N",
        "5 N",
        "2 N"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Fx = F cos θ = 10 cos 60° = 10 × 0.5 = 5 N."
},

{
    question: "A vector of magnitude 20 units makes an angle of 30° with the x-axis. Its y-component is:",
    options: [
        "10 units",
        "17.32 units",
        "20 units",
        "5 units"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Ay = A sin θ = 20 sin 30° = 20 × 0.5 = 10 units."
},

{
    question: "Two perpendicular forces of 6 N and 8 N act on an object. Their resultant is:",
    options: [
        "2 N",
        "10 N",
        "14 N",
        "48 N"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "R = √(6² + 8²) = √100 = 10 N."
},

{
    question: "A force of 12 N makes an angle of 60° with the x-axis. Its y-component is:",
    options: [
        "6 N",
        "10.39 N",
        "12 N",
        "4 N"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Fy = F sin θ = 12 sin 60° = 12 × 0.866 = 10.39 N."
},

{
    question: "Two vectors of 5 N each act at an angle of 60°. Their resultant magnitude is:",
    options: [
        "5 N",
        "8.66 N",
        "10 N",
        "25 N"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "R = √(A² + B² + 2AB cos θ) = √(25 + 25 + 50 × 0.5) = √75 ≈ 8.66 N. "
},

{
    question: "A vector has components 5 m and 12 m. What is its magnitude?",
    options: [
        "7 m",
        "13 m",
        "17 m",
        "60 m"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Magnitude = √(5² + 12²) = √169 = 13 m."
},

{
    question: "Two vectors have magnitudes 10 N and 6 N and act in opposite directions. Their resultant magnitude is:",
    options: [
        "16 N",
        "60 N",
        "4 N",
        "0 N"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "For opposite directions, resultant = |10 − 6| = 4 N."
},

{
    question: "A vector has components 8 units and 6 units. What angle does it make with the x-axis?",
    options: [
        "36.9°",
        "53.1°",
        "45°",
        "60°"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "tan θ = Ay/Ax = 6/8 = 0.75, so θ ≈ 36.9°. "
},
{
    question: "A vector is completely specified by its:",
    options: [
        "Magnitude only",
        "Direction only",
        "Magnitude and direction",
        "Unit only"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "A vector is specified by both magnitude and direction."
},

{
    question: "The resultant of two vectors acting in the same direction is:",
    options: [
        "Their difference",
        "Their sum",
        "Always zero",
        "Their product"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Vectors in the same direction are added directly."
},

{
    question: "A vector with magnitude zero is known as:",
    options: [
        "Unit vector",
        "Zero vector",
        "Equal vector",
        "Negative vector"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A vector having zero magnitude is called a zero vector."
},

{
    question: "If A · B = 0, the two non-zero vectors are:",
    options: [
        "Parallel",
        "Perpendicular",
        "Opposite",
        "Equal"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "A · B = AB cos θ. For perpendicular vectors, θ = 90° and the dot product is zero."
},

{
    question: "The magnitude of A = 5i + 12j is:",
    options: [
        "7",
        "13",
        "17",
        "60"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Magnitude = √(5² + 12²) = √169 = 13."
},

{
    question: "A force of 20 N acts at 60° to the x-axis. Its y-component is:",
    options: [
        "10 N",
        "17.32 N",
        "20 N",
        "5 N"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Fy = F sin 60° = 20 × 0.866 = 17.32 N."
},

{
    question: "The magnitude of A × B is zero when the vectors are:",
    options: [
        "Perpendicular",
        "Parallel",
        "At 45°",
        "At 60°"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "|A × B| = AB sin θ. It is zero when θ = 0° or 180°."
},

{
    question: "If two vectors have magnitudes 8 and 6 and are perpendicular, their resultant is:",
    options: [
        "2",
        "10",
        "14",
        "48"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "R = √(8² + 6²) = √100 = 10."
},

{
    question: "Two vectors of magnitudes 10 and 10 act at 60°. Their resultant is:",
    options: [
        "10",
        "10√2",
        "10√3",
        "20"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "R = √(10² + 10² + 2(10)(10)cos60°) = √300 = 10√3."
},

{
    question: "If A · B is negative, the angle between A and B is:",
    options: [
        "Less than 90°",
        "Exactly 90°",
        "Greater than 90°",
        "Always 0°"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "A · B = AB cos θ. A negative dot product means cos θ is negative, so θ is greater than 90°."
},

{
    question: "The magnitude of the resultant of two vectors is maximum when the angle between them is:",
    options: [
        "0°",
        "60°",
        "90°",
        "180°"
    ],
    answer: 0,
    difficulty: "Difficult",
    explanation: "The resultant is maximum when both vectors act in the same direction."
},

{
    question: "The magnitude of the resultant of two vectors is minimum when the angle between them is:",
    options: [
        "0°",
        "45°",
        "90°",
        "180°"
    ],
    answer: 3,
    difficulty: "Difficult",
    explanation: "The resultant is minimum when the vectors act in opposite directions."
},

{
    question: "If A = 6i + 8j, the unit vector in the direction of A is:",
    options: [
        "0.6i + 0.8j",
        "0.8i + 0.6j",
        "6i + 8j",
        "3i + 4j"
    ],
    answer: 0,
    difficulty: "Difficult",
    explanation: "The magnitude of A is 10, so the unit vector is A/|A| = 0.6i + 0.8j."
},

{
    question: "If A × B = 0 for non-zero vectors, then A and B are:",
    options: [
        "Perpendicular",
        "Parallel or anti-parallel",
        "Always equal",
        "At 45°"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "A × B = AB sin θ. For non-zero vectors, it is zero when θ = 0° or 180°."
},

{
    question: "A vector has components 12 units and 5 units. Its magnitude is:",
    options: [
        "7 units",
        "13 units",
        "17 units",
        "60 units"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Magnitude = √(12² + 5²) = √169 = 13 units."
},

{
    question: "The scalar product of two parallel vectors acting in the same direction is:",
    options: [
        "Zero",
        "AB",
        "A + B",
        "A − B"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "A · B = AB cos 0° = AB."
},

{
    question: "A force of 10 N acts through 4 m at an angle of 60°. The work done is:",
    options: [
        "20 J",
        "40 J",
        "5 J",
        "80 J"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "W = Fd cos θ = 10 × 4 × cos60° = 20 J."
},

{
    question: "The cross product of two vectors produces:",
    options: [
        "A scalar",
        "A vector",
        "A dimensionless quantity",
        "Only a magnitude"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "The vector product or cross product produces a vector quantity."
},

{
    question: "If a vector is multiplied by a scalar, its magnitude is:",
    options: [
        "Always zero",
        "Changed according to the scalar",
        "Always one",
        "Unaffected in every case"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Multiplying a vector by a scalar changes its magnitude according to the scalar value."
}
];

localStorage.setItem("mcqQuestionsChapter2", JSON.stringify(questions));

let currentQuestion = 0;

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".mcq-card h2");
const optionsContainer = document.querySelector(".options");
const feedback = document.querySelector(".feedback");
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");

const progressText = document.querySelector(".progress-top span:last-child");
const progressCount = document.querySelector(".progress-top span:first-child");
const progressFill = document.querySelector(".progress-fill");

function loadQuestion() {
    const q = questions[currentQuestion];

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent = q.question;

    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "option";
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        if (index === q.answer) {
            button.classList.add("correct");
        }

        optionsContainer.appendChild(button);
    });

    feedback.innerHTML = `
        <strong>Correct!</strong>
        <p>${q.explanation}</p>
    `;

    const total = questions.length;
    const current = currentQuestion + 1;
    const percentage = (current / total) * 100;

    progressCount.textContent =
        `Question ${current} of ${total}`;

    progressText.textContent =
        `${Math.round(percentage)}% Complete`;

    progressFill.style.width = `${percentage}%`;

    previousButton.disabled = currentQuestion === 0;
    nextButton.disabled = currentQuestion === total - 1;
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
});

previousButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

loadQuestion();