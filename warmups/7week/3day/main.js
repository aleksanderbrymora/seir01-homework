const sieve = {
	primes: [],
	list: [],
	calc: function (num) {
		this.list = Array(num).fill(true);

		for (let i = 2; i <= num; i++) {
			for (let j = i * i; j <= num; j++) {
				if (this.list[j] && j % i === 0) {
					this.list[j] = false;
				}
			}
		}

		for (let i = 2; i <= this.list.length; i++) {
			if (this.list[i]) {
				this.primes.push(i);
			}
		}

		return this.primes;
	},
};

const sieve2 = function (num) {
	const primes = [];
	const list = Array(num).fill(true);

	for (let i = 2; i <= Math.sqrt(num); i++) {
		for (let j = i * i; j <= num; j++) {
			if (list[j] && j % i === 0) {
				list[j] = false;
			}
		}
	}

	for (let i = 2; i <= list.length; i++) {
		if (list[i]) {
			primes.push(i);
		}
	}

	return primes;
};

const sieve3 = function (limit) {
	let nums = [...Array(limit + 1).keys()].slice(2);
	let primes = [];

	while (nums.length) {
		let n = nums.shift();
		primes.push(n);
		nums = nums.filter(function (el) {
			return el % n; // checking for not divisible, truthy falsey
		});
	}

	return primes;
};

console.log(sieve3(20));
