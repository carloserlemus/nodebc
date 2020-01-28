/*
Show the following output using while:
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
------
How do we put a condition that stops the loop at a certain amount of stars?
I used the number to control how many times the loop repeated.
Then I added a star variable and concatenated an extra '*' every time the loop repeated... it would've repeated
forever and ever and ever if I didn't have the number variable to control it. 
*/

let number = 0;
let star = '*';

while (number < 15){
    console.log(star)
    number++
    star += '*'
}