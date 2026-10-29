const questions = [

    // =========================
    // EASY — 1 to 6
    // =========================

    {
        question: "The pressure exerted by a fluid at rest is called:",
        options: [
            "Dynamic pressure",
            "Hydrostatic pressure",
            "Vapour pressure",
            "Atmospheric pressure"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The pressure exerted by a fluid at rest is called hydrostatic pressure."
    },

    {
        question: "The SI unit of pressure is:",
        options: [
            "Newton",
            "Joule",
            "Pascal",
            "Watt"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Pressure is measured in pascals (Pa), where 1 Pa = 1 N/m²."
    },

    {
        question: "Pressure is defined as:",
        options: [
            "Force × area",
            "Force per unit area",
            "Area per unit force",
            "Mass per unit volume"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Pressure is the normal force acting per unit area."
    },

    {
        question: "The density of a substance is defined as:",
        options: [
            "Mass per unit volume",
            "Volume per unit mass",
            "Force per unit area",
            "Mass × volume"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Density is the mass contained in unit volume, ρ = m/V."
    },

    {
        question: "Which instrument is commonly used to measure atmospheric pressure?",
        options: [
            "Hydrometer",
            "Barometer",
            "Thermometer",
            "Calorimeter"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A barometer is used to measure atmospheric pressure."
    },

    {
        question: "A fluid that cannot sustain a shear stress at rest is called a:",
        options: [
            "Solid",
            "Fluid",
            "Crystal",
            "Elastic body"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A fluid cannot sustain a shear stress at rest and deforms continuously when such stress is applied."
    },


    // =========================
    // NORMAL — 7 to 16
    // =========================

    {
        question: "The pressure at a depth h in a liquid of density ρ is:",
        options: [
            "ρgh",
            "ρg/h",
            "gh/ρ",
            "ρh/g"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The pressure due to a liquid column is P = ρgh."
    },

    {
        question: "If the depth below the surface of a liquid is doubled, the liquid pressure due to depth becomes:",
        options: [
            "Half",
            "Unchanged",
            "Double",
            "Four times"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Since P = ρgh, pressure is directly proportional to depth when density and g remain constant."
    },

    {
        question: "According to Pascal's principle, pressure applied to an enclosed fluid is transmitted:",
        options: [
            "Only downward",
            "Only upward",
            "Equally in all directions",
            "Only horizontally"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Pascal's principle states that an applied pressure is transmitted undiminished throughout an enclosed fluid."
    },

    {
        question: "A hydraulic press works mainly on:",
        options: [
            "Archimedes' principle",
            "Pascal's principle",
            "Bernoulli's principle",
            "Newton's first law"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A hydraulic press uses Pascal's principle to transmit pressure through a confined fluid."
    },

    {
        question: "An object floats in a liquid when the buoyant force is:",
        options: [
            "Less than its weight",
            "Equal to its weight",
            "Greater than twice its weight",
            "Zero"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For a floating object in equilibrium, the upward buoyant force equals its weight."
    },

    {
        question: "Archimedes' principle states that the buoyant force equals the:",
        options: [
            "Weight of the object",
            "Mass of the object",
            "Weight of the displaced fluid",
            "Volume of the object"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The buoyant force on an immersed body equals the weight of the fluid displaced by it."
    },

    {
        question: "The continuity equation for an incompressible fluid in steady flow is:",
        options: [
            "A₁v₁ = A₂v₂",
            "A₁/A₂ = v₁v₂",
            "A₁v₂ = A₂v₁",
            "A₁ + v₁ = A₂ + v₂"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "For steady incompressible flow, the volume flow rate remains constant, so A₁v₁ = A₂v₂."
    },

    {
        question: "If the cross-sectional area of a pipe decreases, the speed of an incompressible fluid:",
        options: [
            "Decreases",
            "Increases",
            "Becomes zero",
            "Remains necessarily unchanged"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "From A v = constant, fluid speed increases when the cross-sectional area decreases."
    },

    {
        question: "Bernoulli's equation is based on conservation of:",
        options: [
            "Charge",
            "Mass only",
            "Energy",
            "Momentum only"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Bernoulli's equation expresses conservation of mechanical energy for ideal fluid flow."
    },

    {
        question: "In a horizontal pipe, where the speed of an ideal fluid increases, its pressure generally:",
        options: [
            "Increases",
            "Decreases",
            "Becomes infinite",
            "Must remain zero"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For horizontal ideal flow, increased speed is accompanied by decreased pressure according to Bernoulli's equation."
    },


    // =========================
    // DIFFICULT — 17 to 20
    // =========================

    {
        question: "Water flows through a pipe with area 4 cm² at 2 m/s. If the area becomes 2 cm², the speed becomes:",
        options: [
            "1 m/s",
            "2 m/s",
            "4 m/s",
            "8 m/s"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Using A₁v₁ = A₂v₂: 4 × 2 = 2 × v₂, so v₂ = 4 m/s."
    },

    {
        question: "A liquid has density 1000 kg/m³. Taking g = 10 m/s², the pressure due to a 5 m liquid column is:",
        options: [
            "5,000 Pa",
            "10,000 Pa",
            "50,000 Pa",
            "500,000 Pa"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "P = ρgh = 1000 × 10 × 5 = 50,000 Pa."
    },

    {
        question: "A hydraulic system has a small piston area of 0.01 m² and a large piston area of 0.20 m². If 100 N is applied to the small piston, the ideal force on the large piston is:",
        options: [
            "5 N",
            "20 N",
            "500 N",
            "2000 N"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "By Pascal's principle, F₁/A₁ = F₂/A₂. Thus F₂ = 100 × (0.20/0.01) = 2000 N."
    },

    {
        question: "An ideal fluid flows from a wide section of a horizontal pipe into a section with half the area. The fluid speed becomes:",
        options: [
            "Half",
            "Unchanged",
            "Twice",
            "Four times"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "From A₁v₁ = A₂v₂, if A₂ = A₁/2, then v₂ = 2v₁."
    },
        // =========================
    // EASY — 21 to 26
    // =========================

    {
        question: "The flow of an ideal fluid is usually assumed to be:",
        options: [
            "Viscous and compressible",
            "Non-viscous and incompressible",
            "Only turbulent",
            "Only irregular"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An ideal fluid is assumed to be non-viscous and incompressible."
    },

    {
        question: "In streamline flow, the velocity of fluid at a fixed point:",
        options: [
            "Changes randomly with time",
            "Remains constant with time",
            "Must always be zero",
            "Becomes infinite"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "In steady streamline flow, the velocity at a particular point does not change with time."
    },

    {
        question: "Turbulent flow is generally associated with:",
        options: [
            "Irregular fluid motion",
            "Perfectly parallel paths",
            "Zero velocity",
            "Zero pressure"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Turbulent flow involves irregular and fluctuating fluid motion."
    },

    {
        question: "The equation of continuity is based on conservation of:",
        options: [
            "Energy",
            "Mass",
            "Charge",
            "Temperature"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The continuity equation is a mathematical expression of conservation of mass."
    },

    {
        question: "The quantity Av in fluid flow represents:",
        options: [
            "Pressure",
            "Mass",
            "Volume flow rate",
            "Density"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Cross-sectional area multiplied by fluid speed gives the volume flow rate."
    },

    {
        question: "Real fluids differ from ideal fluids because real fluids have:",
        options: [
            "No mass",
            "No pressure",
            "Viscosity",
            "No velocity"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Real fluids have viscosity, which produces resistance to relative motion between fluid layers."
    },


    // =========================
    // NORMAL — 27 to 34
    // =========================

    {
        question: "For steady incompressible flow, which quantity remains constant?",
        options: [
            "Av",
            "A/v",
            "A + v",
            "A - v"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "For steady incompressible flow, the equation of continuity gives Av = constant."
    },

    {
        question: "Water flows through a pipe of area 6 cm² at 2 m/s. If the area becomes 3 cm², its speed becomes:",
        options: [
            "1 m/s",
            "2 m/s",
            "4 m/s",
            "6 m/s"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Using A₁v₁ = A₂v₂: 6 × 2 = 3 × v₂, so v₂ = 4 m/s."
    },

    {
        question: "Water flows through a pipe of area 4 cm² at 3 m/s. If the area becomes 2 cm², its speed becomes:",
        options: [
            "1.5 m/s",
            "3 m/s",
            "6 m/s",
            "12 m/s"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Using A₁v₁ = A₂v₂: 4 × 3 = 2 × v₂, so v₂ = 6 m/s."
    },

    {
        question: "For horizontal ideal fluid flow, an increase in fluid speed causes pressure to:",
        options: [
            "Increase",
            "Decrease",
            "Remain necessarily zero",
            "Become independent of speed"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "According to Bernoulli's equation, pressure decreases where the speed of an ideal fluid increases in horizontal flow."
    },

    {
        question: "Which equation represents Bernoulli's equation?",
        options: [
            "P + ρgh + ½ρv² = constant",
            "P + ρg/h = constant",
            "P - ρgh - ½ρv² = constant",
            "P = ρv"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Bernoulli's equation for ideal steady flow is P + ρgh + ½ρv² = constant."
    },

    {
        question: "A Venturi meter is based mainly on:",
        options: [
            "Bernoulli's principle and continuity",
            "Newton's law of cooling",
            "Hooke's law",
            "Coulomb's law"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A Venturi meter uses the relationship between flow speed, area and pressure described by continuity and Bernoulli's equation."
    },

    {
        question: "The force that opposes relative motion between adjacent layers of a viscous fluid is called:",
        options: [
            "Buoyant force",
            "Viscous force",
            "Gravitational force",
            "Electrostatic force"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Viscous force opposes relative motion between neighboring layers of a real fluid."
    },

    {
        question: "When an object falls through a viscous fluid and reaches terminal velocity, its acceleration is:",
        options: [
            "Maximum",
            "Constantly increasing",
            "Zero",
            "Equal to g"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "At terminal velocity, the forces balance and the net force becomes zero, so acceleration is zero."
    },


    // =========================
    // DIFFICULT — 35 to 40
    // =========================

    {
        question: "A liquid flows through a pipe with area 8 cm² at 1.5 m/s. If the area becomes 4 cm², the new speed is:",
        options: [
            "0.75 m/s",
            "1.5 m/s",
            "3.0 m/s",
            "6.0 m/s"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Using A₁v₁ = A₂v₂: 8 × 1.5 = 4 × v₂, giving v₂ = 3.0 m/s."
    },

    {
        question: "Water flows horizontally at 2 m/s in one section and 4 m/s in another. Taking ρ = 1000 kg/m³, the pressure difference between the sections is:",
        options: [
            "2,000 Pa",
            "4,000 Pa",
            "6,000 Pa",
            "8,000 Pa"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "For horizontal flow, P₁ + ½ρv₁² = P₂ + ½ρv₂². Thus P₁ − P₂ = ½(1000)(16 − 4) = 6000 Pa."
    },

    {
        question: "An ideal fluid enters a pipe section at 3 m/s. If its speed becomes 9 m/s in a narrower section, the area of the narrower section is:",
        options: [
            "Three times the original area",
            "Equal to the original area",
            "One-third of the original area",
            "One-ninth of the original area"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "From A₁v₁ = A₂v₂, A₂/A₁ = v₁/v₂ = 3/9 = 1/3."
    },

    {
        question: "A fluid flows horizontally with speed 5 m/s at one point and 10 m/s at another. For an ideal fluid of density 800 kg/m³, the pressure difference P₁ − P₂ is:",
        options: [
            "20,000 Pa",
            "30,000 Pa",
            "40,000 Pa",
            "60,000 Pa"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "P₁ − P₂ = ½ρ(v₂² − v₁²) = ½(800)(100 − 25) = 30,000 Pa."
    },

    {
        question: "A pipe carries an incompressible fluid at 2 m/s through an area of 0.05 m². The volume flow rate is:",
        options: [
            "0.025 m³/s",
            "0.10 m³/s",
            "0.20 m³/s",
            "2.50 m³/s"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Volume flow rate Q = Av = 0.05 × 2 = 0.10 m³/s."
    },

    {
        question: "At a point in a horizontal pipe, the pressure is 80 kPa and speed is 4 m/s. At another point, the speed is 8 m/s. For an ideal fluid of density 1000 kg/m³, the pressure at the second point is:",
        options: [
            "20 kPa",
            "32 kPa",
            "56 kPa",
            "72 kPa"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "P₁ + ½ρv₁² = P₂ + ½ρv₂². P₂ = 80,000 + 8,000 − 32,000 = 56,000 Pa = 56 kPa."
    },
        // =========================
    // EASY — 41 to 52
    // =========================

    {
        question: "A streamline is a path along which a fluid particle:",
        options: [
            "Moves randomly",
            "Moves at every instant",
            "Always remains at rest",
            "Has zero acceleration"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A streamline represents the instantaneous direction of fluid motion at each point."
    },

    {
        question: "In turbulent flow, fluid particles generally move:",
        options: [
            "In perfectly smooth paths",
            "In irregular paths",
            "Only vertically",
            "Only horizontally"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Turbulent flow is characterized by irregular and fluctuating motion."
    },

    {
        question: "For an incompressible fluid, density is:",
        options: [
            "Constant",
            "Always zero",
            "Increasing continuously",
            "Always decreasing"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "An incompressible fluid is treated as having constant density."
    },

    {
        question: "The SI unit of pressure is:",
        options: [
            "Newton",
            "Joule",
            "Pascal",
            "Watt"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Pressure is measured in pascals (Pa), where 1 Pa = 1 N/m²."
    },

    {
        question: "Pressure in a fluid at rest acts:",
        options: [
            "Only upward",
            "Only downward",
            "In all directions",
            "Only horizontally"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Pressure in a fluid at rest acts normally in all directions."
    },

    {
        question: "The pressure exerted by a fluid increases with:",
        options: [
            "Depth",
            "Color",
            "Shape only",
            "Temperature only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Fluid pressure generally increases as depth below the surface increases."
    },

    {
        question: "The density of a fluid is defined as mass per unit:",
        options: [
            "Area",
            "Volume",
            "Length",
            "Time"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Density is defined as mass divided by volume."
    },

    {
        question: "The SI unit of density is:",
        options: [
            "kg/m³",
            "N/m²",
            "kg/m",
            "N/m"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The SI unit of density is kilogram per cubic metre."
    },

    {
        question: "Viscosity is mainly related to resistance between:",
        options: [
            "Different fluid layers",
            "Different objects only",
            "Electric charges",
            "Solid surfaces only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Viscosity represents internal resistance between neighboring layers of a fluid."
    },

    {
        question: "A fluid with very low viscosity flows:",
        options: [
            "More easily",
            "Only upward",
            "Only downward",
            "With zero density"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Lower viscosity means less internal resistance to fluid motion."
    },

    {
        question: "At terminal velocity, the net force on a falling object is:",
        options: [
            "Maximum",
            "Zero",
            "Equal to its weight",
            "Increasing"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "At terminal velocity, the forces balance and the net force is zero."
    },

    {
        question: "The pressure term in Bernoulli's equation has the unit of:",
        options: [
            "Energy per unit volume",
            "Force only",
            "Mass only",
            "Velocity"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Pressure has the same dimensions as energy per unit volume."
    },


    // =========================
    // NORMAL — 53 to 66
    // =========================

    {
        question: "Water is flowing through a pipe at 5 m/s. If its cross-sectional area is doubled, the new speed is:",
        options: [
            "2.5 m/s",
            "5 m/s",
            "10 m/s",
            "20 m/s"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "For incompressible flow, A₁v₁ = A₂v₂. Doubling area halves the speed."
    },

    {
        question: "A pipe has area 10 cm² and carries water at 3 m/s. If the area becomes 5 cm², the speed becomes:",
        options: [
            "1.5 m/s",
            "3 m/s",
            "6 m/s",
            "15 m/s"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Using A₁v₁ = A₂v₂: 10 × 3 = 5 × v₂, so v₂ = 6 m/s."
    },

    {
        question: "If the speed of an incompressible fluid doubles in a narrower pipe, its cross-sectional area becomes:",
        options: [
            "Twice as large",
            "Four times as large",
            "Half as large",
            "Unchanged"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "From A₁v₁ = A₂v₂, doubling velocity makes the area half."
    },

    {
        question: "A fluid flows through an area of 0.02 m² at 4 m/s. Its volume flow rate is:",
        options: [
            "0.005 m³/s",
            "0.02 m³/s",
            "0.08 m³/s",
            "0.80 m³/s"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Q = Av = 0.02 × 4 = 0.08 m³/s."
    },

    {
        question: "If the volume flow rate is 0.12 m³/s through an area of 0.03 m², the fluid speed is:",
        options: [
            "2 m/s",
            "3 m/s",
            "4 m/s",
            "6 m/s"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Using Q = Av, v = 0.12/0.03 = 4 m/s."
    },

    {
        question: "For horizontal ideal flow, the sum of pressure energy and kinetic energy per unit volume is:",
        options: [
            "Constant",
            "Always zero",
            "Always increasing",
            "Always decreasing"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "For horizontal ideal flow, P + ½ρv² remains constant."
    },

    {
        question: "If fluid speed increases in a horizontal ideal-flow region, which quantity decreases?",
        options: [
            "Density necessarily",
            "Pressure",
            "Mass",
            "Volume"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Bernoulli's equation shows that increased speed corresponds to lower pressure in horizontal ideal flow."
    },

    {
        question: "Which device can be used to measure fluid speed using pressure differences?",
        options: [
            "Pitot tube",
            "Thermometer",
            "Calorimeter",
            "Ammeter"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A Pitot tube uses pressure measurements to determine fluid speed."
    },

    {
        question: "The upward force exerted by a fluid on an immersed object is called:",
        options: [
            "Viscous force",
            "Buoyant force",
            "Centripetal force",
            "Magnetic force"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The upward force exerted by a fluid on an immersed body is the buoyant force."
    },

    {
        question: "According to Archimedes' principle, buoyant force equals the:",
        options: [
            "Weight of the object",
            "Weight of displaced fluid",
            "Mass of the object",
            "Volume of the object"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Archimedes' principle states that buoyant force equals the weight of displaced fluid."
    },

    {
        question: "An object floats when the buoyant force is:",
        options: [
            "Less than its weight",
            "Greater than its weight",
            "Equal to its weight",
            "Always zero"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "For an object floating at rest, buoyant force balances its weight."
    },

    {
        question: "For a liquid of density 1000 kg/m³ at depth 2 m, taking g = 10 m/s², the pressure due to the liquid is:",
        options: [
            "2,000 Pa",
            "10,000 Pa",
            "20,000 Pa",
            "200,000 Pa"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Using P = ρgh: P = 1000 × 10 × 2 = 20,000 Pa."
    },

    {
        question: "If the depth in a liquid is tripled, the pressure due to the liquid becomes:",
        options: [
            "One-third",
            "Three times",
            "Six times",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Since P = ρgh, pressure is directly proportional to depth."
    },

    {
        question: "A hydraulic press works mainly on:",
        options: [
            "Pascal's principle",
            "Hooke's law",
            "Ohm's law",
            "Newton's law of cooling"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A hydraulic press uses Pascal's principle to transmit pressure through a confined fluid."
    },


    // =========================
    // DIFFICULT — 67 to 80
    // =========================

    {
        question: "Water flows through a pipe of area 12 cm² at 2 m/s. At another section its speed is 8 m/s. The second area is:",
        options: [
            "1.5 cm²",
            "3 cm²",
            "6 cm²",
            "24 cm²"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Using A₁v₁ = A₂v₂: A₂ = (12 × 2)/8 = 3 cm²."
    },

    {
        question: "A fluid flows through an area of 0.04 m² at 5 m/s. If its speed becomes 2 m/s, the new area is:",
        options: [
            "0.016 m²",
            "0.04 m²",
            "0.10 m²",
            "0.20 m²"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "A₂ = A₁v₁/v₂ = 0.04 × 5/2 = 0.10 m²."
    },

    {
        question: "Water flows horizontally at 3 m/s and then at 7 m/s. Taking ρ = 1000 kg/m³, P₁ − P₂ is:",
        options: [
            "10,000 Pa",
            "20,000 Pa",
            "30,000 Pa",
            "40,000 Pa"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "P₁ − P₂ = ½ρ(v₂² − v₁²) = ½(1000)(49 − 9) = 20,000 Pa."
    },

    {
        question: "An ideal fluid moves horizontally at 6 m/s where its pressure is 90 kPa. If its speed becomes 10 m/s, taking ρ = 1000 kg/m³, the new pressure is:",
        options: [
            "58 kPa",
            "64 kPa",
            "72 kPa",
            "82 kPa"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "P₂ = P₁ + ½ρ(v₁² − v₂²) = 90,000 + 18,000 − 50,000 = 58,000 Pa."
    },

    {
        question: "Water flows through a pipe at 4 m/s. If its speed increases to 12 m/s, the pressure difference for horizontal flow is 64 kPa. The density is:",
        options: [
            "500 kg/m³",
            "800 kg/m³",
            "1000 kg/m³",
            "1200 kg/m³"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "ΔP = ½ρ(12² − 4²) = ½ρ(128) = 64ρ. Thus ρ = 1000 kg/m³."
    },

    {
        question: "Water exits a small opening under a head of 5 m. Taking g = 10 m/s², its ideal exit speed is:",
        options: [
            "5 m/s",
            "10 m/s",
            "20 m/s",
            "50 m/s"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Using v = √(2gh): v = √(2 × 10 × 5) = √100 = 10 m/s."
    },

    {
        question: "An ideal fluid flows from a point 5 m above another point. If its speed is unchanged, the pressure at the lower point is greater by:",
        options: [
            "25 kPa",
            "40 kPa",
            "50 kPa",
            "100 kPa"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "For unchanged speed, pressure difference is ρgΔh = 1000 × 10 × 5 = 50,000 Pa."
    },

    {
        question: "A liquid of density 800 kg/m³ is 4 m deep. Taking g = 10 m/s², the pressure due to the liquid at the bottom is:",
        options: [
            "3.2 kPa",
            "16 kPa",
            "32 kPa",
            "64 kPa"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "P = ρgh = 800 × 10 × 4 = 32,000 Pa = 32 kPa."
    },

    {
        question: "A hydraulic press has a small piston area of 0.02 m² and a large piston area of 0.50 m². A force of 200 N is applied to the small piston. The output force is:",
        options: [
            "2,000 N",
            "5,000 N",
            "10,000 N",
            "20,000 N"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "By Pascal's principle, F₂ = F₁(A₂/A₁) = 200 × (0.50/0.02) = 5,000 N."
    },

    {
        question: "A hydraulic system has piston areas 0.01 m² and 0.25 m². If the large piston supports 5,000 N, the force required on the small piston is:",
        options: [
            "100 N",
            "200 N",
            "250 N",
            "500 N"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "F₁/A₁ = F₂/A₂, so F₁ = 5000 × (0.01/0.25) = 200 N."
    },

    {
        question: "A fluid has density 900 kg/m³ and flows at 4 m/s through an area of 0.03 m². Its mass flow rate is:",
        options: [
            "54 kg/s",
            "72 kg/s",
            "108 kg/s",
            "120 kg/s"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Mass flow rate = ρAv = 900 × 0.03 × 4 = 108 kg/s."
    },

    {
        question: "An ideal fluid flows horizontally with speed 5 m/s at pressure 70 kPa. If its speed decreases to 3 m/s, taking ρ = 1000 kg/m³, the new pressure is:",
        options: [
            "62 kPa",
            "74 kPa",
            "78 kPa",
            "86 kPa"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "P₂ = P₁ + ½ρ(v₁² − v₂²) = 70,000 + 500(25 − 9) = 78,000 Pa."
    },

    {
        question: "Water flows through a pipe with area 0.08 m² at 2.5 m/s. If the area decreases to 0.02 m², the new speed is:",
        options: [
            "5 m/s",
            "7.5 m/s",
            "10 m/s",
            "12.5 m/s"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Using A₁v₁ = A₂v₂: v₂ = (0.08 × 2.5)/0.02 = 10 m/s."
    },

    {
        question: "A fluid flows horizontally from 2 m/s to 6 m/s. If its density is 750 kg/m³, the pressure decrease is:",
        options: [
            "6,000 Pa",
            "12,000 Pa",
            "15,000 Pa",
            "18,000 Pa"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "ΔP = ½ρ(v₂² − v₁²) = ½(750)(36 − 4) = 12,000 Pa."
    },

];

localStorage.setItem("mcqQuestionsChapter6", JSON.stringify(questions));

let currentQuestion = 0;

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".mcq-card h2");
const optionsContainer = document.querySelector(".options");
const feedback = document.querySelector(".feedback");
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");

const progressText =
    document.querySelector(".progress-top span:last-child");

const progressCount =
    document.querySelector(".progress-top span:first-child");

const progressFill =
    document.querySelector(".progress-fill");

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