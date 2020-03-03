/*
Create a Express web server using port 3000
Execute an HTTP request to the server using the browser
The server will send the following text as response:
Congrats you're using your first Node.js and Express as Web Server
When the server starts it needs to show the following message:
This HTTP server is running on port %port%
In case there's an error show the following message:
Unable to start the server on port %port%
Also update the server listen method to use logplease module
*/

const express = require('express'); // requires the express module
const app = express()               // creates the express server

const port = 3000

const Logger = require('logplease');
const logger = Logger.create(`This HTTP server is running on ${port}`)
const loggerError = Logger.create(`Unable to start the server on port ${port}`)

app.get('/', (request, response) => {
    response.send('Congrats you\'re using your first Node.js and Express as Web Server')
});

app.listen(port, (err) => {
    if (err){
        loggerError.info()
    } else {
        logger.info()
    }
})