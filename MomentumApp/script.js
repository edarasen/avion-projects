//GENERAL FUNCTIONS
function toggleHidden(hideObj){
    hideObj.classList.toggle('hidden');
}

function initial(){
    checkSessionStorage();
    updateTime();
    updateDate();
    randomQuote();
}

window.addEventListener("load", initial);

function checkSessionStorage(){
    if (sessionStorage.getItem("username")){
        username = sessionStorage.getItem("username");
        updateGreeting(username);
    }
    else{
        toggleHidden(nameInputFormDiv);
    }
    if(sessionStorage.getItem("focus")){
        focus = sessionStorage.getItem("focus");
        updateFocus(focus);
    }
    else{
        toggleHidden(focusInputFormDiv);
    }
    if(sessionStorage.getItem("darkMode") !== undefined){
        darkMode = (sessionStorage.getItem("darkMode") === 'true');
        updateDarkMode(darkMode);
    }
    if(sessionStorage.getItem("taskListArray")){
        taskListArray = sessionStorage.getItem("taskListArray").split(',');
        updateTaskUl();
    }
    if(sessionStorage.getItem("struckTaskListArray")){
        struckTaskListArray = sessionStorage.getItem("struckTaskListArray").split(',');
        updateTaskUl();
    }
}

//US 1 : I WANT TO PUT MY NAME ON THE HOMEPAGE
//INPUT TYPE HIDDEN
const nameInputFormDiv = document.getElementById('name-input-form-div');

let username;

function saveNameInput(event){
    event.preventDefault();
    username = document.forms['name-input-form']['name'].value || 'user';
    updateGreeting(username);
    toggleHidden(nameInputFormDiv);
    sessionStorage.setItem("username", username);
}

//US 3 : I WANT TO SEE A GREETING WITH MY INPUTTED NAME ON THE HOMEPAGE
function updateGreeting(username){
    const greetingText = document.getElementById('greeting');
    const today = new Date();
    let h = today.getHours();
    let greeting;
    if(h <= 11){
        greeting = `Good morning, ${username}`;
    }
    else if (h <= 18){
        greeting = `Good afternoon, ${username}`;
    }
    else{
        greeting = `Good evening, ${username}`;
    }
    greetingText.textContent = greeting;
    
}

document.forms['name-input-form']['name'].addEventListener("keydown", function(e){
    if(e.key == 'Enter'){
        saveNameInput(e);
    }
});
const xModalButton = document.getElementById('x-modal');
xModalButton.addEventListener("click", function(e){
    saveNameInput(e);
});


//US 2 : I WANT TO SEE THE CURRENT TIME ON THE HOMEPAGE
function updateTime(){
    const today = new Date();
    let h = today.getHours();
    let ampmText;
    if(h <= 12){
        ampmText = "AM";
    }
    else{
        h -= 12;
        ampmText = "PM";
    }
    let m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById('time').textContent = `${h} : ${m} ${ampmText}`;
    setTimeout(updateTime, 1000); //100% uptime
}

