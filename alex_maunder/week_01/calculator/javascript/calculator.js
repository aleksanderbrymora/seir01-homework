// Part 1

const squareNumber = function (number) {
  const calced = Math.pow(number, 2)
  console.log(`The result of squaring the number ${number} is ${calced}.`)
  return(calced)
};

const halfNumber = function (number) {
  const calced = number/2
  console.log(`Half of ${number} is ${number/2}`)
  return(calced)
};

const percentOf = function (number1, number2) {
  const calced = Math.floor(number1 / number2 * 100)
  console.log(`${number1} is ${calced}% of ${number2}.`)
  return(calced)
};

const areaOfCircle = function (radius) {
  const pi = Math.PI
  const calced = (pi * (radius * radius)).toFixed(2)
  console.log(`The area for a circle with radius ${radius} is ${calced}.`)
  return(calced);
};


// Part 2

const combinedFun = function (number) {
  const half = halfNumber(number);
  const square = squareNumber(half);
  const circ = areaOfCircle(square);
  const percOfSquare = percentOf(circ, square)
  return percOfSquare
};
