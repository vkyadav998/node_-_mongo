var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

var rest = require("./restapi/rest");

app.use(bodyParser.json({limit: '10mb'})); 
app.use(bodyParser.urlencoded({limit: '10mb', extended: true })); 

app.use(express.static('public'));

app.use("/enquiry", rest);

app.listen(3001, function () {
	console.log('Example app listening on port 3001!!');
});
