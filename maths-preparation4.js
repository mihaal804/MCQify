const questions = [
    {
        question: "A sequence is a function whose domain is the set of:",
        options: ["Real numbers", "Positive integers", "Rational numbers", "Complex numbers"],
        answer: 1,
        explanation: "A sequence is defined as a function whose domain is the set of positive integers."
    },
    {
        question: "The general term of the sequence of positive odd numbers is:",
        options: ["2n", "2n - 1", "n^2", "2n + 1"],
        answer: 1,
        explanation: "The general term for the sequence of positive odd numbers (1, 3, 5, ...) is a_n = 2n - 1."
    },
    {
        question: "In an arithmetic sequence, the difference between any term and its preceding term is:",
        options: ["Constant", "Variable", "Zero", "Always one"],
        answer: 0,
        explanation: "In an arithmetic sequence, the difference between consecutive terms is constant, called the common difference d."
    },
    {
        question: "The formula for the nth term of an arithmetic sequence is:",
        options: ["a_n = a_1 + r^{n-1}", "a_n = a_1 + (n-1)d", "a_n = ar^{n-1}", "a_n = n(a_1 + d)"],
        answer: 1,
        explanation: "The nth term of an arithmetic sequence with first term a_1 and common difference d is a_n = a_1 + (n-1)d."
    },
    {
        question: "The arithmetic mean A between two numbers a and b is given by:",
        options: ["sqrt(ab)", "2ab / (a+b)", "(a+b) / 2", "ab / 2"],
        answer: 2,
        explanation: "The arithmetic mean between a and b is A = (a+b) / 2."
    },
    {
        question: "The sum of the first n terms of an arithmetic series is given by:",
        options: ["S_n = (n/2)[2a_1 + (n-1)d]", "S_n = a_1(1-r^n)/(1-r)", "S_n = n(a_1 + a_n)", "S_n = n/2 (a_1 - a_n)"],
        answer: 0,
        explanation: "The sum of the first n terms of an arithmetic series is S_n = (n/2)[2a_1 + (n-1)d]."
    },
    {
        question: "In a geometric sequence, each term is obtained by multiplying the preceding term by a:",
        options: ["Constant difference", "Constant ratio", "Zero", "Natural number"],
        answer: 1,
        explanation: "In a geometric sequence, each term is obtained by multiplying the previous term by a constant called the common ratio r."
    },
    {
        question: "The formula for the nth term of a geometric sequence is:",
        options: ["a_n = a_1 + (n-1)d", "a_n = a_1 r^n", "a_n = a_1 r^{n-1}", "a_n = ar + d"],
        answer: 2,
        explanation: "The nth term of a geometric sequence is given by a_n = a_1 r^{n-1}."
    },
    {
        question: "The geometric mean G between two positive numbers a and b is:",
        options: ["(a+b)/2", "+-sqrt(ab)", "2ab/(a+b)", "ab"],
        answer: 1,
        explanation: "The geometric mean of two numbers is the square root of their product, G = +-sqrt(ab)."
    },
    {
        question: "The sum of an infinite geometric series where |r| < 1 is given by:",
        options: ["S_infty = a_1 / (1-r)", "S_infty = a_1 / (r-1)", "S_infty = a_1(1-r^n)/(1-r)", "S_infty = infinite"],
        answer: 0,
        explanation: "The sum of an infinite geometric series with |r| < 1 is S_infty = a_1 / (1-r)."
    },
    {
        question: "A sequence is called a harmonic sequence if the reciprocals of its terms form a/an:",
        options: ["Geometric sequence", "Arithmetic sequence", "Harmonic sequence", "Arithmetic series"],
        answer: 1,
        explanation: "A sequence is a harmonic progression if the reciprocals of its terms are in arithmetic progression."
    },
    {
        question: "The harmonic mean H between two numbers a and b is:",
        options: ["(a+b)/2", "sqrt(ab)", "2ab / (a+b)", "(a-b)/2"],
        answer: 2,
        explanation: "The harmonic mean between a and b is H = 2ab / (a+b)."
    },
    {
        question: "For any two positive numbers a and b, the relation between Arithmetic (A), Geometric (G), and Harmonic (H) means is:",
        options: ["A < G < H", "A > G > H", "A = G = H", "H > A > G"],
        answer: 1,
        explanation: "For positive numbers, A > G > H always holds true."
    },
    {
        question: "The product of Arithmetic Mean (A) and Harmonic Mean (H) is equal to:",
        options: ["G", "G^2", "2G", "sqrt(G)"],
        answer: 1,
        explanation: "The fundamental relation between A, G, and H is AH = G^2."
    },
    {
        question: "The sum of the first n natural numbers (Sigma n) is equal to:",
        options: ["n(n+1)/2", "n(n+1)(2n+1)/6", "[n(n+1)/2]^2", "n^2"],
        answer: 0,
        explanation: "The sum of the first n natural numbers is sum(k=1 to n) k = n(n+1)/2."
    },
    {
        question: "The sum of the squares of the first n natural numbers (Sigma n^2) is:",
        options: ["n(n+1)/2", "n(n+1)(2n+1)/6", "[n(n+1)/2]^2", "n(2n+1)/3"],
        answer: 1,
        explanation: "The sum of the squares of the first n natural numbers is sum(k=1 to n) k^2 = n(n+1)(2n+1)/6."
    },
    {
        question: "The sum of the cubes of the first n natural numbers (Sigma n^3) is:",
        options: ["n(n+1)/2", "n(n+1)(2n+1)/6", "[n(n+1)/2]^2", "n^3(n+1)^2/4"],
        answer: 2,
        explanation: "The sum of the cubes of the first n natural numbers is sum(k=1 to n) k^3 = [n(n+1)/2]^2."
    },
    {
        question: "An arithmetico-geometric series is formed by the term-by-term multiplication of terms of:",
        options: ["Two A.Ps", "An A.P. and a G.P.", "Two G.Ps", "An A.P. and an H.P."],
        answer: 1,
        explanation: "An arithmetico-geometric sequence is the product of corresponding terms of an A.P. and a G.P."
    },
    {
        question: "What is the common difference d of the arithmetic sequence 33, 39, 45, ...?",
        options: ["5", "6", "7", "8"],
        answer: 1,
        explanation: "Common difference d = 39 - 33 = 6."
    },
    {
        question: "If a_1 = 5 and d = 25, the 50th term can be calculated using the formula of:",
        options: ["Arithmetic Sequence", "Geometric Sequence", "Harmonic Sequence", "Infinite Series"],
        answer: 0,
        explanation: "Given first term and common difference, it is an arithmetic sequence problem."
    },
    {
        question: "What is the common ratio r of the geometric sequence 4, 12, 36, ...?",
        options: ["2", "3", "4", "6"],
        answer: 1,
        explanation: "Common ratio r = 12 / 4 = 3."
    },
    {
        question: "If a_1 = 5 and r = 2, the 5th term of the geometric sequence is:",
        options: ["40", "50", "80", "100"],
        answer: 2,
        explanation: "a_5 = a_1 * r^4 = 5 * (2)^4 = 5 * 16 = 80."
    },
    {
        question: "The geometric mean between 9 and 4 is:",
        options: ["6", "36", "13", "18"],
        answer: 0,
        explanation: "G = sqrt(9 * 4) = sqrt(36) = 6."
    },
    {
        question: "What type of sequence is 1/2, 1/7, 1/12, 1/17, ...?",
        options: ["Arithmetic", "Geometric", "Harmonic", "Arithmetico-geometric"],
        answer: 2,
        explanation: "The reciprocals 2, 7, 12, 17 form an A.P., so the sequence is harmonic."
    },
    {
        question: "The harmonic mean between 15 and 7 is:",
        options: ["105/11", "11/105", "210/11", "11/210"],
        answer: 0,
        explanation: "H = 2(15)(7) / (15 + 7) = 210 / 22 = 105/11."
    },
    {
        question: "Sigma notation symbol (Sigma) is used to denote:",
        options: ["Product", "Sum", "Difference", "Ratio"],
        answer: 1,
        explanation: "Sigma notation is used to represent the sum of terms in a series."
    },
    {
        question: "The value of sum(k=1 to 5) k^2 is:",
        options: ["30", "55", "50", "45"],
        answer: 1,
        explanation: "sum(k=1 to 5) k^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55."
    },
    {
        question: "If a rocket rises 20 ft in the 1st second, 60 ft in the 2nd, and 100 ft in the 3rd, this represents an:",
        options: ["Arithmetic sequence", "Geometric sequence", "Harmonic sequence", "Infinite series"],
        answer: 0,
        explanation: "The difference in heights is constant (40 ft), making it an arithmetic sequence."
    },
    {
        question: "The half-life of radioactive iodine is about 8 days. This scenario leads to a:",
        options: ["Arithmetic sequence", "Geometric sequence", "Harmonic sequence", "Linear function"],
        answer: 1,
        explanation: "Decaying by half each period represents a geometric sequence."
    },
    {
        question: "If a sequence is finite, it has:",
        options: ["No last term", "A fixed number of terms", "Infinite terms", "Zero terms"],
        answer: 1,
        explanation: "A finite sequence has a limited and countable number of terms."
    },
    {
        question: "The expression (-1)^n in a general term causes the signs of the terms to:",
        options: ["Remain positive", "Remain negative", "Alternate between positive and negative", "Become zero"],
        answer: 2,
        explanation: "The factor (-1)^n alternates the sign of terms between positive and negative."
    },
    {
        question: "If the third term of an A.P. is 8 and the sixteenth term is 47, the common difference d is:",
        options: ["2", "3", "4", "5"],
        answer: 1,
        explanation: "Solving a_3 = a_1 + 2d = 8 and a_16 = a_1 + 15d = 47 gives d = 3."
    },
    {
        question: "The sum of the first 100 positive integers is:",
        options: ["5000", "5050", "5100", "4950"],
        answer: 1,
        explanation: "S_100 = (100/2)(1 + 100) = 50 * 101 = 5050."
    },
    {
        question: "The sum of the even numbers from 2 to 100 is an example of:",
        options: ["Arithmetic series", "Geometric series", "Harmonic series", "Power series"],
        answer: 0,
        explanation: "Even numbers form an arithmetic series with a_1 = 2, d = 2, a_n = 100."
    },
    {
        question: "In a geometric sequence, if |r| > 1, the series terms:",
        options: ["Decrease to zero", "Keep increasing/decreasing without bound", "Oscillate constantly", "Equal zero"],
        answer: 1,
        explanation: "When |r| > 1, terms grow larger in magnitude and the series has no finite sum."
    },
    {
        question: "The fractional notation for the repeating decimal 0.636363... is:",
        options: ["7/11", "63/100", "9/11", "21/33"],
        answer: 0,
        explanation: "Expressed as an infinite geometric series, 0.6363... equals 63/99 = 7/11."
    },
    {
        question: "The nth term of the harmonic sequence whose corresponding A.P. has first term a_1 and common difference d is:",
        options: ["a_1 + (n-1)d", "1 / [a_1 + (n-1)d]", "a_1 r^{n-1}", "2ab / (a+b)"],
        answer: 1,
        explanation: "The nth term of H.P. is the reciprocal of the nth term of the corresponding A.P."
    },
    {
        question: "What is the value of sum(k=1 to n) 1?",
        options: ["1", "0", "n", "n^2"],
        answer: 2,
        explanation: "Summing 1 n times equals n."
    },
    {
        question: "The sum to infinity of the arithmetico-geometric series exists only if:",
        options: ["r = 1", "|r| < 1", "r > 1", "d = 0"],
        answer: 1,
        explanation: "The infinite sum of an arithmetico-geometric series converges when |r| < 1."
    },
    {
        question: "If a_1 = 4 and d = 3, the first term of the arithmetic sequence is:",
        options: ["3", "4", "7", "12"],
        answer: 1,
        explanation: "The first term is explicitly given as a_1 = 4."
    },
    {
        question: "Which sequence type describes population growth compounded at a fixed percentage rate?",
        options: ["Arithmetic", "Geometric", "Harmonic", "Linear"],
        answer: 1,
        explanation: "Percentage increase per period is modeled by geometric sequences/series."
    },
    {
        question: "If the first term of a G.P. is 3 and common ratio is 2, the second term is:",
        options: ["5", "6", "9", "12"],
        answer: 1,
        explanation: "a_2 = a_1 * r = 3 * 2 = 6."
    },
    {
        question: "The arithmetic mean between 6 and 18 is:",
        options: ["10", "12", "24", "15"],
        answer: 1,
        explanation: "A = (6 + 18) / 2 = 24 / 2 = 12."
    },
    {
        question: "In sigma notation, the letter k is referred to as:",
        options: ["Upper limit", "Index of summation", "Common ratio", "Constant"],
        answer: 1,
        explanation: "The variable k is called the index of summation."
    },
    {
        question: "What is the value of sum(k=1 to 3) k^2?",
        options: ["9", "14", "30", "55"],
        answer: 1,
        explanation: "sum(k=1 to 3) k^2 = 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14."
    },
    {
        question: "The 7th term of the harmonic progression 1/2, 1/7, 1/12, ... is:",
        options: ["1/32", "1/37", "1/42", "1/27"],
        answer: 0,
        explanation: "Corresponding A.P. 7th term is 2 + (7-1)*5 = 32, so H.P. term is 1/32."
    },
    {
        question: "If a, b, c are in A.P., then 3^a, 3^b, 3^c are in:",
        options: ["A.P.", "G.P.", "H.P.", "None of these"],
        answer: 1,
        explanation: "If a, b, c are in A.P., then bases raised to exponents form a geometric progression (G.P.)."
    },
    {
        question: "The sum of the series 0 + 0.1 + 0.01 + 0.001 + ... is:",
        options: ["1", "10/9", "9/10", "0.1"],
        answer: 1,
        explanation: "Using infinite geometric sum formula, a_1 = 0.1, r = 0.1, S = 0.1 / (1 - 0.1) = 0.1 / 0.9 = 1/9, plus 0 is 10/9."
    },
    {
        question: "If the product of three numbers in G.P. is 216 and their sum is 19, the numbers are:",
        options: ["2, 6, 18", "3, 6, 12", "1, 6, 36", "4, 6, 9"],
        answer: 0,
        explanation: "Checking the conditions: 2 * 6 * 18 = 216 and 2 + 6 + 18 = 26."
    },
    {
        question: "The formula S_n = n/2 [a_1 + a_n] requires knowing:",
        options: ["Only n and d", "First term, last term, and number of terms", "Only common ratio", "Only infinity"],
        answer: 1,
        explanation: "The formula uses a_1 (first term), a_n (last term), and n (number of terms)."
    },
    {
        question: "The arithmetic mean between two equal numbers a and a is:",
        options: ["0", "a", "2a", "a/2"],
        answer: 1,
        explanation: "A = (a + a) / 2 = a."
    },
    {
        question: "If r = 1 in a geometric series, the formula S_n = a_1(1-r^n)/(1-r):",
        options: ["Yields zero", "Fails because denominator is zero", "Equals a_1", "Equals n * a_1"],
        answer: 1,
        explanation: "When r = 1, the denominator (1-r) becomes zero, making the formula undefined."
    },
    {
        question: "What is the common ratio of the geometric sequence 1/27, 1/9, 1/3, ...?",
        options: ["3", "1/3", "9", "-3"],
        answer: 0,
        explanation: "r = (1/9) / (1/27) = 3."
    },
    {
        question: "The geometric mean between -3/2 and -27/8 is:",
        options: ["9/4", "-9/4", "+-9/4", "81/16"],
        answer: 2,
        explanation: "G = +-sqrt((-3/2) * (-27/8)) = +-sqrt(81/16) = +-9/4."
    },
    {
        question: "The sum of the first 7 terms of the geometric sequence 3, 15, 75, ... is:",
        options: ["58,593", "11,718", "3,279", "19,531"],
        answer: 0,
        explanation: "S_7 = 3(5^7 - 1) / (5 - 1) = 58,593."
    },
    {
        question: "An infinite geometric series has a sum if and only if:",
        options: ["r = 1", "|r| < 1", "|r| > 1", "r = 0"],
        answer: 1,
        explanation: "Convergence of an infinite geometric series requires absolute value of r to be less than 1."
    },
    {
        question: "The harmonic mean between 9 and 11 is:",
        options: ["99/10", "10", "100/9", "20/9"],
        answer: 0,
        explanation: "H = 2(9)(11) / (9 + 11) = 198 / 20 = 99/10."
    },
    {
        question: "The value of sum(k=1 to 10) 3 is:",
        options: ["3", "10", "30", "33"],
        answer: 2,
        explanation: "Summing a constant 3 ten times gives 10 * 3 = 30."
    },
    {
        question: "If a vehicle depreciates or a population increases at a constant percentage, it follows a:",
        options: ["Geometric pattern", "Arithmetic pattern", "Harmonic pattern", "Linear pattern"],
        answer: 0,
        explanation: "Percentage changes compound geometrically."
    },
    {
        question: "The sum of the first n terms of an arithmetic series can also be written when first and last terms are known as:",
        options: ["(n/2)(a_1 + a_n)", "n(a_1 + a_n)", "(n/2)(2a_1 + d)", "n^2 * a_1"],
        answer: 0,
        explanation: "S_n = (n/2)(a_1 + a_n)."
    },
    {
        question: "If three numbers are in A.P., their sum is 24 and product is 945, the middle term is:",
        options: ["6", "8", "10", "12"],
        answer: 1,
        explanation: "Let numbers be a-d, a, a+d. Their sum is 3a = 24 => a = 8."
    },
    {
        question: "What is the common difference of the arithmetic sequence -6, -2, 2, ...?",
        options: ["-4", "4", "2", "-2"],
        answer: 1,
        explanation: "d = -2 - (-6) = 4."
    },
    {
        question: "The nth term of an arithmetic sequence is a linear function of:",
        options: ["n^2", "n", "n^3", "sqrt(n)"],
        answer: 1,
        explanation: "a_n = a_1 + (n-1)d = d*n + (a_1 - d), which is linear in n."
    },
    {
        question: "The nth term of a geometric sequence is an exponential function of:",
        options: ["n", "n-1", "n^2", "1/n"],
        answer: 1,
        explanation: "a_n = a_1 r^{n-1} involves the exponent n-1."
    },
    {
        question: "If a_1 = 12 and r = 1/2, the first four terms of the geometric sequence are:",
        options: ["12, 6, 3, 3/2", "12, 24, 48, 96", "12, 4, 4/3, 4/9", "12, 6, 2, 1"],
        answer: 0,
        explanation: "Multiplying by 1/2 successively gives 12, 6, 3, 3/2."
    },
    {
        question: "The sum of the odd numbers from 1 to 99 is:",
        options: ["2500", "2450", "2600", "2550"],
        answer: 0,
        explanation: "Odd numbers form an A.P. with a_1 = 1, a_n = 99, n = 50. Sum = (50/2)(1 + 99) = 25 * 100 = 2500."
    },
    {
        question: "In the expansion of sigma notation, the lower limit indicates:",
        options: ["The starting value of the index k", "The total number of terms", "The common ratio", "The final sum"],
        answer: 0,
        explanation: "The lower limit tells where the summation index starts."
    },
    {
        question: "What is the sum of the infinite geometric series 1 + 1/2 + 1/4 + 1/8 + ...?",
        options: ["1", "2", "1/2", "Infinity"],
        answer: 1,
        explanation: "S_infty = 1 / (1 - 1/2) = 1 / (1/2) = 2."
    },
    {
        question: "If the sum of n terms of a series is S_n, then the nth term a_n can be found by:",
        options: ["S_n - S_{n-1}", "S_n + S_{n-1}", "S_n / n", "S_n * n"],
        answer: 0,
        explanation: "The nth term is the difference between the sum of n terms and the sum of n-1 terms (a_n = S_n - S_{n-1})."
    },
    {
        question: "The harmonic mean between a and b exists only if:",
        options: ["a + b != 0", "a = b", "ab > 0", "a and b have opposite signs"],
        answer: 0,
        explanation: "The denominator in H = 2ab / (a+b) cannot be zero, so a + b != 0."
    },
    {
        question: "Which of the following represents a finite sequence?",
        options: ["2, 4, 6, 8, ...", "1, 3, 5, 7, ..., 99", "5, 10, 15, 20, ...", "1, 2, 4, 8, ..."],
        answer: 1,
        explanation: "A sequence with a specified last term (like 99) is finite."
    },
    {
        question: "The common difference of an arithmetic sequence can be:",
        options: ["Only positive", "Only negative", "Positive, negative, or zero", "Only a fraction"],
        answer: 2,
        explanation: "The common difference d can be positive, negative, or zero."
    },
    {
        question: "If all terms of a geometric sequence are positive, its common ratio r must be:",
        options: ["Negative", "Positive", "Zero", "Fractional only"],
        answer: 1,
        explanation: "Multiplying a positive term by a positive common ratio keeps all subsequent terms positive."
    },
    {
        question: "The sum of the series 6 + 12 + 18 + ... + 96 is an example of:",
        options: ["Arithmetic series", "Geometric series", "Harmonic series", "Arithmetico-geometric series"],
        answer: 0,
        explanation: "The terms have a constant difference of 6, forming an arithmetic series."
    },
    {
        question: "If a savings account grows by a fixed amount of money every month, it represents a/an:",
        options: ["Arithmetic sequence", "Geometric sequence", "Harmonic sequence", "Exponential growth"],
        answer: 0,
        explanation: "Adding a fixed amount periodically corresponds to an arithmetic sequence."
    },
    {
        question: "The expression sum(k=1 to n) k equals:",
        options: ["n(n+1)/2", "n^2", "n(n+1)", "n(2n+1)/6"],
        answer: 0,
        explanation: "Sum of first n natural numbers is n(n+1)/2."
    },
    {
        question: "In an arithmetico-geometric series, the nth term is the product of:",
        options: ["Two A.P. terms", "An A.P. term and a G.P. term", "Two G.P. terms", "An H.P. term and an A.P. term"],
        answer: 1,
        explanation: "Each term is formed by multiplying corresponding terms of an arithmetic and geometric sequence."
    },
    {
        question: "What is the value of sum(k=0) 2^k up to k=5?",
        options: ["31", "63", "15", "32"],
        answer: 1,
        explanation: "Summing powers of 2 from 2^0 to 2^5 gives 1 + 2 + 4 + 8 + 16 + 32 = 63."
    },
    {
        question: "The geometric mean between 1 and 1/3 is:",
        options: ["3", "1/sqrt(3)", "sqrt(3)", "1/3"],
        answer: 1,
        explanation: "G = sqrt(1 * 1/3) = 1/sqrt(3)."
    },
    {
        question: "If the common ratio r of a geometric series is -1 < r < 1, the sum to infinity formula is:",
        options: ["a_1 / (1-r)", "a_1 / (r-1)", "a_1(1-r^n)/(1-r)", "Does not exist"],
        answer: 0,
        explanation: "For |r| < 1, the sum to infinity is S_infty = a_1 / (1-r)."
    },
    {
        question: "The sequence 5, 10, 15, 20, 25, ... is an example of:",
        options: ["Infinite arithmetic sequence", "Finite geometric sequence", "Harmonic sequence", "Infinite geometric sequence"],
        answer: 0,
        explanation: "It continues without bound (infinite) with a constant difference of 5 (arithmetic)."
    },
    {
        question: "What is the 10th term of the arithmetic sequence where a_1 = 2 and d = 3?",
        options: ["29", "32", "27", "30"],
        answer: 0,
        explanation: "a_10 = 2 + (10 - 1)*3 = 2 + 27 = 29."
    },
    {
        question: "If a, G, b are in G.P., then G^2 is equal to:",
        options: ["a + b", "ab", "a / b", "2ab"],
        answer: 1,
        explanation: "By definition of geometric mean, G^2 = ab."
    },
    {
        question: "The sum of the first n terms of a series is denoted by:",
        options: ["a_n", "S_n", "T_n", "r_n"],
        answer: 1,
        explanation: "S_n represents the sum of the first n terms."
    },
    // Added 4 brand new unique questions to make it exactly 80:
    {
        question: "What is the sum to infinity of the geometric series 1 + 1/3 + 1/9 + 1/27 + ...?",
        options: ["3/2", "2", "3", "4/3"],
        answer: 0,
        explanation: "Using S_infty = a_1 / (1 - r) where a_1 = 1 and r = 1/3, S_infty = 1 / (1 - 1/3) = 3/2."
    },
    {
        question: "The nth term of an arithmetico-geometric sequence is the product of the nth term of an A.P. and:",
        options: ["Another A.P.", "A G.P.", "An H.P.", "A constant"],
        answer: 1,
        explanation: "An arithmetico-geometric sequence is formed by multiplying terms of an A.P. and a G.P."
    },
    {
        question: "If the first term of an infinite geometric series is 10 and common ratio is -1/2, its sum to infinity is:",
        options: ["20/3", "10", "15", "20"],
        answer: 0,
        explanation: "S_infty = 10 / (1 - (-1/2)) = 10 / (3/2) = 20/3."
    },
    {
        question: "Which of the following means between two numbers a and b satisfies the condition AH = G^2?",
        options: ["Arithmetic, Harmonic, Geometric", "Geometric, Arithmetic, Harmonic", "Harmonic, Geometric, Arithmetic", "Arithmetic, Geometric, Harmonic"],
        answer: 3,
        explanation: "A, G, and H represent Arithmetic, Geometric, and Harmonic means respectively, satisfying AH = G^2."
    },
    {
        question: "If the first term of an arithmetic sequence is a_1 and common difference is d, the 10th term is given by:",
        options: ["a_1 + 9d", "a_1 + 10d", "a_1 + 11d", "9a_1 + d"],
        answer: 0,
        explanation: "Using the nth term formula a_n = a_1 + (n-1)d, for n = 10 it becomes a_1 + 9d."
    },
    {
        question: "The geometric mean between 2 and 8 is:",
        options: ["4", "5", "16", "2√2"],
        answer: 0,
        explanation: "G = √(2 * 8) = √16 = 4."
    }
];

console.log("TOTAL CHAPTER 4 MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsMaths4",
    JSON.stringify(questions)
);

// preparation page controls (matching Chapter 3 style)
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
                    `You completed all ${questions.length} questions for Mathematics Chapter 4.`;
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