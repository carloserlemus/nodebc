/*
Define a numbers array with values between 1 and 1000
Iterate over each numbers item using map and increment the value in 10
If value is 1 then it should be 11
If value is 2 then it should be 12
and so on..
Show the following output for each element:
index: 1, original number: 1, incremented value: 11
*/

const numbers = [];

for (i = 0; i <= 10; i++){
    numbers.push(i)
}

const numbersTen = numbers.map(function(numbers) {
    return numbers += 10;
  });

console.log(numbers)
console.log(numbersTen)
