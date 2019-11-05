const quizType = document.querySelectorAll("quizType");
const linkEl= document.querySelector(".banner a");
const introEl = document.querySelector(".intro");
const timeEl = document.querySelector(".timer");
const questionEl = document.querySelector(".question"); // this div has h2 and ol children
const choicesEl = document.querySelector(".choices");
const answerEl = document.querySelector(".answer");
const endEl = document.querySelector(".end");
const endScoreEl = document.querySelector(".quizScore"); // this is the score
const form = document.querySelector(".form");
const initials = document.querySelector("#initials"); 
const clearBtn = document.querySelector(".clear-scores");
const scoreList = document.querySelector(".score-list");
const redo = document.querySelector(".redo");

var timer;
var countdown; // this is my timer countdown AND score
var q=0; // this is my counter index within the questions array
var quiz=0; // this is my quiz index for how many times i've taken it (if i want)
var correctAnswers=0;

function displayTime(){
  timeEl.textContent = "Time: " + Math.floor(countdown/60) +" min " + Math.floor(countdown%60) + " seconds";
}

function initialize() {
  q=0;
  document.body.style.backgroundImage = "url('assets/img/sand.jpg')";
  timeEl.textContent = "Are You Ready?";
  linkEl.classList.remove("disabled");
  
  introEl.style.display = "block";
  questionEl.style.display = "none";
  endEl.style.display = "none";

  while (choicesEl.firstChild) {
    choicesEl.removeChild(choicesEl.firstChild);
  }

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
  document.body.style.backgroundImage = "url('assets/img/water.jpeg')";
  if (document.querySelector("#htmlQuiz").checked === true ) {
    questions = htmlQestions;
    document.body.style.backgroundImage = "url('assets/img/snow_sm.jpg')";
  }
  
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

  questions[q].choices.forEach( c => {
    var li = document.createElement("li"); 
    li.textContent = c;
    ol.appendChild(li);
  });

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
        countdown -= 15;
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
  endScoreEl.textContent = "Your final score is " + countdown +  
  ". You aswered " + correctAnswers + " of " + questions.length + " questions correctly.\r\n\n" + 
  "Enter your initials to save your score. Play again to improve your score.";
  
  questionEl.style.display = "none"; // Hide quiz div => display end div
  endEl.style.display = "block";
  
  form.addEventListener('submit', function(e){
    e.preventDefault();
    e.stopPropagation();
    addToLocalStorageObject("score", initials.value, countdown);
    initials.value = '';
    scoreKeeper();
    linkEl.classList.remove("disabled");
    redo.classList.remove("invisible");
  });
}

var addToLocalStorageObject = function (name, key, value) {

	// get existing data
	var existing = localStorage.getItem(name);

	// if no, create an array, otherwise convert the localStorage string to an array
	existing = existing ? JSON.parse(existing) : {};

	// add to the array
	existing[key] = value;

	// save back to localStorage
	localStorage.setItem(name, JSON.stringify(existing));

};

function scoreKeeper() {
  var score = JSON.parse(localStorage.getItem("score"));
  for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue; // skip keys like "setItem", "getItem" etc
    }
    
    Object.keys(score).forEach(k => { 
      var p = document.createElement("p");
      p.textContent= `${k}: ${score[k]}`;
      scoreList.append(p);
    });
  }
}

clearBtn.addEventListener('click', function() {
  localStorage.clear()
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild)
  }
});

initialize();