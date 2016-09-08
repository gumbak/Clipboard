class PasteCommand {
	execute(text) {
		if (!text) {
			return;
		}

		var insertTextScript = "document.execCommand('insertHTML', false, '" + text + "');";
		chrome.tabs.executeScript({
			code: insertTextScript
		});		
	}
}