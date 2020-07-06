
const cartForParty = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};



const cashRegister = function(cart) {
  let total = 0;
  for (i = 0; i < Object.values(cart).length; i++) {
    let intTransform = Object.values(cart)[i];
    total += intTransform;
  }
  return total;
}

console.log(cashRegister(cartForParty));
