/*
Use while structure to only sum odd numbers between 0 and 1000
Show the partial result as output too

----notes
we want to add odd numbers only. from 1 to 20 that means:
we can increment the number by 3 so that the increment looks like
1 3 5 7 9, plus 2 but starting at 1 instead of 0
*/

let number = 1;

while(number <= 1000){
    console.log('The sum of %o and 2 is %o', number, (number +=2))
}