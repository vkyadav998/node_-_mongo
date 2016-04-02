var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/testdata';


var firstrestvar = {
	enquiryMail : function(enquiryJson) {

		console.log("name : "+enquiryJson.name);
		console.log("name : "+enquiryJson.email);
		console.log("name : "+enquiryJson.mobile);
		console.log("name : "+enquiryJson.message);
		
		// Use connect method to connect to the Server
		MongoClient.connect(url, function (err, db) {
		  if (err) {
		    console.log('Unable to connect to the mongoDB server. Error:', err);
		  } else {
		    //HURRAY!! We are connected. :)
		    console.log('Connection established to', url);

		    // Get the documents collection
		    var collection = db.collection('users');
		    
		    var user={
		    		name:enquiryJson.name,
		    		email:enquiryJson.email,
		    		mobile:enquiryJson.mobile,
		    		message:enquiryJson.message
		    		};
		    
		    collection.insert(enquiryJson, function (err, result) {
		      if (err) {
		        console.log(err);
		        console.log("its error try again");
		      } else {
		        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
		      }
		    });
		   
		  }
		});
	},	
	
	getenquery : function(res) {
	
	MongoClient.connect(url, function (err, db) {
		  if (err) {
		    console.log('Unable to connect to the mongoDB server. Error:', err);
		  } else {
		    //HURRAY!! We are connected. :)
		    console.log('Connection established to', url);

		    // Get the documents collection
		    var collection = db.collection('users');
		    
		    collection.find({}).toArray(function (err, result) {
		        if (err) {
		          console.log(err);
		        } else if (result.length) {
		          console.log('Data comes from the Database:', result);
		          
		          res.json(result);
		          
		        } else {
		          console.log('No document(s) found with defined "find" criteria!');
		        }
		        //Close connection
		        db.close();
		      });
		   
		  }
		});
	}
	
};

module.exports = firstrestvar;





