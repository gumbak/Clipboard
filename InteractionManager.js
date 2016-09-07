var clipboardData = [];
var copyCommand = new CopyCommand();
var pasteCommand = new PasteCommand();
var resetCommand = new ResetCommand();

chrome.commands.onCommand.addListener(function(input) {
    switch(input) {
    	case COMMAND_TYPES.COPY:
    		copyCommand.execute(clipboardData);
    		break;
    	case COMMAND_TYPES.PASTE:
    		pasteCommand.execute(clipboardData);
    		break;
    	case COMMAND_TYPES.RESET:
    		resetCommand.execute(clipboardData);
    		break;
    	default:
    		break;
    }

});