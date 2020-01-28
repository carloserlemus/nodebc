/*
Define firstNumber and secondNumber variables
Assign a numeric value to previous defined variables
If the first number equals the second number then show the following message: They are the same number
If the first number is bigger than the second number then show the following message: %firstNumber% is bigger than %secondNumber%
If the second number is bigger than the first number then show the following message: %secondNumber% is bigger than %firstNumber%
*/

let firstNumber = 3;
let secondNumber = 6;

if (firstNumber === secondNumber){
    console.log('They are the same number-- or are they?')
} else if (firstNumber > secondNumber){
    console.log('%o is bigger than %o', firstNumber, secondNumber)
} else if (firstNumber < secondNumber){
    console.log('%o is bigger than %o', secondNumber, firstNumber)
}
