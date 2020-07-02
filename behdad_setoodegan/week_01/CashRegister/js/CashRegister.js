const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const totalPrice = function(object){
  let sum = 0;
  for (let i = 0; i < Object.keys(object).length; i++){
    sum = sum + parseFloat(object[Object.keys(object)[i]]);
  }
  return sum;
}
console.log(`Total price of the shopping cart ${totalPrice(cartForParty)}`);
