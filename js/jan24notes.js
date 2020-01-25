/* playing with types -- in a weakly typed language.

var name = 'carlos';
var age = 100;

console.log(name);
console.log(age);

*/
// ------------------------------------------------------

// data type is a block, a data structure is a wall.

/*

const person = {
    name: 'Jane',
    age: 31
}

// object is a data type in JS.

console.log(person.name);
console.log(person.age);

console.log(person, typeof(person));

function example(){
    //silencio
}



console.log(example, typeof example);

*/

// to reference the variables in the person object we have to type variable.variable

// ---------------------------------------
/*
    When javascript was created the semicolons were NECESSARY
    ECMA releases diff versions of JS frequently. We are currently running ECMA 7.
    Now it's not mandatory but we can POTENTIALLY run into problems when we don't use it. 
*/
// ---------------------------------------

// what does refactor mean? 


/*
const name1 = 'John';
console.log(name1);

name1 = 'paul';
console.log(name1);
*/

/*
let name = 'jane';
let age = 31;

console.log(name + ' is ' + age + ' years old.');
*/

// const is not a REAL const at the moment. var is crazy. let is flexible.


// -----------------------------------------------------------------------
// for things that are mutable, use let. things that are immutable use const.
// -----------------------------------------------------------------------
/*
let name = 'jane';
let age = 31;

let glue = ' is ';

console.log(name + glue + age);
*/

// data: when you want to rep n elements in agroup-- this is an array of elements, a list of elements.


//TEMPLATE LITERALS, newish...we use an accent grave... and embed expressions vis a vis ${}

