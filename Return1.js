const readLine = require('readLine-sync')

//q1
// function nameSwapper(){
//     let first = readLine.question("First Name: ")
//     let last = readLine.question("Last Name: ")
//     return(`${last}, ${first}`);
// }
//
// let myName = nameSwapper();
// console.log(myName);

// function NumberGenerator(){
//     let integer1 = readLine.question("First Integer between 0 and 9: ")
//     let integer2 = readLine.question("Second Integer between 0 and 9: ")
//     return(`${integer1+integer2}`);
// }
// console.log(NumberGenerator());

function averageTemp(mondaysTemp,tuesdaysTemp,wednesdaysTemp,thursdaysTemp,fridaysTemp,saturdaysTemp,sundaysTemp){
   let answer = mondaysTemp + tuesdaysTemp + wednesdaysTemp + thursdaysTemp + fridaysTemp + saturdaysTemp + sundaysTemp
    answer = answer/7
    answer = answer.toFixed(2)
    return (answer)
}
