const readLine=require('readline-sync');
    let words=[]

         console.log( 'Lunch Menu');
            let sandwiches = [ '#1 chicken $5.25', '#2 beef $6.25', '#3 tofu $5.75', '#4 ham $4.75' , '#4 turkey $6.25' ]

let values = [1,2,3,4,5]

                console.log(sandwiches)

    let word=readLine.question("What type of sandwich would you like please only enter number#:")

             words.push(word)

                console.log( `You choose sandwich #${words[0]}`);

    let word1=readLine.question("Would you like a drink? :")

            if(word1 == "yes"){

                let drinks = [ '#1 small $1.00' , '#2 medium $1.75' , '#3 large $2.25' ]

                let values = [ 1,2,3]

                console.log(drinks)

                let word2 =readLine.question("Witch size drink would you like? please only enter number#:")

                words.push(word2)

                console.log( `You choose drink #${words[1]}`);
            } else {
                words.push("no")

                console.log( `You choose ${words[1]} drink`);
}







