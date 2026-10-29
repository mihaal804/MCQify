const questions = [

    // =========================
    // EASY — 24 MCQs
    // =========================

    {
        question: "The theory of relativity was proposed by:",
        options: [
            "Isaac Newton",
            "Albert Einstein",
            "James Clerk Maxwell",
            "Niels Bohr"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Albert Einstein developed the special and general theories of relativity."
    },

    {
        question: "Special relativity mainly deals with objects moving at:",
        options: [
            "Very low speeds",
            "Speeds comparable to the speed of light",
            "Zero speed",
            "Only the speed of sound"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Special relativity becomes important when speeds approach the speed of light."
    },

    {
        question: "The speed of light in vacuum is approximately:",
        options: [
            "3 × 10^6 m/s",
            "3 × 10^7 m/s",
            "3 × 10^8 m/s",
            "3 × 10^9 m/s"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The speed of light in vacuum is approximately 3 × 10^8 m/s."
    },

    {
        question: "The speed of light in vacuum is represented by:",
        options: [
            "g",
            "c",
            "h",
            "G"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The symbol c represents the speed of light in vacuum."
    },

    {
        question: "According to special relativity, the laws of physics are the same in:",
        options: [
            "All inertial frames",
            "Only stationary frames",
            "Only accelerating frames",
            "Only rotating frames"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The laws of physics have the same form in all inertial reference frames."
    },

    {
        question: "An inertial frame is one that is:",
        options: [
            "Accelerating",
            "Rotating rapidly",
            "Moving with constant velocity",
            "Always at rest"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "An inertial frame is a frame moving with constant velocity or at rest."
    },

    {
        question: "The principle that the speed of light is the same for all inertial observers is called:",
        options: [
            "Conservation of energy",
            "Constancy of speed of light",
            "Conservation of momentum",
            "Equivalence principle"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Special relativity states that the speed of light in vacuum is constant for all inertial observers."
    },

    {
        question: "Time measured by a clock moving relative to an observer appears to:",
        options: [
            "Run slower",
            "Run faster",
            "Stop completely",
            "Become negative"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "This effect is called time dilation."
    },

    {
        question: "The increase in measured time interval due to relative motion is called:",
        options: [
            "Length contraction",
            "Time dilation",
            "Mass defect",
            "Gravitational shift"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Time dilation means a moving clock is measured to run slower."
    },

    {
        question: "The length of a moving object along its direction of motion appears to:",
        options: [
            "Increase",
            "Remain infinite",
            "Decrease",
            "Become zero at all speeds"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The relativistic effect called length contraction reduces the measured length along the direction of motion."
    },

    {
        question: "Length contraction occurs in the direction:",
        options: [
            "Perpendicular to motion",
            "Opposite to gravity only",
            "Of motion",
            "Of magnetic field only"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Length contraction occurs only along the direction of relative motion."
    },

    {
        question: "The relativistic mass-energy relation is:",
        options: [
            "E = mc",
            "E = mc²",
            "E = m/c²",
            "E = m²c"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Einstein's mass-energy relation is E = mc²."
    },

    {
        question: "The SI unit of energy is:",
        options: [
            "Newton",
            "Joule",
            "Watt",
            "Pascal"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Energy is measured in joules."
    },

    {
        question: "The rest energy of a particle depends on its:",
        options: [
            "Rest mass",
            "Volume only",
            "Temperature only",
            "Charge only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Rest energy is given by E₀ = m₀c² and therefore depends on rest mass."
    },

    {
        question: "The mass of an object at rest is called:",
        options: [
            "Relativistic mass",
            "Rest mass",
            "Dynamic mass",
            "Gravitational energy"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The mass measured in the object's rest frame is called rest mass."
    },

    {
        question: "As the speed of an object approaches the speed of light, relativistic effects become:",
        options: [
            "Negligible",
            "More significant",
            "Zero",
            "Independent of speed"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Relativistic effects become increasingly important as speed approaches c."
    },

    {
        question: "An object having rest mass cannot reach the speed of:",
        options: [
            "100 m/s",
            "1000 m/s",
            "The speed of sound",
            "Light in vacuum"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "An object with nonzero rest mass would require infinite energy to reach c."
    },

    {
        question: "The Lorentz factor is represented by:",
        options: [
            "γ",
            "λ",
            "μ",
            "ρ"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The symbol γ is commonly used for the Lorentz factor."
    },

    {
        question: "The Lorentz factor depends on:",
        options: [
            "Velocity",
            "Temperature",
            "Pressure",
            "Volume"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The Lorentz factor γ depends on the ratio v/c."
    },

    {
        question: "For an object at rest relative to an observer, the Lorentz factor is:",
        options: [
            "0",
            "1",
            "2",
            "Infinite"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "When v = 0, γ = 1."
    },

    {
        question: "The formula for the Lorentz factor is:",
        options: [
            "γ = 1/√(1 − v²/c²)",
            "γ = √(1 − v²/c²)",
            "γ = v/c",
            "γ = c/v"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The Lorentz factor is γ = 1/√(1 − v²/c²)."
    },

    {
        question: "At ordinary everyday speeds, relativistic effects are usually:",
        options: [
            "Very large",
            "Very small",
            "Infinite",
            "Impossible"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "At speeds much smaller than c, relativistic effects are extremely small."
    },

    {
        question: "Which quantity is invariant for all inertial observers according to special relativity?",
        options: [
            "Speed of light in vacuum",
            "Time interval",
            "Length",
            "Mass in every frame"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The speed of light in vacuum has the same value for all inertial observers."
    },

    {
        question: "Relativity shows that measurements of space and time depend on:",
        options: [
            "The observer's relative motion",
            "The object's color",
            "Its chemical composition",
            "Its shape only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Space and time measurements can differ for observers in relative motion."
    },


    // =========================
    // NORMAL — 32 MCQs
    // =========================

    {
        question: "If v = 0, the Lorentz factor γ is:",
        options: [
            "0",
            "1",
            "c",
            "Infinite"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For v = 0, γ = 1/√(1 − 0) = 1."
    },

    {
        question: "If the velocity of an object increases toward c, γ:",
        options: [
            "Approaches zero",
            "Remains one",
            "Increases greatly",
            "Becomes negative"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "As v approaches c, the denominator approaches zero, so γ becomes very large."
    },

    {
        question: "If γ = 2, the proper time interval Δt₀ corresponds to an observed interval:",
        options: [
            "Δt₀/2",
            "2Δt₀",
            "Δt₀",
            "4Δt₀"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Time dilation gives Δt = γΔt₀, so for γ = 2, Δt = 2Δt₀."
    },

    {
        question: "A moving clock is observed to run slower than a stationary clock because of:",
        options: [
            "Length contraction",
            "Time dilation",
            "Mass-energy conversion",
            "Doppler heating"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Time dilation causes a moving clock to be measured as running slower."
    },

    {
        question: "The time interval measured in the frame where an event occurs at the same location is called:",
        options: [
            "Dilated time",
            "Proper time",
            "Universal time",
            "Relativistic time"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Proper time is measured by a clock at the location of the events."
    },

    {
        question: "The proper length of an object is measured in the frame where the object is:",
        options: [
            "Moving fastest",
            "At rest",
            "Accelerating",
            "Rotating"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Proper length is the length measured in the object's rest frame."
    },

    {
        question: "If γ = 2, the contracted length of an object whose proper length is L₀ is:",
        options: [
            "2L₀",
            "L₀/2",
            "L₀",
            "4L₀"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Length contraction is L = L₀/γ = L₀/2."
    },

    {
        question: "The length contraction formula is:",
        options: [
            "L = γL₀",
            "L = L₀/γ",
            "L = L₀ + γ",
            "L = γ/L₀"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The contracted length is L = L₀/γ."
    },

    {
        question: "If an object moves perpendicular to its length, its length in that perpendicular direction:",
        options: [
            "Contracts",
            "Expands",
            "Is unchanged by length contraction",
            "Becomes zero"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Length contraction occurs only along the direction of motion."
    },

    {
        question: "Which quantity is the same for all inertial observers in special relativity?",
        options: [
            "Proper length",
            "Proper time",
            "Speed of light in vacuum",
            "Coordinate time"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The speed of light in vacuum is invariant for all inertial observers."
    },

    {
        question: "Two events that are simultaneous in one frame may be:",
        options: [
            "Simultaneous in every frame",
            "Not simultaneous in another frame",
            "Impossible",
            "Always separated by one second"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Simultaneity is relative and can differ between inertial frames."
    },

    {
        question: "The relativity of simultaneity is a consequence of:",
        options: [
            "Constant speed of light",
            "Conservation of charge",
            "Newton's third law",
            "Archimedes' principle"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The constancy of c leads to the relativity of simultaneity."
    },

    {
        question: "The relativistic expression for total energy is:",
        options: [
            "E = mc²",
            "E = γmc²",
            "E = ½mv² only",
            "E = mv"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For a moving particle, total relativistic energy is E = γmc²."
    },

    {
        question: "The rest energy of a particle is:",
        options: [
            "E₀ = mc",
            "E₀ = mc²",
            "E₀ = m/c",
            "E₀ = m²c²"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Rest energy is E₀ = mc²."
    },

    {
        question: "The kinetic energy of a relativistic particle can be written as:",
        options: [
            "K = E − E₀",
            "K = E + E₀",
            "K = E₀ − E",
            "K = E/c"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Relativistic kinetic energy is the difference between total energy and rest energy."
    },

    {
        question: "If the rest mass of a particle doubles, its rest energy:",
        options: [
            "Halves",
            "Doubles",
            "Becomes four times",
            "Remains unchanged"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Since E₀ = mc², rest energy is directly proportional to rest mass."
    },

    {
        question: "A mass of 1 kg has rest energy approximately equal to:",
        options: [
            "3 × 10^8 J",
            "9 × 10^8 J",
            "9 × 10^16 J",
            "3 × 10^16 J"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "E = mc² = 1 × (3 × 10^8)² = 9 × 10^16 J."
    },

    {
        question: "If an object's speed is much smaller than c, the relativistic kinetic energy approaches:",
        options: [
            "mv",
            "mc²",
            "½mv²",
            "m/c²"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "At low speeds, relativistic kinetic energy reduces to the classical expression ½mv²."
    },

    {
        question: "The classical expression K = ½mv² is a good approximation when:",
        options: [
            "v is close to c",
            "v is much smaller than c",
            "v equals c",
            "v is greater than c"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Classical mechanics is a good approximation when v << c."
    },

    {
        question: "As velocity approaches c, the kinetic energy required to increase velocity further:",
        options: [
            "Approaches zero",
            "Becomes extremely large",
            "Remains constant",
            "Becomes negative"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "An increasingly large amount of energy is required as velocity approaches c."
    },

    {
        question: "For a particle with nonzero rest mass, the Lorentz factor becomes infinite when:",
        options: [
            "v = 0",
            "v = c",
            "v = c/2",
            "v = 2c"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "At v = c, the denominator of γ becomes zero."
    },

    {
        question: "The momentum of a relativistic particle is given by:",
        options: [
            "p = mv",
            "p = γmv",
            "p = m/v",
            "p = γm/v"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Relativistic momentum is p = γmv."
    },

    {
        question: "At low speeds, relativistic momentum reduces to:",
        options: [
            "γmc²",
            "mv",
            "mc²",
            "m/v"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "When v << c, γ ≈ 1, so p ≈ mv."
    },

    {
        question: "A photon has zero:",
        options: [
            "Energy",
            "Momentum",
            "Rest mass",
            "Speed"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "A photon has zero rest mass but has energy and momentum."
    },

    {
        question: "A photon in vacuum always travels at:",
        options: [
            "c",
            "c/2",
            "2c",
            "Zero"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A photon travels at the speed of light c in vacuum."
    },

    {
        question: "The energy of a photon is given by:",
        options: [
            "E = mc²",
            "E = hf",
            "E = mv²",
            "E = Fd only"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Photon energy is E = hf, where h is Planck's constant and f is frequency."
    },

    {
        question: "According to relativity, no information can be transmitted faster than:",
        options: [
            "The speed of sound",
            "The speed of light in vacuum",
            "The speed of an electron",
            "The speed of Earth"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The speed of light in vacuum is the limiting speed for information and causal signals."
    },

    {
        question: "If an object moves at a speed close to c, an observer measures its length along motion as:",
        options: [
            "Greater than proper length",
            "Equal to proper length",
            "Less than proper length",
            "Infinite"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Relativistic length contraction makes the measured length smaller."
    },

    {
        question: "If γ = 1.25, a proper time interval of 4 s is measured as:",
        options: [
            "3.2 s",
            "4 s",
            "5 s",
            "6.25 s"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Δt = γΔt₀ = 1.25 × 4 = 5 s."
    },

    {
        question: "If γ = 2 and proper length is 10 m, the observed contracted length is:",
        options: [
            "2 m",
            "5 m",
            "10 m",
            "20 m"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "L = L₀/γ = 10/2 = 5 m."
    },

    {
        question: "If a spacecraft moves at v = 0.6c, its Lorentz factor is:",
        options: [
            "1.00",
            "1.25",
            "1.50",
            "2.00"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "γ = 1/√(1 − 0.6²) = 1/0.8 = 1.25."
    },

    {
        question: "For v = 0.8c, the Lorentz factor is:",
        options: [
            "1.25",
            "1.50",
            "1.67",
            "2.00"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "γ = 1/√(1 − 0.8²) = 1/0.6 ≈ 1.67, so the closest listed value is 1.67."
    },


    // =========================
    // DIFFICULT — 24 MCQs
    // =========================

    {
        question: "A spaceship moves at 0.6c. If 10 years pass on Earth, approximately how much proper time passes for the spacecraft?",
        options: [
            "6 years",
            "8 years",
            "10 years",
            "12.5 years"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "γ = 1.25, so Δt₀ = Δt/γ = 10/1.25 = 8 years."
    },

    {
        question: "A rod has a proper length of 20 m and moves at 0.6c. Its observed length is:",
        options: [
            "12 m",
            "16 m",
            "20 m",
            "25 m"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "At 0.6c, γ = 1.25. Therefore L = 20/1.25 = 16 m."
    },

    {
        question: "A spacecraft moves at 0.8c. If 5 years pass according to a spacecraft clock, the Earth-frame time is:",
        options: [
            "3 years",
            "4 years",
            "8.33 years",
            "10 years"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "At 0.8c, γ ≈ 1.67. Therefore Δt = γΔt₀ ≈ 1.67 × 5 = 8.33 years."
    },

    {
        question: "A particle moves at 0.6c. Its relativistic momentum is:",
        options: [
            "0.6mc",
            "0.75mc",
            "1.25mc",
            "1.67mc"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "p = γmv = 1.25 × m × 0.6c = 0.75mc."
    },

    {
        question: "A particle moves at 0.8c. Its relativistic momentum is:",
        options: [
            "0.8mc",
            "1.00mc",
            "1.33mc",
            "1.67mc"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "γ ≈ 1.67, so p = γmv ≈ 1.67 × 0.8mc ≈ 1.33mc."
    },

    {
        question: "For a particle moving at 0.6c, its total energy in terms of rest energy E₀ is:",
        options: [
            "0.6E₀",
            "1.00E₀",
            "1.25E₀",
            "1.60E₀"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Total energy E = γE₀. At 0.6c, γ = 1.25."
    },

    {
        question: "For a particle moving at 0.6c, its kinetic energy is:",
        options: [
            "0.25E₀",
            "0.60E₀",
            "1.25E₀",
            "1.60E₀"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "K = (γ − 1)E₀ = (1.25 − 1)E₀ = 0.25E₀."
    },

    {
        question: "A particle moves at 0.8c. Its total energy is approximately:",
        options: [
            "0.8E₀",
            "1.25E₀",
            "1.67E₀",
            "2.00E₀"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "At 0.8c, γ ≈ 1.67, so E ≈ 1.67E₀."
    },

    {
        question: "For a particle moving at 0.8c, its kinetic energy is approximately:",
        options: [
            "0.67E₀",
            "0.80E₀",
            "1.67E₀",
            "2.67E₀"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "K = (γ − 1)E₀ ≈ (1.67 − 1)E₀ = 0.67E₀."
    },

    {
        question: "A particle has rest mass 2 kg. Its rest energy is approximately:",
        options: [
            "6 × 10^8 J",
            "9 × 10^16 J",
            "1.8 × 10^17 J",
            "3.6 × 10^17 J"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "E₀ = mc² = 2 × 9 × 10^16 = 1.8 × 10^17 J."
    },

    {
        question: "A 1 g mass is completely converted into energy. The released energy is approximately:",
        options: [
            "9 × 10^10 J",
            "9 × 10^11 J",
            "9 × 10^13 J",
            "9 × 10^16 J"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "m = 0.001 kg. E = mc² = 0.001 × 9 × 10^16 = 9 × 10^13 J."
    },

    {
        question: "A particle moves at 0.6c. Its contracted length is 80% of its proper length because:",
        options: [
            "γ = 0.8",
            "1/γ = 0.8",
            "γ = 0.6",
            "γ = 1.8"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "At 0.6c, γ = 1.25, so 1/γ = 0.8 and L = 0.8L₀."
    },

    {
        question: "A clock travels at 0.8c. Compared with an identical stationary clock, its rate is:",
        options: [
            "1.67 times faster",
            "1.67 times slower",
            "0.8 times faster",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "At 0.8c, γ ≈ 1.67, so the moving clock runs at about 1/1.67 ≈ 0.60 of the stationary clock's rate."
    },

    {
        question: "An object travels at 0.6c. If its proper length is 50 m, the length measured by an observer is:",
        options: [
            "30 m",
            "40 m",
            "50 m",
            "62.5 m"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "L = L₀/γ = 50/1.25 = 40 m."
    },

    {
        question: "A spacecraft travels at 0.6c. If 15 years pass in the spacecraft frame, Earth observers measure approximately:",
        options: [
            "10 years",
            "12 years",
            "18.75 years",
            "25 years"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Δt = γΔt₀ = 1.25 × 15 = 18.75 years."
    },

    {
        question: "At 0.8c, the relativistic kinetic energy of a particle is approximately what fraction of its rest energy?",
        options: [
            "0.25",
            "0.60",
            "0.67",
            "1.67"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "K/E₀ = γ − 1 ≈ 1.67 − 1 = 0.67."
    },

    {
        question: "If the Lorentz factor is 5, the speed of the object is approximately:",
        options: [
            "0.80c",
            "0.90c",
            "0.98c",
            "0.99c"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "γ = 5 gives v/c = √(1 − 1/25) = √(24/25) ≈ 0.98."
    },

    {
        question: "If γ = 2, the speed of the object is approximately:",
        options: [
            "0.50c",
            "0.707c",
            "0.866c",
            "0.95c"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "v/c = √(1 − 1/γ²) = √(1 − 1/4) = √3/2 ≈ 0.866."
    },

    {
        question: "If a particle's speed changes from 0.6c to 0.8c, its Lorentz factor changes from:",
        options: [
            "1.25 to 1.67",
            "1.67 to 1.25",
            "0.6 to 0.8",
            "2 to 3"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "γ = 1.25 at 0.6c and γ ≈ 1.67 at 0.8c."
    },

    {
        question: "A particle has total energy twice its rest energy. Its Lorentz factor is:",
        options: [
            "0.5",
            "1",
            "2",
            "4"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Since E = γE₀, if E = 2E₀ then γ = 2."
    },

    {
        question: "If a particle has total energy 3 times its rest energy, its kinetic energy is:",
        options: [
            "E₀",
            "2E₀",
            "3E₀",
            "4E₀"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "K = E − E₀ = 3E₀ − E₀ = 2E₀."
    },

    {
        question: "A particle's rest energy is 5 MeV and γ = 2. Its total energy is:",
        options: [
            "2.5 MeV",
            "5 MeV",
            "7.5 MeV",
            "10 MeV"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "E = γE₀ = 2 × 5 = 10 MeV."
    },

    {
        question: "A particle has rest energy 8 MeV and γ = 1.5. Its kinetic energy is:",
        options: [
            "4 MeV",
            "8 MeV",
            "12 MeV",
            "20 MeV"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "K = (γ − 1)E₀ = 0.5 × 8 = 4 MeV."
    },

    {
        question: "If a particle's speed approaches c, its relativistic momentum approaches:",
        options: [
            "Zero",
            "A finite constant",
            "An extremely large value",
            "Negative infinity"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Since γ becomes extremely large as v approaches c, p = γmv also becomes extremely large."
    }

];

localStorage.setItem(
    "mcqQuestionsChapter13",
    JSON.stringify(questions)
);
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".mcq-card h2");
const optionsContainer = document.querySelector(".options");
const feedback = document.querySelector(".feedback");

const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");

const progressText =
    document.querySelector(".progress-top span:first-child");

const percentageText =
    document.querySelector(".progress-top span:last-child");

const progressFill =
    document.querySelector(".progress-fill");

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

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        // Preparation mode:
        // Correct answer is shown from the start
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
    const percentage = Math.round((current / total) * 100);

    progressText.textContent =
        `Question ${current} of ${total}`;

    percentageText.textContent =
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