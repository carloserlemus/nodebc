/*
Define a getLongerText that accepts two string values
This function returns the longer text
After calling the function show the longer word as output
Call this function 3 times with different words
*/

function getLongerText(string1, string2){
    if (string1.length > string2.length){
        console.log("%o is the longer word!", string1)
    } else {
        console.log("%o is the longer word!", string2)
    }
}

getLongerText('Carlos', 'Julia');
getLongerText('Small', 'Gigantic');
getLongerText('Nile', 'Mississippi')