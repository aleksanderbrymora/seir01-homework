
// Input
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

const cashRegister = function(cart){
    let sum = 0;
    for (let i =0; i< Object.entries(cart).length; i++){
        sum += parseFloat( Object.entries(cart)[i][1]);
    }
    return(sum);
}

console.log(cashRegister(cartForParty));
