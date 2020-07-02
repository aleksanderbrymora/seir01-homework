// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

  const validateCreditCard = function (creditcard) {
    let truth = false;
    let error = '';
    const ccArray = creditcard.split('-');  // splits into an array like ["1111", "2222", "3333", "454"]
    const format = ccArray.join(''); // joins the ccArray into a string with no separators

    // check length is 16
    if (format.length !== 16) {
      error = " wrong_length"
      return truth + error
    };

    // see if more than 1 number type
    const regex = RegExp(/^(?=.*(.)(?!$|.*\1))(?=.*(?!\1))[0-9]+$/); // checks if > 1 digit in a string
    if (!(regex.test(format))) {  // check if regex does not match ie if there is only 1 digit type
      error = " invalid. only one type of number."
      return truth + error
    };

    // check if final digit is even
    if (format.split(-1) % 2 !== 0) {
      error = " odd final number"
      return truth + error
    };

    // check if total sum < 16
    sum = 0;
    let newArray = Array.from(format); // converts into an array of strings
    for (let i = 0; i < newArray.length; i++) { // sums the array after converting string to numbers
      let int = parseInt(newArray[i]) // converts each element of newArray to a number then adds to sum
      sum += int
    };
    if (sum <= 16) {
      error = " sum less than 16"
      return truth + error
    };

    return `Valid Credit Card.`
  };
