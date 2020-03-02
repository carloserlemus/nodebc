/*
numbers.js
Define a isEven function
This function accepts a number as parameter
Return a boolean value whether the number is even (true) or not (false)
Export the isEven function
*/

function isEven(number){
    if (number % 2 == 0){
        return true;

    } else {
        return false
    }
}

module.exports = isEven;