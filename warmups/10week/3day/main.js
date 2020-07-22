const fs = require('fs');

const table = () => {
	// const out = [];
	// for (let i = 0; i <= 12; i++) {
	// 	const row = [];
	// 	for (let j = 0; j < 13; j++) {
	// 		row.push(i * j);
	// 	}
	// 	out.push(row);
	// }
	// return out;
	const genNums = () => [...Array(13).keys()];
	return genNums().map((row) => genNums().map((num) => row * num));
};

// console.table(table());

const sumtxt = () => {
	nums = fs.readFileSync('./numbers.txt', 'utf-8');
	return nums.split('\n').reduce((acc, curr) => acc + parseInt(curr), 0);
};

console.log(sumtxt());

const rgbtohex = (rgb) => {
	const toHex = (val) => (val >= 10 ? String.fromCharCode(55 + val) : val);
	let out = '#';
	rgb.forEach((color) => {
		out += toHex(Math.floor(color / 16));
		out += toHex(color % 16);
	});
	return out;
	// return rgb.reduce(
	// 	(acc, color) => acc + toHex(Math.floor(color / 16) + toHex(color % 16)),
	// 	'#',
	// );
};

console.log(rgbtohex([113, 23, 255]));
