/*
Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
The function must sort the params values from lower to higher
Call the function with the following parameters: 10, 8, 25
Show the following result as output: 8, 10, 25
Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
If highToLow is true then you need to show the following output: 25, 10, 8
Call the function again with the following parameters: 10, 8, 25, true
*/

/*
function sort(number1, number2, number3){
    if (number1<=number2 && number2<=number3){
    console.log(number1, number2, number3)
    } else if (number1<=number3 && number3<=number2){
    console.log(number1, number3, number2)
    } else if (number2<=number1 && number1<=number3){
    console.log(number2, number1, number3)
    } // too lazy to do the rest. I hate this solution.
}
*/
function sortSmart(number1, number2, number3){
    let sortArray = [number1, number2, number3]
    sortArray.sort(function(a, b){return a-b})
    console.log(sortArray)
}
sortSmart(10, 2, 8);
sortSmart(99, 10, 1)
sortSmart(10, 99, 3)