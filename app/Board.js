var Board = function(size) {
	this.size = size;
	this.board = [];
	for (var x = 0; x < this.size; x++) {
		this.board[x] = [];
		for (var y = 0; y < this.size; y++) {
			this.board[x][y] = false;
		}
	}
};

Board.prototype.setValue = function(x, y, value) {
	this.board[x][y] = value;
};
Board.prototype.getValue = function(x, y) {
	var tempX = x;
	var tempY = y;
	if (x < 0) {
		tempX = this.size - 1;
	} else if (x >= this.size) {
		tempX = 0;
	}
	if (y < 0) {
		tempY = this.size - 1;
	} else if (y >= this.size) {
		tempY = 0;
	}
	return this.board[tempX][tempY];
};

Board.prototype.setValues = function(board) {
	for (var x = 0; x < this.size; x++) {
		for (var y = 0; y < this.size; y++) {
			this.setValue(x,y, board.getValue(x,y));
		}
	}
};

Board.prototype.calculateNextGeneration = function() {
	var nextGeneration = new Board(this.size);
	for (var x = 0; x < this.size; x++) {
		for (var y = 0; y < this.size; y++) {
			var neighbourCount = this.countNeighbours(x, y);
			nextGeneration.setValue(x, y, this.calculateSquareValue(this.getValue(x, y),
					neighbourCount));
		}
	}
	return nextGeneration;
};
Board.prototype.countNeighbours = function(x, y) {
	var neighbourCount = 0;
	for (var tempX = x - 1; tempX <= x + 1; tempX++) {
		for (var tempY = y - 1; tempY <= y + 1; tempY++) {
			if (!(tempX == x && tempY == y) && this.getValue(tempX, tempY)) {
				neighbourCount++;
			}
		}
	}
	return neighbourCount;
};

Board.prototype.calculateSquareValue = function(currentValue, neighbourCount) {
	if (currentValue && (neighbourCount == 2 || neighbourCount == 3)) {
		return true;
	} else if (!currentValue && neighbourCount == 3) {
		return true;
	}
	return false;
};

module.exports = Board;
