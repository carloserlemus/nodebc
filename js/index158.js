/*
Copy and paste the code from the previous exercise ()
Refactor the code to match new requirements
Define a budget variable

Add all <PS4 games price> and assign it to the budget variable

Show the following message as output:
I need %budget% CAD to get all this PS$ great games!!
Define a new gameNames array and assign all the games names (all strings)
Define a new gamePrices array and assign all the games prices (all numbers)
Show the gameNames items as output
Show the gamePrices items as output
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

initialValue = 0;

let budget = gamesCollection.reduce(function(total, currentValue){
    return total + currentValue.price        
}, initialValue);

console.log('I need %o CAD to get all these snes games!', budget)


// A loop that unshifts names into the pre-defined empty array.
let gamesNames = [];
let gamesPrice = [];

for (i = 0; i < gamesCollection.length; i++){
    gamesPrice.unshift(gamesCollection[i].price)
}

for (i = 0; i < gamesCollection.length; i++){
    gamesNames.unshift(gamesCollection[i].name)
}
console.log(gamesNames)
console.log(gamesPrice)
