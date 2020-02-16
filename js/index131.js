/*
Define a femaleStudents array and assign 5 students
Define a maleStudents array and assign 5 students
Define a students array and assign all students name using the femaleStudents and maleStudents arrays
Sort the students list
Show the following output:
Each femaleStudents name using numeric indexes
Each maleStudents name using while
Each students name using for
*/

let femaleStudents = ['Jenny', 'Caroline', 'Margaret', 'June', 'Mable'];
let maleStudents = ['Don', 'Jack', 'Fred', 'Bill', 'Bruce'];
let allStudents = femaleStudents.concat(maleStudents);
let sortedStudents = allStudents.sort();
let maleIndex = 0;

console.log('Female Students: %o %o %o %o %o', femaleStudents[0], femaleStudents[1], femaleStudents[2], femaleStudents[3], femaleStudents[4]);

while (maleIndex <=5){
    maleStudents[maleIndex]
    maleIndex++

    if (maleIndex == 4){
        console.log('Male Students: ' + maleStudents.join(', '));
    }
}
let s = ''
for (i = 0; i < 10; i++){
    s += ' ' + allStudents[i]
    if (i == 9){
        console.log('All the students: ' + s)
    }

}

//i want male student index 0 to show, then show index 1... how do I add 1 to the index? 