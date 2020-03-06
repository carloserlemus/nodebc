/*
Create a Express web server using port 3000
Create the following routes:
GET '/': Return index.html with a 200 status
GET '/products': Return the following message with a 500 status
Server error, please try it later
GET '/users': Return 404.html document with 404 status
index.html
*/

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'))
})

app.get('/products', (req, res) => {
    res.status(500).send('Server error, please try it later')
})

app.get('/users', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(port, (err) => {
    if (err){
        console.log('Fire!')
    } else {
        console.log('Smooth sailing.')
    }
})