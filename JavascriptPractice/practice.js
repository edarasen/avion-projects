/*
//LOGICAL OPERATOR CHALLENGE
let username = 'mamamo';
let password = 'bababooey';

function checkCredentials(userInput, passInput){
    if(userInput !== username){
        console.log('Incorrect username!');
    }
    else if(passInput !== password){
        console.log('Incorrect password!');
    }
    else{
        console.log('Log in successful!');
    }
}*/

/*
//TRUTHY FALSY CHALLENGE
var user = {
     name: "Bruce",
     email: null,
     friends: ["Aflred", "Robin"],
     address: {
         street: "123 wayne manor",
         city: "Gotham"
     },
     id: 0,
     nickname: undefined
}

function truthy(val){
    if(val){
        console.log('truthy');
    }
    else{
        console.log('falsy');
    }
}*/

/*
//LETTER GRADING CHALLENGE
function letterGrading(number){
    let letterGrade = "";
   switch(true){
    case (number >= 90 && number <= 100): letterGrade = 'A'; break;
    case (number >= 80 && number <= 89) : letterGrade = 'B'; break;
    case (number >= 70 && number <= 79) : letterGrade = 'C'; break;
    case (number >= 60 && number <= 69) : letterGrade = 'D'; break;
    case (number < 60) : letterGrade = 'F'; break;
    default : letterGrade='Invalid'; break;
   }
    console.log(letterGrade);
}*/


/*
SHOPPING CART CHALLENGE
Description:
You have a shopping cart represented as an array of objects, where each object contains:
name (string)
price (number)
quantity (number)

You need to:
- Calculate the total cost of all items in the cart.
- If the total cost is over $100, apply a 10% discount.
- If any item has a quantity of 0, print "You have items with zero quantity" before doing anything else.
- Finally, print the final total price (after any discount).
*/
/*let cart = [
  { name: "Shirt", price: 25, quantity: 2 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 20, quantity: 0 }
];

function checkOut(cartArray){
    let totalPrice = 0;
    let zeroWarning = false;
    for(let index = 0; index < cartArray.length; index++){
        if(cartArray[index].quantity === 0 && zeroWarning === false)
        {
            console.log('You have items with zero quantity');
            zeroWarning = true;
        }
        totalPrice += cartArray[index].price * cartArray[index].quantity;
    }
    if(totalPrice >= 100){
        let discountApplied = totalPrice* 0.9;
        console.log(`Congrats! You got a 10% Discount!`);
        console.log(`Total Price: ${discountApplied}`);
    }
    else{
        let discountFloor = 100-totalPrice;
        console.log(`Total Price: ${totalPrice}`);
        console.log(`Add ${discountFloor} for a 10% discount!`);
    }
    
}

checkOut(cart);*/

/*You have an object that stores the number of fruits in a basket. Check if you have at least 1 banana and at least 3 apples. If you do, print "You're ready for the smoothie!". Otherwise, print "Missing ingredients."*/

/*let basket = {
  apples: 4,
  bananas: 1,
  oranges: 2
};
function checkBasket(basketObj){
    if(basketObj.bananas >= 1 && basketObj.apples >= 3){
        console.log("You're ready for the smoothie!");
    }
    else
    {
        console.log("Missing ingredients.");   
    }
}

checkBasket(basket);*/

/*rock paper scissors*/
/*const validMoves = ['Rock', 'Paper', 'Scissors'];
function rockPaperScissors(playerOneMove, playerTwoMove){
    if(validMoves.includes(playerOneMove) && validMoves.includes(playerTwoMove))
    {
        if(playerOneMove === playerTwoMove)
        {
            console.log("Draw");
        }
        else{
            if(playerOneMove === 'Rock' && playerTwoMove === 'Scissors' || playerOneMove === 'Paper' && playerTwoMove === 'Rock' || playerOneMove === 'Scissors' && playerTwoMove === 'Paper')
            {
                console.log("Player One Wins");
            }
            else{
                console.log("Player Two Wins");
            }
        }
    }
    else{
        console.log("Invalid Inputs");
    }
}

rockPaperScissors('paper', 'paper'); //draw
rockPaperScissors('Rock', 'Paper'); // two
rockPaperScissors('Paper', 'Rock'); // one
rockPaperScissors('Scissors', 'Paper'); // one
rockPaperScissors('Paper', 'Scissors'); // two
rockPaperScissors('Scissors', 'Rock'); // two
rockPaperScissors('Rock', 'Scissors'); // one
rockPaperScissors('Paper', 'Paper'); //draw */

