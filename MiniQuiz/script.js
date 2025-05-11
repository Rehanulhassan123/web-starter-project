const Questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Camel", correct: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "O", correct: false },
            { text: "W", correct: false },
            { text: "H2O", correct: true },
            { text: "H", correct: false },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Emily Bronte", correct: false },
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false },
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Michelangelo", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Pb", correct: false },
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false },
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "John Steinbeck", correct: false },
        ]
    },
    // Add more questions here...
];

// variables and dom elements 
let currentQuestionIndex = 0;
let answerBox = document.querySelector(".answers")
const questionElement = document.querySelector(".question")
const next = document.querySelector(".next")
const remQuestions = document.querySelector(".remQuestion")
const timer = document.querySelector(".timer")
let timerid
let score = 0;

// function to reset time 

function resetTime() {
    let time = 15;
    timer.textContent = time;
    timerid = setInterval(() => {
        time--;
        timer.textContent = time;
        if (time === 0) {
            clearInterval(timerid);
            displayCorrectAnswerAndNextButton();
        }
    }, 1000);
}

// function to display answers when time get reached 
function displayCorrectAnswerAndNextButton() {
    next.style.display = "block";
    Array.from(answerBox.children).forEach((btn) => {
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
}

// function to reset state to show new questions 
function resetState() {
    // clearInterval(timerid)
    while (answerBox.firstChild) {
        answerBox.removeChild(answerBox.firstChild)
    }
}
//   function to start new quiz form zero 
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resetState()
    resetTime()

    next.style.display = "none"
    showQuestions()
}
// function to show questions in dom element 
function showQuestions() {
    // to display question 
    let currentQuestion = Questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.textContent = questionNo + ". " + currentQuestion.question
    remQuestions.textContent = `${questionNo} of ${Questions.length}`
    // to display answer 
    // resetState()
    currentQuestion.answers.forEach(element => {
        let button = document.createElement("button")
        button.textContent = element.text
        button.classList.add("btn")
        if (element.correct) {
            button.dataset.correct = element.correct
        }
        answerBox.appendChild(button)
        // button on click event listner 

        button.addEventListener("click", (e) => {
            let selectedBtn = e.target
            let iscorrect = selectedBtn.dataset.correct === "true"
            if (iscorrect) {
                selectedBtn.classList.add("correct")
                score++;
            }
            else {
                selectedBtn.classList.add("incorrect")
            }
            Array.from(answerBox.children).forEach((btn) => {

                console.log(btn);
                if (btn.dataset.correct === "true") {
                    btn.classList.add("correct")
                    clearInterval(timerid)
                }
                btn.disabled = true;
            })
            next.style.display = "block"
        })

    });

}
//  function to handle on click next event 
function handleNext() {
    resetState()

    currentQuestionIndex++;
    if (currentQuestionIndex < Questions.length) {

        resetTime()
        showQuestions()
        next.style.display = "none"
    }
    else {
        questionElement.textContent = `you Scored ${score} out of ${Questions.length}`
        next.textContent = "Play Again"
    }
}

//    next on click event listner 
next.addEventListener("click", () => {
    if (currentQuestionIndex < Questions.length) {

        clearInterval(timerid)
        handleNext()
    }
    else {
        clearInterval(timerid)
        startQuiz()
        next.textContent = "Next"
    }
})

startQuiz()