const linkEl= document.querySelector(".banner a");
const introEl = document.querySelector(".intro");
const timeEl = document.querySelector(".timer");
const questionEl = document.querySelector(".question"); // this div has h2 and ol children
const choicesEl = document.querySelector(".choices");
const answerEl = document.querySelector(".answer");
const endEl = document.querySelector(".end");
const endScoreEl = document.querySelector(".quizScore"); // this is the score
const form = document.querySelector(".form");
const initials = document.querySelector("#initials"); // input value < TODO when this is submitted store quiz score 
const clearBtn = document.querySelector(".clear-scores"); // button in modal to clear local storage
const scoreList = document.querySelector(".score-list");
const redo=document.querySelector(".redo");

var timer;
var countdown; // this is my timer countdown AND score
var q=0; // this is my counter index within the questions array
var quiz=0; // this is my quiz index for how many times i've taken it (if i want)
var correctAnswers=0;

// what more does my initializer need?

///// Display Shite
// clean up that finish text
// TODO see if i can change the questions.choice array for loop to a forEach

function displayTime(){
  timeEl.textContent = "Time: " + countdown;
}


function initialize() {
  q=0;
  timeEl.textContent = "Are You Ready?";
  linkEl.classList.remove("disabled");
  
  introEl.style.display = "block";
  questionEl.style.display = "none";
  endEl.style.display = "none";

  while (choicesEl.firstChild) {
    choicesEl.removeChild(myNode.firstChild);
  }
  
  // if (endEl.style.display === "block") {
    //   endEl.style.display = "none";
    // } 
    // if (introEl.style.display === "none") {
      //   introEl.style.display = "block";
      // } 
      // startTimer()
    }
    
function startTimer() {
      countdown = questions.length * 15;
      timer = setInterval(function() {
        displayTime();
        countdown--; 
    
        if (countdown === 0){ // finish quiz if countdown gets to 0
          clearInterval(timer);
          timeEl.textContent = countdown;
          finishQuiz();
        }
      }, 1000);
    
      introEl.style.display = "none"; // hide intro
      askQuestion();
      
    }
function askQuestion() {
  console.log(questions.indexOf(questions[q]) + " this is my questions index");
  
  if (questions.indexOf(questions[q]) == -1) { // (hopefully) Run finishQuiz if the questions are all done
    questionEl.firstChild.textContent = " ";
    finishQuiz();
  }

  if (questionEl.style.display === "none") {
    questionEl.style.display = "block";
  } 
  linkEl.classList.add("disabled"); // Disable the high score link while quiz is asking questions
  questionEl.firstElementChild.textContent = questions[q].title; // Display first question title
  var ol = document.createElement("ol");  
  // TODO see if i can change this to a forEach
  for (var j=0; j < questions[q].choices.length; j++) { 
    var li = document.createElement("li"); // Create list of possible choices
    li.textContent = questions[q].choices[j];
    ol.appendChild(li);
  }
  choicesEl.append(ol);

  ol.addEventListener("click", function(event) {
    if (event.target.matches("li")) {
      event.preventDefault();
      event.stopPropagation();

      var selected = event.target;
      event.target.classList.add("selected");
      console.log(event.detail);

      if(event.detail > 1){ // Will this prevent double clicking?
        return;
      }
      
      // Display whether answer is correct; add time penalty if not
      var indiEl = document.createElement("div");
      if (selected.textContent === questions[q].answer) {
        correctAnswers++;
        console.log(correctAnswers);
        answerEl.innerHTML = ""
        indiEl.textContent="Correct";
        answerEl.appendChild(indiEl);
      } else {
        countdown -= 10;
        answerEl.innerHTML = ""
        indiEl.textContent="Wrong";
        answerEl.appendChild(indiEl);
      }
      console.log(ol);
      ol.classList.add("answered");
      
      q++;
      askQuestion();
    }
  })
}

function finishQuiz() {
  clearInterval(timer);
  questionEl.firstElementChild.textContent = "";
  answerEl.innerHTML = "";
  timeEl.textContent = "Score: " + countdown;
  linkEl.classList.remove("disabled"); // QUESTION will this be janky if the class doesn't exist?
  console.log(countdown);
  endScoreEl.textContent = "Your final score is " + countdown +  
  " .\n\n You aswered " + correctAnswers + " of " + questions.length + " correctly.";
  
  
  questionEl.style.display = "none"; // Hide quiz div => display end div
  endEl.style.display = "block";
  

  form.addEventListener('submit', function(e){
    e.preventDefault();
    localStorage.setItem("score", JSON.stringify(countdown));
    scoreKeeper(score);
    initials.value = '';
    linkEl.classList.remove("disabled");
    redo.classList.remove("invisible");


  });
}

clearBtn.addEventListener('click', function() {
  localStorage.clear()
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild)
  }

});

// Local Storage code
var score = JSON.parse(localStorage.getItem("score"));

// This is passed into our function TODO change to score once it's working
// this creates my score list in the modal
function scoreKeeper(text) {
  var p = document.createElement("p");
  p.textContent =  text;
  scoreList.insertBefore(p, scoreList.firstElementChild);
  }
