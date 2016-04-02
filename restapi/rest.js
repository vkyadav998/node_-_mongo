var express = require('express');
var router = express.Router();

var rest1 = require("./rest1.js");

router.post("/", function(req, res){
	var enquiryJson = req.body;

	/*console.log("req.body: " + req.body);*/
	
	rest1.enquiryMail(enquiryJson);
	res.json({success:true});
});

router.get("/", function(req, res){
	
	var data= rest1.getenquery(res);
	
	console.log("data in rest : "+data);
	
	
});

module.exports = router;