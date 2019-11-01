var timeEl = document.querySelector(".time");
var introEl = document.querySelector(".intro");
var questionEl = document.querySelector(".question");
var answerEl= document.querySelector(".answer");
var endEL= document.querySelector(".end");
var start = document.querySelector("button[name='start']"); //start quiz button
var ol = document.querySelector("ol");

var correctAnswers=0;
var secondsLeft = questions.length * 15;
var q=0;

function startTimer() {

  var interval = setInterval(function() {
    timeEl.textContent = "secondsLeft";
    secondsLeft--;

    if (secondsLeft === 0 || questions[q] === undefined) {
      clearInterval(interval);
      secondsLeft = 75;
      finishQuiz();
    }

  }, 1000);
}

function startQuiz() {
  ol.textContent = "";
  introEl.setAttribute("style", "display: none"); // hides intro when quiz starts
  askQuestion();
}

function finishQuiz() {
  var finished = document.createElement("div");
  finished.textContent("The End");
  endEL.append(finished);
}


function askQuestion() {
  if (questions[q].title === undefined){
    finishQuiz();
  }
  ol.textContent = questions[q].title;

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

      if(event.detail > 1){
        return;
      }

      var choiceEl = document.createElement("div");
      ol.classList.add("answered");
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

// askQuestion();
// Add event removing question when answer choice is clicked
// Increment score when question is answered correctly
// Punish wrong questions by removing time from clock

// Stop Timer when all questions have been answered
// Reset secondsLeft
// Add event when answer choice is clicked
