/*
Copy and paste the code from exercise 52
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator
*/

/* ---- Original Structure
let firstNumber = 10;
let secondNumber = 5;

if (firstNumber > secondNumber){
    console.log('Number %o is bigger than %o', firstNumber, secondNumber);
} else {
    console.log('Number %o is bigger than %o', secondNumber, firstNumber);
}
*/

// Refactored

let firstNumber = 10;
let secondNumber = 5;

(firstNumber > secondNumber) ? console.log('Number %o is bigger than %o', firstNumber, secondNumber) : console.log('Number %o is bigger than %o', secondNumber, firstNumber);
