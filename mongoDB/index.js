const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const express = require('express');
const app = express()

app.get('/', (req, res) => {
	mongoClient.connect(url, function(error, client) {
		const db = client.db('comics');
		const collection = db.collection('superheroes');
	
		collection.find({}).toArray((error, documents) => {
			client.close();
			res.render('index', { documents: documents });
		});
	});
})
