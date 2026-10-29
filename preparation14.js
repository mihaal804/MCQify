const questions = [

    // =========================
    // EASY — 24 MCQs
    // =========================

    {
        question: "The basic constituents of protons and neutrons are called:",
        options: [
            "Leptons",
            "Quarks",
            "Photons",
            "Neutrinos"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Protons and neutrons are made up of quarks."
    },

    {
        question: "How many types, or flavors, of quarks are known?",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "There are six quark flavors: up, down, strange, charm, top and bottom."
    },

    {
        question: "Which of the following is a quark flavor?",
        options: [
            "Electron",
            "Muon",
            "Up",
            "Photon"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Up is one of the six quark flavors."
    },

    {
        question: "Which pair represents two quark flavors?",
        options: [
            "Up and down",
            "Electron and proton",
            "Photon and gluon",
            "Muon and neutrino"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Up and down are two of the six quark flavors."
    },

    {
        question: "A proton consists of:",
        options: [
            "One up and two down quarks",
            "Two up and one down quark",
            "Three up quarks",
            "Three down quarks"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A proton has the quark composition uud."
    },

    {
        question: "A neutron consists of:",
        options: [
            "Two up and one down quark",
            "One up and two down quarks",
            "Three up quarks",
            "Three strange quarks"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A neutron has the quark composition udd."
    },

    {
        question: "The electric charge of an up quark is:",
        options: [
            "+1e",
            "+2/3e",
            "-1/3e",
            "-1e"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An up-type quark has charge +2/3e."
    },

    {
        question: "The electric charge of a down quark is:",
        options: [
            "+2/3e",
            "+1e",
            "-1/3e",
            "-2/3e"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A down-type quark has charge -1/3e."
    },

    {
        question: "A hadron is a particle made of:",
        options: [
            "Quarks",
            "Only electrons",
            "Only photons",
            "Only neutrinos"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Hadrons are composite particles containing quarks."
    },

    {
        question: "A baryon consists of:",
        options: [
            "One quark",
            "Two quarks",
            "Three quarks",
            "One quark and one lepton"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A baryon is composed of three quarks."
    },

    {
        question: "A meson consists of:",
        options: [
            "Three quarks",
            "A quark and an antiquark",
            "Three leptons",
            "Two electrons"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A meson consists of one quark and one antiquark."
    },

    {
        question: "The proton is classified as a:",
        options: [
            "Lepton",
            "Baryon",
            "Meson",
            "Photon"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A proton contains three quarks, so it is a baryon."
    },

    {
        question: "The neutron is classified as a:",
        options: [
            "Baryon",
            "Lepton",
            "Meson",
            "Photon"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A neutron contains three quarks and is therefore a baryon."
    },

    {
        question: "Electrons belong to the family of:",
        options: [
            "Hadrons",
            "Leptons",
            "Baryons",
            "Mesons"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Electrons are fundamental particles called leptons."
    },

    {
        question: "Neutrinos are classified as:",
        options: [
            "Leptons",
            "Baryons",
            "Mesons",
            "Quarks"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Neutrinos are fundamental particles belonging to the lepton family."
    },

    {
        question: "Which of the following is a lepton?",
        options: [
            "Proton",
            "Neutron",
            "Electron",
            "Pion"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The electron is a lepton."
    },

    {
        question: "Which particle carries the electromagnetic force?",
        options: [
            "Gluon",
            "Photon",
            "Higgs boson",
            "Neutrino"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The photon is the exchange particle associated with the electromagnetic force."
    },

    {
        question: "Which particles are associated with the weak nuclear force?",
        options: [
            "W and Z bosons",
            "Photons",
            "Gluons",
            "Electrons"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "W and Z bosons are exchange particles of the weak interaction."
    },

    {
        question: "The exchange particle associated with the strong interaction is the:",
        options: [
            "Photon",
            "Gluon",
            "Electron",
            "Neutrino"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Gluons are the force carriers of the strong interaction."
    },

    {
        question: "The Higgs boson is associated with the origin of:",
        options: [
            "Electric charge",
            "Particle mass",
            "Electric current",
            "Temperature"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The Higgs boson is associated with the mechanism responsible for particle masses."
    },

    {
        question: "An antiparticle has the same mass as its corresponding particle but:",
        options: [
            "Always zero energy",
            "Opposite relevant charges",
            "Double the mass",
            "No momentum"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A particle and its antiparticle have the same mass but opposite charge-related properties."
    },

    {
        question: "The antiparticle of an electron is called:",
        options: [
            "Proton",
            "Positron",
            "Neutron",
            "Muon"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The positron is the antiparticle of the electron."
    },

    {
        question: "The electric charge of a positron is:",
        options: [
            "-e",
            "0",
            "+e",
            "+2e"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A positron has the same mass as an electron but charge +e."
    },

    {
        question: "The process in which a particle and antiparticle destroy each other is called:",
        options: [
            "Ionization",
            "Annihilation",
            "Reflection",
            "Diffraction"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Particle-antiparticle destruction is called annihilation."
    },


    // =========================
    // NORMAL — 32 MCQs
    // =========================

    {
        question: "The total charge of a proton can be found from its quark composition:",
        options: [
            "uud",
            "udd",
            "uuu",
            "ddd"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A proton consists of two up quarks and one down quark."
    },

    {
        question: "The charge of a proton from its quark composition uud is:",
        options: [
            "0",
            "+1e",
            "-1e",
            "+2e"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "2(+2/3e) + (-1/3e) = +e."
    },

    {
        question: "The charge of a neutron from its quark composition udd is:",
        options: [
            "+1e",
            "-1e",
            "0",
            "+2/3e"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "(+2/3e) + 2(-1/3e) = 0."
    },

    {
        question: "Which combination represents a neutron?",
        options: [
            "uud",
            "udd",
            "uuu",
            "ddū"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The neutron is composed of one up quark and two down quarks."
    },

    {
        question: "Which combination represents a proton?",
        options: [
            "udd",
            "uud",
            "ddd",
            "uū"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The proton has quark composition uud."
    },

    {
        question: "Which of the following is NOT a quark flavor?",
        options: [
            "Charm",
            "Strange",
            "Bottom",
            "Electron"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Electron is a lepton, not a quark flavor."
    },

    {
        question: "Which two quarks belong to the up-type group?",
        options: [
            "Up and down",
            "Up and charm",
            "Down and strange",
            "Strange and bottom"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Up-type quarks include up, charm and top."
    },

    {
        question: "Which two quarks belong to the down-type group?",
        options: [
            "Up and charm",
            "Charm and top",
            "Down and strange",
            "Up and top"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Down-type quarks include down, strange and bottom."
    },

    {
        question: "A particle made of three quarks belongs to the:",
        options: [
            "Lepton family",
            "Baryon family",
            "Photon family",
            "Boson family only"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Three-quark hadrons are baryons."
    },

    {
        question: "A particle made of a quark and an antiquark is a:",
        options: [
            "Baryon",
            "Meson",
            "Lepton",
            "Neutrino"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Mesons consist of one quark and one antiquark."
    },

    {
        question: "Which statement correctly compares baryons and mesons?",
        options: [
            "Baryons have three quarks; mesons have a quark-antiquark pair",
            "Both contain only leptons",
            "Baryons contain two leptons",
            "Mesons contain three quarks"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Baryons are three-quark particles, while mesons contain a quark and antiquark."
    },

    {
        question: "Which pair consists entirely of leptons?",
        options: [
            "Electron and neutrino",
            "Proton and neutron",
            "Proton and electron",
            "Pion and proton"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Electrons and neutrinos are both leptons."
    },

    {
        question: "Which particle is NOT a lepton?",
        options: [
            "Electron",
            "Neutrino",
            "Muon",
            "Proton"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "A proton is a baryon, not a lepton."
    },

    {
        question: "Which set contains only exchange particles?",
        options: [
            "Photon, gluon, W and Z",
            "Electron, proton, neutron",
            "Up, down, electron",
            "Muon, neutrino, proton"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Photon, gluon, W and Z are fundamental exchange particles or force carriers."
    },

    {
        question: "The electromagnetic interaction is mediated by:",
        options: [
            "Gluons",
            "Photons",
            "W bosons only",
            "Neutrinos"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Photons are the exchange particles of the electromagnetic interaction."
    },

    {
        question: "The strong interaction is mediated by:",
        options: [
            "Photons",
            "Gluons",
            "Electrons",
            "W bosons"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Gluons mediate the strong interaction."
    },

    {
        question: "The weak interaction is associated with:",
        options: [
            "W and Z bosons",
            "Photons only",
            "Gluons only",
            "Electrons only"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "W and Z bosons are the exchange particles of the weak interaction."
    },

    {
        question: "The Higgs boson is a:",
        options: [
            "Lepton",
            "Quark",
            "Fundamental particle",
            "Baryon"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The Higgs boson is classified as a fundamental particle."
    },

    {
        question: "The antiparticle of a particle has:",
        options: [
            "Different mass and same charge",
            "Same mass and opposite relevant charge",
            "Zero mass",
            "Twice the mass"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Particles and corresponding antiparticles have the same mass and opposite charge-related properties."
    },

    {
        question: "The antiparticle of a negatively charged electron has:",
        options: [
            "Negative charge",
            "Positive charge",
            "Zero charge",
            "Twice the negative charge"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The electron's antiparticle, the positron, has charge +e."
    },

    {
        question: "During beta-minus decay, a neutron changes into a:",
        options: [
            "Proton",
            "Photon",
            "Meson",
            "Electron"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "In β− decay, a neutron changes into a proton while emitting an electron and antineutrino."
    },

    {
        question: "During beta-minus decay, a down quark changes into an:",
        options: [
            "Up quark",
            "Strange quark",
            "Electron",
            "Photon"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "In β− decay, a down quark changes into an up quark through the weak interaction."
    },

    {
        question: "During beta-plus decay, an up quark changes into a:",
        options: [
            "Down quark",
            "Strange quark",
            "Top quark",
            "Photon"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "In β+ decay, an up quark changes into a down quark."
    },

    {
        question: "Beta-plus decay changes a proton into a:",
        options: [
            "Neutron",
            "Photon",
            "Meson",
            "Muon"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "In β+ decay, a proton changes into a neutron while emitting a positron and neutrino."
    },

    {
        question: "The charge of an up quark is:",
        options: [
            "+2/3e",
            "-2/3e",
            "+1/3e",
            "-1/3e"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Up-type quarks have charge +2/3e."
    },

    {
        question: "The charge of an anti-down quark is:",
        options: [
            "-1/3e",
            "+1/3e",
            "+2/3e",
            "-2/3e"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A down quark has charge -1/3e, so its antiquark has charge +1/3e."
    },

    {
        question: "The charge of an anti-up quark is:",
        options: [
            "+2/3e",
            "-2/3e",
            "+1/3e",
            "-1/3e"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "An up quark has charge +2/3e, so an anti-up quark has -2/3e."
    },

    {
        question: "Which particle is a baryon?",
        options: [
            "Proton",
            "Electron",
            "Photon",
            "Meson"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The proton is a baryon because it consists of three quarks."
    },

    {
        question: "Which particle is a meson?",
        options: [
            "Neutron",
            "Proton",
            "Pion",
            "Electron"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Pions are examples of mesons."
    },

    {
        question: "Which statement about leptons is correct?",
        options: [
            "They are made of three quarks",
            "They are fundamental particles",
            "They are always electrically charged",
            "They are all baryons"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Leptons such as electrons and neutrinos are fundamental particles."
    },

    {
        question: "Which particle has no electric charge?",
        options: [
            "Electron",
            "Proton",
            "Neutron",
            "Positron"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The neutron has zero net electric charge."
    },

    {
        question: "Which pair has equal mass but opposite electric charge?",
        options: [
            "Proton and neutron",
            "Electron and positron",
            "Electron and proton",
            "Photon and electron"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "An electron and positron have the same mass and opposite electric charges."
    },


    // =========================
    // DIFFICULT — 24 MCQs
    // =========================

    {
        question: "Using quark charges, the charge of uud is:",
        options: [
            "0",
            "+1e",
            "-1e",
            "+2e"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The charge is 2(+2/3e) + (-1/3e) = +1e."
    },

    {
        question: "Using quark charges, the charge of udd is:",
        options: [
            "+1e",
            "-1e",
            "0",
            "+2/3e"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "The charge is (+2/3e) + 2(-1/3e) = 0."
    },

    {
        question: "A particle consists of three quarks with charges +2/3e, +2/3e and -1/3e. Its total charge is:",
        options: [
            "-1e",
            "0",
            "+1e",
            "+2e"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Adding the charges gives +2/3 + 2/3 − 1/3 = +1e."
    },

    {
        question: "A three-quark particle has quark charges +2/3e, -1/3e and -1/3e. It is electrically neutral. This composition corresponds to a:",
        options: [
            "Proton",
            "Neutron",
            "Positron",
            "Electron"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The combination uud gives +1e, while udd gives zero charge and represents a neutron."
    },

    {
        question: "In beta-minus decay, the change d → u causes the quark charge to change by:",
        options: [
            "+e",
            "-e",
            "+2/3e",
            "-2/3e"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "The charge changes from -1/3e to +2/3e, an increase of +e."
    },

    {
        question: "In beta-plus decay, the change u → d causes the quark charge to change by:",
        options: [
            "+e",
            "-e",
            "+1/3e",
            "-1/3e"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The charge changes from +2/3e to -1/3e, a decrease of e."
    },

    {
        question: "A neutron undergoes beta-minus decay. Its quark composition changes from:",
        options: [
            "uud to udd",
            "udd to uud",
            "uuu to udd",
            "ddd to uud"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "A neutron is udd. One down quark changes to up, giving uud, a proton."
    },

    {
        question: "A proton undergoes beta-plus decay. Its quark composition changes from:",
        options: [
            "uud to udd",
            "udd to uud",
            "uuu to udd",
            "ddd to uud"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "A proton is uud. One up quark changes to down, giving udd, a neutron."
    },

    {
        question: "A baryon contains three quarks. If their charges are +2/3e, -1/3e and -1/3e, the baryon's net charge is:",
        options: [
            "+1e",
            "0",
            "-1e",
            "+2/3e"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The three charges add to zero."
    },

    {
        question: "A meson contains a quark with charge +2/3e and an antiquark with charge -2/3e. Its total charge is:",
        options: [
            "+1e",
            "-1e",
            "0",
            "+2e"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "The two opposite charges cancel, giving zero net charge."
    },

    {
        question: "A meson contains a quark of charge +2/3e and an anti-down quark of charge +1/3e. Its total charge is:",
        options: [
            "0",
            "+1e",
            "-1e",
            "+2/3e"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The total charge is +2/3e + +1/3e = +1e."
    },

    {
        question: "A meson contains a down quark and an anti-up quark. Its net charge is:",
        options: [
            "+1e",
            "0",
            "-1e",
            "-2/3e"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Down has -1/3e and anti-up has -2/3e, giving -1e."
    },

    {
        question: "Which transformation is required to change a neutron into a proton?",
        options: [
            "u → d",
            "d → u",
            "u → photon",
            "d → electron"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "A neutron udd becomes a proton uud when one down quark changes into an up quark."
    },

    {
        question: "Which transformation is required to change a proton into a neutron?",
        options: [
            "d → u",
            "u → d",
            "u → photon",
            "d → neutrino"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "A proton uud becomes a neutron udd when one up quark changes into a down quark."
    },

    {
        question: "If a particle has the same mass as an electron but opposite electric charge, it is:",
        options: [
            "A proton",
            "A positron",
            "A neutron",
            "A photon"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The positron is the electron's antiparticle."
    },

    {
        question: "Which statement best distinguishes a hadron from a lepton?",
        options: [
            "Hadrons are made of quarks, while leptons are fundamental particles",
            "Leptons contain three quarks",
            "Hadrons always have zero charge",
            "Leptons are always heavier"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Hadrons are composite quark particles, while leptons are fundamental particles."
    },

    {
        question: "A particle belongs to the baryon family if it contains:",
        options: [
            "One quark and one antiquark",
            "Three quarks",
            "Two leptons",
            "One photon"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Baryons consist of three quarks."
    },

    {
        question: "A particle belongs to the meson family if it contains:",
        options: [
            "Three quarks",
            "Three antiquarks",
            "A quark and an antiquark",
            "Two electrons"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Mesons consist of one quark and one antiquark."
    },

    {
        question: "Which set contains one particle from each category: baryon, meson and lepton?",
        options: [
            "Proton, pion, electron",
            "Electron, neutron, photon",
            "Photon, proton, neutron",
            "Muon, electron, neutrino"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Proton is a baryon, pion is a meson, and electron is a lepton."
    },

    {
        question: "Which combination correctly identifies the force carrier and interaction?",
        options: [
            "Photon — electromagnetic",
            "Gluon — electromagnetic",
            "Electron — strong",
            "Neutrino — electromagnetic"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Photons mediate the electromagnetic interaction."
    },

    {
        question: "Which combination correctly identifies the force carrier of the strong interaction?",
        options: [
            "Photon",
            "Gluon",
            "W boson",
            "Electron"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Gluons are the exchange particles associated with the strong interaction."
    },

    {
        question: "Which combination correctly identifies the weak-force carriers?",
        options: [
            "Photons",
            "Gluons",
            "W and Z bosons",
            "Electrons and positrons"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "The weak interaction is mediated by W and Z bosons."
    },

    {
        question: "Which statement about the Higgs boson is correct?",
        options: [
            "It is a baryon made of three quarks",
            "It is a lepton carrying negative charge",
            "It is a fundamental particle associated with particle mass",
            "It is the antiparticle of the photon"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "The Higgs boson is a fundamental particle associated with the mechanism responsible for particle mass."
    },

    {
        question: "Which statement about particle-antiparticle pairs is correct?",
        options: [
            "They always have different masses",
            "They have the same mass and opposite relevant charges",
            "They always have the same electric charge",
            "The antiparticle has zero energy"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "A particle and its antiparticle have equal mass but opposite charge-related properties."
    }

];

localStorage.setItem(
    "mcqQuestionsChapter14",
    JSON.stringify(questions)
);
localStorage.setItem(
    "mcqQuestionsChapter14",
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

    questionText.textContent =
        question.question;

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

    const percentage =
        Math.round((current / total) * 100);


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