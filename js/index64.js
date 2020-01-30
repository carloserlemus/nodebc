/*
Define the name variable and assign a null value
If the name variable is truthy then show the following message as output: Your name is %name%
If the name variable is falsy then show the following message: Please input a valid name
Now assign your name to the name variable and run the code again
For yourself try to explain what's going on?
*/

// null is special, it gets evaluated as an object which is true. How do we convert it to false?


// If name is equal to null
var name = null;

if (name){                 
    console.log('Your name is %s', name)
} else {
    console.log('Please input a valid name')
}

var name = 'carlos';

if (name){                 
    console.log('Your name is %s', name)
} else {
    console.log('Please input a valid name')
}

/* 
    If we enter name where name is equal to null. The 'Else' code runs. Why? because name is evaluated as true in the condition.
    Null by default is false. Therefore false does not equal true and runs the else code.

*/