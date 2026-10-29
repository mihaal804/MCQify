const questions = [

    // =========================
    // 01 - 10
    // 3 Easy | 4 Normal | 3 Difficult
    // =========================

    {
        question: "Which of the following is a quantitative observation?",
        options: [
            "The object is red",
            "The object is heavy",
            "The length is 5 m",
            "The object is shiny"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A quantitative observation gives a numerical value with a unit."
    },

    {
        question: "What is estimation?",
        options: [
            "An exact measurement",
            "A rough educated guess",
            "A mathematical proof",
            "A unit conversion"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Estimation is a rough educated guess based on prior experience and sound physical reasoning."
    },

    {
        question: "Which quantity is commonly used to describe the size of an object?",
        options: [
            "Length",
            "Colour",
            "Shape",
            "Texture"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Length is a physical quantity used to describe the size or distance of an object."
    },

    {
        question: "Which is the SI unit of force expressed in base units?",
        options: [
            "kg m s⁻²",
            "kg m² s⁻²",
            "kg s⁻¹",
            "m s⁻²"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Force = mass × acceleration, so its SI base units are kg m s⁻²."
    },

    {
        question: "Which of the following is a derived quantity?",
        options: [
            "Mass",
            "Length",
            "Time",
            "Velocity"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Velocity is obtained from displacement divided by time."
    },

    {
        question: "What are the dimensions of velocity?",
        options: [
            "[L T⁻¹]",
            "[L T]",
            "[L T⁻²]",
            "[M L T⁻¹]"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Velocity is displacement divided by time, giving dimensions [L T⁻¹]."
    },

    {
        question: "Which of the following is dimensionless?",
        options: [
            "Force",
            "Velocity",
            "Strain",
            "Momentum"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Strain is a ratio of quantities having the same dimensions, so it has no dimensions."
    },

    {
        question: "Which statement describes the principle of homogeneity?",
        options: [
            "Both sides of an equation must have the same dimensions",
            "All quantities must have the same numerical value",
            "Every quantity must have SI units",
            "Every equation must contain a constant"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "A physically correct equation must have the same dimensions on both sides."
    },

    {
        question: "Which pair has the same dimensions?",
        options: [
            "Velocity and acceleration",
            "Work and energy",
            "Force and velocity",
            "Pressure and momentum"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Work and energy both have dimensions [M L² T⁻²]."
    },

    {
        question: "If x = 5 m and t = 2 s, what are the dimensions of x/t?",
        options: [
            "[L]",
            "[T]",
            "[L T⁻¹]",
            "[L T⁻²]"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Dividing length by time gives the dimensions [L T⁻¹]."
    },


    // =========================
    // 11 - 20
    // 3 Easy | 4 Normal | 3 Difficult
    // =========================

    {
        question: "Which SI unit is used for work?",
        options: [
            "Newton",
            "Joule",
            "Watt",
            "Pascal"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The SI unit of work is joule (J)."
    },

    {
        question: "Which SI unit is used for power?",
        options: [
            "Joule",
            "Newton",
            "Watt",
            "Coulomb"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The SI unit of power is watt (W)."
    },

    {
        question: "Which SI unit is used for pressure?",
        options: [
            "Pascal",
            "Joule",
            "Newton",
            "Watt"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The SI unit of pressure is pascal (Pa)."
    },

    {
        question: "What are the dimensions of acceleration?",
        options: [
            "[L T⁻¹]",
            "[L T⁻²]",
            "[M L T⁻²]",
            "[M T⁻²]"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Acceleration is change in velocity per unit time, so its dimensions are [L T⁻²]."
    },

    {
        question: "What are the dimensions of force?",
        options: [
            "[M L T⁻²]",
            "[M L² T⁻²]",
            "[L T⁻²]",
            "[M T⁻¹]"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Force = mass × acceleration, giving [M L T⁻²]."
    },

    {
        question: "What are the dimensions of work?",
        options: [
            "[M L T⁻²]",
            "[M L² T⁻²]",
            "[L² T⁻¹]",
            "[M L² T⁻¹]"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Work = force × displacement, giving [M L² T⁻²]."
    },

    {
        question: "Which quantity has dimensions [M L² T⁻³]?",
        options: [
            "Force",
            "Work",
            "Power",
            "Pressure"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Power is work divided by time, so its dimensions are [M L² T⁻³]."
    },

    {
        question: "Which expression has dimensions of pressure?",
        options: [
            "Force × area",
            "Force / area",
            "Mass × velocity",
            "Work × time"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Pressure is defined as force per unit area."
    },

    {
        question: "Which quantity has dimensions [M L⁻¹ T⁻²]?",
        options: [
            "Pressure",
            "Power",
            "Energy",
            "Velocity"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Pressure = force/area, giving [M L⁻¹ T⁻²]."
    },

    {
        question: "Which of the following equations is dimensionally consistent?",
        options: [
            "v = u + at",
            "v = u + at²",
            "v = u + a/t",
            "v = ut + a"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "In v = u + at, every term has dimensions of velocity."
    },


    // =========================
    // 21 - 30
    // 3 Easy | 4 Normal | 3 Difficult
    // =========================

    {
        question: "What does precision describe?",
        options: [
            "Closeness to the true value",
            "Closeness of measured values to each other",
            "Size of an object",
            "The unit used"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Precision refers to how closely repeated measurements agree with each other."
    },

    {
        question: "What does accuracy describe?",
        options: [
            "Closeness to a standard or true value",
            "Closeness between repeated values",
            "Number of readings",
            "Size of the instrument"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Accuracy refers to how close a measurement is to a standard or true value."
    },

    {
        question: "Which type of error is caused by a person's negligence?",
        options: [
            "Personal error",
            "Systematic error",
            "Random error",
            "Dimensional error"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Negligence of a person is listed as a cause of personal error."
    },

    {
        question: "Repeated measurements that are close to each other but far from the true value are:",
        options: [
            "Accurate but not precise",
            "Precise but not accurate",
            "Both accurate and precise",
            "Neither accurate nor precise"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Close repeated values indicate precision, while distance from the true value indicates poor accuracy."
    },

    {
        question: "Which instrument generally gives greater precision?",
        options: [
            "An instrument with a larger least count",
            "An instrument with a smaller least count",
            "An instrument with no scale",
            "An instrument with fewer markings"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A smaller least count allows smaller differences to be measured."
    },

    {
        question: "What is uncertainty?",
        options: [
            "The exact value of a quantity",
            "The range of possible values around a measurement",
            "The unit of measurement",
            "The size of an instrument"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Uncertainty represents the range of possible values within which the true value lies."
    },

    {
        question: "Which statement about uncertainty is correct?",
        options: [
            "Every measurement has some degree of uncertainty",
            "Only large measurements have uncertainty",
            "Uncertainty is always zero",
            "Uncertainty depends only on the unit"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Measurements have a degree of uncertainty due to instrument limitations and experimental factors."
    },

    {
        question: "A measurement of 3.06 mm ± 0.02 mm indicates that the value may lie between:",
        options: [
            "3.00 mm and 3.02 mm",
            "3.04 mm and 3.08 mm",
            "3.06 mm and 3.08 mm",
            "3.02 mm and 3.06 mm"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Adding and subtracting 0.02 mm from 3.06 mm gives 3.04 mm to 3.08 mm."
    },

    {
        question: "If a measurement is written as x = (20.0 ± 0.5) cm, the absolute uncertainty is:",
        options: [
            "20.0 cm",
            "0.5 cm",
            "19.5 cm",
            "20.5 cm"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The value after ± represents the absolute uncertainty."
    },

    {
        question: "Which type of error can arise from faulty apparatus?",
        options: [
            "Personal error",
            "Systematic error",
            "Random error",
            "Unit error"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Faulty apparatus can produce systematic error."
    },


    // =========================
    // 31 - 40
    // 3 Easy | 4 Normal | 3 Difficult
    // =========================

    {
        question: "Which error is associated with unpredictable variations?",
        options: [
            "Random error",
            "Personal error",
            "Systematic error",
            "Unit error"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Random error results from unpredictable variations in measurements."
    },

    {
        question: "What is fractional uncertainty?",
        options: [
            "Absolute uncertainty divided by measured value",
            "Measured value divided by uncertainty",
            "Uncertainty multiplied by time",
            "Absolute uncertainty plus measured value"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Fractional uncertainty is absolute uncertainty divided by the measured value."
    },

    {
        question: "Percentage uncertainty is obtained by multiplying fractional uncertainty by:",
        options: [
            "10",
            "50",
            "100",
            "1000"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Percentage uncertainty = fractional uncertainty × 100."
    },

    {
        question: "If x = (37.5 ± 0.1) cm, what is the fractional uncertainty?",
        options: [
            "0.001",
            "0.0027",
            "0.01",
            "0.1"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Fractional uncertainty = 0.1/37.5 ≈ 0.0027."
    },

    {
        question: "For addition of two quantities, their absolute uncertainties are:",
        options: [
            "Multiplied",
            "Added",
            "Divided",
            "Ignored"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For addition or subtraction, absolute uncertainties are added."
    },

    {
        question: "For multiplication of two quantities, their percentage uncertainties are:",
        options: [
            "Added",
            "Subtracted",
            "Multiplied",
            "Ignored"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "For multiplication or division, percentage uncertainties are added."
    },

    {
        question: "If x = (12.4 ± 0.2) cm and y = (8.1 ± 0.1) cm, what is x + y?",
        options: [
            "(20.5 ± 0.1) cm",
            "(20.5 ± 0.2) cm",
            "(20.5 ± 0.3) cm",
            "(20.5 ± 0.4) cm"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The absolute uncertainties are added: 0.2 + 0.1 = 0.3 cm."
    },

    {
        question: "If x = (24.0 ± 0.1) cm and y = (4.0 ± 0.2) cm, what is x − y?",
        options: [
            "(20.0 ± 0.1) cm",
            "(20.0 ± 0.2) cm",
            "(20.0 ± 0.3) cm",
            "(20.0 ± 0.4) cm"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "For subtraction, absolute uncertainties are added: 0.1 + 0.2 = 0.3 cm."
    },

    {
        question: "A length is measured as 50.0 ± 0.5 cm. What is its percentage uncertainty?",
        options: [
            "0.1%",
            "0.5%",
            "1%",
            "5%"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Percentage uncertainty = (0.5/50.0) × 100 = 1%."
    },

    {
        question: "If the percentage uncertainty in x is 2%, what is the percentage uncertainty in x²?",
        options: [
            "1%",
            "2%",
            "4%",
            "8%"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "For a power, percentage uncertainty is multiplied by the power: 2 × 2% = 4%."
    },


    // =========================
    // 41 - 50
    // 3 Easy | 4 Normal | 3 Difficult
    // =========================

    {
        question: "Which quantity has no dimensions and no units?",
        options: [
            "Strain",
            "Force",
            "Velocity",
            "Pressure"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Strain is dimensionless because it is a ratio of similar quantities."
    },

    {
        question: "Which symbol represents the dimension of mass?",
        options: [
            "[M]",
            "[L]",
            "[T]",
            "[I]"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Mass is represented by the dimension [M]."
    },

    {
        question: "Which symbol represents the dimension of length?",
        options: [
            "[M]",
            "[L]",
            "[T]",
            "[N]"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Length is represented by the dimension [L]."
    },

    {
        question: "Which of the following is a limitation of dimensional analysis?",
        options: [
            "It can check dimensional consistency",
            "It cannot distinguish quantities with the same dimensions",
            "It can find every numerical constant",
            "It can always prove an equation correct"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Dimensional analysis cannot distinguish physical quantities that have the same dimensions."
    },

    {
        question: "Dimensional analysis cannot determine which type of quantity?",
        options: [
            "Dimensions",
            "Numerical constants",
            "Dimensional consistency",
            "Relations between dimensions"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Dimensional analysis cannot determine dimensionless numerical constants."
    },

    {
        question: "Dimensional analysis cannot distinguish between:",
        options: [
            "Mass and time",
            "Work and energy",
            "Length and time",
            "Force and velocity"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Work and energy have the same dimensions, so dimensional analysis cannot distinguish them."
    },

    {
        question: "If both sides of an equation have different dimensions, the equation is:",
        options: [
            "Dimensionally correct",
            "Dimensionally incorrect",
            "Always experimentally correct",
            "A definition"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Both sides of a physically correct equation must have the same dimensions."
    },

    {
        question: "For T = C lᵃgᵇ, dimensional analysis gives:",
        options: [
            "a = 1/2, b = 1/2",
            "a = 1/2, b = −1/2",
            "a = −1/2, b = 1/2",
            "a = 1, b = −1"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Dimensional comparison gives a = 1/2 and b = −1/2."
    },

    {
        question: "For a quantity A = x²/y, the fractional uncertainty in A is:",
        options: [
            "Δx/x + Δy/y",
            "2Δx/x + Δy/y",
            "2Δx/x − Δy/y",
            "Δx/x − 2Δy/y"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "For powers and division, percentage or fractional uncertainties combine according to the powers of the quantities."
    },

    {
        question: "If radius has 0.5% uncertainty, the percentage uncertainty in area proportional to r² is:",
        options: [
            "0.25%",
            "0.5%",
            "1.0%",
            "2.0%"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Since area is proportional to r², the percentage uncertainty is 2 × 0.5% = 1.0%."
    },


    // =========================
    // 51 - 60
    // 3 Easy | 4 Normal | 3 Difficult
    // =========================

    {
        question: "Which quantity is used in estimating the volume of an object from its mass?",
        options: [
            "Density",
            "Pressure",
            "Power",
            "Acceleration"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Volume can be estimated using mass and density because density = mass/volume."
    },

    {
        question: "What does a smaller fractional uncertainty indicate?",
        options: [
            "Greater uncertainty",
            "Greater accuracy",
            "No measurement",
            "Larger least count"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A smaller fractional or percentage uncertainty indicates greater accuracy."
    },

    {
        question: "Which of the following is a derived SI unit?",
        options: [
            "Second",
            "Metre",
            "Newton",
            "Kilogram"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Newton is a derived SI unit expressed as kg m s⁻²."
    },

    {
        question: "If three readings are 1.50 cm, 1.51 cm and 1.52 cm, their average is:",
        options: [
            "1.50 cm",
            "1.51 cm",
            "1.52 cm",
            "1.53 cm"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The average is (1.50 + 1.51 + 1.52)/3 = 1.51 cm."
    },

    {
        question: "If a quantity is measured as 35.2 ± 0.1 s, its fractional uncertainty is approximately:",
        options: [
            "0.0003",
            "0.003",
            "0.03",
            "0.3"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Fractional uncertainty = 0.1/35.2 ≈ 0.003."
    },

    {
        question: "What is the main purpose of using dimensions in an equation?",
        options: [
            "To check dimensional consistency",
            "To find the colour of an object",
            "To remove all uncertainty",
            "To measure temperature directly"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Dimensions help check whether both sides of an equation are dimensionally consistent."
    },

    {
        question: "Which statement about least count is correct?",
        options: [
            "Smaller least count generally allows greater precision",
            "Larger least count always gives greater precision",
            "Least count has no relation to precision",
            "Least count is the true value"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A smaller least count allows smaller differences to be measured and generally gives greater precision."
    },

    {
        question: "If x = (12.0 ± 0.2) cm and y = (3.0 ± 0.1) cm, what is x/y?",
        options: [
            "4.0 ± 0.1",
            "4.0 ± 0.2",
            "4.0 ± 0.3",
            "4.0 ± 0.4"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "For division, percentage uncertainties are added. The percentage uncertainty is 5%, so the absolute uncertainty is 4.0 × 0.05 = 0.2."
    },

    {
        question: "If the uncertainty in radius is 0.01 cm and radius is 2.25 cm, the percentage uncertainty in radius is approximately:",
        options: [
            "0.04%",
            "0.4%",
            "4%",
            "40%"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Percentage uncertainty = (0.01/2.25) × 100 ≈ 0.4%."
    },

    {
        question: "Which result correctly represents addition of (58.0 ± 0.05) cm and (20.5 ± 0.05) cm?",
        options: [
            "(78.5 ± 0.05) cm",
            "(78.5 ± 0.10) cm",
            "(78.5 ± 0.15) cm",
            "(78.5 ± 0.20) cm"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "For addition, absolute uncertainties are added: 0.05 + 0.05 = 0.10 cm."
    },
{
    question: "A wire has a diameter of (0.50 ± 0.02) mm. What is its percentage uncertainty?",
    options: [
        "2%",
        "4%",
        "6%",
        "8%"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Percentage uncertainty = (0.02 / 0.50) × 100 = 4%."
},

{
    question: "Which quantity has the dimensions [M L⁻¹ T⁻²]?",
    options: [
        "Force",
        "Pressure",
        "Power",
        "Energy"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Pressure is force per unit area, giving dimensions [M L⁻¹ T⁻²]."
},

{
    question: "Which statement about precision is correct?",
    options: [
        "It means closeness to the true value",
        "It means closeness of repeated measurements",
        "It means zero uncertainty",
        "It means a large least count"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Precision refers to how closely repeated measurements agree with each other."
},

{
    question: "If x = (24.0 ± 0.1) cm and y = (30.0 ± 0.2) cm, what is x + y?",
    options: [
        "(54.0 ± 0.1) cm",
        "(54.0 ± 0.2) cm",
        "(54.0 ± 0.3) cm",
        "(54.0 ± 0.4) cm"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "For addition, absolute uncertainties are added: 0.1 + 0.2 = 0.3 cm."
},

{
    question: "Which expression represents fractional uncertainty?",
    options: [
        "Measured value / absolute uncertainty",
        "Absolute uncertainty / measured value",
        "Measured value × uncertainty",
        "Measured value + uncertainty"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Fractional uncertainty is absolute uncertainty divided by the measured value."
},

{
    question: "A measurement is written as (3.06 ± 0.02) mm. What is the lower limit?",
    options: [
        "3.02 mm",
        "3.04 mm",
        "3.06 mm",
        "3.08 mm"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Lower limit = 3.06 − 0.02 = 3.04 mm."
},

{
    question: "For multiplication of measured quantities, which uncertainties are added?",
    options: [
        "Absolute uncertainties",
        "Percentage uncertainties",
        "Units",
        "Measured values"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "For multiplication or division, percentage uncertainties are added."
},

{
    question: "The dimensions of universal gravitational constant G are:",
    options: [
        "[M⁻¹ L³ T⁻²]",
        "[M L³ T⁻²]",
        "[M⁻¹ L² T⁻²]",
        "[M L⁻¹ T⁻²]"
    ],
    answer: 0,
    difficulty: "Difficult",
    explanation: "From F = Gm₁m₂/r², the dimensions of G are [M⁻¹ L³ T⁻²]."
},

{
    question: "Which is a limitation of dimensional analysis?",
    options: [
        "It checks dimensional consistency",
        "It can derive some physical relations",
        "It cannot determine dimensionless numerical constants",
        "It compares dimensions on both sides"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Dimensional analysis cannot determine dimensionless numerical constants."
},

{
    question: "For A = x²/y, the fractional uncertainty in A is:",
    options: [
        "Δx/x + Δy/y",
        "2Δx/x + Δy/y",
        "2Δx/x − Δy/y",
        "Δx/x − 2Δy/y"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "For powers and division, fractional uncertainties combine according to the powers of the quantities."
},
{
    question: "Which quantity is dimensionless?",
    options: [
        "Velocity",
        "Density",
        "Strain",
        "Force"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Strain is the ratio of two lengths, so it has no dimensions."
},

{
    question: "Which SI unit is a derived unit?",
    options: [
        "Metre",
        "Second",
        "Kilogram",
        "Newton"
    ],
    answer: 3,
    difficulty: "Easy",
    explanation: "Newton is a derived SI unit equal to kg m s⁻²."
},

{
    question: "If a measured value is close to the true value, the measurement is:",
    options: [
        "Precise",
        "Accurate",
        "Uncertain",
        "Random"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Accuracy describes how close a measurement is to the true value."
},

{
    question: "If length = (5.0 ± 0.1) m, its percentage uncertainty is:",
    options: [
        "0.5%",
        "1%",
        "2%",
        "5%"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Percentage uncertainty = (0.1 / 5.0) × 100 = 2%."
},

{
    question: "Which type of error tends to vary unpredictably between measurements?",
    options: [
        "Systematic error",
        "Random error",
        "Zero error",
        "Instrumental constant"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Random errors vary unpredictably from one measurement to another."
},

{
    question: "What is the SI unit of pressure?",
    options: [
        "Joule",
        "Watt",
        "Pascal",
        "Newton"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Pressure is measured in pascal (Pa), which is N m⁻²."
},

{
    question: "Which quantity has dimensions [M L² T⁻²]?",
    options: [
        "Power",
        "Energy",
        "Pressure",
        "Momentum"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Energy has dimensions [M L² T⁻²]."
},

{
    question: "The dimensions of Planck's constant h are:",
    options: [
        "[M L² T⁻¹]",
        "[M L T⁻²]",
        "[M L² T⁻²]",
        "[M L⁻¹ T⁻¹]"
    ],
    answer: 0,
    difficulty: "Difficult",
    explanation: "Since h has the unit joule-second, its dimensions are [M L² T⁻¹]."
},

{
    question: "Which equation is dimensionally consistent?",
    options: [
        "v = u + at",
        "v = u + at²",
        "s = ut + at",
        "F = ma²"
    ],
    answer: 0,
    difficulty: "Difficult",
    explanation: "Both v, u and at have the same dimensions [L T⁻¹]."
},

{
    question: "If the radius of a circle has a 2% uncertainty, the percentage uncertainty in its area is:",
    options: [
        "2%",
        "4%",
        "6%",
        "8%"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Area is proportional to r², so percentage uncertainty is 2 × 2% = 4%."
},
];
localStorage.setItem("mcqQuestions", JSON.stringify(questions));


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

    progressCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percentage =
        (currentQuestion / questions.length) * 100;

    progressText.textContent =
        `${Math.round(percentage)}% Complete`;

    progressFill.style.width =
        `${percentage}%`;


    optionsContainer.innerHTML = "";


    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;


        button.disabled = true;


        if (index === q.answer) {

            button.style.backgroundColor = "#dcfce7";
            button.style.borderColor = "#22c55e";
            button.style.color = "#166534";
            button.style.fontWeight = "bold";

            button.textContent =
                `✓ ${String.fromCharCode(65 + index)}. ${option}`;
        }


        optionsContainer.appendChild(button);
    });


    feedback.innerHTML = `
        <strong>Correct Answer ✓</strong>
        <p>${q.explanation}</p>
    `;

    feedback.style.display = "block";

    nextButton.style.display = "block";
}

previousButton.addEventListener("click", () => {

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }

});
nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showCompletion();
    }
});


function showCompletion() {

    questionNumber.textContent = "COMPLETED";

    questionText.textContent =
        "Preparation Complete!";

    optionsContainer.innerHTML = "";

    feedback.innerHTML = `
        <strong>All questions revised ✓</strong>
        <p>
            You have completed the preparation for this chapter.
        </p>
    `;

    feedback.style.display = "block";

    nextButton.style.display = "none";

    progressFill.style.width = "100%";

    progressCount.textContent =
        `Completed ${questions.length} of ${questions.length}`;

    progressText.textContent =
        "100% Complete";
}


loadQuestion();