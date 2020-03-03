/*
index.js
Create an HTTP web server using port 3001
Execute an HTTP request to the server using the browser
The server will send the following text as response:
Congrats you're using your first Node.js Web Server
When the server starts it needs to show the following message:
This HTTP server is running on port %port%
In case there's an error show the following message:
Unable to start the server on port %port%
*/

const http = require('http'); //calls on the node JS http module.
const port = 3001;

const requestHandler = (request, response) => {     //the callback function used as a parameter for createServer()
    console.log(request.url)
    response.end('Congrats you\'re using your first Node.js Web Server')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err){
        return console.log(`Unable to start the server on port ${port}`, err)
    } else {
        console.log(`Server is listening to ${port}`)
    }
})
