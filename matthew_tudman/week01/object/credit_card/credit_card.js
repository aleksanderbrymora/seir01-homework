const validateCreditCard = function(num) {

  for (z = 0; z < num.length; z++) {
    if (num[z] === "-") {
      num = num.replace(num[z], "");
   }
  }

// Every time the next number is equal to the first number input a count is added. If it reaches the length of the number the function returns false.
  let countMax = 0;
  for (y = 0; y < num.length; y++) {
    if (num[0] === num[y]) {
      countMax = countMax + 1;
    }
  }
// if countMax reaches the length of the input number that means that all of the numbers are the same and it return false.
  if (countMax === num.length) {
    console.log("All of the numbers are the same.")
    return false;
  }

  let sumTotal = 0;
// Adds all the numbers to sumTotal and later will check if that adds up to 16.
  for (x = 0; x < num.length; x++) {
    sumTotal += parseInt(num[x]);
  }

  for (i = 0; i < num.length; i++) {
    if (Number.isInteger(parseInt(num[i])) === false) {
      console.log("Does not contain all numbers.")
      return false;
    }
  }

  const lastDigit = parseInt(num[num.length - 1]);

  if (lastDigit % 2 != 0){
    console.log("Last digit is odd")
    return false;
  }
  if (sumTotal < 16) {
    console.log("The sum total is less than 16");
    return false;
  }
  return true;
}

console.log(validateCreditCard("9999-9999-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("1111-1111-1111-1110"));
console.log(validateCreditCard("6666-6666-6666-6661"));
