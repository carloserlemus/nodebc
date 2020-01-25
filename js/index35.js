/* 
Define the clientId variable and assign the following value: 143245
Define the inputClientId variable and assign the following value: '143245'
Show as output if the input client id is the same as the client id value (use comparison by value)
Example: The input client id is correct by value? true or false
Show as output if the input client id is the same as the client id value (use comparison by value & type)
Example: The input client id is correct by value and type? true or false
*/

let clientId = 143245;
let inputClientId = '143245';

// inputclient id == clientid
// inputclient id === clientid

console.log('The input client id is correct by value? %o', clientId == inputClientId);
console.log ('The input client id is the same as the client id value? %o', clientId === inputClientId);
