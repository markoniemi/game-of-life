require('../node_modules/karma-jasmine/lib/jasmine').Spec;
CheckboxGrid = require('./CheckboxGrid');
Board = require('./Board');
var checkboxGrid;
var board;
var size;
var div;
describe('CheckboxGrid', function() {
	beforeEach(function() {
		size = 4;
		board = new Board(size);
		checkboxGrid = new CheckboxGrid(board);
		var body = document.querySelector("body");
		div = document.createElement("div");
		div.setAttribute("id", "grid");
		body.appendChild(div);
	});
	describe('createGrid', function() {
		it('should calculate next generation', function() {
			checkboxGrid.createGrid(div, size);
			var gridElement = document.querySelector("#grid");
			var tableRows = gridElement.querySelectorAll("tr");
			expect(tableRows.length).toEqual(4);
			for (var row = 0; row < tableRows.length; row++) {
				var checkboxes = tableRows[row].querySelectorAll("input");
				expect(checkboxes.length).toEqual(4);
			}
		});
	});
	describe('calculateNextGeneration', function() {
		it('should calculate next generation', function() {
			checkboxGrid.createGrid(div, size);
			checkboxGrid.board.setValue(0, 1, true);
			checkboxGrid.board.setValue(1, 1, true);
			checkboxGrid.board.setValue(2, 1, true);
			checkboxGrid.calculateNextGeneration();
			expect(document.querySelector('[data-x="1"][data-y="0"]').checked).toEqual(true);
			expect(document.querySelector('[data-x="1"][data-y="1"]').checked).toEqual(true);
			expect(document.querySelector('[data-x="1"][data-y="2"]').checked).toEqual(true);
		});
	});
});
