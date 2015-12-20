var CheckboxGrid = function(board) {
	this.board = board;
}

CheckboxGrid.prototype.createGrid = function(gridElement, size) {
	var tableElement = this.createElement(gridElement,
			"table");
	for (var row = 0; row < size; row++) {
		var rowElement = this.createElement(tableElement,
				"tr");
		for (var column = 0; column < size; column++) {
			var columnElement = this.createElement(
					rowElement, "td");
			this.createCheckbox(columnElement, this.board, column, row);
		}
	}
}

CheckboxGrid.prototype.createElement = function(parent, elementType) {
	var element = document.createElement(elementType);
	parent.appendChild(element);
	return element;
}
CheckboxGrid.prototype.createCheckbox = function(parent, board, x, y) {
	var element = document.createElement("input");
	element.setAttribute("type", "checkbox");
	element.setAttribute("data-x", x);
	element.setAttribute("data-y", y);
	element.value = board.value;
	parent.appendChild(element);
	element.addEventListener("click", function(){
		var x = this.getAttribute('data-x');
		var y = this.getAttribute('data-y');
		// TODO how to access board in a object oriented manner?
		board.setValue(x, y, this.checked);
	});
	return element;
}
CheckboxGrid.prototype.calculateNextGeneration = function() {
	var nextGeneration = this.board.calculateNextGeneration();
	this.board.setValues(nextGeneration);
	this.updateCheckboxes();
}
CheckboxGrid.prototype.updateCheckboxes = function() {
	var gridElement = document.querySelector("#grid");
	var tableRows = gridElement.querySelectorAll("tr");
	for (var row = 0; row < tableRows.length; row++) {
		var checkboxes = tableRows[row].querySelectorAll("input");
		for (var column = 0; column < checkboxes.length; column++) {
			var checkbox = checkboxes[column];
			checkbox.checked = this.board.getValue(column, row);
		}
	}
}

module.exports = CheckboxGrid;
