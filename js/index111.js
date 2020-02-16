/*
Define a even function that has one numeric parameter and returns a boolean value
This function must validate if the number passed as parameter is an even number or not (true or false)
Call this function using the following parameters: 2, 5, 3, 24, 12
If the number is even show the following message: %number% is even
Else show the following message: %number% is odd
*/

function even(i){
    if (i % 2 == 0){
        console.log('%o is even!', i)
    } else {
        console.log('%o is odd!', i)
    }
}

even(2);
even(5);
even(3);
even(24);
even(12);