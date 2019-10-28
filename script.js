var timer = document.querySelector(".timer");
var quiz = document.querySelector(".quiz");
var start = document.querySelector("button[name='start']"); //start quiz button

var correctAnswers=0;
var secondsLeft=0;
var interval;


function startTimer() {
  secondsLeft = 75; // TODO change to number of questions * 15s

  interval = setInterval(function() {
    timer.textContent = secondsLeft + " seconds";
    secondsLeft--;

    if (secondsLeft === 0 ) { // TODO add || for finishing quiz
      clearInterval(interval);
      secondsLeft = 75;
      finishQuiz();
    }

  }, 1000);
}

function startQuiz() {
  // startTimer();
  formatQuestion();



}

function finishQuiz() {

}

function formatQuestion() {

  var ul = document.createElement("ul"); // create question list
  ul.textContent = questions[0].title;
  quiz.appendChild(ul);

  for (let i=0; i < 4; i++) {
    var li = document.createElement("li"); // create possible choices
    li.textContent = questions[0].choices[i];
    ul.appendChild(li);
  }

  ul.addEventListener('click', function(e) {
    if (e.target.nodeName === "LI") {
      e.target.classList.add("selected");
    }
    console.log(e);
  }

  )



}


// Stop Timer when all questions have been answered
// Reset secondsLeft
// Add event when answer choice is clicked
// Add even when answer choice is removed
// Punish wrong questions by removing time from clock
// Increment score when question is answered correctly



var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
];