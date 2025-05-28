let buyArray = ['lettuce', 'porkchop', 'pancit canton', 'hot dog'];
let fridgeArray = ['eggs', 'tomatoes', 'potatoes', 'bread'];

const toBuyList = document.getElementById('toBuyList');
const inFridgeList = document.getElementById('inFridgeList');

function displayItems(listArray, parentObject)
{
    parentObject.innerHTML = '';
    for(var i = 0; i < listArray.length; i++){
        var item = document.createElement("li");
        item.textContent = listArray[i];
        parentObject.append(item);
    }
}

function moveItem(fromArray, toArray){
    toArray.push(fromArray.pop());
    displayItems(buyArray, toBuyList);
    displayItems(fridgeArray, inFridgeList);
}

function moveAll(fromArray, toArray){
    let fromArrayLength = fromArray.length;
    for(var i = 0; i < fromArrayLength; i++){
        toArray.push(fromArray.pop());
    }
    displayItems(buyArray, toBuyList);
    displayItems(fridgeArray, inFridgeList);
}

displayItems(buyArray, toBuyList);
displayItems(fridgeArray, inFridgeList);

const toBuyMoveDownButton = document.getElementById('toBuyMoveDown');
toBuyMoveDownButton.addEventListener("click", function(){
    moveItem(buyArray, fridgeArray);
});
const inFridgeMoveUpButton = document.getElementById('inFridgeMoveUp');
inFridgeMoveUpButton.addEventListener("click", function(){
    moveItem(fridgeArray, buyArray);
});

const toBuyMoveToFridgeButton = document.getElementById('toBuyMoveToFridge');
toBuyMoveToFridgeButton.addEventListener("click", function(){
    moveAll(buyArray, fridgeArray);
});
const inFridgeMoveToBuyButton = document.getElementById('inFridgeMoveToBuy');
inFridgeMoveToBuyButton.addEventListener("click", function(){
    moveAll(fridgeArray, buyArray);
});