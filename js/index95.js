/*
Copy and paste the code from exercise 85
Refactor the code to use for instead of do/while
*/

for (n = 0, f = 0, f1 = -1, f2 = 1; n <= 9; n++){
    f = f1 + f2
    f1 = f2
    f2 = f
    console.log(f)
}