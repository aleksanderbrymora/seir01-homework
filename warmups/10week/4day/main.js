const primeFactors = (num) => {
	const factors = [];
	for (let i = 2; i <= num; i++) {
		while (num % i === 0) {
			factors.push(i);
			num = num / i;
		}
		if (num === 1) break;
	}
	return factors;
};

// console.log(primeFactors(60));

const recPrimeFactors = (num, factor = 2, allFactors = []) => {
	if (num === 1) return allFactors;
	return num % factor === 0
		? recPrimeFactors(num / factor, factor, [...allFactors, factor])
		: recPrimeFactors(num, factor + 1, allFactors);
};

console.log(recPrimeFactors(62334343));

const isPrime = (num) => {
	for (let i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
};
