/*
Copy and paste the code from exercise 50
Refactor the code so it match the new requirements:
If number is not even then show the following message: %number% is an odd number
*/

let variable = 10;

if (variable % 2 == 0){
    console.log('%o is an even number.', variable);
} else {
    console.log('%o is an odd number.', variable);
}

variable++;

if (variable % 2 == 0){
    console.log('%o is an even number.', variable);
} else {
    console.log('%o is an odd number.', variable);
}