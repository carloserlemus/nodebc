/*
Create a Express web server using port 3000
Mount the home router on '/'
Mount the user router on '/users'
Once you have the code ready
Test the home router using the browser
Test the users router using Postman
*/

const express = require('express');
const app = express();
const port = 3000;

// Routers
const home = require('./home.js')
const user = require('./user.js')

// Mounting the Routers
app.use('/', home);
app.use('/user', user);

app.listen(port, (err) => {
    if (err){
        console.log('Funkytown.')
    } else {
        console.log('Smooth sailing.')
    }
})







// // Routers
// const home = require('./home.js');
// const products = require('./products.js');

// app.use('/', home);
// app.use('/products', products);