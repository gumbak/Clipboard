var viewManager = new ViewManager();
var port = chrome.extension.connect( { name: CONFIG.POPUP_PORT_NAME });
port.onMessage.addListener(function(sMessage) {
	sMessage = sMessage || {};
	var sClipboard = sMessage.clipboard;
	var sCurrIndex = sMessage.currIndex;
	if (!sClipboard || isNaN(sCurrIndex)) {
		return;
	}

	var aClipboard = JSON.parse(sClipboard);
	var sCurrIndex = JSON.parse(sCurrIndex);
	viewManager.updateDisplay(aClipboard, sCurrIndex);
});