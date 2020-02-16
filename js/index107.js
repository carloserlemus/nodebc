/*
Define a biggerNumber function that will expect two parameters with the name firstNumber and secondNumber (numeric)
Call the biggerNumber and pass two numbers as parameters 3 for firstNumber and 5 for secondNumber

The biggerNumber must the following output: Number %firstNumber% is bigger than %secondNumber%
In this case you need to validate which number is bigger than the other to get the right feature and output

Also add the validation to check if both numbers are equal, if so then show the following message: Both numbers are %number%
Make sure that the parameters are numbers, you can use typeof for it

Show a error message in case any of the parameters are not number
Call the biggerNumber with the following parameters: 6 and 3

Call the biggerNumber with the following parameters: 2 and 2
*/

function biggerNumber(firstNumber, secondNumber){
    if (firstNumber > secondNumber){
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`)
    } else if (firstNumber < secondNumber){
        console.log(`Number ${secondNumber} is bigger than ${firstNumber}`)
    } else if (isNaN(firstNumber) || isNaN(secondNumber)){
        console.log('One or both entries are not a number.')
    } else {
        console.log(`Number ${firstNumber} is equal to ${secondNumber}`)
    }
}

biggerNumber(3, 5);
biggerNumber(5, 3);
biggerNumber(5, 5);
biggerNumber(10, 80);
biggerNumber('asdfasdf', 10);
biggerNumber(10, 'sadf');