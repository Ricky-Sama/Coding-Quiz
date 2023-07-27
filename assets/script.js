// Quiz Questions
const quizData = [
    {
      question: "Commonly used data types DO not include:",
      answers: ["Strings", "Booleans", "Alerts", "Numbers"],
      correctAnswer: "Alerts"
      },
    {
      question: "The condition in an if/else statement is enclosed with what?",
      answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
      correctAnswer: "Parenthesis"
      },
    {
      question: "Arrays in JavaScript can be used to store:",
      answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
      correctAnswer: "All of the above"
      },
    {
      question: "String values must be enclosed within ______ when being assigned to variables.",
      answers: ["Commas", "Curly Brackets", "Quotes", "Paranthesis"],
      correctAnswer: "Paranthesis"
      },  
    {
      question: "A very useful tool used during development for debuggin for printing content to the debugger is:",
      answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      correctAnswer: "Alerts"
      },  
];


const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('question-container');
const questionText = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.btn');


let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  document.querySelector('.quiz-start-box').style.display = 'none';
  questionContainer.style.display = 'block';
  displayQuestion();
}


function displayQuestion() {
  if (currentQuestionIndex >= quizData.length) {
   
    showQuizResult();
    return;
  }

  const currentQuestion = quizData[currentQuestionIndex];

  questionText.textContent = currentQuestion.question;

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.addEventListener('click', checkAnswer);
  });
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    alert('Correct!');
  } else {
    alert('Wrong!');
  }

  currentQuestionIndex++;
  displayQuestion();
}


function showQuizResult() {
  questionContainer.style.display = 'none';
  
  console.log('Quiz completed! Your score:', score);
}

startButton.addEventListener('click', startQuiz);
