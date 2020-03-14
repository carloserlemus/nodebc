// Dependencies
const mongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

// Internet Stuff
const url = 'mongodb://localhost:27017';
const port = 3000;

// configure express to use pug template engine.
app.set('view engine', 'pug');

//configure express to use the public folder
app.use(express.static('public'));


app.get('/', (req, res) => {
    mongoClient.connect(url, function (err, client) {
        const db = client.db('comics');
        const collection = db.collection('superheroes');

        collection.find({}).toArray((error, documents) => {
            client.close()
            const indexVariables = {
                pageTitle: "First page of our app",
                superheroes: documents
            }

            res.render('index', {variables: indexVariables})
        });
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log('Something wrong!')
    } else {
        console.log('Smooth Sailing')
    }
})