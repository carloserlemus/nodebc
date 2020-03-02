/*
Install the logplease module documentation module as dev dependency
Import the logplease module
Import the numbers module

Call the isEven function with the following values: 2, 3, 101, 201, 202, 100 (one call for each number)

Show the following message using the info method if the number is even:
%number% is even

Show the following message using the error method if the number is not even:
%number% is odd
*/

const isOdd = require('./numbers.js')

const Logger = require('logplease')



function logOdd(number){    
    const loggerE = Logger.create(`${number} is even.`);
    const loggerO = Logger.create(`${number} is odd`);

    if (isOdd(number) == true){
        loggerE.info(isOdd(number))
    } else {
        loggerO.info(isOdd(number))

    }

}

logOdd(2)
logOdd(3)
logOdd(101)
logOdd(201)
logOdd(202)
logOdd(100)
