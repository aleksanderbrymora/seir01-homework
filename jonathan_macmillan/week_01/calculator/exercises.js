// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function (number){
  const square = number * number;
  console.log(`The result of squaring the number ${number} is ${square}.`);
  return square;
};
squareNumber(2.5);
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (number){
  const newNumber = number / 2;
  console.log(`Half of ${number} is ${newNumber}.`);
  return newNumber;
};
halfNumber(5);
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function (num1, num2){
  const percent = Math.round((num1 /num2) * 100) + "%";
  console.log(`${num1} is ${percent} of ${num2}`);
  return percent;
};
percentOf(122.72, 6.25);
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
//

const areaOfCircle = function (radius){
  const area = Math.PI * radius ** 2;
  const roundedArea = Number.parseFloat(area).toFixed(2)
  console.log(`The area for a circle with radius ${radius} is ${roundedArea}`)
  return area;
};
areaOfCircle(6.25);


// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const crazyMath = function (number){
  const half = halfNumber(number);
  const squared = squareNumber(half);
  const area = areaOfCircle(squared);
  const finalPercentage = percentOf(area, squared);
  console.log(`The answer to this crazy problem is ${finalPercentage}`);
  return finalPercentage;
};

crazyMath(5);
