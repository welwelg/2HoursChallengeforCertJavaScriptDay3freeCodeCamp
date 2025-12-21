const questions = [
    {
        category: "JavaScript",
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: ["var", "function", "return"],
        answer: "var"
    },
    {
        category: "HTML",
        question: "Which tag is used to define a hyperlink?",
        choices: ["<a>", "<div>", "<span>"],
        answer: "<a>"
    },
    {
        category: "CSS",
        question: "Which property is used to change text color?",
        choices: ["color", "font-size", "background-color"],
        answer: "color"
    }, 
    {
        caregory: "Programming",
        question: "Which data type stores true or false?",
        choices: ["Boolean", "String", "Number"],
        answer: "Boolean"
    },
    {
        category: "Web Development",
        question: "What does API stand for?",
        choices: ["Application Programming Interface", "Advanced Programming Integration", "Automated Process Interaction"],
        answer: "Application Programming Interface"
    }
];

function getRandomQuestion(questionsArray){
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray){
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function getResults(questionObj, computerChoice){
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is incorrect. The correct answer is ${questionObj.answer}.`;
    }
}

// Get a random question
const randomQuestion = getRandomQuestion(questions);
console.log("Random Question:", randomQuestion);

// Get a random computer choice from the question's choices
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer Choice:", computerChoice);

// Get the result
const result = getResults(randomQuestion, computerChoice);
console.log("Result:", result);