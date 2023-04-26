const readLine=require('readline-sync');
    let words=[]

         console.log( 'Lunch Menu');

                console.log( "chicken $5.25, beef $6.25, tofu $5.75, ham $4.75 , turkey $6.25 ")

    let word=readLine.question("What type of sandwich would you like:")

             words.push(word)

                console.log( `You choose a ${words[0]} sandwich`);

    let word1=readLine.question("Would you like a drink?:")

            if(word1 == "yes"){
                console.log(" small $1.00 , medium $1.75 , large $2.25 ");

                let word2 =readLine.question("Witch size drink would you like?:")

                words.push(word2)

                console.log( `You choose a ${words[1]} drink`);
            }






