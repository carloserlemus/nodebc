/*
Create a new index75.js file
Write a program that will show the first 10 Fibonacci sequence numbers
--------------------
BREAK DOWN
--------------------

What are fibonacci sequence numbers?
0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
Definition: It's a series of numbers where a number is the sum of the two numbers that preceeded it.

f = f1 + f2
f1 = f2
f2 = f
*/

let loopLimiter = 0;

let f = 0;
let f1 = -1;
let f2 = 1;

while (loopLimiter <= 9){
    f = f1 + f2
    f1 = f2
    f2 = f
    console.log(f)
    loopLimiter++
}

/* break down of whats going on

f(0) = f1(-1) + f2(1) --> f = 0
f1(-1) = f2(1) --> f1 = -1
f2(-1) = f(0) --> f2 = 0
...
f(0) = f1(-1) + f2(0) --> f = -1
f1 (-1) = f2 (0) --> f1 = 0
f2(0) = f(-1) --> f2 = -1
...
f(-1) = f1(0) + f2(-1) --> f(-1)
f1(0) = f2(-1) --> f1 = -1
f2(-1) = f(-1) --> f2 = -1

f(-1) = f1(-1) + f2 (-1) --> f = -2
f1(-1) = f2(-1) --> f1 = -1
f2(-1) = f(-2) -- f2 = -2

f(-2) = f1(-1)+f2(-2) --> f = -3

*/
