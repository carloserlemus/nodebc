/*
Define a firstName variable and assign your name as it's value
Define a lastName variable and assign your last name as it's value
Show the following output:
My first name is %firstName% and it is %nameCharacters% characters long
My last name is %lastName% and it is %lastNameCharacters% characters long
The character difference between my first name and last name is %charsDiff%
My first name is longer than my last name: true or false
*/

let firstName = 'Carlos';
let lastName = 'Rivera-Lemus';
let charsDiff = lastName.length - firstName.length;
let nameDiff = firstName > lastName;

console.log('My first name is %s and it is %o characters long.', firstName, firstName.length);
console.log('My last name is %s and it is %o characters long.', lastName, lastName.length);
console.log('The character difference between my first name and last name is %o', charsDiff);
console.log('My first name is longer than my last name: %o', nameDiff);


