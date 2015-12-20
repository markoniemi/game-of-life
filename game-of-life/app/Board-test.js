Board = require('./Board');
var board;
describe('Board', function() {
	beforeEach(function() {
		board = new Board(4);
	});
	describe('calculateSquareValue', function() {
		it('live cell with fewer than two or more than three live neighbors dies', function() {
			expect(board.calculateSquareValue(true, 1)).toEqual(false);
			expect(board.calculateSquareValue(true, 4)).toEqual(false);
		});
		it('live cell with two or three live neighbors lives', function() {
			expect(board.calculateSquareValue(true, 3)).toEqual(true);
			expect(board.calculateSquareValue(true, 2)).toEqual(true);
		});
		it('dead cell with exactly three live neighbors becomes a live cell', function() {
			expect(board.calculateSquareValue(false, 3)).toEqual(true);
		});
	});
	describe('countNeighbours', function() {
		it('countNeighbours in empty board', function() {
			expect(board.countNeighbours(4, 4)).toEqual(0);
		});
		it('countNeighbours in full board', function() {
			for(var x=0;x<3;x++){
				for(var y=0;y<3;y++){
					board.setValue(x,y,true);
				}
			}
			expect(board.countNeighbours(1, 1)).toEqual(8);
		});
	});
	describe('calculateNextGeneration', function() {
		it('calculateNextGeneration', function() {
			board.setValue(1,0,true);
			board.setValue(1,1,true);
			board.setValue(1,2,true);
			board = board.calculateNextGeneration();
			expect(board.getValue(0,1)).toEqual(true);
			expect(board.getValue(2,1)).toEqual(true);
		});
	});
	describe('instance', function() {
		it('it should have separate instance fields', function() {
			var board1 = new Board(4);
			var board2 = new Board(2);
			expect(board1.size).toEqual(4);
			expect(board2.size).toEqual(2);
		});
	});
});
