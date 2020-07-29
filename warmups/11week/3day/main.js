const wordyCalc = (calcQuestion) => {
	const question = calcQuestion || process.argv[2];
	const matches = question.match(
		/(-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/,
	);
	const [full, a, operator, b] = matches;

	let out = full + ' is ';
	switch (operator) {
		case 'plus':
			out += parseInt(a) + parseInt(b);
			break;
		case 'minus':
			out += parseInt(a) - parseInt(b);
			break;
		case 'multiplied by':
			out += parseInt(a) * parseInt(b);
			break;
		case 'divided by':
			out += parseInt(a) / parseInt(b);
			break;
	}
	return out;
};

console.log(wordyCalc());
console.log(wordyCalc('What is 5 plus 13 ?'));
console.log(wordyCalc('What is 7 minus 5 ?'));
console.log(wordyCalc('What is -6 multiplied by 4 ?'));
console.log(wordyCalc('What is 25 divided by -5 ?'));
