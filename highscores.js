const introEl = document.querySelector(".intro")
const timeEl = document.querySelector(".timer");
const questionEl = document.querySelector(".question"); // this div has h2 and ol children
const ol = document.querySelector(".question ol");
const answerEl = document.querySelector(".answer");
const endEl = document.querySelector(".end");
const endScoreEl = document.querySelector(".quizScore"); // this is the score
const form = document.querySelector(".form");
const initials = document.querySelector("#initials"); // input value < TODO when this is submitted store quiz score 
const clearBtn = document.querySelector(".clear-scores"); // button in modal to clear local storage
const scoreList = document.querySelector(".score-list");
var timer;
var countdown = 60; // this is my timer countdown AND score
var q=0; // this is my counter index within the questions array
var quiz=0; // this is my quiz index for how many times i've taken it (if i want)

function displayTime(){
  timeEl.textContent = "Time: " + countdown;
}

function startTimer() {

  timer = setInterval(function() {
    displayTime();
    countdown--; 

    if (countdown === 0){ // finish quiz if countdown gets to 0
      clearInterval(timer);
      timeEl.textContent = countdown;
      console.log(countdown);
      finishQuiz();
    }
  }, 1000);

  introEl.style.display = "none"; // hide intro
  askQuestion();

  
}

function askQuestion() {

  if (questions[q].title === undefined) { // this should run finishQuiz if the questions are all done
    finishQuiz();
  }

  if (questionEl.style.display === "none") {
    questionEl.style.display = "block";
  } 

  questionEl.firstChild.textContent = questions[q].title; // Display first question title

  for (let j=0; j < questions[q].choices.length; j++) {
    var li = document.createElement("li"); // create possible choices
    li.textContent = questions[q].choices[j];
    ol.appendChild(li);
  }

  ol.addEventListener("click", function(event) {
    if (event.target.matches("li")) {
      event.preventDefault();
      event.stopPropagation();
      var selected = event.target;
      console.log(event.detail);
      console.log(questions.indexOf(questions[q]) + " this is my questions index");

      if(event.detail > 1){ // prevent double clicking?
        return;
      }
      ol.classList.add("answered");

      var choiceEl = document.createElement("div");
      if (selected.textContent === questions[q].answer) {
        correctAnswers++;
        console.log(correctAnswers);
        answerEl.innerHTML = ""
        choiceEl.textContent="Correct";
        answerEl.appendChild(choiceEl);
      } else {
        answerEl.innerHTML = ""
        choiceEl.textContent="Wrong";
        answerEl.appendChild(choiceEl);
      }
      console.log(ol);
      
 
      q++;
      askQuestion();
    }
  })
}

function finishQuiz() {
  clearInterval(timer);
  // timeEl.textContent = countdown;
  console.log(countdown);
  endScoreEl.textContent = "Finished! Your final score is +" + countdown;

  if (endEl.style.display === "none") {
  endEl.style.display = "block";
  } 
}

// this creates my score list in the modal
function scoreKeeper(text) {
  var p = document.createElement("p");
  p.textContent =  text;
  scoreList.appendChild(p);
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  var scoreInput = initials.value;
  // scoreInput = finalScore.text;
  scoreKeeper(scoreInput); // This is passed into our function TODO change to score once it's working
  initials.value = '';

  localStorage.setItem("score", JSON.stringify(scoreInput));
});

const data = JSON.parse(localStorage.getItem("score"));

clearBtn.addEventListener('click', function() {
  localStorage.clear()
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild)
  }
})

