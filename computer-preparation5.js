const questions = [
    {
        question: "What is the Internet of Things (IoT)?",
        options: [
            "A system used only for storing documents",
            "A network of physical devices connected through the Internet for communication",
            "A program used only for creating presentations",
            "A computer that cannot connect to other devices"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "IoT connects physical devices, such as smart watches, sensors, appliances and security systems, so they can communicate."
    },
    {
        question: "Which of the following includes wireless technologies used to create IoT networks?",
        options: [
            "MS Word, Excel and PowerPoint",
            "HTML, CSS and JavaScript only",
            "Wi-Fi, Bluetooth, Zigbee and NFC",
            "Printers, scanners and projectors"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Wi-Fi, Bluetooth, Zigbee and Near Field Communication (NFC) are wireless technologies used for connecting IoT devices."
    },
    {
        question: "A smart greenhouse needs to measure temperature, humidity and air quality. Which type of sensors is most suitable?",
        options: [
            "Environmental sensors",
            "Only motion detection sensors",
            "Only magnetic field sensors",
            "Only proximity sensors"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Environmental sensors measure conditions such as temperature, humidity, air quality, air pressure and light."
    },
    {
        question: "A restricted laboratory needs to detect when a person enters an area without authorization. Which solution best matches this purpose?",
        options: [
            "A sensor that measures air pressure only",
            "A sensor that measures humidity only",
            "A sensor that measures fluid flow only",
            "A motion detection sensor, such as a Passive Infrared (PIR) sensor"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Motion detection sensors detect the movement of people or objects and can be used to prevent unauthorized movement in restricted areas."
    },
    {
        question: "What is a Wireless Sensor Network (WSN)?",
        options: [
            "A collection of printed documents",
            "A network of devices that communicate through wireless channels and use sensors",
            "A computer system that works only without sensors",
            "A type of wired printer connection"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A WSN consists of physical devices or objects equipped with sensors and software that communicate through wireless channels."
    },
    {
        question: "A city wants to monitor and manage the transport of electricity through its smart grid. Which IoT application can help?",
        options: [
            "A word-processing system",
            "An online image editor",
            "A Wireless Sensor Network",
            "A presentation template"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Wireless Sensor Networks can be used in smart grid electricity networks to monitor and manage electricity transport."
    },
    {
        question: "A factory needs to monitor vibration, fluid flow and magnetic fields in its manufacturing process. Which sensors are most relevant?",
        options: [
            "Industrial sensors",
            "Only light sensors",
            "Only humidity sensors",
            "Only motion detection sensors used for room security"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Industrial sensors monitor physical quantities in manufacturing, including vibration, fluid flow, pressure and magnetic fields."
    },
    {
        question: "What does cloud computing provide over the Internet?",
        options: [
            "Only physical keyboards",
            "Only offline calculations",
            "Only printed reports",
            "Services such as storage, databases, servers, networking and application software"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "Cloud computing provides computing resources and services, including storage, databases, servers, networking and software, over the Internet."
    },
    {
        question: "A small business uses servers and storage maintained by an external cloud provider instead of installing them in its own building. Which cloud model is being described?",
        options: [
            "Embedded cloud only",
            "Public cloud",
            "Motion detection network",
            "Industrial sensor network"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "In the public cloud model, a cloud service provider owns and operates resources that customers access over the Internet."
    },
    {
        question: "A hospital wants a cloud infrastructure dedicated to its own organization and wants greater control over its servers and network. Which model best fits this requirement?",
        options: [
            "Public cloud, because it is always dedicated to one organization",
            "Community cloud, because it must be shared by everyone",
            "Private cloud",
            "A public blockchain network"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "A private cloud is dedicated to a single organization and gives that organization more control over its infrastructure, although it requires substantial investment."
    },
    {
        question: "Several organizations with similar security and policy needs want to share cloud infrastructure. Which model is designed for this situation?",
        options: [
            "Community cloud",
            "Private cloud dedicated to one organization only",
            "Motion detection system",
            "Public blockchain cryptocurrency"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A community cloud serves multiple organizations that share concerns or requirements, such as security, policies, mission or compliance."
    },
    {
        question: "Which statement correctly describes a hybrid cloud?",
        options: [
            "It uses only a single personal computer",
            "It is always available only to the general public",
            "It cannot share data between cloud environments",
            "It combines public and private cloud environments"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "A hybrid cloud combines public and private clouds and allows data and applications to be shared between them."
    },
    {
        question: "A company wants public cloud resources for routine tasks but wants sensitive data and critical applications kept in a private cloud. Which model is most appropriate?",
        options: [
            "Community cloud only",
            "Hybrid cloud",
            "A Wireless Sensor Network only",
            "A motion detection system"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "A hybrid cloud allows an organization to use public cloud resources for selected tasks while keeping sensitive or critical data and applications in a private cloud."
    },
    {
        question: "What is the main purpose of Big Data Analytics?",
        options: [
            "To make all data unavailable to users",
            "To replace every sensor with a printer",
            "To analyze very large datasets to discover trends, patterns and useful insights",
            "To store information without examining it"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Big Data Analytics uses analytical software to examine extremely large amounts of data and discover trends, patterns and insights."
    },
    {
        question: "Why may traditional databases struggle with some data gathered from many IoT devices?",
        options: [
            "The volume of data may be too large for traditional databases to handle effectively",
            "IoT devices never generate digital data",
            "All IoT data consists only of handwritten notes",
            "Traditional databases can process only images"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "IoT devices and other digital resources can generate huge volumes of data that may not be handled effectively by traditional databases."
    },
    {
        question: "A retailer analyzes customer databases and transaction records to identify buying patterns and improve its services. Which technology most directly supports this task?",
        options: [
            "A motion detector alone",
            "A firmware update alone",
            "A wireless communication protocol alone",
            "Big Data Analytics"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Big Data Analytics can examine large amounts of customer and transaction data to discover market trends, patterns and insights that support better business decisions."
    },
    {
        question: "What is an IoT communication protocol?",
        options: [
            "A physical sensor that measures humidity",
            "A set of rules governing how data is transferred and understood between devices and users",
            "A private room used to store servers",
            "A database containing only printed records"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Communication protocols define rules for exchanging information and establishing communication between IoT devices, sensors and end users."
    },
    {
        question: "What is an embedded system?",
        options: [
            "A general-purpose network connecting every website",
            "A cloud service that always belongs to the public",
            "A combination of hardware and firmware designed to perform a specific task",
            "A spreadsheet used only for financial calculations"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "An embedded system combines hardware and firmware and is designed for a specific task. It commonly includes a microcontroller or microprocessor."
    },
    {
        question: "A home thermostat automatically monitors room temperature and adjusts the heating. Why is an embedded system suitable for this application?",
        options: [
            "It can control a specific function using its hardware and firmware",
            "It must be a general-purpose desktop computer",
            "It works only by printing temperature reports",
            "It cannot receive information from sensors"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Embedded systems are designed for specific tasks and can use sensor information and programmed control to operate devices such as automatic thermostats."
    },
    {
        question: "An organization collects large amounts of temperature readings from IoT sensors across several locations. It wants to identify weather patterns and support decisions. Which combination is most useful?",
        options: [
            "A word processor and a printer only",
            "A motion detector without data analysis",
            "A private cloud without any collected data",
            "IoT sensors to collect readings and Big Data Analytics to identify patterns"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "IoT sensors collect data from the environment, while Big Data Analytics can analyze large datasets to reveal patterns and support informed decisions."
    },
    {
        question: "What is the main purpose of blockchain technology?",
        options: [
            "To edit photographs",
            "To increase the brightness of a computer screen",
            "To maintain a shared digital ledger of transactions",
            "To measure temperature in a room"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Blockchain maintains a digital ledger in which records are organized into linked blocks and shared across a network."
    },
    {
        question: "Why are records in a blockchain linked together?",
        options: [
            "Each block contains a cryptographic link to the previous block",
            "Every block must contain a different computer program",
            "The blocks are connected only by physical cables",
            "Each new block automatically deletes the previous one"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Blocks are linked using cryptographic hashes, making changes to earlier records detectable."
    },
    {
        question: "A company wants several parties to verify transactions without depending entirely on one central record keeper. Which technology could support this requirement?",
        options: [
            "A spreadsheet stored on one employee's computer",
            "A standalone word processor",
            "A temperature sensor",
            "Blockchain"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "Blockchain can maintain a shared ledger across participants, allowing transactions to be verified according to the network's rules."
    },
    {
        question: "What is a major reason blockchain records can be difficult to alter unnoticed?",
        options: [
            "All records are stored as ordinary printed pages",
            "Cryptographic links and network validation help reveal unauthorized changes",
            "Blockchain does not store transaction information",
            "Every participant can freely rewrite all earlier records"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Cryptographic hashes link blocks, and network validation helps detect unauthorized changes. This does not mean that every blockchain is completely immune to attacks."
    },
    {
        question: "Which statement best describes Artificial Intelligence (AI)?",
        options: [
            "A technology used only to connect printers",
            "A method for increasing storage space without processing data",
            "A field that develops systems capable of tasks associated with human intelligence",
            "A type of wireless cable"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "AI develops systems that perform tasks such as recognizing patterns, understanding language, learning from data and supporting decisions."
    },
    {
        question: "A system examines previous examples to recognize patterns and make predictions about new data. Which AI-related approach does this describe?",
        options: [
            "Machine learning",
            "Manual file naming",
            "Physical data cabling",
            "Screen calibration"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Machine learning enables systems to learn patterns from data and use them to make predictions or decisions."
    },
    {
        question: "A bank uses an AI system to flag potentially suspicious transactions. Why should the bank still review the system's performance?",
        options: [
            "AI systems cannot process numerical data",
            "A flagged transaction is always criminal",
            "AI removes the need for security checks",
            "The system may produce false alerts or miss suspicious activity"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "AI systems can make errors, including false positives and false negatives, so their performance should be evaluated and monitored."
    },
    {
        question: "What is a stakeholder in the context of a technology system?",
        options: [
            "Only the computer's processor",
            "A person or group that affects or is affected by the system",
            "A software error that cannot be corrected",
            "A type of network cable"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Stakeholders include people or organizations that develop, use, manage, regulate or are affected by a technology system."
    },
    {
        question: "A school introduces an AI-based system to help assess student performance. Which group is most directly affected by how the system evaluates students?",
        options: [
            "Only the manufacturer of the computer screen",
            "Only people who never interact with the school",
            "Students and teachers",
            "Only the suppliers of electrical cables"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Students may be affected by assessment outcomes, while teachers use or interpret those outcomes. Both are important stakeholders."
    },
    {
        question: "An AI hiring system consistently ranks applicants from one background lower than equally qualified applicants from another background. What is the main concern?",
        options: [
            "Possible bias and unfair discrimination",
            "The system has too much screen brightness",
            "The applicants' files are necessarily too small",
            "The system is automatically fair because it uses software"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Biased training data, features or system design can lead to unfair outcomes. The system should be evaluated for bias and corrected where possible."
    },
    {
        question: "Which of the following is a possible benefit of AI systems?",
        options: [
            "They guarantee that mistakes never occur",
            "They remove the need for all human judgment",
            "They always make decisions without using data",
            "They can automate repetitive tasks and help analyze large amounts of information"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "AI can automate certain tasks and analyze large datasets, potentially improving efficiency when it is appropriately designed and used."
    },
    {
        question: "A company introduces automated machines that complete repetitive tasks more quickly. What is one possible impact on its workers?",
        options: [
            "Every worker will necessarily lose employment",
            "Some job tasks may change, creating a need for new skills or training",
            "Workers will no longer need to learn anything",
            "Automation cannot affect workplace responsibilities"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Automation can change job responsibilities and the skills required. Its effects vary by occupation, organization and how the technology is introduced."
    },
    {
        question: "A healthcare organization uses AI to assist with identifying possible diseases from medical data. Which approach is most responsible?",
        options: [
            "Accept every prediction without checking it",
            "Hide the system's limitations from medical staff",
            "Use AI as decision support with suitable validation and professional oversight",
            "Allow the system to use inaccurate data without review"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "AI may assist healthcare professionals, but results require appropriate validation, attention to limitations and qualified human oversight."
    },
    {
        question: "Why is data privacy important when organizations use AI systems?",
        options: [
            "AI may process personal or sensitive information that must be handled responsibly",
            "Privacy matters only when data is printed",
            "AI systems never use information about people",
            "Privacy guarantees that every prediction is accurate"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "AI systems may use personal data, so organizations should protect it and follow applicable privacy rules and responsible data practices."
    },
    {
        question: "A blockchain application records a transaction permanently, but the information entered at the beginning is false. What is the most accurate conclusion?",
        options: [
            "The blockchain automatically discovers the truth",
            "Every participant must already know the real-world facts",
            "A permanent record makes false information correct",
            "The record may remain traceable even though the original information was incorrect"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Blockchain can help preserve and trace records, but it cannot automatically guarantee that information entered into it was truthful or accurate."
    },
    {
        question: "A business uses IoT sensors to collect equipment data and AI to predict possible failures. What is the main advantage of combining these technologies?",
        options: [
            "The sensors no longer need to collect data",
            "Sensor data can help the AI system identify patterns associated with equipment problems",
            "The combination guarantees that equipment can never fail",
            "AI automatically repairs every physical fault"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "IoT sensors can provide operational data, while AI can analyze that data to identify patterns and support predictive maintenance."
    },
    {
        question: "An organization wants to evaluate the impact of a new technology before adopting it. Which approach is most useful?",
        options: [
            "Consider only the purchase price",
            "Ask only the technology supplier and ignore everyone else",
            "Assess benefits, risks, costs, affected stakeholders and possible long-term effects",
            "Assume that newer technology is always better"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "A balanced assessment considers technical and financial factors along with effects on users, workers, privacy, safety and other stakeholders."
    },
    {
        question: "Why should people understand the limitations of AI-generated recommendations?",
        options: [
            "Recommendations may reflect incomplete data, errors or bias and may need human judgment",
            "AI recommendations are always based on perfect information",
            "Understanding limitations prevents a system from processing data",
            "An AI recommendation is always a legally binding decision"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "AI recommendations depend on data and system design. Understanding their limitations helps people make more informed decisions."
    },
    {
        question: "A public agency plans to use blockchain to manage records. Citizens are concerned about privacy and incorrect entries. What should the agency do?",
        options: [
            "Ignore citizen concerns because blockchain solves every problem",
            "Make all personal information publicly visible",
            "Assume incorrect records cannot occur",
            "Evaluate access controls, data accuracy, privacy risks and ways to correct or supplement records"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Blockchain adoption still requires careful decisions about privacy, access, data quality and how inaccurate information is handled."
    },
    {
        question: "A company introduces AI to support decisions affecting its customers. Which practice best supports responsible use?",
        options: [
            "Avoid testing the system after launch",
            "Monitor outcomes, check for unfair effects and provide appropriate ways to question important decisions",
            "Keep all errors hidden from stakeholders",
            "Assume that automated decisions never need explanation"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Monitoring, fairness checks and appropriate review or appeal processes help organizations identify problems and remain accountable for AI-supported decisions."
    },
    {
        question: "A smart irrigation system uses soil-moisture sensors to decide when crops need water. What is the main benefit of this system?",
        options: [
            "It removes the need for soil",
            "It helps reduce unnecessary water use",
            "It prevents all plant diseases",
            "It works without collecting data"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Soil-moisture data helps the system supply water when it is actually needed."
    },
    {
        question: "In an IoT system, what is the primary role of a sensor?",
        options: [
            "To collect information about physical conditions",
            "To guarantee that a network is secure",
            "To store every record permanently",
            "To replace all communication devices"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Sensors measure conditions such as temperature, movement, pressure, or moisture."
    },
    {
        question: "Why might a wireless sensor network be useful for monitoring a large agricultural field?",
        options: [
            "It makes every sensor independent of power",
            "It eliminates the need to measure conditions",
            "It allows sensor nodes to collect and communicate field data",
            "It guarantees that no data will be lost"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A wireless sensor network allows multiple sensor nodes to gather and communicate information from different locations."
    },
    {
        question: "Which option best describes cloud computing?",
        options: [
            "Using only paper records to store information",
            "Accessing computing resources and services over a network",
            "Connecting devices without any software",
            "Processing information only inside a sensor"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Cloud computing provides access to computing resources and services through a network, commonly the internet."
    },
    {
        question: "What is one important use of Big Data Analytics?",
        options: [
            "To remove the need for data",
            "To make every decision automatically correct",
            "To prevent all changes in a system",
            "To identify patterns and useful insights in large datasets"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "Big Data Analytics helps examine large amounts of data to discover patterns and support decisions."
    },
    {
        question: "Which statement best describes an AI system?",
        options: [
            "A system designed to perform tasks that normally require human-like intelligence",
            "A device that can only measure temperature",
            "A network that only connects cables",
            "A storage device that cannot process information"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "AI systems are designed for tasks such as recognizing patterns, making predictions, or supporting decisions."
    },
    {
        question: "A factory installs sensors on machines and analyzes their readings to identify signs of failure. What is the main purpose?",
        options: [
            "To make the machines stop collecting information",
            "To eliminate all maintenance work permanently",
            "To detect possible problems before a breakdown occurs",
            "To prevent workers from checking machine performance"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Monitoring sensor readings can reveal unusual patterns that indicate a machine may need maintenance."
    },
    {
        question: "A hospital stores patient information in a cloud service. Which concern should it consider especially carefully?",
        options: [
            "Whether the records use headings",
            "Whether patient information is protected from unauthorized access",
            "Whether every employee uses the same computer",
            "Whether the hospital stops collecting information"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Sensitive medical information requires suitable privacy and security protections, including access controls."
    },
    {
        question: "A wireless sensor network sends data from a remote area, but some nodes have limited battery power. Which design concern is most relevant?",
        options: [
            "Making every message unnecessarily long",
            "Increasing the number of repeated transmissions without reason",
            "Avoiding all measurements",
            "Managing energy use to extend the nodes' operating time"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Sensor nodes may have limited power, so efficient sensing and communication can help them operate longer."
    },
    {
        question: "A business experiences a sudden increase in demand for its online service. Which cloud-computing feature may help it respond?",
        options: [
            "Scaling computing resources according to demand",
            "Removing all network connections",
            "Limiting the service to one user",
            "Converting all digital records into paper"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Cloud resources can often be scaled up or down to match changing workload requirements."
    },
    {
        question: "Why should data quality be considered before using Big Data Analytics to make a decision?",
        options: [
            "Large datasets always contain correct information",
            "Data quality matters only when no computers are used",
            "Incorrect or incomplete data can lead to misleading conclusions",
            "Data analysis automatically fixes every error"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Analysis depends on the quality of its input; inaccurate or incomplete data can produce unreliable results."
    },
    {
        question: "A company uses AI to shortlist job applicants. What is a responsible practice?",
        options: [
            "Assume the system is fair because it is automated",
            "Check for bias and provide appropriate human oversight",
            "Hide the selection criteria from everyone",
            "Use any available data without considering its quality"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "AI-assisted hiring should be assessed for unfair bias, and human oversight can help identify problematic decisions."
    },
    {
        question: "What is a key difference between a private cloud and a public cloud?",
        options: [
            "A private cloud can never use a network",
            "A public cloud cannot provide computing services",
            "A private cloud is always free of security risks",
            "A private cloud is dedicated to a particular organization or group, while a public cloud serves customers through a provider"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "The distinction concerns who the cloud environment is intended for and how its resources are provided."
    },
    {
        question: "A blockchain record is shared among multiple participants. What is one potential advantage of this arrangement?",
        options: [
            "Participants can verify records according to the network's rules",
            "Every submitted claim is guaranteed to be true",
            "All private information becomes safe to publish",
            "No participant ever needs to follow network rules"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Shared records can improve verifiability, but blockchain does not automatically guarantee that the original information was truthful."
    },
    {
        question: "A city plans to install IoT cameras and sensors in public spaces. Which approach best considers the interests of different stakeholders?",
        options: [
            "Collect as much personal information as possible",
            "Make the system's purpose unknown to the public",
            "Assess public benefits, privacy risks, security, and community concerns",
            "Ignore feedback after the system is installed"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Responsible planning weighs potential benefits against privacy, security, and the concerns of affected people."
    },
    {
        question: "An AI model gives inaccurate results for a group that was poorly represented in its training data. What is the most appropriate response?",
        options: [
            "Continue using it without evaluation",
            "Review the data and model, test performance across groups, and improve it",
            "Assume the affected group caused the error",
            "Remove all human review permanently"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Under-representation can contribute to unequal performance, so data quality and outcomes across groups should be evaluated."
    },
    {
        question: "A company stores important operations data in a cloud service. The internet connection fails at its site. Which risk is most directly involved?",
        options: [
            "All stored information must become public",
            "The cloud automatically changes into a blockchain",
            "Sensors stop measuring every physical condition",
            "The company may temporarily be unable to access the cloud service"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Dependence on network access can affect availability when connectivity is interrupted."
    },
    {
        question: "A sensor reports that a shipment has stayed within the required temperature range. What can a blockchain-based record establish most reliably?",
        options: [
            "That the recorded information has been stored and linked according to the system's rules",
            "That the sensor could never have been faulty",
            "That the shipment's contents are certainly undamaged",
            "That the original measurement was necessarily truthful"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Blockchain can help preserve and verify records, but it cannot by itself guarantee the accuracy of data entered by a sensor."
    },
    {
        question: "A company wants to use Big Data Analytics to predict customer demand. Which approach is most likely to support a reliable decision?",
        options: [
            "Use only one random record regardless of the available data",
            "Ignore changes in customer behaviour",
            "Use relevant, sufficiently reliable data and evaluate the predictions",
            "Assume a prediction is certain because a computer produced it"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Useful predictions require relevant data and evaluation; analytical results are estimates, not guarantees."
    },
    {
        question: "A school plans to adopt AI-based learning software. Which evaluation gives the most balanced view of its impact?",
        options: [
            "Consider only the purchase price",
            "Consider learning benefits, accessibility, privacy, cost, and the need for teacher oversight",
            "Assume every student will benefit equally",
            "Ignore feedback from teachers and students"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Technology assessment should consider benefits, costs, fairness, privacy, and the people affected by its use."
    },
    {
        question: "A smart home system uses motion sensors to switch lights on when someone enters a room. Which technologies are working together in this example?",
        options: [
            "Blockchain and printing",
            "IoT devices and automated control",
            "Cloud storage only",
            "Big Data Analytics without sensors"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Motion sensors provide information, and the connected system uses it to control the lights automatically."
    },
    {
        question: "What is a major purpose of using a wireless sensor network?",
        options: [
            "To prevent all devices from exchanging information",
            "To replace every computer with a sensor",
            "To make data collection impossible",
            "To collect information from multiple locations and communicate it wirelessly"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "Wireless sensor networks use connected sensor nodes to monitor conditions and communicate collected data."
    },
    {
        question: "Which is a possible benefit of cloud computing for a small business?",
        options: [
            "Access to computing resources without purchasing every resource locally",
            "A guarantee that service interruptions can never happen",
            "Complete elimination of cybersecurity risks",
            "No need for internet access in any situation"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Cloud services can reduce the need to own and maintain all computing infrastructure locally."
    },
    {
        question: "Why is data collected by IoT devices useful?",
        options: [
            "It always gives a complete picture of every situation",
            "It removes the need for any decision-making",
            "It can help monitor conditions and support informed decisions",
            "It makes every connected device secure automatically"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "IoT data can provide information about real-world conditions that helps people or systems make decisions."
    },
    {
        question: "Which technology is primarily designed to maintain a shared, linked record of transactions?",
        options: [
            "Wireless sensor network",
            "Blockchain",
            "Cloud storage alone",
            "Temperature sensing"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Blockchain maintains linked records across a network according to its rules."
    },
    {
        question: "What is an important goal of responsible AI use?",
        options: [
            "To avoid testing AI systems",
            "To remove all human accountability",
            "To collect personal data without limits",
            "To consider fairness, privacy, safety, and accountability"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "Responsible AI considers how systems affect people and aims to reduce unfair or harmful outcomes."
    },
    {
        question: "A farm has hundreds of sensors sending readings every hour. Why might Big Data Analytics be useful?",
        options: [
            "It can help identify trends across large amounts of sensor data",
            "It guarantees that every crop will grow successfully",
            "It removes the need to check sensor accuracy",
            "It stops sensors from producing new readings"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Analytics can reveal trends and patterns that are difficult to identify by examining many readings individually."
    },
    {
        question: "A company wants to keep some cloud resources private while using a public cloud for other workloads. Which model may suit this need?",
        options: [
            "A sensor network",
            "A single isolated sensor",
            "A hybrid cloud",
            "A blockchain transaction"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "A hybrid cloud combines private-cloud resources with public-cloud services."
    },
    {
        question: "A city uses a sensor network to monitor air quality. What should officials do before making major policy decisions from its readings?",
        options: [
            "Assume all readings are correct without checking",
            "Check data quality and consider the context of the measurements",
            "Ignore readings that differ from expectations",
            "Publish all personal information collected by the system"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Checking sensor reliability and interpreting readings in context helps avoid decisions based on misleading data."
    },
    {
        question: "Which situation best demonstrates a possible limitation of IoT technology?",
        options: [
            "A sensor records a temperature",
            "A connected device sends a reading",
            "A system helps monitor equipment",
            "A network outage prevents connected devices from sending their data"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "IoT systems may depend on network connectivity, so an outage can interrupt data transmission or remote monitoring."
    },
    {
        question: "Why should an organization consider maintenance costs when adopting sensor-based technology?",
        options: [
            "Sensors never need replacement",
            "Maintenance always costs more than the equipment",
            "Devices may require repairs, updates, calibration, or battery replacement",
            "Maintenance removes every possible security risk"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The long-term cost of a system can include maintenance, repairs, updates, and replacing components."
    },
    {
        question: "An AI tool recommends different outcomes for similar applicants. What should the organization investigate?",
        options: [
            "Whether the system's data or design contributes to unfair differences",
            "Whether applicants can be prevented from asking questions",
            "Whether all human review can be permanently removed",
            "Whether the tool's results should be accepted without testing"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Different outcomes may indicate bias or other problems that need investigation and evaluation."
    },
    {
        question: "Which statement about blockchain is most accurate?",
        options: [
            "It guarantees that every input is factually correct",
            "It can help make recorded changes detectable, but incorrect input can still be recorded",
            "It eliminates the need for data security",
            "It can only be used for collecting temperature readings"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Blockchain can support record integrity, but it cannot independently verify that the original submitted information is true."
    },
    {
        question: "A company plans to introduce AI that automates some routine tasks. Which response best addresses its possible social impact?",
        options: [
            "Assume no employee will be affected",
            "Hide the change from employees until implementation is complete",
            "Stop evaluating the system after installation",
            "Assess changes to jobs and provide suitable training or transition support"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Automation can change job responsibilities, so planning for training and worker transitions helps address its impact."
    },
    {
        question: "A hospital wants to use AI to help identify possible illness from patient data. Which approach is most appropriate?",
        options: [
            "Use the AI as the only decision-maker in every case",
            "Ignore errors if the average result appears good",
            "Evaluate accuracy and bias, protect patient data, and retain appropriate clinical oversight",
            "Share all patient records publicly to improve transparency"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Healthcare AI requires careful evaluation, privacy protection, and suitable human oversight because errors can have serious consequences."
    },
    {
        question: "A company uses cloud services to store business records. Which action best reduces the risk of unauthorized access?",
        options: [
            "Use appropriate access controls and security measures",
            "Share one password with every person",
            "Disable all account protections",
            "Make every record publicly accessible"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Access controls and appropriate security practices help restrict sensitive records to authorized users."
    },
    {
        question: "An IoT sensor sends an unusually high reading to an AI monitoring system. What is the best next step before making a costly decision?",
        options: [
            "Assume the reading is correct because it is digital",
            "Check the reading and sensor reliability, then assess it with relevant data",
            "Delete every earlier measurement",
            "Assume AI can correct any faulty sensor automatically"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Faulty readings can mislead an analytical system, so checking data quality before acting is important."
    },
    {
        question: "A community is deciding whether to adopt a smart-city system. Which assessment is the most complete?",
        options: [
            "Choose the system only because it uses modern technology",
            "Compare systems only by their appearance",
            "Consider only the initial purchase cost",
            "Compare expected benefits, total costs, privacy, security, accessibility, and community needs"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "A balanced assessment considers technical, financial, ethical, and social effects on the people who will use or be affected by the system."
    },
    {
        question: "A company wants to use Big Data Analytics to improve a service, but its dataset contains duplicated and incomplete records. What is the best approach?",
        options: [
            "Ignore data quality because the dataset is large",
            "Make decisions before examining the data",
            "Clean and validate relevant data before interpreting the results",
            "Assume a larger dataset always produces a more accurate conclusion"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Data volume alone does not guarantee reliable conclusions; duplicate, incomplete, or inaccurate records can distort analysis."
    },
    {
        question: "A school introduces connected devices, cloud services, and AI-based learning tools. Which practice best supports their responsible long-term use?",
        options: [
            "Review effectiveness, protect information, address problems, and gather feedback from affected users",
            "Assume the technology will remain suitable without review",
            "Ignore accessibility and user concerns",
            "Stop checking security once the system begins working"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Ongoing review helps an organization assess benefits, identify risks, protect users, and respond to changing needs."
    }
];
console.log("TOTAL UNIT 5 MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsComputer5",
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
            `You completed all ${questions.length} questions for Chapter 5.`;

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


