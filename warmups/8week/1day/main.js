// const pairwise = function (arr, sum) {
// 	const pairs = [];
// 	arr.forEach(function (element, index) {
// 		const found = arr.indexOf(sum - element);
// 		if (found >= 0) {
// 			if (!pairs.includes(found) || !pairs.includes(index)) {
// 				pairs.push(found, index);
// 			}
// 		}
// 	});

// 	return pairs.reduce(function (acc, curr) {
// 		return acc + curr;
// 	}, 0);
// };

const pairwise = (arr, sum) => {
	const pairs = [];
	arr.forEach((element, index) => {
		const found = arr.indexOf(sum - element);
		if (found >= 0) {
			if (!pairs.includes(found) || !pairs.includes(index)) {
				pairs.push(found, index);
			}
		}
	});

	return pairs.reduce((acc, curr) => acc + curr);
};

console.log(pairwise([7, 9, 11, 13, 15], 20));
