class PasteCommand {
	execute(clipboardData) {
		document.execCommand("Paste");
	}
}