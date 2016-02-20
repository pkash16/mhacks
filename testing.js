$(document).ready(function(){
var myFirebaseRef = new Firebase('https://schedulepicker.firebaseio.com/events');
chrome.tabs.getSelected(null, function(tab){
	var tablink = tab.url
	if(tablink.slice(0,23) == "https://mail.google.com"){
		//this is a good conversation to check schedules for.
	}
});

$("#btn_start").click(function(){
	
});
});

$("#btn_join").click(function(){
	myFirebaseRef.push({name: "hello"});

});