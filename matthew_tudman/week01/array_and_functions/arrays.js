// # Array and Functions Bonus Material



// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

//Tests if input one is bigger and returns if so, else it returns the second number.
const maxOfTwoNumbers = function(numOne, numTwo) {
  if (numOne > numTwo) {
    return numOne;
  } else {
    return numTwo;
  }
}

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(numOne, numTwo, numThree) {
  if (numOne > numTwo && numOne > numThree) {
    return numOne;
  } else if (numTwo > numOne && numTwo > numThree) {
    return numTwo;
  } else {
    return numThree;
  }
}


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const vowelCheck = function(char) {
  // Helpful list of vowels.
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      // Stops and returns once it matches the input to a selection in the list.
      return true;
    }
      // Needs to be outside of the loop instead of in an else so that it doesn't stop prematurely.
  }  return false;
}


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function(arrayInput) {
  let output = 0;
  for (i = 0; i < arrayInput.length; i++) {
    output += arrayInput[i];
  }
  return output;
}




const multiplyArray = function(arrayInput) {
let output = 1;
for (i = 0; i < arrayInput.length; i++) {
  output = arrayInput[i] * output;
}
return output;
}

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string) {
  let output = '';
  for (i = string.length - 1; i > -1; i--) {
    output = output + string[i];
  }
  return output;
}



// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.



const findLongestWord = function(arrayInput) {
  let longWord = "";
  for (i = 0; i < arrayInput.length; i++) {
    // need to remember to put the .length on the longWord as well or it will try and compare strings as numbers
    if (arrayInput[i].length > longWord.length) {
      longWord = arrayInput[i];
    }
  }
  return longWord;
};



// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.


const filterLongWords = function(arrayInput, maxLength) {
  let output = [];
  for (i = 0; i < arrayInput.length; i++) {
    if (arrayInput[i].length > maxLength) {
      // important to use push here, otherwise it will return as a single string.
      output.push(arrayInput[i]);
    }
  }
  return output;
};





//
