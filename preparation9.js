const questions = [

{
question: "Wave intensity is the energy carried by a wave per unit:",
options: ["area in unit time", "volume", "mass", "wavelength"],
answer: 0,
difficulty: "Easy",
explanation: "Intensity is energy carried per unit area in unit time."
},

{
question: "The SI unit of wave intensity is:",
options: ["Joule", "W m⁻²", "Newton", "Hertz"],
answer: 1,
difficulty: "Easy",
explanation: "The SI unit of intensity is watt per square metre."
},

{
question: "Wave intensity is directly proportional to the square of its:",
options: ["frequency", "wavelength", "amplitude", "speed"],
answer: 2,
difficulty: "Easy",
explanation: "Intensity is proportional to amplitude squared."
},

{
question: "If the amplitude of a wave is doubled, its intensity becomes:",
options: ["2 times", "3 times", "4 times", "8 times"],
answer: 2,
difficulty: "Easy",
explanation: "Intensity is proportional to amplitude squared, so it becomes four times."
},

{
question: "The apparent change in frequency due to relative motion of source and observer is called:",
options: ["Interference", "Doppler effect", "Diffraction", "Polarization"],
answer: 1,
difficulty: "Easy",
explanation: "This phenomenon is called the Doppler effect."
},

{
question: "When a sound source approaches a stationary observer, the observed frequency:",
options: ["decreases", "increases", "becomes zero", "remains unchanged"],
answer: 1,
difficulty: "Easy",
explanation: "An approaching source produces a higher observed frequency."
},

{
question: "When a sound source moves away from a stationary observer, the observed frequency:",
options: ["increases", "decreases", "doubles", "becomes infinite"],
answer: 1,
difficulty: "Easy",
explanation: "A receding source produces a lower observed frequency."
},

{
question: "The Doppler effect is associated most commonly with:",
options: ["sound", "mass", "temperature", "pressure"],
answer: 0,
difficulty: "Easy",
explanation: "The Doppler effect is commonly demonstrated using sound."
},

{
question: "The total displacement in superposition is the:",
options: ["scalar sum of frequencies", "vector sum of individual displacements", "product of wavelengths", "difference of speeds"],
answer: 1,
difficulty: "Easy",
explanation: "The superposition principle gives the vector sum of individual displacements."
},

{
question: "Coherent waves have a:",
options: ["random phase difference", "constant phase difference", "zero frequency", "different wavelengths only"],
answer: 1,
difficulty: "Easy",
explanation: "Coherent waves maintain a constant phase difference."
},

{
question: "Constructive interference occurs when waves meet:",
options: ["in phase", "180° out of phase", "at different times only", "with zero amplitude"],
answer: 0,
difficulty: "Easy",
explanation: "In-phase waves reinforce each other."
},

{
question: "Destructive interference occurs when waves meet:",
options: ["in phase", "180° out of phase", "with equal speeds only", "at different frequencies only"],
answer: 1,
difficulty: "Easy",
explanation: "A crest meeting a trough produces destructive interference."
},

{
question: "Beats are produced by waves having:",
options: ["exactly equal frequencies", "slightly different frequencies", "zero frequencies", "very different speeds"],
answer: 1,
difficulty: "Easy",
explanation: "Beats are produced by waves with slightly different frequencies."
},

{
question: "Beat frequency equals the:",
options: ["sum of frequencies", "product of frequencies", "absolute difference of frequencies", "average frequency"],
answer: 2,
difficulty: "Easy",
explanation: "Beat frequency is the absolute difference between two frequencies."
},

{
question: "A point in a standing wave with zero displacement is called a:",
options: ["antinode", "node", "crest", "trough"],
answer: 1,
difficulty: "Easy",
explanation: "A node is a point of zero displacement."
},

{
question: "A point in a standing wave with maximum amplitude is called an:",
options: ["antinode", "node", "origin", "pulse"],
answer: 0,
difficulty: "Easy",
explanation: "An antinode is a point of maximum amplitude."
},

{
question: "The distance between two successive nodes is:",
options: ["λ/4", "λ/2", "λ", "2λ"],
answer: 1,
difficulty: "Easy",
explanation: "Successive nodes are separated by half a wavelength."
},

{
question: "The distance between a node and adjacent antinode is:",
options: ["λ/4", "λ/2", "λ", "2λ"],
answer: 0,
difficulty: "Easy",
explanation: "A node and adjacent antinode are λ/4 apart."
},

{
question: "The lowest frequency of a vibrating string is called its:",
options: ["second harmonic", "fundamental frequency", "beat frequency", "resonant wavelength"],
answer: 1,
difficulty: "Easy",
explanation: "The lowest frequency is called the fundamental frequency."
},

{
question: "An open organ pipe has:",
options: ["a node at both ends", "an antinode at both ends", "a node at one end only", "no standing wave"],
answer: 1,
difficulty: "Easy",
explanation: "Both open ends are displacement antinodes."
},

{
question: "A closed organ pipe has a node at the:",
options: ["open end", "closed end", "middle only", "both ends"],
answer: 1,
difficulty: "Easy",
explanation: "The closed end is a displacement node."
},

{
question: "In a closed pipe, the open end has an:",
options: ["node", "antinode", "zero frequency", "electric field"],
answer: 1,
difficulty: "Easy",
explanation: "The open end is a displacement antinode."
},

{
question: "Polarization is a phenomenon associated with:",
options: ["transverse waves", "only longitudinal waves", "stationary particles", "thermal energy"],
answer: 0,
difficulty: "Easy",
explanation: "Polarization is associated with transverse waves."
},

{
question: "A Polaroid filter converts unpolarized light into:",
options: ["sound", "polarized light", "heat only", "a longitudinal wave"],
answer: 1,
difficulty: "Easy",
explanation: "A Polaroid transmits vibrations in one direction."
},

{
question: "A wave has intensity 500 W m⁻² over an area of 0.50 m². Its power is:",
options: ["100 W", "250 W", "500 W", "1000 W"],
answer: 1,
difficulty: "Normal",
explanation: "P = IA = 500 × 0.50 = 250 W."
},

{
question: "If amplitude is increased by a factor of 5, intensity increases by a factor of:",
options: ["5", "10", "20", "25"],
answer: 3,
difficulty: "Normal",
explanation: "Intensity is proportional to amplitude squared, so 5² = 25."
},

{
question: "For a stationary source and a listener moving toward it, the apparent frequency:",
options: ["increases", "decreases", "remains zero", "is unchanged"],
answer: 0,
difficulty: "Normal",
explanation: "The listener encounters wavefronts at a greater rate."
},

{
question: "For a stationary source and a listener moving away from it, the apparent frequency:",
options: ["increases", "decreases", "becomes infinite", "is unchanged"],
answer: 1,
difficulty: "Normal",
explanation: "The listener encounters wavefronts at a lower rate."
},

{
question: "When a source moves toward a stationary listener, the wavelength in front of the source:",
options: ["increases", "decreases", "becomes zero", "is unchanged"],
answer: 1,
difficulty: "Normal",
explanation: "Approaching motion compresses the wavefronts."
},

{
question: "When a source moves away from a stationary listener, the wavelength behind it:",
options: ["increases", "decreases", "becomes zero", "is unchanged"],
answer: 0,
difficulty: "Normal",
explanation: "Receding motion spreads the wavefronts."
},

{
question: "A Doppler shift in reflected radar waves can be used to determine an object's:",
options: ["mass only", "speed and direction", "temperature only", "density only"],
answer: 1,
difficulty: "Normal",
explanation: "Doppler radar can be used to determine motion."
},

{
question: "In astronomy, a red shift indicates that a star or galaxy is generally:",
options: ["moving toward Earth", "moving away from Earth", "at rest", "losing all energy"],
answer: 1,
difficulty: "Normal",
explanation: "Red shift is associated with motion away from the observer."
},

{
question: "A blue shift in electromagnetic radiation indicates motion:",
options: ["away from Earth", "toward Earth", "perpendicular only", "with zero speed"],
answer: 1,
difficulty: "Normal",
explanation: "Blue shift indicates an increase in observed frequency."
},

{
question: "Doppler ultrasound can help doctors measure:",
options: ["blood flow", "mass of bones", "room temperature", "gravitational force"],
answer: 0,
difficulty: "Normal",
explanation: "Doppler ultrasound is used to study blood flow."
},

{
question: "Two waves of the same frequency and speed traveling in the same direction can produce:",
options: ["interference", "only diffraction", "only polarization", "gravity"],
answer: 0,
difficulty: "Normal",
explanation: "Superposition of such waves can produce interference."
},

{
question: "Two waves of the same frequency and speed traveling in opposite directions can produce:",
options: ["beats", "stationary waves", "only polarization", "refraction"],
answer: 1,
difficulty: "Normal",
explanation: "Opposite-traveling waves can form stationary waves."
},

{
question: "Two waves with slightly different frequencies traveling in the same direction can produce:",
options: ["beats", "only standing waves", "polarization", "a vacuum"],
answer: 0,
difficulty: "Normal",
explanation: "Slightly different frequencies produce beats."
},

{
question: "A laser is described as a highly:",
options: ["random source", "coherent light source", "thermal source", "longitudinal source"],
answer: 1,
difficulty: "Normal",
explanation: "Laser light is highly coherent."
},

{
question: "For constructive interference, the path difference is an:",
options: ["odd quarter wavelength", "integral multiple of wavelength", "half wavelength only", "arbitrary distance"],
answer: 1,
difficulty: "Normal",
explanation: "Constructive interference occurs for nλ path difference."
},

{
question: "For destructive interference, the path difference is an:",
options: ["integral multiple of wavelength", "odd integral multiple of half wavelength", "zero distance only", "whole number of periods only"],
answer: 1,
difficulty: "Normal",
explanation: "Destructive interference occurs for odd multiples of λ/2."
},

{
question: "In constructive interference, two equal-amplitude waves of amplitude A produce a resultant amplitude of:",
options: ["A/2", "A", "2A", "4A"],
answer: 2,
difficulty: "Normal",
explanation: "Equal waves in phase add to give 2A."
},

{
question: "In destructive interference, two equal-amplitude waves can produce a resultant amplitude of:",
options: ["2A", "A", "A/2", "0"],
answer: 3,
difficulty: "Normal",
explanation: "Equal waves 180° out of phase cancel completely."
},

{
question: "Noise-canceling headphones work mainly by producing a wave that is:",
options: ["in phase with noise", "opposite in phase to noise", "higher in mass", "without amplitude"],
answer: 1,
difficulty: "Normal",
explanation: "The canceling wave is opposite in phase to the unwanted sound."
},

{
question: "If two sound waves have frequencies 32 Hz and 30 Hz, their beat frequency is:",
options: ["1 Hz", "2 Hz", "30 Hz", "62 Hz"],
answer: 1,
difficulty: "Normal",
explanation: "Beat frequency = |32 − 30| = 2 Hz."
},

{
question: "If two sound sources have frequencies 440 Hz and 437 Hz, the number of beats in 10 s is:",
options: ["3", "10", "30", "877"],
answer: 2,
difficulty: "Normal",
explanation: "Beat frequency = 3 Hz, so 3 × 10 = 30 beats."
},

{
question: "Musicians use beats to:",
options: ["measure mass", "tune instruments", "polarize sound", "create vacuum"],
answer: 1,
difficulty: "Normal",
explanation: "Beats are useful for tuning musical instruments."
},

{
question: "A string of length L fixed at both ends has a fundamental wavelength of:",
options: ["L/2", "L", "2L", "4L"],
answer: 2,
difficulty: "Normal",
explanation: "For the fundamental, L = λ/2, therefore λ = 2L."
},

{
question: "For a string fixed at both ends, the second harmonic frequency is:",
options: ["f₁/2", "f₁", "2f₁", "4f₁"],
answer: 2,
difficulty: "Normal",
explanation: "The second harmonic has twice the fundamental frequency."
},

{
question: "For a string fixed at both ends, the third harmonic has frequency:",
options: ["f₁/3", "f₁", "2f₁", "3f₁"],
answer: 3,
difficulty: "Normal",
explanation: "The third harmonic has three times the fundamental frequency."
},

{
question: "As the harmonic number of a stretched string increases, its wavelength:",
options: ["increases", "decreases", "stays infinite", "becomes zero always"],
answer: 1,
difficulty: "Normal",
explanation: "Higher harmonics have shorter wavelengths."
},

{
question: "For an open pipe, the fundamental standing-wave pattern has:",
options: ["one-quarter wavelength in the pipe", "one-half wavelength in the pipe", "one full wavelength in the pipe", "two wavelengths in the pipe"],
answer: 1,
difficulty: "Normal",
explanation: "For an open pipe, L = λ/2."
},

{
question: "For a closed pipe, the fundamental wavelength is:",
options: ["L", "2L", "4L", "L/4"],
answer: 2,
difficulty: "Normal",
explanation: "For a closed pipe, L = λ/4."
},

{
question: "An open pipe supports:",
options: ["only odd harmonics", "all harmonics", "no harmonics", "only the fundamental"],
answer: 1,
difficulty: "Normal",
explanation: "Both odd and even harmonics occur in an open pipe."
},

{
question: "A closed pipe supports:",
options: ["all harmonics", "only even harmonics", "only odd harmonics", "no harmonics"],
answer: 2,
difficulty: "Normal",
explanation: "Only odd harmonics occur in a closed pipe."
},

{
question: "In a closed pipe, the standing wave has a node at the closed end and an antinode at the:",
options: ["closed end", "open end", "middle only", "source"],
answer: 1,
difficulty: "Normal",
explanation: "The open end is an antinode."
},

{
question: "A resonance tube demonstrates standing waves in an:",
options: ["electric field", "air column", "solid sphere", "vacuum"],
answer: 1,
difficulty: "Normal",
explanation: "A resonance tube demonstrates standing waves in an air column."
},

{
question: "Sunlight has intensity 500 W m⁻². How much energy falls on a 0.50 m² collector in 4.0 h?",
options: ["3.6×10⁴ J", "3.6×10⁵ J", "3.6×10⁶ J", "3.6×10⁷ J"],
answer: 2,
difficulty: "Difficult",
explanation: "E = IAt = 500 × 0.50 × 14400 = 3.6×10⁶ J."
},

{
question: "A wave has intensity 80 W m⁻². If its amplitude is reduced to one-half, its intensity becomes:",
options: ["40 W m⁻²", "20 W m⁻²", "10 W m⁻²", "5 W m⁻²"],
answer: 1,
difficulty: "Difficult",
explanation: "Halving amplitude makes intensity one-quarter: 80/4 = 20 W m⁻²."
},

{
question: "A stationary wave has frequency 256 Hz and wave speed 128 m s⁻¹. The distance between successive nodes is:",
options: ["0.25 m", "0.50 m", "1.00 m", "2.00 m"],
answer: 0,
difficulty: "Difficult",
explanation: "λ = 128/256 = 0.50 m, so node spacing = λ/2 = 0.25 m."
},

{
question: "A string 3.0 m long is fixed at both ends. The wavelength of its third harmonic is:",
options: ["0.5 m", "1.0 m", "2.0 m", "3.0 m"],
answer: 2,
difficulty: "Difficult",
explanation: "λ = 2L/3 = 2(3)/3 = 2.0 m."
},

{
question: "A string 0.80 m long supports waves travelling at 400 m s⁻¹. Its fundamental frequency is:",
options: ["125 Hz", "250 Hz", "400 Hz", "500 Hz"],
answer: 1,
difficulty: "Difficult",
explanation: "f = v/(2L) = 400/(1.6) = 250 Hz."
},

{
question: "For the same 0.80 m string with wave speed 400 m s⁻¹, the third harmonic frequency is:",
options: ["250 Hz", "400 Hz", "750 Hz", "1200 Hz"],
answer: 2,
difficulty: "Difficult",
explanation: "Third harmonic = 3 × 250 = 750 Hz."
},

{
question: "A closed pipe has length 0.25 m. If sound speed is 340 m s⁻¹, its fundamental frequency is:",
options: ["170 Hz", "340 Hz", "680 Hz", "1360 Hz"],
answer: 1,
difficulty: "Difficult",
explanation: "f = v/(4L) = 340/(1.0) = 340 Hz."
},

{
question: "An open pipe has length 0.50 m. If sound speed is 340 m s⁻¹, its fundamental frequency is:",
options: ["170 Hz", "340 Hz", "680 Hz", "1360 Hz"],
answer: 1,
difficulty: "Difficult",
explanation: "f = v/(2L) = 340/1.0 = 340 Hz."
},

{
question: "A closed pipe has a fundamental frequency of 200 Hz. Its first allowed higher harmonic is:",
options: ["300 Hz", "400 Hz", "600 Hz", "800 Hz"],
answer: 2,
difficulty: "Difficult",
explanation: "The next allowed harmonic is the third: 3 × 200 = 600 Hz."
},

{
question: "An open pipe has a fundamental frequency of 150 Hz. Its third harmonic is:",
options: ["300 Hz", "450 Hz", "600 Hz", "750 Hz"],
answer: 1,
difficulty: "Difficult",
explanation: "Third harmonic = 3 × 150 = 450 Hz."
},

{
question: "A source emits 500 Hz sound and moves toward a stationary observer. The observer hears:",
options: ["a lower frequency", "a higher frequency", "zero frequency", "exactly 500 Hz"],
answer: 1,
difficulty: "Difficult",
explanation: "Approaching motion increases the observed frequency."
},

{
question: "A train horn of 150 Hz approaches a stationary observer at 35 m s⁻¹. Taking sound speed as 340 m s⁻¹, the observed frequency is closest to:",
options: ["136 Hz", "150 Hz", "167 Hz", "185 Hz"],
answer: 2,
difficulty: "Difficult",
explanation: "f' = fv/(v−vs) = 150×340/305 ≈ 167 Hz."
},

{
question: "The same 150 Hz train horn receding at 35 m s⁻¹ is heard at approximately:",
options: ["136 Hz", "150 Hz", "167 Hz", "185 Hz"],
answer: 0,
difficulty: "Difficult",
explanation: "f' = fv/(v+vs) = 150×340/375 ≈ 136 Hz."
},

{
question: "A polarized beam of intensity I₀ passes through an analyzer whose axis is 60° to the polarization direction. The transmitted intensity is:",
options: ["I₀/2", "I₀/4", "I₀/√2", "0"],
answer: 1,
difficulty: "Difficult",
explanation: "Using Malus's law, I = I₀cos²60° = I₀/4."
},

{
question: "Unpolarized light of intensity 16 W m⁻² passes through one ideal Polaroid. The emerging intensity is:",
options: ["2 W m⁻²", "4 W m⁻²", "8 W m⁻²", "16 W m⁻²"],
answer: 2,
difficulty: "Difficult",
explanation: "An ideal Polaroid transmits half of unpolarized light."
},

{
question: "The 16 W m⁻² unpolarized beam then passes through a second Polaroid whose axis is 30° from the first. The final intensity is:",
options: ["2 W m⁻²", "4 W m⁻²", "6 W m⁻²", "8 W m⁻²"],
answer: 2,
difficulty: "Difficult",
explanation: "First filter gives 8 W m⁻²; second gives 8cos²30° = 6 W m⁻²."
},

{
question: "If two Polaroid axes are perpendicular, ideal transmitted light intensity is:",
options: ["maximum", "half the original", "zero", "double the original"],
answer: 2,
difficulty: "Difficult",
explanation: "Perpendicular axes block the polarized light."
},

{
question: "For a fixed-amplitude pair of coherent waves, changing from constructive to destructive interference requires a phase change of:",
options: ["45°", "90°", "180°", "360°"],
answer: 2,
difficulty: "Difficult",
explanation: "Constructive and destructive interference differ by 180° phase."
},

{
question: "To increase wave intensity by a factor of 50, the amplitude must be increased by a factor closest to:",
options: ["5", "√50", "25", "50"],
answer: 1,
difficulty: "Difficult",
explanation: "Since I ∝ A², amplitude must increase by √50."
},

{
question: "A string makes 45 complete vibrations in 10 s. Its frequency is:",
options: ["0.22 Hz", "4.5 Hz", "45 Hz", "450 Hz"],
answer: 1,
difficulty: "Difficult",
explanation: "f = number of vibrations/time = 45/10 = 4.5 Hz."
},

{
question: "A 1.2 m string vibrates in its third harmonic. The wavelength is:",
options: ["0.4 m", "0.6 m", "0.8 m", "1.2 m"],
answer: 2,
difficulty: "Difficult",
explanation: "λ = 2L/n = 2(1.2)/3 = 0.8 m."
},

{
question: "A 1.2 m string vibrates in its second harmonic. The wavelength is:",
options: ["0.6 m", "1.2 m", "2.4 m", "3.6 m"],
answer: 1,
difficulty: "Difficult",
explanation: "λ = 2L/n = 2(1.2)/2 = 1.2 m."
},

{
question: "A wave travels at 340 m s⁻¹ and has frequency 1024 Hz. Its wavelength is closest to:",
options: ["0.166 m", "0.332 m", "0.500 m", "1.00 m"],
answer: 1,
difficulty: "Difficult",
explanation: "λ = v/f = 340/1024 ≈ 0.332 m."
},

{
question: "A closed air column resonates at a shortest length of 0.25 m with a 329.6 Hz tuning fork. The approximate sound speed is:",
options: ["109 m s⁻¹", "165 m s⁻¹", "330 m s⁻¹", "660 m s⁻¹"],
answer: 2,
difficulty: "Difficult",
explanation: "For the fundamental, λ = 4L, so v = fλ ≈ 330 m s⁻¹."
}

];

localStorage.setItem(
    "mcqQuestionsChapter9",
    JSON.stringify(questions)
);

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

    feedback.innerHTML =
        `<strong>Correct!</strong><p>${q.explanation}</p>`;

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