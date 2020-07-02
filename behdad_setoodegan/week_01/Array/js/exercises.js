
//Define a function Max Of Two Numbers
const maxOfTwoNumbers = function (num1, num2){
  if(num1>num2){
    return num1;
  }else{
    return num2;
  }
}

//Define a function Max Of Three Numbers
const maxOfThree = function (num1, num2 , num3){
  if(num1>=num2 && num1>=num3){
    return num1;
  }else if (num2>=num1 && num2>=num3){
    return num2;
  } if (num3>=num1 && num3>=num2){
    return num3;
  }
}

//Returns true if it is a vowel
const vowel = function (char){
  const vowelList = ["a", "e", "i", "o", "u"];
  for (let i = 0; i< vowelList.length; i++){
    if (char === vowelList[i]){
      return true;
    }
  }
  return false;
}
console.log(vowel("e"));


//Sum all numbers in an Array
const sumArray = function (array){
  let sum = 0;
  for (let i=0; i< array.length; i++ ){
    sum = sum + array[i];
  }
  return sum;
}

//Multiplie all numbers in an Array
const multiplyArray = function (array){
  let multi = 1;
  for (let i=0; i< array.length; i++ ){
    multi = multi * array[i];
  }
  return multi;
}

const sampleArray = [1, 2, 3, 4];
console.log(sumArray(sampleArray));
console.log(multiplyArray(sampleArray));

console.log("############Bonus#############");

//Reversal of a string
const reverseString = function (txt) {
  let reverseTxt = "";
  for (let i = txt.length-1; i >= 0; i--){
    reverseTxt = reverseTxt +txt[i];
  }
  return reverseTxt;
}
console.log(reverseString("jag testar"));


//Length of the longest word in an array
const findLongestWord = function(array){
  let max = 0;
  for (let i = 0; i < array.length; i++){
    if( max < array[i].length){
      max = array[i].length;
    }
  }
  return max;
}

const sampleArray2 = ["first","maxOfAll","Array","test"];
console.log(findLongestWord(sampleArray2));

//Array of words that are longer than i
const filterLongWords = function (array, i){
  let result = [];
  for (let n = 0; n < array.length; n++){
    if (array[n].length > i){
      result.push(array[n]);
    }
  }
  return result;
}
console.log(filterLongWords(sampleArray2, 4));
