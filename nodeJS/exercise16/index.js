/*
Create a Express web server using port 3000
Configure express static folder to use the public folder
Create an assets alias
*/

const express = require('express');
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// Sets up folder for static content.
app.use(express.static('public'));
app.use('/assets', express.static('public'));

app.listen(port, (err) => {
    if (err){
        console.log('error')
    } else {
        console.log('smooth sailing.')
    }
})