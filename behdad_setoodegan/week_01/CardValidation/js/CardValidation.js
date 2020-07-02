
// Number must be 16 digits, all of them must be numbers
const evaluat16 = function (num){
  if ( (num / 1000000000000000) > 1 ){
    return true;
  } else {
    console.log("The number is not 16 digits.");
    return false;
  }
}

// You must have at least two different digits represented (all of the digits cannot be the same)
const differentNum = function (num){
  const stringNum = num.toString();
  let flag = false;
  for (let i = 15; i >= 0; i--){
    for (let j = 0; j < i; j++){
      if (stringNum[i] != stringNum[j]){
        flag = true;
      }
    }
  }
  if(!flag){
    console.log("You must have at least two different digits.");
    return false;
  }else {
    return true;
  }
}

// The final digit must be even
const even = function(num){
  if (num % 2 === 0){
    return true;
  } else {
    console.log("The final digit must be even.");
    return false;
  }
}

// The sum of all the digits must be greater than 16
const sum16 = function (num){
  let value = num;
  let sum = 0;

  while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
  }
  if (sum>=16){
    return true;
  }else{
    console.log("The sum of all the digits must be greater than 16.");
    return false;
  }
}

//Runing the validation.
const cardNum = 1111111111111121;
if (evaluat16(cardNum) && differentNum(cardNum) && even(cardNum) && sum16(cardNum)){
  console.log("The Credit Card number is valid.");
}
