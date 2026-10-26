const questions = [
    // 3.1 Computer Program
    { question: "What is a computer program?", options: ["A set of instructions for a computer", "A physical component", "A network cable", "A storage device"], answer: 0, difficulty: "Easy", explanation: "A program contains instructions that tell a computer how to perform a task." },
    { question: "Which component executes program instructions?", options: ["Monitor", "CPU", "Keyboard", "Printer"], answer: 1, difficulty: "Easy", explanation: "The CPU processes and executes program instructions." },
    { question: "What is source code?", options: ["A serial number", "A photograph", "Instructions written in a programming language", "A hardware diagram"], answer: 2, difficulty: "Easy", explanation: "Source code is the human-readable code written by a programmer." },
    { question: "Which is an example of an interactive program?", options: ["A switched-off computer", "A blank file", "A program with no output", "A program that asks the user for their name"], answer: 3, difficulty: "Easy", explanation: "An interactive program receives input or responds to user actions." },
    { question: "What is the purpose of a programming language?", options: ["To express computer instructions", "To increase screen brightness", "To manufacture a processor", "To replace memory"], answer: 0, difficulty: "Easy", explanation: "Programming languages allow developers to write instructions for computers." },
    { question: "What happens during program execution?", options: ["The program is printed", "The computer processes the instructions", "The keyboard is manufactured", "The monitor executes the code"], answer: 1, difficulty: "Normal", explanation: "During execution, the computer processes the program's instructions." },
    { question: "Why should program instructions be logically arranged?", options: ["To change the screen colour", "To make files larger", "To help the program perform its intended task", "To speed up the keyboard"], answer: 2, difficulty: "Normal", explanation: "Instruction order affects how a program behaves." },
    { question: "Which is an example of a program's output?", options: ["Typing an input", "Pressing a key only", "Opening an empty editor", "Displaying a calculated result"], answer: 3, difficulty: "Easy", explanation: "Output is information produced by a program." },

    // 3.2 Python: An Overview
    { question: "Python is primarily a:", options: ["High-level programming language", "Processor", "Network topology", "Storage medium"], answer: 0, difficulty: "Easy", explanation: "Python is a high-level programming language." },
    { question: "Which feature makes Python approachable for beginners?", options: ["It requires hardware assembly", "Its syntax is relatively readable", "It uses only binary instructions", "It cannot display output"], answer: 1, difficulty: "Easy", explanation: "Python's readable syntax helps beginners learn programming." },
    { question: "Which is a common use of Python?", options: ["Replacing a CPU physically", "Manufacturing keyboards", "Data analysis and application development", "Increasing screen size"], answer: 2, difficulty: "Easy", explanation: "Python is used for data analysis, automation and software development." },
    { question: "Which function displays output in Python?", options: ["input()", "range()", "type()", "print()"], answer: 3, difficulty: "Easy", explanation: "print() displays information." },
    { question: "Python is commonly described as a:", options: ["General-purpose programming language", "Network cable", "Physical memory chip", "Database table"], answer: 0, difficulty: "Easy", explanation: "Python can be used for many different kinds of applications." },
    { question: "Which statement correctly assigns a value in Python?", options: ["5 = age", "age = 5", "age == 5 = value", "assign age 5"], answer: 1, difficulty: "Normal", explanation: "The assignment operator assigns the right-hand value to the variable on the left." },
    { question: "What is the output of print(2 + 3)?", options: ["23", "2 + 3", "5", "An error always"], answer: 2, difficulty: "Easy", explanation: "Python evaluates the addition and prints 5." },
    { question: "Which statement about Python is correct?", options: ["It only performs calculations", "It cannot work with text", "It cannot use libraries", "It supports many application areas"], answer: 3, difficulty: "Normal", explanation: "Python supports a wide variety of programming tasks." },

    // 3.3 Python Integrated Development Environments
    { question: "What does IDE stand for?", options: ["Integrated Development Environment", "Internal Data Engine", "Internet Display Element", "Instruction Design Extension"], answer: 0, difficulty: "Easy", explanation: "IDE stands for Integrated Development Environment." },
    { question: "What is a main purpose of an IDE?", options: ["Replace computer hardware", "Provide tools to write and run code", "Print documents only", "Control room temperature"], answer: 1, difficulty: "Easy", explanation: "An IDE combines tools for writing, running and debugging programs." },
    { question: "What is a code editor used for?", options: ["Cleaning a keyboard", "Connecting network cables", "Writing and editing source code", "Changing CPU architecture"], answer: 2, difficulty: "Easy", explanation: "A code editor allows programmers to create and modify code." },
    { question: "What does the Run command generally do?", options: ["Deletes all programs", "Uninstalls Python", "Renames every variable", "Executes the program"], answer: 3, difficulty: "Easy", explanation: "The Run command starts program execution." },
    { question: "What is a Python shell useful for?", options: ["Trying commands interactively", "Replacing a monitor", "Storing printed pages", "Repairing hardware"], answer: 0, difficulty: "Normal", explanation: "The shell allows commands to be entered and evaluated immediately." },
    { question: "What is the console commonly used to show?", options: ["Only a serial number", "Program output and messages", "Only CPU temperature", "Only image files"], answer: 1, difficulty: "Normal", explanation: "The console commonly displays program output and execution messages." },
    { question: "Why is saving a source file important?", options: ["It guarantees correctness", "It increases CPU speed", "It preserves code for later use", "It prevents all errors"], answer: 2, difficulty: "Easy", explanation: "Saving preserves code so it can be reopened and edited later." },
    { question: "Which IDE tool helps inspect program execution?", options: ["Printer", "Speaker", "File browser only", "Debugger"], answer: 3, difficulty: "Normal", explanation: "A debugger helps inspect execution and variable values." },

    // 3.4 Turtle Graphics
    { question: "Which Python module provides turtle graphics?", options: ["turtle", "network", "keyboardonly", "databaseonly"], answer: 0, difficulty: "Easy", explanation: "Python's turtle module provides drawing functions." },
    { question: "What does turtle.forward(100) do?", options: ["Moves backward 100 units", "Moves forward 100 units", "Turns 100 degrees", "Draws a circle"], answer: 1, difficulty: "Easy", explanation: "forward(distance) moves the turtle forward by the specified distance." },
    { question: "What does turtle.left(90) do?", options: ["Moves forward 90 units", "Clears the drawing", "Turns left by 90 degrees", "Changes the pen colour"], answer: 2, difficulty: "Easy", explanation: "left(angle) rotates the turtle left by the given angle." },
    { question: "Which command changes the turtle's pen colour?", options: ["forward()", "left()", "done()", "pencolor()"], answer: 3, difficulty: "Normal", explanation: "pencolor() sets or retrieves the drawing pen's colour." },
    { question: "What is the purpose of turtle.penup()?", options: ["Move without drawing a line", "Draw a thicker line", "Close Python", "Erase variables"], answer: 0, difficulty: "Normal", explanation: "When the pen is up, turtle movement does not draw lines." },
    { question: "Which command draws a circle?", options: ["turtle.square()", "turtle.circle()", "turtle.round()", "turtle.loop()"], answer: 1, difficulty: "Easy", explanation: "turtle.circle() draws a circle or circular arc." },
    { question: "What does turtle.goto(x, y) do?", options: ["Prints x and y only", "Adds two numbers", "Moves the turtle to the coordinates", "Changes a variable type"], answer: 2, difficulty: "Normal", explanation: "goto() moves the turtle to the given position." },
    { question: "What happens with turtle.forward(50) followed by turtle.right(90)?", options: ["The turtle exits", "A circle is drawn automatically", "The screen resolution changes", "A line is drawn, then the turtle turns right"], answer: 3, difficulty: "Normal", explanation: "The forward command draws movement; right(90) then turns the turtle." },
    { question: "What does turtle.speed() control?", options: ["Turtle drawing speed", "Internet speed", "Number of variables", "List length"], answer: 0, difficulty: "Normal", explanation: "The speed setting controls how quickly the turtle moves and draws." },
    { question: "Which pair stops and resumes drawing during movement?", options: ["print() and input()", "penup() and pendown()", "int() and float()", "append() and remove()"], answer: 1, difficulty: "Normal", explanation: "penup() stops drawing and pendown() resumes it." },

    // 3.5 Libraries
    { question: "What is a programming library?", options: ["A room containing books", "Physical memory", "A collection of reusable code", "A monitor type"], answer: 2, difficulty: "Easy", explanation: "Libraries provide reusable functions and other code." },
    { question: "Which keyword imports a Python module?", options: ["includeonly", "using", "attach", "import"], answer: 3, difficulty: "Easy", explanation: "The import keyword makes a module available to a program." },
    { question: "Which module provides date and time functionality?", options: ["datetime", "turtleonly", "printscreen", "loopdata"], answer: 0, difficulty: "Easy", explanation: "The datetime module provides date and time classes and functions." },
    { question: "What is a benefit of using a library?", options: ["It guarantees no bugs", "It reduces the need to write common code from scratch", "It removes the need to understand code", "It replaces all Python statements"], answer: 1, difficulty: "Normal", explanation: "Reusable library code can save development time." },
    { question: "Which line imports the datetime module?", options: ["datetime = import", "include datetime()", "import datetime", "load.datetime.all"], answer: 2, difficulty: "Easy", explanation: "import datetime is valid syntax for importing the module." },
    { question: "What is the purpose of a library function?", options: ["Upgrade RAM physically", "Create a keyboard", "Prevent every syntax error", "Perform a reusable operation"], answer: 3, difficulty: "Normal", explanation: "A library function provides a reusable operation that code can call." },
    { question: "Why use a date-time library instead of calculating dates manually?", options: ["It provides existing date and time operations", "It makes dates irrelevant", "It removes variables", "It converts Python into hardware"], answer: 0, difficulty: "Normal", explanation: "Date-time libraries handle common operations and reduce manual work." },
    { question: "What does import random allow a program to access?", options: ["Only turtle commands", "Functions for generating pseudo-random values", "Only date formatting", "A physical random-number chip"], answer: 1, difficulty: "Normal", explanation: "The random module provides functions such as randint() and choice()." },

    // 3.6 Python Variables
    { question: "What is a variable in Python?", options: ["A hardware component", "A monitor", "A name referring to a value", "An error message"], answer: 2, difficulty: "Easy", explanation: "A variable name refers to a value used by a program." },
    { question: "Which is a valid Python variable name?", options: ["2score", "user-name", "class", "user_score"], answer: 3, difficulty: "Easy", explanation: "Names cannot start with a digit, contain hyphens, or use reserved keywords." },
    { question: "Python variable names are:", options: ["Case-sensitive", "Always uppercase", "Allowed to contain spaces", "Required to start with a number"], answer: 0, difficulty: "Easy", explanation: "name, Name and NAME are different identifiers in Python." },
    { question: "What is x after x = 4 followed by x = 9?", options: ["4", "9", "13", "An error always"], answer: 1, difficulty: "Easy", explanation: "The second assignment changes x to 9." },
    { question: "Which statement creates age with value 17?", options: ["17 == age", "age == 17", "age = 17", "make age 17"], answer: 2, difficulty: "Easy", explanation: "The assignment operator = assigns 17 to age." },
    { question: "What is x after x = 5; x = x + 2?", options: ["5", "2", "52", "7"], answer: 3, difficulty: "Easy", explanation: "The expression adds 2 to 5 and assigns 7 to x." },
    { question: "Which Python type represents a whole number?", options: ["int", "str", "booltext", "listonly"], answer: 0, difficulty: "Easy", explanation: "The int type represents integers." },
    { question: "Which type is suitable for 3.5?", options: ["str only", "float", "bool only", "None only"], answer: 1, difficulty: "Easy", explanation: "Python commonly represents decimal numbers using float." },
    { question: "What is a after a = 3; b = 4; a = b?", options: ["3", "7", "4", "12"], answer: 2, difficulty: "Normal", explanation: "The assignment a = b makes a refer to the value 4." },
    { question: "What does type('17') identify?", options: ["int", "float", "bool", "str"], answer: 3, difficulty: "Normal", explanation: "Quotation marks make '17' a string." },

    // 3.7 Python Input/Output
    { question: "Which function receives user input?", options: ["input()", "print()", "type()", "range()"], answer: 0, difficulty: "Easy", explanation: "input() reads text entered by the user." },
    { question: "What does print('Hello') do?", options: ["Asks for text", "Displays Hello", "Creates a loop", "Converts Hello to an integer"], answer: 1, difficulty: "Easy", explanation: "print() displays the supplied string." },
    { question: "What type does input() return by default?", options: ["int", "float", "str", "list"], answer: 2, difficulty: "Normal", explanation: "input() returns entered data as a string." },
    { question: "What is int('12')?", options: ["String '12'", "12.0", "An empty list", "Integer 12"], answer: 3, difficulty: "Easy", explanation: "int() converts a valid integer string to an integer." },
    { question: "What does print('Hi', 'there') display by default?", options: ["Hi there", "Hithere without a space", "Only Hi", "An input prompt"], answer: 0, difficulty: "Normal", explanation: "print() separates multiple arguments with a space by default." },
    { question: "What is print(7, 8, sep='-')?", options: ["78", "7-8", "7,8", "7 + 8"], answer: 1, difficulty: "Normal", explanation: "The sep parameter specifies the separator between printed arguments." },
    { question: "What is n after n = int(input()) if the user enters 6?", options: ["'6'", "6.0", "6", "None"], answer: 2, difficulty: "Easy", explanation: "int() converts the input string to integer 6." },
    { question: "What happens with int('hello')?", options: ["Returns 0", "Returns True", "Returns an integer string", "Raises ValueError"], answer: 3, difficulty: "Normal", explanation: "The text cannot be converted to an integer, so ValueError is raised." },
    { question: "What does print('A' + 'B') display?", options: ["AB", "A B always", "A+B", "Integer 3"], answer: 0, difficulty: "Easy", explanation: "The + operator concatenates strings." },
    { question: "Why use float(input())?", options: ["To turn input into a list", "To convert entered text to a floating-point number", "To draw a circle", "To define a function"], answer: 1, difficulty: "Normal", explanation: "float() converts valid numeric text to a floating-point value." },

    // 3.8 Operators in Python
    { question: "Which operator performs exponentiation?", options: ["//", "%", "**", "=="], answer: 2, difficulty: "Easy", explanation: "The ** operator raises a number to a power." },
    { question: "What is 17 // 5?", options: ["3.4", "2", "4", "3"], answer: 3, difficulty: "Easy", explanation: "Floor division gives 3 for 17 // 5." },
    { question: "What is 17 % 5?", options: ["2", "3", "5", "12"], answer: 0, difficulty: "Easy", explanation: "The modulo operator returns the remainder, which is 2." },
    { question: "Which operator checks equality?", options: ["=", "==", "!=", ":="], answer: 1, difficulty: "Easy", explanation: "== compares values; = is assignment." },
    { question: "What is the result of 3 < 8?", options: ["8", "3", "True", "False"], answer: 2, difficulty: "Easy", explanation: "Three is less than eight, so the result is True." },
    { question: "What is 4 + 3 * 2?", options: ["14", "20", "24", "10"], answer: 3, difficulty: "Normal", explanation: "Multiplication comes first: 4 + 6 = 10." },
    { question: "Which logical operator is True only when both conditions are True?", options: ["and", "or", "not", "in"], answer: 0, difficulty: "Normal", explanation: "and returns True only when both operands are true." },
    { question: "What is not True?", options: ["True", "False", "None", "1"], answer: 1, difficulty: "Easy", explanation: "not reverses a Boolean value." },
    { question: "What does 5 in [2, 5, 7] return?", options: ["5", "2", "True", "False"], answer: 2, difficulty: "Normal", explanation: "The in operator checks membership, and 5 is present." },
    { question: "What is 10 >= 10?", options: ["False", "10", "0", "True"], answer: 3, difficulty: "Easy", explanation: "Greater than or equal to is true when the values are equal." },
    { question: "What is 2 ** 3?", options: ["8", "6", "5", "9"], answer: 0, difficulty: "Easy", explanation: "2 ** 3 means 2 multiplied by itself three times." },
    { question: "Which operator checks whether values differ?", options: ["==", "!=", "=", ">="], answer: 1, difficulty: "Easy", explanation: "The != operator returns True when values are unequal." },

    // 3.9 Iteration & Loop
    { question: "What is iteration in programming?", options: ["Deleting a variable", "Converting text", "Repeating instructions", "Closing a file"], answer: 2, difficulty: "Easy", explanation: "Iteration means repeating instructions, commonly with loops." },
    { question: "Which loop is commonly used with range(5)?", options: ["if loop", "def loop", "import loop", "for loop"], answer: 3, difficulty: "Easy", explanation: "A for loop can iterate through range(5)." },
    { question: "What values are generated by range(4)?", options: ["0, 1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3, 4", "4 only"], answer: 0, difficulty: "Easy", explanation: "range(4) starts at 0 and stops before 4." },
    { question: "How many times does for i in range(3): print(i) print a number?", options: ["2", "3", "4", "0"], answer: 1, difficulty: "Easy", explanation: "range(3) produces 0, 1 and 2, so the loop runs three times." },
    { question: "What does for i in range(2): print('Hi') display?", options: ["Hi once", "Hi three times", "Nothing", "Hi twice on separate lines"], answer: 3, difficulty: "Easy", explanation: "The loop executes twice and prints Hi each time." },
    { question: "What does range(2, 6) generate?", options: ["2, 3, 4, 5", "0, 1, 2, 3, 4, 5", "6 only", "2, 3, 4, 5, 6"], answer: 0, difficulty: "Normal", explanation: "The start is included, but the stop value is excluded." },
    { question: "What does range(1, 8, 2) generate?", options: ["1 through 8", "1, 3, 5, 7", "2, 4, 6, 8", "1, 8"], answer: 1, difficulty: "Normal", explanation: "The step is 2 and the sequence stops before 8." },
    { question: "What is total after total = 0; for i in range(1, 4): total += i?", options: ["3", "4", "6", "10"], answer: 2, difficulty: "Normal", explanation: "The loop adds 1, 2 and 3, giving 6." },
    { question: "What does indentation define in a loop?", options: ["Variable type", "Screen colour", "Input value", "Which statements belong to the loop body"], answer: 3, difficulty: "Normal", explanation: "Indentation identifies the statements inside the loop body." },
    { question: "What can cause an unintended infinite loop?", options: ["A condition that never becomes false", "Using print()", "Saving a file", "Naming a variable total"], answer: 0, difficulty: "Normal", explanation: "A loop may continue indefinitely if its stopping condition is never reached." },

    // 3.10 List
    { question: "Which brackets create a Python list?", options: ["Square brackets []", "Curly braces only", "Angle brackets", "Quotation marks only"], answer: 0, difficulty: "Easy", explanation: "Lists are commonly written using square brackets." },
    { question: "What is the index of the first list element?", options: ["1", "0", "-1 only", "No index"], answer: 1, difficulty: "Easy", explanation: "Python uses zero-based indexing." },
    { question: "What is [10, 20, 30][1]?", options: ["10", "30", "20", "1"], answer: 2, difficulty: "Easy", explanation: "Index 1 refers to the second element, 20." },
    { question: "Which method adds an element to the end of a list?", options: ["insertfirstonly()", "joinall()", "length()", "append()"], answer: 3, difficulty: "Easy", explanation: "append(value) adds an item to the end of a list." },
    { question: "What is len([4, 7, 9, 2])?", options: ["4", "3", "22", "2"], answer: 0, difficulty: "Easy", explanation: "The list contains four elements." },
    { question: "What is nums after nums = [2, 4]; nums.append(6)?", options: ["[2, 4]", "[2, 4, 6]", "[6, 2, 4]", "12"], answer: 1, difficulty: "Easy", explanation: "append(6) adds 6 to the end." },
    { question: "Which statement about lists is correct?", options: ["They must contain only integers", "They cannot be changed", "They can contain values and be modified", "They cannot be indexed"], answer: 2, difficulty: "Normal", explanation: "Lists are ordered, mutable collections." },
    { question: "What is [3, 6, 9][0]?", options: ["6", "9", "0", "3"], answer: 3, difficulty: "Easy", explanation: "Index 0 refers to the first item, 3." },
    { question: "Which expression checks whether 8 is in nums?", options: ["8 in nums", "nums has 8()", "inside(nums, 8)", "nums == in 8"], answer: 0, difficulty: "Normal", explanation: "The in operator checks whether a value is present." },
    { question: "What does nums.insert(1, 99) do?", options: ["Deletes item 1", "Inserts 99 at index 1", "Adds 99 only if index 99 exists", "Sorts the list"], answer: 1, difficulty: "Normal", explanation: "insert(index, value) inserts a value at the specified index." },
    { question: "What does nums.remove(5) do if 5 is present?", options: ["Removes every number", "Removes item at index 5", "Removes the first matching value 5", "Adds another 5"], answer: 2, difficulty: "Normal", explanation: "remove(value) removes the first matching value." },
    { question: "What is max([3, 8, 2])?", options: ["2", "3", "13", "8"], answer: 3, difficulty: "Easy", explanation: "max() returns the largest element." },

// 3.11 Functions in Python

{ question: "Which keyword defines a function?", options: ["def", "func", "function", "make"], answer: 0, difficulty: "Easy", explanation: "Python uses def to define a function." },

{ question: "Why are functions useful?", options: ["They make every error impossible", "They organize reusable code", "They replace all variables", "They prevent input"], answer: 1, difficulty: "Easy", explanation: "Functions group instructions that can be called when needed." },

{ question: "How do you call a function named greet?", options: ["call greet", "def greet", "greet()", "run = greet"], answer: 2, difficulty: "Easy", explanation: "Writing greet() calls the function." },

{ question: "What is a parameter in a function definition?", options: ["A printed result", "An IDE error", "A library file", "A variable that receives an argument"], answer: 3, difficulty: "Normal", explanation: "A parameter receives a value when the function is called." },

{ question: "What does return do?", options: ["Sends a result back to the caller", "Always prints a value", "Restarts the computer", "Imports a module"], answer: 0, difficulty: "Normal", explanation: "return ends a function call and provides a result." },

{ question: "What is the output of this code?\\ndef add(a, b):\\n    return a + b\\nprint(add(2, 3))", options: ["23", "5", "add", "None"], answer: 1, difficulty: "Normal", explanation: "The function returns 2 + 3, so the output is 5." },

{ question: "What is an argument in a function call?", options: ["Only the function name", "Indentation before def", "A value passed to the function", "A syntax error"], answer: 2, difficulty: "Normal", explanation: "Arguments are values supplied when calling a function." },

{ question: "What is the output of this code?\\ndef show():\\n    print('Hi')\\nshow()", options: ["show", "Nothing", "Hi twice", "Hi"], answer: 3, difficulty: "Easy", explanation: "Calling show() executes its print statement once." },

{ question: "What does a function return by default if no return statement is used?", options: ["None", "1", "A syntax error every time", "The function name"], answer: 0, difficulty: "Normal", explanation: "A function without an explicit return value returns None." },

{ question: "Which is a valid function definition?", options: ["def greet name:", "def greet(name):", "function greet(name)", "greet def name"], answer: 1, difficulty: "Easy", explanation: "A function definition uses def, a name and parentheses." },

{ question: "What is the output of this code?\\ndef square(n):\\n    return n * n\\nprint(square(4))", options: ["8", "4", "16", "44"], answer: 2, difficulty: "Easy", explanation: "The function calculates 4 multiplied by 4, which is 16." },

{ question: "What is a benefit of dividing a program into functions?", options: ["It removes all testing", "It guarantees faster execution always", "It prevents every input error", "It can improve readability and reuse"], answer: 3, difficulty: "Normal", explanation: "Functions can make code easier to understand, maintain and reuse." },


    // 3.12 Debugging
    { question: "What is debugging?", options: ["Finding and fixing program problems", "Drawing a turtle circle only", "Adding random variables", "Installing a monitor"], answer: 0, difficulty: "Easy", explanation: "Debugging is the process of locating and correcting defects in code." },
    { question: "What is a breakpoint used for?", options: ["Deleting the program", "Pausing execution at a chosen point", "Renaming every variable", "Stopping the computer permanently"], answer: 1, difficulty: "Normal", explanation: "A breakpoint pauses execution so the programmer can inspect the program." },
    { question: "What does stepping through code mean?", options: ["Changing screen brightness", "Skipping the entire program", "Executing one statement at a time", "Deleting output"], answer: 2, difficulty: "Normal", explanation: "Stepping allows execution to be inspected statement by statement." },
    { question: "Which error occurs when Python syntax is invalid?", options: ["Normal output", "Correct return value", "Successful import", "SyntaxError"], answer: 3, difficulty: "Easy", explanation: "Invalid Python syntax causes a SyntaxError." },
    { question: "What is a logical error?", options: ["The program runs but produces an incorrect result", "The computer has no power", "A monitor is unplugged", "A file is always missing"], answer: 0, difficulty: "Easy", explanation: "A logical error allows execution but produces an unintended result." },
    { question: "Why inspect variable values while debugging?", options: ["To change the keyboard layout", "To identify where values become unexpected", "To guarantee no bugs", "To avoid reading code"], answer: 1, difficulty: "Normal", explanation: "Variable inspection can reveal where program behaviour goes wrong." },
    { question: "What is a sensible first step when a program gives an unexpected result?", options: ["Delete the whole project", "Ignore the result", "Reproduce the problem and inspect relevant code", "Change unrelated files"], answer: 2, difficulty: "Normal", explanation: "Reproducing the problem helps narrow down its cause." },
    { question: "What does a debugger's Step Over command generally do?", options: ["Closes the IDE", "Deletes the current function", "Restarts the operating system", "Runs the current line without stepping inside a called function"], answer: 3, difficulty: "Difficult", explanation: "Step Over executes the current line without entering the called function line by line." },
    { question: "Which practice helps prevent future bugs?", options: ["Testing code after changes", "Ignoring error messages", "Using unclear names everywhere", "Removing all comments regardless of need"], answer: 0, difficulty: "Normal", explanation: "Testing after changes helps detect newly introduced problems." },
    { question: "What does a debugger's locals panel show?", options: ["Printed documents", "Current local variable values", "Turtle drawings", "Automatic library installation only"], answer: 1, difficulty: "Normal", explanation: "The locals panel can show variable values in the current execution context." }
];

