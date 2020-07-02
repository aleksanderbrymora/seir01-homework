/*
Credit Card Validation
You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example
validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
*/
const turnToArray = (cardString) => {
  let array = [];
  for (let i = 0; i < cardString.length; i++) {
    array.push(cardString[i]);
  }
  return array;
}

const removeDashes = (array) => {
  const length = array.length;
  for (let i = length-1; i >= 0; i--) {
    if (array[i] === '-') {
      array.splice(i,1);
    }
  }
  return array;
}

const checkLength = (array) => {
  if (array.length === 16) {
    return true;
  } else {
    return false;
  }
}

const checkChars = (array) => {
  let allowed = ['0','1','2','3','4','5','6','7','8','9'];
  let valid = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < allowed.length; j++) {
      if (array[i] === allowed[j]) {
        valid.push(array[i]);
      }
    }
  }
  if (array.toString() === valid.toString()) {
    return true;
  }
  return false;
}

const checkNoRepeat = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[1] === array[i]) {
      count += 1;
    }
  }
  if (count === 16){
    return false;
  }
  return true;
}

const lastDigitEven = (array) => {
  if (parseInt(array[array.length-1],10) % 2 === 0) {
    return true;
  } else if (parseInt(array[array.length-1],10) === 0) {
    return true;
  }
  return false;
}

const sumMinimum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i])
  }
  if (sum > 16) {
    return true;
  }
  return false;
}

const validateCreditCard = (card) => {
  const log = {cardNumber: card};
  let errors = [];
  let cardNumArray = removeDashes(turnToArray(card));
  if (!checkLength(cardNumArray)) {
    errors.push("invalid_length");
  }
  if (!checkChars(cardNumArray)) {
    errors.push("invalid_characters")
  }
  if (!checkNoRepeat(cardNumArray)) {
    errors.push("only_one_unique_character")
  }
  if (!lastDigitEven(cardNumArray)) {
    errors.push("last_digit_odd")
  }
  if (errors[0] === undefined){
    errors.push("none");
  }
  log.errors = errors;
  return log;
}
