//var ref = new Firebase("https://torrid-fire-8164.firebaseio.com/Events")
var ref = new Firebase("https://schedulepicker.firebaseio.com/Events");
var app = angular.module("myApp", ["firebase"]);


app.controller("MainController", function($scope, $firebaseAuth){
	$scope.authObj = $firebaseAuth(ref);
	$scope.num_conflicts = 0;

	$scope.button_text = 'Log In!';
	$scope.login = function(){
	$scope.authObj.$authWithOAuthPopup("google").then(function(authData) {
	  console.log("Logged in as:", authData.uid);
	  $scope.logged_in_status = authData.uid;
	  $scope.button_text = 'Log Out!';
	}).catch(function(error) {
	  console.error("Authentication failed:", error);
	});
	}

	$scope.add_conflict = function(){
		//if($scope.logged_in_status != null){

		if($scope.logged_in_status == null){
			$scope.logged_in_status = "dummy id, google failed for debugging";
		}


		$scope.num_conflicts ++;
		var date_init = document.getElementById("date-initial");
		var time_init = document.getElementById("time-initial");
		
		var date_final = document.getElementById("date-final");
		var time_final = document.getElementById("time-final");
		
		var group_code = ID();
		ref.child(group_code).child($scope.logged_in_status).set({"itime":date_init.value + '-' + time_init.value, "ftime": date_final.value + '-' + time_final.value });
		//}

		/*else{
			//alert("you need to log in with google first!");

		}*/

		};	

	$scope.range = function(min, max, step) {
	    step = step || 1;
	    var input = [];
	    for (var i = min; i <= max; i += step) {
	        input.push(i);
	    }
	    return input;
	};

	var ID = function(){
		return '_' + Math.random().toString(36).substr(2,9);
	}



})