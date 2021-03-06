//var ref = new Firebase("https://torrid-fire-8164.firebaseio.com/Events")
var ref = new Firebase("https://schedulepicker.firebaseio.com/Events");
var app = angular.module("myApp", ["firebase"]);


app.controller("MainController", function($scope, $firebaseAuth){
	$scope.authObj = $firebaseAuth(ref);
	$scope.num_conflicts = 0;

	$scope.dates = {};
	$scope.groupcode ="";

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
	var ID = function(){
		return '_' + Math.random().toString(36).substr(2,9);
	}
	var group_code = ID();

	$scope.add_conflict = function(){
		//if($scope.logged_in_status != null){

		if($scope.logged_in_status == null){
			$scope.logged_in_status = "dummy id, google failed for debuggin";
		}


		$scope.num_conflicts ++;

		var itime = $scope.dates[$scope.num_conflicts-1].dateInitial + '-' + $scope.dates[$scope.num_conflicts-1].timeInitial;

		var timesplice = itime.indexOf('00:00:00');
		itime = itime.slice(0, timesplice) + itime.slice(timesplice + 8, itime.length);
		var colon = itime.indexOf(':') - 2;
		itime = itime.slice(0,16) + itime.slice(colon,itime.length);
		var colon2 = itime.indexOf(':') + 6;
		itime = itime.slice(0,colon2);


		var ftime = $scope.dates[$scope.num_conflicts-1].dateFinal + '-' + $scope.dates[$scope.num_conflicts-1].timeFinal;
		
		var timesplice = ftime.indexOf('00:00:00');
		ftime = ftime.slice(0, timesplice) + ftime.slice(timesplice + 8, ftime.length);
		var colon = ftime.indexOf(':') - 2;
		ftime = ftime.slice(0,16) + ftime.slice(colon,ftime.length);
		var colon2 = ftime.indexOf(':') + 6;
		ftime = ftime.slice(0,colon2);

		if(!isEmpty(document.getElementById("groupcode").value) && document.getElementById("groupcode").disabled == false){
			group_code = document.getElementById("groupcode").value;
			alert(group_code);
		}

		document.getElementById("groupcode").value = group_code;
		document.getElementById("groupcode").disabled = true;

		ref.child(group_code).child($scope.logged_in_status).child($scope.num_conflicts).set({"itime" : itime , "ftime": ftime}); 


		//ref.child(group_code).child($scope.logged_in_status).set({"itime":date_init.value + '-' + time_init.value, "ftime": date_final.value + '-' + time_final.value });
		

		/*}else{
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

	var splice_it = function(string){
		var timesplice = string.indexOf('00:00:00');

		string = string.slice(0, timesplice) + string.slice(timesplice + 8, itime.length);

		var colon = string.indexOf(':') - 2;

		string = string.slice(0,16) + string.slice(colon,string.length);

		var colon2 = string.indexOf(':') + 6;

		string = string.slice(0,colon2);

		return string;
	}

	function isEmpty(str){
	    return !str.replace(/^\s+/g, '').length; // boolean (`true` if field is empty)
	}

})