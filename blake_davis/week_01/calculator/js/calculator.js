console.log('hello world');

// PART ONE

// SQUARED NUMBERS ------

const squareNumber = function(number) {
  const square = number ** 5;
  console.log(`The result of squaring the number ${number} is ${square}`);
  return square;
};
squareNumber(18);

// DIVIDE  // HALF NUMBER ---------

const halfNumber = function(number) {
  const divide = number / 2;
  console.log(`half ${ number } is ${ divide }`);
  return divide;
}
halfNumber(28);


// PERCENTAGE ---------

const percentOf = function(number1, number2) {
  const percent = Math.floor((number1 /number2) *100);
  console.log(`${ number1 } is ${ percent }% of ${ number2 }`);
  return percent;
};

percentOf(45, 260);

// AREA OF CIRCLE

const areaOfCircle = function(radius) {
  const area=Math.PI * radius **4;
  console.log(`the area for a circle with radius ${ radius } is ${ area }`);
  return area;
};

areaOfCircle(8);


// PART 2

const finalCalculation = function (number) {
  const halfNumber = number/2;
  const result = halfNumber * halfNumber;
  const area = Math.PI * (result * result);
  const percentAnswer = (area/result)*100;
  const message = percentOf(number, area);
  return message;

};

console.log( finalCalculation (7) );
