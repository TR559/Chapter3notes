const readLine = require('readline-sync')

let diceRolled = []

let eyeColors = ['blue','green','brown','hazle'];

let employmentCompany = ['Ford','Tesla','Chevy','KIA'];

let favcandy = ['Hersheys','skittles','Reeses cups','Twix'];


let character1 = {

//empty to start

}

createChar(character1, diceRolled);

function rolld6(){

    return Math.ceil(Math.random()*6)

}
function rollDice(amount, list){

    for(let i=0; i<amount; i++){

        let roll= rolld6();

        console.log(`You rolled a ${roll}!`)

        list.push(roll)

    }

}

function sum(list){

    let sum=0;

    for (let i=0; i<list.length; i++){

        sum += list[i];

    }

    return sum;

}

function rollStat(list){

    list = [];

    rollDice(4, list);

    return sum(list)

}

function pickRandomChoice(choices){
    let randonNum = Math.floor(Math.random()*choices.length);
    return choices[randonNum];
}


function createChar(character, list){

    character.name = readLine.question("Enter Character Name: ");

    character.Age= rollStat(diceRolled);

    console.log('Rolling Age')

    character.eyeColor = pickRandomChoice(eyeColors);

    character.employmentCompany = pickRandomChoice(employmentCompany);

    character.favcandy = pickRandomChoice(favcandy);

    console.log('Rolling STR')

    character.strength= rollStat(diceRolled);

    console.log('Rolling DEX')

    character.dexterity= rollStat(diceRolled);

    console.log('Rolling CON')

    character.constitution= rollStat(diceRolled);

    console.log('Rolling INT')

    character.intelligence= rollStat(diceRolled);

    console.log('Rolling WIS')

    character.wisdom= rollStat(diceRolled);

    console.log('Rolling CHA')

    character.charisma= rollStat(diceRolled);

    character.luck = rolld6();

    displayChar(character);

}

function displayChar(char){

    console.log(`-----------------------------`);

    console.log(`Name: ${char.name}`);

    console.log(`Age: ${char.Age}`);

    console.log(`Eye Color: ${char.eyeColor}`);

    console.log(`Works at: ${char.employmentCompany}`);

    console.log(`Fav candy: ${char.favcandy }`);

    console.log(`STR: ${char.strength}`);

    console.log(`DEX: ${char.dexterity}`);

    console.log(`CON: ${char.constitution}`);

    console.log(`INT: ${char.intelligence}`);

    console.log(`WIS: ${char.wisdom}`);

    console.log(`CHA: ${char.charisma}`);

    console.log(`LUCK: ${char.luck}`);

    console.log(`-----------------------------`);

}


