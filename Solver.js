var name = "Pmoney";
var year;
var month;
var day;
var hour1;
var hour2;
/*for(var x; x<25; x++) {
	year.get
}
*/

var times = new Date(2016,02,16,08,00,10,01);
var timez = [];
//document.write(timez[0]);

function myJsFunction(){
     year = document.getElementById('input1').value;
	 month = document.getElementById('input2').value;
	 day = document.getElementById('input3').value;
	 hour1 = document.getElementById('input4').value;
	 hour2 = document.getElementById('input5').value;
	timez.push(new Date(year,month,day,hour1,hour2,10,01));
	document.write(timez[0]);

	var myFirebaseRef = new Firebase("https://torrid-fire-8164.firebaseio.com/Events");


	var usersRef = myFirebaseRef.child("Dates");


	var randomseed = Math.floor((Math.random() * 1000) + 1);
		var hopperRef = usersRef.child(randomseed);
		hopperRef.set({
			"value": timez[0].toDateString()
		});

		var superref = hopperRef;
		superref.update({
		"value2": timez[0].toDateString()
	});

	/*if(usersRef != null) {
		usersRef.set({
			event1: {
				name: name,
				value: timez[0].toDateString()
			}
		});
	}
*/

 }

