/* ASSIGNMENT ---- concepts: increments and decrements.
Create a new index33.js file
Define the userCount variable and assign the following value: 100
Increment the user count by 5
Show the following output: Users count: %userCount%
Decrement the user count by 3
Show the following output: Users count: %userCount%
We bought a new company so now we double the user count
Show the following output: Users count: %userCount%
We know that 50% of the users identify as men and the other 50% identify as women
Show the following output: Users count: %userCount%, %menCount% % & %womenCount% %
Use as many assignment operators as you can
*/

let userCount = 100;

userCount +=5;
console.log('User count: %o', userCount);

userCount -=3;
console.log('User count: %o', userCount);

userCount *=2;
console.log('User count: %o', userCount);

console.log('-----------------------------------------');
console.log('User count: %o \nmen:   %o\nwomen: %o', userCount, userCount /=2, userCount);

/*-------------------------------------------------------------------------------------------
NOTES
    IMPORTANT DETAILS:
    - Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
    - The difference between ++ postfix and prefix:
        PREFIX: if ++var, returns var after incrementing
        POSTFIX: if var++, returns var before incrementing

        The difference is only visible when you apply post/prefix in a returned value such as:
            let a = ++var;
            let a = var++;
*/