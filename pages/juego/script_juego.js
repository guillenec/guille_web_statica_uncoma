const questions = [
  {
    question: "¿Cómo se llama el padre biológico de Goku?",
    answers: [
      { text: "Raditz", correct: false },
      { text: "Bardock", correct: true },
      { text: "Vegeta", correct: false },
      { text: "Nappa", correct: false }
    ]
  },
  {
    question: "¿Quién fue el primer villano al que Goku enfrentó en Dragon Ball Z?",
    answers: [
      { text: "Freezer", correct: false },
      { text: "Cell", correct: false },
      { text: "Raditz", correct: true },
      { text: "Majin Buu", correct: false }
    ]
  },
  {
    question: "¿Cómo se llama la transformación en la que Goku alcanza el cabello amarillo?",
    answers: [
      { text: "Ultra Instinto", correct: false },
      { text: "Kaioken", correct: false },
      { text: "Ozaru", correct: false },
      { text: "Super Saiyajin", correct: true }
    ]
  },
  {
    question: "¿Qué técnica usa Vegeta para autodestruirse contra Majin Buu?",
    answers: [
      { text: "Final Explosion", correct: true },
      { text: "Galick Gun", correct: false },
      { text: "Big Bang Attack", correct: false },
      { text: "Final Flash", correct: false }
    ]
  },
  {
    question: "¿Quién derrota a Cell al final de la saga de los androides?",
    answers: [
      { text: "Goku", correct: false },
      { text: "Vegeta", correct: false },
      { text: "Gohan", correct: true },
      { text: "Trunks", correct: false }
    ]
  },
  {
    question: "¿Cómo se llama la técnica que Goku aprendió del maestro Roshi?",
    answers: [
      { text: "Genkidama", correct: false },
      { text: "Kamehameha", correct: true },
      { text: "Kaioken", correct: false },
      { text: "Instant Transmission", correct: false }
    ]
  },
  {
    question: "¿Quién es el hijo mayor de Goku?",
    answers: [
      { text: "Goten", correct: false },
      { text: "Trunks", correct: false },
      { text: "Pan", correct: false },
      { text: "Gohan", correct: true }
    ]
  },
  {
    question: "¿Cuál es el nombre del planeta natal de los Saiyajines?",
    answers: [
      { text: "Planeta Vegeta", correct: true },
      { text: "Namekusei", correct: false },
      { text: "Planeta Kai", correct: false },
      { text: "Tierra", correct: false }
    ]
  },
  {
    question: "¿Qué tipo de ser es Piccolo?",
    answers: [
      { text: "Saiyajin", correct: false },
      { text: "Android", correct: false },
      { text: "Namekiano", correct: true },
      { text: "Humano", correct: false }
    ]
  },
  {
    question: "¿Qué se necesita para invocar a Shenlong?",
    answers: [
      { text: "Un deseo", correct: false },
      { text: "Las 7 Esferas del Dragón", correct: true },
      { text: "Un ritual", correct: false },
      { text: "El Kamehameha", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function startGame() {
  currentQuestionIndex = 0;
  correctAnswers = 0;
  nextButton.innerText = "Siguiente";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answersElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    selectedButton.style.backgroundColor = "green";
    correctAnswers++;
  } else {
    selectedButton.style.backgroundColor = "red";
  }
  Array.from(answersElement.children).forEach(button => {
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  const totalQuestions = questions.length;
  const score = (correctAnswers / totalQuestions) * 100;
  questionElement.innerHTML = `
        <h2>¡Juego Terminado!</h2>
        <p>Respondiste correctamente ${correctAnswers} de ${totalQuestions} preguntas.</p>
        <p>Tu puntaje es: ${score.toFixed(2)}%</p>
    `;
  nextButton.innerText = "Reiniciar";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startGame);
}

document.addEventListener("DOMContentLoaded", startGame);