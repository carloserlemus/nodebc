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
Show the mutant name and position
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

mutants.forEach(function (info){
    console.log('This mutant is: %o', info);
    console.log('Their index is: %o', mutants.indexOf(info))
})



