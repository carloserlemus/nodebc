/*
Create a Express web server using port 3000
Create the following routes:
GET '/': send the index.html file
GET '/products': send the products.html file
*/

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/products', (request, response) => {
    response.sendFile(path.join(__dirname, 'products.html'))
})

app.listen(port, (err) => {
    if (err) {
        console.log('Error!')
    } else {
        console.log('Smooth sailing.')
    }
})