function updateDate(){
    const today = new Date();
    let year = today.getFullYear();	//Get year as a four digit number (yyyy)
    let month = today.getMonth();	//Get month as a number (0-11)
    let monthText;
    switch(month){
        case 0: monthText='January'; break;
        case 1: monthText='February'; break;
        case 2: monthText='March'; break;
        case 3: monthText='April'; break;
        case 4: monthText='May'; break;
        case 5: monthText='June'; break;
        case 6: monthText='July'; break;
        case 7: monthText='August'; break;
        case 8: monthText='September'; break;
        case 9: monthText='October'; break;
        case 10: monthText='November'; break;
        case 11: monthText='December'; break;
    }
    let date = today.getDate();	    //Get day as a number (1-31)
    let dayWeek = today.getDay();   //Get weekday as a number (0-6)
    let dayWeekText;
    switch(dayWeek){
        case 0: dayWeekText='Sunday'; break;
        case 1: dayWeekText='Monday'; break;
        case 2: dayWeekText='Tuesday'; break;
        case 3: dayWeekText='Wednesday'; break;
        case 4: dayWeekText='Thursday'; break;
        case 5: dayWeekText='Friday'; break;
        case 6: dayWeekText='Saturday'; break;
    }
    document.getElementById('date').textContent = `${dayWeekText}  ${monthText} ${date}, ${year}`;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//US 4 : I WANT TO ADD MY MAIN FOCUS FOR TODAY ON THE HOMEPAGE
const focusInputFormDiv = document.getElementById('focus-input-form');
const focusDiv = document.getElementById(`focus-div`);

let focus;

function saveFocusInput(event){
    event.preventDefault();
    focus = document.forms['focus-input-form']['focus'].value;
    updateFocus(focus);
    toggleHidden(focusInputFormDiv);
    sessionStorage.setItem("focus", focus);
}

function updateFocus(focus){
    const focusDiv = document.getElementById(`focus-div`);
    toggleHidden(focusDiv);
    const focusText = document.getElementById('focus-text');
    focusText.textContent = `${focus}`;
}

function openFocusForm()
{
    toggleHidden(focusDiv);
    toggleHidden(focusInputFormDiv);
    document.forms['focus-input-form']['focus'].value = '';
}

document.forms['focus-input-form']['focus'].addEventListener("keydown", function(e){
    if(e.key == 'Enter' && document.forms['focus-input-form']['focus'].value !== ''){
        saveFocusInput(e);
    }
    else if(e.key == 'Enter' && document.forms['task-input-form']['task'].value === ''){
        e.preventDefault();
        alert("Please don't enter empty strings");
    }
});
const focusEditButton = document.getElementById('focus-edit-button');
focusEditButton.addEventListener("click", function(e){
    openFocusForm(e);
});

//US 5 : I WANT TO SEE A RANDOM QUOTE

const quoteInputFormDiv = document.getElementById('quote-input-form');
const quoteDiv = document.getElementById(`quote-div`);

let quotesArray = [
    "\"I have a motto on my bedroom wall: 'Obstacles are what you see when you take your eye off the goal.' Giving up is not my style. I just want to do something that's worthwhile.\" - Chris Burke",
    "\"A year from now you may wish you had started today.\" - Karen Lamb",
    "\"The rung of a ladder was never meant to rest upon, but only to hold a man's foot long enough to enable him to put the other somewhat higher.\" - Thomas Henry Huxley",
    "\"I don't care how much power, brilliance or energy you have, if you don't harness it and focus it on a specific target, and hold it there, you're never going to accomplish as much as your ability warrants.\" - Zig Ziglar",
    "\"Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.\" - Marie Curie",
    "\"One of the secrets of life is to make stepping stones out of stumbling blocks.\" - Jack Penn",
    "\"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.\" - Jimmy Dean"
];

function updateQuote(quote){
    const quoteText = document.getElementById('quote-text');
    quoteText.textContent = `${quote}`;
}

function randomQuote(){
    let randomIndex = Math.floor(Math.random()*quotesArray.length);
    let randomQuote = quotesArray[randomIndex];
    updateQuote(randomQuote);
}

const randomQuoteButton = document.getElementById('random-quote-button');
randomQuoteButton.addEventListener("click", randomQuote);

//US 7 : I WANT TO ADD A NEW QUOTE
function saveQuoteInput(event){
    event.preventDefault();
    quote = document.forms['quote-input-form']['quote'].value;
    quotesArray.push(quote);
    updateQuote(quote);
    toggleHidden(quoteInputFormDiv);
    toggleHidden(quoteDiv);
}

function openQuoteForm(){
    toggleHidden(quoteDiv);
    toggleHidden(quoteInputFormDiv);
    document.forms['quote-input-form']['quote'].value = '';
}

document.forms['quote-input-form']['quote'].addEventListener("keydown", function(e){
    if(e.key == 'Enter' && document.forms['quote-input-form']['quote'].value !== ''){
        saveQuoteInput(e);
    }
    else if(e.key == 'Enter' && document.forms['task-input-form']['task'].value === ''){
        e.preventDefault();
        alert("Please don't enter empty strings");
    }
});

const addQuoteButton = document.getElementById('add-quote-button');
addQuoteButton.addEventListener("click", openQuoteForm);

//US 6 : I WANT TO ADD A TO DO LIST
const taskInputFormDiv = document.getElementById('task-input-form');
const taskDiv = document.getElementById('task-div');
const taskUl = document.getElementById('task-ul');

let taskListArray = [];
let struckTaskListArray = [];
let taskListCheckBoxes = [];

function saveTaskInput(event){
    event.preventDefault();
    task = document.forms['task-input-form']['task'].value;
    taskListArray.push(task);
    sessionStorage.setItem('taskListArray', taskListArray);
    updateTaskUl();
}

function updateTaskUl(){
    taskUl.innerHTML='';
    taskListCheckBoxes = [];
    for(var i=0; i < taskListArray.length; i++){
        const taskLi = document.createElement('li');
        taskLi.classList.add('todo-task');
        const taskCheckBox = document.createElement('input');
        taskCheckBox.setAttribute('type', 'checkbox');
        taskCheckBox.addEventListener("click", toggleStrikeOutTask)
        taskListCheckBoxes.push(taskCheckBox);
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskListArray[i];
        taskLi.append(taskCheckBox);
        taskLi.append(taskSpan);
        taskUl.append(taskLi);
    }
    for(var i=0; i < struckTaskListArray.length; i++){
        const taskLi = document.createElement('li');
        taskLi.classList.add('todo-task');
        taskLi.classList.add('strikeout');
        const taskCheckBox = document.createElement('input');
        taskCheckBox.setAttribute('type', 'checkbox');
        taskCheckBox.checked = true;
        taskCheckBox.addEventListener("click", toggleStrikeOutTask)
        taskListCheckBoxes.push(taskCheckBox);
        taskCheckBox.setAttribute
        const taskSpan = document.createElement('span');
        taskSpan.textContent = struckTaskListArray[i];
        taskLi.append(taskCheckBox);
        taskLi.append(taskSpan);
        taskUl.append(taskLi);
    }
}

document.forms['task-input-form']['task'].addEventListener("keydown", function(e){
    if(e.key == 'Enter' && document.forms['task-input-form']['task'].value !== ''){
        saveTaskInput(e);
        document.forms['task-input-form']['task'].value = '';
    }
    else if(e.key == 'Enter' && document.forms['task-input-form']['task'].value === ''){
        e.preventDefault();
        alert("Please don't enter empty strings");
    }
});
const addTaskButton = document.getElementById('add-task-button');
addTaskButton.addEventListener("click", function(){
    toggleHidden(taskInputFormDiv);
    changeTaskButtonIcon();
});

function changeTaskButtonIcon(){
    let parentDir;
    if(darkMode){
        parentDir = 'resources/dark/';
    }
    else{
        parentDir = 'resources/light/';
    }
    if(document.getElementById('task-input-form').classList.contains('hidden')){
        document.getElementById('add-task-button').src = parentDir+'add-icon.svg';
    }
    else{
        document.getElementById('add-task-button').src = parentDir+'cancel-icon.svg';
    }
}

// ADDTL : I WANT TO STRIKE OUT A TASK I'VE FINISHED DOING
function toggleStrikeOutTask(){
    var listIndex = taskListCheckBoxes.indexOf(this);
    var listObjectsArray = document.querySelectorAll('.todo-task');
    if(listObjectsArray[listIndex].classList.contains('strikeout')){
        var struck = listIndex - taskListArray.length;
        var struckLiContent = struckTaskListArray.splice(struck, 1);
        taskListArray.push(struckLiContent[0]);
    }
    else
    {
        var liContent = taskListArray.splice(listIndex, 1);
        struckTaskListArray.push(liContent[0]);

    }
    listObjectsArray[listIndex].classList.toggle('strikeout');
    sessionStorage.setItem('taskListArray', taskListArray);
    sessionStorage.setItem('struckTaskListArray', struckTaskListArray);
    updateTaskUl();
}

// ADDTL : I WANT TO DELETE MY TO DO LIST
const deleteListButton = document.getElementById('delete-list-button');
deleteListButton.addEventListener("click", function(){
    deleteToDoList();
});

function deleteToDoList(){
    taskListArray = [];
    struckTaskListArray = [];
    taskListCheckBoxes = [];
    sessionStorage.setItem('taskListArray', taskListArray);
    sessionStorage.setItem('struckTaskListArray', struckTaskListArray);
    updateTaskUl();
}

// ADDTL : I WANT TO BE ABLE TO TOGGLE BETWEEN A LIGHT MODE AND A DARK MODE
let darkMode;
function toggleDarkMode(){
    darkMode = !darkMode;
    updateDarkMode(darkMode);
    sessionStorage.setItem("darkMode", darkMode);
}
function updateDarkMode(darkModeBool){
    var cssRoot = document.querySelector(':root');
    var computedStyle = getComputedStyle(cssRoot);
    var backgroundColor = computedStyle.getPropertyValue('--background-color');
    if(darkModeBool === true){
        cssRoot.style.setProperty('--background-color', '#2C2F33');
        cssRoot.style.setProperty('--text-color', '#F1F1F1');
        document.getElementById('x-modal').src = 'resources/dark/x-icon.svg';
        document.getElementById('display-mode-button').src = 'resources/dark/sun-icon.svg';
        document.getElementById('focus-edit-button').src = 'resources/dark/edit-focus-icon.svg';
        document.getElementById('add-task-button').src = 'resources/dark/add-icon.svg';
        document.getElementById('add-quote-button').src = 'resources/dark/add-icon.svg';
        document.getElementById('random-quote-button').src = 'resources/dark/reset-icon.svg';
        document.getElementById('delete-list-button').src = 'resources/dark/trash-icon.svg';
    }
    else{
        cssRoot.style.setProperty('--background-color', '#F4F4D3');
        cssRoot.style.setProperty('--text-color', '#2A5513');
        document.getElementById('x-modal').src = 'resources/light/x-icon.svg';
        document.getElementById('display-mode-button').src = 'resources/light/moon-icon.svg';
        document.getElementById('focus-edit-button').src = 'resources/light/edit-focus-icon.svg';
        document.getElementById('add-task-button').src = 'resources/light/add-icon.svg';
        document.getElementById('add-quote-button').src = 'resources/light/add-icon.svg';
        document.getElementById('random-quote-button').src = 'resources/light/reset-icon.svg';
        document.getElementById('delete-list-button').src = 'resources/light/trash-icon.svg';
    }
    changeTaskButtonIcon();
}

const displayModeButton = document.getElementById('display-mode-button');
displayModeButton.addEventListener("click", toggleDarkMode);