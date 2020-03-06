/*
Create a Express web server using port 3000
Create the following routes:
GET '/': Returns the following JSON object
{
  "status": 200,
  "message": "Este request/response está OK"
}


Create the following middleware:
const requestTime = (req, res, next) => {
  const message = `Request: ${req.baseUrl} ${Date.now()}`;
  console.log(message);
  
  next();
};


Configure express to use the requestTime middleware
You should see the following output on each request (Server console):
Request 1506002876731
*/


const express = require('express');
const app = express();
const port = 3000;

// Create Middleware
const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    
    next();
  };

app.use(requestTime);

app.get('/', (req, res) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    
    res.send(message);
  });

app.get('/', (req, res) => {
    res.json({
        "status": 200,
        "message": "Este request/response está OK"
      })
})


app.listen(port, (err) => {
    if (err){
        console.log('Error!')
    } else {
        console.log('Smooth Sailing')
    }
})
