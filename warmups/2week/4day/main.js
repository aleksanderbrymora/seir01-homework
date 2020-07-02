// const anagram = function (potentialAnagram, words) {
// 	const matches = [];
// 	const sortedAnagram = potentialAnagram.split('').sort().join('')
//
// 	for (let i = 0; i < words.length; i++) {
// 		const sortedWord = words[i].split('').sort().join('');
// 		if (sortedAnagram === sortedWord) {
// 			matches.push(words[i])
// 		}
// 	}
//
// 	return matches;
// }


const anagram = {
	matches: [],
	sortStr: function (str) {
		return str.split('').sort().join('')
	},
	check: function (potentialAnagram, words) {
		const sortedAnagram = this.sortStr(potentialAnagram)

		for (let i = 0; i < words.length; i++) {
			const sortedWord = this.sortStr(words[i]);
			if (sortedAnagram === sortedWord) {
				this.matches.push(words[i])
			}
		}

		return this.matches;
	}
}

console.log(anagram.check('listen', ['enlists', 'google', 'inlets', 'banana']));
