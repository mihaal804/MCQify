const questions = [

    // =========================
    // EASY — 24 MCQs
    // =========================

    {
        question: "Electric current is defined as the rate of flow of:",
        options: [
            "Energy",
            "Charge",
            "Voltage",
            "Resistance"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Electric current is the rate of flow of electric charge."
    },

    {
        question: "The SI unit of electric current is:",
        options: [
            "Volt",
            "Ohm",
            "Ampere",
            "Coulomb"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The SI unit of electric current is ampere (A)."
    },

    {
        question: "The SI unit of resistance is:",
        options: [
            "Volt",
            "Ohm",
            "Ampere",
            "Watt"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Electrical resistance is measured in ohms (Ω)."
    },

    {
        question: "Ohm's law is represented by:",
        options: [
            "V = IR",
            "P = VI",
            "Q = It",
            "R = VI"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Ohm's law states that V = IR for an ohmic conductor."
    },

    {
        question: "The SI unit of potential difference is:",
        options: [
            "Ampere",
            "Coulomb",
            "Volt",
            "Ohm"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Potential difference is measured in volts (V)."
    },

    {
        question: "One ampere is equal to:",
        options: [
            "1 C/s",
            "1 J/C",
            "1 J/s",
            "1 V/C"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Current I = Q/t, so one ampere equals one coulomb per second."
    },

    {
        question: "A device used to measure current is called:",
        options: [
            "Voltmeter",
            "Ammeter",
            "Galvanometer",
            "Potentiometer"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An ammeter is used to measure electric current."
    },

    {
        question: "A voltmeter is connected in:",
        options: [
            "Series",
            "Parallel",
            "Either series or parallel",
            "Open circuit only"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A voltmeter measures potential difference across a component, so it is connected in parallel."
    },

    {
        question: "An ideal ammeter has:",
        options: [
            "Very high resistance",
            "Very low resistance",
            "Infinite voltage",
            "Zero current"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An ideal ammeter has zero or extremely low resistance."
    },

    {
        question: "An ideal voltmeter has:",
        options: [
            "Zero resistance",
            "Very low resistance",
            "Very high resistance",
            "Negative resistance"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "An ideal voltmeter has infinite resistance so it draws negligible current."
    },

    {
        question: "The opposition offered to the flow of electric charge is called:",
        options: [
            "Current",
            "Resistance",
            "Power",
            "Charge"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Resistance opposes the flow of electric current."
    },

    {
        question: "The resistance of a wire depends on its:",
        options: [
            "Length and area",
            "Mass only",
            "Charge only",
            "Voltage only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Resistance depends on length, cross-sectional area, material, and temperature."
    },

    {
        question: "The resistance of a wire increases when its length is:",
        options: [
            "Decreased",
            "Increased",
            "Made zero",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Resistance is directly proportional to the length of a uniform wire."
    },

    {
        question: "For a uniform wire, increasing its cross-sectional area generally:",
        options: [
            "Increases resistance",
            "Decreases resistance",
            "Does not affect resistance",
            "Makes current zero"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Resistance is inversely proportional to cross-sectional area."
    },

    {
        question: "The reciprocal of resistance is called:",
        options: [
            "Resistivity",
            "Conductance",
            "Current",
            "Potential"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Conductance G is the reciprocal of resistance: G = 1/R."
    },

    {
        question: "The SI unit of resistivity is:",
        options: [
            "Ω",
            "Ω m",
            "Ω/m",
            "m/Ω"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The SI unit of resistivity is ohm metre (Ω m)."
    },

    {
        question: "Electrical power is given by:",
        options: [
            "P = VI",
            "P = V/I",
            "P = I/V",
            "P = R/V"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Electrical power is the rate of electrical energy transfer: P = VI."
    },

    {
        question: "The SI unit of electrical power is:",
        options: [
            "Joule",
            "Watt",
            "Volt",
            "Coulomb"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Electrical power is measured in watts (W)."
    },

    {
        question: "Electrical energy consumed is commonly measured commercially in:",
        options: [
            "Watt",
            "Kilowatt-hour",
            "Volt",
            "Ampere"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Electrical energy consumed by households is commonly measured in kilowatt-hours (kWh)."
    },

    {
        question: "A source that maintains potential difference in a circuit is called:",
        options: [
            "Resistor",
            "Source of emf",
            "Ammeter",
            "Switch"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A source of emf supplies energy to charges and maintains potential difference."
    },

    {
        question: "The energy supplied per unit charge by a source is called:",
        options: [
            "Resistance",
            "Current",
            "EMF",
            "Power"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "EMF is the energy supplied by a source per unit charge."
    },

    {
        question: "In a series circuit, the current through each resistor is:",
        options: [
            "Different",
            "The same",
            "Always zero",
            "Infinite"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The same current flows through all components connected in series."
    },

    {
        question: "In a parallel circuit, the potential difference across parallel branches is:",
        options: [
            "The same",
            "Always zero",
            "Different in every case",
            "Infinite"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "All parallel branches are connected across the same two points, so they have the same potential difference."
    },

    {
        question: "Kirchhoff's current law is based on conservation of:",
        options: [
            "Energy",
            "Charge",
            "Momentum",
            "Mass"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Kirchhoff's current law follows conservation of electric charge."
    },


    // =========================
    // NORMAL — 32 MCQs
    // =========================

    {
        question: "If 20 C of charge flows through a conductor in 5 s, the current is:",
        options: [
            "2 A",
            "4 A",
            "5 A",
            "10 A"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "I = Q/t = 20/5 = 4 A."
    },

    {
        question: "A 6 V potential difference is applied across a 3 Ω resistor. The current is:",
        options: [
            "1 A",
            "2 A",
            "3 A",
            "18 A"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "I = V/R = 6/3 = 2 A."
    },

    {
        question: "A resistor carries 2 A current when connected to 10 V. Its resistance is:",
        options: [
            "2 Ω",
            "5 Ω",
            "10 Ω",
            "20 Ω"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "R = V/I = 10/2 = 5 Ω."
    },

    {
        question: "If the voltage across an ohmic resistor is doubled, its current becomes:",
        options: [
            "Half",
            "Double",
            "Four times",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For constant resistance, I = V/R, so doubling V doubles I."
    },

    {
        question: "Two resistors of 4 Ω and 6 Ω are connected in series. Their equivalent resistance is:",
        options: [
            "2 Ω",
            "10 Ω",
            "24 Ω",
            "1.5 Ω"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Series resistances add: R = 4 + 6 = 10 Ω."
    },

    {
        question: "Two resistors of 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is:",
        options: [
            "9 Ω",
            "3 Ω",
            "2 Ω",
            "18 Ω"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω."
    },

    {
        question: "Three identical resistors of resistance R are connected in series. Equivalent resistance is:",
        options: [
            "R/3",
            "R",
            "2R",
            "3R"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "For series connection, resistances add, giving 3R."
    },

    {
        question: "Three identical resistors of resistance R are connected in parallel. Equivalent resistance is:",
        options: [
            "3R",
            "R",
            "R/3",
            "R²"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "For three equal resistors in parallel, equivalent resistance is R/3."
    },

    {
        question: "A wire has resistance R. If its length is doubled while area remains constant, resistance becomes:",
        options: [
            "R/2",
            "R",
            "2R",
            "4R"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "R = ρL/A, so doubling L doubles the resistance."
    },

    {
        question: "A wire has resistance R. If its cross-sectional area is doubled, its resistance becomes:",
        options: [
            "R/2",
            "R",
            "2R",
            "4R"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Resistance is inversely proportional to cross-sectional area."
    },

    {
        question: "For a wire, resistivity mainly depends on:",
        options: [
            "Its length",
            "Its area",
            "Its material and temperature",
            "The current only"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Resistivity is a property of the material and also depends on temperature."
    },

    {
        question: "The slope of a V-I graph for an ohmic resistor represents:",
        options: [
            "Current",
            "Resistance",
            "Power",
            "Charge"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "From V = IR, the slope of V versus I is resistance."
    },

    {
        question: "A 5 Ω resistor carries 2 A current. Its power is:",
        options: [
            "5 W",
            "10 W",
            "20 W",
            "25 W"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "P = I²R = (2)²(5) = 20 W."
    },

    {
        question: "A 100 W bulb operates for 5 hours. Its energy consumption is:",
        options: [
            "0.5 kWh",
            "5 kWh",
            "20 kWh",
            "500 kWh"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Energy = Power × time = 0.1 kW × 5 h = 0.5 kWh."
    },

    {
        question: "If resistance is constant, electrical power can also be written as:",
        options: [
            "P = I²R",
            "P = IR²",
            "P = R/I",
            "P = I/R"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Using V = IR in P = VI gives P = I²R."
    },

    {
        question: "If current through a fixed resistor is doubled, its power becomes:",
        options: [
            "Half",
            "Double",
            "Four times",
            "Eight times"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "P = I²R, so doubling current makes power four times larger."
    },

    {
        question: "A source has emf 12 V and internal resistance 1 Ω. If current is 2 A, terminal voltage is:",
        options: [
            "10 V",
            "11 V",
            "12 V",
            "14 V"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Terminal voltage V = E - Ir = 12 - (2)(1) = 10 V."
    },

    {
        question: "When no current is drawn from a cell, its terminal voltage is approximately equal to its:",
        options: [
            "Resistance",
            "EMF",
            "Current",
            "Power"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "With no current, there is no internal voltage drop, so terminal voltage equals emf."
    },

    {
        question: "The internal resistance of a real cell causes:",
        options: [
            "A voltage drop inside the cell",
            "Infinite current",
            "Zero emf",
            "Zero charge"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Current through internal resistance produces an internal voltage drop."
    },

    {
        question: "Kirchhoff's voltage law is based on conservation of:",
        options: [
            "Charge",
            "Energy",
            "Mass",
            "Current"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Kirchhoff's voltage law follows conservation of energy around a closed loop."
    },

    {
        question: "At a junction, the sum of currents entering must equal the sum of currents:",
        options: [
            "Stored",
            "Leaving",
            "Generated",
            "Destroyed"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Kirchhoff's current law states that charge cannot accumulate at an ideal junction."
    },

    {
        question: "Two batteries connected in series with their emfs aiding each other have total emf equal to:",
        options: [
            "Their difference",
            "Their sum",
            "Zero",
            "Their product"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "When sources are connected in series aiding, their emfs add."
    },

    {
        question: "If two identical cells are connected in series aiding, the total emf is:",
        options: [
            "E/2",
            "E",
            "2E",
            "E²"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Two identical cells in series aiding give total emf 2E."
    },

    {
        question: "A potentiometer measures potential difference by:",
        options: [
            "Drawing large current from the source",
            "Balancing potential differences",
            "Increasing resistance continuously",
            "Measuring charge directly"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A potentiometer uses a null method by balancing potential differences."
    },

    {
        question: "At the balance point of a potentiometer, the galvanometer shows:",
        options: [
            "Maximum deflection",
            "Zero deflection",
            "Infinite current",
            "Constant heating"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "At balance, no current flows through the galvanometer, so it shows zero deflection."
    },

    {
        question: "A potentiometer is generally more accurate than a voltmeter for measuring emf because it:",
        options: [
            "Uses more current",
            "Uses a null method",
            "Has zero resistance",
            "Produces emf"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The null method allows emf to be measured without drawing current from the source under test."
    },

    {
        question: "For two resistors in parallel, the equivalent resistance is always:",
        options: [
            "Greater than both",
            "Equal to the larger",
            "Less than the smaller",
            "Equal to their sum"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Parallel equivalent resistance is always less than the smallest individual resistance."
    },

    {
        question: "For resistors in series, the equivalent resistance is always:",
        options: [
            "Less than the smallest resistor",
            "Equal to zero",
            "Greater than each individual resistance",
            "Equal to the smallest resistor"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Series resistances add, so the equivalent is greater than every individual resistance."
    },

    {
        question: "A 12 V battery supplies 3 A current. The power delivered is:",
        options: [
            "4 W",
            "15 W",
            "36 W",
            "48 W"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "P = VI = 12 × 3 = 36 W."
    },

    {
        question: "A conductor obeys Ohm's law when its resistance remains:",
        options: [
            "Constant under constant physical conditions",
            "Zero",
            "Infinite",
            "Equal to current"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "An ohmic conductor has a constant resistance when physical conditions such as temperature remain constant."
    },

    {
        question: "The drift of free electrons in a conductor is responsible for:",
        options: [
            "Electric current",
            "Electric charge creation",
            "Mass creation",
            "Magnetic poles only"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The directed drift of free charge carriers produces electric current."
    },

    {
    question: "A current of 5 A flows through a conductor for 4 seconds. The charge transferred is:",
    options: [
        "1.25 C",
        "9 C",
        "20 C",
        "25 C"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Q = It = 5 × 4 = 20 C."
},


    // =========================
    // DIFFICULT — 24 MCQs
    // =========================

    {
        question: "A 4 Ω resistor is connected to 12 V. The current through it is:",
        options: [
            "2 A",
            "3 A",
            "4 A",
            "48 A"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "I = V/R = 12/4 = 3 A."
    },

    {
        question: "A 6 Ω resistor carries 3 A current. The potential difference across it is:",
        options: [
            "2 V",
            "9 V",
            "18 V",
            "36 V"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "V = IR = 3 × 6 = 18 V."
    },

    {
        question: "A 10 Ω resistor carries 2 A current for 5 s. The electrical energy converted to heat is:",
        options: [
            "100 J",
            "200 J",
            "400 J",
            "500 J"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "E = I²Rt = (2)²(10)(5) = 200 J."
    },

    {
        question: "Two resistors of 12 Ω and 4 Ω are connected in parallel. Their equivalent resistance is:",
        options: [
            "3 Ω",
            "4 Ω",
            "8 Ω",
            "16 Ω"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "1/R = 1/12 + 1/4 = 4/12 = 1/3, so R = 3 Ω."
    },

    {
        question: "A 2 Ω and 4 Ω resistor are connected in series to a 12 V source. The current is:",
        options: [
            "1 A",
            "2 A",
            "3 A",
            "6 A"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Total resistance = 2 + 4 = 6 Ω. Therefore I = 12/6 = 2 A."
    },

    {
        question: "In the previous circuit, the potential difference across the 4 Ω resistor is:",
        options: [
            "2 V",
            "4 V",
            "8 V",
            "12 V"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "V = IR = 2 × 4 = 8 V."
    },

    {
        question: "A wire of resistance 8 Ω is cut into two equal lengths. The resistance of each piece is:",
        options: [
            "2 Ω",
            "4 Ω",
            "8 Ω",
            "16 Ω"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Resistance is proportional to length. Halving the length halves the resistance."
    },

    {
        question: "A wire of resistance 8 Ω is stretched to twice its original length while its volume remains constant. Its new resistance is:",
        options: [
            "4 Ω",
            "8 Ω",
            "16 Ω",
            "32 Ω"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Doubling length at constant volume halves area, so R ∝ L/A gives a fourfold increase: 32 Ω."
    },

    {
        question: "A 20 V source is connected to a 5 Ω resistor. The electrical power is:",
        options: [
            "4 W",
            "20 W",
            "80 W",
            "100 W"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "P = V²/R = 20²/5 = 80 W."
    },

    {
        question: "A 60 W bulb operates at 120 V. Its operating current is:",
        options: [
            "0.25 A",
            "0.5 A",
            "1 A",
            "2 A"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "I = P/V = 60/120 = 0.5 A."
    },

    {
        question: "A 100 W appliance is used for 3 hours. Energy consumed is:",
        options: [
            "0.03 kWh",
            "0.3 kWh",
            "3 kWh",
            "30 kWh"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Energy = 0.1 kW × 3 h = 0.3 kWh."
    },

    {
        question: "A cell has emf 10 V and internal resistance 2 Ω. If 2 A current flows, its terminal voltage is:",
        options: [
            "4 V",
            "6 V",
            "8 V",
            "12 V"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "V = E - Ir = 10 - (2)(2) = 6 V."
    },

    {
        question: "A cell of emf 12 V and internal resistance 1 Ω supplies 3 A. The terminal voltage is:",
        options: [
            "7 V",
            "8 V",
            "9 V",
            "15 V"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "V = E - Ir = 12 - 3 = 9 V."
    },

    {
        question: "A source has emf 24 V and internal resistance 2 Ω. When connected to a 10 Ω load, current is:",
        options: [
            "1 A",
            "2 A",
            "4 A",
            "12 A"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "I = E/(R+r) = 24/(10+2) = 2 A."
    },

    {
        question: "For the circuit above, the voltage across the 10 Ω load is:",
        options: [
            "10 V",
            "20 V",
            "22 V",
            "24 V"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "V = IR = 2 × 10 = 20 V."
    },

    {
        question: "Two identical 12 V cells are connected in series aiding. Their total emf is:",
        options: [
            "6 V",
            "12 V",
            "24 V",
            "144 V"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Series aiding emfs add: 12 + 12 = 24 V."
    },

    {
        question: "Two 6 Ω resistors are connected in parallel across 12 V. The total current supplied is:",
        options: [
            "1 A",
            "2 A",
            "4 A",
            "6 A"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Equivalent resistance is 3 Ω, so total current I = 12/3 = 4 A."
    },

    {
        question: "Two 6 Ω resistors are connected in parallel across 12 V. Current through each resistor is:",
        options: [
            "1 A",
            "2 A",
            "4 A",
            "6 A"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Each resistor has 12 V across it, so I = 12/6 = 2 A."
    },

    {
        question: "A 3 Ω and 6 Ω resistor are connected in parallel. If total current is 6 A, the voltage across the combination is:",
        options: [
            "6 V",
            "9 V",
            "12 V",
            "18 V"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Equivalent resistance = 2 Ω. Therefore V = IR = 6 × 2 = 12 V."
    },

    {
        question: "A potentiometer wire has potential gradient 0.02 V/cm. A balance length of 50 cm corresponds to an emf of:",
        options: [
            "0.1 V",
            "0.5 V",
            "1.0 V",
            "2.0 V"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "E = potential gradient × length = 0.02 × 50 = 1.0 V."
    },

    {
        question: "Two potential differences are balanced by potentiometer lengths 40 cm and 60 cm. Their ratio is:",
        options: [
            "1:2",
            "2:3",
            "3:2",
            "4:3"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "For the same potential gradient, potential difference is proportional to balance length. Ratio = 40:60 = 2:3."
    },

    {
        question: "A current of 4 A flows through a 5 Ω resistor. The power dissipated is:",
        options: [
            "20 W",
            "40 W",
            "80 W",
            "100 W"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "P = I²R = 4² × 5 = 80 W."
    },

    {
        question: "A 10 Ω resistor dissipates 90 W. Its current is:",
        options: [
            "2 A",
            "3 A",
            "6 A",
            "9 A"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "P = I²R, so I = √(90/10) = √9 = 3 A."
    },

    {
        question: "A circuit has a 12 V source and total resistance 4 Ω. The charge passing through the circuit in 10 s is:",
        options: [
            "10 C",
            "20 C",
            "30 C",
            "40 C"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "I = V/R = 12/4 = 3 A. Charge Q = It = 3 × 10 = 30 C."
    }

];


// Save Chapter 11 questions
localStorage.setItem(
    "mcqQuestionsChapter11",
    JSON.stringify(questions)
);


// =========================
// PREPARATION PAGE LOGIC
// =========================

const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");

let currentIndex = 0;

function loadQuestion() {

    const question = questions[currentIndex];

    document.querySelector(".question-number").textContent =
        `QUESTION ${String(currentIndex + 1).padStart(2, "0")}`;

    document.querySelector(".mcq-card h2").textContent =
        question.question;

    const optionsContainer = document.querySelector(".options");

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        if (index === question.answer) {
            button.classList.add("correct");
        }

        optionsContainer.appendChild(button);
    });

    document.querySelector(".feedback").innerHTML =
        `<strong>Correct!</strong><p>${question.explanation}</p>`;

    const progressText =
        document.querySelector(".progress-top span:first-child");

    const percentageText =
        document.querySelector(".progress-top span:last-child");

    const progressFill =
        document.querySelector(".progress-fill");

    progressText.textContent =
        `Question ${currentIndex + 1} of ${questions.length}`;

    const percentage =
        Math.round(((currentIndex + 1) / questions.length) * 100);

    percentageText.textContent =
        `${percentage}% Complete`;

    progressFill.style.width =
        `${percentage}%`;

    previousButton.disabled =
        currentIndex === 0;

    nextButton.disabled =
        currentIndex === questions.length - 1;
}


nextButton.addEventListener("click", () => {

    if (currentIndex < questions.length - 1) {

        currentIndex++;

        loadQuestion();
    }
});


previousButton.addEventListener("click", () => {

    if (currentIndex > 0) {

        currentIndex--;

        loadQuestion();
    }
});


loadQuestion();