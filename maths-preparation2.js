const questions = [
    // --- Types & Basic Properties of Matrices (1 - 15) ---
    {
        question: "An array of numbers arranged in horizontal and vertical lines enclosed within square brackets is called a:",
        options: ["Matrix", "Determinant", "Vector", "Scalar"],
        answer: 0,
        explanation: "A matrix is defined as a rectangular array of numbers enclosed within square brackets[cite: 1]."
    },
    {
        question: "If a matrix has m rows and n columns, what is its order or dimension?",
        options: ["m x n", "n x m", "m + n", "m - n"],
        answer: 0,
        explanation: "The order of a matrix is always written as rows by columns, i.e., m x n[cite: 1]."
    },
    {
        question: "What is the total number of elements in a matrix of order 3 x 4?",
        options: ["12", "7", "34", "3"],
        answer: 0,
        explanation: "The total number of elements is obtained by multiplying the number of rows and columns (3 * 4 = 12)[cite: 1]."
    },
    {
        question: "Two matrices A and B are equal if and only if:",
        options: ["They have the same order and identical corresponding elements", "They have the same number of elements only", "Their determinants are equal", "Their transposes are equal"],
        answer: 0,
        explanation: "Equality of matrices requires both the same order and identical corresponding elements[cite: 1]."
    },
    {
        question: "If a matrix has only one row, it is called a:",
        options: ["Row matrix", "Column matrix", "Scalar matrix", "Square matrix"],
        answer: 0,
        explanation: "A matrix with a single row is called a row matrix or row vector[cite: 1]."
    },
    {
        question: "If a matrix has only one column, it is called a:",
        options: ["Column matrix", "Row matrix", "Diagonal matrix", "Unit matrix"],
        answer: 0,
        explanation: "A matrix with a single column is called a column matrix or column vector[cite: 2]."
    },
    {
        question: "A square matrix has:",
        options: ["Equal number of rows and columns", "More rows than columns", "More columns than rows", "Zero elements everywhere"],
        answer: 0,
        explanation: "A matrix where m = n is termed a square matrix[cite: 2]."
    },
    {
        question: "In a square matrix, elements where i = j form the:",
        options: ["Main diagonal", "Secondary diagonal", "Null space", "Trace vector"],
        answer: 0,
        explanation: "The entries where the row index equals the column index (a_11, a_22, etc.) form the main diagonal."
    },
    {
        question: "A square matrix where all elements outside the main diagonal are zero is called a:",
        options: ["Diagonal matrix", "Scalar matrix", "Identity matrix", "Rectangular matrix"],
        answer: 0,
        explanation: "A diagonal matrix has non-zero elements only along its main diagonal[cite: 2]."
    },
    {
        question: "A diagonal matrix in which all main diagonal elements are equal is a:",
        options: ["Scalar matrix", "Identity matrix", "Null matrix", "Symmetric matrix"],
        answer: 0,
        explanation: "A scalar matrix is a diagonal matrix with equal non-zero diagonal entries[cite: 3]."
    },
    {
        question: "An identity matrix (or unit matrix) is a scalar matrix where each diagonal element equals:",
        options: ["1", "0", "-1", "Any real number"],
        answer: 0,
        explanation: "An identity matrix has 1s on the main diagonal and 0s elsewhere[cite: 3]."
    },
    {
        question: "A square matrix in which all elements below the main diagonal are zero is called:",
        options: ["Upper triangular matrix", "Lower triangular matrix", "Diagonal matrix", "Scalar matrix"],
        answer: 0,
        explanation: "An upper triangular matrix has zero elements strictly below the main diagonal[cite: 3]."
    },
    {
        question: "A square matrix in which all elements above the main diagonal are zero is called:",
        options: ["Lower triangular matrix", "Upper triangular matrix", "Symmetric matrix", "Skew-symmetric matrix"],
        answer: 0,
        explanation: "A lower triangular matrix has zero elements strictly above the main diagonal[cite: 3]."
    },
    {
        question: "If A is a square matrix such that A = A^t, then A is:",
        options: ["Symmetric matrix", "Skew-symmetric matrix", "Singular matrix", "Identity matrix"],
        answer: 0,
        explanation: "A matrix equals its transpose if and only if it is symmetric[cite: 4]."
    },
    {
        question: "If A is a square matrix such that A = -A^t, then A is:",
        options: ["Skew-symmetric matrix", "Symmetric matrix", "Orthogonal matrix", "Scalar matrix"],
        answer: 0,
        explanation: "A skew-symmetric matrix satisfies the condition A = -A^t[cite: 4]."

    // --- Algebra of Matrices & Transpose Properties (16 - 35) ---
    },
    {
        question: "What are the elements along the main diagonal of any skew-symmetric matrix?",
        options: ["All zeros (0)", "All ones (1)", "Can be any number", "Always negative"],
        answer: 0,
        explanation: "For a skew-symmetric matrix, a_ii = -a_ii, which implies 2a_ii = 0, so all diagonal entries are zero[cite: 4]."
    },
    {
        question: "Two matrices can be added or subtracted only if they have:",
        options: ["The exact same order", "Different orders", "Equal determinants", "Square shape"],
        answer: 0,
        explanation: "Addition and subtraction require matrices of identical dimensions[cite: 5, 6]."
    },
    {
        question: "If A and B are conformable for multiplication AB, then the product AB is generally:",
        options: ["Not commutative (AB != BA)", "Always commutative", "Equal to BA always", "A null matrix"],
        answer: 0,
        explanation: "Matrix multiplication does not satisfy the commutative law in general[cite: 8]."
    },
    {
        question: "For any matrix A, the transpose of its transpose, (A^t)^t, is equal to:",
        options: ["A", "A^t", "-A", "I"],
        answer: 0,
        explanation: "Taking the transpose twice brings back the original matrix A[cite: 6]."
    },
    {
        question: "According to the reversal law of transpose, (AB)^t is equal to:",
        options: ["B^t * A^t", "A^t * B^t", "AB", "BA"],
        answer: 0,
        explanation: "The transpose of a product reverses the order: (AB)^t = B^t * A^t[cite: 9]."
    },
    {
        question: "For any two matrices A and B conformable for addition, (A + B)^t equals:",
        options: ["A^t + B^t", "A^t - B^t", "B^t - A^t", "A^t * B^t"],
        answer: 0,
        explanation: "The transpose distributes over matrix addition: (A + B)^t = A^t + B^t[cite: 9]."
    },
    {
        question: "Any square matrix can always be uniquely expressed as the sum of:",
        options: ["A symmetric and a skew-symmetric matrix", "A diagonal and a scalar matrix", "An identity and a null matrix", "An upper and a lower triangular matrix"],
        answer: 0,
        explanation: "Every square matrix A can be written as P + Q where P is symmetric and Q is skew-symmetric[cite: 9, 10]."
    },
    {
        question: "In the expression P = 1/2(A + A^t), the matrix P is always:",
        options: ["Symmetric", "Skew-symmetric", "Diagonal", "Singular"],
        answer: 0,
        explanation: "P^t = 1/2(A^t + (A^t)^t) = 1/2(A^t + A) = P, so P is symmetric[cite: 10]."
    },
    {
        question: "In the expression Q = 1/2(A - A^t), the matrix Q is always:",
        options: ["Skew-symmetric", "Symmetric", "Identity", "Scalar"],
        answer: 0,
        explanation: "Q^t = 1/2(A^t - A) = -1/2(A - A^t) = -Q, so Q is skew-symmetric[cite: 10]."
    },
    {
        question: "If the order of matrix A is m x n and matrix B is n x p, the order of product AB is:",
        options: ["m x p", "n x n", "m x n", "p x m"],
        answer: 0,
        explanation: "Inner dimensions must match (n), leaving the outer dimensions as the product order (m x p)[cite: 6]."
    },
    {
        question: "If A is a square matrix of order n, what is the scalar multiplication property |k*A|?",
        options: ["k^n * |A|", "k * |A|", "n * k * |A|", "k^2 * |A|"],
        answer: 0,
        explanation: "Scaling an n x n matrix by scalar k scales its determinant by k^n[cite: 38]."
    },
    {
        question: "The sum of the main diagonal elements of a square matrix is known as the:",
        options: ["Trace", "Determinant", "Rank", "Norm"],
        answer: 0,
        explanation: "The trace of a square matrix is defined as the sum of its diagonal entries[cite: 38]."
    },
    {
        question: "If A and B are square matrices of the same order, then det(AB) equals:",
        options: ["det(A) * det(B)", "det(A) + det(B)", "det(A) - det(B)", "det(B) / det(A)"],
        answer: 0,
        explanation: "The determinant of a matrix product is the product of their individual determinants[cite: 38]."
    },
    {
        question: "If a matrix has a row or column entirely filled with zeros, its determinant is:",
        options: ["0", "1", "Undefined", "Equal to the trace"],
        answer: 0,
        explanation: "Property 6 states that if any row or column contains all zeros, the determinant evaluates to zero[cite: 22]."
    },
    {
        question: "Interchanging any two rows or columns of a square matrix multiplies its determinant by:",
        options: ["-1", "1", "0", "2"],
        answer: 0,
        explanation: "Property 2 states that swapping two rows or columns changes the sign of the determinant[cite: 18]."
    },
    {
        question: "If two rows or two columns of a square matrix are identical, its determinant is:",
        options: ["0", "1", "-1", "Undefined"],
        answer: 0,
        explanation: "Property 3 states that identical rows or columns make the determinant zero[cite: 19]."
    },
    {
        question: "For any square matrix A, the determinant of A and its transpose A^t are:",
        options: ["Equal (|A| = |A^t|)", "Negatives of each other", "Reciprocals", "Always zero"],
        answer: 0,
        explanation: "Property 1 proves that a matrix and its transpose share the exact same determinant value[cite: 17, 18]."
    },
    {
        question: "If each element of a row or column is multiplied by scalar k, the new determinant is:",
        options: ["k * |A|", "|A|", "k^n * |A|", "0"],
        answer: 0,
        explanation: "Property 4 states that multiplying a single row/column by k scales the determinant by k[cite: 19, 20]."
    },
    {
        question: "If a square matrix is triangular or diagonal, its determinant is equal to the:",
        options: ["Product of its main diagonal elements", "Sum of its main diagonal elements", "Zero", "Trace of the matrix"],
        answer: 0,
        explanation: "Property 8 states that the determinant of a triangular/diagonal matrix is simply the product of its diagonal entries[cite: 22, 23]."
    },
    {
        question: "Performing elementary row operations on a matrix changes its:",
        options: ["Individual rows, but not the rank or span properties", "Determinant value always", "Order", "Number of elements"],
        answer: 0,
        explanation: "Row operations alter row values but preserve the matrix rank and solution sets of associated systems[cite: 27]."

    // --- Determinants, Minors, Cofactors & Inverse (36 - 55) ---
    },
    {
        question: "The determinant of a 2 x 2 matrix [[a, b], [c, d]] is given by:",
        options: ["ad - bc", "ab - cd", "ad + bc", "ac - bd"],
        answer: 0,
        explanation: "The standard 2 x 2 determinant formula is ad - bc[cite: 11]."
    },
    {
        question: "The minor M_ij of an element a_ij in a square matrix is obtained by deleting:",
        options: ["The i-th row and j-th column", "Only the i-th row", "Only the j-th column", "The main diagonal"],
        answer: 0,
        explanation: "A minor is the determinant of the submatrix left after removing the specified row and column[cite: 12]."
    },
    {
        question: "The cofactor A_ij of an element a_ij is calculated using the formula:",
        options: ["A_ij = (-1)^(i+j) * M_ij", "A_ij = (-1)^(i-j) * M_ij", "A_ij = M_ij", "A_ij = -M_ij"],
        answer: 0,
        explanation: "Cofactor incorporates the sign alternating factor (-1)^(i+j) with the minor[cite: 13]."
    },
    {
        question: "A square matrix A is called singular if its determinant is:",
        options: ["0", "Non-zero", "1", "-1"],
        answer: 0,
        explanation: "A matrix with a zero determinant is singular and lacks an inverse[cite: 14]."
    },
    {
        question: "A square matrix A is called non-singular if its determinant satisfies:",
        options: ["|A| != 0", "|A| = 0", "|A| = 1", "|A| = -1"],
        answer: 0,
        explanation: "Non-singular matrices have a non-zero determinant, guaranteeing invertibility[cite: 14]."
    },
    {
        question: "The multiplicative inverse of a square matrix A exists if and only if A is:",
        options: ["Non-singular", "Singular", "Symmetric", "Diagonal"],
        answer: 0,
        explanation: "Inverse calculation requires division by |A|, which is only possible if |A| != 0[cite: 14]."
    },
    {
        question: "What is the formula to find the inverse of a non-singular matrix A using adjoint?",
        options: ["A^(-1) = (adj A) / |A|", "A^(-1) = |A| / (adj A)", "A^(-1) = adj A * |A|", "A^(-1) = A^t"],
        answer: 0,
        explanation: "The adjoint method defines the inverse as 1 / |A| multiplied by the adjoint matrix[cite: 15]."
    },
    {
        question: "For non-singular matrices A and B of the same order, the reversal law for inverse (AB)^(-1) is:",
        options: ["B^(-1) * A^(-1)", "A^(-1) * B^(-1)", "AB", "BA"],
        answer: 0,
        explanation: "The inverse of a product reverses the order of the matrices: (AB)^(-1) = B^(-1) * A^(-1)[cite: 16]."
    },
    {
        question: "What is the adjoint of a matrix composed of?",
        options: ["The transpose of its cofactor matrix", "The cofactor matrix itself", "The inverse matrix", "The diagonal elements"],
        answer: 0,
        explanation: "Adjoint is defined as the transpose of the matrix of cofactors[cite: 14, 15]."
    },
    {
        question: "If A is a non-singular square matrix, what is the product A * A^(-1)?",
        options: ["Identity matrix (I)", "Zero matrix", "Matrix A", "Scalar 1"],
        answer: 0,
        explanation: "Multiplying a matrix by its inverse yields the identity matrix[cite: 15]."
    },
    {
        question: "If matrix A = [[1, 2], [3, 6]], what is its determinant?",
        options: ["0", "12", "-6", "1"],
        answer: 0,
        explanation: "(1)(6) - (2)(3) = 6 - 6 = 0, making it a singular matrix."
    },
    {
        question: "If the determinant of a 2 x 2 matrix is 5, what is the determinant of its inverse matrix A^(-1)?",
        options: ["1/5", "5", "-5", "-1/5"],
        answer: 0,
        explanation: "The determinant of an inverse matrix is the reciprocal of the original determinant: 1 / |A|[cite: 15]."
    },
    {
        question: "If A is a 3 x 3 matrix and |A| = 2, what is the value of |adj A|?",
        options: ["4", "8", "2", "6"],
        answer: 0,
        explanation: "Using the property |adj A| = |A|^(n-1), for n = 3 and |A| = 2, we get 2^(3-1) = 2^2 = 4."
    },
    {
        question: "Can a rectangular matrix possess a multiplicative inverse?",
        options: ["No, only square matrices can have inverses", "Yes, always", "Only if columns exceed rows", "Only if rows exceed columns"],
        answer: 0,
        explanation: "Multiplicative inverses and determinants are exclusively defined for square matrices."
    },
    {
        question: "If A^2 = I, what is the inverse of matrix A?",
        options: ["A", "I", "-A", "Does not exist"],
        answer: 0,
        explanation: "Since A * A = I, by definition of inverse, A^(-1) = A."

    // --- Echelon Form, Rank & Systems of Linear Equations (56 - 80) ---
    },
    {
        question: "A matrix is in row echelon form if:",
        options: ["The leading entry of each non-zero row is strictly to the right of the leading entry of the row above", "All entries are 1", "It is a diagonal matrix", "All rows are zero"],
        answer: 0,
        explanation: "Row echelon form requires stair-step leading entries moving rightwards[cite: 27, 28]."
    },
    {
        question: "A matrix is in reduced row echelon form if it is in echelon form and:",
        options: ["Each leading entry is 1 and is the only non-zero entry in its column", "All elements above and below diagonal are zero", "It equals an identity matrix always", "All elements are positive"],
        answer: 0,
        explanation: "Reduced row echelon form requires leading 1s to be the sole non-zero entries in their columns[cite: 28]."
    },
    {
        question: "The rank of a matrix is defined as:",
        options: ["The number of non-zero rows in its row echelon form", "The total number of rows", "The order of the matrix", "The value of its determinant"],
        answer: 0,
        explanation: "Matrix rank equals the count of non-zero rows after row reduction[cite: 28]."
    },
    {
        question: "A system of linear equations is called homogeneous if all the constant terms on the right-hand side are:",
        options: ["All zero", "All non-zero", "Equal to 1", "Fractions"],
        answer: 0,
        explanation: "Homogeneous systems have constant terms equal to zero (AX = 0)[cite: 31]."
    },
    {
        question: "A system of linear equations is called consistent if it has:",
        options: ["At least one solution", "No solution at all", "Only infinite solutions", "Only trivial solutions"],
        answer: 0,
        explanation: "Consistency means a system possesses one or more solutions[cite: 33]."
    },
    {
        question: "A system of linear equations is called inconsistent if it has:",
        options: ["No solution at all", "A unique solution", "Infinite solutions", "Trivial solutions only"],
        answer: 0,
        explanation: "An inconsistent system has zero solutions[cite: 33]."
    },
    {
        question: "A homogeneous system of linear equations always possesses at least which solution?",
        options: ["Trivial solution (all variables zero)", "No solution", "A unique non-zero solution", "Infinite non-trivial solutions"],
        answer: 0,
        explanation: "Setting all variables to zero always satisfies a homogeneous system (trivial solution)[cite: 32]."
    },
    {
        question: "A homogeneous system has non-trivial (non-zero) solutions if and only if its coefficient matrix satisfies:",
        options: ["|A| = 0", "|A| != 0", "Rank A = number of variables", "Rank A = 0"],
        answer: 0,
        explanation: "Non-trivial solutions exist if and only if the coefficient matrix is singular (|A| = 0)[cite: 32]."
    },
    {
        question: "For a non-homogeneous system AX = B, what condition guarantees a unique solution using ranks?",
        options: ["Rank A = Rank A_b = number of variables", "Rank A != Rank A_b", "Rank A = Rank A_b < number of variables", "|A| = 0"],
        answer: 0,
        explanation: "Equal ranks matching the number of unknowns guarantee a unique solution[cite: 34]."
    },
    {
        question: "For a non-homogeneous system AX = B, what condition indicates infinite many solutions?",
        options: ["Rank A = Rank A_b < number of variables", "Rank A != Rank A_b", "Rank A = Rank A_b = variables", "|A| != 0"],
        answer: 0,
        explanation: "Equal ranks less than the number of variables produce free parameters and infinite solutions[cite: 34]."
    },
    {
        question: "For a non-homogeneous system AX = B, what condition indicates an inconsistent system (no solution)?",
        options: ["Rank A != Rank A_b", "Rank A = Rank A_b", "|A| != 0", "Rank A = number of variables"],
        answer: 0,
        explanation: "A mismatch between the rank of coefficient matrix A and augmented matrix A_b means no solution exists[cite: 34]."
    },
    {
        question: "Cramer's rule can be used to solve a system of linear equations only when the coefficient matrix is:",
        options: ["Square and non-singular (|A| != 0)", "Singular (|A| = 0)", "Rectangular", "A null matrix"],
        answer: 0,
        explanation: "Cramer's rule requires division by |A|, necessitating a square non-singular matrix[cite: 36, 37]."
    },
    {
        question: "In Cramer's rule formula for variable x, what replaces the first column of matrix A in the numerator determinant?",
        options: ["The constant vector B", "The zero vector", "The coefficient vector of y", "The adjoint matrix"],
        answer: 0,
        explanation: "Cramer's rule substitutes the constant column into the corresponding variable's position[cite: 37]."
    },
    {
        question: "Which method uses elementary row operations on an augmented matrix [A : B] to solve linear equations?",
        options: ["Gauss elimination / Gauss-Jordan method", "Cramer's rule", "Mathematical induction", "Binomial theorem"],
        answer: 0,
        explanation: "Gaussian and Gauss-Jordan methods use row operations on augmented matrices to solve systems[cite: 34, 35]."
    },
    {
        question: "In cryptography, the sender encodes a message using post-multiplication by a:",
        options: ["Non-singular square matrix (key)", "Singular matrix", "Row matrix of zeros", "Diagonal identity matrix"],
        answer: 0,
        explanation: "Encryption multiplies numerical message chunks by a chosen non-singular coding matrix[cite: 38, 39]."
    },
    {
        question: "The receiver decodes an encrypted message by post-multiplying the coded matrix by the:",
        options: ["Inverse of the encoding matrix", "Encoding matrix itself", "Transpose of the coding matrix", "Null matrix"],
        answer: 0,
        explanation: "Decoding reverses encryption by multiplying with the inverse of the coding key[cite: 39]."
    },
    {
        question: "If a system of linear equations has more variables than equations, it will generally have:",
        options: ["Either no solution or infinitely many solutions", "A unique solution always", "Only the trivial solution", "Always a consistent unique solution"],
        answer: 0,
        explanation: "Fewer equations than variables typically leads to dependent variables and infinite solutions or inconsistency."
    },
    {
        question: "If the augmented matrix of a system yields a row like [0 0 0 : 5], the system is:",
        options: ["Inconsistent (no solution)", "Consistent with unique solution", "Consistent with infinite solutions", "Trivial"],
        answer: 0,
        explanation: "A row representing 0 = 5 is a contradiction, meaning the system has no solution."
    },
    {
        question: "What is the rank of a 3 x 3 identity matrix I_3?",
        options: ["3", "1", "0", "9"],
        answer: 0,
        explanation: "An identity matrix of order 3 has 3 non-zero rows in echelon form, so its rank is 3."
    },
    {
        question: "If A is a non-singular matrix of order 3, then (A^(-1))^(-1) is equal to:",
        options: ["A", "A^(-1)", "I", "-A"],
        answer: 0,
        explanation: "The inverse of an inverse matrix returns the original matrix A."
    },
    {
        question: "Which of the following matrix operations is always associative when conformable?",
        options: ["Matrix multiplication ((AB)C = A(BC))", "Matrix subtraction", "Division of matrices", "Determinant addition"],
        answer: 0,
        explanation: "Matrix multiplication satisfies the associative law: (AB)C = A(BC)."
    },
    {
        question: "If A and B are symmetric matrices of the same order, then A + B is always:",
        options: ["Symmetric", "Skew-symmetric", "Diagonal", "Singular"],
        answer: 0,
        explanation: "(A + B)^t = A^t + B^t = A + B, so the sum of symmetric matrices is symmetric."
    },
    {
        question: "If the determinant of a square matrix A is 0, what can be said about its rows?",
        options: ["The rows are linearly dependent", "The rows are linearly independent", "All rows are orthogonal", "All rows are unit vectors"],
        answer: 0,
        explanation: "A zero determinant implies linear dependence among the rows or columns of the matrix."
    },
    {
        question: "In coordinate geometry applications of matrices, shifting a curve or line is handled via:",
        options: ["Transformation matrices", "Matrix determinants only", "Scalar matrices", "Trace calculations"],
        answer: 0,
        explanation: "Translations and geometric shifts use transformation matrices and coordinate relations[cite: 39, 40]."
    },
    {
        question: "What is the primary purpose of reducing an augmented matrix to reduced row echelon form (Gauss-Jordan)?",
        options: ["To directly read the values of the variables", "To find the determinant", "To make the matrix singular", "To check matrix symmetry"],
        answer: 0,
        explanation: "Reduced row echelon form isolates leading 1s, giving direct solutions to the linear system[cite: 35]."
    },
    {
        question: "If A and B are symmetric matrices of the same order, then AB is symmetric if and only if:",
        options: ["AB = BA", "AB = -BA", "AB = I", "AB = 0"],
        answer: 0,
        explanation: "For the product of two symmetric matrices to be symmetric, they must commute, i.e., AB = BA."
    },
    {
        question: "What is the inverse of an identity matrix I_n?",
        options: ["I_n", "A null matrix", "Negative identity matrix (-I_n)", "Undefined"],
        answer: 0,
        explanation: "An identity matrix multiplied by itself yields the identity matrix, so its inverse is itself."
    },
    {
        question: "If A is a non-singular square matrix of order n, then (adj A) * A is equal to:",
        options: ["|A| * I_n", "|A|^(n-1) * I_n", "I_n", "Zero matrix"],
        answer: 0,
        explanation: "By fundamental matrix properties, (adj A) * A = A * (adj A) = |A| * I_n."
    },
    {
        question: "In Gaussian elimination, the augmented matrix of a linear system is reduced to:",
        options: ["Row echelon form", "Reduced row echelon form", "Diagonal form", "Scalar matrix"],
        answer: 0,
        explanation: "Gaussian elimination reduces the augmented matrix to row echelon form, whereas Gauss-Jordan reduces it to reduced row echelon form[cite: 34, 35]."
    },
    {
        question: "If the determinant of a square matrix A is non-zero, the columns of A are:",
        options: ["Linearly independent", "Linearly dependent", "All zero vectors", "Orthogonal to each other"],
        answer: 0,
        explanation: "A non-zero determinant guarantees that the row and column vectors of the square matrix are linearly independent."
    }
];

console.log("TOTAL UNIT 2 MATHS MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsMaths2",
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

        if (index === Number(question.answer)) {
            button.classList.add("correct");
        }

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
            `You completed all ${questions.length} questions for Mathematics Chapter 2.`;

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