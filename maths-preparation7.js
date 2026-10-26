// 1. Chapter 7 - 80 Pure Math & Conceptual MCQs Data & LocalStorage Initialization
const questions = [
    // --- Section 7.1: Mathematical Induction (1 to 20) ---
    {
        question: "The method of mathematical induction consists of how many primary steps?",
        options: ["1 step", "2 steps", "3 steps", "4 steps"],
        answer: 1,
        explanation: "Mathematical induction involves two main steps: the Basis Step and the Inductive Step."
    },
    {
        question: "In mathematical induction, the statement P(n) is first verified for:",
        options: ["n = 0 or n = 1", "n = k", "n = k + 1", "n = infinity"],
        answer: 0,
        explanation: "The basis step requires verifying the proposition for the initial integer, usually n = 1 or n = 0."
    },
    {
        question: "The sum of the first n positive integers (1 + 2 + 3 + ... + n) is equal to:",
        options: ["n(n+1)/2", "n(n-1)/2", "n(n+1)(2n+1)/6", "n^2(n+1)^2/4"],
        answer: 0,
        explanation: "By mathematical induction, 1 + 2 + ... + n = n(n+1)/2."
    },
    {
        question: "The sum of the squares of the first n natural numbers (1^2 + 2^2 + ... + n^2) is:",
        options: ["n(n+1)/2", "n(n+1)(2n+1)/6", "n^2(n+1)^2/4", "n^2(n+1)/2"],
        answer: 1,
        explanation: "The sum of squares formula is n(n+1)(2n+1)/6."
    },
    {
        question: "The sum of the cubes of the first n natural numbers (1^3 + 2^3 + ... + n^3) is:",
        options: ["n(n+1)/2", "n(n+1)(2n+1)/6", "[n(n+1)/2]^2", "n^3(n+1)^3/8"],
        answer: 2,
        explanation: "The sum of cubes equals the square of the sum of first n integers, i.e., [n(n+1)/2]^2."
    },
    {
        question: "For all positive integers n ≥ 1, the series 1/(1.2) + 1/(2.3) + ... + 1/(n(n+1)) sums to:",
        options: ["n / (n+1)", "1 / (n+1)", "n / (n+2)", "1 / n"],
        answer: 0,
        explanation: "Using partial fractions and induction, the sum evaluates to n/(n+1)."
    },
    {
        question: "In mathematical induction, if P(k) is assumed true, what must be proven next?",
        options: ["P(1) is true", "P(k+1) is true", "P(k-1) is true", "P(2k) is true"],
        answer: 1,
        explanation: "The inductive step requires proving that P(k+1) is true whenever P(k) is true."
    },
    {
        question: "Which of the following expressions is always divisible by 3 for all integers n ≥ 1?",
        options: ["n^3 + 2n", "n^2 + n", "n^3 + n", "n^2 + 2n"],
        answer: 0,
        explanation: "By mathematical induction, n^3 + 2n is always divisible by 3."
    },
    {
        question: "For all positive integers n ≥ 1, 7^n - 2^n is always divisible by:",
        options: ["3", "5", "7", "9"],
        answer: 1,
        explanation: "7^n - 2^n can be proven via induction to be divisible by 7 - 2 = 5."
    },
    {
        question: "For all positive integers n ≥ 0, 4^n + 15n - 1 is always divisible by:",
        options: ["5", "7", "9", "11"],
        answer: 2,
        explanation: "Mathematical induction proves that 4^n + 15n - 1 is divisible by 9."
    },
    {
        question: "For which values of n is the inequality 2^n < (n+1)! valid?",
        options: ["n ≥ 1", "n ≥ 2", "n ≥ 3", "n ≥ 4"],
        answer: 1,
        explanation: "The inequality 2^n < (n+1)! holds true for all integers n ≥ 2."
    },
    {
        question: "For which values of n is the inequality n! > n^2 valid?",
        options: ["n ≥ 2", "n ≥ 3", "n ≥ 4", "n ≥ 5"],
        answer: 2,
        explanation: "For n = 4, 4! = 24 > 16 (4^2). Thus, it holds for n ≥ 4."
    },
    {
        question: "The sum of binomial coefficients C(n,0) + C(n,1) + C(n,2) + ... + C(n,n) is equal to:",
        options: ["2^n", "2^(n-1)", "n^2", "n!"],
        answer: 0,
        explanation: "The sum of all binomial coefficients for a given index n is 2^n."
    },
    {
        question: "The sum of odd-indexed binomial coefficients in expansion of (a+b)^n is:",
        options: ["2^n", "2^(n-1)", "2^(n+1)", "0"],
        answer: 1,
        explanation: "The sum of odd binomial coefficients equals the sum of even binomial coefficients, which is 2^(n-1)."
    },
    {
        question: "The sum C(n,0) + 1/2 C(n,1) + 1/3 C(n,2) + ... + 1/(n+1) C(n,n) is equal to:",
        options: ["(2^(n+1) - 1) / (n+1)", "2^n / n", "(2^n - 1) / n", "2^(n+1) / (n+1)"],
        answer: 0,
        explanation: "This is a standard summation identity proved via induction: (2^(n+1) - 1)/(n+1)."
    },
    {
        question: "For what values of n does the inequality n^3 > 2n + 1 hold true?",
        options: ["n ≥ 1", "n ≥ 2", "n ≥ 3", "n ≥ 4"],
        answer: 1,
        explanation: "Checking for n = 2 gives 8 > 5, which is true, and holds for all n ≥ 2."
    },
    {
        question: "If P(n) is a statement about integers such that P(k) true implies P(k+1) true, and P(1) is true, then P(n) is true for:",
        options: ["All real n", "All integers n ≥ 1", "All even integers", "All positive rational numbers"],
        answer: 1,
        explanation: "This is the core definition of the Principle of Mathematical Induction for n ≥ 1."
    },
    {
        question: "The expression 6 is always a factor of which of the following for n ≥ 1?",
        options: ["n(n^2 - 1)", "n(n^2 + 5)", "n^3 - n", "Both a and b"],
        answer: 3,
        explanation: "Both n(n^2 - 1) and n(n^2 + 5) are divisible by 6 for all integers n ≥ 1."
    },
    {
        question: "Which inequality is used as a base property in Bernoulli's inequality for n ≥ 0?",
        options: ["1 + nh ≤ (1 + h)^n", "1 + nh ≥ (1 + h)^n", "1 - nh < (1 + h)^n", "None"],
        answer: 0,
        explanation: "Bernoulli's inequality states that for h > -1, 1 + nh ≤ (1 + h)^n for n ≥ 0."
    },
    {
        question: "The basis step for a statement starting with integer n ≥ 3 must be checked at:",
        options: ["n = 0", "n = 1", "n = 2", "n = 3"],
        answer: 3,
        explanation: "When a statement specifies n ≥ 3, the basis step must begin at n = 3."
    },

    // --- Section 7.2: Binomial Theorem & Expansions (21 to 50) -->
    {
        question: "The word 'binomial' means an algebraic expression consisting of how many terms?",
        options: ["1 term", "2 terms", "3 terms", "Any number of terms"],
        answer: 1,
        explanation: "'Bi' means two, so a binomial consists of two terms (e.g., a + b)."
    },
    {
        question: "The number of terms in the expansion of (a + b)^n when n is a positive integer is:",
        options: ["n", "n - 1", "n + 1", "2n"],
        answer: 2,
        explanation: "The expansion of (a + b)^n always contains exactly n + 1 terms."
    },
    {
        question: "In the expansion of (a + b)^n, the sum of the exponents of a and b in every term is:",
        options: ["n - 1", "n", "n + 1", "2n"],
        answer: 1,
        explanation: "Each term in the expansion of (a + b)^n has degree n (sum of exponents of a and b equals n)."
    },
    {
        question: "The general term (or (r+1)^th term) in the expansion of (a + b)^n is given by:",
        options: ["C(n,r) a^r b^(n-r)", "C(n,r) a^(n-r) b^r", "C(n,r-1) a^(n-r) b^r", "C(n,r) a^n b^r"],
        answer: 1,
        explanation: "The formula for the general term is T_(r+1) = C(n,r) a^(n-r) b^r."
    },
    {
        question: "If n is an even positive integer, the number of terms in (a + b)^n is odd, and the middle term is:",
        options: ["(n/2)^th term", "((n+2)/2)^th term", "((n+1)/2)^th term", "((n+3)/2)^th term"],
        answer: 1,
        explanation: "When n is even, there is a single middle term given by (n/2 + 1)^th term, i.e., ((n+2)/2)^th term."
    },
    {
        question: "If n is an odd positive integer, how many middle terms are there in the expansion of (a + b)^n?",
        options: ["1 middle term", "2 middle terms", "3 middle terms", "No middle term"],
        answer: 1,
        explanation: "When n is odd, there are two middle terms: ((n+1)/2)^th and ((n+3)/2)^th terms."
    },
    {
        question: "Coefficients of terms equidistant from the beginning and the end of a binomial expansion are:",
        options: ["Different", "Equal", "Reciprocals", "Additive inverses"],
        answer: 1,
        explanation: "Binomial coefficients possess symmetry, meaning C(n,r) = C(n, n-r)."
    },
    {
        question: "The term independent of x (constant term) in a binomial expansion occurs where the exponent of x is:",
        options: ["1", "-1", "0", "n"],
        answer: 2,
        explanation: "A term is independent of x if the net power of x in that term evaluates to 0."
    },
    {
        question: "A term which is at the r^th position from the end in the expansion of (a + b)^n is at which position from the beginning?",
        options: ["(n - r)^th", "(n - r + 1)^th", "(n + 2 - r)^th", "(n + 1 - r)^th"],
        answer: 2,
        explanation: "The r^th term from the end corresponds to the (n + 2 - r)^th term from the beginning."
    },
    {
        question: "The coefficients in Pascal's triangle for row n correspond directly to:",
        options: ["Combinations C(n,r)", "Permutations P(n,r)", "Factorials n!", "Fibonacci numbers"],
        answer: 0,
        explanation: "The entries in Pascal's triangle are precisely the binomial coefficients C(n,r)."
    },
    {
        question: "What is the sum of all coefficients in the expansion of (a + b)^n?",
        options: ["0", "1", "2^n", "n^2"],
        answer: 2,
        explanation: "Putting a = 1 and b = 1 gives the sum of all coefficients as (1+1)^n = 2^n."
    },
    {
        question: "The greatest coefficient in the expansion of (1 + x)^2m (where 2m is even) is:",
        options: ["C(2m, m-1)", "C(2m, m)", "C(2m, m+1)", "C(2m, 2m)"],
        answer: 1,
        explanation: "The middle term coefficient C(2m, m) is always the greatest binomial coefficient."
    },
    {
        question: "If the coefficients of three consecutive terms in (1 + x)^n are in the ratio 6 : 33 : 110, then n is equal to:",
        options: ["10", "11", "12", "15"],
        answer: 1,
        explanation: "Solving ratio equations for consecutive binomial coefficients yields n = 11."
    },
    {
        question: "The identity C(n, r) + C(n, r-1) is equal to:",
        options: ["C(n+1, r)", "C(n, r+1)", "C(n+1, r+1)", "C(n-1, r)"],
        answer: 0,
        explanation: "This is Pascal's identity for combinations: C(n,r) + C(n,r-1) = C(n+1, r)."
    },
    {
        question: "The value of C(n, 0) is always equal to:",
        options: ["0", "1", "n", "Undefined"],
        answer: 1,
        explanation: "Choosing 0 items out of n can be done in exactly 1 way, so C(n,0) = 1."
    },
    {
        question: "The value of C(n, n) is always equal to:",
        options: ["0", "1", "n", "n!"],
        answer: 1,
        explanation: "Choosing all n items can be done in 1 way, so C(n,n) = 1."
    },
    {
        question: "The complementary property of combinations states that C(n, r) equals:",
        options: ["C(n, n-r)", "C(n-1, r)", "C(n, r-1)", "C(n+1, r)"],
        answer: 0,
        explanation: "C(n,r) = C(n, n-r) due to symmetry."
    },
    {
        question: "If C(n, p) = C(n, q), then:",
        options: ["p = q always", "p + q = n always", "p = q or p + q = n", "p = n - q only"],
        answer: 2,
        explanation: "Equality of combinations implies either p = q or their sum equals the upper index n (p + q = n)."
    },
    {
        question: "In the binomial expansion of (x - y)^n, the signs of the terms are:",
        options: ["All positive", "All negative", "Alternating positive and negative", "Depends on x"],
        answer: 2,
        explanation: "Due to (-y)^r, the signs alternate between positive and negative."
    },
    {
        question: "Which of the following numbers is larger according to binomial estimates: (1.1)^10000 or 1000?",
        options: ["1000", "(1.1)^10000", "Both are equal", "Cannot be determined"],
        answer: 1,
        explanation: "Using binomial expansion, (1 + 0.1)^10000 evaluates to a number vastly larger than 1000."
    },
    {
        question: "The last digit (unit digit) of numbers like 7^n or 3^n follows a repeating cycle of length:",
        options: ["2", "3", "4", "5"],
        answer: 2,
        explanation: "The cyclicity of unit digits for bases 3, 7, and 8 is 4."
    },
    {
        question: "When a number is divided by another, the numerator of the resulting fractional remainder part represents:",
        options: ["The quotient", "The remainder", "The divisor", "The coefficient"],
        answer: 1,
        explanation: "In fraction form a/b = quotient + remainder/divisor, the numerator of the fraction part is the remainder."
    },
    {
        question: "Which number is greater: 101^50 or 100^50 + 99^50?",
        options: ["100^50 + 99^50", "101^50", "Both are equal", "Depends on power"],
        answer: 1,
        explanation: "Binomial difference expansions prove that 101^50 > 100^50 + 99^50."
    },
    {
        question: "The expression a^n - b^n is always divisible by (a - b) for:",
        options: ["Only even n", "Only odd n", "Any positive integer n", "Only prime n"],
        answer: 2,
        explanation: "By algebraic factors and binomial properties, a - b is a factor of a^n - b^n for all positive integers n."
    },
    {
        question: "The sum of coefficients of the first three terms in the expansion of (a - 3/a^2)^n is 559. This helps determine:",
        options: ["Only n", "Only a", "Both n and a", "The middle term directly"],
        answer: 0,
        explanation: "Equating 1 - 3n + 9n(n-1)/2 = 559 allows finding the index n."
    },
    {
        question: "If the coefficients of the 2nd, 3rd, and 4th terms in (1 + x)^2m are in A.P., then m satisfies:",
        options: ["2m^2 - 9m + 7 = 0", "m^2 - 5m + 6 = 0", "m^2 - 3m + 2 = 0", "2m^2 + 3m - 5 = 0"],
        answer: 0,
        explanation: "Using arithmetic progression condition on coefficients yields 2m^2 - 9m + 7 = 0."
    },
    {
        question: "The term independent of x in the expansion of (x^2 + 1/x)^12 is found by setting the exponent of x equal to:",
        options: ["0", "1", "12", "6"],
        answer: 0,
        explanation: "For any constant term independent of x, the total combined power of x must equal 0."
    },
    {
        question: "Pascal's triangle and binomial theorem are widely applied in real-world problems such as:",
        options: ["Cryptography", "Calculating tournament matches", "DNA sequence structures", "All of the above"],
        answer: 3,
        explanation: "Binomial expansions and Pascal structures apply across cryptography, tournament scheduling, and genetics."
    },
    {
        question: "If 7 coins are tossed simultaneously, the number of ways to get exactly 5 heads is given by:",
        options: ["C(7,5)", "P(7,5)", "2^7", "5^7"],
        answer: 0,
        explanation: "Combinations C(7,5) give the exact number of ways 5 heads can appear among 7 tossed coins."
    },
    {
        question: "When 6 coins are tossed simultaneously, the coefficient representing 3 heads in Pascal's triangle row is:",
        options: ["15", "20", "6", "10"],
        answer: 1,
        explanation: "For n = 6, the 4th coefficient (3 heads) is C(6,3) = 20."
    },

    // --- Section 7.3: Binomial Series (Negative/Fractional Indices) (51 to 75) ---
    {
        question: "When the index n of (1 + x)^n is a positive integer, the binomial series is:",
        options: ["Terminating (finite)", "Non-terminating (infinite)", "Divergent everywhere", "Periodic"],
        answer: 0,
        explanation: "When n is a positive integer, the series terminates after n+1 terms."
    },
    {
        question: "When n is a negative integer or a fraction, the binomial expansion of (1 + x)^n is:",
        options: ["Terminating", "Non-terminating (infinite)", "Zero", "Undefined"],
        answer: 1,
        explanation: "For non-positive integer indices, the series continues infinitely (non-terminating)."
    },
    {
        question: "The binomial series expansion for (1 + x)^n is convergent if and only if:",
        options: ["|x| > 1", "|x| < 1", "x = 1", "x > 0"],
        answer: 1,
        explanation: "The infinite binomial series converges strictly when -1 < x < 1, i.e., |x| < 1."
    },
    {
        question: "The general term T_(r+1) in the infinite binomial series of (1 + x)^n is given by:",
        options: ["C(n,r) x^r", "[n(n-1)...(n-r+1) / r!] x^r", "n^r x^r / r!", "(n! / r!) x^r"],
        answer: 1,
        explanation: "For fractional/negative indices, T_(r+1) = [n(n-1)...(n-r+1) / r!] x^r."
    },
    {
        question: "What is the expansion of (1 - x)^(-1) up to three terms?",
        options: ["1 - x + x^2", "1 + x + x^2", "1 - x - x^2", "1 + 2x + 3x^2"],
        answer: 1,
        explanation: "Using formula with n = -1: 1 + (-1)(-x) + (-1)(-2)/2! (-x)^2 = 1 + x + x^2."
    },
    {
        question: "What is the expansion of (1 + x)^(-2) up to three terms?",
        options: ["1 - 2x + 3x^2", "1 + 2x + 3x^2", "1 - x + x^2", "1 + x + 2x^2"],
        answer: 0,
        explanation: "With n = -2: 1 + (-2)x + (-2)(-3)/2! x^2 = 1 - 2x + 3x^2."
    },
    {
        question: "When approximating values like (1.03)^(1/3) using binomial series, x is chosen such that:",
        options: ["x is very large", "x is very small (|x| < 1)", "x equals 0", "x equals 1"],
        answer: 1,
        explanation: "Approximations rely on expressing numbers as (1 + x)^n where x is a small fraction."
    },
    {
        question: "If x is so small that its square and higher powers may be neglected, then (1 + x)^n is approximately equal to:",
        options: ["1 + nx", "1 - nx", "nx", "1 + n^2 x"],
        answer: 0,
        explanation: "Linear approximation (neglecting x^2 and above) gives 1 + nx."
    },
    {
        question: "In the expansion of (1 - x)^(-3), the coefficient of x^2 is:",
        options: ["3", "6", "9", "12"],
        answer: 1,
        explanation: "Using n = -3 formula for coefficient of x^2: [(-3)(-4)/2!] = 6."
    },
    {
        question: "Which of the following conditions ensures that a binomial series has a finite sum?",
        options: ["Divergence", "Convergence", "Oscillation", "Terminative property"],
        answer: 1,
        explanation: "Convergence means the infinite series has a well-defined finite sum."
    },
    {
        question: "The expansion of (1 - x)^(-1/2) has terms where each successive coefficient is:",
        options: ["Always negative", "Always positive", "Alternating", "Zero"],
        answer: 1,
        explanation: "With negative fractional index and negative sign inside, terms evaluate positively."
    },
    {
        question: "When approximating sqrt(65) as (64 + 1)^(1/2), it can be rewritten in binomial form as:",
        options: ["8(1 + 1/64)^(1/2)", "64(1 + 1/8)^(1/2)", "8(1 + 1/8)^(1/2)", "(1 + 64)^(1/2)"],
        answer: 0,
        explanation: "8 * (1 + 1/64)^(1/2) allows applying the binomial series with x = 1/64 < 1."
    },
    {
        question: "If x is so large that (1/x)^2 and higher powers are neglected, the expansion uses powers of:",
        options: ["x", "1/x", "x^2", "1/x^2"],
        answer: 1,
        explanation: "For very large x, expressions are manipulated in terms of 1/x to neglect small terms."
    },
    {
        question: "The series 1 - 3/7 + 4(3/7)^2 - 8(3/7)^3 + ... can be identified and summed using:",
        options: ["Arithmetic progression", "Geometric series / Binomial series form", "Taylor's theorem only", "Integration"],
        answer: 1,
        explanation: "Such series map directly to recognizable binomial series expansions."
    },
    {
        question: "If y = 3/(2^2 * 1!) + 3/(2^4 * 2!) + 3/(2^6 * 3!) + ..., it satisfies the quadratic relation:",
        options: ["8y^2 + 16y - 19 = 0", "y^2 - 2y - 2 = 0", "2y^2 + y - 1 = 0", "y^2 + y - 1 = 0"],
        answer: 0,
        explanation: "Summation via exponential/binomial forms yields 8y^2 + 16y - 19 = 0."
    },
    {
        question: "For the binomial series (2 + 3x)^(-1/2), the series is convergent when:",
        options: ["|x| < 1", "|x| < 2/3", "|x| < 3/2", "|x| ≤ 1"],
        answer: 1,
        explanation: "Rewriting as 2^(-1/2) (1 + 3/2 x)^(-1/2), convergence requires |3/2 x| < 1, i.e., |x| < 2/3."
    },
    {
        question: "If p and q are approximately equal, the approximation (q + 2p)/(p + 2q) evaluates approximately to:",
        options: ["(p/q)^(1/3)", "(p/q)", "1", "p/q^2"],
        answer: 0,
        explanation: "Using binomial approximation techniques for near-equal numbers yields (p/q)^(1/3)."
    },
    {
        question: "In the expansion of (1 + x + x^2 + ...)^(-n), the coefficients follow patterns related to:",
        options: ["Binomial coefficients", "Multinomial / negative binomial series", "Arithmetic means", "Prime numbers"],
        answer: 1,
        explanation: "Exponents of reciprocal polynomial powers connect to negative binomial series structures."
    },
    {
        question: "What is the third term in the expansion of (1 + x)^p when expanded as a binomial series?",
        options: ["px", "p(p-1)/2! x^2", "p(p-1)(p-2)/3! x^3", "x^2"],
        answer: 1,
        explanation: "First term is 1, second is px, and third is [p(p-1)/2!] x^2."
    },
    {
        question: "If the third term in the expansion of (1 + x)^p is -1/8 x^2, what is the value of p?",
        options: ["1/2", "-1/2", "1/4", "-1/4"],
        answer: 1,
        explanation: "Setting p(p-1)/2 = -1/8 gives p = -1/2."
    },
    {
        question: "When higher powers like x^3 and above are neglected, the approximation is accurate up to:",
        options: ["Linear terms only", "Quadratic terms (x^2)", "Cubic terms", "Constant term only"],
        answer: 1,
        explanation: "Neglecting cubic and higher powers means terms up to x^2 are retained (quadratic accuracy)."
    },
    {
        question: "The expansion of (3 + 2/x)^(-1/3) requires the magnitude of term to satisfy which condition for convergence?",
        options: ["|2/3x| < 1", "|3x/2| < 1", "|x| < 1", "|x| > 1"],
        answer: 0,
        explanation: "Expressed as 3^(-1/3) (1 + 2/(3x))^(-1/3), convergence requires |2/(3x)| < 1."
    },
    {
        question: "Which of the following represents a non-terminating binomial expansion?",
        options: ["(1 + x)^5", "(a + b)^10", "(1 + x)^(-3)", "(2x + y)^2"],
        answer: 2,
        explanation: "Negative or fractional indices like -3 generate infinite non-terminating binomial series."
    },
    {
        question: "In approximation problems where x is extremely small, terms containing x^2, x^3, etc. are:",
        options: ["Added together", "Ignored / neglected", "Multiplied by n", "Equated to 1"],
        answer: 1,
        explanation: "Small-value approximations neglect higher powers because their numerical contribution is negligible."
    },
    {
        question: "The binomial series expansion is a powerful tool in calculus primarily because it allows:",
        options: ["Converting complex functions into polynomial series", "Finding exact roots instantly without numbers", "Eliminating variables", "Solving matrices"],
        answer: 0,
        explanation: "Binomial series enable expressing complicated radical or rational functions as manageable polynomial series."
    },

    // --- Section 7.4: Review & Advanced Conceptual MCQs (76 to 80) ---
    {
        question: "Mathematical induction is strictly used to validate propositions for which domain of numbers?",
        options: ["Real numbers", "Complex numbers", "Positive integers (or integers ≥ k)", "Irrational numbers"],
        answer: 2,
        explanation: "Induction relies on the discrete well-ordered property of positive integers."
    },
    {
        question: "In the expansion of (a + b)^20, if a term is at the 11th position from the beginning, its position from the end is:",
        options: ["9th", "10th", "11th", "12th"],
        answer: 1,
        explanation: "Using formula (n + 2 - r) = 20 + 2 - 11 = 11th from start, meaning from end it is 10th position."
    },
    {
        question: "The coefficient of the 3rd last term in the expansion of (1 + x)^300 is equal to:",
        options: ["C(300, 2)", "C(300, 3)", "C(300, 297)", "C(300, 300)"],
        answer: 0,
        explanation: "The 3rd last term corresponds to r = 297 from beginning, which equals C(300, 2) by symmetry."
    },
    {
        question: "The sum C(11,0) + C(11,2) + C(11,4) + ... + C(11,10) is equal to:",
        options: ["2^11", "2^10", "2^12", "2^11 - 1"],
        answer: 1,
        explanation: "The sum of even (or odd) binomial coefficients is half of the total sum, i.e., 2^11 / 2 = 2^10."
    },
    {
        question: "If C(22, r) is the largest coefficient in the expansion of (1 + x)^22, then the value of C(13, r) is:",
        options: ["78", "286", "715", "1"],
        answer: 0,
        explanation: "The largest coefficient for n = 22 occurs at the middle where r = 11. Then C(13, 11) = C(13,2) = 78."
    }
];

// Chapter 7 - Preparation Page Controller Logic
console.log("TOTAL CHAPTER 7 MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsMaths7",
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
                    `You completed all ${questions.length} questions for Mathematics Chapter 7.`;
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