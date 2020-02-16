/*
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
Logan

Show the following message only if Logan and Professor X are mutants items:
We love X-Men
Show the following message only if Gambit is not a mutants items:
X-Men sucks
*/

/*
const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix',
    'Logan'
]

if (mutants.indexOf('Logan') > -1 && mutants.indexOf('Professor X') > -1){
    console.log('We love X-People.')
}

if (mutants.indexOf('Gambit') == -1){
    console.log('X-People suck.')
}
*/

function xPeople(x1){
    const mutants = [
        'Professor X',
        'Cyclops',
        'Iceman',
        'Angel',
        'Beast',
        'Phoenix',
        'Logan'
    ]
    if (mutants[x1] > -1){
        console.log('thatsa nxman')
    }
}

xPeople('Cyclops')
/*
Now the problem is what? It's not specific. As long as it's not -1 it will return ANY of the x-men. So if it's > -1 it passes. The next test shou     
*/
