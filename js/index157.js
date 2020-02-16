/*
Copy and paste the code from exercise 156
Refactor the code to match requirements:


At the beginning of the code define a console variable and assign one of the following values as string: PS4 or XBOX

Iterate over the games array and filter to show only the ones which console property equals the selected console variable value

Basically we filter games by PS4 or XBOX using the array filter method
*/
let consoleUnit = 'SNES'
let consoleUnitOther = 'Other'

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

// I have an array of objects.
// iterate over this array and filter to show the ones that match. I want each pass to filter a different element in the array.

let snesFilter = gamesCollection.filter(function(x){
    return x.console === consoleUnit;
})

let otherFilter = gamesCollection.filter(function(x){
    return x.console === consoleUnitOther;
})

console.log(otherFilter)