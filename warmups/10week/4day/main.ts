let allPrimeFactors = (num: number): number[] => {
	const factors: number[] = [];
	for (let i = 2; i <= num; i++) {
		while (num % i === 0) {
			factors.push(i);
			num = num / i;
		}
	}
	return factors;
};

console.log('normie', allPrimeFactors(60));

const someFunc = (num: number): number => num;

const recPrimeFactors = (
	num: number,
	factor: number = 2,
	allFactors: number[] = [],
): number[] => {
	if (num === 1) return allFactors;
	return num % factor === 0
		? recPrimeFactors(num / factor, factor, [...allFactors, factor])
		: recPrimeFactors(num, factor + 1, allFactors);
};

console.log('recursive mmmm', recPrimeFactors(19272));

// shortest way to check for a prime, probably commit this to memory
const isPrime = (num: number): boolean => {
	for (let i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
};
