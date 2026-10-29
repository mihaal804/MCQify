const questions = [

/* =========================
   EASY — 24 MCQs
========================= */

{
    question: "The region around a magnet where magnetic effects can be detected is called:",
    options: [
        "Electric field",
        "Magnetic field",
        "Gravitational field",
        "Potential field"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The region around a magnet in which magnetic force can act is called a magnetic field."
},

{
    question: "The SI unit of magnetic field is:",
    options: [
        "Weber",
        "Tesla",
        "Henry",
        "Volt"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The SI unit of magnetic flux density is tesla (T)."
},

{
    question: "Magnetic field lines outside a bar magnet emerge from its:",
    options: [
        "South pole",
        "Center",
        "North pole",
        "Both poles equally"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Outside a magnet, magnetic field lines emerge from the north pole and enter the south pole."
},

{
    question: "A compass needle is used to detect the:",
    options: [
        "Electric current only",
        "Magnetic field",
        "Electric potential",
        "Resistance"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A compass needle aligns itself with the magnetic field."
},

{
    question: "A current-carrying conductor produces:",
    options: [
        "Only heat",
        "A magnetic field",
        "Only light",
        "No field"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Electric current produces a magnetic field around the conductor."
},

{
    question: "The direction of magnetic field around a straight current-carrying conductor is given by:",
    options: [
        "Ohm's law",
        "Right-hand rule",
        "Lenz's law",
        "Hooke's law"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The right-hand grip rule gives the direction of the magnetic field around a straight conductor."
},

{
    question: "The SI unit of magnetic flux is:",
    options: [
        "Tesla",
        "Weber",
        "Ampere",
        "Coulomb"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Magnetic flux is measured in weber (Wb)."
},

{
    question: "The magnetic force on a stationary charged particle in a magnetic field is:",
    options: [
        "Maximum",
        "Zero",
        "Infinite",
        "Variable only with mass"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Magnetic force depends on velocity, so a stationary charge experiences no magnetic force."
},

{
    question: "The magnetic force on a moving charge is maximum when its velocity is:",
    options: [
        "Parallel to the field",
        "Perpendicular to the field",
        "Zero",
        "Opposite to gravity"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "F = qvB sinθ, so force is maximum when θ = 90°."
},

{
    question: "The magnetic force on a charged particle is zero when its velocity is:",
    options: [
        "Perpendicular to B",
        "At 45° to B",
        "Parallel to B",
        "At 90° to B"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "For parallel motion, θ = 0°, so sinθ = 0 and magnetic force is zero."
},

{
    question: "A charged particle moving perpendicular to a uniform magnetic field follows a:",
    options: [
        "Straight path",
        "Circular path",
        "Random path",
        "Parabolic path"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The magnetic force acts perpendicular to the velocity and provides centripetal force."
},

{
    question: "The force on a current-carrying conductor in a magnetic field is called:",
    options: [
        "Gravitational force",
        "Magnetic force",
        "Elastic force",
        "Electrostatic force"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A current-carrying conductor in a magnetic field experiences magnetic force."
},

{
    question: "The direction of force on a current-carrying conductor can be found using:",
    options: [
        "Fleming's left-hand rule",
        "Fleming's right-hand rule",
        "Newton's third law only",
        "Pascal's law"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Fleming's left-hand rule gives the direction of force on a current-carrying conductor."
},

{
    question: "Two parallel currents flowing in the same direction:",
    options: [
        "Repel each other",
        "Attract each other",
        "Have no interaction",
        "Become zero"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Parallel currents in the same direction attract each other."
},

{
    question: "Two parallel currents flowing in opposite directions:",
    options: [
        "Attract each other",
        "Repel each other",
        "Have zero force",
        "Produce no field"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Parallel currents in opposite directions repel each other."
},

{
    question: "An electric current produces a magnetic field because of:",
    options: [
        "Moving charges",
        "Stationary masses",
        "Heat only",
        "Pressure"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "A current is the motion of electric charges, which produces a magnetic field."
},

{
    question: "The force acting on a current-carrying wire is maximum when the wire is:",
    options: [
        "Parallel to B",
        "Perpendicular to B",
        "At 0° to B",
        "At 180° to B"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "F = BIL sinθ, so force is maximum at 90°."
},

{
    question: "Electromagnetic induction is the production of:",
    options: [
        "Resistance by heat",
        "EMF due to changing magnetic flux",
        "Mass by current",
        "Charge by pressure"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A changing magnetic flux through a circuit induces an EMF."
},

{
    question: "Faraday's law is related to:",
    options: [
        "Electromagnetic induction",
        "Resistance",
        "Gravitational attraction",
        "Thermal expansion"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Faraday's law describes the induced EMF produced by changing magnetic flux."
},

{
    question: "Lenz's law determines the direction of:",
    options: [
        "Electric resistance",
        "Induced current",
        "Gravitational force",
        "Heat flow"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Lenz's law gives the direction of induced current."
},

{
    question: "An AC generator converts:",
    options: [
        "Electrical energy into mechanical energy",
        "Mechanical energy into electrical energy",
        "Heat into mass",
        "Electrical energy into heat only"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A generator converts mechanical energy into electrical energy."
},

{
    question: "A transformer works on the principle of:",
    options: [
        "Electromagnetic induction",
        "Electrostatic charging",
        "Thermal expansion",
        "Gravitational induction"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "A transformer operates through mutual electromagnetic induction."
},

{
    question: "A transformer requires:",
    options: [
        "Direct current only",
        "Alternating current",
        "Static charge",
        "No current"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A transformer requires changing current, normally AC, to produce changing magnetic flux."
},

{
    question: "A step-up transformer increases:",
    options: [
        "Current only",
        "Voltage",
        "Resistance only",
        "Frequency"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A step-up transformer increases the output voltage."
},


/* =========================
   NORMAL — 32 MCQs
========================= */

{
    question: "The magnetic field around a long straight current-carrying wire is proportional to:",
    options: [
        "1/I",
        "I",
        "I²",
        "1/I²"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "For a long straight wire, B = μ₀I/(2πr), so B is proportional to current I."
},

{
    question: "If the current in a straight conductor is doubled, its magnetic field at the same distance becomes:",
    options: [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Since B is directly proportional to I, doubling current doubles the magnetic field."
},

{
    question: "If the distance from a long straight current-carrying wire is doubled, magnetic field becomes:",
    options: [
        "Double",
        "Four times",
        "Half",
        "Unchanged"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "For a straight wire, B is inversely proportional to distance r."
},

{
    question: "The magnetic field inside a long solenoid is approximately:",
    options: [
        "Uniform",
        "Zero everywhere",
        "Random",
        "Always circular"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "A long solenoid produces an approximately uniform magnetic field inside it."
},

{
    question: "Increasing the number of turns per unit length of a solenoid will:",
    options: [
        "Decrease B",
        "Increase B",
        "Make B zero",
        "Have no effect"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "For a solenoid, B = μ₀nI, so increasing n increases B."
},

{
    question: "The magnetic field inside a solenoid is directly proportional to:",
    options: [
        "Current",
        "1/current",
        "Resistance only",
        "Area only"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "B = μ₀nI, so magnetic field is directly proportional to current."
},

{
    question: "A charged particle moving perpendicular to B experiences a force that is:",
    options: [
        "Parallel to velocity",
        "Perpendicular to velocity",
        "Opposite to velocity",
        "Always zero"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Magnetic force is perpendicular to both the velocity and magnetic field."
},

{
    question: "A magnetic field does no work on a charged particle because magnetic force is:",
    options: [
        "Parallel to velocity",
        "Perpendicular to velocity",
        "Always zero",
        "Parallel to displacement"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Magnetic force is perpendicular to velocity, so it does no work."
},

{
    question: "The radius of circular motion of a charged particle in a magnetic field is proportional to:",
    options: [
        "1/v",
        "v",
        "1/B only",
        "B²"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "r = mv/(qB), so radius is directly proportional to velocity."
},

{
    question: "If the speed of a charged particle moving perpendicular to B is doubled, its circular orbit radius becomes:",
    options: [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Since r = mv/(qB), doubling v doubles r."
},

{
    question: "If magnetic field strength is doubled while speed remains constant, the radius becomes:",
    options: [
        "Double",
        "Four times",
        "Half",
        "Unchanged"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Radius is inversely proportional to B, so doubling B halves the radius."
},

{
    question: "The angular frequency of a charged particle in a uniform magnetic field is:",
    options: [
        "qB/m",
        "m/qB",
        "q/mB",
        "B/qm"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "The cyclotron angular frequency is ω = qB/m."
},

{
    question: "A charged particle entering a magnetic field at an angle other than 0° or 90° follows a:",
    options: [
        "Straight path",
        "Helical path",
        "Circular path only",
        "Parabolic path"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "The velocity component perpendicular to B causes circular motion while the parallel component causes forward motion."
},

{
    question: "The force on a current-carrying conductor is given by:",
    options: [
        "F = BIL sinθ",
        "F = B/I L",
        "F = IL/B",
        "F = BI/L"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "The magnetic force on a straight conductor is F = BIL sinθ."
},

{
    question: "A wire carrying current parallel to a magnetic field experiences:",
    options: [
        "Maximum force",
        "Zero force",
        "Infinite force",
        "Variable force only"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "For θ = 0°, sinθ = 0, so the magnetic force is zero."
},

{
    question: "For a coil at 90° to the magnetic field, its torque is:",
    options: [
        "BINA",
        "BI/A",
        "B/AIN",
        "A/BI"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "At 90°, sinθ = 1, so torque τ = BINA."
},

{
    question: "A current-carrying coil in a magnetic field tends to rotate because of:",
    options: [
        "Magnetic torque",
        "Gravitational force",
        "Thermal expansion",
        "Electrostatic pressure"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Opposite magnetic forces on the sides of the coil produce a torque."
},

{
    question: "The magnetic flux through an area A in field B is:",
    options: [
        "BA sinθ",
        "BA cosθ",
        "B/A",
        "A/B"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Magnetic flux is Φ = BA cosθ, where θ is the angle between B and the area normal."
},

{
    question: "Magnetic flux is maximum when the magnetic field is:",
    options: [
        "Parallel to the area normal",
        "Parallel to the surface",
        "At 90° to the normal",
        "Zero"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Φ = BA cosθ, so flux is maximum when θ = 0°."
},

{
    question: "Magnetic flux through a surface is zero when B is:",
    options: [
        "Parallel to the normal",
        "Perpendicular to the surface",
        "Parallel to the surface",
        "Maximum"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "When B is parallel to the surface, it is perpendicular to the area normal, giving cos90° = 0."
},

{
    question: "According to Faraday's law, induced EMF is proportional to:",
    options: [
        "Magnetic flux",
        "Rate of change of magnetic flux",
        "Resistance only",
        "Charge only"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Faraday's law states that induced EMF is proportional to the rate of change of magnetic flux."
},

{
    question: "Increasing the number of turns in a coil during electromagnetic induction will:",
    options: [
        "Decrease induced EMF",
        "Increase induced EMF",
        "Make EMF zero",
        "Not affect EMF"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Faraday's law gives ε = -N(dΦ/dt), so more turns increase induced EMF."
},

{
    question: "The negative sign in Faraday's law represents:",
    options: [
        "Ohm's law",
        "Lenz's law",
        "Newton's law",
        "Conservation of charge only"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "The negative sign indicates that induced EMF opposes the change producing it, as stated by Lenz's law."
},

{
    question: "An induced current exists only when the magnetic flux through the circuit is:",
    options: [
        "Changing",
        "Constant",
        "Always maximum",
        "Always zero"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "A changing magnetic flux is required to induce EMF and current."
},

{
    question: "Moving a magnet faster through a coil generally produces:",
    options: [
        "Smaller induced EMF",
        "Larger induced EMF",
        "Zero induced EMF",
        "No change"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Faster motion produces a greater rate of change of flux and therefore greater induced EMF."
},

{
    question: "In a generator, the rotating coil changes:",
    options: [
        "Magnetic flux through the coil",
        "Mass of electrons",
        "Gravitational field",
        "Resistance of space"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "Rotation changes the magnetic flux through the coil, inducing EMF."
},

{
    question: "The output of a simple AC generator changes direction periodically because:",
    options: [
        "The coil rotates in the magnetic field",
        "Resistance becomes zero",
        "Magnet disappears",
        "Current becomes static"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "As the rotating coil changes orientation, the induced EMF reverses periodically."
},

{
    question: "In a step-up transformer, the number of turns in the secondary coil is:",
    options: [
        "Less than primary",
        "Greater than primary",
        "Equal to primary always",
        "Zero"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "For a step-up transformer, Ns > Np, so the secondary voltage is greater."
},

{
    question: "For an ideal transformer, the ratio of voltages is related to:",
    options: [
        "Ratio of turns",
        "Ratio of masses",
        "Ratio of temperatures",
        "Ratio of charges"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "For an ideal transformer, Vs/Vp = Ns/Np."
},

{
    question: "A transformer transfers electrical energy from primary to secondary through:",
    options: [
        "Mechanical contact",
        "Changing magnetic flux",
        "Static charge",
        "Heat conduction"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Changing magnetic flux in the core produces induced EMF in the secondary coil."
},

{
    question: "An ideal transformer has 100 primary turns and 500 secondary turns. It is a:",
    options: [
        "Step-down transformer",
        "Step-up transformer",
        "DC motor",
        "Generator"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Since Ns > Np, the transformer increases voltage."
},

{
    question: "If the magnetic field is doubled while the coil area remains constant, magnetic flux at the same orientation:",
    options: [
        "Halves",
        "Doubles",
        "Becomes zero",
        "Remains unchanged"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Φ = BA cosθ, so doubling B doubles the flux."
},

{
    question: "A charged particle moving parallel to B has:",
    options: [
        "Maximum magnetic force",
        "Zero magnetic force",
        "Circular motion",
        "Maximum acceleration"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "F = qvB sinθ and θ = 0°, so magnetic force is zero."
},

{
    question: "The force between two parallel current-carrying wires is proportional to:",
    options: [
        "I₁I₂",
        "I₁/I₂",
        "1/(I₁I₂)",
        "I₁ + I₂ only"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "The force per unit length is proportional to the product I₁I₂."
},


/* =========================
   DIFFICULT — 24 MCQs
========================= */

{
    question: "A wire carries 5 A current. If the current is increased to 15 A, its magnetic field at the same distance becomes:",
    options: [
        "One-third",
        "Three times",
        "Five times",
        "Nine times"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Magnetic field around a straight wire is directly proportional to current. 15/5 = 3."
},

{
    question: "A charged particle has q = 2 × 10⁻⁶ C, v = 3 × 10⁵ m/s and B = 0.5 T. If v ⟂ B, the magnetic force is:",
    options: [
        "0.03 N",
        "0.3 N",
        "3 N",
        "30 N"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "F = qvB = (2×10⁻⁶)(3×10⁵)(0.5) = 0.3 N."
},

{
    question: "A 2 m wire carries 4 A current perpendicular to a 0.5 T field. The force is:",
    options: [
        "1 N",
        "2 N",
        "4 N",
        "8 N"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "F = BIL = 0.5 × 4 × 2 = 4 N."
},

{
    question: "A 3 m wire carries 2 A current in a 0.4 T field at 30°. The force is:",
    options: [
        "0.8 N",
        "1.2 N",
        "2.4 N",
        "4.8 N"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "F = BIL sin30° = 0.4 × 2 × 3 × 0.5 = 1.2 N."
},

{
    question: "A charge of 4 μC moves at 2 × 10⁵ m/s perpendicular to a 0.25 T field. The force is:",
    options: [
        "0.02 N",
        "0.2 N",
        "2 N",
        "20 N"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "F = qvB = (4×10⁻⁶)(2×10⁵)(0.25) = 0.2 N."
},

{
    question: "A charged particle moves in a circle of radius 0.2 m with speed 4 × 10⁶ m/s in B = 0.5 T. For a proton, the approximate radius relation is:",
    options: [
        "r = mv/qB",
        "r = qB/mv",
        "r = qv/mB",
        "r = mB/qv"
    ],
    answer: 0,
    difficulty: "Difficult",
    explanation: "Equating magnetic and centripetal forces gives r = mv/(qB)."
},

{
    question: "A 0.5 m² surface is in a 0.8 T magnetic field. If B is perpendicular to the surface, the flux is:",
    options: [
        "0.2 Wb",
        "0.4 Wb",
        "0.8 Wb",
        "1.6 Wb"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "B is perpendicular to the surface, so it is parallel to the normal. Φ = BA = 0.8 × 0.5 = 0.4 Wb."
},

{
    question: "A 0.4 m² surface is placed in a 0.5 T field at 60° to the area normal. The flux is:",
    options: [
        "0.05 Wb",
        "0.10 Wb",
        "0.20 Wb",
        "0.40 Wb"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Φ = BA cos60° = 0.5 × 0.4 × 0.5 = 0.10 Wb."
},

{
    question: "A coil has 100 turns. Its magnetic flux changes from 0.02 Wb to 0.08 Wb in 0.3 s. The average induced EMF is:",
    options: [
        "10 V",
        "20 V",
        "30 V",
        "40 V"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "ε = NΔΦ/Δt = 100(0.08−0.02)/0.3 = 20 V."
},

{
    question: "A 200-turn coil experiences a flux change of 0.05 Wb in 0.5 s. The induced EMF magnitude is:",
    options: [
        "10 V",
        "20 V",
        "30 V",
        "40 V"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "ε = NΔΦ/Δt = 200 × 0.05/0.5 = 20 V."
},

{
    question: "A coil has 50 turns and flux changes by 0.2 Wb in 0.5 s. The average induced EMF is:",
    options: [
        "5 V",
        "10 V",
        "20 V",
        "25 V"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "ε = NΔΦ/Δt = 50 × 0.2/0.5 = 20 V."
},

{
    question: "A 100-turn coil has a flux of 0.04 Wb that becomes zero in 0.2 s. The induced EMF magnitude is:",
    options: [
        "10 V",
        "20 V",
        "30 V",
        "40 V"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "ε = NΔΦ/Δt = 100 × 0.04/0.2 = 20 V."
},

{
    question: "A coil has 200 turns, area 0.01 m² and B = 0.5 T. If B is normal to the coil, its flux linkage is:",
    options: [
        "0.1 Wb-turn",
        "0.5 Wb-turn",
        "1 Wb-turn",
        "2 Wb-turn"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Flux = BA = 0.005 Wb. Flux linkage = NΦ = 200 × 0.005 = 1 Wb-turn."
},

{
    question: "A 20-turn coil of area 0.02 m² is in a 0.5 T field. At maximum flux, the flux linkage is:",
    options: [
        "0.02 Wb-turn",
        "0.1 Wb-turn",
        "0.2 Wb-turn",
        "0.4 Wb-turn"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Φ = BA = 0.5 × 0.02 = 0.01 Wb. NΦ = 20 × 0.01 = 0.2 Wb-turn."
},

{
    question: "A transformer has 100 primary turns and 500 secondary turns. If primary voltage is 20 V, secondary voltage is:",
    options: [
        "4 V",
        "20 V",
        "100 V",
        "200 V"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Vs/Vp = Ns/Np = 500/100 = 5, so Vs = 5 × 20 = 100 V."
},

{
    question: "A transformer has 1000 primary turns and 200 secondary turns. If primary voltage is 240 V, secondary voltage is:",
    options: [
        "24 V",
        "48 V",
        "120 V",
        "480 V"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Vs/Vp = Ns/Np = 200/1000 = 0.2, so Vs = 48 V."
},

{
    question: "An ideal transformer has Vs = 120 V and Vp = 240 V. If primary current is 2 A, secondary current is:",
    options: [
        "1 A",
        "2 A",
        "4 A",
        "8 A"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "For an ideal transformer, VpIp = VsIs. Thus Is = 240×2/120 = 4 A."
},

{
    question: "A 10-turn coil carries 3 A in a 0.4 T field. If its area is 0.02 m² and θ = 90°, torque is:",
    options: [
        "0.024 N m",
        "0.12 N m",
        "0.24 N m",
        "2.4 N m"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "τ = BINA = 0.4 × 10 × 3 × 0.02 = 0.24 N m."
},

{
    question: "A current-carrying coil has maximum torque when the angle between B and the coil's normal is:",
    options: [
        "0°",
        "30°",
        "60°",
        "90°"
    ],
    answer: 3,
    difficulty: "Difficult",
    explanation: "τ = BINA sinθ, so torque is maximum when θ = 90°."
},

{
    question: "A wire carries 10 A current. At a distance of 0.1 m, its magnetic field is proportional to:",
    options: [
        "10/0.1",
        "0.1/10",
        "10 × 0.1",
        "1/(10 × 0.1)"
    ],
    answer: 0,
    difficulty: "Difficult",
    explanation: "For a long straight wire, B = μ₀I/(2πr), so B is proportional to I/r."
},

{
    question: "Two parallel wires carry currents 2 A and 4 A. If both currents are doubled, the force per unit length becomes:",
    options: [
        "2 times",
        "4 times",
        "6 times",
        "8 times"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Force per unit length is proportional to I₁I₂. Doubling both currents makes the force four times larger."
},

{
    question: "A charged particle enters a uniform magnetic field with velocity having both parallel and perpendicular components. Its motion is:",
    options: [
        "Purely circular",
        "Purely straight",
        "Helical",
        "Stationary"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "The perpendicular component causes circular motion while the parallel component produces forward motion."
},

{
    question: "A charged particle moves perpendicular to B. If its charge is doubled while m, v and B remain constant, its orbit radius becomes:",
    options: [
        "Double",
        "Half",
        "Four times",
        "Unchanged"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "r = mv/(qB), so doubling q reduces the radius to half."
}

];

localStorage.setItem(
    "mcqQuestionsChapter12",
    JSON.stringify(questions)
);
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".mcq-card h2");
const optionsContainer = document.querySelector(".options");
const feedback = document.querySelector(".feedback");

const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");

const progressText = document.querySelector(".progress-top span:first-child");
const percentageText = document.querySelector(".progress-top span:last-child");
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
    const percentage = Math.round((current / total) * 100);

    progressText.textContent =
        `Question ${current} of ${total}`;

    percentageText.textContent =
        `${percentage}% Complete`;

    progressFill.style.width =
        `${percentage}%`;

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