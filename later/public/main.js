var ref = new Firebase("https://schedulepicker.firebaseio.com/")
var app = angular.module("myApp", ["firebase"]);


app.controller("MainController", function($scope, $firebaseAuth, $firebaseArray){
	$scope.authObj = $firebaseAuth(ref);
	$scope.num_conflicts = 0;

	$scope.button_text = 'Log In!';
	$scope.login = function(){
	$scope.authObj.$authWithOAuthPopup("google").then(function(authData) {
	  console.log("Logged in as:", authData.uid);
	  $scope.button_text = 'Log Out!';
	}).catch(function(error) {
	  console.error("Authentication failed:", error);
	});
	}

	$scope.add_conflict = function(){
		$scope.num_conflicts ++;
		var date_init = document.getElementById("date-initial");
		var time_init = document.getElementById("time-initial");
		
		var date_final = document.getElementById("date-final");
		var time_final = document.getElementById("time-final");
		
		alert(date_init.value);


		};	

	$scope.range = function(min, max, step) {
	    step = step || 1;
	    var input = [];
	    for (var i = min; i <= max; i += step) {
	        input.push(i);
	    }
	    return input;
	};



})