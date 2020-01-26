/*
Copy and paste the code from exercise 51
Refactor the code so it match the new requirements:
If the username or password don't match show the following message: Sorry, there has been a problem, please try it again.
*/


// Correct
console.log('Entered Correctly');
let username = 'pepe2017';
let password = 12345;

if (username === 'pepe2017' && password === 12345){
    console.log('Logged in username, show user home page.');
} else {
    console.log('Sorry, there has been a problem, please try it again.')
}

console.log('');
console.log('Entered Incorrectly');
// Incorrect
if (username === 'pepe3017' && password === 12345){
    console.log('Logged in username, show user home page.');
} else {
    console.log('Sorry, there has been a problem, please try it again.')
}