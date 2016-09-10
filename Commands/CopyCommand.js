class CopyCommand {
	constructor(maxClipboardLength) {
		this._maxClipboardLength = maxClipboardLength;
	}

	execute(clipboard) {
		if (!clipboard) {
			return;
		}

		var getSelectionScript = "window.getSelection().toString();";
		chrome.tabs.executeScript({
			code: getSelectionScript
		}, function(selection) {
			var stringToCopy = selection && selection[0];
			if (!stringToCopy || clipboard.length >= this._maxClipboardLength) {
				return;
			}			
			clipboard.push(stringToCopy);
		}.bind(this));				
	}
}