/*
Copy and paste the code from exercise 71
Refactor the code to use do/while instead of while
*/

let multi1 = 9;
let multi2 = 0;

do {
    console.log(multi1 + ' times ' + (++multi2) + ' equals ' + (multi1 * (multi2)))
} while (multi2 <= 9)