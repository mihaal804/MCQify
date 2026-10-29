const questions = [

    // =====================================================
    // EASY — Q1 to Q24
    // =====================================================

    {
        question: "Deformation of a solid means:",
        options: [
            "Change in mass",
            "Change in size or shape",
            "Change in temperature",
            "Change in density only"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Deformation is a change in the size or shape of a solid."
    },

    {
        question: "A force that stretches a wire produces:",
        options: [
            "Tensile deformation",
            "Compressive deformation",
            "Rotational deformation",
            "Thermal deformation"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A stretching force produces tensile deformation."
    },

    {
        question: "A force that shortens a solid produces:",
        options: [
            "Tensile deformation",
            "Compressive deformation",
            "Shearing only",
            "Circular deformation"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A compressive force tends to shorten a solid."
    },

    {
        question: "Stress is defined as:",
        options: [
            "Force × area",
            "Force / area",
            "Area / force",
            "Force / length"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Stress is force acting per unit cross-sectional area."
    },

    {
        question: "The SI unit of stress is:",
        options: [
            "N",
            "J",
            "Pa",
            "W"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Stress is measured in pascals, equivalent to N/m²."
    },

    {
        question: "Strain is:",
        options: [
            "A force",
            "A ratio of two similar quantities",
            "Measured in newtons",
            "Measured in pascals"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Strain is a ratio, so it has no unit."
    },

    {
        question: "Tensile strain is given by:",
        options: [
            "F/A",
            "ΔL/L",
            "FL",
            "F/L"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Tensile strain = change in length / original length."
    },

    {
        question: "The SI unit of strain is:",
        options: [
            "m",
            "N",
            "Pa",
            "No unit"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "Strain is a ratio and is dimensionless."
    },

    {
        question: "Young's modulus is the ratio of:",
        options: [
            "Strain to stress",
            "Stress to strain",
            "Force to area",
            "Area to force"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Young's modulus = tensile stress / tensile strain."
    },

    {
        question: "The SI unit of Young's modulus is:",
        options: [
            "N",
            "J",
            "Pa",
            "m"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Young's modulus has the same unit as stress, pascal."
    },

    {
        question: "Hooke's law states that, within the limit of proportionality:",
        options: [
            "F is proportional to x",
            "F is proportional to 1/x",
            "F is proportional to x²",
            "F is constant"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Within the limit of proportionality, F ∝ x."
    },

    {
        question: "The spring constant is represented by:",
        options: [
            "F/x",
            "Fx",
            "x/F",
            "F+x"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Spring constant k = F/x."
    },

    {
        question: "The SI unit of spring constant is:",
        options: [
            "N/m",
            "N",
            "J/m",
            "Pa"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Since k = F/x, its unit is N/m."
    },

    {
        question: "A spring with a larger spring constant is generally:",
        options: [
            "Softer",
            "Stiffer",
            "Longer",
            "Lighter"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A larger k means more force is required for the same extension."
    },

    {
        question: "Elastic deformation is deformation that:",
        options: [
            "Remains permanently",
            "Disappears when force is removed",
            "Always breaks the material",
            "Changes mass"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An elastically deformed object returns to its original shape after unloading."
    },

    {
        question: "Plastic deformation is deformation that:",
        options: [
            "Completely disappears",
            "Remains after the force is removed",
            "Occurs only in gases",
            "Has no effect on shape"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Plastic deformation causes permanent change in shape."
    },

    {
        question: "The elastic limit is the maximum limit up to which:",
        options: [
            "Mass remains constant",
            "A material returns to its original shape",
            "Temperature remains constant",
            "Density becomes zero"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Beyond the elastic limit, permanent deformation may occur."
    },

    {
        question: "The limit of proportionality is related to:",
        options: [
            "Mass-volume graph",
            "Force-extension relationship",
            "Temperature-time graph",
            "Speed-time graph"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "It is the point beyond which force is no longer proportional to extension."
    },

    {
        question: "The area under a force-extension graph represents:",
        options: [
            "Power",
            "Work done",
            "Acceleration",
            "Pressure"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The area under a force-extension graph gives work done."
    },

    {
        question: "Elastic potential energy is stored when a material is:",
        options: [
            "Deformed elastically",
            "At rest only",
            "Heated only",
            "Moving uniformly"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Elastic deformation stores elastic potential energy."
    },

    {
        question: "For a spring within its proportional limit, elastic energy is:",
        options: [
            "1/2 kx²",
            "kx",
            "k/x",
            "2kx²"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Elastic potential energy Ep = 1/2 kx²."
    },

    {
        question: "Bulk modulus describes resistance to change in:",
        options: [
            "Length only",
            "Volume",
            "Mass",
            "Temperature"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Bulk modulus relates to volumetric deformation."
    },

    {
        question: "Shear deformation mainly changes the:",
        options: [
            "Shape",
            "Mass",
            "Temperature",
            "Density only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Shear forces mainly change the shape of a solid."
    },

    {
        question: "A brittle material generally undergoes:",
        options: [
            "Large plastic deformation",
            "Very little plastic deformation before breaking",
            "Unlimited extension",
            "No stress"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Brittle materials tend to break with little plastic deformation."
    },


    // =====================================================
    // NORMAL — Q25 to Q56
    // =====================================================

    {
        question: "A force of 100 N acts on an area of 0.02 m². The stress is:",
        options: [
            "500 Pa",
            "5000 Pa",
            "2000 Pa",
            "50 Pa"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Stress = F/A = 100/0.02 = 5000 Pa."
    },

    {
        question: "A wire of length 2 m extends by 1 mm. Its tensile strain is:",
        options: [
            "0.0005",
            "0.005",
            "0.05",
            "0.5"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Strain = 0.001/2 = 0.0005."
    },

    {
        question: "A force of 200 N acts on an area of 0.01 m². Stress equals:",
        options: [
            "2 × 10³ Pa",
            "2 × 10⁴ Pa",
            "2 × 10⁵ Pa",
            "2 × 10⁶ Pa"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Stress = 200/0.01 = 20,000 Pa."
    },

    {
        question: "A 1 m wire increases in length by 2 mm. Its strain is:",
        options: [
            "0.002",
            "0.02",
            "0.2",
            "2"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Strain = 0.002/1 = 0.002."
    },

    {
        question: "If stress is 2 × 10⁶ Pa and strain is 0.001, Young's modulus is:",
        options: [
            "2 × 10³ Pa",
            "2 × 10⁶ Pa",
            "2 × 10⁹ Pa",
            "2 × 10¹² Pa"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Y = stress/strain = 2 × 10⁹ Pa."
    },

    {
        question: "A spring extends 0.04 m under a force of 8 N. Its spring constant is:",
        options: [
            "20 N/m",
            "200 N/m",
            "320 N/m",
            "0.005 N/m"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "k = F/x = 8/0.04 = 200 N/m."
    },

    {
        question: "A spring has k = 100 N/m. What force produces 0.05 m extension?",
        options: [
            "2 N",
            "5 N",
            "10 N",
            "20 N"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "F = kx = 100 × 0.05 = 5 N."
    },

    {
        question: "A spring of k = 200 N/m is stretched by 0.1 m. Its elastic energy is:",
        options: [
            "0.5 J",
            "1 J",
            "2 J",
            "10 J"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Ep = 1/2 kx² = 1 J."
    },

    {
        question: "If the extension of a spring doubles within Hooke's-law limit, force:",
        options: [
            "Halves",
            "Doubles",
            "Becomes four times",
            "Remains unchanged"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Hooke's law gives F ∝ x."
    },

    {
        question: "If the force on a Hooke's-law spring doubles, its extension:",
        options: [
            "Halves",
            "Doubles",
            "Becomes four times",
            "Becomes zero"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Within the proportional limit, extension is directly proportional to force."
    },

    {
        question: "A material has stress 6 × 10⁷ Pa and strain 0.003. Young's modulus is:",
        options: [
            "2 × 10⁷ Pa",
            "2 × 10⁸ Pa",
            "2 × 10¹⁰ Pa",
            "2 × 10¹¹ Pa"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Y = 6 × 10⁷ / 0.003 = 2 × 10¹⁰ Pa."
    },

    {
        question: "A wire of area 2 × 10⁻⁶ m² carries a force of 10 N. Its stress is:",
        options: [
            "5 × 10⁵ Pa",
            "5 × 10⁶ Pa",
            "5 × 10⁷ Pa",
            "5 × 10⁸ Pa"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Stress = 10/(2 × 10⁻⁶) = 5 × 10⁶ Pa."
    },

    {
        question: "A 2 m wire extends by 4 mm. Its strain is:",
        options: [
            "0.002",
            "0.004",
            "0.02",
            "0.2"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Strain = 0.004/2 = 0.002."
    },

    {
        question: "A spring has k = 50 N/m. Its extension under 2 N is:",
        options: [
            "0.004 m",
            "0.04 m",
            "0.4 m",
            "4 m"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "x = F/k = 2/50 = 0.04 m."
    },

    {
        question: "The slope of a force-extension graph in the linear region represents:",
        options: [
            "Spring constant",
            "Stress",
            "Young's modulus directly",
            "Energy"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "For F versus x, slope F/x equals spring constant k."
    },

    {
        question: "A larger Young's modulus generally indicates that a material is:",
        options: [
            "More easily stretched",
            "More resistant to tensile deformation",
            "Always brittle",
            "Always lighter"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A larger Young's modulus means greater stiffness."
    },

    {
        question: "For the same stress, a material with smaller Young's modulus has:",
        options: [
            "Smaller strain",
            "Larger strain",
            "Zero strain",
            "No deformation"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Y = stress/strain, so smaller Y gives larger strain for the same stress."
    },

    {
        question: "The elastic limit is reached when:",
        options: [
            "The object becomes weightless",
            "Permanent deformation begins beyond it",
            "Stress becomes zero",
            "Force becomes zero"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Beyond the elastic limit, the material may not return fully to its original shape."
    },

    {
        question: "The area under a force-extension graph from 0 to x gives:",
        options: [
            "Work done",
            "Stress",
            "Strain",
            "Power"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Area under F-x graph represents work done."
    },

    {
        question: "For a straight-line force-extension graph, the work done is:",
        options: [
            "Fx",
            "1/2 Fx",
            "2Fx",
            "F/x"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The area is triangular, so W = 1/2 Fx."
    },

    {
        question: "A spring is stretched by 0.2 m using a final force of 10 N. Work done is:",
        options: [
            "0.5 J",
            "1 J",
            "2 J",
            "5 J"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "W = 1/2 Fx = 1 J."
    },

    {
        question: "Which quantity has no SI unit?",
        options: [
            "Stress",
            "Young's modulus",
            "Strain",
            "Spring constant"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Strain is dimensionless."
    },

    {
        question: "In a Young's modulus experiment, extension of a wire is measured to determine:",
        options: [
            "Change in length",
            "Mass of the wire",
            "Temperature only",
            "Density only"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The extension is needed to calculate tensile strain."
    },

    {
        question: "In determining Young's modulus, the cross-sectional area of the wire is needed to calculate:",
        options: [
            "Strain",
            "Stress",
            "Time",
            "Temperature"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Stress = force/cross-sectional area."
    },

    {
        question: "A longer wire of the same material and area generally has:",
        options: [
            "Greater extension under the same force",
            "Smaller extension",
            "Zero extension",
            "The same extension in all cases"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "For the same material and area, extension increases with original length."
    },

    {
        question: "For the same material and length, increasing wire area generally makes it:",
        options: [
            "Easier to stretch",
            "Harder to stretch",
            "Unchanged",
            "Weightless"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A larger cross-sectional area reduces extension for the same force."
    },

    {
        question: "The region where force is proportional to extension is shown by a:",
        options: [
            "Straight line through the origin",
            "Horizontal line",
            "Vertical line",
            "Circular graph"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "F ∝ x produces a straight line through the origin."
    },

    {
        question: "A material that returns to its original shape after unloading has undergone:",
        options: [
            "Plastic deformation",
            "Elastic deformation",
            "Fracture",
            "Permanent deformation"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Elastic deformation is reversible."
    },

    {
        question: "If a material remains permanently deformed after unloading, it has undergone:",
        options: [
            "Elastic deformation",
            "Plastic deformation",
            "No deformation",
            "Zero strain"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Plastic deformation remains after the force is removed."
    },

    {
        question: "A force of 50 N stretches a spring by 0.25 m. The spring constant is:",
        options: [
            "50 N/m",
            "100 N/m",
            "200 N/m",
            "250 N/m"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "k = 50/0.25 = 200 N/m."
    },

    {
        question: "A spring with k = 400 N/m is stretched by 0.05 m. Force is:",
        options: [
            "10 N",
            "20 N",
            "40 N",
            "80 N"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "F = kx = 400 × 0.05 = 20 N."
    },

    {
        question: "A spring of k = 100 N/m is stretched by 0.2 m. Elastic energy is:",
        options: [
            "1 J",
            "2 J",
            "4 J",
            "10 J"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Ep = 1/2 × 100 × (0.2)² = 2 J."
    },

    {
        question: "The unit N/m can represent:",
        options: [
            "Stress",
            "Spring constant",
            "Strain",
            "Young's modulus"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Spring constant has unit N/m."
    },


    // =====================================================
    // DIFFICULT — Q57 to Q80
    // =====================================================

    {
        question: "A wire of length 2 m and area 1 × 10⁻⁶ m² is stretched by 1 mm under 100 N. Young's modulus is:",
        options: [
            "5 × 10⁹ Pa",
            "1 × 10¹¹ Pa",
            "2 × 10¹¹ Pa",
            "5 × 10¹¹ Pa"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Y = FL/(AΔL) = 100×2/(10⁻⁶×0.001) = 2×10¹¹ Pa."
    },

    {
        question: "A wire has Y = 2 × 10¹¹ Pa, L = 1 m, A = 2 × 10⁻⁶ m² and F = 200 N. Extension is:",
        options: [
            "0.25 mm",
            "0.5 mm",
            "1 mm",
            "2 mm"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "ΔL = FL/(AY) = 0.0005 m = 0.5 mm."
    },

    {
        question: "A wire has stress 4 × 10⁸ Pa and Young's modulus 2 × 10¹¹ Pa. Strain is:",
        options: [
            "2 × 10⁻⁴",
            "2 × 10⁻³",
            "2 × 10⁻²",
            "2 × 10⁻¹"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Strain = stress/Y = 2 × 10⁻³."
    },

    {
        question: "A 0.5 m wire extends by 0.25 mm. Its tensile strain is:",
        options: [
            "5 × 10⁻⁴",
            "5 × 10⁻³",
            "5 × 10⁻²",
            "5 × 10⁻¹"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Strain = 0.00025/0.5 = 5 × 10⁻⁴."
    },

    {
        question: "A force of 300 N acts on a wire of area 3 × 10⁻⁶ m². Stress is:",
        options: [
            "1 × 10⁶ Pa",
            "1 × 10⁷ Pa",
            "1 × 10⁸ Pa",
            "1 × 10⁹ Pa"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Stress = 300/(3×10⁻⁶) = 1×10⁸ Pa."
    },

    {
        question: "A wire has Y = 1 × 10¹¹ Pa and strain = 0.002. Stress is:",
        options: [
            "2 × 10⁷ Pa",
            "2 × 10⁸ Pa",
            "2 × 10⁹ Pa",
            "2 × 10¹⁰ Pa"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Stress = Y × strain = 2 × 10⁸ Pa."
    },

    {
        question: "A spring of k = 500 N/m is stretched by 0.2 m. Energy stored is:",
        options: [
            "5 J",
            "10 J",
            "20 J",
            "50 J"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Ep = 1/2 × 500 × 0.2² = 10 J."
    },

    {
        question: "A spring stores 8 J of energy when stretched 0.2 m. Its spring constant is:",
        options: [
            "200 N/m",
            "300 N/m",
            "400 N/m",
            "800 N/m"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "8 = 1/2 k(0.2)², so k = 400 N/m."
    },

    {
        question: "A spring has k = 800 N/m. Its extension under a 40 N force is:",
        options: [
            "0.02 m",
            "0.05 m",
            "0.2 m",
            "0.5 m"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "x = F/k = 40/800 = 0.05 m."
    },

    {
        question: "A spring of k = 800 N/m is extended 0.05 m. The work done is:",
        options: [
            "0.5 J",
            "1 J",
            "2 J",
            "4 J"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "W = 1/2 kx² = 1 J."
    },

    {
        question: "A wire of length 4 m extends by 2 mm. If its length is doubled with the same force and area, extension becomes:",
        options: [
            "1 mm",
            "2 mm",
            "4 mm",
            "8 mm"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Extension is proportional to original length, so it doubles to 4 mm."
    },

    {
        question: "For the same force, material and length, if wire area doubles, extension becomes:",
        options: [
            "Double",
            "Half",
            "Four times",
            "Unchanged"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Extension is inversely proportional to cross-sectional area."
    },

    {
        question: "A wire's length doubles while its area remains unchanged. For the same force, its extension:",
        options: [
            "Halves",
            "Doubles",
            "Becomes four times",
            "Remains unchanged"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Extension is directly proportional to original length."
    },

    {
        question: "A material has Young's modulus 2 × 10¹¹ Pa. If strain is 5 × 10⁻⁴, stress is:",
        options: [
            "1 × 10⁶ Pa",
            "1 × 10⁷ Pa",
            "1 × 10⁸ Pa",
            "1 × 10⁹ Pa"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Stress = Y × strain = 1 × 10⁸ Pa."
    },

    {
        question: "A 2 m wire with area 4 × 10⁻⁶ m² has Y = 2 × 10¹¹ Pa. Under 400 N, extension is:",
        options: [
            "0.5 mm",
            "1 mm",
            "2 mm",
            "4 mm"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "ΔL = FL/(AY) = 0.001 m = 1 mm."
    },

    {
        question: "A spring has k = 200 N/m. How much force is needed for 0.3 m extension?",
        options: [
            "20 N",
            "40 N",
            "60 N",
            "80 N"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "F = kx = 200 × 0.3 = 60 N."
    },

    {
        question: "A 100 N force stretches a spring by 0.1 m. Energy stored is:",
        options: [
            "2.5 J",
            "5 J",
            "10 J",
            "20 J"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "W = 1/2 Fx = 1/2 × 100 × 0.1 = 5 J."
    },

    {
        question: "A wire has length 1.5 m, area 2 × 10⁻⁶ m², Y = 1.5 × 10¹¹ Pa and F = 300 N. Extension is:",
        options: [
            "0.5 mm",
            "1 mm",
            "1.5 mm",
            "2 mm"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "ΔL = FL/(AY) = 0.0015 m = 1.5 mm."
    },

    {
        question: "A material has stress 3 × 10⁸ Pa and strain 1.5 × 10⁻³. Young's modulus is:",
        options: [
            "1 × 10¹⁰ Pa",
            "2 × 10¹¹ Pa",
            "3 × 10¹¹ Pa",
            "4 × 10¹¹ Pa"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Y = 3×10⁸ / 1.5×10⁻³ = 2×10¹¹ Pa."
    },

    {
        question: "A force-extension graph is a straight line up to 4 cm extension. At 4 cm, force is 20 N. Work done is:",
        options: [
            "0.2 J",
            "0.4 J",
            "0.8 J",
            "1.0 J"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "W = 1/2 Fx = 1/2 × 20 × 0.04 = 0.4 J."
    },

    {
        question: "A spring has k = 250 N/m. Its energy at 0.4 m extension is:",
        options: [
            "10 J",
            "20 J",
            "40 J",
            "50 J"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Ep = 1/2 × 250 × 0.4² = 20 J."
    },

    {
        question: "A wire experiences stress 5 × 10⁷ Pa and has Y = 2.5 × 10¹¹ Pa. Its strain is:",
        options: [
            "2 × 10⁻⁵",
            "2 × 10⁻⁴",
            "2 × 10⁻³",
            "2 × 10⁻²"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Strain = stress/Y = 2 × 10⁻⁴."
    },

    {
        question: "A 2 m wire has strain 0.001. Its extension is:",
        options: [
            "0.5 mm",
            "1 mm",
            "2 mm",
            "4 mm"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "ΔL = strain × L = 0.001 × 2 = 0.002 m = 2 mm."
    },

    {
        question: "A spring of k = 1000 N/m is stretched 0.1 m. The final force is:",
        options: [
            "10 N",
            "50 N",
            "100 N",
            "1000 N"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "F = kx = 1000 × 0.1 = 100 N."
    }

];
localStorage.setItem("mcqQuestionsChapter7", JSON.stringify(questions));

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