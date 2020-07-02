// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

let letters = ['f', 'o', 'x'];
let guessed = [];
let gameStarted = false;

const guessLetter = function (a) {
  const blankSpace = ['_'];
  const regex = RegExp('[a-z]');
  let newLetter = false;
  // prevent user entering multiple characters
  if (a.length > 1) {
    return `Only 1 letter at a time, try again.`
  };
  // if this is the first time it's run, add '_' to guessed for the amount of letters
  if (gameStarted === false) {
    for (let i = 0; i < letters.length; i++){
      guessed.push(blankSpace)
      gameStarted = true
    };
  };
  // see if users guess matches letters variables
  for (let i = 0; i < letters.length; i++){
    let x = regex.test(guessed[i]); // checks if the string in guessed at the current location is a letter
    if (x === true) {
      if (a[0] === letters[0]) {    // if users guess is at the first position of letters, splice (i,1) else splice(i,-1)
        guessed.splice(i,1); // splices at that element and removes 1 item
      }else{
        guessed.splice(i,-1); // splices at the element after it and removes 1 item
      };
    };
    if (a[0] === letters[i]) { //requires the 0th element in the array entered into the function to then compare to letters[i]. Puts them in the same format
      guessed.splice(i, i, a); //splice is same as pop() but allows you to specify an index to replace
      newLetter = true;
    }
  };
  output = `${guessed.toString()} ` //converts output to a string for the reader

  // add logic here for if user wins
  if (newLetter === true) {  //if a new letter is found, append congrats to output
    output += 'well done, you found a new letter'
  };
  return output
};

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.





// Hangman
//
// -----
// |   |
// |   0
// | /-+-\
// |   |
// |   |
// |  | |
// |  | |
// |
// --------
