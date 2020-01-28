/*
Copy and paste the code from exercise 53
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator
*/

/* Original Structure
let variable = 10;

if (variable % 2 == 0){
    console.log('%o is an even number.', variable);
} else {
    console.log('%o is an odd number.', variable);
}
*/

// Refactored

let variable = 10;

(variable % 2 == 0) ? console.log('%o is an even number.', variable) : console.log('%o is an odd number.', variable);