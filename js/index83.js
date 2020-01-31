/*
Copy and paste the code from exercise 73
Refactor the code to use do/while instead of while
*/

let number = 0;
let star = '**************'
let starMinus = star.length;
do {
    console.log(star.slice(0, starMinus))
    number++
    starMinus -= 1;
} while (number < 15)