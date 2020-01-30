/*
Show the following output using while:
*
***
*****
*******
*********
***********
*************
*/

let loopLimiter = 0;
let ascii = '*'

while (loopLimiter <= 7){
    console.log(ascii)
    ascii += '**'
    loopLimiter++
}