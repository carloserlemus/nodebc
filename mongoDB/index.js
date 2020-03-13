// Require Mongo from MongoDB module.
const mongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

// MongoDB url to connect to...
const url = 'mongodb://localhost:27017';

app.get('/', (req, res) => {
	MongoClient.connect(url, function(err, client) {
		const db = client.db('comics');
		const collection = db.collection('superheroes');

		collection.find({}).toArray((error, documents) => {
			client.close();
			res.render('index', { documents: documents });
		});
	});
});


