const scrabble = function(
	word = '',
	doubles = [],
	tripples = [],
	isDouble = false,
	isTripple = false
) {
	let sum = 0;
	const points = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
		l: 1,
		n: 1,
		r: 1,
		s: 1,
		t: 1,
		d: 2,
		g: 2,
		b: 3,
		c: 3,
		m: 3,
		p: 3,
		f: 4,
		h: 4,
		v: 4,
		w: 4,
		y: 4,
		k: 5,
		j: 8,
		x: 8,
		q: 10,
		z: 10,
	};

	for (let i = 0; i < word.length; i++) {
		const letter = word[i]
		if (doubles.includes(letter)) {
			sum += points[letter] * 2;
			doubles.splice(doubles.indexOf(letter), 1)
		} else if (tripples.includes(letter)) {
			sum += points[letter] * 3;
			tripples.splice(tripples.indexOf(letter), 1);
		} else {
			sum += points[letter]
		}
	}

	if (isDouble) {
		sum *= 2
	}
	if (isTripple) sum *= 3

	return sum;
}

console.log(scrabble('cabbage'));
console.log(scrabble('cabbage', ['b', 'c'], ['g', 'e'], true, false));


// const scrabble = function(word) {
// 	let sum = 0;
// 	const points = {
// 		a: 1,
// 		e: 1,
// 		i: 1,
// 		o: 1,
// 		u: 1,
// 		l: 1,
// 		n: 1,
// 		r: 1,
// 		s: 1,
// 		t: 1,
// 		d: 2,
// 		g: 2,
// 		b: 3,
// 		c: 3,
// 		m: 3,
// 		p: 3,
// 		f: 4,
// 		h: 4,
// 		v: 4,
// 		w: 4,
// 		y: 4,
// 		k: 5,
// 		j: 8,
// 		x: 8,
// 		q: 10,
// 		z: 10,
// 	};
//
// 	for (let i = 0; i < word.length; i++) {
// 		const letter = word[i]
// 		sum += points[letter]
// 	}
//
// 	return sum;
// }
