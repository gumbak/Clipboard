class ResetCommand {
	execute(clipboardData) {		
		clipboardData && clipboardData.splice(0);
		window.clipboardData.clearData();
	}
}