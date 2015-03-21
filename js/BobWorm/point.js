function Point(row, col) {
	this.coordinate = {
		x: row || Math.round(Math.random()*(numRows-1)+1),
		y: col || Math.round(Math.random()*(numCols-1)+1)
	};
}