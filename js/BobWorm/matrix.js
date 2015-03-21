//
// Класс матрицы.
//
function Matrix(containerId, rows, cols) {
	
	// jQuery-объект контейнера
	var matrix = $(containerId);
	
	// число строк
	this.numRows = rows;
	
	// число столбцов
	this.numCols = cols;


    this.destruct = function() {
        delete matrix;
        delete this.numRows;
        delete this.numCols;
    }
	
	
	// создание сетки
	this.create = function() {
		for (var i = 0; i < (this.numRows * this.numCols); i++) {

			var text = Math.floor(Math.random()*2);
			matrix.append('<div class="'+attrClassCell+'">'+text+'</div>');
		}
	};
	
	
	// получить значение ячейки
	this.getCell = function(row, col, name) {
		var index = (row - 1) * this.numCols + col - 1;
		return matrix.children().eq(index).hasClass(name);
	};
	
	
	// установить значение ячейки
	this.setCell = function(row, col, name, val) {
		var index = (row - 1) * this.numCols + col - 1;
		matrix.children().eq(index).toggleClass(name, val);
	};


	this.clear = function() {
		$(containerId).empty();
	};
}
		
