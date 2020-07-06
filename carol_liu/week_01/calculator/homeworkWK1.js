// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
  const result = Math.pow(number, 2);
  const message = `The result of squaring the number ${ number } is ${ result }.`;
  return message;
};

console.log( squareNumber(3) );


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number) {
  const result = number/2
  const message = `Half of ${ number } is ${ result }.`;
  return message;
};

console.log( halfNumber(5) );


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
  const percent = (num1/num2) * 100;
  const message = `${ num1 } is ${ percent }% of ${ num2 }.`;
  return message;
};

console.log( percentOf(2, 4) );


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
  const area = Math.round(Math.PI * radius ** 2).toFixed(2);
  const message = `The area for a circle with radius ${ radius } is ${ area }.`;
  return message;
};

console.log( areaOfCircle(2) );


// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const calculation = function (number) {
  const halfNumber = halfNumber(number);
  const squaredHalfNumber = squaredNumber(number);
  const area = areaOfCircle(square);
  const percent = (area / squaredHalfNumber) * 100;
  const message = `The area of circle is ${ areaOfCircle } and it is ${ percent }% of the squared result ${ squaredHalfNumber }. `
  return message;
};
console.log( calculation(5) );
