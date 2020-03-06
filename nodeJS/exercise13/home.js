/*
Create a route handler
This router will handle the GET HTTP method
The response will send the following message:
This is my Home page using Express Router
*/


/*
// Create the express router to handle our home requests
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome to our Site!');
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('This is my Home page using Express Router')
})

module.exports = router;