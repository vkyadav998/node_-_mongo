var express = require('express');
var mongodb = require('mongodb');

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/testdata';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('users');
    
  
   for(var i =0; i <= 4; i++){
	   for(var j=0 ; j<=4;j++){
    var user = {x: i,name:"vipin"+j};
    console.log(user);
 // Insert some users
    collection.insert(user, function (err, result) {
      if (err) {
        console.log(err);
        console.log("its error try again");
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
    });
    }
   }
   /*//Close connection
   db.close(); */
  }
});