/*function blueRedTeamSplit(numOfPlayers){
    for(var i = 1; i <= numOfPlayers; i++)
    {
        if(i % 2 === 0)
        {
            console.log(`Player ${i} is on Blue Team`);
        }
        else{
            console.log(`Player ${i} is on Red Team`);
        }
    }
}

blueRedTeamSplit(10);*/

/*const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

function bouncerCheck(registerArray){
    for(var i = 0; i < registerArray.length; i++){
        var title = '';
        registerArray[i].gender === 'female' ? title = 'Ms./Mrs.' : title = 'Mr.';
        if(registerArray[i].age < 18){
            console.log(`Please come back when you're 18 yrs old and above, ${title} ${registerArray[i].name} ${registerArray[i].lastname}`);
        }
        else
        {
            console.log(`Welcome to the club, ${title} ${registerArray[i].name} ${registerArray[i].lastname}`);
        }
    }
}

bouncerCheck(nightClubRegister);*/

/*const temperatures = [22, 27, 30, 24, 25, 28, 21];

function temperatureTracker(temperatureArray){
    let hotDays = 0;
    let sum = 0;
    for(var i = 0; i < temperatureArray.length; i++){
        if(temperatureArray[i] > 25){
            hotDays ++;
        }
        sum += temperatureArray[i];
    }
    console.log(`Hot Days (above 25°C): ${hotDays}`);

    let avg = sum/temperatureArray.length;
    let roundedAvg = Math.round(avg * 10)/10
    console.log(`Average temperature : ${roundedAvg} °C`);
}

temperatureTracker(temperatures);*/

/*class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.maxHealth = health;
    this.armorClass = strength + 5;
    this.strength = strength;
    this.isAlive = true;
    this.healingCharges = 4;
 }

  attack(target) {
    if(target.isAlive === true && this.isAlive === true){
        var attackRoll = Math.ceil(Math.random()*20) + this.strength;
        if(attackRoll >= target.armorClass){
            var healThreshold = Math.floor(this.health * 0.3);
            target.health -= this.strength;
            console.log(`${this.name} rolls ${attackRoll} and beats ${target.name}'s AC of ${target.armorClass}`);
            console.log(`${this.name} attacks ${target.name} for ${this.strength} damage!`);
            if(target.health <=  healThreshold && target.healingCharges !== 0){
                target.heal();
            }
            if(target.health <= 0){
                target.health = 0;
                target.isAlive = false;
            }
        }
        else{
            console.log(`${this.name} rolls ${attackRoll} and does not beat ${target.name}'s AC of ${target.armorClass}`);
            console.log(`${this.name}'s attack misses.`);
        }
        console.log("---");
    }
  }
  heal(){
    if(this.healingCharges > 0){
        var healAmount = Math.ceil(Math.random()*4) + 4;
        var projectedHeal = this.health + healAmount;
        if(projectedHeal > this.maxHealth)
        {
            this.health = this.maxHealth;
        }
        else{
            this.health += healAmount;
        }
        this.healingCharges --;
        console.log(`${this.name} recovers ${healAmount} HP! Remaining healing charges : ${this.healingCharges}`);
        console.log("---");
    }
  }
  status() {
    let status;
    if(this.isAlive === true){
        status = 'alive';
    }
    else
    {
        status = 'dead';
    }
    console.log(`${this.name} has ${this.health} and is ${status}`);
    console.log("---");
  }
}

// Create two characters
const hero = new Character("Knight", 30, 10);
const enemy = new Character("Orc", 20, 5);

// Sample usage
hero.attack(enemy);
enemy.status();  // Orc has 10 health and is alive
enemy.attack(hero);
hero.status();
hero.attack(enemy);
enemy.status();
enemy.attack(hero);
hero.status();

hero.attack(enemy);
enemy.status();
enemy.attack(hero);
hero.status();
hero.attack(enemy);
enemy.status();
enemy.attack(hero);
hero.status();*/

