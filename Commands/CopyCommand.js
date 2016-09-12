class CopyCommand {
	execute(clipboard) {
		if (!clipboard) {
			return;
		}

		var getSelectionScript = "window.getSelection().toString();";
		chrome.tabs.executeScript({
			code: getSelectionScript
		}, function(selection) {
			var stringToCopy = selection && selection[0];
			if (!stringToCopy || clipboard.length >= CONFIG.MAX_CLIPBOARD_LENGTH) {
				return;
			}			
			clipboard.push(stringToCopy);
		}.bind(this));				
	}
}