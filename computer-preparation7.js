const questions = [
    {
        question: "What is digital literacy primarily defined as?",
        options: [
            "The ability to find, create, evaluate, communicate, and share digital contents",
            "The physical repair of computer motherboards and circuits",
            "The process of writing C++ operating system kernels",
            "The speed testing of network routers and switches"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Digital literacy involves interacting with digital technologies to find, create, evaluate, communicate, and share digital contents[cite: 4]."
    },
    {
        question: "What is a research question designed to achieve?",
        options: [
            "The goal or objective to achieve after collecting data, evaluating it, and coming to a conclusion",
            "A permanent computer system error log",
            "An encrypted password for database security",
            "A physical hardware wiring blueprint"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A research question provides the goal or objective to achieve after data collection, evaluation, and conclusion[cite: 4]."
    },
    {
        question: "How is a 'method' defined in data collection strategies?",
        options: [
            "A process, steps, or procedure to perform a task or implement some idea",
            "A long-term corporate vision or objective",
            "A computer virus scanning utility",
            "A hardware component voltage limit"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A method is defined as a process, steps, or procedure to perform a task or implement an idea[cite: 4]."
    },
    {
        question: "How is a 'strategy' defined in data collection?",
        options: [
            "A plan of action, goal, objective, or set of actions designed to achieve a long-term aim",
            "A single line of programming code syntax",
            "A physical storage hard disk partition",
            "An audio recording file format"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A strategy is a plan of action designed to achieve a long-term goal or objective[cite: 5]."
    },
    {
        question: "What are qualitative interviews primarily classified as?",
        options: [
            "An informal research method asking open-ended questions to gain in-depth insight",
            "A rigid mathematical calculation running on a CPU",
            "An automated hardware diagnostic scan",
            "A closed-ended numerical survey form"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Qualitative interviews are usually an informal research method using open-ended questions for deep insight[cite: 5]."
    },
    {
        question: "What is the primary focus of qualitative interviews?",
        options: [
            "Understanding the participants' viewpoint through quality in-depth analysis",
            "Calculating strict statistical averages from millions of records",
            "Testing physical network cable transmission speeds",
            "Formatting digital storage media sectors"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Qualitative interviews are participant-centered, focusing on the quality of in-depth analysis of participants' viewpoints[cite: 5]."
    },
    {
        question: "What does simulation involve as a data collection method?",
        options: [
            "Generating or creating synthetic or fake data that imitates real-world data",
            "Conducting live face-to-face interviews with parents",
            "Distributing printed questionnaires to students",
            "Writing manual text field notes on paper"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Simulation is an indirect method where data is generated or created as an imitation of real-world data[cite: 9]."
    },
    {
        question: "What does digital literacy involve interacting with?",
        options: [
            "Digital technologies like cell phones, social media platforms, smart devices, and the Internet",
            "Physical computer hardware parts and soldering circuits",
            "Paper notebooks and traditional printing presses",
            "Manual cash registers and calculator machines"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Digital literacy involves interaction with digital technologies like cell phones, social media, smart devices, and the Internet[cite: 4]."
    },
    {
        question: "What is a strategy defined as in data collection?",
        options: [
            "A plan of action designed to achieve a long-term goal or objective",
            "A single computer programming command line",
            "An audio recording backup file",
            "A physical networking copper cable"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A strategy is defined as a plan of action designed to achieve a long-term goal or objective[cite: 5]."
    },
    {
        question: "What are qualitative interviews used for in research?",
        options: [
            "To gain in-depth insight about the research question using open-ended questions",
            "To calculate exact mathematical sums automatically",
            "To format digital hard disk storage partitions",
            "To scan computers for malware and viruses"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Qualitative interviews are informal research methods using open-ended questions to gain in-depth insight[cite: 5]."
    },
    {
        question: "What is simulation in data collection?",
        options: [
            "An indirect method where synthetic or fake data is generated to imitate real-world data",
            "Conducting live personal interviews with human respondents",
            "Distributing printed questionnaire forms to students",
            "Writing handwritten field notes on paper"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Simulation is an indirect method where synthetic data is generated as an imitation of real-world data[cite: 9]."
    },
    {
        question: "What does a survey serve as in data collection?",
        options: [
            "A systematic or structured tool designed for data collection from a group of individuals",
            "An unguided casual street conversation",
            "An operating system boot sequence",
            "A hardware cooling fan mechanism"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A survey serves as a systematic or structured tool designed for data collection from individuals[cite: 10]."
    },
    {
        question: "What does the term 'infographics' combine?",
        options: [
            "Information and graphics",
            "Internet and graphics",
            "Interface and graphics",
            "Interviews and graphics"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Infographics combine information and graphics to represent research findings clearly[cite: 12]."
    },
    {
        question: "What is a prototype in the context of data collection?",
        options: [
            "A preliminary version or scale-down sample of data collection tools or methods",
            "A finished commercial software application ready for retail sale",
            "A corrupted file format in local storage",
            "A fixed network routing table"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A prototype refers to a preliminary version or sample of data collection tools before full implementation[cite: 9]."
    },
    {
        question: "What is a survey?",
        options: [
            "A systematic or structured tool designed for data collection from a group of individuals",
            "An unguided casual street chat without questions",
            "An operating system boot sequence",
            "A hardware cooling fan mechanism"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A survey is a systematic or structured tool designed to collect feedback and opinions from targeted participants[cite: 10]."
    },
    {
        question: "What does the word 'infographic' combine?",
        options: [
            "Information and graphics",
            "Internet and graphics",
            "Interface and graphics",
            "Interviews and graphics"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Infographics combine information and graphics (text, images, and design elements) to represent findings[cite: 12]."
    },
    {
        question: "What is the main purpose of data presentation?",
        options: [
            "Showing the relationship between datasets with visual tools to aid informed decisions",
            "Permanently deleting temporary system cache files",
            "Formatting computer hard disk partitions",
            "Compiling programming source code into binaries"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Data presentation shows relationships between datasets using visual tools to lead towards informed decisions[cite: 12]."
    },
    {
        question: "What do reports help to present?",
        options: [
            "Data in a summarized, structured, and organized format to communicate complex information",
            "Random computer system error logs",
            "Encrypted cryptographic cipher keys",
            "Binary machine instruction sets"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Reports present data in a summarized, structured format to communicate complex information clearly."
    },
    {
        question: "What is purposeful sampling used for in qualitative research?",
        options: [
            "Selecting participants who can provide valuable insights and rich depth of data",
            "Choosing every tenth person from a telephone directory randomly",
            "Picking any random person passing by on the street",
            "Selecting participants based on their computer brand"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Purposeful sampling allows the selection of participants who provide valuable insights aligned with the research[cite: 6]."
    },
    {
        question: "Why is informed consent necessary before an interview?",
        options: [
            "To ensure ethical conduct, voluntary participation, and respect for autonomy",
            "To increase computer monitor screen brightness",
            "To speed up internet broadband download rates",
            "To test physical network cable speeds"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Informed consent ensures ethical conduct, explaining risks/benefits and confirming voluntary participation[cite: 6]."
    },
    {
        question: "What is an interview guideline composed of?",
        options: [
            "A set of open-ended questions designed to obtain detailed responses",
            "Rigid multiple-choice math formulas",
            "Encrypted password strings",
            "Computer network topology maps"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "An interview guideline comprises open-ended questions designed for detailed, flexible responses[cite: 6]."
    },
    {
        question: "Why is interviewer training important?",
        options: [
            "To equip interviewers with active listening, probing, and neutrality skills",
            "To increase processor clock speed permanently",
            "To format digital disk storage sectors",
            "To write Python software applications"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Training equips interviewers with skills like active listening, probing, and maintaining neutrality[cite: 6]."
    },
    {
        question: "What is a survey prototype used for?",
        options: [
            "Identifying ambiguities and gaining clarity of questions before general distribution",
            "Testing computer CPU thermal limits",
            "Checking local network cable continuity",
            "Scanning computers for malware"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A survey prototype is a small-scale version helping identify ambiguities and clarify questions[cite: 9]."
    },
    {
        question: "What is an interview prototype?",
        options: [
            "A mock interview conducted to test and refine protocol effectiveness",
            "A final published research book",
            "An automated server diagnostic scan",
            "A spreadsheet template for budgeting"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Interview prototypes are mock interviews conducted to test and refine interview protocols[cite: 10]."
    },
    {
        question: "What website URL is used to create a Google Form?",
        options: [
            "docs.google.com/forms",
            "google.com/survey/create",
            "forms.google.net/builder",
            "survey.google.org/start"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Users type 'docs.google.com/forms' in a web browser to start creating a new Google Form[cite: 10]."
    },
    {
        question: "What does a presentation in data visualization include?",
        options: [
            "A collection of multimedia elements like text, images, audio, and video data",
            "Raw unformatted machine binary code files",
            "Physical copper wires and network switches",
            "Printed paper questionnaires only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Presentations showcase information using multimedia elements like text, images, audio, and video[cite: 12]."
    },
    {
        question: "What is a questionnaire prototype?",
        options: [
            "A draft version of a questionnaire used to identify and correct problems",
            "A final printed national census document",
            "An encrypted database backup file",
            "A compiled software installation script"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A questionnaire prototype is a draft version where all problems are identified and corrected[cite: 9]."
    },
    {
        question: "What is data tool prototyping?",
        options: [
            "Evaluating and improving the key working of a data collection tool before use",
            "Washing computer hardware parts with liquid cleaning solutions",
            "Deleting all research notes permanently",
            "Reformatting computer hard disk partitions"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Data tool prototypes evaluate and improve the key working of the data collection tool[cite: 9]."
    },
    {
        question: "What is data visualization prototyping?",
        options: [
            "Creating early versions of data visuals or dashboards to provide clarity and effectiveness",
            "Drawing hand sketches on notebook pages without research",
            "Running CPU speed benchmark tests",
            "Configuring router firewall rules"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Data visualization prototypes give early glimpses of data visuals or dashboards to ensure clarity[cite: 10]."
    },
    {
        question: "What is the primary benefit of accurate data collection in business?",
        options: [
            "Making informed business decisions, maintaining research integrity, and ensuring quality",
            "Increasing monitor display screen resolution",
            "Speeding up internet broadband download rates",
            "Changing desktop background wallpapers"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Accurate data collection plays a vital role in informed business decisions and research integrity[cite: 4]."
    },
    {
        question: "What is a real-world example of simulation given in the text?",
        options: [
            "A pilot learning to fly in an aircraft simulator",
            "A student reading a printed textbook chapter",
            "A businessman typing a letter in Microsoft Word",
            "A technician repairing a computer keyboard"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A real-world example of simulation mentioned is a pilot learning to fly in an aircraft simulator[cite: 9]."
    },
    {
        question: "Why is an accurate data collection strategy essential when researching smartphone cloud services?",
        options: [
            "To ensure that the methods utilized obtain accurate, reliable, and relevant data",
            "To permanently increase smartphone battery lifespan",
            "To automatically format mobile operating systems",
            "To eliminate the need for mobile internet data"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A collection strategy outlines the specific collection of methods needed to get accurate and reliable data[cite: 5]."
    },
    {
        question: "How do semi-structured qualitative interviews differ from strictly technical formal interviews?",
        options: [
            "They incorporate participant-centered knowledge based on social, cultural, and contextual factors",
            "They are conducted exclusively by automated computer algorithms",
            "They prohibit any verbal interaction between humans",
            "They require zero planning or research questions"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Semi-structured approaches use participant-centered knowledge based on social, cultural, and contextual factors[cite: 5]."
    },
    {
        question: "What is the function of probing techniques during qualitative interviews?",
        options: [
            "To delve deeper into responses for clarity, additional information, and underlying meaning",
            "To speed up network router packet transmission rates",
            "To encrypt confidential research transcription files",
            "To format digital disk storage sectors"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Probing techniques help delve deeper into responses to gain clarity, extra info, and underlying meaning[cite: 5]."
    },
    {
        question: "When developing a research question, what is the recommended approach for setting boundaries?",
        options: [
            "Start from a broader perspective and narrow down the scope to a specific topic of interest",
            "Pick completely random questions without any defined focus",
            "Keep questions broad enough to cover every topic in the universe simultaneously",
            "Avoid creating research questions entirely"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Researchers start from a broader perspective and narrow down the research question with clear boundaries[cite: 5, 6]."
    },
    {
        question: "Why is audio or video recording preferred over handwritten notes during interviews?",
        options: [
            "Recordings capture original answers and provide true insight without fading from memory",
            "Handwritten notes cause computer processors to overheat",
            "Audio recorders automatically compile programming code",
            "Recording equipment eliminates the need for interviewers"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Recording preserves original answers rather than relying on paper notes, providing true insight into viewpoints[cite: 6, 7]."
    },
    {
        question: "Why should an interview environment provide complete privacy and comfort?",
        options: [
            "To help participants feel at ease and encourage open, honest communication",
            "To maximize electrical power voltage in the room",
            "To increase local computer network bandwidth",
            "To prevent computer hardware from crashing"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A comfortable, private environment puts participants at ease and encourages open communication[cite: 7]."
    },
    {
        question: "What is the significance of prompt transcription after an interview?",
        options: [
            "It prevents facts from gradually disappearing due to the passage of time",
            "It increases computer random access memory capacity",
            "It formats storage hard drive partitions automatically",
            "It updates operating system security patches"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Prompt transcription records data accurately before facts fade gradually over time[cite: 7]."
    },
    {
        question: "In the case study example, what was the specific research objective?",
        options: [
            "To find viewpoints of parents having children aged 4 to 5 years regarding digital games/gadgets",
            "To test the hardware manufacturing speed of smartphones",
            "To calculate enterprise corporate tax rates in Pakistan",
            "To evaluate computer network cybersecurity protocols"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The case study objective examined parent viewpoints regarding children aged 4-5 using digital games/gadgets[cite: 8]."
    },
    {
        question: "What is a primary advantage of data simulation over direct real-world data collection?",
        options: [
            "It allows exploration of complex theories and huge data generation where direct collection is unreliable",
            "It automatically generates physical computer hardware components",
            "It eliminates the need for any research questions",
            "It guarantees zero programming bugs in software"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Simulation enables exploring complex theories and generating huge synthetic data where real-world collection is hard[cite: 9]."
    },
    {
        question: "How do prototypes help organizations during the development cycle?",
        options: [
            "By minimizing risks, identifying design flaws, and improving overall product quality",
            "By increasing electrical power consumption in offices",
            "By replacing human workers with automated machines completely",
            "By slowing down software execution speeds"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Prototypes minimize risks, address design flaws, and enhance the overall quality of the system[cite: 9]."
    },
    {
        question: "What distinguishes surveys from qualitative interviews?",
        options: [
            "Surveys are more formal, structured, and yield data suitable for statistical analysis",
            "Surveys never use questionnaires or online forms",
            "Surveys are conducted exclusively without any participants",
            "Surveys cannot collect quantitative metrics"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Surveys are more formal and structured than qualitative interviews, providing data for statistical analysis[cite: 10]."
    },
    {
        question: "What is the role of infographics in communicating research results?",
        options: [
            "Transforming intricate data into visually appealing formats for quick comprehension",
            "Encrypting secret database credentials",
            "Testing network router hardware limits",
            "Writing software device driver code"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Infographics transform intricate data into appealing visual formats so results are comprehended quickly[cite: 12]."
    },
    {
        question: "What key attributes should a good infographic possess?",
        options: [
            "Accuracy, audience understandability, crisp information, and visual appeal",
            "Complex unformatted text without any images or charts",
            "Maximum file size and encrypted binary blocks",
            "Rigid programming syntax and error logs"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A good infographic ensures accuracy, understandability, crisp information, and visual appeal[cite: 12]."
    },
    {
        question: "How do reports assist stakeholders and businessmen?",
        options: [
            "By transforming raw data into actionable insights to make informed decisions",
            "By increasing physical office storage space",
            "By slowing down internet connection speeds",
            "By formatting local computer drives"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Reports transform raw data into actionable insights, helping stakeholders make informed decisions."
    },
    {
        question: "Why must researchers establish inclusion criteria during participant selection?",
        options: [
            "To ensure participants possess characteristics aligning with the research question",
            "To increase computer processing speeds permanently",
            "To reduce electricity consumption in laboratories",
            "To format digital survey templates automatically"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Inclusion criteria align participant characteristics with the research question for relevant insights[cite: 6]."
    },
    {
        question: "What is the consequence of an interviewer imposing personal opinions during a session?",
        options: [
            "It compromises obtaining honest and true responses from participants",
            "It permanently improves the accuracy of the study",
            "It speeds up data simulation processing times",
            "It automatically generates research reports"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Imposing personal opinions ruins neutrality; true responses depend directly on interviewer skill and neutrality[cite: 7]."
    },
    {
        question: "What is a key benefit of using a structured questionnaire table in parent feedback surveys?",
        options: [
            "It allows systematic rating of statements across categories like strongly agreed or neutral",
            "It automatically formats computer hard disk partitions",
            "It compiles Python programming source code instantly",
            "It encrypts survey responses against hackers"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Questionnaire tables allow systematic feedback collection using rating categories like agreed, neutral, etc.[cite: 11]."
    },
    {
        question: "How does the complexity of data collection differ between surveys and qualitative interviews?",
        options: [
            "Surveys offer broader statistical quantification while interviews provide deeper contextual details",
            "Surveys require physical laboratory microscopes",
            "Qualitative interviews use automated Google Form checkboxes exclusively",
            "There is no difference in their analytical depth"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Surveys quantify perspectives for statistical analysis, whereas qualitative interviews provide deeper details[cite: 5, 10, 11]."
    },
    {
        question: "What is the significance of structured formatting in research reports?",
        options: [
            "It ensures information is expressed in a logical manner for clear understanding",
            "It restricts reports from being read by stakeholders",
            "It converts textual reports into binary machine code",
            "It deletes unnecessary research findings automatically"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A structured format ensures information in reports is expressed logically to convey true understanding."
    },
    {
        question: "What is the primary distinction between a method and a strategy as explained in the text?",
        options: [
            "A strategy is a plan of action or goal, whereas a method is the specific process or step to achieve it",
            "A method is a corporate goal, while a strategy is a computer software bug",
            "A strategy is physical hardware, while a method is plain text",
            "There is no conceptual difference between them"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A strategy is how to select a goal, while a method is the process or steps to achieve that goal[cite: 4, 5]."
    },
    {
        question: "Why are qualitative interviews typically conducted with a small number of participants?",
        options: [
            "The emphasis is on the quality of in-depth analysis rather than large quantity or generalization",
            "Because large groups cause audio recording devices to explode",
            "Because internet connectivity fails with more than one person",
            "Because government regulations forbid interviewing large groups"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Qualitative interviews emphasize in-depth qualitative analysis quality over large quantity and statistical generalization[cite: 5]."
    },
    {
        question: "In the case study example of parents and digital gadgets, what sample questions were suggested?",
        options: [
            "Asking if children play digital games, preferred games, and usage duration",
            "Asking about enterprise cloud server migration costs",
            "Asking for computer processor clock frequencies and voltage",
            "Asking for Python programming syntax rules"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Sample questions included asking if children play digital games, preferred games, and daily usage hours[cite: 8]."
    },
    {
        question: "What makes simulation data 'synthetic' or 'fake'?",
        options: [
            "It is artificially generated through analytical models as an imitation of real-world data",
            "It is stolen directly from secure government bank servers",
            "It consists entirely of handwritten interview paper notes",
            "It is printed on physical paper catalogs"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Simulated data is synthetic because analytical models generate it as an imitation of real-world patterns[cite: 9]."
    },
    {
        question: "What is a survey questionnaire's role when evaluating parent feedback?",
        options: [
            "To quantify opinions on cognitive and social impacts of digital gadgets on children",
            "To test local network router security firewalls",
            "To compile high-level programming source code",
            "To format digital disk storage sectors"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Parent feedback surveys quantify opinions regarding gadget impacts on children's cognitive and social development[cite: 11]."
    },
    {
        question: "How do multimedia elements enhance data presentations?",
        options: [
            "They help in better understanding, interpretation, and reaching the right conclusion",
            "They increase computer processor operating temperatures",
            "They permanently consume all local hard drive space",
            "They eliminate the need for any research data analysis"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Multimedia elements in presentations aid better understanding, interpretation, and accurate conclusions[cite: 12]."
    },
    {
        question: "What is the relationship between digital literacy and research questions?",
        options: [
            "Digital literacy is the key to formulating research questions based on accurate data collection",
            "Digital literacy replaces the need for any research questions entirely",
            "Research questions destroy digital literacy skills",
            "Digital literacy only relates to computer hardware repair"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Digital literacy is the key to formulating research questions based on accurate data collection or creation[cite: 4]."
    },
    {
        question: "What happens to the outcome of a data collection activity?",
        options: [
            "It becomes the answer to our research question for which procedures were followed",
            "It is automatically deleted by the operating system",
            "It is converted into a physical computer keyboard",
            "It turns into an encrypted network password"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The outcome of data collection and evaluation becomes the answer to our research question[cite: 4]."
    },
    {
        question: "Why is a strategy described as a plan of action?",
        options: [
            "Because it is designed to achieve a long-term goal or objective",
            "Because it fixes syntax errors in Python scripts",
            "Because it controls monitor refresh rates",
            "Because it connects network cables to routers"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A strategy is a plan of action designed to achieve a long-term goal or objective[cite: 5]."
    },
    {
        question: "What is the primary purpose of defining a broad topic and narrowing it down in research?",
        options: [
            "To set clear boundaries on what the research addresses and what is set aside",
            "To make the research report as long and confusing as possible",
            "To eliminate the need for participant interviews",
            "To speed up computer processor clock speeds"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Narrowing down a broad topic sets clear boundaries for what is addressed versus kept for future research[cite: 5, 6]."
    },
    {
        question: "What ethical right do participants have regarding informed consent during interviews?",
        options: [
            "They understand involvement is voluntary and have the right to withdraw at any time",
            "They are legally forced to answer every question without stopping",
            "They must surrender their personal property to the researcher",
            "They are required to write the final research report"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Informed consent emphasizes that participation is voluntary and participants can withdraw at any time[cite: 6]."
    },
    {
        question: "How does an interview guideline support consistency?",
        options: [
            "It provides a set of questions ensuring consistency while allowing adaptability",
            "It locks the interviewer into asking identical words without listening",
            "It prevents participants from speaking freely",
            "It automatically transcribes audio files into text"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "An interview guide ensures consistency across interviews while allowing adaptability based on responses[cite: 6]."
    },
    {
        question: "Why is writing alone considered less effective for recording interviews in the modern age?",
        options: [
            "Audio/video recorders capture original tones and can be replayed repeatedly for true insight",
            "Handwritten notes break computer keyboards instantly",
            "Writing causes pens to run out of ink too quickly",
            "Handwritten notes are prohibited by digital literacy laws"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Writing is less effective than audio/video recording because recordings allow repetition in original form[cite: 6, 7]."
    },
    {
        question: "What constitutes a neutral and relaxed interview environment?",
        options: [
            "A place with complete privacy, free from distractions where trust is established",
            "A crowded public marketplace with loud noises and interruptions",
            "A dark server room filled with noisy cooling fans",
            "An open computer laboratory during an exam"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A neutral, relaxed environment provides complete privacy, freedom from distractions, and mutual trust[cite: 7]."
    },
    {
        question: "What is the outcome of practicing proper ethical guidelines during qualitative interviews?",
        options: [
            "No privacy is breached and data remains accurate, secure, and reliable",
            "Computer processors run at maximum overclocked speeds",
            "Research reports are published automatically on the internet",
            "All participants receive financial monetary rewards"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Following ethical guidelines ensures no privacy is breached and data remains accurate and secure[cite: 7]."
    },
    {
        question: "In the parent-child digital gadget case study, what was required of potential participants?",
        options: [
            "They must be parents of children aged 4-5 years whose children use digital gadgets",
            "They must be professional software developers writing C++ code",
            "They must be elementary school computer teachers",
            "They must own a commercial cloud server company"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Participants must be parents of children aged 4-5 years whose children use digital gadgets[cite: 8]."
    },
    {
        question: "What is the key characteristic of simulated data regarding real-world attributes?",
        options: [
            "Desired attributes and characteristics seen in the real world can be incorporated into synthetic data",
            "Simulated data has zero relation to real-world phenomena",
            "Simulated data can only consist of plain text numbers",
            "Simulated data is always 100% inaccurate"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Desired real-world attributes and characteristics can be incorporated into synthetic simulation data[cite: 9]."
    },
    {
        question: "How do survey prototypes assist researchers before actual deployment?",
        options: [
            "They help identify ambiguities and ensure question clarity",
            "They format local computer hard disk storage drives",
            "They compile high-level programming source code",
            "They test network router hardware voltage limits"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Survey prototypes help identify ambiguities and get clarity on questions before general distribution[cite: 9]."
    },
    {
        question: "Why are multiple methods of data collection used in surveys?",
        options: [
            "To choose the most suitable method depending upon the targeted audience",
            "To confuse participants so they cannot answer accurately",
            "To increase file storage size on local computer servers",
            "To slow down survey tabulation processes"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Surveys use multiple methods (online, printed, telephonic) so researchers can select the best fit for their audience[cite: 10]."
    },
    {
        question: "What web browser URL initiates Google Form creation?",
        options: [
            "docs.google.com/forms",
            "google.com/forms/new",
            "forms.google.org/start",
            "survey.google.net/create"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Typing 'docs.google.com/forms' in a web browser opens the tool to create a new form[cite: 10]."
    },
    {
        question: "How are multiple choice questions added by default in Google Forms?",
        options: [
            "A default multiple choice question format appears, which can be modified by clicking",
            "Questions are generated automatically by artificial intelligence",
            "Users must write raw C++ code to create form fields",
            "Multiple choice options are strictly prohibited"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Google Forms provides a default multiple-choice format that can be changed by clicking on it[cite: 10, 11]."
    },
    {
        question: "How can a created Google Form be shared with participants?",
        options: [
            "By clicking the three dots in the top right corner and sharing the generated link",
            "By mailing printed paper copies through postal services",
            "By burning the form onto a physical compact disc",
            "By broadcasting it over radio frequencies"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Users click the three dots in the top right corner of the window to share the form link with participants[cite: 11]."
    },
    {
        question: "What is a primary advantage of infographics over plain text reports?",
        options: [
            "They combine text, images, and design elements to simplify complex information quickly",
            "They encrypt confidential files with military-grade passwords",
            "They increase computer hardware processing speeds",
            "They replace the need for any research data collection"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Infographics combine text, images, and designs to simplify intricate data so results are comprehended quickly[cite: 12]."
    },
    {
        question: "What role do visual elements play in data presentation?",
        options: [
            "They keep data representation more appealing, comprehensible, and engaging",
            "They cause computer monitors to display distorted colors",
            "They consume excessive internet bandwidth",
            "They prevent audiences from understanding research findings"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Graphical formats and visual elements make data representation more appealing and comprehensible[cite: 12]."
    },
    {
        question: "Why should presentations in research be audience-centered?",
        options: [
            "To ensure better understanding, interpretation, and effective communication of outcomes",
            "To make the presentation file size as large as possible",
            "To prevent the audience from asking questions",
            "To eliminate the need for data analysis"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "An accurate, clear, and audience-centered presentation helps in better understanding and right conclusions[cite: 12]."
    },
    {
        question: "How do reports function as a communication tool?",
        options: [
            "They present data in a summarized, structured format to communicate complex information clearly",
            "They act as physical antivirus software scanners",
            "They compile high-level programming source code into binaries",
            "They configure local area network routing switches"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Reports serve as tools to communicate complex information clearly in a structured format."
    },
    {
        question: "What is the ultimate benefit of transforming raw data into actionable insights via reports?",
        options: [
            "It enables stakeholders and businessmen to make informed decisions based on true insight",
            "It permanently slows down computer processor execution",
            "It formats storage hard drive partitions automatically",
            "It deletes all research files from cloud databases"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Reports transform raw data into actionable insights, enabling stakeholders to make informed decisions."
    },
    {
        question: "What is the primary significance of data evaluation in the research cycle?",
        options: [
            "It evaluates collected data and converts it into meaningful information to answer research questions",
            "It permanently erases system cache memory files",
            "It increases computer monitor screen brightness",
            "It speeds up internet broadband download rates"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Data evaluation converts collected data into meaningful information answering research questions[cite: 4]."
    },
    {
        question: "Why is the selection of data collection methods pivotal for research?",
        options: [
            "Accurate and suitable methods have a pivotal role in ensuring reliable research results",
            "Suitable methods increase computer RAM capacity",
            "Collection methods determine monitor refresh rates",
            "Methods eliminate the need for power supplies"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Accurate and suitable data collection methods play a pivotal role for reliable research[cite: 4]."
    },
    {
        question: "What does a feedback questionnaire table for parents typically measure?",
        options: [
            "Parental opinions regarding access to digital gadgets, cognitive impacts, and social development",
            "Computer hardware manufacturing defect rates",
            "Network router packet transmission latencies",
            "Python programming syntax error counts"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Parent feedback tables measure opinions on gadget access, cognitive effects, and social development impacts[cite: 11]."
    }
];

console.log("TOTAL MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsComputer7",
    JSON.stringify(questions)
);

// preparation page controls
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".mcq-card h2");
const optionsContainer = document.querySelector(".options");
const feedback = document.querySelector(".feedback");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const progressCount = document.querySelector(".progress-top span:first-child");
const progressText = document.querySelector(".progress-top span:last-child");
const progressFill = document.querySelector(".progress-fill");

let currentQuestion = 0;
let selectedAnswers = [];

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

        if (index === Number(question.answer)) {
            button.classList.add("correct");
        }

        button.addEventListener("click", () => {

            document.querySelectorAll(".option").forEach(btn => {
                btn.classList.remove("wrong");
            });

            if (index === Number(question.answer)) {

                button.classList.add("correct");

                feedback.querySelector("strong").textContent =
                    "Correct!";

                feedback.querySelector("p").textContent =
                    question.explanation;

            } else {

                button.classList.add("wrong");

                feedback.querySelector("strong").textContent =
                    "Correct answer:";

                feedback.querySelector("p").textContent =
                    `${String.fromCharCode(65 + Number(question.answer))}. ${question.options[Number(question.answer)]}`;
            }

            feedback.style.display = "block";
        });

        optionsContainer.appendChild(button);
    });

    feedback.style.display = "block";

    feedback.querySelector("strong").textContent =
        "Correct!";

    feedback.querySelector("p").textContent =
        question.explanation;

    progressCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percentage =
        Math.round(((currentQuestion + 1) / questions.length) * 100);

    progressText.textContent =
        `${percentage}% Complete`;

    progressFill.style.width =
        `${percentage}%`;

    previousButton.disabled =
        currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Finish";
    } else {
        nextButton.textContent = "Next →";
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        questionText.textContent = "Preparation Complete!";
        questionNumber.textContent = "COMPLETED";

        optionsContainer.innerHTML = "";

        feedback.style.display = "block";

        feedback.querySelector("strong").textContent =
            "Well Done!";

        feedback.querySelector("p").textContent =
            `You completed all ${questions.length} questions.`;

        nextButton.style.display = "none";
        previousButton.style.display = "none";
    }
});

previousButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

loadQuestion();