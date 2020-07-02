// //  # Array and Functions Bonus Material
// //1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// // (1) not sure about THEN? this seems to work without it.
// const maxOfTwo = function (num1, num2) {
//     if (num1 > num2 ) {
//       return `${num1} is bigger than ${num2}`;
//     } else {
//       return `${num2} is bigger than ${num1}`;
//     }
// }
// console.log(maxOfTwo(12,9));
//
// //surely there is a better way to do this?
// // (2)/2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// const maxOfThree = function (num1, num2, num3){
//     if (num1 > num2 && num1 > num3) {
//       return `${num1} is bigger than ${num2} & ${num3}`;
//
//     } if (num2 > num1 && num2 > num3) {
//       return `${num2} is bigger than ${num1} & ${num3}`;
//
//     } else if (num3 > num1 && num3 > num2) {
//       return `${num3} is bigger than ${num1} & ${num2}`;
//     }
// }
//
// return maxofTwo( maxOfTwo(a,b), maxofTwo(b, c));
//
// console.log(maxOfThree(5,3,4));
// console.log(maxOfThree(4,6,11));
// console.log(maxOfThree(4,12,5));
//
// // // 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // can't figure out why the letter b also comes as a vowel
// const character1 = function (oneLetter) {
//     oneLetter = oneLetter.toLowerCase()
//     if (oneLetter == 'a' ||  oneLetter =='e' || oneLetter == 'i' || oneLetter == 'o' || oneLetter == 'u') {
//     return `you're correct! the letter ${oneLetter} is a vowel`;
//   } else {
//     return `unfortunately the letter ${oneLetter} is not a vowel`;
//   }
// }
// console.log(character1('a'));
// console.log(character1('b'));
// //
//
// //below is someone elses answer. However, I noticed that if I do else return false - e comes back as false?
// const character = function(word) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < vowels.length; i++){
//       if(word == vowels[i]){
//           return true;
//        }
//   }
//  return false;
// };
// console.log(character('b'));
// console.log(character('e'));
// console.log(character('a'));
//
//
// //
// // // // 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
// //
//
// //this is the one i did. However, as Joel mentioned - it is limited to 4 numbers.
// // const sumArray = function (num1, num2, num3, num4) {
// //   return `${num1+num2+num3+num4}`;
// // }
// // console.log(sumArray(1,2,3,4));
// //
// // const arrayMulti = function (num1,num2,num3,num4) {
// //   return `${num1*num2*num3*num4}`;
// // }
// // console.log(arrayMulti(1,2,3,4));
// // // // // //
// // //
// //
// // //below is Cales' answer. However, I am getting errors with i.
// const sumArray = function(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++){ //getting error identifier 'i' has already been declared
//     total = total + arr[i];
// }
// return total
// }
// console.log(sumArray([4, 8 , 10]));
// //
// const multiArray = function(numbers) {
//   let total = 1;
//   for (let i = 0; i < numbers.length; i++){ //getting error identifier 'i' has already been declared
//     total = total * numbers[i];
// }
// return total
// }
// console.log(multiArray([4, 8 , 10]));
// // //
// //
// // //
// // //
// // //
// // // // // // ## Bonus
// // // // // //
// // // // 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// //
const reverseString = function (letters) {
  let word1= '';
  for (let i = letters.length-1; i > -1; i--) {
    word1 = word1 + letters[i]
  }
  return word1
}
console.log(reverseString('Who loves dragons?'));

////

// const reverseString = function (str){
// //return reversed substring
// let splitString = str.split(''); // "hello".split('') // ['h','e', etc]
// let reverseArray = splitString.reverse(); //reverses ['h','e','l','l','o'] > ['o','l,'l,'e,'h]
// let joinArray = reverseArray.join('');
//   return joinArray
// }
// console.log(reverseString ("fuck"));
// // return str.split('').reverse().join(''); // you can do it in one line


//
// //
// //
// //
// // // // 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
//
const findLongestWord = function (words) {
  let longest = 0;
  let longestWordSoFar = ''
  for (let i = 0; i < words.length; i++) {
      if(words[i].length > longest) {
        longest = words[i].length;
        longestWordSoFar = words[i];
      }
  }return [longest, longestWordSoFar];
}

// const findLongestWord = function (words) {
//   let longest = 0;
//   let longestWordSoFar = []
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longest) {
//       longest = words[i].length;
//       longestWordSoFar = []
//       longestWordSoFar.push(words[i])
//     }
//     else if (words[i].length == longest) {
//       longestWordSoFar.push(words[i]);
//     }
//   }
//   return [longest, longestWordSoFar];


console.log(findLongestWord(['dragon', 'be', 'angry', 'asdasdasdasd', 'computer']));

// // // // 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
//
const filterLongWords = function (longwords, num1) {
    let longer = []
    for (let i = 0; i < longwords.length; i++) {
      if (longwords[i].length > num1) {
        longer.push(longwords[i]);
      }
    }
  return longer
}
console.log(filterLongWords(['dragon', 'be', 'angry', 'computer', 'awsdfghl'],6));

//////////////////////
//
// const fruit = ['apple', 'pear', 'watermelon', 'rockmelon']
// const findLongestWord = function (fruits){
//   let longestWord = 0;
//   for (let i=0; i < fruits.length; i++){
//     if(fruit[i].length > longestWord){
//       longestWord = fruit[i].length;
//     }
// }
// return longestWord
// }
// console.log(findLongestWord(fruit[]));
