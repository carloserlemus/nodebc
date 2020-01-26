/*
Define a text variable and assign the following value: HELLO
Define a result variable
Get each char from the text variable and revert the text assigning it to the result variable
At the end you should be able to show the following text: OLLEH
Once you reverted the text, transform it to lowercase
Show the final output: the final result is: olleh
It kind of sound spanish, right?.. ole!!! (lol)
*/

let text = 'HELLO';
let result = text.charAt(4) + text.charAt(3) + text.charAt(2) + text.charAt(1) + text.charAt(0);

// Alternative
let resultAlt = text.charAt(4).concat(text.charAt(3), text.charAt(2), text.charAt(1), text.charAt(0));

console.log(result.toLowerCase());

// Alternative Output
console.log(resultAlt.toLowerCase());

