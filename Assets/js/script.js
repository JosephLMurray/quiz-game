const questions = [
    {question: 'What does JSON stand?',  possibles: ['JavaScript Object Notation', 'whatever'], answer: 'JavaScript Object Notation'},
    {question: 'What does JSON stand for 2',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
    {question: 'What does JSON stand for 3',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
    {question: 'What does JSON stand for 4',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
    {question: 'What does JSON stand for 5',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
    {question: 'What does JSON stand for 6',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
    {question: 'What does JSON stand for 7',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
    {question: 'What does JSON stand for 8',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
    {question: 'What does JSON stand for 9',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
    {question: 'What does JSON stand for 10',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
]

var question = document.getElementById("questionField")
var poss1 = document.getElementById("poss1");
var poss2 = document.getElementById("poss2");
var poss3 = document.getElementById("poss3");
var poss4 = document.getElementById("poss4");
var timerText = document.getElementsByClassName("timer-text");
var startButton = document.getElementById("start-button");
var scoresButton = document.getElementById("scores");
var returnButton = document.getElementById("return-button");
var playerName = document.getElementById("playerName");
var playerScore = document.getElementById("playerScore");
var timer = document.getElementById("timer-count");


    let questionObj = questions.splice(Math.floor(Math.random()*questions.length), 1).pop();

// console.log(questionObj.answer)

// if (GamepadButton.value === questionObj.answer)

// populate buttons = for (questionObj.possibles.splice(Math.floor(Math.random()*questionObj.possibles.length), 1);)
// console.log (pop)
// a possibles[x]
// b 
startButton.addEventListener("click", function(event){
    event.preventDefault();
    countdown();
    
});

function countdown() {

    var timeLeft = 60;
      
    var timeInterval = setInterval(function () {
        timeLeft--;
        console.log(timer.textContent = timeLeft);
        timer.textContent = timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timeInterval);
      }
      //
    }, 1000);
  }