localStorage.setItem("mcqQuestionsComputer3", JSON.stringify(questions));

let currentQuestionIndex = 0;

const questionTitle = document.querySelector(".mcq-card h2");
const questionNumber = document.querySelector(".question-number");
const optionButtons = document.querySelectorAll(".options .option");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const feedback = document.querySelector(".feedback");
const progressText = document.querySelector(".progress-top span:first-child");
const progressPercent = document.querySelector(".progress-top span:last-child");
const progressFill = document.querySelector(".progress-fill");

function loadQuestion() {
    const q = questions[currentQuestionIndex];

    if (!q) {
        questionTitle.textContent = "No questions found.";
        return;
    }

    questionNumber.textContent =
        `QUESTION ${String(currentQuestionIndex + 1).padStart(2, "0")}`;

    questionTitle.textContent = q.question;

   optionButtons.forEach((button, index) => {
    button.textContent = `${String.fromCharCode(65 + index)}. ${q.options[index]}`;
    button.disabled = true;
    button.classList.remove("correct", "wrong");

    if (index === q.answer) {
        button.classList.add("correct");
    }

    button.onclick = null;
});

    feedback.style.display = "block";
feedback.innerHTML = `
    <strong>Correct Answer: ${String.fromCharCode(65 + q.answer)}</strong>
    <p>${q.explanation}</p>
`;

    progressText.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    const percent = Math.round(
        ((currentQuestionIndex + 1) / questions.length) * 100
    );

    progressPercent.textContent = `${percent}% Complete`;
    progressFill.style.width = `${percent}%`;

    previousButton.disabled = currentQuestionIndex === 0;
    nextButton.textContent =
        currentQuestionIndex === questions.length - 1 ? "Finish" : "Next →";
}

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestionIndex];

    optionButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === q.answer) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex !== q.answer) {
        optionButtons[selectedIndex].classList.add("wrong");
    }

    feedback.style.display = "block";
    feedback.innerHTML = `
        <strong>${selectedIndex === q.answer ? "Correct!" : "Incorrect!"}</strong>
        <p>${q.explanation}</p>
    `;
}

previousButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        questionTitle.textContent = "Preparation completed!";
        document.querySelector(".options").style.display = "none";
        feedback.style.display = "none";
        previousButton.style.display = "none";
        nextButton.style.display = "none";
    }
});

loadQuestion();
