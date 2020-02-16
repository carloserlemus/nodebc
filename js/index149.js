/*
Define a user variable and assign a literal object as value
This user will have your personal data
Add at least 10 properties and values to describe you

Try using the following type values as properties values: string, number, boolean, array & object (yes, you can assign a literal object as property too)
Define at least 5 properties when we initialize the user object:
const myObject = {
  property: value,
  property: value,
}
Define the rest of the user properties using the dynamic way
const myObject = {
  property: value,
  property: value,
}

myObject.newProperty = value;
myObject.newProperty = value;
myObject.newProperty = value;
Show the user object as output
*/

let user = {
    name: 'Carlos',
    lastName: 'Rivera-Lemus',
    bday: false,
    color: ['blue', 'green', 'yellow'],
    placeofbirth: {
        city: 'San Salvador',
        country: 'El Salvador'
    }
}

user.height = 181;
user.city = 'vancouver';
user.humanQ = true;

console.log(user)
