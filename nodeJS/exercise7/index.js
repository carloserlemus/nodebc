/*
Require the greeter module
Call the greet function and pass the following parameter:
Your first name
Your last name
A function that shows the following message: We're using node modules yeah!!!
*/

let greeter = require('./greeter.js');
let Greet = greeter('carlos', 'lemus', () => console.log('We\'re using node modules yeah!!!'));
let test = ''

Greet;                    // Gives the result of the function in greeter.js  

console.log(typeof Greet) // Greet is undefined.