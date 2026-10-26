const questions = [

    // =========================
    // EASY — 1 to 6
    // =========================

    {
        question: "Which number system uses only 0 and 1?",
        options: [
            "Decimal",
            "Binary",
            "Octal",
            "Hexadecimal"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The binary number system uses only two digits: 0 and 1."
    },

    {
        question: "How many bits are there in one byte?",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "One byte consists of 8 bits."
    },

    {
        question: "Which type of signal has continuously varying values?",
        options: [
            "Digital signal",
            "Analog signal",
            "Binary signal",
            "Discrete signal"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An analog signal varies continuously with time."
    },

    {
        question: "Which gate produces 1 only when both inputs are 1?",
        options: [
            "OR",
            "NOT",
            "AND",
            "XOR"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The AND gate produces 1 only when all its inputs are 1."
    },

    {
        question: "Which gate reverses the input value?",
        options: [
            "AND",
            "OR",
            "NOT",
            "NAND"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A NOT gate changes 1 to 0 and 0 to 1."
    },

    {
        question: "Which device is primarily used to process instructions?",
        options: [
            "Monitor",
            "Keyboard",
            "CPU",
            "Printer"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The CPU processes instructions and performs computational operations."
    },


    // =========================
    // NORMAL — 7 to 14
    // =========================

    {
        question: "What is the decimal value of binary 1010?",
        options: [
            "8",
            "9",
            "10",
            "12"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "1010₂ = 8 + 2 = 10₁₀."
    },

    {
        question: "Which logic gate gives 1 when at least one input is 1?",
        options: [
            "AND",
            "OR",
            "NOT",
            "XNOR"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The OR gate produces 1 when one or more inputs are 1."
    },

    {
        question: "What is the output of an AND gate when its inputs are 1 and 0?",
        options: [
            "0",
            "1",
            "10",
            "Undefined"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "AND gives 1 only when both inputs are 1, so the output is 0."
    },

    {
        question: "Which gate is equivalent to an OR gate followed by a NOT gate?",
        options: [
            "AND",
            "NAND",
            "NOR",
            "XOR"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "A NOR gate is formed by applying NOT to the output of an OR gate."
    },

    {
        question: "Which representation is most suitable for storing digital information?",
        options: [
            "Continuous voltage values",
            "Binary values",
            "Mechanical motion",
            "Sound waves only"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Digital systems represent information using discrete values, commonly 0 and 1."
    },

    {
        question: "What is the binary representation of decimal 15?",
        options: [
            "1010",
            "1100",
            "1111",
            "1001"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "15 in binary is 1111 because 8 + 4 + 2 + 1 = 15."
    },

    {
        question: "Which gate produces 1 when the two inputs are different?",
        options: [
            "AND",
            "OR",
            "XOR",
            "NOR"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "XOR produces 1 when its two inputs are different."
    },

    {
        question: "A flowchart is mainly used to represent:",
        options: [
            "Computer hardware",
            "Program logic",
            "File size",
            "Screen resolution"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A flowchart represents the sequence and logic of a process or algorithm."
    },


    // =========================
    // DIFFICULT — 15 to 20
    // =========================

    {
        question: "What is the decimal value of binary 110101?",
        options: [
            "51",
            "53",
            "55",
            "57"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "110101₂ = 32 + 16 + 4 + 1 = 53."
    },

    {
        question: "If an AND gate has three inputs, when will its output be 1?",
        options: [
            "When any one input is 1",
            "When two inputs are 1",
            "When all three inputs are 1",
            "When all three inputs are 0"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "An AND gate outputs 1 only when every input is 1."
    },

    {
        question: "What is the output of a NAND gate for inputs 1 and 1?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "AND(1,1) gives 1, and NOT changes it to 0. Therefore NAND gives 0."
    },

    {
        question: "Which expression represents the output of a NOR gate?",
        options: [
            "A + B",
            "A · B",
            "(A + B)'",
            "(A · B)'"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "NOR is the NOT operation applied to OR, so its Boolean expression is (A + B)'."
    },

    {
        question: "A digital system uses 4 bits to represent a value. How many different combinations are possible?",
        options: [
            "4",
            "8",
            "12",
            "16"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "For n bits, the number of possible combinations is 2ⁿ. For 4 bits, 2⁴ = 16."
    },

    {
        question: "What is the result of XOR when both inputs are 0?",
        options: [
            "0",
            "1",
            "2",
            "Cannot be determined"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "XOR gives 1 only when the inputs are different. Since both inputs are 0, the output is 0."
    },
    
    // ==================================================
    // EASY — Q21 to Q38
    // ==================================================

    {
        question: "Which number system has a base of 8?",
        options: [
            "Binary",
            "Decimal",
            "Octal",
            "Hexadecimal"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The octal number system has a base of 8."
    },

    {
        question: "Which number system has a base of 16?",
        options: [
            "Binary",
            "Octal",
            "Decimal",
            "Hexadecimal"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "The hexadecimal number system has a base of 16."
    },

    {
        question: "How many symbols are used in the hexadecimal system?",
        options: [
            "8",
            "10",
            "12",
            "16"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "Hexadecimal uses 16 symbols: 0-9 and A-F."
    },

    {
        question: "Which two values are used in binary logic?",
        options: [
            "1 and 2",
            "0 and 1",
            "2 and 3",
            "0 and 9"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Binary logic uses two values, normally represented as 0 and 1."
    },

    {
        question: "Which component displays visual output?",
        options: [
            "Keyboard",
            "Mouse",
            "Monitor",
            "Scanner"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A monitor displays visual output from a computer."
    },

    {
        question: "Which device is commonly used to enter text?",
        options: [
            "Monitor",
            "Keyboard",
            "Speaker",
            "Projector"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A keyboard is an input device commonly used to enter text."
    },

    {
        question: "Which device is used to produce printed output?",
        options: [
            "Printer",
            "Keyboard",
            "Mouse",
            "Microphone"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A printer produces output on paper."
    },

    {
        question: "Which device is mainly used to point and select items on a screen?",
        options: [
            "Mouse",
            "Printer",
            "Speaker",
            "Scanner"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A mouse is a pointing input device."
    },

    {
        question: "Which gate has only one input?",
        options: [
            "AND",
            "OR",
            "NOT",
            "XOR"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A NOT gate normally has one input and produces its complement."
    },

    {
        question: "What does a logic gate operate on?",
        options: [
            "Logical values",
            "Only images",
            "Only sound",
            "Printed pages"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Logic gates operate on binary logical values."
    },

    {
        question: "Which gate gives 0 when both inputs are 0?",
        options: [
            "OR",
            "AND",
            "Both AND and OR",
            "Neither"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Both AND(0,0) and OR(0,0) produce 0."
    },

    {
        question: "Which gate is commonly represented by the symbol + in Boolean algebra?",
        options: [
            "AND",
            "OR",
            "NOT",
            "XOR"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "In Boolean algebra, + commonly represents the OR operation."
    },

    {
        question: "Which Boolean symbol commonly represents AND?",
        options: [
            "+",
            "·",
            "'",
            "="
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A dot (·) commonly represents the AND operation."
    },

    {
        question: "Which symbol is commonly used to represent NOT?",
        options: [
            "+",
            "·",
            "'",
            "×"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A prime symbol (') is commonly used to represent NOT."
    },

    {
        question: "Which type of information is represented using discrete values?",
        options: [
            "Digital information",
            "Analog information",
            "Continuous information",
            "Mechanical information"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Digital information uses discrete values."
    },

    {
        question: "Which type of signal can have infinitely many values within a range?",
        options: [
            "Digital",
            "Analog",
            "Binary",
            "Logical"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An analog signal can vary continuously over a range."
    },

    {
        question: "What is the main purpose of a computer system?",
        options: [
            "Only to display images",
            "To process data",
            "Only to print documents",
            "Only to store music"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A computer system accepts data, processes it, and produces useful information."
    },

    {
        question: "Which part of a computer performs arithmetic and logical operations?",
        options: [
            "ALU",
            "Monitor",
            "Keyboard",
            "Printer"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The Arithmetic Logic Unit performs arithmetic and logical operations."
    },


    // ==================================================
    // NORMAL — Q39 to Q62
    // ==================================================

    {
        question: "What is the decimal value of binary 10011?",
        options: [
            "17",
            "18",
            "19",
            "20"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "10011₂ = 16 + 2 + 1 = 19."
    },

    {
        question: "What is the binary equivalent of decimal 20?",
        options: [
            "10010",
            "10100",
            "11000",
            "11100"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "20 = 16 + 4, so its binary representation is 10100."
    },

    {
        question: "What is the decimal value of hexadecimal A?",
        options: [
            "8",
            "9",
            "10",
            "11"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "In hexadecimal, A represents decimal 10."
    },

    {
        question: "Which hexadecimal digit represents decimal 15?",
        options: [
            "C",
            "D",
            "E",
            "F"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "F represents decimal 15 in hexadecimal."
    },

    {
        question: "What is the output of an OR gate for inputs 0 and 1?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "OR produces 1 when at least one input is 1."
    },

    {
        question: "What is the output of an AND gate for inputs 1 and 1?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "AND produces 1 when both inputs are 1."
    },

    {
        question: "What is the output of a NOT gate when its input is 0?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "NOT reverses the input, so NOT 0 = 1."
    },

    {
        question: "What is the output of an XOR gate for inputs 1 and 0?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "XOR produces 1 when its inputs are different."
    },

    {
        question: "What is the output of an XOR gate for inputs 1 and 1?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "XOR produces 0 when both inputs are the same."
    },

    {
        question: "Which gate is called a universal gate?",
        options: [
            "AND",
            "OR",
            "NAND",
            "XOR"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "NAND is a universal gate because other logic gates can be constructed using NAND gates."
    },

    {
        question: "Which other gate is also considered a universal gate?",
        options: [
            "NOR",
            "AND",
            "XOR",
            "NOT"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "NOR is also a universal gate."
    },

    {
        question: "What does a truth table show?",
        options: [
            "Only input values",
            "Only output values",
            "Input and corresponding output values",
            "Only circuit size"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "A truth table lists possible input combinations and their corresponding outputs."
    },

    {
        question: "How many rows are required for a truth table with two binary inputs?",
        options: [
            "2",
            "3",
            "4",
            "8"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Two binary inputs have 2² = 4 possible combinations."
    },

    {
        question: "How many rows are required for a truth table with three binary inputs?",
        options: [
            "3",
            "6",
            "8",
            "9"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Three binary inputs have 2³ = 8 possible combinations."
    },

    {
        question: "Which Boolean expression represents an AND operation?",
        options: [
            "A + B",
            "A · B",
            "A'",
            "A = B"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A · B represents the Boolean AND operation."
    },

    {
        question: "Which Boolean expression represents an OR operation?",
        options: [
            "A + B",
            "A · B",
            "A'",
            "A/B"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A + B represents the Boolean OR operation."
    },

    {
        question: "Which Boolean expression represents the complement of A?",
        options: [
            "A + 1",
            "A · 1",
            "A'",
            "A + B"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "A' represents the complement or NOT of A."
    },

    {
        question: "Which device converts physical input into data that a computer can process?",
        options: [
            "Input device",
            "Output device",
            "Power supply",
            "Display device"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Input devices allow data and instructions to enter a computer system."
    },

    {
        question: "Which of the following is an output device?",
        options: [
            "Keyboard",
            "Mouse",
            "Monitor",
            "Scanner"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "A monitor is an output device."
    },

    {
        question: "Which memory is generally used to store data temporarily while programs are running?",
        options: [
            "RAM",
            "ROM",
            "DVD",
            "Printer"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "RAM temporarily stores data and instructions currently being used."
    },

    {
        question: "Which unit is commonly used to measure computer storage?",
        options: [
            "Byte",
            "Meter",
            "Newton",
            "Volt"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Computer storage capacity is commonly measured in bytes and larger units."
    },

    {
        question: "A computer converts input data into useful information mainly through:",
        options: [
            "Processing",
            "Printing",
            "Typing",
            "Scanning"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Processing transforms input data into meaningful information."
    },

    {
        question: "Which part of the CPU controls and coordinates instructions?",
        options: [
            "ALU",
            "Control Unit",
            "Keyboard",
            "Monitor"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The Control Unit directs and coordinates the operations of the CPU."
    },

    {
        question: "Which CPU component performs comparisons and logical decisions?",
        options: [
            "ALU",
            "Monitor",
            "RAM",
            "Keyboard"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The ALU performs arithmetic and logical operations, including comparisons."
    },


    // ==================================================
    // DIFFICULT — Q63 to Q80
    // ==================================================

    {
        question: "What is the decimal value of binary 101101?",
        options: [
            "43",
            "44",
            "45",
            "46"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "101101₂ = 32 + 8 + 4 + 1 = 45."
    },

    {
        question: "What is the binary representation of decimal 37?",
        options: [
            "100101",
            "101001",
            "110001",
            "111001"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "37 = 32 + 4 + 1, so the binary representation is 100101."
    },

    {
        question: "How many different values can be represented using 5 bits?",
        options: [
            "16",
            "25",
            "32",
            "64"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "The number of combinations for 5 bits is 2⁵ = 32."
    },

    {
        question: "How many different values can be represented using 6 bits?",
        options: [
            "32",
            "48",
            "64",
            "128"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Six bits provide 2⁶ = 64 possible combinations."
    },

    {
        question: "What is the output of a NAND gate when inputs are 1 and 0?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "AND(1,0) = 0, and NOT 0 = 1. Therefore NAND gives 1."
    },

    {
        question: "What is the output of a NOR gate when inputs are 0 and 0?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "OR(0,0) = 0, and NOT 0 = 1. Therefore NOR gives 1."
    },

    {
        question: "What is the output of a NOR gate when inputs are 1 and 0?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "OR(1,0) = 1, and NOT 1 = 0. Therefore NOR gives 0."
    },

    {
        question: "What is the output of a NAND gate when inputs are 1 and 1?",
        options: [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "AND(1,1) = 1, and NOT 1 = 0. Therefore NAND gives 0."
    },

    {
        question: "A truth table has 16 rows. How many binary input variables does it represent?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Since 2⁴ = 16, four binary input variables are required."
    },

    {
        question: "A digital system has 8 binary inputs. How many possible input combinations exist?",
        options: [
            "64",
            "128",
            "256",
            "512"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Eight binary inputs provide 2⁸ = 256 possible combinations."
    },

    {
        question: "Which expression is equivalent to NOT(A AND B)?",
        options: [
            "A + B",
            "A' + B'",
            "A · B",
            "A' · B'"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "By De Morgan's law, NOT(A·B) = A' + B'."
    },

    {
        question: "Which expression is equivalent to NOT(A OR B)?",
        options: [
            "A' + B'",
            "A' · B'",
            "A · B",
            "A + B"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "By De Morgan's law, NOT(A+B) = A'·B'."
    },

    {
        question: "If A = 1 and B = 0, what is the value of (A + B)'?",
        options: [
            "0",
            "1",
            "2",
            "Cannot be determined"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "A+B = 1, therefore (A+B)' = 0."
    },

    {
        question: "If A = 1 and B = 0, what is the value of (A · B)'?",
        options: [
            "0",
            "1",
            "2",
            "Cannot be determined"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "A·B = 0, therefore (A·B)' = 1."
    },

    {
        question: "Which statement correctly describes digital signals?",
        options: [
            "They must always vary continuously",
            "They use discrete levels",
            "They cannot represent information",
            "They only exist in mechanical systems"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Digital signals use discrete levels to represent information."
    },

    {
        question: "Why is binary suitable for electronic digital systems?",
        options: [
            "It requires ten stable states",
            "Electronic circuits can conveniently represent two distinct states",
            "It cannot represent numbers",
            "It uses only letters"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Digital electronic circuits can conveniently represent two distinct states, corresponding to binary 0 and 1."
    },

    {
        question: "A system uses 3 bits for each value. What is the maximum unsigned decimal value?",
        options: [
            "6",
            "7",
            "8",
            "9"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "With 3 unsigned bits there are 8 values, from 0 to 7. Therefore the maximum is 7."
    },

    {
        question: "A system uses 4 bits for each value. What is the maximum unsigned decimal value?",
        options: [
            "14",
            "15",
            "16",
            "17"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Four bits represent values from 0 to 2⁴−1, so the maximum is 15."
    },

    {
    question: "Which technology provides computing resources over the internet?",
    options: [
        "Cloud computing",
        "Local computing",
        "Analog computing",
        "Manual computing"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Cloud computing provides computing resources and services through the internet."
},

{
    question: "Which cloud model is available for general public use?",
    options: [
        "Private cloud",
        "Public cloud",
        "Local cloud",
        "Personal cloud"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A public cloud provides services to the general public over the internet."
},

{
    question: "Which cloud model is dedicated to a single organization?",
    options: [
        "Public cloud",
        "Private cloud",
        "Hybrid cloud",
        "Open cloud"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A private cloud is dedicated to one organization."
},

{
    question: "Which cloud model combines public and private clouds?",
    options: [
        "Hybrid cloud",
        "Local cloud",
        "Personal cloud",
        "Open cloud"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "A hybrid cloud combines private and public cloud environments."
},

{
    question: "Which cloud service provides virtual machines and storage?",
    options: [
        "SaaS",
        "PaaS",
        "IaaS",
        "LAN"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Infrastructure as a Service (IaaS) provides resources such as virtual machines, storage and networks."
},

{
    question: "Which cloud service provides a platform for application development?",
    options: [
        "IaaS",
        "PaaS",
        "SaaS",
        "DaaS"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "PaaS provides a platform and environment for developing and deploying applications."
},

{
    question: "Which cloud service provides ready-to-use software?",
    options: [
        "IaaS",
        "PaaS",
        "SaaS",
        "BIOS"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Software as a Service (SaaS) provides software applications through the internet."
},

{
    question: "Which is a major benefit of cloud computing?",
    options: [
        "No internet is ever needed",
        "Scalable resources",
        "No security concerns",
        "No storage required"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Cloud computing allows resources to be scaled according to requirements."
},

{
    question: "Which cloud computing feature allows resources to increase when demand rises?",
    options: [
        "Scalability",
        "Encryption",
        "Topology",
        "Compilation"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Scalability allows computing resources to increase or decrease according to demand."
},

{
    question: "Which network topology uses a central device?",
    options: [
        "Bus",
        "Ring",
        "Star",
        "Mesh"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "In a star topology, all devices are connected to a central device."
},

{
    question: "Which device commonly acts as the central device in a star topology?",
    options: [
        "Switch",
        "Printer",
        "Monitor",
        "Keyboard"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "A switch commonly connects the devices in a star topology."
},

{
    question: "Which topology uses a single main communication cable?",
    options: [
        "Star",
        "Bus",
        "Mesh",
        "Ring"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A bus topology uses a single main cable called the backbone."
},

{
    question: "Which topology connects devices in a circular arrangement?",
    options: [
        "Bus",
        "Star",
        "Ring",
        "Tree"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "In a ring topology, devices are connected in a circular or ring-like arrangement."
},

{
    question: "Which topology provides multiple paths between devices?",
    options: [
        "Bus",
        "Mesh",
        "Ring",
        "Star"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "A mesh topology provides multiple connection paths between devices."
},

{
    question: "Which topology is generally more fault tolerant because of multiple paths?",
    options: [
        "Mesh",
        "Bus",
        "Ring",
        "Star"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Mesh topology can provide alternative paths if one connection fails."
},

{
    question: "What is a major disadvantage of bus topology?",
    options: [
        "It needs a central switch",
        "Backbone failure can affect the network",
        "It has many redundant links",
        "Every device needs a separate network"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Failure of the main backbone cable can disrupt communication in a bus topology."
},

{
    question: "What is a major advantage of star topology?",
    options: [
        "No central device is needed",
        "Failure of one device usually does not affect others",
        "It uses no cables",
        "All devices share one backbone"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "In a star topology, failure of one connected device or cable usually does not affect the other devices."
},

{
    question: "Which topology combines characteristics of two or more topologies?",
    options: [
        "Hybrid topology",
        "Ring topology",
        "Bus topology",
        "Simple topology"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "A hybrid topology combines two or more different network topologies."
},

{
    question: "Which topology has a hierarchical structure?",
    options: [
        "Tree",
        "Ring",
        "Bus",
        "Point-to-point"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Tree topology uses a hierarchical structure with parent and child connections."
},

{
    question: "What does SDLC stand for?",
    options: [
        "System Data Link Control",
        "Software Development Life Cycle",
        "Software Digital Logic Circuit",
        "System Development Local Code"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "SDLC stands for Software Development Life Cycle."
},

{
    question: "What is the main purpose of SDLC?",
    options: [
        "To design computer hardware",
        "To manage software development",
        "To increase internet speed",
        "To create network cables"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "SDLC provides a structured process for planning, developing, testing and maintaining software."
},

{
    question: "Which SDLC phase identifies what the software should do?",
    options: [
        "Requirements analysis",
        "Maintenance",
        "Testing",
        "Deployment"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Requirements analysis identifies and documents what users and the system need."
},

{
    question: "Which SDLC phase focuses on creating the structure of the software?",
    options: [
        "Design",
        "Testing",
        "Maintenance",
        "Deployment"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "The design phase defines the structure, components and overall architecture of the software."
},

{
    question: "In which SDLC phase is the software actually coded?",
    options: [
        "Analysis",
        "Implementation",
        "Planning",
        "Maintenance"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "During implementation or development, programmers write the software code."
},

{
    question: "Which SDLC phase checks whether software works correctly?",
    options: [
        "Testing",
        "Planning",
        "Design",
        "Requirements"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Testing is performed to find errors and verify that the software meets its requirements."
},

{
    question: "What is the purpose of software maintenance?",
    options: [
        "To remove all software",
        "To modify and improve software after deployment",
        "To design computer hardware",
        "To create a network topology"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Maintenance involves fixing problems, improving features and adapting software after deployment."
},

{
    question: "Which phase generally follows software development before release?",
    options: [
        "Testing",
        "Requirements",
        "Planning",
        "Analysis"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Software is generally tested after development to identify and correct errors before release."
},

{
    question: "Why is SDLC useful?",
    options: [
        "It provides a structured development process",
        "It removes the need for testing",
        "It prevents all software errors",
        "It replaces programmers"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "SDLC provides an organized and systematic approach to software development."
},

{
    question: "What is encryption?",
    options: [
        "Converting data into a protected form",
        "Deleting data permanently",
        "Increasing storage capacity",
        "Connecting computers"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Encryption converts readable data into a protected form to prevent unauthorized access."
},

{
    question: "What is symmetric encryption based on?",
    options: [
        "One shared key",
        "Two unrelated public keys",
        "No key",
        "Only a password"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Symmetric encryption uses the same shared key for encryption and decryption."
},

{
    question: "In symmetric encryption, which key is used for decryption?",
    options: [
        "A different public key",
        "The same shared key",
        "No key",
        "A network key only"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The same secret key is used to encrypt and decrypt data in symmetric encryption."
},

{
    question: "What is a major challenge of symmetric encryption?",
    options: [
        "Key distribution",
        "Lack of encryption",
        "No data transmission",
        "No secret key"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "The secret key must be securely shared between communicating parties."
},

{
    question: "Which encryption method uses a pair of keys?",
    options: [
        "Symmetric encryption",
        "Asymmetric encryption",
        "Analog encryption",
        "Manual encryption"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Asymmetric encryption uses a public key and a private key."
},

{
    question: "Which keys are used in asymmetric encryption?",
    options: [
        "Two identical secret keys",
        "Public and private keys",
        "Only a password",
        "Only a private key"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Asymmetric encryption uses a mathematically related public and private key pair."
},

{
    question: "Which key can generally be shared openly in asymmetric encryption?",
    options: [
        "Private key",
        "Public key",
        "Secret key",
        "Session key"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The public key is designed to be shared openly, while the private key must be kept secret."
},

{
    question: "Which key must be kept secret in asymmetric encryption?",
    options: [
        "Public key",
        "Private key",
        "Network key",
        "Open key"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The private key must be protected from unauthorized users."
},

{
    question: "Which encryption method is generally faster for large amounts of data?",
    options: [
        "Symmetric encryption",
        "Asymmetric encryption",
        "No encryption",
        "Manual encryption"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Symmetric encryption is generally faster and is suitable for encrypting large amounts of data."
},

{
    question: "Which method is useful for secure key exchange?",
    options: [
        "Asymmetric encryption",
        "Bus topology",
        "Symmetric encryption only",
        "SDLC"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Asymmetric cryptography can be used to securely establish or exchange secret keys."
},

{
    question: "What is one important difference between symmetric and asymmetric encryption?",
    options: [
        "Symmetric uses one shared key; asymmetric uses a key pair",
        "Both always use the same key",
        "Asymmetric uses no keys",
        "Symmetric cannot protect data"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Symmetric encryption uses a shared secret key, while asymmetric encryption uses public and private keys."
},
{
    question: "Which network topology provides a dedicated connection between every pair of devices?",
    options: [
        "Star",
        "Bus",
        "Mesh",
        "Ring"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "In a mesh topology, devices are connected through dedicated links, providing multiple communication paths."
},

];
localStorage.setItem(
    "mcqQuestionsComputer1",
    JSON.stringify(questions)
);


// =========================
// PREPARATION PAGE CONTROLS
// =========================

const questionNumber =
    document.querySelector(".question-number");

const questionText =
    document.querySelector(".mcq-card h2");

const optionsContainer =
    document.querySelector(".options");

const feedback =
    document.querySelector(".feedback");

const previousButton =
    document.querySelector(".previous-button");

const nextButton =
    document.querySelector(".next-button");

const progressCount =
    document.querySelector(".progress-top span:first-child");

const progressText =
    document.querySelector(".progress-top span:last-child");

const progressFill =
    document.querySelector(".progress-fill");


let currentQuestion = 0;


function loadQuestion() {

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent =
        question.question;

    optionsContainer.innerHTML = "";


    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        if (index === question.answer) {
            button.classList.add("correct");
        }

        button.disabled = true;

        optionsContainer.appendChild(button);

    });


    feedback.innerHTML = `
        <strong>Correct!</strong>
        <p>${question.explanation}</p>
    `;


    const total = questions.length;
    const current = currentQuestion + 1;

    const percentage =
        Math.round((current / total) * 100);


    progressCount.textContent =
        `Question ${current} of ${total}`;

    progressText.textContent =
        `${percentage}% Complete`;

    progressFill.style.width =
        `${percentage}%`;


    previousButton.disabled =
        currentQuestion === 0;

    nextButton.disabled =
        currentQuestion === total - 1;

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