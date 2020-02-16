/*
Define a arithmetic variable and assing a literal value with the following methods:
add
subtract
multiply
divide
remainder

Each method accepts 2 numeric parameters and shows the operation result
So, add will add both numbers together and log the result (the rest of the methods work in the same way)
Show an error if the parameters values are not numbers
Call the methods:
add(2, 10)
subtract(10, 5)
multiply(3, 100)
divide(40, 2)
remainder(20, 2)
*/
let string = '';

let arithmetic = {
    add: function(num, num2){
        if (isNaN(num) || isNaN(num2)){
            console.log('Error!')
        } else{
            console.log(num+num2)
        }
    },
    subtract: function(num, num2){
        if (isNaN(num) || isNaN(num2)){
            console.log('Error!')
        } else{
            console.log(num-num2)
        }
    },
    multiply: function(num, num2){
        if (isNaN(num) || isNaN(num2)){
            console.log('Error!')
        } else{
            console.log(num*num2)
        }
    },
    divide: function(num, num2){
        if (isNaN(num) || isNaN(num2)){
            console.log('Error!')
        } else{
            console.log(num/num2)
        }
    },
    remainder: function(num, num2){
        if (isNaN(num) || isNaN(num2)){
            console.log('Error!')
        } else{
            console.log(num%num2)
        }
    }
}
arithmetic.add(2, 10)
arithmetic.subtract(10, 5)
arithmetic.multiply(3, 100)
arithmetic.divide(40, 2)
arithmetic.remainder(20, 2)
arithmetic.add('Bananas', 'Oranges')
arithmetic.subtract('Four', 'Five')