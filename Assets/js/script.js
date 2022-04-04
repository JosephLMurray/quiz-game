const questions = [
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
    checkGameState();  
    selectQuestion();
    populateQuestion();
    populatePossibles();    
};

const checkAnswer = (element) =>{
    if (element.innerHTML !== currentQuestion.answer) {
     timeLeft -= 2;
    }
    gameUpdate()
 };

const countdown = () => {
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
    let question = questions.splice(Math.floor(Math.random()*questions.length), 1).pop();
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

const checkGameState = () => {
    if (questions.length === 0) {
        logHighScore();
    }
}

const logHighScore = () => {
    highScore = [];
    console.log(highScore);
    //grab highscores from local storage
    if (localStorage.getItem("highScore") !== null) {
        highScore = localStorage.getItem("highScore", JSON.parse(highScore));
    };
    //grab time for score
    playerScore = timer.textContent;
    console.log(playerScore);
    //prompt for player name
    playerName = prompt("Congratulations! Enter your name:");
    console.log(playerName);
 
    let scoreObj = {
        pName: playerName.trim(),
        score: playerScore
    };
    console.log(scoreObj);
    //insert into High Scores array of objects
    highScore.unshift(scoreObj);
    //sort from high to low
    highScore.sort((a, b) => {
        return a.score - b.score;
    });
    //trim to top 10 scores
    if (highScore.length > 10) {
    highScore = highScore.slice(0, 9);
    };
    //log highScore to local storage
    localStorage.setItem("highScore", JSON.stringify(highScore));

    location.reload;
}