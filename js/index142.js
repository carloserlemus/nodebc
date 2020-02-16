/*
Define a firstPerson variable
Define a secondPerson variable

Assign a new array to each defined variable with the following structure


The first item is the person first name (string)
The second item is the person last name (string)
The third item is the person address (string)
The fourth item is the person age (number)

Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them
Compare the strings result to see if they are the same person (if they are they should match)
Try using the same person (with different variables) and also try different people
*/

let firstPerson = ['Bill', 'Burr', '1234 ABC ST.', 60];
let secondPerson = ['Dave', 'Attel', 'Pumpkin Lane', 1000];
let thirdPerson = ['Bill', 'Burr', '1234 ABC ST.', 60];

let firstData = firstPerson.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})

let secondData = secondPerson.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})

let thirdData = thirdPerson.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})

if (firstData == secondData){
    console.log(`${firstPerson[0]} and ${secondPerson[0]} are two different people`)
} else if (firstData == thirdData){
    console.log(`${firstPerson[0]} is the same person as ${thirdPerson[0]}`)
} else {
    console.log('It\'s all good.')
}