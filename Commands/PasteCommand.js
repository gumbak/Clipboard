class PasteCommand {
	execute(text) {
		if (!text) {
			return;
		}

		var insertTextScript = "document.execCommand('insertHTML', false, unescape('" + escape(text) + "'));";
		chrome.tabs.executeScript({
			code: insertTextScript
		});		
	}
}