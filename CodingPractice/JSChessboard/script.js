const squares = Array.from(document.querySelectorAll('.grid div'));

function chessboardColors(squaresArray){
    let index = 0;
    for(var i = 0; i < 8; i++){
        if(i % 2 === 0 ){
            for(var j = 0; j < 8; j++){
                j % 2 === 0 ? squaresArray[index].style.background = 'black' : squaresArray[index].style.background = 'gray';
                index++;
            }
        }
        else{
            for(var j = 0; j < 8; j++){
                j % 2 === 0 ? squaresArray[index].style.background = 'gray' : squaresArray[index].style.background = 'black';
                index++;
            }
        }
    }
}

/* ALTERNATIVE
function chessboardColors(squaresArray){
    let index = 0;
    let evenRow, colorOne, colorTwo;
    for(var i = 0; i < 8; i++){
        i % 2 === 0 ? evenRow = true : evenRow = false;
        if(evenRow){
            colorOne = 'black';
            colorTwo = 'gray';
        }
        else{
            colorOne = 'gray';
            colorTwo = 'black';
        }
        for(var j = 0; j < 8; j++){
            j % 2 === 0 ? squaresArray[index].style.background = colorOne : squaresArray[index].style.background = colorTwo;
            index++;
        }
    }
}*/

chessboardColors(squares);