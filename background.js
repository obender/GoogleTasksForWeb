


chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({url:'https://tasks.google.com/embed/?origin=https://calendar.google.com&fullWidth=1'});
});



chrome.tabs.onUpdated.addListener(function (tabId,changeInfo,tab) {
	if (changeInfo && changeInfo.status && tab.url && tab.url.startsWith('https://tasks.google.com/embed/')) {
			if (changeInfo.status=='complete') {
					chrome.tabs.executeScript(tab.id,{code:"setTimeout(function () {document.body.style='position:relative;max-width:780px;margin:auto; box-shadow:0px 0px 10px rgba(0, 0, 0, 0.09);display:block !important'; document.body.querySelector('div').style='max-width:780px';},600);"});

			} 	
	}

});