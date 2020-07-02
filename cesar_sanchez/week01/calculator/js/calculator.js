// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
  const square = number * number;
  const result = `The result of squaring the number ${number} is ${square}.`;
  console.log(result)
  return square;
}

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number) {
  const half = number/2;
  const result = `Half of ${number} is ${half}.`
  console.log(result)
  return half;
}

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1,num2) {
  const percent = num1 * 100 / num2;
  const result = `${num1} is ${percent}% of ${num2}.`;
  console.log(result)
  return percent;
}

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius) {
  const area = Math.PI * radius * radius;
  const roundArea = Number.parseFloat(area).toFixed (2); // This line limits the decimal points up to 2
  const result = `The area for a circle with radius ${radius} is ${roundArea}`;
  console.log(result);
  return roundArea;
}

// - Bonus: Round the result so there are only two digits after the decimal.


// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const master = function ( number ) {
  const half = halfNumber( number );
  const square = squareNumber ( half );
  const area = areaOfCircle ( square );
  const percentage = percentOf ( area , square );
  const results = `These are the results for ${ number }: The half is ${ half }, the square is ${ square }, the area of the circle is ${ area } and the percentage is ${ percentage }.`;
  console.log(results);
  return results
}
