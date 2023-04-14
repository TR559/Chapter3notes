const readLine=require('readline-sync');
let words=[]

let word=readLine.question(" whats your question:")
words.push(word)
let answers=['yes','no','maybe','Try agian','idk about that one','joe mama'];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);
