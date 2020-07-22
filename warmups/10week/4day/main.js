const primeFactors = (num) => {
	const factors = [];
	for (let i = 2; i <= num; i++) {
		while (num % i === 0) {
			factors.push(i);
			num = num / i;
		}
	}
	return factors;
};

// console.log('normie', primeFactors(60));

const recPrimeFactors = (num, factor = 2, allFactors = []) => {
	if (num === 1) return allFactors;
	return num % factor === 0
		? recPrimeFactors(num / factor, factor, [...allFactors, factor])
		: recPrimeFactors(num, factor + 1, allFactors);
};

console.log('recursive mmmm', recPrimeFactors(19272));

// shortest way to check for a prime, probably commit this to memory
const isPrime = (num) => {
	for (let i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
};
