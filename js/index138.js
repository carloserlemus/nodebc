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
-------------------------------------------------------------------------------------------

Iterate over the mutants array
Add <3 symbol before the mutant name if the iterated name is one of the following:
Professor X
Logan
Phoenix
Gambit
Show the original mutant array items as output
Show the updated mutant array items as output
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

const mutantH = mutants.map(function(mutants){
    if (mutants === 'Professor X'){
        return mutants += ' <3'
    } else if (mutants === 'Logan'){
        return mutants += ' <3'
    } else if (mutants === 'Gambit'){
        return mutants += ' <3'
    } else {
        return mutants
    }
})

// this is calling a function on every input, so it's going over each item

console.log(mutants)
console.log(mutantH)