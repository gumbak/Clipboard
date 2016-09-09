var clipboard = [];
var currIndex = 0;
var copyCommand = new CopyCommand();
var pasteCommand = new PasteCommand();

chrome.commands.onCommand.addListener(function(input) {
    switch(input) {
    	case COMMAND_TYPES.COPY:
    		copyCommand.execute(clipboard);
    		break;
    	case COMMAND_TYPES.PASTE:
            var text = clipboard[currIndex];
    		pasteCommand.execute(text);
    		break;
        case COMMAND_TYPES.GO_TO_NEXT_TEXT:
            currIndex = currIndex < clipboard.length - 1 ? currIndex + 1 : 0;
            break;
        case COMMAND_TYPES.REMOVE:
            clipboard.splice(currIndex, 1);
            if (currIndex > 0) {
                currIndex--;
            }
            break;
    	default:
    		break;
    }

});