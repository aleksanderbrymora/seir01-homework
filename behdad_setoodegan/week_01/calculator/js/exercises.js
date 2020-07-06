/*Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."*/

const squareNumber = function (num) {
  const squareNum = num ** 2 ;
  console.log(`The result of squaring the number ${num} is ${squareNum}.`);
  return squareNum;
};
squareNumber(3);

/*Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".*/
const halfNumber = function (num) {
  const halfNum = num / 2 ;
  console.log(`Half of ${num} is ${halfNum}`);
  return halfNum;
};
halfNumber(3);

/*Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."*/

const percentOf = function (num1, num2) {
  const percent = num1 / num2 * 100 ;
  console.log(`${num1} is ${percent} of ${num2}`);
  return percent;
};
percentOf(30, 90);

/*Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."*/

const areaOfCircle = function (radius) {
  const area = Math.PI * radius ** 2 ;
  const area2 = area.toFixed(2); // PI r^2
  console.log(`The area for a circle with radius ${radius} is ${ area2 }`);
  return area;
};

areaOfCircle(2);

/*Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:*/
/*Take half of the number and store the result.*/
/*Square the result of #1 and store that result.*/
/*Calculate the area of a circle with the result of #2 as the radius.*/
/*Calculate what percentage that area is of the squared result (#3).*/

const lastFunc = function (num) {
  const halfNum = halfNumber(num);
  const square = squareNumber(halfNum) ;
  const area = areaOfCircle(square) ;
  const percent = percentOf(area, square);
  console.log(`The area is ${percent.toFixed(2)}% of square.`);
  return area;
};


lastFunc(5);
