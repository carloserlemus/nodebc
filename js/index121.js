/*
Define a games variable and assign the following values:
Grand Theft Auto V
The Last of Us Remastered
Persona 5
Metal Gear Solid V
Uncharted 4
Journey
Bloodborne
The Witcher 3
Diablo III
Replace the games value Grand Theft Auto V by FIFA 18
Replace the games value Metal Gear Solid by FIFA 17
Replace the games value Persona 5 by FIFA 16
Show the updated games array as output
*/

const games = ['GTA V', 'The Last Of Us', 'Super Mario RPG', 'Chrono Trigger', 'Diablo 3'];

console.log(games); // before

games[0] = 'FIFA 18'
games[2] = 'FIFA 16'
games[4] = 'FIFA 12'

console.log(games); // after