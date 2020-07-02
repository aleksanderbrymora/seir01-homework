// // 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
//

// solution 3: recursion = substr + charAt
const reverseString = function (word) {
  if ( word === '') {
    return '';
  } else {
    return reverseString( word.substr(1) ) + word.charAt(0);
  }
}
console.log( reverseString('jag testar') );

// //solution 2: Loop
// const reverseString  = function (word) {
//   let reversed = '';
//   for (let a = word.length - 1; a >= 0; a--) {
//     reversed += word[a];
//   }
//   return reversed;
// }
// console.log( reverseString('jag testar') );

// //solution 1 : split + reverse + join
// const reverseString = function (word) {
//   const toSplit = word.split('');
//   const toReverse = toSplit.reverse();
//   const toJoin = toReverse.join("");
//
//   return toJoin;
// }
// console.log( reverseString('jag testar') ); //"ratset gaj".


//
// // 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

// solution plan: turn all array into .length array and then Math.max
const animal = ['raven', 'cat', 'kangaroo', 'honey badger'];

const length = animal.map( x => x.length ); // [5, 3, 8, 12]

console.log (length);

const findLongestWord = Math.max.apply(null, length); // w/o ES6
//const findLongestWord = Math.max(...length); // ES6
console.log (findLongestWord);


// // 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const names = [ 'Sullivan', 'Mike', 'Boo', 'Randall', 'Waternoose', 'Celia' ];

const filterLongWords = function ( array, i ) {
  let result = '';
  for ( let p = 0; p < names.length; p++ ) {

    // const q = array[p].length;
    // if ( q <= i ) {
    //   continue; // if condition( q<= 1) is true, go on to next array
    // }
  result += names[p]+ ' '; // i conditino is false, return the name, accomulate names
 }
 return result;
}

console.log( filterLongWords (names, 5) ) ; //Sullivan, Randall, Waternoose


console.log( '---------------------------------------------');
