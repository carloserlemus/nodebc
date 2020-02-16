/*
Add all even numbers bettwen 0 and 1000 using for statement
The iteration must break after finding the first 20 even numbers
Show the result as output
*/

for (i = 0, n = 0; i < 1000; i +=2){
    if(n > 20){
        break;
    }
    console.log(i)
    n++
}