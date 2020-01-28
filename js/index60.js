/*
Define a grade variable and assign a value bettwen 0 and 10
If the grade is bigger or equal to 9 then show the following message: Great work!!
If the grade is lower than 9 and bigger or equal to 6 then show the following message: You've done it!
Else show the following message: You need to do all the exercises again, please try again!
Change teh grade value to test all cases
*/

let grade = 5;

if (grade >= 9){
    console.log('Great Work!')
} else if (grade < 9 && grade >= 6){
    console.log('You\'ve done it!')
} else {
    console.log('You need to do all the exercises again, please try again!')
}