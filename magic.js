let answers=['yes','no','maybe','Try agian','idk about that one','joe mama','couldnt hear you try agian '];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);