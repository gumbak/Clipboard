class CopyCommand {
	execute(clipboard) {
		if (!clipboard) {
			return;
		}

		var getSelectionScript = "window.getSelection().toString();";
		return new Promise(function(resolve, reject) {
			chrome.tabs.executeScript({
				code: getSelectionScript
			}, function(selection) {
				var stringToCopy = selection && selection[0];
				if (!stringToCopy || clipboard.length >= CONFIG.MAX_CLIPBOARD_LENGTH) {
					return;
				}			
				clipboard.push(stringToCopy);
				resolve();
			});
		});
	}
}