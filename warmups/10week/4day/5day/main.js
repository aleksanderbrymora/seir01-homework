const happyNumbers = (amount, numbers = [], current = 1) => {
	const isHappy = (num, cycle = []) => {
		const potentiallyHappyNumber = num
			.toString()
			.split('')
			.map((d) => parseInt(d))
			.reduce((acc, num) => acc + num * num, 0);

		if (potentiallyHappyNumber === 1) return true;
		if (cycle.includes(potentiallyHappyNumber)) return false;
		return isHappy(potentiallyHappyNumber, [...cycle, potentiallyHappyNumber]);
	};

	if (numbers.length === amount) return numbers;

	return isHappy(current)
		? happyNumbers(amount, [...numbers, current], current + 1)
		: happyNumbers(amount, numbers, current + 1);
};

console.log(happyNumbers(1000));
