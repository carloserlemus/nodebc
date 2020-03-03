const express = require('express');
const app = express();

const myMiddleware = function(abc, res, next) {
  // We set a new property in the request object
  abc.someValue = 'This is a value to test the Middleware'; // this is injected into express runtime.
  console.log('hi from middle ware')
  
  // We call the next middleware
  next();
}

app.use(myMiddleware) // use this function as a middle ware.


app.get('/', (req, res) => {
    console.log('This is the main runtime')
    const responseMessage = req.someValue; // We get the request value that we setted from the middleware
    
    res.send(responseMessage);
});


app.listen(3000);