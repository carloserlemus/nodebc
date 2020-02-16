/*
Define a groot object
Add 2 methods, greet and speak
Both methods will return the following phrase:
I'm Groot!!
Using console.log call both methods (one time each) and show the following output:
Greet: I'm Groot!!
Seack: I'm Groot!!
*/

let groot = {
    speak: function(){
        console.log('I am groot!')
    },
    greet: function(){
        console.log('I am GrOoT!')
    }
}

groot.speak();
groot.greet();