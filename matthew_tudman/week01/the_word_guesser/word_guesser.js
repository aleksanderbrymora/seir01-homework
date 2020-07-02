// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

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



const word = ['F', 'O', 'X'];
const guessedLetters = [];
let totalLetters = word.length;

const guessLetter = function(letter) {
  for (i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      console.log(letter + " is right!");
      totalLetters -= 1;
      if (totalLetters === 0) {
        console.log(`You win! The answer is ${ word }`);
        break;
      }
    }
  }
  guessedLetters.push(letter);
  console.log(guessedLetters);
  console.log(`You have ${ totalLetters } to go!`);
}



// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
// Word to be guessed and characters are removed as they are guessed.
const fortuneWord = ['F', 'O', 'X'];
const winWord = "FOX"
//Where guesses will be pushed to.
const fortuneGuesses = [];
// If it hits 0 they win, and gets reduced when they get a successful guess.
let fortuneTotal = word.length;
let reward = 0;

const fortuneGuess = function(letter) {
  // Seperate tally so that if there are multiple characters input they can be multiplied together.
  let rewardOutPut = 1;
  //
  for (y = 0; y < letter.length; y++) {
    for (i = 0; i < fortuneWord.length; i++) {
      if (letter[y] === fortuneWord[i]) {
        fortuneTotal -= 1;
        rewardOutPut = rewardOutPut * Math.floor(Math.random() * Math.floor(100));
        fortuneWord[i] = "|";
        if (fortuneTotal === 0) {
          reward += rewardOutPut;
          console.log(`You win $${ reward }! The answer is ${ winWord }`);
            return;
        }
          console.log(letter[y] + " is right!");
          console.log(`You have ${ fortuneTotal } to go!`);
          break;
        } else if (i === (fortuneWord.length - 1)){
          console.log(`I'm sorry, ${ letter[y] } is wrong.`);
          if (reward != 0) {
            rewardOutPut -= Math.floor(Math.random() * Math.floor(10))
            console.log("You lose $" + rewardOutPut);
          }
        }
      }
    }
  fortuneGuesses.push(letter);
  console.log(fortuneGuesses);
  if (rewardOutPut != 1) {
    reward += rewardOutPut;
    console.log("Your current reward is $" + reward);
  }
}




// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


//NOT FINISHED

const hangAnswer = ['D', 'E', 'A', 'D'];
const winHang = "DEAD";
//Where guesses will be pushed to.
const hangGuesses = [];
// If it hits 0 they win, and gets reduced when they get a successful guess.
let hangTotal = hangAnswer.length;

const hangMan = function(letter) {
  // Seperate tally so that if there are multiple characters input they can be multiplied together.

  for (y = 0; y < letter.length; y++) {
    for (i = 0; i < hangAnswer.length; i++) {
      if (letter[y] === hangAnswer[i]) {
        hangTotal -= 1;
        hangAnswer[i] = "|";
        if (hangTotal === 0) {
          console.log(`You win! The answer is ${ winHang }`);
            return;
        }
        console.log(letter[y] + " is right!");
        console.log(`You have ${ hangTotal } to go!`);
        // If the last letter guess is correct then it will leave the loop.
        if (i === (hangAnswer.length - 1) && y === (letter.length - 1)) {
          break;
        }
        } else if (i === (hangAnswer.length - 1)) {
          console.log(`I'm sorry, ${ letter[y] } is wrong.`);
        }
      }
      hangGuesses.push(letter);
    }
  console.log(hangGuesses);
}
