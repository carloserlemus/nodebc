/*
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Magneto
Beast
Phoenix
Logan
Gambit

First part
Iterate over the mutants items
Show each mutant name
Break the execution in case Magneto is part of the mutants list

Second part
Fin out Magneto position and remove it from the mutants array
Iterate over the array without Magento on it and show each mutant name in upper case and the item position
*/

/*
let mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Magneto',
    'Logan',
    'Gambit'
]

if (mutants.indexOf('Magneto') != -1){
    console.log('Not Working.')
} else{
    console.log(mutants.toString())
}

console.log('------------------------------------')

mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Logan',
    'Gambit'
]
if (mutants.indexOf('Magneto') != -1){
    console.log('Not Working.')
} else{
    console.log(mutants.toString())
}
*/

// SECOND PART. ------------------------------------



let mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Magneto',
    'Logan',
    'Gambit'
]
for (i = 0; i <= 7; i++){
    console.log(mutants.shift().toUpperCase())
    if (mutants.indexOf('Magneto') == 0){
        while (i <= 5){
            i++
            console.log(mutants.pop().toUpperCase())
        }
        break;
    }
}

/*
Find Magneto Positon.

Go over the Array WITHOUT magneto.

Show EACH mutant name in upper case -- and item position
*/