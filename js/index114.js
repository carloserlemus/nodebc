/*
Define a revert function that accepts a string parameter
This function shows the reverted text parameter
For example if you call the revert function with 'hello' the function will show: olleh
Call this function using at least 5 different words :)
*/

function revert(string){
    let s = "";
    for (i = string.length - 1; i >= 0; --i){
        s += string.charAt(i)
        if (i == 0){
            console.log(s)
        }
    }
}
revert('carlos');
revert('bruce springsteen')
revert('Javascript Is Cool')
revert('Julia Pavlova')
revert('Don\'t forget your towel!')