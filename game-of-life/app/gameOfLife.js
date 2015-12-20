var gridElement = document.querySelector("#grid");
var nextButton = document.querySelector("#next");

var Board = require('./Board');
var CheckboxGrid = require('./CheckboxGrid');

var size = 8;
var board = new Board(size);
var checkboxGrid = new CheckboxGrid(board);
checkboxGrid.createGrid(gridElement, size);

nextButton.addEventListener("click", function(){
	checkboxGrid.calculateNextGeneration();
});

