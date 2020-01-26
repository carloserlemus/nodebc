/*
Define a playerName variable with the following value: Patrik Laine is lame
Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
Use the slice method to get the following words or phrases from the previous variables:
Patrik Laine is
jets
the best
, Go
Use a template variable to create the final result
Change the first jets character to be Capitalized
Create all the variables that you might need to accomplish this objective
The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!
*/

let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';

let one = playerName.slice(0, 12).toUpperCase() + playerName.slice(12, 15);
let two = teams.slice(46, 47).toUpperCase() + teams.slice(47, 50);
let three = message.slice(12, 20);
let four = message.slice(34, 38);

let finalResult = `${one} ${three} ${two} player${four} ${two}!!`;

console.log(finalResult);
