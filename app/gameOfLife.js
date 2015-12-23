var gridElement = document.querySelector("#grid");
var nextButton = document.querySelector("#next");
var sizeSelect = document.querySelector("#size");

var Board = require('./Board');
var CheckboxGrid = require('./CheckboxGrid');

var size = 16;
var board = new Board(size);
var checkboxGrid = new CheckboxGrid(board);
checkboxGrid.createGrid(gridElement, size);

nextButton.addEventListener("click", function() {
	checkboxGrid.calculateNextGeneration();
});
sizeSelect.addEventListener("change", function() {
	checkboxGrid.clearGrid();
	size = sizeSelect.value;
	board = new Board(size);
	checkboxGrid = new CheckboxGrid(board);
	checkboxGrid.createGrid(gridElement, size);
});
