/*
Define a mutants array and assign the following values
Professor X
Cyclops
Iceman
Angel
Magneto
Beast
Phoenix
Logan
Gambit

Iterate over each mutants item using forEach
The objective is to create a string value with Iceman, Logan and Phoenix
To create the string you need to get the names while iterating the mutants array
Once the iteration is over show the generated string with the selected mutants names
*/
const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
]

mutants.forEach(function(name, index){
    // foreach will pass the first array item, professor x, professor x is index 0. we want iceman[2], logan[7] and pheonix[6]
    // so when it runs the function on professor x it won't work, it won't print.
    // if mutants.indexof(name) is equal to 2, 6, 7....
    if (index === 2){
        console.log(name)
    }
    if (index === 7){
        console.log(name)
    }
    if (index === 6){
        console.log(name)
    }
})

//it wants me to create a string value with certain index numbers. so i need to create conditions where the computer chooses those index numbers.
// get the string while iterating the array.
