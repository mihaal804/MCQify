const questions = [

    // =========================
    // EASY — 24 MCQs
    // =========================

    {
        question: "Two systems are in thermal equilibrium when they have the same:",
        options: [
            "Pressure",
            "Temperature",
            "Volume",
            "Mass"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Thermal equilibrium means both systems are at the same temperature, so no net heat flows between them."
    },

    {
        question: "The SI unit of heat energy is:",
        options: [
            "Kelvin",
            "Pascal",
            "Joule",
            "Watt"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Heat is a form of energy, and its SI unit is the joule."
    },

    {
        question: "Temperature is related to the average molecular:",
        options: [
            "Potential energy",
            "Kinetic energy",
            "Mass",
            "Volume"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The chapter relates temperature to the average kinetic energy of molecules."
    },

    {
        question: "The sum of molecular kinetic and potential energies is called:",
        options: [
            "Heat",
            "Temperature",
            "Internal energy",
            "Work"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Internal energy is the sum of the molecular forms of energy in a substance."
    },

    {
        question: "For an ideal gas, internal energy is directly proportional to:",
        options: [
            "Pressure only",
            "Volume only",
            "Temperature",
            "Density only"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "For an ideal gas, internal energy depends on temperature and is directly proportional to it."
    },

    {
        question: "The universal gas constant R is approximately:",
        options: [
            "1.38 × 10⁻²³ J K⁻¹",
            "8.314 J mol⁻¹ K⁻¹",
            "9.8 J kg⁻¹",
            "6.02 × 10²³ J"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The chapter gives R = 8.314 J mol⁻¹ K⁻¹."
    },

    {
        question: "The Boltzmann constant is approximately:",
        options: [
            "1.38 × 10⁻²³ J K⁻¹",
            "8.314 J mol⁻¹ K⁻¹",
            "6.02 × 10²³ J K⁻¹",
            "9.8 J K⁻¹"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The chapter gives k ≈ 1.3806 × 10⁻²³ J K⁻¹."
    },

    {
        question: "The ideal-gas equation is:",
        options: [
            "PV = nRT",
            "P = nVRT",
            "PV = nR/T",
            "P/V = nRT"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "For an ideal gas, pressure, volume, amount and temperature are related by PV = nRT."
    },

    {
        question: "Gas molecules in the kinetic theory are assumed to move in:",
        options: [
            "Circular paths",
            "Random motion",
            "Only straight paths",
            "Fixed positions"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The kinetic theory assumes gas molecules are in random motion."
    },

    {
        question: "At constant pressure, work done by a gas is given by:",
        options: [
            "W = PΔV",
            "W = VΔP",
            "W = PT",
            "W = P/V"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "For constant pressure, pressure multiplied by the change in volume gives the work done."
    },

    {
        question: "When a gas expands, the work done by the gas is considered:",
        options: [
            "Positive",
            "Negative",
            "Always zero",
            "Undefined"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Expansion gives ΔV > 0, so the work done by the gas is positive in the chapter's convention."
    },

    {
        question: "If the volume of a gas remains constant, its pressure-volume work is:",
        options: [
            "Maximum",
            "Negative",
            "Zero",
            "Infinite"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "W = PΔV, and ΔV is zero when volume is constant."
    },

    {
        question: "Boyle's law applies at constant:",
        options: [
            "Pressure",
            "Temperature",
            "Volume",
            "Mass and temperature both change"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "For a fixed amount of ideal gas at constant temperature, pressure and volume are inversely related."
    },

    {
        question: "Charles's law relates volume and temperature at constant:",
        options: [
            "Pressure",
            "Volume",
            "Mass only",
            "Density"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "At constant pressure, the volume of a given amount of gas varies with absolute temperature."
    },

    {
        question: "Gay-Lussac's law relates pressure and temperature at constant:",
        options: [
            "Pressure",
            "Volume",
            "Temperature",
            "Mass only"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "At constant volume, gas pressure varies with absolute temperature."
    },

    {
        question: "The first law of thermodynamics is based on conservation of:",
        options: [
            "Momentum",
            "Charge",
            "Energy",
            "Mass only"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The first law applies conservation of energy to thermodynamic processes."
    },

    {
        question: "An isothermal process has constant:",
        options: [
            "Pressure",
            "Volume",
            "Temperature",
            "Entropy only"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "In an isothermal process, temperature remains constant."
    },

    {
        question: "In an adiabatic process, the heat transferred is:",
        options: [
            "Maximum",
            "Zero",
            "Always negative",
            "Always positive"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An adiabatic process involves no heat transfer between the system and surroundings."
    },

    {
        question: "An isochoric process occurs at constant:",
        options: [
            "Pressure",
            "Temperature",
            "Volume",
            "Work"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Isochoric means constant volume."
    },

    {
        question: "An isobaric process occurs at constant:",
        options: [
            "Pressure",
            "Volume",
            "Temperature",
            "Internal energy"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Isobaric means constant pressure."
    },

    {
        question: "A heat engine converts heat energy into:",
        options: [
            "Mass",
            "Mechanical work",
            "Temperature only",
            "Pressure only"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A heat engine is a device that converts heat energy into mechanical work."
    },

    {
        question: "A heat engine requires a hot reservoir and a:",
        options: [
            "Vacuum reservoir",
            "Cold reservoir",
            "Mass reservoir",
            "Pressure reservoir"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The chapter describes hot and cold reservoirs as necessary parts of a heat engine."
    },

    {
        question: "A Carnot engine is an ideal engine operating on a:",
        options: [
            "Carnot cycle",
            "Single isochoric process",
            "Free-fall cycle",
            "Constant-pressure cycle only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A Carnot engine operates on the ideal reversible Carnot cycle."
    },

    {
        question: "Entropy is associated with the degree of:",
        options: [
            "Pressure",
            "Disorder or randomness",
            "Mass",
            "Volume only"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The chapter describes entropy as a measure of disorder or randomness in a system."
    },


    // =========================
    // NORMAL — 32 MCQs
    // =========================

    {
        question: "A sealed container is heated but its mass cannot cross the boundary. It is a:",
        options: [
            "Open system",
            "Closed system",
            "Isolated system",
            "Free system"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A closed system can exchange energy but not mass with its surroundings."
    },

    {
        question: "A thermos flask that ideally transfers neither heat nor mass is an example of:",
        options: [
            "Open system",
            "Closed system",
            "Isolated system",
            "Isobaric system"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "An isolated system has no transfer of mass or heat energy across its boundary."
    },

    {
        question: "For a real gas to behave more like an ideal gas, the conditions should be:",
        options: [
            "High pressure and low temperature",
            "Low pressure and high temperature",
            "High pressure and high temperature",
            "Low pressure and low temperature"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Low pressure and high temperature increase molecular separation and reduce intermolecular effects."
    },

    {
        question: "The work done during constant-pressure expansion is represented by the area under a:",
        options: [
            "T-V graph",
            "P-V graph",
            "P-T graph",
            "T-P graph only"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For pressure-volume work, the area under the P-V graph represents work done."
    },

    {
        question: "A gas is compressed at constant pressure. Its change in volume is:",
        options: [
            "Positive",
            "Negative",
            "Zero",
            "Infinite"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Compression reduces volume, so ΔV = Vfinal − Vinitial is negative."
    },

    {
        question: "If a gas expands from 2 m³ to 5 m³ at 4 Pa, the work done is:",
        options: [
            "8 J",
            "12 J",
            "20 J",
            "28 J"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "W = PΔV = 4(5−2) = 12 J."
    },

    {
        question: "For an ideal gas undergoing an isothermal process, its internal energy change is:",
        options: [
            "Positive",
            "Negative",
            "Zero",
            "Equal to pressure"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "For an ideal gas, internal energy depends on temperature; constant temperature gives ΔU = 0."
    },

    {
        question: "During adiabatic expansion of a gas, its temperature generally:",
        options: [
            "Increases",
            "Decreases",
            "Remains fixed",
            "Becomes zero"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The gas does work without receiving heat, so its internal energy and temperature decrease."
    },

    {
        question: "During rapid adiabatic compression, the temperature of a gas generally:",
        options: [
            "Decreases",
            "Increases",
            "Remains zero",
            "Cannot change"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Work is done on the gas, increasing its internal energy and temperature."
    },

    {
        question: "In an isochoric process, if heat is supplied to the gas, the heat mainly changes its:",
        options: [
            "Volume",
            "Internal energy",
            "Mass",
            "External pressure only"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "At constant volume W = 0, so the supplied heat changes internal energy."
    },

    {
        question: "The P-V graph of an isochoric process is a:",
        options: [
            "Horizontal line",
            "Vertical line",
            "Circle",
            "Curve through the origin"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Volume is constant, so the process is represented by a vertical line on a P-V graph."
    },

    {
        question: "The P-V graph of an isobaric process is a:",
        options: [
            "Vertical line",
            "Horizontal line",
            "Circle",
            "Parabola"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Pressure remains constant, giving a horizontal line on a P-V graph."
    },

    {
        question: "For an isochoric process, the work done is zero because:",
        options: [
            "Pressure is zero",
            "Temperature is zero",
            "ΔV is zero",
            "Heat is zero"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Since W = PΔV and ΔV = 0, no pressure-volume work is done."
    },

    {
        question: "If 200 J of heat is added to a system and the system does 50 J of work, then ΔU is:",
        options: [
            "150 J",
            "250 J",
            "−150 J",
            "−250 J"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Using Q = ΔU + W, ΔU = 200 − 50 = 150 J."
    },

    {
        question: "If a system loses 150 J of heat while 25 J of work is done on it, its internal energy change is:",
        options: [
            "−175 J",
            "−125 J",
            "125 J",
            "175 J"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "With Q = −150 J and work by the system W = −25 J, ΔU = Q − W = −125 J."
    },

    {
        question: "In a cyclic process, the net change in internal energy is:",
        options: [
            "Positive",
            "Negative",
            "Zero",
            "Equal to heat input"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The system returns to its initial state, so the state function internal energy has ΔU = 0."
    },

    {
        question: "Which process is represented by a constant-temperature path on a P-V diagram?",
        options: [
            "Isothermal",
            "Isochoric",
            "Isobaric",
            "Adiabatic only"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "An isothermal process occurs at constant temperature."
    },

    {
        question: "Which process is ideally carried out rapidly to minimize heat transfer?",
        options: [
            "Isothermal",
            "Adiabatic",
            "Isobaric",
            "Isochoric"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The chapter notes that adiabatic processes are generally rapid, reducing heat exchange with surroundings."
    },

    {
        question: "A heat engine rejects part of the absorbed heat because:",
        options: [
            "All heat can always become work",
            "A cold reservoir is required",
            "Pressure must be zero",
            "The working substance has no energy"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The second law requires heat engines to operate with a hot and cold reservoir; not all input heat becomes work."
    },

    {
        question: "The useful work of a heat engine is equal to:",
        options: [
            "Q₁ + Q₂",
            "Q₁ − Q₂",
            "Q₂ − Q₁ always",
            "Q₁Q₂"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For a cyclic heat engine, work output equals heat absorbed from the hot reservoir minus heat rejected to the cold reservoir."
    },

    {
        question: "A reversible process is one that can be reversed without:",
        options: [
            "Changing temperature",
            "Changing the surroundings",
            "Using a gas",
            "Doing work"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A reversible process can be retraced in reverse order without causing a change to the surroundings."
    },

    {
        question: "Which process is irreversible according to the chapter?",
        options: [
            "Slow water-ice transformation",
            "Frictional dissipation",
            "Slow phase change",
            "Ideal reversible cycle"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Processes involving friction or energy dissipation are irreversible."
    },

    {
        question: "A cyclic process is one in which the system:",
        options: [
            "Has constant pressure",
            "Returns to its initial state",
            "Has constant volume",
            "Has zero temperature"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A cycle is a succession of processes that brings the system back to its initial condition."
    },

    {
        question: "According to the second law, heat naturally flows from:",
        options: [
            "Cold to hot",
            "Hot to cold",
            "Low pressure to high pressure only",
            "Vacuum to matter"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The chapter states that natural heat flow is from hotter bodies to colder bodies."
    },

    {
        question: "According to the second law, a heat engine cannot convert all heat from a single reservoir completely into:",
        options: [
            "Work",
            "Internal energy",
            "Temperature",
            "Pressure"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The second law states that heat from a single reservoir cannot be completely converted into work."
    },

    {
        question: "According to Clausius's statement, heat cannot flow from cold to hot without:",
        options: [
            "Mass transfer",
            "Work input",
            "A vacuum",
            "Constant volume"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Moving heat from a colder body to a hotter body requires work."
    },

    {
        question: "During isothermal expansion in a Carnot engine, the gas:",
        options: [
            "Absorbs heat from the hot reservoir",
            "Rejects all heat",
            "Has constant volume",
            "Is compressed"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The gas expands isothermally while absorbing heat from the hot reservoir."
    },

    {
        question: "During adiabatic expansion in a Carnot engine, heat transfer is:",
        options: [
            "Into the gas",
            "Out of the gas",
            "Zero",
            "Infinite"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The cylinder is insulated during adiabatic expansion, so no heat enters or leaves."
    },

    {
        question: "During isothermal compression in the Carnot cycle, the gas:",
        options: [
            "Absorbs heat from the hot reservoir",
            "Rejects heat to the cold reservoir",
            "Has no volume change",
            "Expands"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "At the lower temperature, the gas is compressed isothermally and rejects heat to the cold reservoir."
    },

    {
        question: "A Carnot engine's efficiency depends on:",
        options: [
            "Only the working substance",
            "Only its mass",
            "The temperatures of the two reservoirs",
            "The cylinder size"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Carnot efficiency depends only on the temperatures of the hot and cold reservoirs."
    },

    {
        question: "A refrigerator transfers heat from a cold region to a hot region by using:",
        options: [
            "No energy",
            "Work input",
            "Only gravity",
            "Only pressure decrease"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A refrigerator requires work to move heat against its natural direction."
    },

    {
        question: "The coefficient of performance of a refrigerator for cooling is defined as:",
        options: [
            "W/Q₂",
            "Q₂/W",
            "Q₁/W only",
            "Q₁/Q₂"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Cooling COP is the heat removed from the cold reservoir divided by work input."
    },


    // =========================
    // DIFFICULT — 24 MCQs
    // =========================

    {
        question: "An ideal Carnot engine operates between 600 K and 300 K. Its efficiency is:",
        options: [
            "25%",
            "50%",
            "75%",
            "100%"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "η = 1 − Tc/Th = 1 − 300/600 = 0.50, or 50%."
    },

    {
        question: "A Carnot engine has efficiency 40% and a hot reservoir at 500 K. The cold-reservoir temperature is:",
        options: [
            "200 K",
            "300 K",
            "400 K",
            "450 K"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "η = 1 − Tc/Th, so Tc = 500(1−0.40) = 300 K."
    },

    {
        question: "A heat engine receives 4000 J and rejects 2500 J each cycle. Its work output is:",
        options: [
            "1000 J",
            "1500 J",
            "2500 J",
            "6500 J"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "For a cyclic engine, W = Qh − Qc = 4000 − 2500 = 1500 J."
    },

    {
        question: "A heat engine receives 5 kJ and has 30% efficiency. The work output is:",
        options: [
            "0.5 kJ",
            "1.0 kJ",
            "1.5 kJ",
            "3.5 kJ"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "η = W/Qh, so W = 0.30 × 5 kJ = 1.5 kJ."
    },

    {
        question: "A Carnot engine operates between 400 K and 800 K. If its work output is 600 J per cycle, heat supplied is:",
        options: [
            "600 J",
            "900 J",
            "1200 J",
            "1800 J"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "η = 1−400/800 = 0.5. Therefore Qh = W/η = 600/0.5 = 1200 J."
    },

    {
        question: "A gas expands at constant pressure 2 × 10⁵ Pa from 0.02 m³ to 0.05 m³. Work done is:",
        options: [
            "2 × 10³ J",
            "4 × 10³ J",
            "6 × 10³ J",
            "10 × 10³ J"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "W = PΔV = 2×10⁵(0.05−0.02) = 6×10³ J."
    },

    {
        question: "An ideal gas has 2 mol at 300 K in a volume of 0.050 m³. Its pressure is approximately:",
        options: [
            "9.97 × 10⁴ Pa",
            "4.99 × 10⁴ Pa",
            "1.00 × 10⁵ Pa",
            "2.00 × 10⁵ Pa"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "P = nRT/V = 2×8.314×300/0.050 ≈ 9.98×10⁴ Pa."
    },

    {
        question: "The average translational kinetic energy of an ideal-gas molecule at 300 K is approximately:",
        options: [
            "6.2 × 10⁻²¹ J",
            "4.1 × 10⁻²¹ J",
            "1.38 × 10⁻²³ J",
            "8.3 × 10⁻²¹ J"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Using <K.E.> = 3kT/2 gives about 6.2 × 10⁻²¹ J at 300 K."
    },

    {
        question: "A system receives 500 J of heat and does 200 J of work. Its change in internal energy is:",
        options: [
            "300 J",
            "700 J",
            "−300 J",
            "−700 J"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Q = ΔU + W, so ΔU = 500 − 200 = 300 J."
    },

    {
        question: "A system loses 400 J of heat while 100 J of work is done on it. The change in internal energy is:",
        options: [
            "−500 J",
            "−300 J",
            "300 J",
            "500 J"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Heat Q = −400 J and work by system W = −100 J, so ΔU = Q − W = −300 J."
    },

    {
        question: "A refrigerator removes 600 J of heat from its cold reservoir using 200 J of work. Its cooling COP is:",
        options: [
            "0.33",
            "2",
            "3",
            "4"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "COPcooling = Qc/W = 600/200 = 3."
    },

    {
        question: "An ideal refrigerator has COP = 4 for cooling and receives 500 J of work. Heat removed from the cold region is:",
        options: [
            "125 J",
            "500 J",
            "1500 J",
            "2000 J"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "COP = Qc/W, so Qc = 4×500 = 2000 J."
    },

    {
        question: "If a refrigerator removes 1200 J from its cold reservoir using 300 J of work, heat rejected to the room is:",
        options: [
            "900 J",
            "1200 J",
            "1500 J",
            "1800 J"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Energy balance gives Qh = Qc + W = 1200 + 300 = 1500 J."
    },

    {
        question: "For a complete reversible cycle, the net change in entropy of the system is:",
        options: [
            "Positive",
            "Negative",
            "Zero",
            "Infinite"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "In a complete reversible cycle, the system returns to its initial state, so its net entropy change is zero."
    },

    {
        question: "A system absorbs 900 J reversibly at 300 K. Its entropy change is:",
        options: [
            "1 J K⁻¹",
            "2 J K⁻¹",
            "3 J K⁻¹",
            "2700 J K⁻¹"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "For reversible heat transfer, ΔS = Q/T = 900/300 = 3 J K⁻¹."
    },

    {
        question: "A body releases 600 J of heat reversibly at 300 K. Its entropy change is:",
        options: [
            "+2 J K⁻¹",
            "−2 J K⁻¹",
            "+1800 J K⁻¹",
            "−1800 J K⁻¹"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Removing heat gives negative entropy change: ΔS = −600/300 = −2 J K⁻¹."
    },

    {
        question: "For a Carnot engine operating between 500 K and 250 K, the ratio Qc/Qh is:",
        options: [
            "0.25",
            "0.50",
            "0.75",
            "2.00"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "For a reversible Carnot engine, Qc/Qh = Tc/Th = 250/500 = 0.50."
    },

    {
        question: "An ideal gas is compressed adiabatically. Which combination is expected?",
        options: [
            "Temperature decreases and internal energy decreases",
            "Temperature increases and internal energy increases",
            "Temperature stays constant and internal energy decreases",
            "Heat enters and temperature increases"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Adiabatic compression does work on the gas, increasing internal energy and temperature."
    },

    {
        question: "A gas undergoes an isochoric process and receives 800 J of heat. The work done by the gas is:",
        options: [
            "0 J",
            "400 J",
            "800 J",
            "−800 J"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Constant volume means ΔV = 0, so W = PΔV = 0; the heat changes internal energy."
    },

    {
        question: "At constant pressure, a gas changes volume from 3 L to 8 L under 2 × 10⁵ Pa. Work done is:",
        options: [
            "500 J",
            "1000 J",
            "1500 J",
            "2000 J"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "ΔV = 5 L = 5×10⁻³ m³, so W = 2×10⁵×5×10⁻³ = 1000 J."
    },

    {
        question: "If an ideal gas is at constant temperature and its volume doubles, its pressure becomes:",
        options: [
            "Double",
            "Half",
            "Four times",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Boyle's law gives PV = constant, so doubling V halves P."
    },

    {
        question: "At constant pressure, an ideal gas at 300 K is heated to 600 K. Its volume becomes:",
        options: [
            "Half",
            "Double",
            "Four times",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Charles's law gives V/T = constant at constant pressure, so doubling T doubles V."
    },

    {
        question: "At constant volume, an ideal gas at 300 K is heated to 600 K. Its pressure becomes:",
        options: [
            "Half",
            "Double",
            "Four times",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Gay-Lussac's law gives P/T = constant at constant volume, so doubling T doubles P."
    },

    {
        question: "A heat engine cannot have 100% efficiency because:",
        options: [
            "Its pressure is always zero",
            "A cold reservoir and rejected heat are required",
            "Its working substance has no energy",
            "The hot reservoir must be at 0 K"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The second law requires heat rejection to a colder reservoir, so not all input heat can become work."
    }

];


// Save Chapter 8 questions for the Test page
localStorage.setItem(
    "mcqQuestionsChapter8",
    JSON.stringify(questions)
);


let currentQuestion = 0;


// HTML elements
const questionNumber =
    document.querySelector(".question-number");

const questionText =
    document.querySelector(".mcq-card h2");

const optionsContainer =
    document.querySelector(".options");

const feedback =
    document.querySelector(".feedback");

const nextButton =
    document.querySelector(".next-button");

const previousButton =
    document.querySelector(".previous-button");

const progressText =
    document.querySelector(".progress-top span:last-child");

const progressCount =
    document.querySelector(".progress-top span:first-child");

const progressFill =
    document.querySelector(".progress-fill");


// Load question
function loadQuestion() {

    const q = questions[currentQuestion];


    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;


    questionText.textContent =
        q.question;


    optionsContainer.innerHTML = "";


    q.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className =
            "option";


        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;


        // Mark correct answer
        if (index === q.answer) {

            button.classList.add("correct");

        }


        optionsContainer.appendChild(button);

    });


    // Explanation
    feedback.innerHTML = `
        <strong>Correct!</strong>
        <p>${q.explanation}</p>
    `;


    // Progress
    const total =
        questions.length;

    const current =
        currentQuestion + 1;

    const percentage =
        (current / total) * 100;


    progressCount.textContent =
        `Question ${current} of ${total}`;


    progressText.textContent =
        `${Math.round(percentage)}% Complete`;


    progressFill.style.width =
        `${percentage}%`;


    // Previous button
    previousButton.disabled =
        currentQuestion === 0;


    // Next button
    nextButton.disabled =
        currentQuestion === total - 1;

}


// Next button
nextButton.addEventListener("click", () => {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

});


// Previous button
previousButton.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

});


// Start
loadQuestion();