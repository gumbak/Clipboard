var clipboard = [];

var copyCommand = new CopyCommand();
var pasteCommand = new PasteCommand();
var resetCommand = new ResetCommand();

chrome.commands.onCommand.addListener(function(input) {
    switch(input) {
    	case COMMAND_TYPES.COPY:
    		copyCommand.execute(clipboard);
    		break;
    	case COMMAND_TYPES.PASTE:
            var text = clipboard[clipboard.length - 1];
    		pasteCommand.execute(text);
    		break;
    	case COMMAND_TYPES.RESET:
    		resetCommand.execute(clipboard);
    		break;
    	default:
    		break;
    }

});