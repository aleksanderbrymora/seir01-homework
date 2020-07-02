//      /﹋\               ___
//    (҂`_´)              (._.)
//   <,︻╦╤─ ҉ - -         <|>
//    /﹋\                _/\_

// Square number
const squareNumber = function (num1){
  const numberSquared = num1 * num1; //num^2
  console.log(`The result of squaring the number ${num1} is ${numberSquared}`);
  return numberSquared;
}
squareNumber(3);

// half number
const halfNumber = function (num1) {
  const numberDiv2 = num1 / 2
  console.log(`Half of ${num1} is ${numberDiv2}`);
  return numberDiv2;
}
halfNumber(5);

// First number as a percentage of second
const percentOf = function (num1, num2){
  const getPercentOf = Math.floor(num1/num2*100);
  console.log(`${num1} is ${getPercentOf}% of ${num2}`);
  return getPercentOf;
}
percentOf(4,100);

// Area of a circle with Bonus completed (ugly)
const areaOfCircle = function (radius){
  const circleArea = Math.round ((Math.PI * radius * radius) * 100) / 100; //A = pie r^2 and
  console.log(`The area for a circle with radius ${radius} is ${circleArea}`);
  return circleArea;
}
areaOfCircle(2);

//Part 2
const allCalcs = function (number){
const half = halfNumber (number);
const square = squareNumber (half);
const circArea = areaOfCircle (square);
const percOf = percentOf (circArea,square);
};
allCalcs(3)
