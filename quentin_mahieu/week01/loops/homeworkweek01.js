// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function( num1,num2){
  if (num1 > num2){
    return `The largest number between ${num1} and ${num2} is ${num1}`;
  }else{
    return `The largest number between ${num1} and ${num2} is ${num2}`;
  }
}
console.log(maxOfTwoNumbers(1,2));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = function( num1,num2,num3){
  const largestOne = Math.max(Math.max(num1,num2),num3);
  return `The largest number between ${num1}, ${num2}, ${num3} is ${largestOne}`;
  }
console.log(maxOfThreeNumbers(1,2,8));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const characters = function (c){
  const vowel = (['a', 'e', 'i', 'o', 'u']);
  for (let i=0 ; i<vowel.length; i++){
    if (c === vowel[i]) {
    return (`True. The character ${c} is a vowel`)
    }
  }
  return (`False. The character ${c} is a consonant`);
  }
console.log(characters('a'));
console.log(characters('b'));
console.log(characters('e'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (num){
  let total = 0
  for (let i=0 ; i < num.length ; i++){
    total += num[i];
  } return total
}
console.log(sumArray([1,2,3,4]));

const multiplyArray= function(num) {
	var total = 1;
	for (var i = 0; i < num.length; i++) {
		total = (total * num[i]);
	}
	return total;
}

console.log(multiplyArray([1,2,3,4]));







// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const wordLetters  = ['S','O','C','C','E','R'];
const guessedLetters = ['_','_','_','_','_'];

const guessLetter = function (letter){


  for (let i = 0 ; i < wordLetters.lenght ; i++){
    if (letter === wordLetters[i]){
      guessedLetters[i] = letter
    }

  }




}
