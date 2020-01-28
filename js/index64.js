/*
Define the name variable and assign a null value
If the name variable is truthy then show the following message as output: Your name is %name%
If the name variable is falsy then show the following message: Please input a valid name
Now assign your name to the name variable and run the code again
For yourself try to explain what's going on?
*/

// null is special, it gets evaluated as an object which is true. How do we convert it to false?

const name = null;

if (name && name !== null){         
    console.log('Your name is %s', name)
} else{
    console.log('Please input a valid name')
}

/* Explain: Why does name && name !== null work as a condition to falsify?
    1. name converts to an object which is true.
    
    the only way it expresses the first bit of code is if it evaluates as true
        name is true, but is name !== null? this is false.. therefore it uses the 2nd bit of code.
    if there were a value such as 'carlos' then name would be true, and name !== null would also be true, which
    would execute the first bit of code.

*/

console.log(typeof name);
// null is evaluated to false.
// 


/* The else executes because the condition is false.
if (''){
    console.log('execute 1')
} else {
    console.log('execute 2')
}
*/