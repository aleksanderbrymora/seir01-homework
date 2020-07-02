// \|/          (__)
//      `\------(oo)
//        ||    (__)
//        ||w--||     \|/
//    \|/

//Sqaures #################
const squareNumber = function(number) {
  const square = number ** 2;
  console.log(`The result of squaring the number ${number} is ${square}`); // (number ** 2) sqaures the number
  return square;
};

squareNumber(34); // will log the outcome on the console

//Divides #################
const halfNumber = function(number) {
  const divide = number / 2;
  console.log(`Half of ${number} is ${divide}`); // (number / 2) divides the number by 2
  return divide;
};

halfNumber(48); // will log the outcome on the console

//Percentage #################
const percentOf = function(num1, num2) {
  const percent = Math.floor((num1 / num2) * 100); // (Math.floor((num1 / num2) * 100) will find out the percentage of num1 into num2
  console.log(`${num1} is ${percent}% of ${num2}.`); // prints outcome
  return percent;
};

percentOf(20, 110); //will log the outcome on the console

//Area #################
const areaOfCircle = function(radius) {
  const area = Math.PI * radius ** 2; // will find the area of the circle by PIE r^2
  const roundUp = area.toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
};

areaOfCircle(4); // will log the outcome on the console

//Stage 2 Homework #################
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const allOfThem = function(masterNumber) {
  const half = halfNumber(masterNumber);
  const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percent = percentOf(area, square);
};

allOfThem(4); // will log the outcome of all into the consoleatom *
