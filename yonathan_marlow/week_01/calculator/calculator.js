// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const squareNumber = function (number) {
  const numberSquared = number*number;
  console.log(`the result of squaring the number ${number} is ${numberSquared}`);
  return numberSquared;
}
squareNumber(4);

const halfNumber = function (number) {
  const dividedNumber = (number/2);
  console.log(`Half of ${number} is ${dividedNumber}`);
  return halfNumber;
}
halfNumber(5);

//I would like to know which is better - the above two ways i did it or the below two.

const percentOf = function (num1, num2) {
  const actualPer = (num1/num2) * 100;
  const message = `${num1} is ${actualPer}% of ${num2}`;
  return message;
}
console.log(percentOf(4,8));

const areaOfCircle = function (radius) {
  const area = (Math.PI * radius * radius);
  const area2 = area.toFixed(2); // I couldn't figure out the actual way to do it. I found "TO FIXED"
  const message = `the area for a circle with radius ${radius} is ${area2}!`
  return message
}
console.log( areaOfCircle(2))

const calculation = function (number){
  const halfNumber = number/2;
  const squaredResult = halfNumber * halfNumber;
  const area = Math.PI * (squaredResult * squaredResult);
  const percentageAnswer = (area/squaredResult)*100
  const message = `the area of the circle is ${area} and it is ${percentageAnswer}% of ${squaredResult}`;
  return message;
}

console.log( calculation(5));

/* PART TWO OF HOMEWORK
STARTS HERE*/



const drEvil = function (amount) {
  if (amount === 1000000) {
    return `${amount} dollars (pinky)`;
  } else {
    return `${amount} dollars`;
  }
}
console.log(drEvil(100));
console.log(drEvil(1000000));
console.log(drEvil(1000000000));


//
// const mixUp = function (str1, str2) {
//   const replace = str1.replace()
//   let combo = str1+ ' ' +str2;
//   combo.swap(letters 1,2);
//   return combo;
// }
// console.log(mixUp('Yoni', 'awesome'))
//
// const mixUp = function (string1, string2){
//   const firstNub = string1.slice(0,2);
//   const firstEnding = string1.slice(2);
//   const secondNub = string2.slice(0,2);
//   const secondEnding = string2.slice(2);
//   const firstSpoonerism = secondNub + firstEnding;
//   const secondSpoonerism = firstNub + secondEnding;
//   console.log(firstSpoonerism + " " + secondSpoonerism);
//
// };
//
// mixUp("hello", "kitty");
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart = function (str1){
    const firstLetter = str1[0]
    let outputString = ''
    for (let i = 0; i < str1.length; i++) {
    if (firstLetter === str1[i]) {
      outputString = outputString+"*";
    } else {
      outputString = outputString + str1[i];
    }
  }
  return outputString
}
console.log(fixStart('im amazing'));

// const fixStart = function (string){
//   let firstChar = string.slice(0, 1);
//   let finalEnding = string.slice(1); //this is the variable I plan on updating
//   for (let i = 1; i < string.length; i++){
//     if (finalEnding[i] = firstChar){
//       finalEnding = finalEnding.replace(firstChar, '*');
//     }
//   }
//   let finalString = firstChar + finalEnding;
//   console.log(finalString);
//   return finalString;
// };
// fixStart("howdy you huge hoosiers!");


const verbing = function (str) {
    if (str.endsWith('ing')) {
      return (str + 'ly');
    }
    if (str.length >=3) {
      return str + 'ing';
    }
    else {
      return str
    }
}

console.log(verbing("swimming"));
console.log(verbing("eat"));
console.log(verbing("go"));



// const notBad = function (string) {
// // find index
// const not = string.indexOf('not')
// const bad = string.indexOf('bad')
// const notBadStr = string.substring(not, bad+3)
//
// return  notBadStr
// //     if (string.includes('not bad')) { //
// //       for (i = 0, i < string.length, i++ ){
// //         not < bad;
// //         return string = string.replace('not bad', 'good');
// //       }
// //     } else {
// //       return string;
// //     }
// }
// console.log(notBad('I really thought dragons were not bad'));
// console.log(notBad('I really thought dragons were bad'));
// console.log(notBad('the dinner is not terribly bad'));

function notBad(s){
  var notIndex = s.indexOf("not");
  var badIndex = s.indexOf("bad");
  if(notIndex>= 0 && badIndex>= 0 && badIndex > notIndex){
    return s.substring(0, notIndex) + "good" + s.substring(badIndex + 3);
  }   //
  return s;
}
console.log(notBad('This dinner is not that bad is it?'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'))
