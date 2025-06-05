const emptyUser = '';
const testUser = {
    firstName : 'Avion',
    age : 34,
    email : 'avion@school.com'
}

function findUserData(userData){
    return new Promise( (resolve, reject) => {
        setTimeout(() =>{
            if(userData.firstName){
                var {firstName, age, email} = userData;
                resolve(`${firstName} ${age} ${email}`);
            }
            else{
                reject(`no user data to display`);
            }
        }, 1000);
    });
}

findUserData(testUser).then((success) => console.log(resolve)).catch((error)=> console.log(error));

fetch('https://jsonplaceholder.typicode.com/comments/1').then(response => response.json()).then(data => console.log(data.body));

async function getJoke(){
    var chuckNorrisJoke = await fetch('https://api.chucknorris.io/jokes/random');
    let joke = await chuckNorrisJoke.json();
    console.log(joke.value);
}