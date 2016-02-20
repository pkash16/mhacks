var name = "Sohil";
var iyear;
var imonth;
var iday;
var ihour;
var iminute;
var fyear;
var fmonth;
var fday;
var fhour;
var fminute;

var timez = [];

var myFirebaseRef = new Firebase("https://torrid-fire-8164.firebaseio.com/Events");


function myJsFunction(){
	/*iyear = document.getElementById('input1').value;
	imonth = document.getElementById('input2').value;
	iday = document.getElementById('input3').value;
	ihour = document.getElementById('input4').value;
	iminute = document.getElementById('input5').value;
	fyear = document.getElementById('input6').value;
	fmonth = document.getElementById('input7').value;
	fday = document.getElementById('input8').value;
	fhour = document.getElementById('input9').value;
	fminute = document.getElementById('input10').value;
	timez.push(new Date(iyear,imonth,iday,ihour,iminute,01,01));
	timez.push(new Date(fyear,fmonth,fday,fhour,fminute,01,01));
	document.write(timez[0]);
	document.write(timez[1]);
	*/



      /* var randomseed = Math.floor((Math.random() * 1000) + 1);
        var usersRef = myFirebaseRef.child(randomseed);

            var hopperRef = usersRef.child(name);
            hopperRef.set({
                "name" : name,
                "itime": timez[0].toDateString(),
                "ftime": timez[1].toDateString()
            });

	//FOR CREATTED DB

         var superref = hopperRef;
            superref.update({
				"name" : name,
				"itime": timez[0].toDateString(),
				"ftime": timez[1].toDateString()
        });

 */

	// Get a database reference to our posts
	var ref = new Firebase("https://torrid-fire-8164.firebaseio.com/Events/116");

// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
		document.write(snapshot.valueOf().toString());
	}, function (errorObject) {
		document.write("The read failed: " + errorObject.code);
	});
 }

