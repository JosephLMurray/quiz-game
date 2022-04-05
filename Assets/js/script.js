const gameData = [
    {question: 'Which of the following is considered a self closing tag?',  possibles: ['img', 'a', 'div', 'body'], answer: 'img'},
    {question: 'Traditonally, how many <h1> elements should an html document have?',  possibles: ['1', '4', '3', 'As many as you want'], answer: '1'},
    {question: 'In JavaScript, ____ is a powerful debugging tool.',  possibles: ['console.log', 'function', 'var', 'const'], answer: 'console.log'},
    {question: 'A ____ request, updates a repository on your local machine.',  possibles: ['pull', 'push', 'clone', 'add'], answer: 'pull'},
    {question: 'What does the acronym JSON stand for?',  possibles: ['JavaScript Object Notation', 'Junior Series Occulus Node', 'Java Station Orange Nectar', 'Jam Station Orientation New'], answer: 'JavaScript Object Notation'},
    {question: 'What does the acronym DRY stand for?',  possibles: ["Don't Repeat Yourself", 'Double Read Yourself', 'Do Right by Yourself', 'DOM Retriever Yellow'], answer: "Don't Repeat Yourself"},
    {question: '"=>" is known as a ____',  possibles: ['Fat arrow', 'Fast Array', 'Slide Right', 'Greater than'], answer: 'Fat arrow'},
    {question: 'In a for loop, [i] refers to what?',  possibles: ['iteration', 'integer', 'incoming', 'insert'], answer: 'iteration'},
    {question: 'What would be the Boolean ( null == undefined ) return?',  possibles: ['True', 'False', 'Undefined', 'NaN'], answer: 'True'},
    {question: 'style.css is added to an HTML document using the _____ tag.',  possibles: ['<link>', '<head>', '<src>', '<let>'], answer: '<link>'}
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

//game loop to check end state and advance the game
const gameUpdate = () => {
    if (gameData.length === 0) {
        logHighScore();
        location.reload();
    };
    selectQuestion();
    populateQuestion();
    populatePossibles(); 
};

//answer check with penalty for incorrect answers
const checkAnswer = (element) =>{
    if (element.innerHTML !== currentQuestion.answer) {
     timeLeft -= 6;
    }
    gameUpdate()
 };

//timer function to reset the game when timer hits 0
const countdown = () => {
    message.textContent = "Seconds Remaining"
    timeInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
  
        if(timeLeft <= 0) {
            clearInterval(timeInterval);
            location.reload();
        }
    }, 1000);
}

//takes a random question object out of the gameData array of objects
const selectQuestion = () => {
    let question = gameData.splice(Math.floor(Math.random()*gameData.length), 1).pop();
    currentQuestion = question;
};

//puts the question from the object onto the page
const populateQuestion = () => {
    questionField.textContent = currentQuestion.question;
};

//puts the answers from the question object into the answer fields in a random order
const populatePossibles = () => {
    answerFields.forEach( field => {
        field.textContent = currentQuestion.possibles.splice(Math.floor(Math.random()*currentQuestion.possibles.length), 1);
    });
};

//collects user data for scoreboard
const logHighScore = () => {
    let highScore = getPrevScores();
    //prompt for player name
    playerName = prompt("Congratulations! Enter your name:");
    //insert into High Scores array of objects
    highScore.push({pName: playerName.trim(), score: timeLeft});
    endGame(highScore);
};

//checks for highScore in local storage or returns an empty array if there isn't one
const getPrevScores = () =>{
    return localStorage.getItem("highScore") !== null ? JSON.parse(localStorage.getItem("highScore")) : []
};

//adds user data to local storage then refreshes the page
const endGame = (highScore) =>{
    //log highScore to local storage
    localStorage.setItem("highScore", JSON.stringify(highScore));
    location.reload;
};