const questions = [
    {
        question: "What is the main purpose of statistical modeling?",
        options: [
            "To decorate data tables",
            "To represent real-world situations using data and mathematical relationships",
            "To remove the need for collecting data",
            "To store files without analyzing them"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Statistical modeling uses data and mathematical relationships to represent and understand real-world situations."
    },
    {
        question: "A weather service uses past temperature and rainfall data to predict tomorrow's weather. Which technique is being used?",
        options: [
            "Data deletion",
            "Manual sorting",
            "Statistical modeling",
            "File compression"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Statistical modeling can use historical weather data to identify relationships and make predictions."
    },
    {
        question: "Why should a statistical model be evaluated using real data?",
        options: [
            "To check how well its predictions match observed results",
            "To make its calculations longer",
            "To ensure every prediction is always correct",
            "To avoid collecting further information"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Comparing predictions with real observations helps assess a model's usefulness and limitations."
    },
    {
        question: "A researcher wants to compare two methods of teaching. Which approach would best help determine whether one method produces better results?",
        options: [
            "Choose only students who prefer the first method",
            "Ask one student which method looks better",
            "Ignore the students' results",
            "Design an experiment that compares outcomes under controlled conditions"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "A carefully designed experiment helps compare teaching methods while controlling factors that could influence the results."
    },
    {
        question: "What is randomization in experimental design?",
        options: [
            "Changing results after collecting data",
            "Assigning participants or treatments by chance",
            "Selecting only the most successful results",
            "Repeating an experiment without recording outcomes"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Randomization uses chance to assign participants or treatments, helping reduce systematic bias."
    },
    {
        question: "Why is replication important in an experiment?",
        options: [
            "It guarantees that every result will be identical",
            "It removes the need for a sample",
            "It helps assess whether results are consistent across repeated trials",
            "It allows researchers to ignore unusual results"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Replication provides repeated observations, helping researchers judge the consistency and variability of results."
    },
    {
        question: "A researcher groups students by grade level before comparing two learning methods. Which experimental design technique is illustrated?",
        options: [
            "Blocking",
            "Data cleaning",
            "Visualization",
            "Secondary data collection"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Blocking groups similar participants together to account for a factor, such as grade level, that may affect outcomes."
    },
    {
        question: "A study finds that students who sleep longer often score higher on tests. What can be concluded from this relationship alone?",
        options: [
            "More sleep is the only cause of higher scores",
            "Higher scores always cause longer sleep",
            "The relationship must be false",
            "The variables are associated, but causation has not been established"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Correlation shows an association between variables, but other factors may explain the relationship. It does not alone prove causation."
    },
    {
        question: "Which statement best describes a population in statistics?",
        options: [
            "Only the people who answered a survey",
            "The entire group a study aims to understand",
            "The calculated average of a sample",
            "A graph containing the results"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A population is the complete group of people, objects, or observations relevant to a study."
    },
    {
        question: "A school has 1,000 students. A researcher randomly selects 100 students to study their study habits. What are the 100 selected students?",
        options: [
            "The population",
            "The parameter",
            "The sample",
            "The statistic"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The 100 selected students form the sample, while all 1,000 students form the population."
    },
    {
        question: "What is a parameter?",
        options: [
            "A numerical value describing a population",
            "A graph's title",
            "A randomly selected participant",
            "A method of drawing charts"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A parameter is a numerical measure describing a population, such as its true mean."
    },
    {
        question: "A researcher calculates the average height of 50 sampled students. This average is an example of:",
        options: [
            "A population",
            "A parameter in every situation",
            "A data collection method",
            "A statistic"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "A statistic is a numerical measure calculated from sample data, such as the sample mean."
    },
    {
        question: "Which is an example of primary data?",
        options: [
            "A published report written by another researcher",
            "Responses collected directly through your own survey",
            "A table copied from an old government report",
            "A previously published research article"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Primary data is collected firsthand by the researcher for the study being conducted."
    },
    {
        question: "A student uses population statistics from an already published government report. This is an example of:",
        options: [
            "Primary data",
            "An experiment conducted by the student",
            "Secondary data",
            "Random assignment"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Secondary data has already been collected or published by another source and is reused for a new purpose."
    },
    {
        question: "A researcher wants detailed explanations of people's experiences with a new service. Which method is especially suitable?",
        options: [
            "Interviews",
            "Deleting incomplete records",
            "Drawing a histogram only",
            "Sorting values alphabetically"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Interviews allow researchers to ask follow-up questions and gather detailed information about people's experiences."
    },
    {
        question: "A researcher records how customers behave in a shop without asking them questions. Which data collection method is being used?",
        options: [
            "Questionnaire",
            "Focus group",
            "Oral history",
            "Observation"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "Observation involves watching and recording actions or events as they occur."
    },
    {
        question: "A researcher asks hundreds of people the same set of written questions. Which method is most appropriate?",
        options: [
            "Blocking",
            "Survey or questionnaire",
            "Replication",
            "Statistical modeling only"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Surveys and questionnaires collect responses from many people using a structured set of questions."
    },
    {
        question: "A team invites a small group of customers to discuss their opinions about a product together. This is a:",
        options: [
            "Random sample",
            "Boxplot",
            "Focus group",
            "Parameter"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "A focus group gathers a small group of participants to discuss their opinions and experiences under a moderator's guidance."
    },
    {
        question: "A historian records a person's personal memories of events from several decades ago. Which method is being used?",
        options: [
            "Oral history",
            "Randomization",
            "Data cleaning",
            "A scatter plot"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "Oral history collects personal recollections and experiences, often through recorded interviews."
    },
    {
        question: "A researcher combines survey responses with records from a government archive. Which statement is most accurate?",
        options: [
            "Both sources must be primary data",
            "Government records can never be used in research",
            "Survey responses are always secondary data",
            "The survey may provide primary data, while existing archive records may provide secondary data"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Data classification depends on how it was originally collected and how the researcher uses it. A new survey is primary data for the researcher, while existing archive records are generally secondary data."
    },
    {
        question: "Why is data cleaning performed before analysis?",
        options: [
            "To increase the number of errors",
            "To identify and correct inaccurate, incomplete, or inconsistent data",
            "To remove every numerical value",
            "To convert all data into pictures"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Data cleaning improves data quality by identifying and handling errors, missing values, and inconsistencies."
    },
    {
        question: "A dataset records the same student's age as 16 in one row and 160 in another. What should a researcher do first?",
        options: [
            "Immediately delete the entire dataset",
            "Change every age to 16",
            "Investigate the suspicious value and verify the correct information",
            "Ignore the issue because the dataset contains many rows"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "An unusual value may be an entry error, so it should be investigated and checked against reliable information before correction."
    },
    {
        question: "A survey dataset has several blank responses. Why should the researcher examine these missing values before calculating the average?",
        options: [
            "Missing values may affect the analysis and the choice of an appropriate handling method",
            "Every blank value must automatically be counted as zero",
            "Missing values always make the average larger",
            "Blank responses prove that the entire survey is useless"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Missing values can affect calculations and may introduce bias. Their treatment depends on why values are missing and the purpose of the analysis."
    },
    {
        question: "Which of the following is a summary statistic?",
        options: [
            "The name of a spreadsheet file",
            "The colour of a chart",
            "The title of a report",
            "The mean of a set of observations"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "The mean is a summary statistic that describes the central value of numerical observations."
    },
    {
        question: "A student records the marks 4, 6, 8, 10, and 12. What is their mean?",
        options: [
            "6",
            "8",
            "10",
            "12"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "The sum is 40. Dividing by the five observations gives a mean of 8."
    },
    {
        question: "Which measure identifies the middle value when numerical data is arranged in order?",
        options: [
            "Range",
            "Mean",
            "Median",
            "Total"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The median is the middle observation in ordered data, or the average of the two middle observations when there is an even number."
    },
    {
        question: "The values are 3, 5, 5, 7, and 20. Which measure is the value that occurs most often?",
        options: [
            "Mode",
            "Range",
            "Mean",
            "Median"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "The mode is the most frequently occurring value. Here, 5 appears twice, more often than the other values."
    },
    {
        question: "A dataset contains the values 12, 18, 21, and 30. What is the range?",
        options: [
            "12",
            "18",
            "21",
            "18"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Range equals the maximum minus the minimum: 30 − 12 = 18."
    },
    {
        question: "A student's marks are 70, 72, 71, 73, and 74. Another student's marks are 40, 60, 70, 80, and 110. Both sets have the same mean. What can be inferred?",
        options: [
            "The two datasets must have identical values",
            "The second dataset has greater variation in its values",
            "The first dataset has a greater range",
            "The mean cannot be calculated for either dataset"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "The second set is spread over a wider interval. Equal means do not imply equal variability or identical distributions."
    },
    {
        question: "What is the main purpose of data visualization?",
        options: [
            "To hide patterns in a dataset",
            "To replace the need for data collection",
            "To present information visually so patterns and comparisons are easier to understand",
            "To guarantee that all conclusions are correct"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Data visualization uses graphical representations to help people interpret patterns, trends, and comparisons."
    },
    {
        question: "A company wants to compare sales totals for five different products. Which chart is generally suitable?",
        options: [
            "Bar chart",
            "Line chart showing an unrelated variable",
            "Scatter plot of random points",
            "Boxplot of product names"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A bar chart is useful for comparing quantities across categories, such as sales for different products."
    },
    {
        question: "A researcher wants to show how daily temperature changes over a month. Which visualization is generally most suitable?",
        options: [
            "Pie chart of unrelated categories",
            "A list of file names",
            "A boxplot of city names",
            "Line chart"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "A line chart can show changes in a numerical variable over time."
    },
    {
        question: "A scatter plot shows that study time tends to increase as test scores increase. What does this pattern suggest?",
        options: [
            "Every student has exactly the same score",
            "There may be a positive association between study time and test scores",
            "Study time must be the only cause of test performance",
            "The data cannot be analyzed"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "An upward pattern suggests a positive association, but a scatter plot alone does not prove that one variable causes the other."
    },
    {
        question: "Which graph is designed to show the frequency distribution of numerical data grouped into intervals?",
        options: [
            "Pie chart",
            "Flowchart",
            "Histogram",
            "Network diagram"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "A histogram groups numerical observations into intervals and displays the frequency in each interval."
    },
    {
        question: "A dataset contains one extremely high value that is much larger than the rest. Which visualization can help reveal unusual values and show the spread of the data?",
        options: [
            "Boxplot",
            "A decorative icon",
            "A title-only chart",
            "A plain paragraph without the values"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "A boxplot summarizes the distribution and can help identify potential outliers, although interpretation depends on the data and plotting convention."
    },
    {
        question: "A teacher wants to show how a class's total marks are divided among four subject categories that make up the whole. Which chart may be appropriate?",
        options: [
            "Scatter plot",
            "Line chart of unrelated dates",
            "Histogram of student names",
            "Pie chart"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "A pie chart can show how categories contribute to a whole when the categories form meaningful parts of the total."
    },
    {
        question: "A chart starts its vertical axis at 95 instead of zero, making small differences between values look very large. What is the main concern?",
        options: [
            "The chart automatically becomes more accurate",
            "The axis choice may exaggerate the visual differences",
            "The data is converted into secondary data",
            "The chart proves causation"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "A truncated axis can make modest differences appear dramatic. Axis choices should be clearly shown and appropriate to the comparison."
    },
    {
        question: "What is Pandas commonly used for in Python?",
        options: [
            "Designing computer hardware",
            "Replacing all programming languages",
            "Working with structured data, including tables and data analysis",
            "Creating physical laboratory equipment"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "Pandas is a Python library used to organize, manipulate, and analyze structured data."
    },
    {
        question: "A student wants to create a chart from numerical data in Python. Which library is commonly used for plotting?",
        options: [
            "Matplotlib",
            "A text editor alone",
            "A file compression tool",
            "A password manager"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Matplotlib is a Python visualization library that can create plots such as line charts, bar charts, and scatter plots."
    },
    {
        question: "A researcher finds that two groups have different average results, but one group has many more participants than the other. What should the researcher consider before drawing a conclusion?",
        options: [
            "Ignore the number of participants",
            "Assume the smaller group is always more accurate",
            "Choose whichever result looks better",
            "Examine sample sizes, variability, study design, and possible sources of bias"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Reliable interpretation requires considering sample sizes, variation, study design, and bias rather than comparing averages alone."
    },
    {
        question: "What is the main purpose of data exploration?",
        options: [
            "To delete all records before analysis",
            "To understand the dataset and identify patterns or unusual values",
            "To guarantee that every prediction is correct",
            "To replace data collection with guessing"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Data exploration helps researchers understand the structure, distribution, patterns, and possible problems in a dataset."
    },
    {
        question: "A researcher notices that several entries in a dataset have negative ages. What is the most appropriate first action?",
        options: [
            "Assume all negative values are correct",
            "Create a pie chart immediately",
            "Investigate the entries to determine whether they are errors or have a valid explanation",
            "Replace every age with the same number"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Unexpected values should be investigated before correction or removal because they may indicate data-entry errors or unusual circumstances."
    },
    {
        question: "Which task is an example of data cleaning?",
        options: [
            "Correcting inconsistent date formats in a dataset",
            "Adding decorative borders to a report",
            "Changing a chart title without examining the data",
            "Predicting the weather without observations"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Data cleaning includes identifying and resolving problems such as inconsistent formats, inaccurate entries, and missing values."
    },
    {
        question: "A researcher removes every record containing a missing value. What is a possible risk of this decision?",
        options: [
            "The dataset will always become more representative",
            "The mean will always remain unchanged",
            "Missing values will automatically become correct",
            "Useful information may be lost, and the remaining data may become biased"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Removing incomplete records can reduce the sample size and introduce bias if the missingness is related to the characteristics being studied."
    },
    {
        question: "Which measure is calculated by adding all values and dividing by the number of values?",
        options: [
            "Mode",
            "Mean",
            "Range",
            "Median"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The arithmetic mean is the sum of all observations divided by the number of observations."
    },
    {
        question: "Find the median of the following values: 4, 7, 9, 12, 18.",
        options: [
            "4",
            "7",
            "9",
            "12"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "The values are already ordered, and 9 is the middle value."
    },
    {
        question: "A dataset contains the values 5, 6, 7, 8, and 34. Which measure of central tendency is generally less affected by the extreme value 34?",
        options: [
            "Median",
            "Mean",
            "Sum",
            "Range"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "The median depends on the middle position of ordered values and is generally less sensitive to extreme values than the mean."
    },
    {
        question: "A researcher wants to compare the distribution of examination marks for two classes, including their medians and spread. Which visualization could be especially useful?",
        options: [
            "A paragraph containing only the class names",
            "A pie chart of unrelated categories",
            "A flowchart of the classroom layout",
            "Side-by-side boxplots"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Side-by-side boxplots make it easier to compare medians, quartiles, spread, and potential outliers across groups."
    },
    {
        question: "What does the range of a dataset measure?",
        options: [
            "The most frequent value",
            "The difference between the maximum and minimum values",
            "The middle value only",
            "The number of categories in a chart"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "The range is calculated by subtracting the minimum value from the maximum value."
    },
    {
        question: "Two classes have the same mean examination mark, but one class has a much larger standard deviation. What does this suggest?",
        options: [
            "Both classes must have identical marks",
            "The class with the larger standard deviation has a lower mean",
            "The marks in that class are more spread out around the mean",
            "Standard deviation measures only the number of students"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Standard deviation describes how dispersed values are around the mean. A larger value generally indicates greater spread."
    },
    {
        question: "Which chart is generally appropriate for comparing the number of students in different subject groups?",
        options: [
            "Bar chart",
            "Scatter plot of unrelated numerical measurements",
            "Line chart of an unordered list",
            "Boxplot of subject names"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "A bar chart compares numerical quantities across categories, such as the number of students in each subject group."
    },
    {
        question: "A line chart displays monthly electricity consumption. What is its main advantage?",
        options: [
            "It proves the cause of every change",
            "It removes all unusual values",
            "It shows only the most frequent category",
            "It helps reveal trends and changes over time"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Line charts connect values in an ordered sequence and help show increases, decreases, and trends over time."
    },
    {
        question: "A scatter plot contains points that generally rise from left to right. What does this pattern usually indicate?",
        options: [
            "A negative association",
            "A positive association",
            "No possible relationship",
            "That both variables are identical"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "An upward pattern generally indicates a positive association: higher values of one variable tend to occur with higher values of the other."
    },
    {
        question: "A histogram of students' marks has most observations in the lower intervals and a few observations in very high intervals. What should the researcher investigate?",
        options: [
            "Whether the chart has enough colours",
            "Whether every mark should be identical",
            "The shape of the distribution and the possible influence of unusually high values",
            "Whether the students' names are alphabetically sorted"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "A histogram helps reveal the shape of a distribution, including skewness and intervals containing relatively few observations."
    },
    {
        question: "What is the purpose of a data product?",
        options: [
            "To use data to provide useful information or support a task or decision",
            "To make data impossible to interpret",
            "To remove every visualization",
            "To replace evidence with personal guesses"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A data product uses data processing, analysis, or presentation to provide useful information or functionality."
    },
    {
        question: "A city uses traffic data to help drivers identify congested roads. Which statement best describes this use of data?",
        options: [
            "The data is being collected only for decoration",
            "The data must be secondary in every situation",
            "The data cannot support decisions",
            "The data is being used to provide practical information for decision-making"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Traffic data can be analyzed and presented to help people understand road conditions and make travel decisions."
    },
    {
        question: "Why should the source of a dataset be examined before drawing conclusions?",
        options: [
            "The source determines the colour of every chart",
            "The collection method, reliability, and possible bias affect how the data should be interpreted",
            "Every dataset from the Internet is automatically accurate",
            "The source eliminates the need to clean data"
        ],
        answer: 1,
        difficulty: "Difficult",
        explanation: "Understanding how data was collected and by whom helps assess its reliability, limitations, and suitability for the research question."
    },
    {
        question: "A researcher uses a sample of 50 people to estimate the average height of an entire city. What is an important limitation?",
        options: [
            "An average cannot be calculated from a sample",
            "Every sample gives the exact population average",
            "The sample may not represent the population well",
            "The population must contain exactly 50 people"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "An estimate from a sample may differ from the population value, especially when the sample is small or unrepresentative."
    },
    {
        question: "A dataset contains 100 survey responses, but 40 come from the same household. Why could this matter?",
        options: [
            "The responses may not represent independent or broadly representative participants",
            "The dataset must contain 140 responses",
            "The mean can never be calculated",
            "The survey automatically becomes an experiment"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Responses concentrated in one household may overrepresent that household's views and may not be independent observations."
    },
    {
        question: "After analyzing a dataset, what should a researcher do before presenting the final findings?",
        options: [
            "Remove every result that does not support the first idea",
            "Choose the most colourful chart regardless of accuracy",
            "Assume that any pattern proves causation",
            "Check the analysis, choose an appropriate presentation, and explain limitations"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Reviewing calculations, presenting findings accurately, and acknowledging limitations help make the conclusions more reliable and understandable."
    },
    {
        question: "A researcher uses a histogram to examine the distribution of students' marks. What does the height of each bar usually represent?",
        options: [
            "The names of students",
            "The frequency of observations in an interval",
            "The colour of each observation",
            "The cause of every mark"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "A histogram displays how frequently numerical observations fall within specified intervals."
    },
    {
        question: "A company wants to compare the number of products sold in four different months. Which chart is a suitable choice?",
        options: [
            "A boxplot of product names",
            "A pie chart of unrelated values",
            "A bar chart",
            "A scatter plot without relevant variables"
        ],
        answer: 2,
        difficulty: "Easy",
        explanation: "A bar chart is useful for comparing quantities across distinct categories such as months."
    },
    {
        question: "A researcher records daily rainfall over a year and wants to identify changes over time. Which visualization is most suitable?",
        options: [
            "A line chart",
            "A pie chart of unrelated categories",
            "A boxplot of dates only",
            "A table containing no rainfall values"
        ],
        answer: 0,
        difficulty: "Normal",
        explanation: "A line chart displays how a numerical variable changes over an ordered sequence such as time."
    },
    {
        question: "A scatter plot shows that as advertising expenditure increases, sales also tend to increase. Which conclusion is most appropriate?",
        options: [
            "Advertising is certainly the only cause of higher sales",
            "The variables cannot be related",
            "Every increase in advertising guarantees higher sales",
            "The data suggests a positive association, but other factors may also affect sales"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "An upward pattern suggests a positive association, but observational data alone cannot establish that advertising caused the increase."
    },
    {
        question: "What information does a boxplot commonly summarize?",
        options: [
            "Only the names of the observations",
            "The median, quartiles, and spread of numerical data",
            "The order in which data was collected",
            "Only the total number of files"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A boxplot summarizes a distribution using the median, quartiles, and whiskers; potential outliers may also be displayed."
    },
    {
        question: "A dataset contains the values 2, 3, 3, 4, and 18. Which value is most likely to be considered unusually high compared with the others?",
        options: [
            "2",
            "3",
            "18",
            "4"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "The value 18 is much larger than the other observations and may be a potential outlier that deserves investigation."
    },
    {
        question: "Why should a researcher investigate an outlier before removing it?",
        options: [
            "It may be a genuine observation or a data-entry error",
            "Every outlier is always incorrect",
            "Outliers must always be replaced by zero",
            "Removing any outlier guarantees unbiased results"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "An outlier may reflect a real event or an error. The researcher should investigate its source before deciding how to handle it."
    },
    {
        question: "A pie chart is divided into four sectors representing parts of a whole. What should the sectors normally represent?",
        options: [
            "Four unrelated measurements with different units",
            "Four different chart titles",
            "Four randomly chosen colours only",
            "Categories that together account for the total"
        ],
        answer: 3,
        difficulty: "Easy",
        explanation: "A pie chart shows how categories contribute to a whole, so the sectors should represent meaningful parts of the total."
    },
    {
        question: "What is the purpose of labelling the axes of a graph?",
        options: [
            "To make the data less understandable",
            "To identify the variables and units being displayed",
            "To guarantee that the data is accurate",
            "To remove the need for a chart title"
        ],
        answer: 1,
        difficulty: "Easy",
        explanation: "Axis labels identify what each axis represents and, where appropriate, the units of measurement."
    },
    {
        question: "A bar chart compares values of 45, 47, 49, and 51, but its vertical axis starts at 44. What is a possible effect?",
        options: [
            "The values automatically become incorrect",
            "The chart proves that the categories cause the differences",
            "The small differences may appear visually exaggerated",
            "The data becomes primary data"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Starting a bar chart axis far above zero can exaggerate apparent differences between values."
    },
    {
        question: "Which Python library is commonly used to organize tabular data into DataFrames?",
        options: [
            "Pandas",
            "Matplotlib only",
            "A web browser",
            "A file manager"
        ],
        answer: 0,
        difficulty: "Easy",
        explanation: "Pandas provides DataFrame structures and tools for working with tabular data."
    },
    {
        question: "In Pandas, what is a DataFrame?",
        options: [
            "A type of computer monitor",
            "A chart that can only display percentages",
            "A command that deletes all rows",
            "A two-dimensional labelled data structure with rows and columns"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "A Pandas DataFrame organizes data into labelled rows and columns, similar to a spreadsheet table."
    },
    {
        question: "A student loads a CSV dataset into Python. Which task can Pandas help perform?",
        options: [
            "Repair physical computer components",
            "Read, filter, and summarize tabular data",
            "Guarantee that every value is correct without checking",
            "Replace the need to understand the dataset"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "Pandas supports reading CSV files and performing operations such as filtering, cleaning, and summarizing data."
    },
    {
        question: "Why might a researcher inspect the first few rows of a dataset before analyzing it?",
        options: [
            "To prove causation immediately",
            "To remove every column",
            "To understand the columns, values, and general data structure",
            "To guarantee that there are no missing values"
        ],
        answer: 2,
        difficulty: "Normal",
        explanation: "Inspecting sample rows helps the researcher understand the structure and spot possible issues before analysis."
    },
    {
        question: "A dataset has a column for customer age, but some entries contain text such as 'unknown'. What should be done before calculating the mean age?",
        options: [
            "Identify and appropriately handle the non-numeric or missing entries",
            "Treat every text entry as the age zero without checking",
            "Delete all other columns automatically",
            "Create a pie chart before examining the values"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Non-numeric and missing entries need suitable handling so that calculations are meaningful and data quality is maintained."
    },
    {
        question: "Which Matplotlib function is commonly used to create a line chart?",
        options: [
            "read_csv()",
            "dropna()",
            "describe()",
            "plot()"
        ],
        answer: 3,
        difficulty: "Normal",
        explanation: "Matplotlib's plot() function is commonly used to draw line plots and can also support other plotting styles."
    },
    {
        question: "A researcher wants to display the relationship between height and weight for a group of people. Which chart is most appropriate?",
        options: [
            "Pie chart",
            "Scatter plot",
            "A text heading",
            "A bar chart of unrelated categories"
        ],
        answer: 1,
        difficulty: "Normal",
        explanation: "A scatter plot displays paired numerical values and helps reveal relationships, clusters, and unusual observations."
    },
    {
        question: "A dataset shows that people who use a certain app exercise more often. Why should a researcher be cautious before claiming that the app causes more exercise?",
        options: [
            "A relationship between variables is always meaningless",
            "Numerical data cannot be analyzed",
            "Other factors may influence both app use and exercise habits",
            "Scatter plots cannot display numerical values"
        ],
        answer: 2,
        difficulty: "Difficult",
        explanation: "Confounding factors may affect both variables. An observed association alone does not prove that app use caused the behaviour."
    },
    {
        question: "A weather model consistently predicts temperatures that are higher than the actual temperatures. What should the analyst investigate?",
        options: [
            "Possible bias, assumptions, and problems in the model or input data",
            "Whether the graph uses attractive colours",
            "How to hide the incorrect predictions",
            "Whether to remove all actual temperature measurements"
        ],
        answer: 0,
        difficulty: "Difficult",
        explanation: "Consistent overprediction suggests systematic error that may arise from model assumptions, input data, or the modelling process."
    },
    {
        question: "What is the most responsible way to present the results of a data analysis?",
        options: [
            "Show only the results that support the preferred conclusion",
            "Remove inconvenient observations without explanation",
            "Use a misleading chart to make differences appear larger",
            "Present relevant findings clearly and explain important limitations"
        ],
        answer: 3,
        difficulty: "Difficult",
        explanation: "Responsible reporting communicates findings accurately, avoids misleading presentation, and acknowledges relevant limitations."
    }
];
console.log("TOTAL UNIT 4 MCQs:", questions.length);
localStorage.setItem(
    "mcqQuestionsComputer4",
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

    // Explanation is already visible in Preparation
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







