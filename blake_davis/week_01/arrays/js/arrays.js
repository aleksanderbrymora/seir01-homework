console.log('hello world');

// # Array and Functions Bonus Material

//1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
  return Math.max(num1, num2)
}
console.log(maxOfTwoNumbers(37, 68))

// console.log( maxOfTwoNumbers ());

//2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (numberOne, numberTwo, numberThree) {
  return Math.max(numberOne, numberTwo, numberThree)
}
console.log(maxOfThree(7,28,56))

//3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const characterOne = function (indiLetter) {
    indiLetter = indiLetter.toLowerCase()
    if (indiLetter == 'a' ||  indiLetter == 'e' || indiLetter == 'i' || indiLetter == 'o' || indiLetter == 'u') {
    return `nice one! this letter ${ indiLetter } is a vowel`;
  } else {
    return `oh no! This ${ indiLetter } is not a vowel`;
  }
}
console.log( characterOne( 'a' ) );
console.log( characterOne( 'b' ) );

//4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

function sumArray(numbers) {
  let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}
console.log(sumArray([1,2,3,4]));


function multiplyArray(numbers) {
	let total = 1;
	for (let i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}

console.log(multiplyArray([1,2,3,4]));
