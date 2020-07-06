// The Calculator Part 1

const squareNumber = function(number) {
  output = number * number;
  console.log(`The result of squaring the number ${ number } is ${ output }`);
  return output;
}

squareNumber(3);

const halfNumber = function(number) {
  output = number / 2.0;
  console.log(`Half of ${ number } is ${ output }`)
  return output;
}

halfNumber(6);


const percentOf = function(numOne, numTwo) {
  output = numOne / numTwo;
  percentage = output * 100;
  console.log(`${ numOne }, is ${ percentage } of ${ numTwo }`);
  return percentage;
}
percentOf(10, 30);


const areaOfCircle = function(radius) {
  let radiusSquare = radius * radius;
  let output = radiusSquare * Math.PI;
  let outputRound = output.toFixed(2);
  console.log(`The area for a circle with a radius of ${ radius } is ${ outputRound }.`)
  return outputRound;
}

areaOfCircle(2);




// The_Calculator Part 2

const number_Chain = function(the_Number) {

const step_One = halfNumber(the_Number);

const step_Two = squareNumber(step_One);

const step_Three = areaOfCircle(step_Two);

const step_Four = percentOf(step_Three, step_Two);

}

number_Chain(8);
