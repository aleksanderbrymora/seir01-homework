// Max of two numbers

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 === num2) {
    console.log('The numbers are the same.');
  } else {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
}
console.log(maxOfTwoNumbers(1,2));
console.log(maxOfTwoNumbers(2,1));
console.log(maxOfTwoNumbers(2,2));


// Max of three numbers

const maxOfThree = function (num1, num2, num3) {
  if (num1===num2 && num1===num3) {
    console.log ('The numbers are equal.');
  } else{
    if (num1 > num2 && num1 > num3 ) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }
}
console.log(maxOfThree(1,2,3));
console.log(maxOfThree(3,2,1));
console.log(maxOfThree(1,3,2));
console.log(maxOfThree(3,3,3));

// Vowel checker


const vowelCheck = function (letter) {
  const vowels = ['a','e','i','o','u'];
  let checker = false;

  for (i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]){
      console.log(`${ letter } is a vowel.`)
  }
  console.log(`${ letter } is not a vowel.`)
  }

}

vowelCheck('a');
vowelCheck('e');
vowelCheck('i');
vowelCheck('o');
vowelCheck('u');
vowelCheck('r');

// Adding and multipling arrays

const array = [1,2,3,4];

const sumArrays = function (array) {
let total = 0;
for (i=0; i<array.length;i++){
  total = total + array[i];
}
return total;
}

const multiplyArray = function (array) {
  let mult = 1;
  for (i=0; i<array.length; i++) {
    mult = mult * array[i];
  }
  return mult;
}

console.log(sumArrays(array));
console.log(multiplyArray (array));

// Reverse string

const reverseString = function (str) {
  let rts = ""; //Will contain the reverse string
  for (i = str.length ; i===0 ; i-- ) {
    rts = rts + str[i];
  }
  return rts;
}

console.log(reverseString('hola'));
