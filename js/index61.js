/*
Define weekdayNumber and assign a numeric value between 1 and 7
If weekday number is 1 show the following message: Today it's Monday
If weekday number is 2 show the following message: Today it's Tuesday
If weekday number is 3 show the following message: Today it's Wednesday
If weekday number is 4 show the following message: Today it's Thursday
If weekday number is 5 show the following message: Today it's Friday
If weekday number is 6 show the following message: Today it's Saturday
If weekday number is 7 show the following message: Today it's Sunday
If weekday number it's not bettwen 1 and 7 show an error message: Error: Please input a number bettwen 1 and 7

Switch version:
Use a switch statement to show weekday name using the weekday variable value

IF/ELSE/IF version:
After the switch version create the same functionality but using if/else/if statement

Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value

Refactor
Once you have the code working for both statements refactor the code as follows
Don't use console.log() inside the switch statement
Instead add a message variable so each case only adds the selected weekname message
Use only one console.log() after the switch statement to show the result and error
*/

let weekdayNumber = 4;
let message = null; //the absence of a value is its value


//switch statement structure
switch (weekdayNumber){
    case 1:
        message = 'Today is Monday'
        break;
    case 2:
        message = 'Today is Tuesday'
        break;
    case 3:
        message = 'Today is Wednesday'
        break;
    case 4:
        message = 'Today is Thursday'
        break;
    case 5:
        message = 'Today is Friday'
        break;
    case 6:
        message = 'Today is Saturday'
        break;
    case 7:
        message = 'Today is Sunday'
        break;
    default:
        console.log('Error, please enter a number between 1 and 7');
}

// Without the console.log here, the switch would assign an expression to message but wouldn't output anything to the console.
console.log(message);

/*
// if else if structure
if (weekdayNumber === 1){
    console.log('Today is Monday')
} else if (weekdayNumber === 2){
    console.log('Today is Tuesday')
} else if (weekdayNumber === 3){
    console.log('Today is Wednesday')
} else if (weekdayNumber === 4){
    console.log('Today is Thursday')
} else if (weekdayNumber === 5){
    console.log('Today is Friday')
} else if (weekdayNumber === 6){
    console.log('Today is Saturday')
} else if (weekdayNumber === 7){
    console.log('Today is Sunday')
} else if (weekdayNumber < 1 || weekdayNumber > 7){
    console.log('Error input a number between 1 and 7')
}
*/