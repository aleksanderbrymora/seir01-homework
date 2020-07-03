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
		this.sum = this.allSquares.reduce(function (acc, curr) {
			return acc + curr;
		});
	},
};

const generateChessBoard = function () {
	grains.genAllSquares();
	const eachSquareParent = $('#each-square');
	grains.allSquares.forEach(function (square) {
		eachSquareParent.append($(`<div>${square}</div>`));
	});
};

$(document).ready(function () {
	// generate all squares
	generateChessBoard();
	// calculate sum
	grains.genSum();
	$('#total-number').text(grains.sum);
	// attach listener to input
	$('#one-square input').on('input', function (event) {
		const grainVal = parseInt($('#one-square input').val());
		$('#one-result').text(grains.genOneSquare(grainVal));
	});
	// initial calculation
	$('#one-result').text(
		grains.genOneSquare(parseInt($('#one-square input').val())),
	);
});
