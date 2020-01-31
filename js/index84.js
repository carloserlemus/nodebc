/*
Copy and paste the code from exercise 74
Refactor the code to use do/while instead of while
*/

let loopLimiter = 0;
let ascii = '*'

do {
    console.log(ascii)
    ascii += '**'
    loopLimiter++
} while (loopLimiter <= 7)