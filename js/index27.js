/*
Create a new index27.js file

Define a firstNumber and secondNumber variables

Assign each variable a number type value

Code the following operations:

Adding both variables
Subtracting both variables
Multiplying both variables
Dividing both variables
Remainder from both variables
For each operation show the following output:

Example: I add 2 + 3 and the result is 5 (where 2 and 3 are firstNumber and secondNumber and 5 it's the operation result)
Use a template variable for each output and console.log()
*/

const firstNumber = 2;
const secondNumber = 3;

var add = firstNumber + secondNumber;
var subtract = secondNumber - firstNumber;
var multiply = firstNumber * secondNumber;
var divide = secondNumber / firstNumber;
var remainder = secondNumber % firstNumber;

var first = `I add ${firstNumber} + ${secondNumber} and the result is ${add}`;
var second = `I subtract ${firstNumber} - ${secondNumber} and the result is ${subtract}`;
var third = `I multiply ${firstNumber} * ${secondNumber} and the result is ${multiply}`;
var fourth = `I divide ${firstNumber} / ${secondNumber} and the result is ${divide}`;
var fifth = `I find the remainder of ${firstNumber} / ${secondNumber} and the result is ${remainder}`

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);

