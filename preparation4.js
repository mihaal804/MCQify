const questions = [

/* =========================
   EASY — 24 MCQs
========================= */

{
    question: "In uniform circular motion, the speed of an object is:",
    options: [
        "Constant",
        "Always increasing",
        "Always decreasing",
        "Zero"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "In uniform circular motion, the speed remains constant."
},

{
    question: "The angle through which a rotating body turns is called:",
    options: [
        "Angular displacement",
        "Angular velocity",
        "Torque",
        "Period"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Angular displacement measures the angle through which a body rotates."
},

{
    question: "The SI unit of angular displacement is:",
    options: [
        "Metre",
        "Radian",
        "Newton",
        "Hertz"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The SI unit used for angular displacement is the radian."
},

{
    question: "One complete revolution is equal to:",
    options: [
        "π rad",
        "2π rad",
        "π/2 rad",
        "4π rad"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "One complete revolution is 360°, which is equal to 2π radians."
},

{
    question: "Angular velocity is the rate of change of:",
    options: [
        "Mass",
        "Angular displacement",
        "Linear momentum",
        "Force"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Angular velocity is the rate of change of angular displacement."
},

{
    question: "The SI unit of angular velocity is:",
    options: [
        "rad s⁻¹",
        "m s⁻¹",
        "N m",
        "kg m⁻¹"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Angular velocity is measured in radians per second."
},

{
    question: "Angular acceleration is the rate of change of:",
    options: [
        "Linear speed",
        "Angular velocity",
        "Radius",
        "Mass"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Angular acceleration is the rate of change of angular velocity."
},

{
    question: "The SI unit of angular acceleration is:",
    options: [
        "rad s⁻¹",
        "rad s⁻²",
        "m s⁻²",
        "N m⁻¹"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Angular acceleration is measured in radians per second squared."
},

{
    question: "The relation between linear speed v and angular speed ω is:",
    options: [
        "v = rω",
        "v = r/ω",
        "v = ω/r",
        "v = r + ω"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "For circular motion, linear speed is given by v = rω."
},

{
    question: "The direction of instantaneous velocity in circular motion is:",
    options: [
        "Toward the centre",
        "Away from the centre",
        "Tangent to the circle",
        "Along the radius"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Instantaneous velocity is tangent to the circular path."
},

{
    question: "Centripetal acceleration is directed:",
    options: [
        "Tangentially",
        "Toward the centre",
        "Away from the centre",
        "Opposite to velocity"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Centripetal acceleration always acts toward the centre of the circular path."
},

{
    question: "The formula for centripetal acceleration is:",
    options: [
        "v/r",
        "v²/r",
        "vr",
        "r²/v"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Centripetal acceleration is aₙ = v²/r."
},

{
    question: "The SI unit of torque is:",
    options: [
        "N",
        "J s",
        "N m",
        "kg m"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Torque is measured in newton-metres."
},

{
    question: "Torque is the turning effect of:",
    options: [
        "Mass",
        "Force",
        "Energy",
        "Power"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The turning effect produced by a force is called torque."
},

{
    question: "Torque is maximum when force acts at an angle of:",
    options: [
        "0°",
        "30°",
        "60°",
        "90°"
    ],
    answer: 3,
    difficulty: "Easy",
    explanation: "τ = rF sinθ, so torque is maximum when θ = 90°."
},

{
    question: "Moment of inertia depends mainly on the distribution of:",
    options: [
        "Temperature",
        "Mass",
        "Charge",
        "Time"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Moment of inertia depends on how the mass is distributed about the axis."
},

{
    question: "The SI unit of moment of inertia is:",
    options: [
        "kg m²",
        "kg m",
        "N m",
        "kg m⁻²"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "The SI unit of moment of inertia is kg m²."
},

{
    question: "Angular momentum of a rotating body is related to:",
    options: [
        "Iω",
        "I/ω",
        "ω/I",
        "I + ω"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "For rotation about a fixed axis, angular momentum is L = Iω."
},

{
    question: "The SI unit of angular momentum is:",
    options: [
        "kg m² s⁻¹",
        "kg m s⁻¹",
        "N m⁻¹",
        "J s⁻²"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "Angular momentum has SI unit kg m² s⁻¹."
},

{
    question: "Rotational kinetic energy is given by:",
    options: [
        "½mv²",
        "Iω",
        "½Iω²",
        "τθ"
    ],
    answer: 2,
    difficulty: "Easy",
    explanation: "Rotational kinetic energy is K = ½Iω²."
},

{
    question: "For rolling without slipping, the relation between v and ω is:",
    options: [
        "v = rω",
        "v = r/ω",
        "v = ωr²",
        "v = ω/r"
    ],
    answer: 0,
    difficulty: "Easy",
    explanation: "For pure rolling, the relation is v = rω."
},

{
    question: "The time taken for one complete revolution is called:",
    options: [
        "Frequency",
        "Period",
        "Angular speed",
        "Amplitude"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "The period is the time required for one complete revolution."
},

{
    question: "Frequency is the number of complete revolutions made per:",
    options: [
        "Metre",
        "Second",
        "Newton",
        "Radian"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Frequency is the number of cycles or revolutions completed per second."
},

{
    question: "The relation between frequency f and period T is:",
    options: [
        "f = T",
        "f = 1/T",
        "f = T²",
        "f = 2T"
    ],
    answer: 1,
    difficulty: "Easy",
    explanation: "Frequency and period are reciprocals, so f = 1/T."
},


/* =========================
   NORMAL — 32 MCQs
========================= */

{
    question: "A wheel rotates through 4π radians. How many complete revolutions does it make?",
    options: [
        "1",
        "2",
        "4",
        "8"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Number of revolutions = 4π/2π = 2."
},

{
    question: "A point on a rotating wheel has radius 0.5 m and angular speed 6 rad/s. Its linear speed is:",
    options: [
        "3 m/s",
        "6 m/s",
        "12 m/s",
        "0.083 m/s"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "v = rω = 0.5 × 6 = 3 m/s."
},

{
    question: "A body moves in a circle of radius 2 m with speed 4 m/s. Its centripetal acceleration is:",
    options: [
        "2 m/s²",
        "4 m/s²",
        "8 m/s²",
        "16 m/s²"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "aₙ = v²/r = 16/2 = 8 m/s²."
},

{
    question: "If angular speed doubles while radius remains constant, linear speed becomes:",
    options: [
        "Half",
        "Unchanged",
        "Double",
        "Four times"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Since v = rω, doubling angular speed doubles linear speed."
},

{
    question: "If the radius doubles while angular speed remains constant, linear speed:",
    options: [
        "Halves",
        "Doubles",
        "Becomes four times",
        "Becomes zero"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Since v = rω, doubling radius doubles linear speed."
},

{
    question: "A wheel makes 5 revolutions in 10 s. Its frequency is:",
    options: [
        "0.2 Hz",
        "0.5 Hz",
        "2 Hz",
        "5 Hz"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "f = number of revolutions/time = 5/10 = 0.5 Hz."
},

{
    question: "A rotating object has frequency 4 Hz. Its period is:",
    options: [
        "4 s",
        "2 s",
        "0.25 s",
        "0.04 s"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "T = 1/f = 1/4 = 0.25 s."
},

{
    question: "An object moves with constant speed in a circle. Its velocity changes because:",
    options: [
        "Its mass changes",
        "Its direction changes",
        "Its radius changes",
        "Its speed becomes zero"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Velocity changes whenever its direction changes."
},

{
    question: "In uniform circular motion, centripetal acceleration continuously changes the object's:",
    options: [
        "Mass",
        "Direction of velocity",
        "Radius",
        "Period"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Centripetal acceleration continuously changes the direction of velocity."
},

{
    question: "If speed is doubled at the same radius, centripetal acceleration becomes:",
    options: [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Because aₙ = v²/r, doubling speed makes acceleration four times."
},

{
    question: "If radius is doubled at the same speed, centripetal acceleration becomes:",
    options: [
        "Double",
        "Half",
        "Four times",
        "Unchanged"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Because aₙ = v²/r, doubling radius halves the acceleration."
},

{
    question: "A 2 kg mass moves at 3 m/s in a circle of radius 1.5 m. The centripetal force is:",
    options: [
        "3 N",
        "6 N",
        "12 N",
        "18 N"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Fₙ = mv²/r = 2 × 9/1.5 = 12 N."
},

{
    question: "A 4 kg object moves at 5 m/s in a circle of radius 10 m. Its centripetal force is:",
    options: [
        "5 N",
        "10 N",
        "20 N",
        "40 N"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Fₙ = mv²/r = 4 × 25/10 = 10 N."
},

{
    question: "A force of 20 N acts at a perpendicular distance of 0.5 m from an axis. The torque is:",
    options: [
        "5 N m",
        "10 N m",
        "20 N m",
        "40 N m"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "τ = Fd = 20 × 0.5 = 10 N m."
},

{
    question: "A 10 N force acts at 30° to a 2 m lever arm. Its torque magnitude is:",
    options: [
        "5 N m",
        "10 N m",
        "17.3 N m",
        "20 N m"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "τ = rF sinθ = 2 × 10 × sin30° = 10 N m."
},

{
    question: "If the perpendicular distance from the axis is increased, the torque produced by the same force:",
    options: [
        "Decreases",
        "Increases",
        "Becomes zero",
        "Remains exactly the same"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Torque is τ = Fd, so increasing perpendicular distance increases torque."
},

{
    question: "A door is easier to open when the force is applied:",
    options: [
        "Near the hinges",
        "Far from the hinges",
        "Directly at the hinges",
        "Along the hinge"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "A larger perpendicular distance from the hinge produces greater torque."
},

{
    question: "For a rigid body, the relation between torque and angular acceleration is:",
    options: [
        "τ = Iα",
        "τ = I/α",
        "τ = α/I",
        "τ = I + α"
    ],
    answer: 0,
    difficulty: "Normal",
    explanation: "The rotational form of Newton's second law is τ = Iα."
},

{
    question: "If the net torque on a body is zero, its angular acceleration is:",
    options: [
        "Maximum",
        "Zero",
        "Always negative",
        "Always positive"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "From τ = Iα, zero net torque gives zero angular acceleration."
},

{
    question: "A body has moment of inertia 2 kg m² and angular acceleration 3 rad/s². The net torque is:",
    options: [
        "1.5 N m",
        "5 N m",
        "6 N m",
        "9 N m"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "τ = Iα = 2 × 3 = 6 N m."
},

{
    question: "If the same torque acts on two bodies, the body with larger moment of inertia has:",
    options: [
        "Larger angular acceleration",
        "Smaller angular acceleration",
        "The same angular acceleration always",
        "Zero angular acceleration"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "From α = τ/I, larger moment of inertia gives smaller angular acceleration."
},

{
    question: "If the distance of a point mass from the rotation axis doubles, its contribution to moment of inertia becomes:",
    options: [
        "Half",
        "Double",
        "Four times",
        "Eight times"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "For a point mass, I = mr², so doubling r makes I four times."
},

{
    question: "A point mass of 2 kg is 3 m from an axis. Its moment of inertia is:",
    options: [
        "6 kg m²",
        "9 kg m²",
        "18 kg m²",
        "36 kg m²"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "I = mr² = 2 × 3² = 18 kg m²."
},

{
    question: "A rotating body has I = 4 kg m² and ω = 5 rad/s. Its angular momentum is:",
    options: [
        "0.8 kg m²/s",
        "9 kg m²/s",
        "20 kg m²/s",
        "25 kg m²/s"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "L = Iω = 4 × 5 = 20 kg m²/s."
},

{
    question: "If angular speed doubles while moment of inertia remains constant, angular momentum:",
    options: [
        "Halves",
        "Doubles",
        "Becomes four times",
        "Becomes zero"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Since L = Iω, doubling ω doubles angular momentum."
},

{
    question: "A rotating body has I = 2 kg m² and ω = 4 rad/s. Its rotational kinetic energy is:",
    options: [
        "4 J",
        "8 J",
        "16 J",
        "32 J"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "K = ½Iω² = ½ × 2 × 16 = 16 J."
},

{
    question: "If angular speed doubles, rotational kinetic energy becomes:",
    options: [
        "Half",
        "Double",
        "Four times",
        "Eight times"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "Rotational kinetic energy is proportional to ω²."
},

{
    question: "A wheel rolls without slipping. If its radius is 0.25 m and angular speed is 8 rad/s, its speed is:",
    options: [
        "1 m/s",
        "2 m/s",
        "4 m/s",
        "8 m/s"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "v = rω = 0.25 × 8 = 2 m/s."
},

{
    question: "A wheel rolling without slipping has speed 6 m/s and radius 0.5 m. Its angular speed is:",
    options: [
        "3 rad/s",
        "6 rad/s",
        "12 rad/s",
        "24 rad/s"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "ω = v/r = 6/0.5 = 12 rad/s."
},

{
    question: "For a particle moving in a circle, the centripetal force is always:",
    options: [
        "Tangential to the path",
        "Directed toward the centre",
        "Directed away from the centre",
        "Zero"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "The required centripetal force is directed toward the centre."
},

{
    question: "If the net force toward the centre suddenly becomes zero, an object moving in a circle tends to move:",
    options: [
        "Toward the centre",
        "Along the tangent",
        "In a smaller circle",
        "Directly backward"
    ],
    answer: 1,
    difficulty: "Normal",
    explanation: "Without centripetal force, the object continues along the instantaneous tangent."
},

{
    question: "The angular speed of a body making 2 revolutions per second is:",
    options: [
        "π rad/s",
        "2π rad/s",
        "4π rad/s",
        "8π rad/s"
    ],
    answer: 2,
    difficulty: "Normal",
    explanation: "ω = 2πf = 2π × 2 = 4π rad/s."
},




/* =========================
   DIFFICULT — 24 MCQs
========================= */

{
    question: "A particle moves in a circle with radius 4 m and angular speed 3 rad/s. Its centripetal acceleration is:",
    options: [
        "3 m/s²",
        "12 m/s²",
        "24 m/s²",
        "36 m/s²"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "aₙ = rω² = 4 × 3² = 36 m/s²."
},

{
    question: "A particle has angular speed 5 rad/s and radius 0.8 m. Its linear speed is:",
    options: [
        "2 m/s",
        "4 m/s",
        "5.8 m/s",
        "6.25 m/s"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "v = rω = 0.8 × 5 = 4 m/s."
},

{
    question: "A body moves at 10 m/s in a circle of radius 5 m. Its centripetal acceleration is:",
    options: [
        "2 m/s²",
        "10 m/s²",
        "20 m/s²",
        "50 m/s²"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "aₙ = v²/r = 100/5 = 20 m/s²."
},

{
    question: "A 3 kg object moves at 4 m/s in a circle of radius 2 m. The centripetal force is:",
    options: [
        "6 N",
        "12 N",
        "24 N",
        "48 N"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Fₙ = mv²/r = 3 × 16/2 = 24 N."
},

{
    question: "A force of 15 N acts at 60° to a lever arm of length 2 m. The torque is:",
    options: [
        "15 N m",
        "20 N m",
        "25.98 N m",
        "30 N m"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "τ = rF sin60° = 2 × 15 × 0.866 ≈ 25.98 N m."
},

{
    question: "A force of 20 N produces a torque of 8 N m. If it acts perpendicularly, the perpendicular distance is:",
    options: [
        "0.2 m",
        "0.4 m",
        "2.5 m",
        "4 m"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "τ = Fd, so d = 8/20 = 0.4 m."
},

{
    question: "A body has moment of inertia 5 kg m² and angular acceleration 4 rad/s². The torque is:",
    options: [
        "1.25 N m",
        "9 N m",
        "20 N m",
        "25 N m"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "τ = Iα = 5 × 4 = 20 N m."
},

{
    question: "A torque of 30 N m produces angular acceleration 6 rad/s². The moment of inertia is:",
    options: [
        "0.2 kg m²",
        "5 kg m²",
        "24 kg m²",
        "180 kg m²"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "I = τ/α = 30/6 = 5 kg m²."
},

{
    question: "A point mass of 4 kg is at a distance of 2 m from an axis. Its moment of inertia is:",
    options: [
        "2 kg m²",
        "8 kg m²",
        "16 kg m²",
        "32 kg m²"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "I = mr² = 4 × 2² = 16 kg m²."
},

{
    question: "Two identical point masses are moved from radius r to radius 2r. Their total moment of inertia becomes:",
    options: [
        "Half",
        "Double",
        "Four times",
        "Eight times"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Since I is proportional to r², doubling r makes moment of inertia four times."
},

{
    question: "A rotating body has I = 3 kg m² and angular speed 10 rad/s. Its rotational kinetic energy is:",
    options: [
        "30 J",
        "100 J",
        "150 J",
        "300 J"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "K = ½Iω² = ½ × 3 × 100 = 150 J."
},

{
    question: "A body has angular momentum 40 kg m²/s and moment of inertia 8 kg m². Its angular speed is:",
    options: [
        "2 rad/s",
        "5 rad/s",
        "8 rad/s",
        "320 rad/s"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "ω = L/I = 40/8 = 5 rad/s."
},

{
    question: "If no external torque acts on a rotating system, its total angular momentum:",
    options: [
        "Always increases",
        "Always decreases",
        "Remains constant",
        "Becomes zero"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Angular momentum is conserved when the net external torque is zero."
},

{
    question: "A skater pulls their arms inward while spinning. If external torque is negligible, their angular speed:",
    options: [
        "Decreases",
        "Increases",
        "Becomes zero",
        "Remains necessarily unchanged"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "Pulling the arms inward decreases moment of inertia, so angular speed increases to conserve angular momentum."
},

{
    question: "A rotating system has angular momentum 60 kg m²/s. If its moment of inertia is reduced to half, its angular speed becomes:",
    options: [
        "Half",
        "Unchanged",
        "Double",
        "Four times"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "With L constant, ω is inversely proportional to I. Halving I doubles ω."
},

{
    question: "A wheel starts from rest and has constant angular acceleration 2 rad/s². Its angular velocity after 5 s is:",
    options: [
        "2 rad/s",
        "5 rad/s",
        "10 rad/s",
        "25 rad/s"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "ω = ω₀ + αt = 0 + 2 × 5 = 10 rad/s."
},

{
    question: "A wheel starts from rest with angular acceleration 2 rad/s². Its angular displacement in 4 s is:",
    options: [
        "4 rad",
        "8 rad",
        "16 rad",
        "32 rad"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "θ = ½αt² = ½ × 2 × 4² = 16 rad."
},

{
    question: "A wheel initially rotates at 4 rad/s and accelerates at 3 rad/s² for 2 s. Its final angular speed is:",
    options: [
        "6 rad/s",
        "8 rad/s",
        "10 rad/s",
        "12 rad/s"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "ω = ω₀ + αt = 4 + 3 × 2 = 10 rad/s."
},

{
    question: "A rotating body changes angular speed from 5 rad/s to 15 rad/s in 2 s. Its angular acceleration is:",
    options: [
        "2.5 rad/s²",
        "5 rad/s²",
        "10 rad/s²",
        "20 rad/s²"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "α = Δω/Δt = (15 − 5)/2 = 5 rad/s²."
},

{
    question: "A wheel rotates at 120 revolutions per minute. Its frequency is:",
    options: [
        "1 Hz",
        "2 Hz",
        "60 Hz",
        "120 Hz"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "120 rpm = 120/60 = 2 revolutions per second, so f = 2 Hz."
},

{
    question: "A wheel rotates at 120 rpm. Its angular speed is:",
    options: [
        "2π rad/s",
        "4π rad/s",
        "60π rad/s",
        "120π rad/s"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "120 rpm = 2 rev/s, so ω = 2π × 2 = 4π rad/s."
},

{
    question: "For a given angular speed, which point on a rigid rotating disc has the greatest linear speed?",
    options: [
        "Point nearest the axis",
        "Point at the centre",
        "Point farthest from the axis",
        "All points have zero speed"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "Since v = rω, the point with the greatest radius has the greatest linear speed."
},

{
    question: "For a rigid rotating disc, all points have the same:",
    options: [
        "Linear speed",
        "Linear acceleration",
        "Angular velocity",
        "Distance from axis"
    ],
    answer: 2,
    difficulty: "Difficult",
    explanation: "All points of a rigid body rotating about a fixed axis have the same angular velocity."
},

{
    question: "A rolling wheel has radius 0.4 m and angular speed 10 rad/s. Its translational speed is:",
    options: [
        "2 m/s",
        "4 m/s",
        "10 m/s",
        "25 m/s"
    ],
    answer: 1,
    difficulty: "Difficult",
    explanation: "For rolling without slipping, v = rω = 0.4 × 10 = 4 m/s."
}

];

localStorage.setItem(
    "mcqQuestionsChapter4",
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