const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets"
        ],
        correct: 0
    },
    {
        question: "What does JS stand for?",
        options: [
            "JavaScript",
            "JavaServer",
            "JustScript",
            "JollyScript"
        ],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: [
            "<style>",
            "<css>",
            "<script>",
            "<link>"
        ],
        correct: 0
    },
    {
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Stylish Question Language",
            "Statement Question Language",
            "Strong Query Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for web apps?",
        options: [
            "PHP",
            "Python",
            "JavaScript",
            "All of the above"
        ],
        correct: 3
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
            "<a>",
            "<link>",
            "<href>",
            "<nav>"
        ],
        correct: 0
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: [
            "color",
            "bgcolor",
            "background-color",
            "background"
        ],
        correct: 2
    },
    {
        question: "What does JSON stand for?",
        options: [
            "JavaScript Object Notation",
            "JavaScript Online Notation",
            "Java Source Object Notation",
            "JavaScript Object Native"
        ],
        correct: 0
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function = myFunction()",
            "function:myFunction()",
            "function myFunction()",
            "myFunction = function()"
        ],
        correct: 2
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "style",
            "styles",
            "class",
            "font"
        ],
        correct: 0
    },
    {
        question: "What is the correct way to include external CSS in an HTML file?",
        options: [
            "<link rel='stylesheet' href='style.css'>",
            "<style src='style.css'>",
            "<stylesheet>style.css</stylesheet>",
            "<script src='style.css'></script>"
        ],
        correct: 0
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Sun Microsystems",
            "Netscape",
            "Oracle"
        ],
        correct: 2
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: [
            "<footer>",
            "<bottom>",
            "<section>",
            "<div>"
        ],
        correct: 0
    },
    {
        question: "What is the default file extension for JavaScript files?",
        options: [
            ".java",
            ".js",
            ".javascript",
            ".jvs"
        ],
        correct: 1
    }
];

const quiz = document.querySelector('#quiz');
const answerElem = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");

const sumbitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    questionElm.innerText = `${currentQuiz + 1}: ${question}`;

    options.forEach((curOption, index) => window[`option_${index + 1}`].innerText = curOption);

}

loadQuiz();

const getSelectedOption = () => {
    // let ans_index;
    // answerElem.forEach((curOption , index) =>{
    //     if(curOption.checked){
    //         ans_index = index;
    //     }
    // });
    // return ans_index;

    let answerElement = Array.from(answerElem);
    return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectedAnswer = () => {
    answerElem.forEach((currElem) => currElem.checked = false );
}

sumbitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    if (selectedOptionIndex != -1) {

        if(selectedOptionIndex == quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            deselectedAnswer();
            loadQuiz();
        }
        else{
            quiz.innerHTML = `
            <div class= "result">
            <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
            <p>Congratulations on completing the quiz!</p>
            <button class ="reload-button" onclick="location.reload()">Play Again 🔄</button>
            </div>

            `
        }
    }
});