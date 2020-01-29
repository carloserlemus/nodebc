/*
Show the following output using while:
*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
*
--------------
PLAN
    Use a number variable to control the amount of times it loops.
    ----
    In order to substract stars I figured that maybe we can just cut the string.
    I used the .length property to get the number of characters
    I then used the .slice method and replaced the second parameter, which is the AMOUNT of characters from the index, with a second variable
    I then did a shorthand operation to subtract one each time. This continually made the cut off smaller until the loop ended. 
*/

let number = 0;
let star = '**************'
let starMinus = star.length;
while (number < 15){
    console.log(star.slice(0, starMinus))
    number++
    starMinus -= 1;
}