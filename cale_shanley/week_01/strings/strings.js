//Strings homework -----

const drEvil = function(amount) {
  if (amount == 1000000) {
    return `${amount} dollars (pinky)`
  } else {
    return `${amount} dollars`;
  }
}

//MixUp

const mixUp = function(word1, word2) {
  return word2.slice(0, 2) + word1.slice(2) + " " + word1.slice(0, 2) + word2.slice(2);
}

console.log(mixUp('cat', 'dog'));


//FixStart

const ourString = ""
