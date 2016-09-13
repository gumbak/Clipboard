var clipboard = [];
var currIndex = 0;
var popupPort = [];
var copyCommand = new CopyCommand();
var pasteCommand = new PasteCommand();

var _sendClipboardToPopup = function() {
    if (!popupPort) {
        return;
    }

    popupPort.postMessage({ clipboard: JSON.stringify(clipboard) });   
};

chrome.commands.onCommand.addListener(function(input) {
    switch(input) {
    	case CONFIG.COMMAND_TYPES.COPY:
    		copyCommand.execute(clipboard);
    		break;
    	case CONFIG.COMMAND_TYPES.PASTE:
            var text = clipboard[currIndex];
    		pasteCommand.execute(text);
    		break;
        case CONFIG.COMMAND_TYPES.GO_TO_NEXT_TEXT:
            currIndex = currIndex < clipboard.length - 1 ? currIndex + 1 : 0;
            break;
        case CONFIG.COMMAND_TYPES.REMOVE:
            clipboard.splice(currIndex, 1);
            if (currIndex > 0) {
                currIndex--;
            }
            break;
    	default:
    		break;
    }
    // viewManager.updateDisplay(clipboard, currIndex);
    _sendClipboardToPopup();
});

chrome.extension.onConnect.addListener(function(port) {
    if (port.name != CONFIG.POPUP_PORT_NAME) {
        return;
    }

    popupPort = port;
    popupPort.onDisconnect.addListener(function() {
        popupPort = null;
    });
    _sendClipboardToPopup();
});