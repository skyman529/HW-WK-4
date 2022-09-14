var aButton = document.getElementById("a");
var bButton = document.getElementById("b");
var cButton = document.getElementById("c");
var dButton = document.getElementById("d");
var correct;
var currentQuestionIndex = 0;
var endGameButons = document.getElementById("endGameButtons");
var finalScoreEl = document.getElementById("endScore");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDisplayScore = document.getElementById("highscore-score");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreDisplayName = document.getElementById("highscore-initials");
var highscoreInputName = document.getElementById("initials");
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var startQuizButton = document.getElementById("startbutton");
var startQuizDiv = document.getElementById("startpage");
var submitScoreButton = document.getElementById("submitScore");
var theEnd = document.getElementById("the-end");
var timeLeft = 76;
var timerInterval;
var score = 0;

// questions
var quizQuestions = [{
  question: "1.How?",
  choiceA: "wrong",
  choiceB: "wrong",
  choiceC: "correct1",
  choiceD: "wrong",
  correctAnswer: "c"},
  {
    question: "2.Why?",
    choiceA: "wrong",
    choiceB: "wrong",
    choiceC: "correct2",
    choiceD: "wrong",
    correctAnswer: "c"},
    {
      question: "3.When?",
      choiceA: "wrong",
      choiceB: "wrong",
      choiceC: "correct3",
      choiceD: "wrong",
      correctAnswer: "c"},
      {
        question: "4.Who?",
        choiceA: "wrong",
        choiceB: "wrong",
        choiceC: "correct4",
        choiceD: "wrong",
        correctAnswer: "c"},
        {
          question: "5.What?",
          choiceA: "wrong",
          choiceB: "wrong",
          choiceC: "correct5",
          choiceD: "wrong",
          correctAnswer: "c"},  
          {
            question: "6.Could?",
            choiceA: "wrong",
            choiceB: "wrong",
            choiceC: "correct6",
            choiceD: "wrong",
            correctAnswer: "c"},
            {
              question: "7.Would?",
              choiceA: "wrong",
              choiceB: "wrong",
              choiceC: "correct7",
              choiceD: "wrong",
              correctAnswer: "c"},
              
              
            ];
            var finalQuestionIndex = quizQuestions.length;