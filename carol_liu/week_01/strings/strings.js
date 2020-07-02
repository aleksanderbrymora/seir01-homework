
// Strings
//DrEvil
const drEvil = function (amount) {
  if (amount < 1000000) {
    result = `${ amount } dollars`
  } else {result = `${ amount } dollars (pinky)`
  }
  return result;
};
console.log( drEvil(500) );
console.log( drEvil(50000000000));



//MixUp
const mixUp = function (word1, word2) {
  const newWord1 = word1.slice(0, -1) + word2.slice(-1);
  const newWord2 = word2.slice(0, -1) + word1.slice(-1);
  return `${newWord1} ${newWord2}`
};
console.log(mixUp('Hello', 'world'));


//FixStart
const fixStart = function (string) {
  if alert(string.split(string[0]).length-1)
}



//Verbing
const verbing = function (string) {
  if (string.length >= 3 && !string.includes('ing')) {
    newString = string.concat('ing');
  } else if (string.length >= 3 && string.includes('ing')){
    newString = string.concat('ly');
  } else{newString = string;}
  return newString;
};
console.log(verbing('apple'));
console.log(verbing('swimming'));
console.log(verbing('hi'));


//Not Bad
const notBad = function (string) {
  if (string.includes ('not', 'bad')) {
    newString = string.replace('not','').replace('bad', 'good')
    return newString;
  } else {
    return string;
  }
};
console.log(notBad ('This food is not bad.'))
console.log(notBad ('I like your shoes.'))