/*function sendText(firstName, lastName){
    console.log(`No classes today, ${firstName} ${lastName}`);
}
sendText('Arrius', 'Eleazar');
sendText('Nettle', 'Deverel');
sendText('Chroma', 'Cassian');
sendText('Finnegan', 'Dalton');
sendText('Trevor', 'Dalton');
sendText('Marian', 'Alzona');*/

// ul li name, superpower
/*const superheroArray = [
    {name: "Superman",      superpower: "Super Strength",   ultimate: "Kryptonian Endurance"},
    {name: "Batman",        superpower: "Super Rich",       ultimate: "Cutting Edge Weaponry"},
    {name: "Wonder Woman",  superpower: "Super Lasso",      ultimate: "Lasso of Truth"},
    {name: "The Flash",     superpower: "Super Speed",      ultimate: "Tornado"},
    {name: "Green Lantern", superpower: "Super Ring",       ultimate: "Conjured Constructs"}
];
const listItemArray = [];
const ultimateButtonArray = [];
const superheroUl = document.getElementById('superheroList');
function displayHeroes()
{
    for(var i = 0; i < superheroArray.length; i++){
        var itemDiv = document.createElement("li");
        var item = document.createElement("p");
        item.textContent = `Hero : ${superheroArray[i].name} | Superpower : ${superheroArray[i].superpower} `;
        listItemArray.push(item);

        var button = document.createElement("button");
        button.textContent = "show ultimate";
        button.addEventListener("click", showUltimate);
        ultimateButtonArray.push(button);
        
        itemDiv.append(item);
        itemDiv.append(button);
        superheroUl.append(itemDiv);
    }
}

function showUltimate(){
    var buttonIndex = findObjIndex(this, ultimateButtonArray);
    var listItem = listItemArray[buttonIndex];
    var contentArray = listItem.textContent.split('|');
    if(!contentArray[2]){
        listItem.textContent += `| Ultimate : ${superheroArray[buttonIndex].ultimate}`;
    }
    else{
        contentArray.pop();
        listItem.textContent = `${contentArray.join('|')}`;        
    }
}

function findObjIndex(findObj, searchArray){
    for(var i = 0; i < searchArray.length; i++){
        if(findObj === searchArray[i]){
            return i;
        }
    }
}

displayHeroes();*/

//press enter, on click
/*const img = document.getElementById("img");
const key = document.getElementById("key");
img.addEventListener("click", function() {
    if (img.src === 'https://media.discordapp.net/attachments/1323722725155672105/1360834665161691277/187958c4-8e03-455f-bc70-1e89d8d0887b.png?ex=6837e30b&is=6836918b&hm=55de5e87ec5e8687c2eaefcdb1ab78e64ccc2451f7880a830a551777a869517f&=&format=webp&quality=lossless&width=930&height=930'){
        img.src = 'https://media.discordapp.net/attachments/1323722725155672105/1354747609113296956/8b38741b-c939-4c23-8a53-1c2af8060eba.png?ex=68382788&is=6836d608&hm=c1f635d47730eb731a0544be38a4e42e88096b2b672ea5114ecb181e2d7ba0f6&=&format=webp&quality=lossless&width=930&height=930';
    }
    else{
        img.src = 'https://media.discordapp.net/attachments/1323722725155672105/1360834665161691277/187958c4-8e03-455f-bc70-1e89d8d0887b.png?ex=6837e30b&is=6836918b&hm=55de5e87ec5e8687c2eaefcdb1ab78e64ccc2451f7880a830a551777a869517f&=&format=webp&quality=lossless&width=930&height=930';
    }
});
document.addEventListener("keydown", (e) => {
    if(e.code === 'Enter'){
        key.textContent += `${e.code} `;
    }
})*/

