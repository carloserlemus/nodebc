/*
Copy and paste the code from exercise 80
Refactor the code to use for instead of do/while
*/
for (number = 1; number <= 1000; number ++){
    console.log('The sum of %o and 2 is %o', number, (number += 2))
}