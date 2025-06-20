const winningPositionsArray = [
    //horizontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonals
    [0, 4, 8],
    [2, 4, 6]
];

const boxArray = document.querySelectorAll(".single-box");
let moveHistory = [];
let xTurn;
let showMoveIndex;

const firstPlayerSection = document.getElementById('first-player-section');
const xButton = document.getElementById('x-button');
const oButton = document.getElementById('o-button');
const turnIndicatorText = document.getElementById('turn-indicator-text');

for(const box of boxArray){
    box.addEventListener("click", fillBox);
}

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener('click', restartGame);

const previousButton = document.getElementById('previous-button');
previousButton.addEventListener('click', showPreviousMove);
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', showNextMove);


function setFirstPlayer(bool){
    xTurn = bool;
    firstPlayerSection.classList.toggle("hidden");
    updateTurnIndicatorText();
}
xButton.addEventListener("click", function(){setFirstPlayer(true)});
oButton.addEventListener("click", function(){setFirstPlayer(false)});

function fillBox(){
    let boxElement = this;
    //Checks if box can be occupied
    let occupied = boxElement.classList.contains("x") || boxElement.classList.contains("o");
    if (!occupied){
        //Places an X or O depending on xTurn
        xTurn ? boxElement.classList.add("x") : boxElement.classList.add("o");
        //End the Turn
        endTurn();
    } 
}
function endTurn(){
    //Store current board state
    saveBoardState();
    //Check for win condition
    let endGame = checkWinPositions();
    if(!endGame){
        //Passes turn to X or O depending on who is currently playing
        xTurn = !xTurn;
        //Change current turn text
        updateTurnIndicatorText();
    }
}

function saveBoardState(){
    let boardState = [];
    let rowCount = 3;
    let columnCount = 3;
    let index = 0;
    for(let i = 0; i < rowCount; i++){
        let row = [];
        for(let j = 0; j < columnCount; j++){
            if(boxArray[index].classList.contains('x')){
                row.push('x');
            }
            else if(boxArray[index].classList.contains('o')){
                row.push('o');
            }
            else{
                row.push('-');
            }
            index++;
        }
        boardState.push(row);
    }
    moveHistory.push(boardState);
}

function updateTurnIndicatorText(){
    let currentTurn;
    xTurn ? currentTurn = 'Purple Bird' : currentTurn = 'Green Bird';
    turnIndicatorText.textContent = `${currentTurn}'s turn!`;
}

function checkWinPositions(){
    let lastMove = moveHistory[moveHistory.length-1];
    let flattenedMoveArray = genFlatMoveArray(lastMove);

    let win = false;
    let winningLine;
    for(const positions of winningPositionsArray){
        let firstIndex = positions[0];
        let secondIndex = positions[1];
        let thirdIndex = positions[2];
        if(flattenedMoveArray[firstIndex] === flattenedMoveArray[secondIndex] 
            && flattenedMoveArray[firstIndex] === flattenedMoveArray[thirdIndex] 
            && flattenedMoveArray[firstIndex] !== '-'){
            win = true;
            winningLine = positions;
        }
    }
    if (win === true)
    {
        // disable click events of boxes
        for(const box of boxArray){
            box.removeEventListener("click", fillBox);
        }
        // highlight winning positions
        boxArray[winningLine[0]].classList.add('win');
        boxArray[winningLine[1]].classList.add('win');
        boxArray[winningLine[2]].classList.add('win');
        if(boxArray[winningLine[0]].classList.contains('x')){
            turnIndicatorText.textContent = `Purple Bird WINS!`;
        }
        else if(boxArray[winningLine[0]].classList.contains('o')){
            turnIndicatorText.textContent = `Green Bird WINS!`;
        }
        // show previous and next buttons
        showMoveIndex = moveHistory.length-1;
        previousButton.classList.toggle('hidden');
        return true;
    }
    //game ends in a draw
    else if(flattenedMoveArray.indexOf('-') === -1){
        for(const box of boxArray){
            box.removeEventListener("click", fillBox);
        }
        turnIndicatorText.textContent = `DRAW!`;
        // show previous and next buttons
        showMoveIndex = moveHistory.length-1;
        previousButton.classList.toggle('hidden');
        return true;
    }
    return false;
}
function genFlatMoveArray(array){
    let flattenedMoveArray = [];
    for(let i = 0; i < array.length; i++)
    {
        flattenedMoveArray = flattenedMoveArray.concat(array[i]);
    }
    return flattenedMoveArray;
}
function clearBoard(){
    for(const box of boxArray){
        box.classList.remove('x');
        box.classList.remove('o');
        box.classList.remove('win');
    }
}
function restartGame(){
    showMoveIndex = 0;
    clearBoard();
    for(const box of boxArray){
        box.addEventListener("click", fillBox);
    }
    moveHistory = [];
    firstPlayerSection.classList.toggle("hidden");
    hideMoveButtons();
}

function hideMoveButtons(){
    previousButton.classList.add('hidden');
    nextButton.classList.add('hidden');
}
function showPreviousMove(){
    showMoveIndex--;
    if(showMoveIndex > 0){
        nextButton.classList.remove('hidden');
    }
    else{
        previousButton.classList.toggle('hidden');
    }
    updateBoardState();
}
function showNextMove(){
    showMoveIndex++;
    if(showMoveIndex < moveHistory.length-1){
        previousButton.classList.remove('hidden');
    }
    else{
        nextButton.classList.toggle('hidden');
    }
    updateBoardState();
}

function updateBoardState()
{
    clearBoard();
    let move = moveHistory[showMoveIndex];
    let flattenedMoveArray = genFlatMoveArray(move);
    for(let i = 0; i < boxArray.length; i++){
        if(flattenedMoveArray[i] === 'x'){
            boxArray[i].classList.add('x');
        }
        else if(flattenedMoveArray[i] === 'o'){
            boxArray[i].classList.add('o');
        }
    }
}

(async function quoteRefresh(){
    let randomJoke = await fetch('https://official-joke-api.appspot.com/random_joke');
    let joke = await randomJoke.json();
    document.getElementById('joke-setup').textContent = joke.setup;
    document.getElementById('joke-punchline').textContent = joke.punchline;
    setTimeout(quoteRefresh, 10000);
})();