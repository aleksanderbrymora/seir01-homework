const drEvil = function (amount){
  if (amount >= 1000000){
  console.log(`$${amount} dollars (pinky)`); //try putting console
} else {
  console.log(`$${amount} dollars`);
  return drEvil;
}
}
drEvil(1000000);
