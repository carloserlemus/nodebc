/*
Define a fibonacci variable and assign a function value
When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
Execute this function 3 times
*/

let fibo = function(){
    for (n = 0, f = 0, f1 = -1, f2 = 1; n <= 9; n++){
        f = f1 + f2
        f1 = f2
        f2 = f
        console.log(f)
    }
}

fibo();
fibo();
fibo();