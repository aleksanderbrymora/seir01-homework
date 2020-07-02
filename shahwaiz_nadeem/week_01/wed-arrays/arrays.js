/*
Array and Functions Bonus Material
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/

const maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

const maxOfThree = (num1, num2, num3) => {
  if (maxOfTwoNumbers(num1, num2) > num3) {
    return maxOfTwoNumbers(num1, num2);
  } else {
    return num3;
  }
}

/*
3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

const vowels = ["a", "e", "i", "o", "u"];

const isVowel = (letter) => {
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === letter) {
      return true;
    }
  }
  return false;
}

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

const sumArray = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

const multiplyArray = (array) => {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
}

/*
5. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = (string) => {
  let reverse = "";
  for (let i = string.length-1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

/*
6. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/

const findLongestWord = (arrayOfWords) => {
  let longestWord = 0;
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord) {
      longestWord = arrayOfWords[i].length;
    }
  }
  return longestWord;
}


/*
7. Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
*/

const filterLongWords = (arrayOfWords, minCharLength) => {
  let filteredWords = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > minCharLength) {
      filteredWords.push(arrayOfWords[i]);
    }
  }
  return filteredWords;
}
