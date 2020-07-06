const raindrops = function(num){
  let output = '';

  if (num % 3 === 0){
    output = output + 'Pling';
  }
  if (num % 5 === 0){
  output += 'Plang';
  }
  if (num % 7 === 0){
    output += 'Plong';
  }
  if (output === '' ){
  return num.toString();
} else {
  return output;
}
  }
  console.log(raindrops(34));



// const drEvil = function (amount){
//   if (amount >= 1000000){
//   console.log(`$${amount} dollars (pinky)`); //try putting console
// } else {
//   console.log(`$${amount} dollars`);
//   return drEvil;
// }
// }
// drEvil(1000000);

// if (num % 3 === 0){
//   console.log('Pling');
// } if
//   (num % 5 === 0){
//   console.log('Plang');
// } if
//   (num % 7 === 0){
//   console.log('Plong');
// return raindrops;
//   }
// }
// raindrops(35);
