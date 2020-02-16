/*
Define a add function
This function will return a numeric value with result of adding all the numbers that we pass as parameter
As we don't know how many parameters we are going to get we need to use a dynamic way to add this functionality
Call the add function passing 5 numbers and show the result as output
Call the add function passing 10 numbers and show the result as output
*/

//argument object, like an array but not.

// contain all param value that have been passed to it.

//arguments has a .length property..returns amount of params.

/*
function greet(){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
}

greet('Janet', 'Coco', 'John')
*/

function add(){
    let sum = 0;
    for (i = 0; i < arguments.length; i++){
        sum += arguments[i];
        }
        console.log(sum);
}

add(10, 3, 2, 8, 5);
add(10, 3, 2, 8, 5, 10, 3, 2, 8, 5);
