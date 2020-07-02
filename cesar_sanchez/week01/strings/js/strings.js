// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const drEvil = function (amount) {
  if (amount != 1000000) {
    const say = `${amount} dollars`;
    return say;
  } else {
    const say = `${amount} dollars (pinky)`;
    return say;
  }
}

// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function (word1,word2) {
  const length1 = word1.length;
  const length2 = word2.length;

  const rd1 = word1.slice(2,length1);
  const rd2 = word2.slice(2,length2); // These are the words without the first two letters.

  const newWord1 = word2[0].concat(word2[1],rd1);
  const newWord2 = word1[0].concat(word1[1],rd2); // Attaching the first two letters of each word to the ther one.
  const newWords = newWord1 + ' ' +newWord2;
  return newWords;
}


// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStat = function (word){

  const wordLenght = word.length; // Limit of the for loop.
  let censure = word[0]; // New string with only the first letter.

  for (i=1; i<wordLenght; i++){ // The for loop will iterate from the 2 character onwards.
    if (word[i] === word[0]){ // The conditional will replace each character that's equal  to the first one.
      censure = censure.concat('*');
    } else {
      censure = censure.concat(word[i]);
    }
  }
  return censure;
}



// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function (verb) {
  const verbLenght = verb.length;

  if (verbLenght < 3){
    return verb;

  } else {

    const last3 = verbLenght - 3 // 3rd to last character
    const suffix = verb.slice(last3, verbLenght) // Will take the last 3 characters of the verb.

    if ( suffix === 'ing'){
      const newVerb = verb.concat('ly'); // Adding 'ly' if it ends in 'ing'.
      return newVerb;
    } else {
      const newVerb = verb.concat('ing'); // Adding 'ing' if the verb is in infinitive.
      return newVerb;
    }
  }
}

// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

const notBad = function (string) {
  const array = string.split(' ');
  const limit = array ['length'];

  if (array[limit] === '!'){
    const lastElement = array[limit];
    const noPunctuation = [lastElement.slice(0,limit)];
    const npArray = array.pop(); // np: no punctuation
    const newArray = npArray.concat(noPunctuation, '!');

  } else if (array[limit] === '?') {
      const lastElement = array[limit];
      const noPunctuation = [lastElement.slice(0,limit)];
      const npArray = array.pop(); // np: no punctuation
      const newArray = npArray.concat(noPunctuation, '?');

  } else {

      for (i=0; i<limit; i++) {
        if ( array[i] === 'not'){
          
          if ( array[i] === 'bad'){

          }
  }


     }
   }


}
