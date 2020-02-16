/*

/ex_5
  |-- index.html
index.html
Create a basic HTML document
Create a script tag on the document head element



Using the prompt method ask the user tu input a number
Using the alert method show if the number is even or odd
Your number is even/odd

*/
let prompt = window.prompt('Please input a number')

prompt;

if (prompt % 2 == 0){
    window.alert('Your number is even!')
} else if (prompt % 2 == 1){
    window.alert('Your number is odd!')
}

/* NOTES:
----------------

I had to assign window.prompt() to a variable.

Based on how it works, what happens is that the function
calls the message and whatever input the user gives then
becomes the value associated with the variable.

*/
