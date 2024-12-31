const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: 'Shark', correct: false },
            { text: 'Blue whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Leo Tolstoy', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    progressBar.style.width = "0%";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
    updateProgress();
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function setStatusClass(element, correct) {
    element.classList.add(correct ? 'correct' : 'incorrect');
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    nextButton.textContent = "Play Again";
    nextButton.style.display = 'block';
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();


// const questions = [
//     {
//         question: "Which is the largest animal in the world",
//         answers: [
//             { text: 'Shark', correct: false },
//             { text: 'Blue whale', correct: true },
//             { text: 'Elephant', correct: false },
//             { text: 'Giraffe', correct: false }
//         ]
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         answers: [
//             { text: 'Earth', correct: false },
//             { text: 'Mars', correct: true },
//             { text: 'Jupiter', correct: false },
//             { text: 'Venus', correct: false }
//         ]
//     },
//     {
//         question: "Who wrote the play 'Romeo and Juliet'?",
//         answers: [
//             { text: 'William Shakespeare', correct: true },
//             { text: 'Charles Dickens', correct: false },
//             { text: 'Leo Tolstoy', correct: false },
//             { text: 'Mark Twain', correct: false }
//         ]
//     },
//     {
//         question: "What is the capital city of France?",
//         answers: [
//             { text: 'Paris', correct: true },
//             { text: 'Rome', correct: false },
//             { text: 'Berlin', correct: false },
//             { text: 'Madrid', correct: false }
//         ]
//     },
// ];

// const questionElement = document.getElementById('question');
// const answerButtons = document.getElementById('answer-button');
// const nextButton = document.getElementById('next-btn');

// function startQuiz() {
//     currentQuestionIndex = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + "." + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button); // Corrected variable name
//         if(answer.correct){
//             button.dataset.correct = "true";
//         }
//         button.addEventListener("click",selectAnswer);

//     });
// }


// function selectAnswer(e) {
// const selectedBtn = e.target;
// const isCorrect = selectedBtn.dataset.correct === "true";
// if (isCorrect){
//     selectedBtn.classList.add('correct');
//     score++;
// }else{
//     selectedBtn.classList.add('incorrect');
// }
// Array.from(answerButtons.children).forEach(button =>{
//     if(button.dataset.correct === "true"){
//         button.classList.add("correct")
//     }
//     button.disabled = true;
// });
// nextButton.style.display = "block";



// }

// function resetState() {
//     nextButton.style.display = "none";
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function  showScore(){
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
//     nextButton.innerHTML = "Play again!"
//     nextButton.style.display = "block"
// }

// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//       showQuestion();
//  }else{
//         showScore();
//     }
// }
// let score = 0;


// nextButton.addEventListener('click',()=>{
//       if (currentQuestionIndex < questions.length ) {
//         handleNextButton();
//       }else{
//         startQuiz();
//       }
// });
// startQuiz(

// );













