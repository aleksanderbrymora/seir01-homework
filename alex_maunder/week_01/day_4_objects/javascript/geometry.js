// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
const rectangleA = {
  length: 4,
  width: 2
};
// ```

const isSquare = function (rect) {
  if (rect.length === rect.width) {
    return `Is Square.`
  } else {
    return `Is rectangle.`
  }
};

const areaSq = function (rect) {
    return rect.length * rect.width
};

const perimeter = function (rect) {
    return (rect.length * 2) + (rect.width * 2)
};

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
const triangleA = {
  sideA: 1,
  sideB: 4,
  sideC: 4
};
// ```

let isntEqual = false
let isntIsos = false


const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    return `Is equilateral`
  } else {
    instEqual = true
    return `Is not equilateral`
  };
};

const isIsosceles = function (triangle) {
  let a = triangle.sideA
  let b = triangle.sideB
  let c = triangle.sideC
  if (a === b || a === c || b === c) {
    return `Is isosceles`
  } else {
    return `Is not isosceles`
  };
};

const areaTr = function (triangle) {
  let a = triangle.sideA
  let b = triangle.sideB
  let c = triangle.sideC
  return `Area of the triangle is ${a * b * c}`
};

const isObtuse = function (triangle) {
  let a = triangle.sideA
  let b = triangle.sideB
  let c = triangle.sideC
  // right angle triangle is defined as a^2 + b^2 = c^2
  if ((Math.pow(a, 2) + Math.pow(b, 2)) === Math.pow(c, 2))  {  //Math.pow(a, b) takes variable you want to calc, the the amount you want to power to.
    return `Right angle triangle, not Obtuse`
  } else {
  // obtuse triangle is defined as a^2 + b^2 < c^2 //need to work out longest side first.
    let longest = c
    if (longest < a) {
      c = longest;
      longest = a;
      a = c;
      }
    if (longest < b) {
      c = longest;
      longest = b;
      b = c;
    } else if( a * a + b * b > longest * longest) {
      return `Acute triangle, not obtuse`
    } else {
      return `This is Obtuse`
    };
  };
};
