const pairwise = (arr, sum, indexes = [], current = 0) => {
	if (arr.length + 1 === current) {
		return indexes.reduce((acc, curr) => acc + curr);
	}
	const found = arr.indexOf(sum - arr[current]);
	console.log('===========\n', { arr, indexes, current, found });
	if (found >= 0 && found !== current) {
		arr.splice(found, 1, null);
		arr.splice(current, 1, null);
		return pairwise(arr, sum, [...indexes, current, found], current + 1);
	} else {
		return pairwise(arr, sum, indexes, current + 1);
	}
};

console.log(pairwise([10, 7, 9, 9, 11, 5, 11, 13, 15, 10, 10, 10], 20));
