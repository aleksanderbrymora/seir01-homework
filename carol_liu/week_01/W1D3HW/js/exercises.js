// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
};
console.log(`The greater number of 12 and 3 is ${ maxOfTwoNumbers(12, 3) }.`);
console.log(`The greater number of 7 and 7 is ${ maxOfTwoNumbers(7, 7) }.`);


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (n1, n2, n3) {
	return Math.max(n1, n2, n3);
};
console.log(`The largest number of 7, 35 and 1 is ${ maxOfThree(7, 35, 1) }.`);
console.log(`The largest number of 4, 4 and 4 is ${ maxOfThree(4, 4, 4) }.`);


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


//Solve with .includes()
const vowels = ['a', 'e', 'i', 'o', 'u'];
const ifVowel = function (c) {
	return vowels.includes(c.toLowerCase())  //A.includes(B) - check if B is part of A.
};

console.log(ifVowel('E'));
console.log(ifVowel('o'));
console.log(ifVowel('c'));


// *****Solve with for loop
const vowels2 = ['a', 'e', 'i', 'o', 'u'];
const ifVowel2 = function (c) {
	for (let i=0; i<vowels2.length; i++) {
		if (c.toLowerCase() === vowels2[i]) {
			return true;
		}
	}
	return false;
};

console.log(ifVowel2('E'));
console.log(ifVowel2('o'));
console.log(ifVowel2('c'));


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

// Solve with for loop
const array1 = [3, 5, 8, 2, 23, 51];
let sumArray = 0;
let multiplyArray = 1;
for (let i=0; i<array1.length; i++) {
	sumArray += array1[i];
	multiplyArray *= array1[i];
}
console.log(sumArray);
console.log(multiplyArray);


// *****Solve with functions & for loop
const array2 = [3, 5, 8, 2, 23, 51];
let sum = 0;
let product = 1;
// forEach() - calls a function once for each array element.
// item - current value, here it's 3, 5, 8...
array2.forEach(function(item) {
	sum += item;
	return sum;
});

array2.forEach(function(item) {
	product *= item;
	return product;
});

console.log(sum);
console.log(product);



// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

// Solve with function
let stringArray = [];
const reverseString = function (str) {
	// .split() - splits a string object into an array of string by separating the string into sub strings.
	const splitStr = str.split('');
	// .reverse() - reverses an array in place. The first array element becomes the last and the last becomes the first.
	const reverseArray = splitStr.reverse();
	// .join() - joins all elements of an array into a string.
	return joinArray = reverseArray.join('');
};
console.log(reverseString('coding'));


// Solve with for loop
let stringArray2 = '';
const reverseString2 = function (str) {
	for (let i=str.length-1; i>=0; i--) {
		stringArray2 += str[i];    //Adding elements from back to start
	}
	return stringArray2;
};
console.log(reverseString2('happy'));




// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

// unfinished
let findLongestWord = ['yoooo', 'hiiiii', 'noooooooo', 'ok'];
findLongestWord.forEach(function(item) {
	// longest Math.max(element.length)
	longestWord = Math.max(item.length);
});


// // 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
