// Show the 9 times table from 1 to 10 using while (example 9 times 1 equals 1)
/*
9 x 1= 9
9 x 2= 18
...
9 x 10 = 90
----
the number by which we multiply is the number we're incrementing
*/

let multi1 = 9;
let multi2 = 0;

while (multi2 <= 9){
    console.log(multi1 + ' times ' + (++multi2) + ' equals ' + (multi1 * (multi2)))
}