var gridElement = document.querySelector("#grid");
var playButton = document.querySelector("#play");
var fastForwardButton = document.querySelector("#fastForward");
var pauseButton = document.querySelector("#pause");
var stepButton = document.querySelector("#step");
var sizeSelect = document.querySelector("#size");

var Board = require('./Board');
var CheckboxGrid = require('./CheckboxGrid');

var size = 16;
var board = new Board(size);
var checkboxGrid = new CheckboxGrid(board);
checkboxGrid.createGrid(gridElement, size);
var timerId;

playButton.addEventListener("click", function() {
	window.clearInterval(timerId);
	timerId = window.setInterval(function(){
		checkboxGrid.calculateNextGeneration();
	}, 1000);
});
pauseButton.addEventListener("click", function() {
	window.clearInterval(timerId);
});
fastForwardButton.addEventListener("click", function() {
	window.clearInterval(timerId);
	timerId = window.setInterval(function(){
		checkboxGrid.calculateNextGeneration();
	}, 300);
});
stepButton.addEventListener("click", function() {
	checkboxGrid.calculateNextGeneration();
});
sizeSelect.addEventListener("change", function() {
	checkboxGrid.clearGrid();
	size = sizeSelect.value;
	board = new Board(size);
	checkboxGrid = new CheckboxGrid(board);
	checkboxGrid.createGrid(gridElement, size);
});
