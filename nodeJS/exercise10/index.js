/*
`Create a Express web server using port 3000
`Create the following route handlers and send the corresponding response back
Routes:
`GET /: show a welcome message
GET jokes: show at least 2 jokes
GET joke: show 1 joke
POST joke: my jokes are too funny, I'm not getting new ones from you..
PUT joke: no, no, no.. not changing my act dude!
DELETE: joke: good jokes never get to old
All: joke: I know I'm so good that you're looking for jokes everywhere
Use Postman to try all this options
You can use one-liner-joke module to create the jokes
*/

var oneLinerJoke = require('one-liner-joke')  // install the one-liner-joke module.
const express = require('express');             // install the express module.
const app = express();
const port = 3000;

// Welcome Message
app.get('/', (request, response) => {
    response.send('<h1>Welcome to the gun show!</h1> \n <p>test test test</p>')
});

// route: /joke, shows one joke.
app.get('/joke', (request, response) => {
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    response.send(getRandomJoke.body)
});


// 2 jokes needs work
// .body property shows the joke which is a string.

app.get('/jokes', (request, response) => {
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    var getRandomJoke2 = oneLinerJoke.getRandomJoke();
    let twoJokes = `<p>${getRandomJoke.body}</p><p>${getRandomJoke2.body}</p>`
    response.send(twoJokes)
})

// used postman for all additional response methods.

app.listen(port, (err) => {
    if (err){
        console.log('Error!')
    } else {
        console.log('Smooth sailing.')
    }
})

