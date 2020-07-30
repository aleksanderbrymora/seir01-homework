// const dashatize = (str) => {
// 	if (Number.isNaN(str)) return str;
// 	str = Math.abs(str);
// 	str = str.toString();
// 	const digits = str.split('');
// 	// digits.filter(d => d !== '-') // similar to str = Math.abs(str)
// 	let out = '';
// 	for (let i = 0; i < digits.length; i++) {
// 		if (parseInt(digits[i]) % 2 !== 0) {
// 			out += '-' + digits[i] + '-';
// 		} else {
// 			out += digits[i];
// 		}
// 	}
// 	out = out.replace(/--/g, '-');
// 	if (out[out.length - 1] === '-') out = out.slice(0, -1);
// 	if (out[0] === '-') out = out.slice(1);
// 	return out;
// };

// const dashatize = (str) =>
// 	Number.isNaN(str)
// 		? str
// 		: str
// 				.toString()
// 				.split('')
// 				.filter((d) => d !== '-')
// 				.reduce(
// 					(acc, curr, i, all) =>
// 						(acc +=
// 							parseInt(curr) % 2 !== 0 && i !== 0 && i !== all - 1
// 								? `-${curr}`
// 								: curr),
// 				)
// 				.replace(/--/g, '-');

function dashatize(num) {
	return num
		.toString()
		.replace(/([13579])/g, '-$1-') // dashes around odd digits
		.replace(/\-+/g, '-') // replace multiple dashes by one dash
		.replace(/^\-/, '') // remove starting dash
		.replace(/\-$/, ''); // remove ending dash
}

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
console.log(dashatize(-38369));
