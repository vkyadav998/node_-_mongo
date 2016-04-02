var app = angular.module('myApp', []);

app.controller("HomeCtrl", ['$scope','$http', function($scope,$http){
    

     $scope.sendInquery=function(){
    		
    		var reqdata ={
    				 "name":$scope.name,
    				"email":$scope.email,
    			   "mobile":$scope.mobile,
    			  "message":$scope.message
    			};
    			console.log(reqdata);
    		$http({
    	        method: 'POST',
    	        headers: {
    	        	   'Content-Type': "application/json"
    	        	 },
    	        url: '/enquiry',
    	        data:reqdata
    	    }).
    	    success( function(response) {
    	        console.log("success");
    	    }).
    	    error( function(response) {
    	        console.log("error");
    	    });
    	};
		  
}]);//end HomeCtrl

