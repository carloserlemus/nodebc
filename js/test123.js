const rando = [
    {
        name: 'X',
        price: 100
    },
    {
        name: 'Y',
        price: 200
    },
    {
        name: 'Z',
        price: 200
    },
    {
        name: 'N',
        price: 400
    }
]

let randoB = rando.reduce(function(x,y){
    return x.price + y.price
})

console.log(randoB)