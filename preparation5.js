const questions = [

/* =========================
   EASY — 24 MCQs
========================= */

{
    question: "Work is done on an object when a force causes:",
    options: [
        "Displacement",
        "Mass",
        "Temperature only",
        "Density"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Work is done when a force causes displacement of an object."
},

{
    question: "The SI unit of work is:",
    options: [
        "Newton",
        "Joule",
        "Watt",
        "Pascal"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The SI unit of work is the joule (J)."
},

{
    question: "Work done by a constant force is calculated using:",
    options: [
        "W = Fd cosθ",
        "W = F/d",
        "W = d/F",
        "W = F + d"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "For a constant force, W = Fd cosθ."
},

{
    question: "Work is a:",
    options: [
        "Vector quantity",
        "Scalar quantity",
        "Tensor quantity",
        "Dimensionless quantity"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Work is a scalar quantity because it is the scalar product of force and displacement."
},

{
    question: "When force and displacement are in the same direction, work is:",
    options: [
        "Positive",
        "Negative",
        "Zero",
        "Infinite"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "When θ = 0°, cosθ = 1, so work is positive."
},

{
    question: "When force and displacement are perpendicular, the work done is:",
    options: [
        "Maximum",
        "Negative",
        "Zero",
        "Infinite"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "For θ = 90°, cosθ = 0, so work done is zero."
},

{
    question: "Energy is the capacity to do:",
    options: [
        "Force",
        "Work",
        "Mass",
        "Acceleration"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Energy is defined as the capacity to do work."
},

{
    question: "The SI unit of energy is:",
    options: [
        "Watt",
        "Newton",
        "Joule",
        "Metre"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Energy is measured in joules in SI units."
},

{
    question: "The energy possessed by a moving object is called:",
    options: [
        "Potential energy",
        "Kinetic energy",
        "Chemical energy",
        "Nuclear energy"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Kinetic energy is the energy associated with motion."
},

{
    question: "The formula for kinetic energy is:",
    options: [
        "mgh",
        "½mv²",
        "Fd",
        "Pt"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Kinetic energy is KE = ½mv²."
},

{
    question: "Gravitational potential energy near Earth's surface is:",
    options: [
        "½mv²",
        "mgh",
        "Fd",
        "F/v"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Near Earth's surface, gravitational potential energy is mgh."
},

{
    question: "Potential energy is associated with an object's:",
    options: [
        "Position or configuration",
        "Speed only",
        "Temperature only",
        "Mass only"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Potential energy depends on position or configuration."
},

{
    question: "Power is the rate of doing:",
    options: [
        "Force",
        "Work",
        "Mass",
        "Momentum"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Power is the rate at which work is done."
},

{
    question: "The SI unit of power is:",
    options: [
        "Joule",
        "Newton",
        "Watt",
        "Volt"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "The SI unit of power is the watt (W)."
},

{
    question: "One watt is equal to:",
    options: [
        "One joule per second",
        "One newton per second",
        "One joule per metre",
        "One kilogram per second"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "1 W = 1 J/s."
},

{
    question: "The work-energy principle relates net work to change in:",
    options: [
        "Mass",
        "Kinetic energy",
        "Temperature",
        "Density"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Net work done on an object equals its change in kinetic energy."
},

{
    question: "If an object is lifted upward, its gravitational potential energy:",
    options: [
        "Decreases",
        "Increases",
        "Becomes zero",
        "Remains always constant"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Gravitational potential energy increases with height."
},

{
    question: "If the speed of an object increases, its kinetic energy:",
    options: [
        "Decreases",
        "Increases",
        "Always becomes zero",
        "Remains unchanged"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Kinetic energy depends on the square of speed."
},

{
    question: "The energy stored in a stretched spring is:",
    options: [
        "Elastic potential energy",
        "Kinetic energy",
        "Thermal energy",
        "Nuclear energy"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "A stretched or compressed spring stores elastic potential energy."
},

{
    question: "The energy possessed by a body because of its height is:",
    options: [
        "Kinetic energy",
        "Gravitational potential energy",
        "Electrical energy",
        "Sound energy"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Height above a reference level gives an object gravitational potential energy."
},

{
    question: "Efficiency is generally expressed as:",
    options: [
        "Useful output / total input",
        "Total input / useful output",
        "Force / distance",
        "Distance / force"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Efficiency is the ratio of useful output to total input."
},

{
    question: "A machine with 100% efficiency would have:",
    options: [
        "No useful output",
        "Useful output equal to input",
        "Output greater than input",
        "Zero input"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "100% efficiency means all input energy is converted into useful output."
},

{
    question: "A force does negative work when its component along displacement is:",
    options: [
        "In the same direction",
        "Opposite to displacement",
        "Perpendicular to displacement",
        "Zero"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "A force opposite to displacement does negative work."
},

{
    question: "A conservative force has work that is independent of:",
    options: [
        "Mass",
        "The path taken",
        "Time only",
        "Temperature"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "For a conservative force, work depends only on initial and final positions."
},


/* =========================
   NORMAL — 32 MCQs
========================= */

{
    question: "A 10 N force moves an object 5 m in the same direction. The work done is:",
    options: [
        "2 J",
        "15 J",
        "50 J",
        "100 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "W = Fd = 10 × 5 = 50 J."
},

{
    question: "A 20 N force acts at 60° to a displacement of 4 m. The work done is:",
    options: [
        "20 J",
        "40 J",
        "60 J",
        "80 J"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "W = Fd cos60° = 20 × 4 × 0.5 = 40 J."
},

{
    question: "A force of 15 N acts opposite to a displacement of 2 m. The work done is:",
    options: [
        "−30 J",
        "−15 J",
        "15 J",
        "30 J"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "W = Fd cos180° = −15 × 2 = −30 J."
},

{
    question: "A 50 N force acts perpendicular to a displacement of 3 m. The work done is:",
    options: [
        "0 J",
        "50 J",
        "150 J",
        "25 J"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "W = Fd cos90° = 0."
},

{
    question: "A 2 kg object moves at 5 m/s. Its kinetic energy is:",
    options: [
        "5 J",
        "10 J",
        "25 J",
        "50 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "KE = ½mv² = ½ × 2 × 25 = 25 J."
},

{
    question: "A 4 kg object moves at 3 m/s. Its kinetic energy is:",
    options: [
        "6 J",
        "12 J",
        "18 J",
        "36 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "KE = ½ × 4 × 3² = 18 J."
},

{
    question: "If the speed of an object is doubled, its kinetic energy becomes:",
    options: [
        "Half",
        "Double",
        "Four times",
        "Eight times"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Kinetic energy is proportional to v², so doubling speed makes it four times."
},

{
    question: "If the mass of an object is doubled while speed remains constant, its kinetic energy:",
    options: [
        "Halves",
        "Doubles",
        "Becomes four times",
        "Remains unchanged"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "KE = ½mv², so KE is directly proportional to mass."
},

{
    question: "A 5 kg object is lifted through 2 m. Taking g = 10 m/s², its gain in potential energy is:",
    options: [
        "10 J",
        "50 J",
        "100 J",
        "200 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "PE = mgh = 5 × 10 × 2 = 100 J."
},

{
    question: "An object of mass 2 kg is raised by 5 m. Taking g = 10 m/s², its potential energy increases by:",
    options: [
        "20 J",
        "50 J",
        "100 J",
        "200 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "PE = mgh = 2 × 10 × 5 = 100 J."
},

{
    question: "A 100 J amount of work is done in 5 s. The average power is:",
    options: [
        "5 W",
        "20 W",
        "50 W",
        "500 W"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "P = W/t = 100/5 = 20 W."
},

{
    question: "A machine does 600 J of work in 10 s. Its power is:",
    options: [
        "6 W",
        "60 W",
        "600 W",
        "6000 W"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "P = W/t = 600/10 = 60 W."
},

{
    question: "A machine receives 500 J of energy and gives 400 J useful output. Its efficiency is:",
    options: [
        "20%",
        "40%",
        "80%",
        "125%"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Efficiency = 400/500 × 100 = 80%."
},

{
    question: "A device has 70% efficiency and receives 1000 J input energy. Its useful output is:",
    options: [
        "70 J",
        "300 J",
        "700 J",
        "1700 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Useful output = 0.70 × 1000 = 700 J."
},

{
    question: "A force-displacement graph has a constant force of 10 N over 6 m. The work done equals the:",
    options: [
        "Slope of the graph",
        "Area under the graph",
        "Time of motion",
        "Mass of the object"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "The area under a force-displacement graph represents work done."
},

{
    question: "A constant force of 8 N acts through 5 m. The area under the F-d graph is:",
    options: [
        "13 J",
        "20 J",
        "40 J",
        "80 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Area = F × d = 8 × 5 = 40 J."
},

{
    question: "If the net work done on an object is positive, its kinetic energy:",
    options: [
        "Decreases",
        "Increases",
        "Must become zero",
        "Cannot change"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Positive net work produces an increase in kinetic energy."
},

{
    question: "If the net work done on an object is negative, its kinetic energy:",
    options: [
        "Increases",
        "Decreases",
        "Always becomes infinite",
        "Must remain constant"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Negative net work decreases kinetic energy."
},

{
    question: "When an object falls freely without air resistance, its gravitational potential energy is mainly converted into:",
    options: [
        "Kinetic energy",
        "Mass",
        "Charge",
        "Density"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "During free fall, gravitational potential energy changes into kinetic energy."
},

{
    question: "Ignoring air resistance, the total mechanical energy of a freely falling object:",
    options: [
        "Increases continuously",
        "Decreases continuously",
        "Remains constant",
        "Becomes zero"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Mechanical energy is conserved when only conservative forces act."
},

{
    question: "A 2 kg object moving at 10 m/s has kinetic energy:",
    options: [
        "20 J",
        "50 J",
        "100 J",
        "200 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "KE = ½ × 2 × 10² = 100 J."
},

{
    question: "An object has kinetic energy 200 J and mass 4 kg. Its speed is:",
    options: [
        "5 m/s",
        "10 m/s",
        "20 m/s",
        "40 m/s"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "200 = ½ × 4 × v², so v² = 100 and v = 10 m/s."
},

{
    question: "A 3 kg object is raised 4 m. Taking g = 10 m/s², the increase in gravitational potential energy is:",
    options: [
        "12 J",
        "30 J",
        "120 J",
        "300 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "PE = mgh = 3 × 10 × 4 = 120 J."
},

{
    question: "A 20 N force moves an object 10 m in its direction. The work done is:",
    options: [
        "20 J",
        "100 J",
        "200 J",
        "400 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "W = Fd = 20 × 10 = 200 J."
},

{
    question: "A person carries a bag horizontally at constant height. Ignoring air resistance, the work done by the upward supporting force is:",
    options: [
        "Positive",
        "Negative",
        "Zero",
        "Infinite"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "The supporting force is perpendicular to horizontal displacement, so its work is zero."
},

{
    question: "A friction force acts opposite to the direction of motion. Its work is:",
    options: [
        "Positive",
        "Negative",
        "Always zero",
        "Always infinite"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Friction generally acts opposite to displacement and therefore does negative work."
},

{
    question: "Power can also be expressed for a force acting along velocity as:",
    options: [
        "P = Fv",
        "P = F/v",
        "P = v/F",
        "P = F + v"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "When force and velocity are parallel, power P = Fv."
},

{
    question: "A force of 20 N acts on an object moving at 3 m/s in the same direction. Power is:",
    options: [
        "6 W",
        "17 W",
        "60 W",
        "120 W"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "P = Fv = 20 × 3 = 60 W."
},

{
    question: "A 1000 W motor operates for 10 s. The work done is:",
    options: [
        "100 J",
        "1000 J",
        "10000 J",
        "100000 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "W = Pt = 1000 × 10 = 10000 J."
},

{
    question: "A machine produces 800 J useful energy from 1000 J input. Energy lost is:",
    options: [
        "100 J",
        "200 J",
        "800 J",
        "1800 J"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Energy lost = input − useful output = 1000 − 800 = 200 J."
},

{
    question: "A conservative force does work of −50 J while an object moves from A to B. The change in potential energy is:",
    options: [
        "−50 J",
        "0 J",
        "50 J",
        "100 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "For a conservative force, ΔU = −W, so ΔU = +50 J."
},

{
    question: "The gravitational field is considered conservative because the work done by gravity depends on:",
    options: [
        "The path taken",
        "Only the initial and final positions",
        "The time taken",
        "The object's colour"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Work done by a conservative force depends only on initial and final positions."
},

{
    question: "The gravitational potential at a point is related to potential energy per unit:",
    options: [
        "Volume",
        "Mass",
        "Time",
        "Velocity"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Gravitational potential is potential energy per unit mass."
},

{
    question: "Escape velocity is the minimum speed required for an object to:",
    options: [
        "Reach the centre of Earth",
        "Escape a gravitational field without further propulsion",
        "Stop moving",
        "Increase its mass"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Escape velocity is the minimum initial speed needed to escape a body's gravitational field."
},


/* =========================
   DIFFICULT — 24 MCQs
========================= */

{
    question: "A 5 kg object accelerates from 2 m/s to 6 m/s. The net work done is:",
    options: [
        "40 J",
        "60 J",
        "80 J",
        "100 J"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Net work = ΔKE = ½ × 5 × (6² − 2²) = 100 J."
},

{
    question: "A 2 kg object speeds up from 3 m/s to 7 m/s. The net work done is:",
    options: [
        "20 J",
        "40 J",
        "50 J",
        "80 J"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "W = ½m(v² − u²) = ½ × 2 × (49 − 9) = 40 J."
},

{
    question: "A 10 kg object is lifted vertically by 5 m. Taking g = 10 m/s², the work done against gravity is:",
    options: [
        "50 J",
        "100 J",
        "500 J",
        "1000 J"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "W = mgh = 10 × 10 × 5 = 500 J."
},

{
    question: "A 4 kg object is lifted through 10 m in 5 s. Taking g = 10 m/s², the average power against gravity is:",
    options: [
        "40 W",
        "80 W",
        "100 W",
        "200 W"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "W = mgh = 4 × 10 × 10 = 400 J, so P = 400/5 = 80 W."
},

{
    question: "A 1000 kg car moving at 20 m/s has kinetic energy:",
    options: [
        "100 kJ",
        "200 kJ",
        "400 kJ",
        "800 kJ"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "KE = ½ × 1000 × 20² = 200000 J = 200 kJ."
},

{
    question: "A 1000 kg car increases speed from 10 m/s to 20 m/s. The increase in kinetic energy is:",
    options: [
        "100 kJ",
        "150 kJ",
        "200 kJ",
        "300 kJ"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "ΔKE = ½ × 1000 × (400 − 100) = 150000 J = 150 kJ."
},

{
    question: "A 2 kg object is thrown upward at 20 m/s. Ignoring air resistance and taking g = 10 m/s², its maximum height is:",
    options: [
        "10 m",
        "20 m",
        "30 m",
        "40 m"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "½mv² = mgh, so h = v²/(2g) = 400/20 = 20 m."
},

{
    question: "An object is released from a height of 45 m. Ignoring air resistance and taking g = 10 m/s², its speed just before reaching the ground is:",
    options: [
        "15 m/s",
        "20 m/s",
        "30 m/s",
        "45 m/s"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "mgh = ½mv², so v = √(2gh) = √900 = 30 m/s."
},

{
    question: "A force increases uniformly from 0 N to 20 N over a displacement of 5 m. The work done is:",
    options: [
        "25 J",
        "50 J",
        "75 J",
        "100 J"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Work is the triangular area under the F-d graph: ½ × 5 × 20 = 50 J."
},

{
    question: "A force-displacement graph is a rectangle of force 30 N and displacement 4 m. The work done is:",
    options: [
        "34 J",
        "60 J",
        "120 J",
        "240 J"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Work equals the area under the graph: 30 × 4 = 120 J."
},

{
    question: "A machine receives 2000 J input and has 75% efficiency. Its useful output is:",
    options: [
        "500 J",
        "1000 J",
        "1500 J",
        "1750 J"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Useful output = 0.75 × 2000 = 1500 J."
},

{
    question: "A motor produces 12 kW of useful power from 15 kW input power. Its efficiency is:",
    options: [
        "60%",
        "70%",
        "80%",
        "90%"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Efficiency = 12/15 × 100 = 80%."
},

{
    question: "A force of 50 N acts on an object moving at 4 m/s at an angle of 60° to its velocity. The power is:",
    options: [
        "50 W",
        "100 W",
        "150 W",
        "200 W"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "P = Fv cosθ = 50 × 4 × 0.5 = 100 W."
},

{
    question: "A 2000 W motor lifts a 100 kg load vertically at constant speed. Taking g = 10 m/s², the lifting speed is:",
    options: [
        "0.2 m/s",
        "1 m/s",
        "2 m/s",
        "20 m/s"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "P = Fv = mgv, so v = 2000/(100 × 10) = 2 m/s."
},

{
    question: "A 500 W machine operates for 2 minutes. The total energy supplied is:",
    options: [
        "1000 J",
        "30000 J",
        "60000 J",
        "120000 J"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "E = Pt = 500 × 120 = 60000 J."
},

{
    question: "A 2 kg object has kinetic energy 36 J. Its speed is:",
    options: [
        "3 m/s",
        "4 m/s",
        "6 m/s",
        "9 m/s"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "36 = ½ × 2 × v², so v² = 36 and v = 6 m/s."
},

{
    question: "An object of mass 5 kg has gravitational potential energy 500 J at a certain height. Taking g = 10 m/s², its height is:",
    options: [
        "5 m",
        "10 m",
        "50 m",
        "100 m"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "PE = mgh, so h = 500/(5 × 10) = 10 m."
},

{
    question: "An object is moved between two points in a gravitational field along two different paths. The work done by gravity is:",
    options: [
        "Different for both paths",
        "The same for both paths",
        "Always zero",
        "Always negative"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Gravity is conservative, so work depends only on initial and final positions."
},

{
    question: "A body is moved around a closed path under only a conservative force. The total work done is:",
    options: [
        "Positive",
        "Negative",
        "Zero",
        "Infinite"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "The net work done by a conservative force around a closed path is zero."
},

{
    question: "If the escape velocity from a planet is 11.2 km/s, an object launched at exactly this speed ideally:",
    options: [
        "Returns immediately",
        "Can just escape the gravitational field",
        "Stops at the surface",
        "Moves in a circular orbit only"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Escape velocity is the minimum speed needed to escape without further propulsion."
},

{
    question: "If the radius of a planet increases while its mass remains constant, its escape velocity:",
    options: [
        "Increases",
        "Decreases",
        "Remains unchanged",
        "Becomes infinite"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Escape velocity is proportional to 1/√R when mass remains constant."
},

{
    question: "A 10 kg object moving at 4 m/s experiences a constant resistive force of 5 N. The distance required to bring it to rest is:",
    options: [
        "4 m",
        "8 m",
        "16 m",
        "20 m"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Initial KE = ½ × 10 × 4² = 80 J. Since Fd = 80, d = 16 m."
},

{
    question: "A 2 kg object moving at 10 m/s is stopped by a constant resistive force of 20 N. The stopping distance is:",
    options: [
        "2 m",
        "5 m",
        "10 m",
        "20 m"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Initial KE = ½ × 2 × 100 = 100 J. Thus 20d = 100, giving d = 5 m."
},

{
    question: "A system receives 5000 J energy and loses 1000 J to the surroundings. The useful energy available is:",
    options: [
        "1000 J",
        "3000 J",
        "4000 J",
        "6000 J"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Useful energy = input − energy lost = 5000 − 1000 = 4000 J."
}

];

localStorage.setItem(
    "mcqQuestionsChapter5",
    JSON.stringify(questions)
);

let currentQuestion = 0;

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