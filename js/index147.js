/*
Copy and paste the code from the previous exercise
Refactor the code to match the requirements
The shouldOpenBatCave function not longer accepts two parameters
Now the shouldOpenBatCave function only accepts a user parameter
Instead of calling the shouldOpenBatCave function passing username and password now we only pass the user object
The rest of the code should still work the same way and show the proper output
*/

let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
    shouldOpenBatCave: function(username){
        if (username === 'batman'){
            console.log('Welcome back batman!')
        } else{
            console.log('You\'re not batman! BEAT IT!')
        }
    }
};

user.shouldOpenBatCave(user.username)
user.shouldOpenBatCave('batman', 'Alfred1960ROCKS!')
user.shouldOpenBatCave('batman', 'Alfred1960SUCKS!')