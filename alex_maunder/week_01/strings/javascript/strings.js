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

function drEvil (amount) {
  if(amount === 100000) {
    return(`${amount} dollars (pinky)`)
  }
  else {
      return`${amount} dollars`;
  }
};

// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

function mixUp (string1, string2) {
  const ar1 = string1.split(''); //splits into array
  const ar2 = string2.split('');
  const first2 = ar1.slice(0,2).join(''); //gets first 2 letters and joins them into a string
  const remain1 = ar1.slice(2).join(''); //gets remaining letters and joins to string
  const second2 = ar2.slice(0,2).join('');
  const remain2 = ar2.slice(2).join('');
  return(`${second2 + remain1} ${first2 + remain2}`)
};

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = function(string) {
  const splitStr = string.split('');
  const firstLet = splitStr.slice(0,1).join('');
  const rest = splitStr.slice(1).join('');
  let final = ''
  for (let each of rest) {
    if(each === firstLet) {
      final += '*'
    }else{
      final += each
    };
  };
  return(firstLet + final)
};

// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function(string) {
  if(string.length <= 2) {
    return(string)
  };
  const splitStr = string.split('');
  const lastThree = splitStr.slice(-3).join('');
  if (lastThree === 'ing') {
    return(string + 'ly')
  }else{
    return(string + 'ing')
  };

};

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

const notBad = function(string) {
  const regex = RegExp(/not.*bad/); //defines regular expression to use
  const contNotBad = regex.test(string); //checks if string contains 'not bad'
  const splitNotBad = string.split(regex); //splits if contains 'not bad'
  if (contNotBad === true) {
    return(splitNotBad[0] + 'good' + splitNotBad[1]);
  }else{
    return(string)
  };
};
