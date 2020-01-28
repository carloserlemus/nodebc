/*
Copy and paste the code from exercise 54
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator
*/

/*
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
*/

let username = 'pepe2017';
let password = 12345;

(username === 'pepe2017' && password === 12345) ? console.log('Logged in username, show user home page.') : console.log('Sorry, there has been a problem, please try it again.');

//(username === 'pepe3017' && password ===12345) ? console.log('Logged in username, show user home page.') : console.log('Sorry, there has been a problem, please try it again.');

