/*
Define a students array and assign more than 6 student names
Show the second and sixth students name in uppercase
Also, show the students array length with the following format:
The students array has 8 items
(This is a example and you should replace 8 for your students array length)
*/

let students = ['Mengdi', 'Roza', 'Sammi', 'Pariya', 'Dan', 'Carlos'];

console.log('The students array has %o items.', students.length);

console.log(students[1].toUpperCase() + ' ' + students[5].toUpperCase())

students[6] = 'Ricky'
students[7] = 'Bobby'

console.log('The students array has %o items.', students.length);
