


//Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    theEnd.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft <0 )
        timeLeft = 0
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}
//  
function generateQuizQuestion(){
    theEnd.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    aButton.innerHTML = currentQuestion.choiceA;
    bButton.innerHTML = currentQuestion.choiceB;
    cButton.innerHTML = currentQuestion.choiceC;
    dButton.innerHTML = currentQuestion.choiceD;
};
// show end score
function showScore(){
    quizBody.style.display = "none";
    theEnd.style.display = "flex";
    highscoreInputName.value = "";
    clearInterval(timerInterval);
    
}
submitScoreButton.addEventListener("click", function highscore(){
    
    
    if(highscoreInputName.value === "") {
        alert("You must enter your initials to save your score");
        return false;
    }else{
        var currentUser = highscoreInputName.value.trim();
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentHighscore = {
            name : currentUser, score : score };
    
        theEnd.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameButtons.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
    
});

// show high scores from mem
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);

    }
}

// show highscore page
function showHighscore(){
    startQuizDiv.style.display = "none"
    theEnd.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameButtons.style.display = "flex";
    generateHighscores();
}

// clear button
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

// try quiz again
function replayQuiz(){
    highscoreContainer.style.display = "none";
    theEnd.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 66;
    resultsEl.style.display = "none"
    score = 0;
    currentQuestionIndex = 0;
}

//checks answers 
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        resultsEl.style.display = "flex"
        quizTimer.style.backgroundColor = "yellowgreen"
        resultsEl.textContent = "that is correct";
        resultsEl.style.color = "Black"
        currentQuestionIndex++;
        generateQuizQuestion();
//display in the results div that the answer is correct.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        resultsEl.textContent = "that is incorrect -10 seconds";
        currentQuestionIndex++;
        resultsEl.style.display = "flex"
        resultsEl.style.color = "red"
        generateQuizQuestion();
        timeLeft = timeLeft -10
        quizTimer.style.backgroundColor = "red"
}
}
// This button starts the quiz!
startQuizButton.addEventListener("click",startQuiz);