/*
Copy and paste the code from exercise 155
We need to refactor the code
Add a method showDetail to each game object
Calling the showDetail method will output the following message using the game properties values
name: %name%
price: %price%
sold: %sold%
console: %console%
Update the games array iteration code and replace the previous console.log for a call to the showDetail method for each game object
The objective is to use the showDetail to show the object properties values using an object method
*/

let gamesCollection = [
    {
        name: 'Chrono Trigger',
        price: 1500,
        sold: 10000,
        console: 'SNES',
        showDetail: function(){
            console.log('Name: ' + gamesCollection[0].name)
            console.log('Price: ' + gamesCollection[0].price)
            console.log('Sold: ' + gamesCollection[0].sold)
            console.log('Console: ' + gamesCollection[0].console)
            console.log('-----')
        }
    },
    {
        name: 'Final Fantasy 6',
        price: 1300,
        sold: 1000000,
        console: 'SNES',
        showDetail: function(){
            console.log('Name: ' + gamesCollection[1].name)
            console.log('Price: ' + gamesCollection[1].price)
            console.log('Sold: ' + gamesCollection[1].sold)
            console.log('Console: ' + gamesCollection[1].console)
            console.log('-----')
        }
    },
    {
        name: 'Act Raiser',
        price: 1000,
        sold: 1032,
        console: 'SNES',
        showDetail: function(){
            console.log('Name: ' + gamesCollection[2].name)
            console.log('Price: ' + gamesCollection[2].price)
            console.log('Sold: ' + gamesCollection[2].sold)
            console.log('Console: ' + gamesCollection[2].console)
            console.log('-----')
        }
    }
]

for (i = 0; i <= 2; i++){
    gamesCollection[i].showDetail()
}

