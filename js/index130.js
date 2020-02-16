/*
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix

Sort the list

Reverse the sorted list

Join all mutants name using the following text: '* '

Show the following output:

Original mutants list
Sorted mutants list
Reversed mutants list
Mutants name separated by *
*/
const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix'
]

function mutant(){
    console.log('original list: ' + mutants);
}

function mutantReverse(){
    let mutantsReverse = mutants.reverse();
    console.log('Reversed List: ' + mutantsReverse);
}

function mutantSort(){
    let mutantsSorted = mutants.sort();
    console.log('Sorted list: ' + mutantsSorted);
}

function mutantStars(){
    let mutantStars = mutants.join(' * ')
    console.log('Starred List: ' + mutantStars)
}
mutant();
mutantReverse();  
mutantSort();
mutantReverse();
mutantStars();

// Reverse is different in these cases because of scope.