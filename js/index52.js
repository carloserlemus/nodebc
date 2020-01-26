/*
Copy and paste the code from exercise 49
Refactor the code so it match the new requirements:
If firstNumber variable is bigger than secondNumber then show the following message: Number %firstNumber% is bigger than %secondNumber%
Else show Number %secondNumber% is bigger than %firstNumber%
*/

let firstNumber = 10;
let secondNumber = 5;

if (firstNumber > secondNumber){
    console.log('Number %o is bigger than %o', firstNumber, secondNumber);
} else {
    console.log('Number %o is bigger than %o', secondNumber, firstNumber);
}