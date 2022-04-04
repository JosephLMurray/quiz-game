const gameData = [
    {question: 'What does JSON stand for 1',  possibles: ['JavaScript Object Notation', 'whatever', 'yep', 'you know it'], answer: 'JavaScript Object Notation'},
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

var question = document.getElementById("questionField");
var answerFields = Array.from(document.getElementsByClassName("answerField"));
var poss1 = document.getElementById("poss1");
var poss2 = document.getElementById("poss2");
var poss3 = document.getElementById("poss3");
var poss4 = document.getElementById("poss4");
var timerText = document.getElementsByClassName("timer-text");
var message = document.getElementById("message");
var startButton = document.getElementById("start-button");
var scoresButton = document.getElementById("scores");
var returnButton = document.getElementById("return-button");
var playerName = document.getElementById("playerName");
var playerScore = document.getElementById("playerScore");
var timer = document.getElementById("timer-count");
let currentQuestion;
let timeInterval;
let timeLeft = 60;

//starts game
startButton.addEventListener("click", function(event){
    //prevents default navigation
    event.preventDefault();
    //start timer
    countdown();
    //creates game question and options
    gameUpdate();
 });


const gameUpdate = () => {
    if (gameData.length !== 0) {
        selectQuestion();
        populateQuestion();
        populatePossibles();    
    } else if (gameData.length === 0) {
    logHighScore();
    location.reload();
    };
};

const checkAnswer = (element) =>{
    if (element.innerHTML !== currentQuestion.answer) {
     timeLeft -= 6;
    }
    gameUpdate()
 };

const countdown = () => {
    message.textContent = "Seconds Remaining"
    timeInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
  
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            location.reload();
        }
    }, 1000);
}

const selectQuestion = () => {
    let question = gameData.splice(Math.floor(Math.random()*gameData.length), 1).pop();
    currentQuestion = question;
};

const populateQuestion = () => {
    questionField.textContent = currentQuestion.question;
};

const populatePossibles = () => {
    answerFields.forEach( field => {
        field.textContent = currentQuestion.possibles.splice(Math.floor(Math.random()*currentQuestion.possibles.length), 1);
    });
};

// const checkGameState = () => {

//         logHighScore();
//     }
// }

const logHighScore = () => {
    highScore = [];
    //grab highscores from local storage
    if (localStorage.getItem("highScore") !== null) {
        
        highScore = [JSON.parse(localStorage.getItem("highScore"))];
    };

    //grab time for score
    playerScore = timer.textContent;
    //prompt for player name
    playerName = prompt("Congratulations! Enter your name:");
 
    let scoreObj = {
        pName: playerName.trim(),
        score: playerScore
    };
    //insert into High Scores array of objects
    highScore.unshift(scoreObj);

    //log highScore to local storage
    localStorage.setItem("highScore", JSON.stringify(highScore));

    location.reload;
}