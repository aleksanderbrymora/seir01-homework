const wordyCalc = (calcQuestion) => {
	// Grabbing a passed string of instructions from the arguments
	const question = calcQuestion || process.argv[2];

	// Parsing only interesting part which is number operator number
	const matches = question.match(/(-?\d+) (.*) (-?\d+)/);

	// destructuring relevant parts
	const [full, a, operator, b] = matches;

	let out = full + ' is ';
	switch (operator) {
		case 'plus':
			out += parseInt(a) + parseInt(b);
			break;

		case 'minus':
			out += parseInt(a) - parseInt(b);
			break;

		case 'divided by':
			out += parseInt(a) / parseInt(b);
			break;

		case 'multiplied by':
			out += parseInt(a) * parseInt(b);
			break;

		default:
			console.log("Sorry didn't really get that");
			break;
	}
	return out;
};

console.log(wordyCalc());
console.log(wordyCalc('What is 5 plus 13 ?'));
console.log(wordyCalc('What is 7 minus 5 ?'));
console.log(wordyCalc('What is -6 multiplied by 4 ?'));
console.log(wordyCalc('What is 25 divided by -5 ?'));
