/*
Define an average variable and assign the following value: 6
Define a studentAverage variable and assign the following value: 4
Show the following output:
This student has a greater or equal average required to pass: true/false
This student is missing %points% to pass
*/

let average = 6;
let studentAverage = 4;

let pass = (studentAverage >= average);

//student >= tp pass
//student is missing points to pass.

console.log('This student has a greater or equal average required to pass:', pass);
console.log('This student is missing %o points to pass', (average - studentAverage));