class ViewManager {
	updateDisplay(clipboard, currIndex) {
		var clipboardTable = document.getElementById(CONFIG.CLIPBOARD_TEXT_TABLE_ID);
		for (var index = 0; index < CONFIG.MAX_CLIPBOARD_LENGTH; index++) {
			if (index < clipboard.length) {
				var row = this._insertTableRow(clipboardTable, index);
				row.textContent = clipboard[index];
				row.className = index === currIndex ? CONFIG.CSS_CLASSNAME_CURRENT_SELECTION : "";
			} else {
				this._deleteTableRow(clipboardTable, index);
			}
		}
	}

	_deleteTableRow(table, index) {
		if (index < table.rows.length) {
			table.deleteRow(index);
		}
	}

	_insertTableRow(table, index) {
		var rowId = CONFIG.ROW_CLIPBOARD_TEXT_TABLE_ID + index;
		var row = document.getElementById(rowId);
		if (!row) {
			row = table.insertRow(index);
			row.id = rowId;
		}
		return row;
	}
}