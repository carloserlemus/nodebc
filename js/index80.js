/*
Copy and paste the code from exercise 70
Refactor the code to use do/while instead of while
*/

let number = 1;

do {
    console.log('The sum of %o and 2 is %o', number, (number +=2))
} while (number <= 1000)