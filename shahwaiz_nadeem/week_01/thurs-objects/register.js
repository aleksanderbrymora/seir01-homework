/*
Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
*/

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = (cart) => {
  let prices = Object.values(cart);
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += parseFloat(prices[i]);
  }
  return total;
}

console.log(`The total price of the cart for the party is $${cashRegister(cartForParty)}`);
