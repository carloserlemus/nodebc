/*
Define the average function that accepts 5 numbers as parameter
Call the average function with the following values: 2, 4, 10, 20, 30
After executing the call show the following message: The average is %average%
*/

function average(i, n, x, y, z){
    avg = ((i + n + x + y + z)/5)
    console.log('The average is %o', avg)
}

average(2, 3, 2, 5, 6);
average(10, 11, 22, 34, 21);
average(2, 8, 3, 100, 10);