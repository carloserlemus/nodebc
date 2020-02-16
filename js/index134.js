/*
Define a numbers array
Assign values between 1 and 1000
Iterate over the numbers array and add all numbers items
On each iteration show the partial result
1
3
6
... so on
If the final result equals 500500 then show the following output: Good job!!!
Else show: Take a look to see if something is wrong
*/

const numbers = [];

for (i = 0; i <= 1000; i++){
    numbers.push(i)
}

for (i = 0, n = 0; i <= 1000; i++){
    n += numbers[i]
    console.log(n)
    if (n == 500500){
        console.log('Good Job!')
    }
}



// it wants me to add 0 + 1 + 2 + 3 + 4 + 5... 1000