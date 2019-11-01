function startTimer() {

  var interval = setInterval(function() {
    timeEl.textContent = "secondsLeft";
    secondsLeft--;

    if (secondsLeft === 0 ) { // TODO add || for finishing quiz
      clearInterval(interval);
      secondsLeft = 75;
      finishQuiz();
    }

  }, 1000);
}