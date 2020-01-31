/*
Copy and paste the code from exercise 72
Refactor the code to use do/while instead of while
*/

let number = 0;
let star = '*';

do {
    console.log(star)
    number++
    star += '*'
} while (number < 15)