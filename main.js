chrome.browserAction.onClicked.addListener( 
  function(tab) {
   chrome.tabs.executeScript(
     null,{
       code:"var ps1 = document.getElementsByTagName('html')[0].innerHTML;window.alert(ps1);"});
          }
);