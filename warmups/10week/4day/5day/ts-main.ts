const happyNumberz = (
	amount: number,
	numbers: number[] = [],
	current: number = 1,
): number[] => {
	const isHappy = (num: number, cycle: number[] = []): boolean => {
		const potentiallyHappyNumber = num
			.toString()
			.split('')
			.map((n) => parseInt(n))
			.reduce((acc, num) => acc + num * num, 0);
		if (potentiallyHappyNumber === 1) return true;
		if (cycle.includes(potentiallyHappyNumber)) return false;
		return isHappy(potentiallyHappyNumber, [...cycle, potentiallyHappyNumber]);
	};

	if (numbers.length === amount) return numbers;
	return isHappy(current)
		? happyNumberz(amount, [...numbers, current], current + 1)
		: happyNumberz(amount, numbers, current + 1);
};

console.log(happyNumberz(10));
