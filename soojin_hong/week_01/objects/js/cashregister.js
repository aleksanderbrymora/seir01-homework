// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
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

const cartForDinner = {
  beef: "10.00",
  garlic: "2.64",
  onion: "1.96",
};

const cartForPicnic = {
  bread: "1.31",
  juice: "2.09",
  mushroom: "5.67",
  pesto: "4.43",
};

const cashRegister = function (price) {
  for ( let key in cartForParty ) {
    return ${ }
  }
};
console.log( cashRegister(cartForParty) ); //60.55
console.log( cashRegister(cartForDinner) ); //14.60
console.log( cashRegister(cartForPicnic) ); //13.50

console.log ('--------------------------------------------');
