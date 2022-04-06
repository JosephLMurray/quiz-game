var returnButton = document.getElementById("return-button");
var sContainer = document.getElementById("score-container");
var resetButton = document.getElementById("resetButton");
var headers = ['Name', 'Score'];
var highScores = []; 

//grab highScore from local storage
const checkHS = () => {
    highScores = localStorage.getItem("highScore");
    if (highScores !== null ) {
        highScores = JSON.parse(highScores);
    }
};

//sort highScores from high to low
const sortScores = () => {
    highScores.sort((a,b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0))
};

//Trim scores list to 10 or less
const trimScores = () => {
    if (highScores.length > 10) {
        highScores = highScores.slice(0, 9);
    };
};

//creates table from score array of objects
const generateScores = () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let tableText = document.createTextNode(headerText);
        header.appendChild(tableText);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    highScores.forEach((score) => {
        let tableRow = document.createElement('tr');
        
        Object.values(score).forEach(text => {
            let cell = document.createElement('td');
            let tableText = document.createTextNode(text);
            cell.appendChild(tableText);
            tableRow.appendChild(cell);
        })
        table.appendChild(tableRow);
    });
    sContainer.appendChild(table);
};

//calls all the programs to create the High Scores
const scoreBoard = () => {
    checkHS();
    sortScores();
    trimScores();
    generateScores();
}

//generates the scores on page load
window.onload = scoreBoard();

//listener to clear local storage and refresh page
resetButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    location.reload();
});