const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    li.appendChild(btn);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `Your score: ${score}/${quizData.length}`;
}

// Start the quiz
showQuestion();