// Use an array of objects to store questions.
// Each object should contain:
// A question (string)
// A choices array (3 options)
// The correctAnswer (string or index)
// Show one question at a time.
// When the user selects an answer, move to the next question.
// After the last question, show:
// “You got X out of 3 correct!”
// Allow restarting the quiz after completion.

/*const question = document.getElementById('question');
const choices = document.getElementById('choices');
const progress = document.getElementById('progress');
const restart = document.getElementById('restart');

let questionIndex = 0;
let rightAnswerCount = 0;

const questionsArray =[
    {question: 'What is 1 + 1?', choicesArray: ['1', '2', '0'], correctAnswer: 1},
    {question: 'What is 3 + 4?', choicesArray: ['7', '8', '9'], correctAnswer: 0},
    {question: 'What is 10 + 12?', choicesArray: ['21', '24', '22'], correctAnswer: 2}
];

window.addEventListener("load", loadNextQuestion);

function loadNextQuestion(){
    question.textContent = questionsArray[questionIndex].question;
    choices.innerHTML = '';
    questionsArray[questionIndex].choicesArray.forEach(displayChoice);
    updateQuestionCount();
}
function displayChoice(choice){
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function(){
        checkAnswer(this);
    })
    choices.append(choiceButton);
}
function checkAnswer(choiceButton){
    const answerArray = questionsArray[questionIndex].choicesArray;
    const rightAnswerIndex = questionsArray[questionIndex].correctAnswer;
    var choiceText = choiceButton.textContent;
    if( answerArray.indexOf(choiceText) === rightAnswerIndex ){
        rightAnswerCount++;
    }
    questionIndex++;
    if(questionIndex < questionsArray.length)
    {
        loadNextQuestion();
    }
    else{
        questionIndex = questionsArray.length-1;
        choices.style.display = 'none';
        progress.style.display = 'none';
        showFinalScore();
    }
}
function updateQuestionCount(){
    progress.textContent = `Question ${questionIndex+1} of ${questionsArray.length}`;
}
function showFinalScore(){
    question.textContent = `You got ${rightAnswerCount} out of ${questionsArray.length} correct!`
    restart.style.display = 'block';
}

restart.addEventListener('click', restartQuiz);

function restartQuiz(){
    questionIndex = 0;
    rightAnswerCount = 0;
    loadNextQuestion();
    restart.style.display = 'none';
    choices.style.display = 'inline';
    progress.style.display = 'block';
}*/

/*function addressMaker(city, street){
    country = 'Philippines';
    var newAddress = {city, street, country};
    return newAddress;
}
const testAddress = addressMaker('Quezon','OrtigasAvenue');
var {city, street, country} = testAddress;
console.log(`${city}, ${street}. ${country}`);*/

/*const students = [
    {name : 'Manny', city : 'Manila'},
    {name : 'Jose', city : 'Intramuros'},
    {name : 'Ana', city : 'Mandaluyong'}
];

for (const student of students){
    var{name, city} = student;
    console.log(`${name} lives in ${city}`);
}*/

/*function buyFromStore(food = 'something'){
    console.log(`I'm going to buy ${food} from the store`); 
}
buyFromStore('chicharon');
buyFromStore();*/

/*class Player{
    constructor (name, country){
        this.name = name;
        this.country = country;
    }

    playerCountry(){
        console.log(`${this.name} is from ${this.country}`);
    }
}

class BasketballPlayer extends Player{
    constructor(name, country, age){
        super(name, country);
        this.age = age;
    }
    basketballPlayerAge(){
        console.log(`${this.name} is ${this.age} years old and knows how to play basketball`);
    }
}

var red = new Player('Red', 'The Country');
red.playerCountry();

var zagreus = new BasketballPlayer('Zagreus', 'House of Hades', 300);
zagreus.playerCountry();
zagreus.basketballPlayerAge();*/

