// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


//solution 2 : to avoid repeating return message
const maxOfTwoNumbers = function (a, b) {
  const message = ` is the bigger number between ${ a } and ${ b }.`;
    if ( a < b ) {
      return `${ b }` + message ;
    } else {
      return `${ a }` + message ;
    }
};

console.log( maxOfTwoNumbers (3, 12) );
console.log( maxOfTwoNumbers (7, 1) );


/*
//solution 1 : initial solution i came up with
const maxOfTwoNumbers = function (a, b) {
  if ( a < b ) {
    return ` ${ b } is the bigger number between ${ a } and ${ b }.`;
  } else {
    return ` ${ a } is the bigger number between ${ a } and ${ b }.`;
  }
};

console.log( maxOfTwoNumbers (3, 12) );
console.log( maxOfTwoNumbers (7, 1) );
*/


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

//solution 2 : trying making conditions short
const maxOfThree = function (c, d, e) {
  const numbersToCompare = Math.max(c, d, e);
  return numbersToCompare + ` is the biggest number among ${ c }, ${ d } and ${ e }.`;
};

console.log( maxOfThree (1, 10, 100) );
console.log( maxOfThree (10, 100, 1) );
console.log( maxOfThree (100, 1, 10) );


/*
//solution 1 : initial solution i came up with
const maxOfThree = function (c, d, e) {
  const message2 = ` is the biggest number among ${ c }, ${ d } and ${ e }.`;
    if ( c > d && c > e) {
      return `${ c }` + message2;
    } else if ( d > c && d > e) {
      return `${ d }` + message2;
    } else if ( e > c && e > d) {
      return `${ e }` + message2;
    }
};

console.log( maxOfThree (1, 10, 100) );
console.log( maxOfThree (10, 100, 1) );
console.log( maxOfThree (100, 1, 10) );
*/


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


//solution 3 : reducing 'l ===' & '||' from solution 2
const vowel = ['a', 'e', 'i', 'o', 'u'];

const letterDetector = function (g) {
  const l = vowel.includes(g);
  if ( l ) {
    return 'true';
  } else {
    return 'false';
  }
};

console.log( letterDetector ('t') );
console.log( letterDetector ('u') );

/*
//solution 2 : reducing 'else if'
const letterDetector = function (l) {
    if ( l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u' ) {
      return 'true';
    } else {
      return 'false';
    }
};

console.log( letterDetector ('t') );
console.log( letterDetector ('u') );
*/

/*
//solution 1 : initial solution i came up with
const letterDetector = function (l) {
    if ( l === 'a' ) {
      return 'true';
    } else if ( l === 'e' ) {
      return 'true';
    } else if ( l === 'i' ) {
      return 'true';
    } else if ( l === 'o' ) {
      return 'true';
    } else if ( l === 'u' ) {
      return 'true';
    } else {
      return 'false';
    }
};

console.log( letterDetector ('t') );
console.log( letterDetector ('u') );
*/


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//

// //solution 3 : .reduce
// const numberArray = [1, 2, 3, 4];
//
// const sumArray = numberArray.reduce( function (acc, cur) {
//   return acc + cur;
// }
// )
// console.log ( sumArray ); //10
//
// const multiplyArray = numberArray.reduce( function (acc, cur) {
//   return acc * cur;
// }
// )
// console.log ( multiplyArray ); //24


//solution 2 : refer to MDN
const numberArray = [1, 2, 3, 4];
const sumArray = function (accumulator, currentValue) {
  return accumulator + currentValue
};
// const sumArray = (accumulator, currentValue) => accumulator + currentValue;
console.log( numberArray.reduce(sumArray) ); //10

const multiplyArray = function (accumulator2, currentValue2) {
  return accumulator2 * currentValue2
};

console.log( numberArray.reduce(multiplyArray) ); //24


// //solution 1 : using loop
// const numberArray = [1, 2, 3, 4];
//
// let sum = 0;
// for (let h = 0; h < numberArray.length; h++) {
//   sum += numberArray[h];
// }
// console.log(sum); //10
//
// let multiply = 1
// for (let i = 0; i < numberArray.length; i++) {
//   multiply *= numberArray[i];
// }
// console.log(multiply); //24

console.log( '---------------------------------------------');
