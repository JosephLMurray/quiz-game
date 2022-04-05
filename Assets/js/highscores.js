var returnButton = document.getElementById("return-button");
var sContainer = document.getElementById("score-container");
//grab highScore from local storage
var highScores = []; 


const checkHS = () => {
    highScores = localStorage.getItem("highScore");
    console.log(highScores);
    if (highScores !== null ) {
        highScores = JSON.parse(highScores);
    }
    console.log(highScores);
};

//sort high scores from high to low
const sortScores = () => {
    highScores.sort((a,b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0))
    console.log(highScores);
};

//TODO: trim list to 10 or less
const trimScores = () => {
    console.log(highScores);
    if (highScores.length > 10) {
        highScores = highScores.slice(0, 9);
    };
};

var headers = ['Name', 'Score'];

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

const scoreBoard = () => {
    checkHS();
    sortScores();
    trimScores();
    generateScores();
}

window.onload = scoreBoard();