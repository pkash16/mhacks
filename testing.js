
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
   
    var tab = tabs[0];


    var url = tab.url;

    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

}
$(document).ready(function(){
/*getCurrentTabUrl(function(url) {
	$.get(url, function(data){
		//dataparsing
		alert(data);
	});
});*/


$('#btn_start').click(function(){
	 chrome.tabs.create({'url': chrome.extension.getURL('solver.html')}, function(tab) {
        // Tab opened.
    });
});

});
