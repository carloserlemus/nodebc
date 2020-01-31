/*
Copy and paste the code from exercise 83
Refactor the code to use for instead of do/while
*/
for (number = 0, star = '**************', starMinus = star.length ; number < 15; number++){
    console.log(star.slice(0, starMinus))
    starMinus -= 1
}