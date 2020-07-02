// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (cart){
  const item = Object.keys(cart); //Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. output =  ['banana', 'handkerchief', etc..]
  let sum = 0;
  for (let i=0 ; i<item.length ; i++){
    const itemName = item[i]; // get the name of the key for the item
    const itemPrice = cart[itemName]; // get the price for the item
  sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
    } return sum ;
  }
console.log(cashRegister(cartForParty));


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number


const validateCreditCard = function(creditcard){
// Number must be 16 digits,
  if (creditCard.length !== 16){
    return 'Invalide number of numbers';
// all of them must be numbers
  }for (let i=0 ; i< creditCard.length ; i++){
    //store the number
    let number = creditCard[i];
    //turn the digit from a string to an integer
    number = Number.parseInt(number);
    // look if that the digit is a number
    if(!Number.isInteger(number)){
    return 'invalid characters';
  } 

  }
}
console.log(validateCreditCard([a92332119c011112]));
