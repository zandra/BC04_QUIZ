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
  askQuestion();
}

function finishQuiz() {

}

function askQuestion() {
  const question = questions[0];
    
    // format each question
  var ul = document.createElement("ul"); // create question list
  ul.textContent = question.title;
  quiz.appendChild(ul);

  for (let i=0; i < 4; i++) {
    var li = document.createElement("li"); // create possible choices
    li.textContent = question.choices[i];
    ul.appendChild(li);
  }

  ul.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.nodeName === "LI") {           // prevents adding the classList for click events outside list item 
      e.target.classList.add("selected");
    }
    console.log(e.target);
    ul.classList.add("answered");

  })

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