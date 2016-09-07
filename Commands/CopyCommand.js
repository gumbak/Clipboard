class CopyCommand {
	execute(clipboardData) {
		chrome.tabs.executeScript({
			code: "window.getSelection().toString();"
		}, function(selection) {
			var stringToCopy = selection && selection[0];
			if (!stringToCopy) {
				return;
			}
			
			clipboardData.push(stringToCopy);
			document.execCommand('copy');
		});				
	}
}