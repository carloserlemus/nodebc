/*
Write the code to show numbers bettwen 10000 and 0 using for
Show all the numbers as output
Every 10 numbers show the number but with the following format: ** number **
Example:
10000
9999
9998
9997
9996
9995
9994
9993
9992
9991
** 9990 **
9989
and so on...
0
*/
// for every 10th output you want to put a ** around it.

for (i = 1000; i >= 0; i -= 1){
    if (i % 10 == 0 && i != 0 && i != 1000){
        console.log('** ' + i + ' **')
    } else {
        console.log(i)
    }
}