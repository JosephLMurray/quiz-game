var returnButton = document.getElementById("return-button");
var playerName = document.getElementById("playerName");
var playerScore = document.getElementById("playerScore");

returnButton.addEventListener("click", function() {
    location.href= "../index.html";
});

highScore = [JSON.parse(localStorage.getItem("highScore"))];

highScore.sort((a, b) => {
    return a.score - b.score;
});

//trim to top 10 scores
if (highScore.length > 10) {
    highScore = highScore.slice(0, 9);
    };

//TODO: grab highScore from local storage

//TODO: sort high scores from high to low

//TODO: trim list to 10 or less

//TODO: 