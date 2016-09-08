var MAX_CLIPBOARD_LENGTH = 10;

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
			if (!stringToCopy || clipboard.length >= MAX_CLIPBOARD_LENGTH) {
				return;
			}			
			clipboard.push(stringToCopy);
		});				
	}
}