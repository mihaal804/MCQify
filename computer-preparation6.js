const questions = [
    {
        question: "What is 'information' defined as in the context of computers?",
        options: [
            "Data meaningfully organized, processed, or formatted to communicate knowledge or insights",
            "Raw, unformatted binary bits stored on a hard disk",
            "A physical computer hardware component",
            "An uncalculated collection of random noise"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "In the context of computers, information refers to data that has been meaningfully organized, processed, or formatted to communicate knowledge[cite: 10]."
    },
    {
        question: "Which of the following is an example of a primary source?",
        options: [
            "Letters, diaries, photographs, and raw data",
            "Encyclopedias and dictionaries",
            "Academic articles and textbooks",
            "Documentaries and news reports"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Examples of primary sources are letters, diaries, photographs, surveys, and raw data[cite: 10]."
    },
    {
        question: "What are secondary sources created for by individuals or organizations?",
        options: [
            "To analyze, interpret, or summarize primary sources",
            "To gather pristine raw undisturbed artifacts",
            "To provide quick reference handbooks",
            "To replace all primary documents permanently"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Secondary sources are created by individuals or organizations who analyze, interpret, or summarize primary sources[cite: 11]."
    },
    {
        question: "What is the primary purpose of tertiary sources?",
        options: [
            "To combine primary and secondary sources to provide a thorough overview for quick reference",
            "To collect raw undisturbed artifacts of historical events",
            "To conduct live personal interviews with human experts",
            "To generate unverified blog posts on social media"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Tertiary sources combine primary and secondary sources to provide a thorough overview for quick reference and overall knowledge[cite: 11]."
    },
    {
        question: "Information in computers is processed raw data.",
        options: [
            "True",
            "False",
            "Partially True",
            "Unrelated"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Information refers to data that has been meaningfully organized, processed, or formatted[cite: 10]."
    },
    {
        question: "What format do print sources of information typically provide?",
        options: [
            "In-depth analysis, historical context, and a tangible medium for reading and research",
            "Real-time streaming video content via social networks",
            "Instantaneous wireless Bluetooth data synchronization",
            "Automated statistical regression modeling"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Print sources of information often provide in-depth analysis, historical context, and a tangible medium for reading and research[cite: 11]."
    },
    {
        question: "What do digital sources of information require due to real-time updates?",
        options: [
            "Critical evaluation for credibility and reliability",
            "Physical printing on paper newspapers",
            "Exclusive storage on magnetic tape reels",
            "Manual soldering of circuit board wires"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Digital sources offer real-time updates but also require critical evaluation for credibility and reliability[cite: 11]."
    },
    {
        question: "Primary sources offer second-hand summaries of events.",
        options: [
            "False",
            "True",
            "Partially True",
            "Uncertain"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Primary sources are authentic, undisturbed documents offering first-hand knowledge, not second-hand summaries[cite: 10]."
    },
    {
        question: "How can human sources be accessed directly?",
        options: [
            "Through personal communication or expert consultation",
            "By downloading files from anonymous web servers",
            "Using automated machine learning algorithms",
            "By searching government `.gov` domain databases"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Information can be sourced directly from people, either through personal communication or expert consultation[cite: 11]."
    },
    {
        question: "What are electronic sources stored and accessed through?",
        options: [
            "Electronic devices such as computers, smartphones, or tablets",
            "Traditional paper printing presses and bound notebooks",
            "Manual typewriter machines and carbon paper",
            "Analog audio cassette tapes only"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Electronic sources refer to content stored and accessed in digital form through electronic devices like computers, smartphones, or tablets[cite: 11]."
    },
    {
        question: "Textbooks and encyclopedias are examples of tertiary sources.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Examples of tertiary sources are encyclopedias, dictionaries, handbooks, and textbooks[cite: 11]."
    },
    {
        question: "What is sampling bias?",
        options: [
            "When the sample used for data collection does not accurately represent the entire population",
            "When an observer records data based on their personal medicine preferences",
            "When information is printed exclusively in school textbooks",
            "When computers process numerical calculations too quickly"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Sampling bias occurs when the sample used for data collection does not accurately represent the entire population[cite: 13]."
    },
    {
        question: "What does selection bias involve?",
        options: [
            "Systematic exclusion of certain individuals or groups from the data collection process",
            "Choosing random numbers for statistical regression models",
            "Using Wi-Fi networks instead of 5G cellular data",
            "Reading peer-reviewed articles from university libraries"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Selection bias occurs when certain individuals or groups are systematically excluded from the data collection process[cite: 13]."
    },
    {
        question: "Print sources provide in-depth analysis and historical context.",
        options: [
            "True",
            "False",
            "Partially True",
            "Unrelated"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Print sources of information often provide in-depth analysis, historical context, and a tangible medium[cite: 11]."
    },
    {
        question: "What is observer bias (or experimenter bias)?",
        options: [
            "When the person observing an event or collecting data is influenced by their own beliefs or expectations",
            "When a computer algorithm sorts large volumes of numerical data automatically",
            "When government websites publish official statistical reports",
            "When students use library databases for academic research"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Observer bias happens when the person observing an event or collecting data is influenced by their own beliefs or expectations[cite: 14]."
    },
    {
        question: "What does data interpretation bias refer to?",
        options: [
            "The tendency to interpret information to align with pre-existing beliefs rather than objective analysis",
            "The physical extraction of rare earth metals for electronic devices",
            "The speed and consistency of automated computer verification",
            "The wireless connection range of Bluetooth technology"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Data interpretation bias refers to the tendency of individuals to interpret information in a way that aligns with pre-existing beliefs rather than objective analysis[cite: 14]."
    },
    {
        question: "Human sources involve getting information directly from people.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Information can be sourced directly from people, through personal communication or expert consultation[cite: 11]."
    },
    {
        question: "Which domain extensions are often associated with reliable institutional sources?",
        options: [
            ".gov, .edu, or .org",
            ".xyz, .biz, or .top",
            ".blog, .forum, or .anon",
            ".pirate, .hack, or .crack"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Websites with domain extensions like .gov, .edu, or .org often belong to government, educational, or nonprofit organizations known for accuracy[cite: 14]."
    },
    {
        question: "Why are peer-reviewed academic journals considered reliable?",
        options: [
            "They go through a rigorous review process by experts in the field",
            "They are published exclusively on social media platforms",
            "They contain unverified user-generated blog posts",
            "They are created without any editing or verification"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Peer-reviewed journals go through a rigorous review process by experts in the field, making them generally reliable[cite: 14]."
    },
    {
        question: "Electronic sources are accessed exclusively through paper books.",
        options: [
            "False",
            "True",
            "Partially True",
            "Uncertain"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Electronic sources are stored and accessed in digital form through electronic devices like computers or smartphones[cite: 11]."
    },
    {
        question: "What are library resources like JSTOR, PubMed, or Google Scholar useful for?",
        options: [
            "Finding information on academic and research topics",
            "Streaming high-definition entertainment movies",
            "Chatting instantly with friends on mobile phones",
            "Managing personal social media profiles"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "For information on academic and research topics, library resources like JSTOR, PubMed, or Google Scholar are used[cite: 15]."
    },
    {
        question: "Why should social media not be used as a primary source of information?",
        options: [
            "Information can spread quickly but may not always be accurate or fact-checked",
            "Social media networks have zero internet connectivity",
            "Social media only hosts printed books and newspapers",
            "Government regulations ban all educational posts online"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Social media can spread information quickly, but it may not always be accurate, lacking proper fact-checking[cite: 15]."
    },
    {
        question: "Safe use of information requires evaluating source credibility.",
        options: [
            "True",
            "False",
            "Unrelated",
            "Uncertain"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Evaluating the source's credibility and checking reputation and authority is a key principle of safe information use[cite: 12]."
    },
    {
        question: "What characterizes unreliable information sources?",
        options: [
            "They may spread rumors, fake news, unverified claims, or biased viewpoints",
            "They undergo rigorous peer review by academic institutions",
            "They are hosted exclusively on verified `.gov` servers",
            "They are published in peer-reviewed scientific journals"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Unreliable information can come from sources lacking fact-checking, spreading rumors, fake news, and unverified claims[cite: 15]."
    },
    {
        question: "What is a data search on a computer compared to?",
        options: [
            "A digital scavenger hunt using keywords and filters",
            "A physical manufacturing assembly line process",
            "A chemical laboratory experiment mixing elements",
            "A mechanical sewing machine stitching fabric"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Searching for data is like a digital scavenger hunt where you use keywords and filters to find information[cite: 16]."
    },
    {
        question: "Plagiarism means failing to credit the original author when using their work.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Always credit the original author when quoting or paraphrasing to avoid plagiarism[cite: 12]."
    },
    {
        question: "Which task is ideally suited for humans rather than computing devices?",
        options: [
            "Subjective judgments, handling ambiguity, and complex decision-making",
            "Performing millions of repetitive arithmetic calculations per second",
            "Sorting and filtering petabytes of raw numerical data",
            "Executing automated database verification checks"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Tasks involving subjective judgments, handling ambiguity, and complex decision-making are better suited for humans[cite: 16, 17]."
    },
    {
        question: "What is a key strength of computing devices in data processing?",
        options: [
            "Handling large volumes of data quickly with speed and consistency",
            "Formulating personal moral opinions and cultural ethics",
            "Assessing emotional sentiment through pure intuition",
            "Making subjective artistic interpretations of poetry"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Handling large volumes of data quickly with speed and consistency is a strength of computing devices[cite: 17]."
    },
    {
        question: "Data bias always improves the accuracy of computer decision-making.",
        options: [
            "False",
            "True",
            "Partially True",
            "Uncertain"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Data bias happens when there are errors or unfairness, leading to wrong or unfair results[cite: 13]."
    },
    {
        question: "What does computing refer to?",
        options: [
            "The process of using computers and computational systems to perform tasks and solve problems",
            "The physical mining of rare earth metals from the earth",
            "The manual printing of paper newspapers and textbooks",
            "The biological evolution of human communication languages"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Computing refers to the process of using computers and computational systems to perform various tasks, solve problems, and process information[cite: 18]."
    },
    {
        question: "How does the internet enhance connectivity globally?",
        options: [
            "By enabling real-time communication via the World Wide Web, email, and messaging",
            "By requiring physical delivery of handwritten letters by mail carriers",
            "By restricting data sharing to single standalone offline computers",
            "By eliminating all forms of digital networking infrastructure"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "The internet links individuals, organizations, and governments globally through networks like the World Wide Web, email, and instant messaging[cite: 18]."
    },
    {
        question: "Sampling bias happens when a sample does not represent the entire population.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Sampling bias occurs when the sample used for data collection does not accurately represent the entire population[cite: 13]."
    },
    {
        question: "What role does mobile technology play in connectivity?",
        options: [
            "Allowing people to stay in contact while away using smartphones and tablets",
            "Limiting communication strictly to wired desktop office terminals",
            "Requiring massive mainframe computers for simple text messages",
            "Preventing users from accessing the internet on wireless devices"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Smartphones and tablets allow users to stay in contact while away, acting like mini-computers in our pockets[cite: 18, 19]."
    },
    {
        question: "What did social networking websites like Facebook and Twitter revolutionize?",
        options: [
            "The way people communicate, exchange information, and forge relationships",
            "The physical extraction of rare earth minerals from mines",
            "The manufacturing of heavy industrial machinery parts",
            "The automated verification of government tax records"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Social networking websites revolutionized the way people communicate, exchange information, and forge new relationships[cite: 19]."
    },
    {
        question: "Selection bias can be either intentional or unintentional.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Selection bias occurs when certain individuals or groups are systematically excluded, intentionally or unintentionally[cite: 13]."
    },
    {
        question: "What has cloud computing made possible for individuals and organizations?",
        options: [
            "Remotely accessing and storing data, apps, and services for collaboration",
            "Printing physical hardbound books at home instantly",
            "Running heavy industrial factory assembly belts manually",
            "Eliminating the need for any internet connection entirely"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Cloud computing enables remote access and storage of data, apps, and services, fostering collaboration and real-time document sharing[cite: 19]."
    },
    {
        question: "What is a positive environmental impact of increased connectivity?",
        options: [
            "Reduced travel through remote work and online meetings leading to lower emissions",
            "Increased generation of electronic waste in landfills",
            "Higher consumption of fossil fuels by data centers",
            "Greater habitat destruction from rare earth metal mining"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Remote work and online meetings reduce travel and commuting, leading to lower carbon emissions from transportation[cite: 20]."
    },
    {
        question: "Observer bias occurs when an observer's beliefs influence their recording of data.",
        options: [
            "True",
            "False",
            "Unrelated",
            "Uncertain"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Observer bias happens when the person observing is influenced by their own beliefs or expectations[cite: 14]."
    },
    {
        question: "How does the Internet of Things (IoT) benefit resource management?",
        options: [
            "By enabling more effective use of resources like water and electricity",
            "By increasing unnecessary energy wastage in homes",
            "By stopping all automated environmental monitoring systems",
            "By accelerating the depletion of natural fossil fuels"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "IoT and connected technologies improve resource management by enabling more effective use of resources like water and electricity[cite: 20]."
    },
    {
        question: "What is a harmful environmental effect associated with electronic devices?",
        options: [
            "Increased electronic waste (e-waste) generation from improper disposal",
            "Complete elimination of carbon dioxide emissions worldwide",
            "Significant reduction in raw material extraction needs",
            "Immediate recycling of all manufactured hardware components"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "The proliferation of electronic devices leads to increased electronic waste, which can harm the environment and human health[cite: 20]."
    },
    {
        question: "Reliable information is free from bias, distortion, or manipulation.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Reliable information refers to data that can be trusted and is free from bias, distortion, or manipulation[cite: 14]."
    },
    {
        question: "What environmental concern is linked to data centers and infrastructure?",
        options: [
            "They consume significant amounts of energy depending on fossil fuels or renewables",
            "They produce zero carbon footprint under all operational conditions",
            "They operate entirely without requiring any electricity supply",
            "They rely solely on manual human physical labor"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Data centers and infrastructure consume significant amounts of energy, with varying environmental impacts based on power sources[cite: 20]."
    },
    {
        question: "What effect does connectivity have on culture according to the text?",
        options: [
            "It creates a global village where cultures connect while risking cultural homogenization",
            "It completely isolates every country from international influence",
            "It prevents people from sharing traditions across borders",
            "It forces all societies to adopt identical spoken languages"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Increased connectivity created a global village for cultural exchange, while raising concerns about cultures becoming the same[cite: 21]."
    },
    {
        question: "Websites ending in .edu belong to educational institutions.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Websites with .edu in their domain name are associated with educational institutions like universities[cite: 14, 15]."
    },
    {
        question: "What are some drawbacks of increased connectivity for individuals?",
        options: [
            "Screen and social media addiction, privacy issues, and false information",
            "Improved physical fitness and outdoor exercise habits",
            "Complete eradication of stress and digital fatigue",
            "Guaranteed immunity from online security breaches"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Drawbacks of greater connection include screen/social media addiction, privacy issues, and dissemination of false information[cite: 21]."
    },
    {
        question: "What is the primary goal of assistive technologies (AT)?",
        options: [
            "To enhance independence, functionality, and quality of life for people with disabilities",
            "To increase the processing speed of supercomputer data centers",
            "To replace human decision-making with artificial intelligence",
            "To expand 5G cellular network coverage globally"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The primary goal of assistive technologies is to enhance the independence, functionality, and quality of life for people with disabilities[cite: 22]."
    },
    {
        question: "Unreliable information always undergoes rigorous peer review.",
        options: [
            "False",
            "True",
            "Partially True",
            "Uncertain"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Unreliable information comes from sources lacking fact-checking, spreading rumors and unverified claims[cite: 15]."
    },
    {
        question: "What do screen readers do for visually impaired individuals?",
        options: [
            "Read text out loud to people who are blind",
            "Convert spoken voice commands into written computer text",
            "Provide physical mobility support like wheelchairs",
            "Modify keyboard switches for physical limitations"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Screen readers are text-reading software available for people with visual impairments that read text out loud[cite: 22]."
    },
    {
        question: "What is the function of voice recognition software in assistive technology?",
        options: [
            "Enables voice control of computers and devices for people with physical disabilities",
            "Displays magnified visual text on computer screens",
            "Helps individuals with mobility issues navigate physical terrain",
            "Automatically translates printed books into braille format"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Voice recognition software recognizes speech commands and enables voice control for people with physical disabilities[cite: 22]."
    },
    {
        question: "Search engines like Google act as tools for data searches.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "You use special tools called search engines, like Google, to find specific pieces of information online[cite: 16]."
    },
    {
        question: "What does the digital divide refer to?",
        options: [
            "The gap in access to digital technologies and the internet between different groups or communities",
            "The boundary line separating different telecommunication satellite orbits",
            "The difference in processing speed between CPUs and GPUs",
            "The technical divide between primary and secondary information sources"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The digital divide refers to the gap in access to and use of digital technologies and the internet between different groups or communities[cite: 22]."
    },
    {
        question: "What factors can contribute to the digital divide?",
        options: [
            "Income, location, age, education, and socio-economic status",
            "Typing speed, monitor screen resolution, and keyboard color",
            "Programming language preference and operating system type",
            "Choice of web browser and search engine history"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "The digital divide can be based on factors including income, location, age, education, and socio-economic status[cite: 22]."
    },
    {
        question: "Computers are best suited for repetitive calculations and large data processing.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Computing devices are best for activities requiring frequent and repetitive calculations and large data volumes[cite: 17]."
    },
    {
        question: "What does Wi-Fi technology allow for?",
        options: [
            "Wireless data transmission over short distances for fast internet access",
            "Wired fiber-optic communication across deep ocean trenches",
            "Long-range satellite broadcasting of television channels",
            "Short-range peripheral pairing without internet capability"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Wi-Fi technology allows for wireless data transmission over short distances, revolutionizing internet connectivity[cite: 22]."
    },
    {
        question: "What is Bluetooth commonly used for?",
        options: [
            "Facilitating short-range wireless communication between devices like headphones and smartphones",
            "Broadcasting global cellular phone calls across continents",
            "Connecting desktop computers to long-distance satellite networks",
            "Storing vast amounts of cloud database files remotely"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Bluetooth is a wireless technology standard facilitating short-range communication between devices like smartphones and peripherals without cables[cite: 22]."
    },
    {
        question: "Handling ambiguity and subjective judgments are ideal for humans.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Tasks that involve subjective judgment and handling ambiguity are better suited for humans[cite: 16]."
    },
    {
        question: "What have 4G and 5G cellular networks significantly improved?",
        options: [
            "Mobile communication with faster data speeds, lower latency, and increased capacity",
            "The physical battery lifespan of legacy analog telephones",
            "The manufacturing durability of paper printed textbooks",
            "The manual sorting speed of library card catalogs"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Fourth and fifth-generation cellular networks offer faster data speeds, lower latency, and increased capacity for mobile communication[cite: 22]."
    },
    {
        question: "What do modern smartphones combine?",
        options: [
            "Cellular, Wi-Fi, Bluetooth, and VoIP communication technologies",
            "Only wired telegraph lines and analog telephone dials",
            "Exclusively mechanical printing presses and typewriter keys",
            "Purely physical filing cabinets and paper notebooks"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Modern smartphones combine various communication technologies including cellular, Wi-Fi, Bluetooth, and VoIP[cite: 22]."
    },
    {
        question: "The internet has decreased global connectivity.",
        options: [
            "False",
            "True",
            "Partially True",
            "Uncertain"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The internet has made it easier for people all over the world to connect and share information, increasing connectivity[cite: 18]."
    },
    {
        question: "What is the primary role of secondary sources in research?",
        options: [
            "To provide specialized information and deeper understanding through analysis of primary sources",
            "To collect raw, undisturbed historical artifacts directly from events",
            "To serve as unverified blog posts on social media networks",
            "To provide quick dictionary definitions of computer hardware terms"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Researchers use secondary sources to get specialized information or gain a deeper understanding by analyzing primary sources[cite: 11]."
    },
    {
        question: "How does cross-checking information help ensure reliability?",
        options: [
            "By comparing data from multiple reputable sources to confirm consistency",
            "By relying solely on anonymous user-generated forum comments",
            "By trusting sensationalist news headlines without verification",
            "By downloading unverified files from social media feeds"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Comparing information from multiple reputable sources makes it more likely to be reliable[cite: 15]."
    },
    {
        question: "Cloud computing permits remote access and storage of data and apps.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Cloud computing enables individuals and organizations to remotely access and store data, apps, and services[cite: 19]."
    },
    {
        question: "Why is pattern recognition well-suited for computing devices?",
        options: [
            "Machine learning algorithms can efficiently identify anomalies and trends in large datasets",
            "Computers possess personal moral intuition and social ethics",
            "Machines can make subjective artistic judgments about human poetry",
            "Computers feel emotional empathy when analyzing user data"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Tasks involving pattern recognition, such as identifying anomalies or trends, can be efficiently handled by machine learning algorithms[cite: 18]."
    },
    {
        question: "What is an example of an electronic source?",
        options: [
            "Online databases, e-books, and digital journals",
            "Handwritten personal letters and diaries",
            "Physical stone inscriptions and clay tablets",
            "Printed library card catalogs on paper cards"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Examples of electronic sources include online databases, websites, e-books, and digital journals[cite: 11]."
    },
    {
        question: "Increased connectivity has only positive environmental impacts.",
        options: [
            "False",
            "True",
            "Partially True",
            "Uncertain"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Increased connectivity can have both positive and negative environmental impacts, such as e-waste and energy consumption[cite: 19, 20]."
    },
    {
        question: "What makes government websites (.gov) generally trustworthy?",
        options: [
            "They provide vetted, accurate, and up-to-date information on various topics",
            "They are created anonymously without any institutional oversight",
            "They exclusively publish fictional stories and entertainment blogs",
            "They sell commercial consumer electronics products"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Government websites ending in .gov provide accurate and up-to-date information as these sources are usually vetted and authoritative[cite: 15]."
    },
    {
        question: "How does remote work impact environmental sustainability?",
        options: [
            "It reduces commuting and business travel, leading to lower carbon emissions",
            "It increases daily transportation fuel consumption significantly",
            "It requires more physical office buildings to be constructed",
            "It halts all electronic communication infrastructure entirely"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Remote work and online meetings reduce the need for commuting and business travel, leading to lower carbon emissions[cite: 20]."
    },
    {
        question: "E-waste is generated by the proliferation of electronic devices.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The proliferation of electronic devices and constant connectivity can lead to increased electronic waste generation[cite: 20]."
    },
    {
        question: "What is a primary challenge associated with the digital divide in society?",
        options: [
            "It intensifies existing inequalities and limits opportunities for disadvantaged communities",
            "It ensures 100% equal distribution of digital resources globally",
            "It eliminates all forms of economic disparity overnight",
            "It guarantees universal high-speed internet access for everyone"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "The digital divide can intensify existing inequalities and limit opportunities for those on the wrong side of the divide[cite: 22]."
    },
    {
        question: "Why are mobility devices like wheelchairs classified as assistive technologies?",
        options: [
            "They help individuals with mobility issues move around independently",
            "They process large volumes of database transactions",
            "They provide wireless Bluetooth audio streaming",
            "They translate foreign human languages automatically"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Mobility devices like wheelchairs make it easier for those with mobility issues to get around on their own[cite: 22]."
    },
    {
        question: "The digital divide refers to unequal access to digital technologies and the internet.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The digital divide refers to the gap between those who have access to digital technologies and the internet and those who do not[cite: 22]."
    },
    {
        question: "What is the significance of resource extraction for connectivity infrastructure?",
        options: [
            "It requires extracting raw materials like rare metals which can cause environmental degradation",
            "It creates zero environmental impact during hardware production",
            "It relies entirely on recycled plastic materials without mining",
            "It eliminates the need for any electronic hardware manufacturing"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "The production of electronic devices and infrastructure requires extracting raw materials like rare earth metals, contributing to habitat destruction[cite: 20]."
    },
    {
        question: "How do search engines assist users in data searches?",
        options: [
            "By using keywords and filters to discover specific information among online data",
            "By physically sorting paper books in a library archive",
            "By printing physical hard copies of internet webpages",
            "By automatically writing software code programs"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "You use special tools called search engines, like Google, with keywords and filters to discover hidden information[cite: 16]."
    },
    {
        question: "Assistive technologies help individuals with disabilities perform tasks.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Assistive technologies are designed to help individuals with disabilities or functional limitations perform tasks[cite: 22]."
    },
    {
        question: "What does automated verification accomplish in computing?",
        options: [
            "Verifies data against predefined rules and performs quality checks",
            "Performs subjective personal judgments on news credibility",
            "Generates creative storytelling and poetry narratives",
            "Resolves complex social and ethical dilemmas"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Tasks like verifying data against predefined rules or performing data quality checks can be automated using computing devices[cite: 18]."
    },
    {
        question: "Screen readers are designed for people with visual impairments.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Text-reading software called screen readers are available for people who are blind or have visual impairments[cite: 22]."
    },
    {
        question: "What is a key characteristic of adaptive software and hardware equipment?",
        options: [
            "They provide modified keyboards, switches, or joysticks for users with physical limitations",
            "They increase computer processor speed for gaming applications",
            "They project holographic 3D displays in corporate offices",
            "They act as cloud database servers for remote enterprises"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Adaptive equipment includes modified keyboards, switches, or joystick controllers for those with physical limitations[cite: 22]."
    },
    {
        question: "Wi-Fi technology allows wireless data transmission over short distances.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Wi-Fi technology allows for wireless data transmission over short distances[cite: 22]."
    },
    {
        question: "Why is critical evaluation of digital information sources necessary?",
        options: [
            "Because digital sources offer real-time updates but vary in credibility and reliability",
            "Because digital files cannot be stored on hard disks",
            "Because the internet is regulated exclusively by government agencies",
            "Because digital websites never contain any inaccurate claims"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Digital sources offer real-time updates but also require critical evaluation for credibility and reliability[cite: 11]."
    },
    {
        question: "Bluetooth is a wireless technology standard for short-range communication.",
        options: [
            "True",
            "False",
            "Uncertain",
            "None"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Bluetooth is a wireless technology standard that facilitates short-range communication between devices[cite: 22]."
    }
];
console.log("TOTAL UNIT 6 MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsComputer6",
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

function loadQuestion() {
    const question = questions[currentQuestion];

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;

    questionText.textContent = question.question;

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

        // Correct answer is already marked in Preparation
        if (index === Number(question.answer)) {
            button.classList.add("correct");
        }

        // Clicking an option only gives feedback
        button.addEventListener("click", () => {
            document.querySelectorAll(".option").forEach(btn => {
                btn.classList.remove("wrong");
            });

            if (index === Number(question.answer)) {
                button.classList.add("correct");
                feedback.querySelector("strong").textContent = "Correct!";
                feedback.querySelector("p").textContent = question.explanation;
            } else {
                button.classList.add("wrong");
                feedback.querySelector("strong").textContent = "Correct answer:";
                feedback.querySelector("p").textContent = 
                    `${String.fromCharCode(65 + Number(question.answer))}. ${question.options[Number(question.answer)]}`;
            }

            feedback.style.display = "block";
        });

        optionsContainer.appendChild(button);
    });

    // Explanation is already visible in Preparation
    feedback.style.display = "block";
    feedback.querySelector("strong").textContent = "Correct!";
    feedback.querySelector("p").textContent = question.explanation;

    progressCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percentage =
        Math.round(((currentQuestion + 1) / questions.length) * 100);

    progressText.textContent = `${percentage}% Complete`;
    progressFill.style.width = `${percentage}%`;

    previousButton.disabled = currentQuestion === 0;

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
        feedback.querySelector("strong").textContent = "Well Done!";
        feedback.querySelector("p").textContent = 
            `You completed all ${questions.length} questions for Chapter 6.`;

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