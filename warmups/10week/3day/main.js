const fs = require('fs');

const table = () => {
	// const out = [];
	// for (let i = 0; i < 13; i++) {
	// 	const row = [];
	// 	for (let j = 0; j < 13; j++) {
	// 		row.push(i * j);
	// 	}
	// 	out.push(row);
	// }
	// return out;
	const genNums = () => [...Array(13).keys()];
	return genNums().map((row) => genNums().map((num) => num * row));
};

const sumtxt = () => {
	nums = fs.readFileSync('./numbers.txt', 'utf-8');
	return nums.split('\n').reduce((acc, curr) => acc + parseInt(curr), 0);
};

const rgbtohex = (rgb) => {
	const toHex = (num) => (num >= 10 ? String.fromCharCode(num + 55) : val);
	return rgb.reduce(
		(acc, curr) =>
			acc + toHex(Math.floor(curr / 16) + toHex(toHex(curr % 16), '#')),
	);
};

console.table(table());
console.log('================');
console.log(sumtxt());
console.log('================');
console.log(rgbtohex([13, 242, 144]));
