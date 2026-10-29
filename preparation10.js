const questions = [

    // =========================
    // EASY — 24 MCQs
    // =========================

    {
        question: "The SI unit of electric charge is:",
        options: [
            "Ampere",
            "Coulomb",
            "Volt",
            "Ohm"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Electric charge is measured in coulombs (C)."
    },

    {
        question: "There are two types of electric charge:",
        options: [
            "Positive and negative",
            "Hot and cold",
            "Strong and weak",
            "Large and small"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Electric charge exists as positive and negative charge."
    },

    {
        question: "Like electric charges:",
        options: [
            "Attract each other",
            "Repel each other",
            "Have no force between them",
            "Always become neutral"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Like charges repel each other."
    },

    {
        question: "Unlike electric charges:",
        options: [
            "Repel each other",
            "Attract each other",
            "Have no interaction",
            "Always have equal magnitude"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Unlike charges attract each other."
    },

    {
        question: "Electric charge is quantized in multiples of:",
        options: [
            "Electron charge",
            "Mass of electron",
            "Speed of light",
            "Gravitational constant"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Charge occurs in integral multiples of the elementary charge."
    },

    {
        question: "The charge of an electron is:",
        options: [
            "Positive",
            "Negative",
            "Zero",
            "Variable"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An electron carries negative electric charge."
    },

    {
        question: "Coulomb's law describes the force between:",
        options: [
            "Two stationary electric charges",
            "Two masses only",
            "Two sound waves",
            "Two temperatures"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Coulomb's law gives the electrostatic force between point charges."
    },

    {
        question: "The electrostatic force between two charges acts along the:",
        options: [
            "Perpendicular direction",
            "Line joining the charges",
            "Vertical direction only",
            "Horizontal direction only"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The force acts along the line joining the two charges."
    },

    {
        question: "The SI unit of electric field strength is:",
        options: [
            "N/C",
            "C/N",
            "J/C",
            "C/J"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Electric field strength is force per unit positive charge, so its unit is N/C."
    },

    {
        question: "An electric field is a region where a charge experiences:",
        options: [
            "Mass",
            "Force",
            "Temperature",
            "Pressure"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An electric field is a region in which an electric charge experiences an electric force."
    },

    {
        question: "The direction of an electric field is defined using a:",
        options: [
            "Positive test charge",
            "Neutral atom",
            "Negative test charge",
            "Photon"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The field direction is the direction of force on a positive test charge."
    },

    {
        question: "Electric field lines around an isolated positive charge point:",
        options: [
            "Towards the charge",
            "Away from the charge",
            "In circles around the charge",
            "Randomly"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Field lines originate from positive charges and point outward."
    },

    {
        question: "Electric field lines around an isolated negative charge point:",
        options: [
            "Away from the charge",
            "Towards the charge",
            "Only upward",
            "In circles"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Field lines terminate on negative charges."
    },

    {
        question: "Electric potential is measured in:",
        options: [
            "Newton",
            "Coulomb",
            "Volt",
            "Tesla"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The SI unit of electric potential is the volt (V)."
    },

    {
        question: "One volt is equal to:",
        options: [
            "One joule per coulomb",
            "One coulomb per joule",
            "One newton per coulomb",
            "One coulomb per newton"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Potential difference is work done per unit charge: V = W/q."
    },

    {
        question: "An equipotential surface has the same:",
        options: [
            "Electric charge everywhere",
            "Electric potential everywhere",
            "Electric field everywhere",
            "Electric force everywhere"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Every point on an equipotential surface has the same electric potential."
    },

    {
        question: "The electric field is perpendicular to an equipotential surface.",
        options: [
            "True",
            "False",
            "Only for negative charges",
            "Only in vacuum"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Electric field lines are perpendicular to equipotential surfaces."
    },

    {
        question: "Capacitance is measured in:",
        options: [
            "Volt",
            "Farad",
            "Coulomb",
            "Ohm"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The SI unit of capacitance is the farad (F)."
    },

    {
       question: "Capacitance is defined as:",

options: [
    "Q/V",
    "V/Q",
    "QV",
    "Q + V"
],

answer: 0,
difficulty: "Easy",
explanation: "Capacitance is charge stored per unit potential difference: C = Q/V."
    },

    {
        question: "A capacitor stores energy in its:",
        options: [
            "Magnetic field only",
            "Electric field",
            "Gravitational field",
            "Sound field"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A charged capacitor stores energy in the electric field between its conductors."
    },

    {
        question: "A dielectric is an:",
        options: [
            "Insulating material",
            "Perfect conductor",
            "Source of current",
            "Magnetic material only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A dielectric is an insulating material used between capacitor plates."
    },

    {
        question: "Electric flux is associated with an electric:",
        options: [
            "Field",
            "Resistance",
            "Current",
            "Mass"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Electric flux describes the amount of electric field passing through a surface."
    },

    {
        question: "Gauss's law relates electric flux through a closed surface to the:",
        options: [
            "Mass enclosed",
            "Charge enclosed",
            "Volume enclosed",
            "Temperature enclosed"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Gauss's law relates net electric flux to the enclosed electric charge."
    },

    {
        question: "The principle of superposition is used when finding the net effect of:",
        options: [
            "Multiple charges",
            "Only one charge",
            "Only neutral particles",
            "Only magnetic fields"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The net electric field is the vector sum of fields produced by individual charges."
    },

    {
        question: "A conductor in electrostatic equilibrium has zero electric field:",
        options: [
            "Inside the conducting material",
            "Everywhere outside it",
            "At every point in space",
            "Only near sharp points"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The electric field inside the conducting material is zero in electrostatic equilibrium."
    },


    // =========================
    // NORMAL — 32 MCQs
    // =========================

    {
        question: "If the distance between two point charges is doubled, the electrostatic force becomes:",
        options: [
            "Four times",
            "Two times",
            "One-fourth",
            "Half"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Coulomb force is proportional to 1/r², so doubling distance makes it one-fourth."
    },

    {
        question: "If the distance between two charges is reduced to half, the force becomes:",
        options: [
            "Half",
            "Two times",
            "Four times",
            "One-fourth"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Since F ∝ 1/r², reducing r to r/2 makes the force four times larger."
    },

    {
        question: "If one of two charges is doubled while distance remains unchanged, the force becomes:",
        options: [
            "Half",
            "Double",
            "Four times",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Coulomb force is directly proportional to the product q₁q₂."
    },

    {
        question: "If both charges are doubled and the distance remains unchanged, the force becomes:",
        options: [
            "Two times",
            "Four times",
            "Half",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Doubling both charges makes their product four times larger."
    },

    {
        question: "If both charges have the same sign, the electrostatic force is:",
        options: [
            "Attractive",
            "Repulsive",
            "Zero",
            "Always downward"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Like charges repel each other."
    },

    {
        question: "If both charges have opposite signs, the electrostatic force is:",
        options: [
            "Repulsive",
            "Attractive",
            "Zero",
            "Always upward"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Unlike charges attract each other."
    },

    {
        question: "The magnitude of Coulomb force is proportional to:",
        options: [
            "q₁ + q₂",
            "q₁q₂",
            "q₁/q₂ only",
            "1/(q₁q₂)"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Coulomb's law gives F ∝ q₁q₂/r²."
    },

    {
        question: "The electric field strength at a point is defined as:",
        options: [
            "Force per unit positive charge",
            "Charge per unit force",
            "Work per unit distance",
            "Energy per unit mass"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Electric field strength is E = F/q for a positive test charge."
    },

    {
        question: "A positive test charge placed in an electric field experiences force:",
        options: [
            "Opposite to the field direction",
            "Along the field direction",
            "Always perpendicular to the field",
            "Only downward"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The electric field direction is defined as the force direction on a positive test charge."
    },

    {
        question: "A negative charge placed in an electric field experiences force:",
        options: [
            "Along the field direction",
            "Opposite to the field direction",
            "Always perpendicular to the field",
            "No force"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A negative charge experiences force opposite to the electric field direction."
    },

    {
        question: "For a point charge, electric field strength varies with distance as:",
        options: [
            "1/r",
            "1/r²",
            "r",
            "r²"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For a point charge, E = kq/r²."
    },

    {
        question: "A point charge of 2 μC produces a field at a point 1 m away. If the charge becomes 4 μC, the field becomes:",
        options: [
            "Half",
            "Double",
            "Four times",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Electric field is directly proportional to the source charge."
    },

    {
        question: "The net electric field due to several charges is obtained by:",
        options: [
            "Adding their charges only",
            "Vector addition of individual fields",
            "Multiplying all fields",
            "Taking the largest field only"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Electric fields are vector quantities and are added vectorially."
    },

    {
        question: "Electric field lines never:",
        options: [
            "Start from positive charges",
            "End on negative charges",
            "Cross one another",
            "Show field direction"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "If field lines crossed, the field would have two directions at one point."
    },

    {
        question: "Closer electric field lines indicate a:",
        options: [
            "Weaker electric field",
            "Stronger electric field",
            "Zero electric field",
            "Constant charge"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Greater field-line density represents a stronger electric field."
    },

    {
        question: "The work done in moving a charge along an equipotential surface is:",
        options: [
            "Maximum",
            "Zero",
            "Infinite",
            "Negative only"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "There is no potential difference between points on an equipotential surface."
    },

    {
        question: "Electric potential difference is defined as work done per unit:",
        options: [
            "Mass",
            "Charge",
            "Distance",
            "Time"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Potential difference is V = W/q."
    },

    {
        question: "The potential due to a point charge varies with distance as:",
        options: [
            "r",
            "1/r",
            "r²",
            "1/r²"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Electric potential due to a point charge is V = kq/r."
    },

    {
        question: "At a point where electric potential is zero, the electric field must be:",
        options: [
            "Zero",
            "Infinite",
            "Always zero",
            "Not necessarily zero"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Zero potential does not necessarily mean zero electric field."
    },

    {
        question: "The electric field inside a hollow conducting shell in electrostatic equilibrium is:",
        options: [
            "Zero",
            "Maximum",
            "Infinite",
            "Always equal to the external field"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The electric field inside the conducting material and an empty closed conductor's cavity is zero when no charge is enclosed in the cavity."
    },

    {
        question: "For a uniformly charged conducting sphere, excess charge resides mainly on the:",
        options: [
            "Centre",
            "Surface",
            "Middle layer only",
            "Entire volume uniformly"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "In electrostatic equilibrium, excess charge on a conductor resides on its surface."
    },

    {
        question: "The electric field near a sharp point on a charged conductor is generally:",
        options: [
            "Weak",
            "Strong",
            "Zero",
            "Independent of charge"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Charge density is greater near sharp points, producing a stronger electric field."
    },

    {
        question: "Electric flux through a surface depends on the component of electric field:",
        options: [
            "Parallel to the surface",
            "Perpendicular to the surface",
            "Always horizontal",
            "Always vertical"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Flux depends on the component of electric field normal to the surface."
    },

    {
        question: "If an electric field is parallel to a flat surface, the electric flux through it is:",
        options: [
            "Maximum",
            "Zero",
            "Infinite",
            "Negative maximum"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "When the field is parallel to the surface, its normal component is zero."
    },

    {
        question: "According to Gauss's law, net electric flux through a closed surface depends on:",
        options: [
            "Only the charge enclosed",
            "Only the surface area",
            "Only the shape",
            "The temperature of the surface"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Net flux through a closed surface is proportional to the enclosed charge."
    },

    {
        question: "The capacitance of a capacitor is the ratio of stored charge to:",
        options: [
            "Current",
            "Potential difference",
            "Resistance",
            "Power"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Capacitance is C = Q/V."
    },

    {
        question: "For a parallel-plate capacitor, increasing the plate area generally:",
        options: [
            "Decreases capacitance",
            "Increases capacitance",
            "Makes capacitance zero",
            "Does not affect capacitance"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For a parallel-plate capacitor, C is proportional to plate area."
    },

    {
        question: "For a parallel-plate capacitor, increasing the plate separation generally:",
        options: [
            "Increases capacitance",
            "Decreases capacitance",
            "Makes capacitance infinite",
            "Does not affect capacitance"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Capacitance is inversely proportional to plate separation."
    },

    {
        question: "Inserting a dielectric between capacitor plates generally:",
        options: [
            "Decreases capacitance",
            "Increases capacitance",
            "Makes capacitance zero",
            "Removes all charge"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A dielectric increases the capacitance by reducing the effective electric field."
    },

    {
        question: "Two capacitors connected in parallel have an equivalent capacitance that is:",
        options: [
            "The difference of their capacitances",
            "The sum of their capacitances",
            "Always smaller than both",
            "Zero"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "For parallel capacitors, C_eq = C₁ + C₂."
    },

    {
        question: "For capacitors connected in series, the equivalent capacitance is:",
        options: [
            "Greater than the largest capacitor",
            "Equal to the sum",
            "Less than the smallest capacitor",
            "Always zero"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The equivalent capacitance of series capacitors is less than the smallest individual capacitance."
    },

    {
        question: "The energy stored in a capacitor can be expressed as:",
        options: [
            "CV",
            "1/2 CV²",
            "C/V",
            "V/C"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Stored energy is U = 1/2 CV²."
    },

    {
        question: "If the potential difference across a capacitor is doubled while capacitance remains constant, stored energy becomes:",
        options: [
            "Half",
            "Double",
            "Four times",
            "Unchanged"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Since U = 1/2 CV², doubling V makes the energy four times larger."
    },


    // =========================
    // DIFFICULT — 24 MCQs
    // =========================

    {
        question: "Two charges of 2 μC and 3 μC are 3 m apart in vacuum. Taking k = 9 × 10⁹ N m²/C², the force is:",
        options: [
            "2 N",
            "6 N",
            "9 N",
            "18 N"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "F = kq₁q₂/r² = 9×10⁹(2×10⁻⁶)(3×10⁻⁶)/9 = 6 N."
    },

    {
        question: "A 4 μC charge experiences a force of 20 N. Its electric field strength is:",
        options: [
            "5 × 10⁶ N/C",
            "5 × 10⁵ N/C",
            "8 × 10⁻⁵ N/C",
            "80 N/C"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "E = F/q = 20/(4×10⁻⁶) = 5×10⁶ N/C."
    },

    {
        question: "A point charge of 5 μC produces an electric field at 2 m. Taking k = 9 × 10⁹, the field strength is:",
        options: [
            "5.625 × 10³ N/C",
            "1.125 × 10⁴ N/C",
            "2.25 × 10⁴ N/C",
            "4.5 × 10⁴ N/C"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "E = kq/r² = (9×10⁹)(5×10⁻⁶)/4 = 1.125×10⁴ N/C."
    },

    {
        question: "Two equal positive charges are placed symmetrically about a midpoint. The electric field at the midpoint is:",
        options: [
            "Maximum",
            "Zero",
            "Equal to the field of one charge",
            "Infinite"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The two equal fields at the midpoint are opposite in direction and cancel."
    },

    {
        question: "Two equal and opposite charges are placed symmetrically about a midpoint. The electric potential at the midpoint is:",
        options: [
            "Zero",
            "Maximum positive",
            "Maximum negative",
            "Infinite"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Electric potential is scalar, so equal positive and negative contributions cancel."
    },

    {
        question: "Two equal and opposite charges are placed symmetrically about a midpoint. The electric field at the midpoint is:",
        options: [
            "Zero",
            "Non-zero",
            "Infinite",
            "Undefined"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The electric fields due to the two opposite charges point in the same direction at the midpoint and therefore add."
    },

    {
        question: "A charge of 2 C is moved through a potential difference of 5 V. The work done is:",
        options: [
            "2.5 J",
            "7 J",
            "10 J",
            "25 J"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "W = qV = 2 × 5 = 10 J."
    },

    {
        question: "A 4 C charge has electric potential energy of 20 J. Its electric potential is:",
        options: [
            "5 V",
            "16 V",
            "24 V",
            "80 V"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "V = U/q = 20/4 = 5 V."
    },

    {
        question: "The electric potential 3 m from a 2 μC point charge in vacuum is:",
        options: [
            "3 × 10³ V",
            "6 × 10³ V",
            "9 × 10³ V",
            "18 × 10³ V"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "V = kq/r = (9×10⁹)(2×10⁻⁶)/3 = 6×10³ V."
    },

    {
        question: "A charge is moved along an equipotential surface. The change in its electric potential energy is:",
        options: [
            "Maximum",
            "Zero",
            "Infinite",
            "Always negative"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "There is no potential difference along an equipotential surface, so ΔU = qΔV = 0."
    },

    {
        question: "A closed surface encloses a charge of 8.85 × 10⁻¹² C. Taking ε₀ = 8.85 × 10⁻¹² C²/Nm², the net electric flux is:",
        options: [
            "0.1 Nm²/C",
            "1 Nm²/C",
            "10 Nm²/C",
            "100 Nm²/C"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "By Gauss's law, Φ = Q/ε₀ = 1 Nm²/C."
    },

    {
        question: "A capacitor has capacitance 4 μF and potential difference 10 V. Its stored charge is:",
        options: [
            "4 μC",
            "10 μC",
            "40 μC",
            "400 μC"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Q = CV = 4 μF × 10 V = 40 μC."
    },

    {
        question: "A 2 μF capacitor is connected to 10 V. Its stored energy is:",
        options: [
            "50 μJ",
            "100 μJ",
            "200 μJ",
            "400 μJ"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "U = 1/2 CV² = 1/2(2×10⁻⁶)(100) = 100 μJ."
    },

    {
        question: "Two capacitors of 3 μF and 6 μF are connected in parallel. Their equivalent capacitance is:",
        options: [
            "2 μF",
            "3 μF",
            "9 μF",
            "18 μF"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "For parallel capacitors, C_eq = 3 + 6 = 9 μF."
    },

    {
        question: "Two capacitors of 3 μF and 6 μF are connected in series. Their equivalent capacitance is:",
        options: [
            "1 μF",
            "2 μF",
            "3 μF",
            "9 μF"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "1/C_eq = 1/3 + 1/6 = 1/2, so C_eq = 2 μF."
    },

    {
        question: "A capacitor is charged while connected to a battery. If its capacitance is doubled while voltage remains constant, its charge becomes:",
        options: [
            "Half",
            "Double",
            "Four times",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Since Q = CV and V is constant, doubling C doubles Q."
    },

    {
        question: "A capacitor remains connected to a battery while a dielectric is inserted between its plates. The capacitance:",
        options: [
            "Decreases",
            "Increases",
            "Becomes zero",
            "Remains exactly unchanged"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "A dielectric increases the capacitance of a capacitor."
    },

    {
        question: "A capacitor is disconnected from the battery before a dielectric is inserted. The quantity that remains constant is:",
        options: [
            "Potential difference",
            "Charge",
            "Electric field",
            "Stored energy"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "When disconnected, there is no path for charge to enter or leave, so Q remains constant."
    },

    {
        question: "For a capacitor with fixed charge, inserting a dielectric causes the potential difference to:",
        options: [
            "Increase",
            "Decrease",
            "Remain unchanged",
            "Become infinite"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "With Q fixed and C increased by the dielectric, V = Q/C decreases."
    },

    {
        question: "For a capacitor with fixed charge, inserting a dielectric causes stored energy to:",
        options: [
            "Increase",
            "Decrease",
            "Remain unchanged",
            "Become infinite"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "For fixed Q, U = Q²/(2C), so increasing C decreases stored energy."
    },

    {
        question: "A uniform electric field of 500 N/C acts over a distance of 0.2 m along the field direction. The potential difference magnitude is:",
        options: [
            "50 V",
            "100 V",
            "250 V",
            "1000 V"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "For a uniform field, ΔV = Ed = 500 × 0.2 = 100 V."
    },

    {
        question: "A 2 μC charge is placed in an electric field of 3 × 10⁵ N/C. The electric force magnitude is:",
        options: [
            "0.06 N",
            "0.6 N",
            "6 N",
            "60 N"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "F = qE = (2×10⁻⁶)(3×10⁵) = 0.6 N."
    },

    {
        question: "Two charges experience a force of 16 N. If their separation is doubled without changing the charges, the new force is:",
        options: [
            "2 N",
            "4 N",
            "8 N",
            "32 N"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Force varies as 1/r², so doubling distance reduces 16 N to 4 N."
    },

    {
        question: "A capacitor has 12 μC charge at 6 V. Its capacitance is:",
        options: [
            "0.5 μF",
            "2 μF",
            "6 μF",
            "72 μF"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "C = Q/V = 12 μC / 6 V = 2 μF."
    }

];

localStorage.setItem(
    "mcqQuestionsChapter10",
    JSON.stringify(questions)
);
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
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

        if (index === question.answer) {
            button.classList.add("correct");
        }

        optionsContainer.appendChild(button);
    });

    document.querySelector(".feedback").innerHTML =
        `<strong>Correct!</strong><p>${question.explanation}</p>`;

    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === questions.length - 1;
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