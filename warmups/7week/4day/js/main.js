const grains = {
	sum: 0,
	allSquares: [],
	genOneSquare: function (num) {
		return 2 ** (num - 1);
	},
	genAllSquares: function () {
		for (let i = 1; i <= 64; i++) {
			this.allSquares.push(this.genOneSquare(i));
		}
	},
	genSum: function () {
		this.sum = this.allSquares.reduce(function (prev, curr) {
			return prev + curr;
		});
	},
};

const generateChessBoard = function () {
	grains.genAllSquares(); //populate the allSquares array
	const eachSquareParent = $('#each-square');
	grains.allSquares.forEach(function (square) {
		eachSquareParent.append(`<div>${square}</div>`);
	});
};

$(document).ready(function () {
	generateChessBoard();
	$('#input-square').change(function () {
		$('#one-outcome').text(grains.genOneSquare());
	});
});
