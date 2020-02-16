/*
Define a numbers array with values between 1000 and 1

Iterate over the numbers array and filter the following values creating new arrays for each type:

Even numbers
Odd numbers

Show the last 10 odd numbers as output
Show the first 20 even numbers as output
*/
const numbers = [];

for (i = 0; i <= 100; i++){
    numbers.push(i)
}

const numbersOdd = numbers.filter(function(odd){
    if (odd % 2 == 1){
        return odd
    }
})

const numbersEven = numbers.filter(function(even){
    if (even % 2 == 0){
        return even
    }
})

for (i = 0; i <= 10; i++){ //returns last 10 in the odd array.
    console.log(numbersOdd.pop())
}

for (i = 0; i <= 20; i++){ // returns the first 20 from the even array.
    console.log(numbersEven.shift())
}





