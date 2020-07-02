// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

// number 1 #########################################
const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    console.log(`The greater number of ${num2} and ${num1} is ${num1}!`)
  } else if (num1 === num2) {
    // this is if both numbers are the exact same
    console.log('Both numbers entered are the same!')
  } else {
    console.log(`${num1} isn't greater than ${num2}!`)
  }
}

maxOfTwoNumbers(50, 2)
maxOfTwoNumbers(102, 403)
maxOfTwoNumbers(504, 504)

// number 2 #######################################
const maxOfThree = function (number1, number2, number3) {
  //Math.max is already a Javascript function to get the biggest number
  const max = Math.max(number1, number2, number3)
  return max
}

console.log(maxOfThree(103, 293, 22))

// number 3 #######################################
const character = function (word) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < vowels.length; i++) {
    if (word === vowels[i]) {
      return true
    }
  }
  return false
}

console.log(character('a'))
console.log(character('x'))

// number 4 #######################################
const sumArray = function (numbers) {
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    // counts all the numbers from 0
    total = total + numbers[i] // adds the total and returns
  }
  return total
}

console.log(sumArray([4, 8, 12, 16]))

const sumArray = function (numbers) {
  let total = 1
  for (let i = 0; i < numbers.length; i++) {
    // counts all the numbers from 0
    total = total * numbers[i] // multiplys the total
  }
  return total
}

console.log(sumArray([4, 8, 12, 16]))

const sumArray = function (numbers) {
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    // counts all the numbers from 0
    total = total * numbers[i] // adds the total and
  }
  return total
}

console.log(sumArray([4, 8, 12, 16]))
