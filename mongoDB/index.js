// Require Mongo from MongoDB module.
const mongoClient = require('mongodb').MongoClient;

// MongoDB url to connect to...
const url = 'mongodb://localhost:27017';


//mongoClient has a method that allows us to connect to mongoDB.
mongoClient.connect(url, (err, client) => {
    console.log("connected successfully to server");
    // Use a 'client' object to get the database...
    const db = client.db('comics');
    // We can get the collection via collection method.
    const collection = db.collection('superheroes');
    
    collection.find({}).toArray((err, documents) => {
		console.log(documents);
		client.close();
	});
})

