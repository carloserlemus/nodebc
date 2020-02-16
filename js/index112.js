/*
Define a showNumbers function that accepts two numeric parameters: start and end

The showNumbers function will show all the numbers between the start and end numbers

If start is bigger than the second one show the numbers from higher to lower
If start is smaller than the second one then show the numbers from lower to higher
Call the showNumbers function using the following parameters:

start: 0, end: 1000
start: 1000, end: 0
start: 100, end: 100
start: "100", end: 300

Find a way to deal with the following scenarios:
start and end are the same number
parameters that aren't numbers
*/
let comp = 'string';
let showNumbers = function (start, end){
    if (start < end){
        while (start < end){
            ++start
            console.log(start)
        }
    } else if (start > end){
        while (start > end){
            --start
            console.log(start)
        }
    } else if (start == end){
        console.log('Nice Try! Choose different range.')
    } else if (isNaN(start) || isNaN(end)){
        console.log('Start and/or End are not numbers.')
    } else if (){
        console.log('blah')
    }
}

showNumbers(0,10);
showNumbers(10,0);
showNumbers(10,10);
showNumbers('pop', 9);
showNumbers(3, 'Jar');

//not sure why this scenario doesn't work.... 
showNumbers('10', 4);

