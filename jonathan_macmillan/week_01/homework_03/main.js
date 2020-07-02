// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
const rectangleA = {
  length: 4,
  width: 5
};

const isSquare = function(rectangle){
  if (rectangle.length === rectangle.width){
    return "This is a square";
  }
  return "This is not a square;"
}
console.log(isSquare(rectangleA));

const area = function(rectangle){
  return rectangle.length * rectangle.width;
}
console.log(area(rectangleA));

const perimeter = function(rectangle){
  return 2 * rectangle.length + 2 * rectangle.width;
}
console.log(perimeter(rectangleA));
// ```
//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(triangle){
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC){
    return "This triangle is equilateral"
  }
  return "This triangle is not equilateral";
};
console.log(isEquilateral(triangleA));

const isIsosceles = function(triangle){
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC){
    return "This triangle is isosceles";
  }
  return "This triangle is not isosceles";
};
console.log(isIsosceles(triangleA));

const triangleArea = function(triangle){
  let s = (triangle.sideA + triangle.sideB + triangle.sideC)/2 // s is Heron's number
  let area = Math.sqrt(s*(s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
  return "The area of the triangle is " + area;
};
console.log(triangleArea(triangleA));

const isObtuse = function(triangle){
  let largestSide = triangle.sideA;
  if (triangle.sideB > largestSide){
    largestSide = triangle.sideB;
  }
  if (triangle.sideC > largestSide){
    largestSide = triangle.sideC
  }
  if (triangle.sideA ** 2 + triangle.sideB ** 2 < largestSide ** 2){
    return true; //triangle is obtuse
  }
  return false;
};
console.log(isObtuse(triangleA));
// ```

// Part 2
//
// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//
// // Output
// cashRegister(cartForParty)); // 60.55

const cashRegister = function(cartItems){
  const stringCosts = Object.values(cartForParty);
  let costInNumbers = 0
  let totalCost = 0;
  for (let i = 0; i < stringCosts.length; i++){
    costInNumbers += parseFloat(stringCosts[i])
  }
  return costInNumbers;
};
console.log(cashRegister(cartForParty));


// ```
//
// Part 3
//
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// # Number must be 16 digits, all of them must be numbers
// # You must have at least two different digits represented (all of the digits cannot be the same)
// # The final digit must be even
// # The sum of all the digits must be greater than 16
const sumArray = function(array){
  let resultSum = 0
  for (let i = 0; i < array.length; i++){
    resultSum += array[i];
  }
  return resultSum;
}

const validateCreditCard = function(num){
  let numArray = [];
  let sameNumberCheck = true;
  let resultObject = {entry: num, isCorrect: "true"};
  for (let i = 0; i < num.length; i++){
    if (num[i] !== "-" && Number.isInteger(parseInt(num[i])) === false){
      resultObject.error = "Invalid characters";
      resultObject.isCorrect = "false";
      return resultObject;
    } else if (num[i] !== "-"){
      numArray.push(parseInt(num[i]));
    }      //to this point I've created an array of numbers, and checked for invalid characters;
  }
  if (numArray.length !== 16){
    resultObject.error = "Incorrect length";
    resultObject.isCorrect = "false";
    return resultObject;
  } else if (sumArray(numArray) <= 16){
    resultObject.error = "The sum of all digits must be greater than 16";
    resultObject.isCorrect = "false"; //this checks for the sum of integers
    return resultObject;
  } else if (numArray[numArray.length - 1] % 2 !== 0){
    resultObject.error = "The final number must be even";
    resultObject.isCorrect = "false"; //this checks for an even final number;
    return resultObject;
  } else for (let i = 1; i < numArray.length; i++){
      if (numArray[0] !== numArray[i]){
        sameNumberCheck = false;
        break;
      }
    }
    if (sameNumberCheck === true){
      resultObject.error = "Must be at least 2 digits";
      resultObject.isCorrect = "false";     //checks for more than one kind of digit
      return resultObject;
    }
  return resultObject;
}




console.log(validateCreditCard(`9999-9999-8888-0000`), "should work");
console.log(validateCreditCard(`6666-6666-6666-1666`), "should work");
console.log(validateCreditCard(`4444-4444-4444-4444`), "1 character fail");
console.log(validateCreditCard(`1111-1111-1111-1110`), "sum < 16 fail");
console.log(validateCreditCard(`a923-3211-9c01-1112`), "invalid characters fail");
console.log(validateCreditCard(`6666-6666-666d6-6661`), "odd final number fail");
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
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
"Done up to here!!!"

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
//





// Part 4
//
// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
