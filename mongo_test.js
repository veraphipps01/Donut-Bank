const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
console.log("Connected successfully to server");

//database name
const dbName = 'myproject';
const db = client.db(dbName);

// new user
var name = "user" + Math.floor(Math.random() * 10000);
var email = name + "@gmail.com";

// insert into customer table
var collection = db.collection('customers');
var doc = {name, email};
collection.insertOne(doc, {w:1}, function(err, result) {
console.log("Inserted document into the collection");
});
var customers = db
.collection('customers')
.find()
.toArray(function(err, docs) {
console.log('Collection:', doc);
//clean up
client.close();
});
});
