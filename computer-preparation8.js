const questions = [
    {
        question: "What is a product typically defined as?",
        options: [
            "A physical item that can be seen, touched, or held",
            "An invisible cloud database storage file",
            "A pure software debugging error log",
            "A handwritten operating system code line"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Products are typically physical items that can be seen, touched, or held, ranging from everyday goods to consumer electronics."
    },
    {
        question: "What is the primary characteristic of services compared to products?",
        options: [
            "They are intangible and involve specific actions or tasks performed",
            "They must always be heavy metallic machinery",
            "They cannot be delivered to customers digitally",
            "They are always stored in wooden boxes"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Services are intangible and often involve a specific action or task performed by individuals or organizations."
    },
    {
        question: "What is a prototype in the context of product development?",
        options: [
            "A preliminary tangible or digital model created to visualize and test a concept",
            "The final mass-produced commercial item in stores",
            "A legal copyright agreement document",
            "An employee monthly salary sheet"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A prototype is a tangible or digital representation of a product created during the design phase to test before full-scale production."
    },
    {
        question: "Which prototyping tool is best suited for early-stage low-fidelity concept validation?",
        options: [
            "Sketchbooks, paper, pencils, and sticky notes",
            "Industrial laser cutting machines",
            "Commercial heavy manufacturing assembly belts",
            "High-voltage electrical wiring tools"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Sketchbooks and paper are essential for low-fidelity prototyping, being quick and inexpensive for early-stage ideation."
    },
    {
        question: "What does MVP stand for in product development?",
        options: [
            "Minimum Viable Product",
            "Maximum Valuable Program",
            "Manual Validation Protocol",
            "Main Visual Platform"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "MVP stands for Minimum Viable Product, representing the most basic version of a product with essential core features."
    },
    {
        question: "What are sketches and wireframes classified as?",
        options: [
            "Low-Fidelity Prototypes",
            "High-Fidelity Working Models",
            "Final Mass Production Units",
            "Raw Material Inventories"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Sketches and wireframes are simple, low-fidelity representations focusing on basic layout and structure."
    },
    {
        question: "What is the main purpose of paper prototypes?",
        options: [
            "To create physical interactive models for gathering initial user feedback",
            "To permanently package final goods for shipping",
            "To execute complex computer operating system kernels",
            "To store permanent cloud database backups"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Paper prototypes involve physical interactive models using paper or cardboard suitable for user testing and initial feedback."
    },
    {
        question: "Which software tools are commonly used for digital prototyping?",
        options: [
            "Adobe XD, Sketch, Figma, or InVision",
            "Microsoft Notepad and MS Paint only",
            "WinRAR and file compression tools",
            "Disk partition formatting utilities"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Design software like Adobe XD, Sketch, Figma, or InVision are used to create interactive digital prototypes."
    },
    {
        question: "What are Alpha prototypes typically used for?",
        options: [
            "Internal testing and refinement as advanced functional versions",
            "Direct selling to everyday retail customers in markets",
            "Permanent archiving in government libraries",
            "Displaying artwork in public museums"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Alpha prototypes are advanced, functional versions of a product used primarily for internal testing and refinement."
    },
    {
        question: "What are Beta prototypes used for?",
        options: [
            "Near-final versions made available to a select group of users or testers",
            "Initial hand-drawn paper sketches on notebooks",
            "Raw chemical processing in factories",
            "Discarded waste material during production"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Beta prototypes are near-final versions made available to select users to identify remaining issues or bugs before release."
    },
    {
        question: "Why is successful product development considered crucial for a business?",
        options: [
            "It drives business sustainability, competitive advantage, and growth",
            "It completely eliminates the need for customer service",
            "It stops all forms of company innovation permanently",
            "It reduces product prices to absolute zero"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Successful product development sets a company apart, generates revenue, and ensures long-term business sustainability."
    },
    {
        question: "How does prototyping contribute to risk reduction during development?",
        options: [
            "By identifying design flaws and technical issues before full-scale production",
            "By insuring the factory building against natural disasters",
            "By hiring external security guards for office protection",
            "By backing up computer hard drives onto magnetic tapes"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Prototyping lets developers catch and address design and usability flaws early, preventing costly mistakes in full production."
    },
    {
        question: "What is the core objective of conducting user testing on prototypes?",
        options: [
            "To ensure the product aligns with target audience needs and preferences",
            "To test the physical strength of office furniture",
            "To calculate employee monthly income tax deductions",
            "To check the internet speed connection of the office router"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "User testing ensures a user-centric approach, confirming that the product solves real user problems and meets expectations."
    },
    {
        question: "What does an iterative design process involve?",
        options: [
            "Creating, testing, analyzing feedback, and refining designs multiple times",
            "Building a product once and never changing it again",
            "Copying competitor products without any modifications",
            "Translating source code into different foreign languages"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Iterative design is a continuous cycle of creating, testing, analyzing data, and improving designs based on feedback."
    },
    {
        question: "What is a Proof-of-Concept prototype designed to demonstrate?",
        options: [
            "Core functionality and technical feasibility of a product",
            "The colorful exterior packaging and marketing labels",
            "The shipping weight limit for cargo trucks",
            "The brand logo trademark registration paperwork"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Proof-of-concept prototypes demonstrate core functionality and technical feasibility, even if they lack full aesthetic design."
    },
    {
        question: "Which materials are ideal for building low-cost physical mockups?",
        options: [
            "Cardboard, foamboard, and clay",
            "Solid titanium blocks and pure gold sheets",
            "Reinforced concrete and structural steel beams",
            "Tempered bulletproof window glass"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Cardboard and foamboard are excellent for building low-cost, low-fidelity physical prototypes quickly."
    },
    {
        question: "What is the benefit of collecting both quantitative and qualitative data during testing?",
        options: [
            "It provides a balanced view of numerical metrics and user observations",
            "It doubles the electricity consumption of computers",
            "It makes the software run twice as fast on processors",
            "It eliminates all requirements for customer support"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Quantitative data gives metrics like task times, while qualitative data gives user comments, providing deep insights."
    },
    {
        question: "Why should feature prioritization be applied when developing an MVP?",
        options: [
            "To focus exclusively on essential core features needed to solve primary problems",
            "To include every possible complex feature right from day one",
            "To make the software application file size as large as possible",
            "To delay the product launch date indefinitely"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Feature prioritization keeps the MVP lean and focused on solving the core problem without unnecessary feature creep."
    },
    {
        question: "What role do 3D printers play in prototyping?",
        options: [
            "They transform digital 3D models into tangible physical objects",
            "They print paper documents and financial invoices",
            "They scan physical text into digital word processors",
            "They assemble microchips onto circuit boards automatically"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "3D printers transform digital designs made in software into tangible physical objects for testing."
    },
    {
        question: "What is 'Wizard of Oz' prototyping?",
        options: [
            "A method where product functionality is artificially faked or manually simulated behind the scenes",
            "A cartoon animation software tool for entertainment movies",
            "A computer virus scanning protocol for networks",
            "An automated robotic assembly line in factories"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Wizard of Oz prototyping involves faking complex backend features manually to test user reactions before coding them."
    },
    {
        question: "What is educational technology classified as in business sectors?",
        options: [
            "A service offering",
            "A heavy manufacturing raw material",
            "A tangible grocery item",
            "An agricultural farming tool"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Educational technology is categorized under services that provide learning tasks and digital instruction systems."
    },
    {
        question: "How does prototyping lead to cost savings?",
        options: [
            "By catching and fixing design flaws early before expensive manufacturing begins",
            "By reducing employee salaries across the company",
            "By stopping all marketing and advertising budgets",
            "By using lower-quality plastic for final products"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "It is much cheaper to fix problems during the prototyping phase than after full-scale manufacturing has started."
    },
    {
        question: "What is the purpose of documenting changes during iterative design?",
        options: [
            "To maintain a clear record of the design evolution and decisions made",
            "To submit legal tax returns to government departments",
            "To publish weekly fiction novels for customers",
            "To clear up computer hard disk storage space"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Documentation of iterations provides a helpful reference tracking why and how design changes evolved."
    },
    {
        question: "What makes high-fidelity digital prototypes valuable for stakeholders?",
        options: [
            "They closely resemble the user interface and functionality of the final product",
            "They cost zero money to manufacture in factories",
            "They replace the need for any human user testing",
            "They can be printed on standard office paper printers"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "High-fidelity prototypes provide a realistic preview of capabilities, securing investor confidence and clear stakeholder approval."
    },
    {
        question: "What is market expansion in product development?",
        options: [
            "Exploring new markets and demographics with new products or services",
            "Increasing the physical physical size of office buildings",
            "Expanding the width of computer monitor screens",
            "Increasing internet broadband download speeds"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Market expansion allows a company to diversify by introducing offerings to new customer demographics and regions."
    },
    {
        question: "Which tool is commonly used for building electronics and hardware prototypes?",
        options: [
            "Arduino kits",
            "Adobe Photoshop brushes",
            "Microsoft Excel spreadsheets",
            "Text editor code formatters"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Arduino kits combine components and tools widely used for building electronics and microcontroller prototypes."
    },
    {
        question: "What does 'feature creep' refer to in product development?",
        options: [
            "The uncontrolled addition of extra features that can delay a project",
            "The gradual slow movement of computer mouse cursors",
            "The fading of colors on printed paper wireframes",
            "The reduction of software loading speeds over time"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Feature creep occurs when unessential features keep getting added, bloating the product and delaying its launch."
    },
    {
        question: "Why is user onboarding important in an MVP?",
        options: [
            "It guides early users smoothly on how to use the product effectively",
            "It automatically registers company copyright trademarks",
            "It designs the physical shipping boxes for delivery",
            "It prints out physical instruction manuals on paper"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Good user onboarding helps early users understand and navigate the MVP easily, ensuring a smooth experience."
    },
    {
        question: "What is the primary function of 3D modeling software like Blender or Fusion 360?",
        options: [
            "To create digital 3D models of physical products",
            "To write HTML and CSS code for web browsers",
            "To edit audio sound effects and music tracks",
            "To manage company financial payroll records"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Tools like Autodesk Fusion 360 or Blender are used for creating digital 3D models of physical product designs."
    },
    {
        question: "What is a key benefit of rapid agile development when building an MVP?",
        options: [
            "Flexibility to build quickly and respond to changing feedback",
            "Guaranteeing that no bugs will ever exist in code",
            "Eliminating the need for any user testing sessions",
            "Allowing developers to take permanent vacations"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Agile methods enable rapid building and high flexibility to adapt based on continuous user feedback."
    },
    {
        question: "Which of the following is an example of an intangible service?",
        options: [
            "Healthcare consulting and entertainment streaming",
            "A steel hammer and screwdriver set",
            "A leather jacket and cotton shirt",
            "A smartphone device and battery charger"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Healthcare consulting and streaming are intangible services involving specific tasks rather than physical objects."
    },
    {
        question: "What does 'ergonomics' refer to when testing physical prototypes?",
        options: [
            "How comfortably and efficiently a product can be used by people",
            "The electrical voltage capacity of internal computer chips",
            "The economic market price tag of retail goods",
            "The digital security encryption strength of software"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Ergonomics focuses on comfort, usability, and how well physical products fit human interaction."
    },
    {
        question: "Why are sketches and diagrams useful during early ideation?",
        options: [
            "They allow quick visual exploration of concepts without heavy investment",
            "They serve as final blueprints for mass factory assembly",
            "They automatically convert into functional smartphone apps",
            "They replace all forms of written project documentation"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Sketches provide quick, inexpensive ways to explore ideas and layouts before committing resources."
    },
    {
        question: "What does continuous improvement mean in prototype testing cycles?",
        options: [
            "Ongoing testing and refinement until the product achieves high user satisfaction",
            "Stopping all testing once the first prototype is built",
            "Changing the company name after every single test",
            "Deleting all previous user feedback records"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Continuous improvement is an ongoing cycle of testing and refining to maintain exceptional user experience."
    },
    {
        question: "What is a storyboard used for in prototyping methods?",
        options: [
            "Visualizing a user's journey or scenario step-by-step through sequential panels",
            "Storing digital database files on cloud servers",
            "Writing complex programming scripts for operating systems",
            "Calculating financial profit margins and tax splits"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Storyboards use sequential comic-like panels to illustrate how a user interacts with a product in real life."
    },
    {
        question: "How do high-fidelity prototypes help secure investor confidence?",
        options: [
            "By offering a realistic, interactive preview of the final product's potential",
            "By guaranteeing 100% financial profits in the stock market",
            "By eliminating all risks of business startup failure",
            "By providing legal ownership contracts for company shares"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "High-fidelity prototypes showcase realistic capabilities and user interface design, convincing investors of product viability."
    },
    {
        question: "What is the significance of prioritizing identified issues after user testing?",
        options: [
            "To focus resources on fixing critical problems that severely impact user experience first",
            "To ignore all user feedback and continue random changes",
            "To delete minor issues from memory without fixing them",
            "To delay product release until every single bug is forgotten"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Prioritization ensures that severe usability issues are addressed before minor cosmetic adjustments."
    },
    {
        question: "What distinguishes a working prototype from a low-fidelity paper model?",
        options: [
            "A working prototype includes advanced functional components and near-final features",
            "A working prototype is made exclusively of folded paper sheets",
            "A working prototype requires no testing or user feedback",
            "A working prototype cannot be shown to stakeholders"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Working prototypes (like alpha/beta versions) have advanced functionality, unlike basic paper models."
    },
    {
        question: "What is the purpose of role-playing in prototyping methods?",
        options: [
            "To simulate user interactions and scenarios physically to understand user pain points",
            "To act in Hollywood motion picture movies",
            "To test computer processor speed under heavy gaming loads",
            "To train employees in corporate accounting practices"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Role-playing lets team members act out scenarios to empathize with users and test service interactions."
    },
    {
        question: "Why is scalability important even when designing a minimal MVP?",
        options: [
            "To ensure the underlying architecture can support future feature enhancements and growth",
            "To make the software file size as heavy as possible",
            "To prevent any future users from downloading the app",
            "To lock the system code so it can never be updated"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Designing for scalability ensures the MVP can handle future user growth and feature additions without a complete rebuild."
    },
    {
        question: "What is enterprise business technology categorized as?",
        options: [
            "A service or software solution for corporate operations",
            "A physical metal hand tool used in construction",
            "A raw agricultural crop harvested on farms",
            "A printed textbook used in schools"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Enterprise business technology is a service offering designed to support business workflows and operations."
    },
    {
        question: "How do low-fidelity prototypes assist in stakeholder communication?",
        options: [
            "They make abstract ideas concrete so everyone can visualize the core vision",
            "They provide legally binding financial guarantees",
            "They replace official company business contracts",
            "They calculate exact monthly manufacturing expenses"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Prototypes turn abstract concepts into tangible models, helping stakeholders easily understand the project vision."
    },
    {
        question: "What is the primary risk of skipping user testing in product development?",
        options: [
            "Releasing a product that fails to meet user needs, leading to market failure",
            "Getting fined by government tax authorities",
            "Experiencing computer hardware power outages",
            "Losing internet Wi-Fi router connectivity"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Without user testing, developers risk building products based on unverified assumptions that customers may reject."
    },
    {
        question: "What does Lego prototyping involve?",
        options: [
            "Using interlocking plastic bricks to quickly build physical 3D structural models",
            "Writing complex JavaScript code for web applications",
            "Designing computer animation graphics for video games",
            "Assembling electronic circuit boards with soldering irons"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Lego prototyping uses interlocking plastic blocks to rapidly construct physical models and layout ideas."
    },
    {
        question: "What is the main objective of analyzing data gathered from usability tests?",
        options: [
            "To identify patterns, common pain points, and areas requiring improvement",
            "To increase the computer screen brightness levels",
            "To format hard disk partitions and delete files",
            "To test printer ink cartridge levels"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Data analysis uncovers usability trends and user struggles, guiding informed design revisions."
    },
    {
        question: "What does innovation and adaptation in product development achieve?",
        options: [
            "It keeps a company at the forefront of its industry amidst changing market dynamics",
            "It freezes company operations permanently",
            "It forces competitors out of business overnight",
            "It removes all technological devices from offices"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Product development encourages innovation, allowing businesses to stay ahead and adapt to market changes."
    },
    {
        question: "What are 3D scanners used for in product prototyping?",
        options: [
            "Scanning existing physical objects to convert them into digital 3D models",
            "Scanning printed paper documents into PDF files",
            "Scanning product barcodes at supermarket checkout counters",
            "Scanning computer networks for virus malware infections"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "3D scanners capture physical objects and convert them into digital models for digital modification or replication."
    },
    {
        question: "Why is a user-centric approach crucial in product design?",
        options: [
            "It ensures the product solves real user problems and delivers high satisfaction",
            "It focuses solely on what the software developers personally like",
            "It reduces manufacturing speed to the slowest possible rate",
            "It eliminates the need for any product testing"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "A user-centric approach centers design decisions around real user needs, boosting satisfaction and success."
    },
    {
        question: "What is the role of HTML, CSS, and JavaScript in high-fidelity prototyping?",
        options: [
            "Developers use them to code functional, interactive web and app prototypes",
            "They are used to mold physical clay sculptures",
            "They serve as raw materials for 3D printers",
            "They calculate business financial profit margins"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Web and app developers use coding languages like HTML, CSS, and JS to build interactive high-fidelity digital prototypes."
    },
    {
        question: "What happens during the re-testing phase after making iterative changes?",
        options: [
            "The updated prototype is tested again to ensure issues were successfully resolved",
            "The product is immediately sent to retail stores for global selling",
            "All previous design documentation is permanently deleted",
            "The development team stops working permanently"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Re-testing validates whether the changes made actually fixed the identified issues and improved usability."
    },
    {
        question: "What is revenue generation in the context of successful product development?",
        options: [
            "Opening new revenue streams by introducing new products to expand customer base",
            "Paying monthly electricity and internet utility bills",
            "Donating company funds to charitable organizations",
            "Printing paper currency notes in office printers"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "New products open up fresh revenue streams, expanding customer bases and increasing overall profits."
    },
    {
        question: "What is the primary characteristic of low-fidelity digital wireframes?",
        options: [
            "Simplified representations with minimal details, placeholder text, and generic icons",
            "Fully colored 3D cinematic animations with realistic rendering",
            "Hard-coded database systems with live user transactions",
            "Mass-produced physical plastic units ready for shipping"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Low-fidelity digital wireframes use simplified mockups with placeholder text to test overall layout and user flow."
    },
    {
        question: "Why should aesthetic design be kept secondary when building low-fidelity physical prototypes?",
        options: [
            "Because the focus should be on basic form, size, and core functionality",
            "Because colors and polish are the only things that matter",
            "Because cardboards cannot hold any colors or paint",
            "Because customers hate looking at physical models"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Low-fidelity prototypes prioritize basic form, ergonomics, and testing functionality over visual aesthetics."
    },
    {
        question: "What is customer satisfaction directly linked to in product innovation?",
        options: [
            "Addressing specific consumer needs and wants effectively through products and services",
            "Setting prices as high as possible for all items",
            "Limiting customer support to once a year",
            "Avoiding all feedback from target audiences"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "When products directly address consumer needs and preferences, customer satisfaction and loyalty increase."
    },
    {
        question: "What is a user-driven prototype?",
        options: [
            "A prototype where users actively participate in creating or modifying the design elements",
            "A car driven autonomously by artificial intelligence sensors",
            "A software program that runs without any human interaction",
            "An automated robot that builds factory machinery"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "User-driven prototypes involve end-users directly shaping or building aspects of the design during testing."
    },
    {
        question: "What is the main purpose of validation during prototype testing?",
        options: [
            "Confirming whether the product concept effectively solves the identified problem",
            "Validating employee attendance sheets for payroll",
            "Checking the expiration date of office software licenses",
            "Verifying office building security guard permits"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Validation confirms whether assumptions made during design hold true and if the product solves the target problem."
    },
    {
        question: "Which prototyping method involves paper interfaces?",
        options: [
            "Simulating app screens and buttons on paper cards for manual user testing",
            "Printing digital photographs on glossy photo paper",
            "Reading electronic books on computer tablets",
            "Storing backup files on magnetic disk drives"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Paper interfaces involve drawing screen layouts on paper and manually swapping cards to simulate digital interactions."
    },
    {
        question: "What is the benefit of rapid development methodologies like Agile for MVPs?",
        options: [
            "They enable building the MVP quickly while remaining flexible to user feedback",
            "They prevent any code changes from ever taking place",
            "They require massive multi-year planning before starting",
            "They eliminate the need for any programming or design"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Agile methodologies promote rapid building, enabling quick adaptation to changing requirements and user insights."
    },
    {
        question: "What does a competitive advantage mean for a company with a well-developed product?",
        options: [
            "It sets the company apart from competitors through unique features or quality",
            "It gives the company a legal monopoly over all global trade",
            "It eliminates all competing companies from existence instantly",
            "It forces competitors to pay financial penalties"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "A well-developed product offers unique features or quality, making it the preferred choice over competitors."
    },
    {
        question: "What role do sculpture materials like clay play in prototyping?",
        options: [
            "Creating physical 3D sculptures and models of product designs",
            "Writing software code scripts for mobile applications",
            "Storing digital computer data in binary formats",
            "Conducting online surveys with human respondents"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Clay and sculpting materials are useful for creating physical 3D hand-sculpted models of product designs."
    },
    {
        question: "Why is tracking task completion rates important during usability testing?",
        options: [
            "It provides quantitative metrics on how easily users accomplish goals",
            "It measures the electrical power usage of testing laptops",
            "It calculates employee monthly office hours",
            "It determines internet broadband connection speed"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Task completion rates are quantitative metrics showing how successfully and efficiently users navigate the product."
    },
    {
        question: "What is the primary focus when defining a Minimum Viable Product (MVP)?",
        options: [
            "Including only the essential features needed to address the core problem",
            "Including every advanced feature imaginable for the final release",
            "Making the product packaging look as luxurious as possible",
            "Spending years perfecting non-essential visual details"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "An MVP focuses strictly on essential features required to solve the core problem for early users without bloat."
    },
    {
        question: "What does the term 'tangible' mean in relation to products?",
        options: [
            "Having a physical form that can be touched, seen, or held",
            "Existing only as digital computer code in the cloud",
            "Being completely invisible and intangible to human senses",
            "Relating strictly to online web consulting services"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Tangible items are physical goods that can be physically touched, seen, and handled."
    },
    {
        question: "How do feedback sessions assist designers during iterative development?",
        options: [
            "By providing direct insights into usability, functionality, and user experience",
            "By telling designers what code syntax errors exist in compilers",
            "By calculating exact corporate income tax percentages",
            "By testing the physical durability of metal machinery"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Feedback sessions give designers clear insights on usability and user experience to guide improvements."
    },
    {
        question: "What is the main purpose of usability testing?",
        options: [
            "To evaluate how intuitively users interact with the product interface and navigation",
            "To test the electrical wiring inside office walls",
            "To grade student exam performance in classrooms",
            "To format digital hard disk storage drives"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Usability testing specifically evaluates user interaction, navigation, and overall user experience."
    },
    {
        question: "Why should entrepreneurs embrace product development principles?",
        options: [
            "To establish a solid foundation for creating impactful, user-centered solutions",
            "To avoid ever interacting with customers or users",
            "To guarantee that businesses require zero starting capital",
            "To eliminate all risks of market competition permanently"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Product development principles serve as a solid foundation for building successful, user-centered business solutions."
    },
    {
        question: "What is the outcome of a complex process designed to meet consumer needs called?",
        options: [
            "A product or service",
            "A computer operating system kernel",
            "A database SQL query command",
            "A hardware motherboard circuit"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A product or service is the fundamental outcome designed to meet specific needs or wants of consumers."
    },
    {
        question: "What is the role of sticky notes in paper prototyping?",
        options: [
            "To simulate interactive elements and UI components that can be moved around",
            "To permanently glue cardboard boxes together",
            "To write long programming code scripts",
            "To clean dust off computer keyboard keys"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Sticky notes represent interactive buttons or elements in paper prototypes, allowing manual simulation of actions."
    },
    {
        question: "How does risk reduction save resources during product development?",
        options: [
            "By catching flaws early before committing heavy investments to full-scale production",
            "By stopping all product research and development permanently",
            "By firing design team members after initial sketches",
            "By reducing product advertising budgets to zero"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Catching design flaws early through prototyping prevents costly changes and wasted resources later in production."
    },
    {
        question: "What is medical device technology an example of?",
        options: [
            "Products and services combined in specialized healthcare industries",
            "An agricultural farming equipment tool",
            "An entertainment streaming media platform",
            "A paper stationery office supply item"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Medical devices represent specialized technology products and services used in healthcare."
    },
    {
        question: "What is the primary function of design software in digital prototyping?",
        options: [
            "To create interactive digital prototypes with realistic user interfaces",
            "To print physical cardboard boxes using laser cutters",
            "To assemble microchips on electronic circuit boards",
            "To manage company payroll and financial accounts"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Design software allows creators to build interactive digital prototypes with realistic UI layouts."
    },
    {
        question: "Why is documentation valuable across multiple prototyping iterations?",
        options: [
            "It tracks the design evolution and rationale behind choices for future reference",
            "It satisfies legal tax filing requirements for governments",
            "It replaces the need for actual product testing",
            "It automatically optimizes computer processor speed"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Documentation tracks how and why design decisions evolved across iterations for future development reference."
    },
    {
        question: "What does user-centered design prioritize above all else?",
        options: [
            "The needs, preferences, and expectations of the target audience",
            "The personal artistic preferences of the lead developer",
            "The cheapest possible manufacturing material costs",
            "The fastest possible computer processing speeds"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "User-centered design ensures the final product aligns with the actual needs and expectations of users."
    },
    {
        question: "What are everyday goods like smartphones and clothing examples of?",
        options: [
            "Tangible products",
            "Intangible services",
            "Software algorithms",
            "Digital cloud databases"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Smartphones and clothing are physical, tangible goods created for consumer use."
    },
    {
        question: "What is the purpose of testing a digital prototype with stakeholders?",
        options: [
            "To gather feedback on overall layout, user flow, and concept validation",
            "To test the physical weight limit of office desks",
            "To calculate employee monthly salary bonuses",
            "To inspect office building fire safety exits"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Testing digital prototypes with stakeholders helps validate user flow, layout, and overall concept direction."
    },
    {
        question: "What does the iterative design cycle conclude with before full production?",
        options: [
            "Final validation using high-fidelity prototypes to ensure expectations are met",
            "Permanently deleting all project files and source codes",
            "Stopping all communication with target users",
            "Shipping unverified prototypes directly to retail stores"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "The iterative process culminates in high-fidelity final validation to ensure readiness for production."
    },
    {
        question: "Why are low-fidelity prototypes described as quick and inexpensive?",
        options: [
            "Because they use basic materials like paper and sketches without complex coding",
            "Because they require supercomputers and advanced robotics to build",
            "Because they are manufactured in massive industrial factories",
            "Because they involve expensive patent legal fees"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Low-fidelity models use simple sketches and paper, making them fast and cheap to produce for early testing."
    },
    {
        question: "What is the core benefit of developing a Minimum Viable Product (MVP) rapidly?",
        options: [
            "It allows early market entry and quick validation of assumptions with real users",
            "It guarantees that the product will never require any updates",
            "It eliminates the need for any business planning",
            "It reduces software performance speeds deliberately"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Rapid MVP development allows startups to enter the market quickly and test core assumptions with real users."
    },
    {
        question: "What does 'fidelity' mean in the context of prototypes?",
        options: [
            "The level of detail, realism, and functionality a prototype possesses",
            "The physical weight and density of building materials",
            "The financial cost of manufacturing equipment",
            "The internet download speed of servers"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Fidelity refers to how closely a prototype resembles the form, detail, and functionality of the final product."
    },
    {
        question: "How do prototypes facilitate effective communication among team members?",
        options: [
            "By providing a concrete, visual model that aligns everyone's understanding of the vision",
            "By replacing spoken language with written memos",
            "By automating daily team meetings via software bots",
            "By encrypting all project discussions securely"
        ],
        answer: 0,
        difficulty: "Conceptual",
        explanation: "Prototypes make abstract ideas concrete, ensuring everyone on the team shares the same clear vision."
    }
];
console.log("TOTAL MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsComputer8",
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