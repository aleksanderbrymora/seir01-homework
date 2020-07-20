const reverseMe = (str, out = '', index = str.length - 1) => {
	if (str.length === out.length) return out;
	return reverseMe(str, out + str[index], index - 1);
};

const printOdds = (num = 1) => {
	if (num > 99) return;
	if (num % 2 !== 0) console.log(num);
	printOdds(num + 1);
};

const printOddsNicely = (num = 1, arr = []) => {
	if (num > 99) return arr.join(' ');
	return num % 2 !== 0
		? printOddsNicely(num + 1, [...arr, num])
		: printOddsNicely(num + 1, arr);
};

const largest = (arr, large = -Infinity, index = 0) => {
	if (arr.length === index) return large;
	return arr[index] > large
		? largest(arr, arr[index], index + 1)
		: largest(arr, large, index + 1);
};

// const fib = (num, prev = 1, now = 1, index = 0) =>
// 	num === index ? now : fib(num, now, now + prev, index + 1);

const fib = (num, prev = 1, now = 1, index = 2) => {
	if (num === index || num === 0 || num == 1) {
		return now;
	} else {
		return fib(num, now, now + prev, index + 1);
	}
};

console.log('====Reverse===================');
console.log(reverseMe('pls reverse'));

// console.log('====Odds======================');
// printOdds();

console.log('====Nice odds=================');
console.log(printOddsNicely());

console.log('====Largest===================');
console.log(largest([41, 1, 2, 3, 4, 5, 55]));

console.log('====Fibonacci=================');
console.log(fib(0));
