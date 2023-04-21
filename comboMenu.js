const readLine=require('readline-sync');
    let words=[]

        console.log( 'Lunch Menu');

        console.log( "'chicken $5.25', 'beef $6.25', 'tofu $5.75' 'ham $4.75' 'turkey $6.25' ")

    let word=readLine.question("What type of sandwich would you like:")
            words.push(word)
            console.log( `You choose ${words[0]}`);