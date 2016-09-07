class PasteCommand {
	execute(text) {
		chrome.tabs.executeScript({
			code: "document.execCommand('insertHTML', false, " + text + ");"
		}, function(isExecuted) {
			
		});		
	}
}