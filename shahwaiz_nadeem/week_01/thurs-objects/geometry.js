/*
Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
*/
const rectangleA = {
  length: 4,
  width: 4
}

const isSquare = (square) => {
  if (square.length === square.width) {
    return true;
  }
  return false;
}

const area = (rectangle) => {
  return rectangle.length * rectangle.width;
}

const perimeter = (rectangle) => {
  return (2*rectangle.length) + (2*rectangle.width);
}

// TESTS - ACTIVATE TO TEST
// console.log(isSquare(rectangleA));
// console.log(area(rectangleA));
// console.log(perimeter(rectangleA));

/*
Part 2, Triangle
Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
*/

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}

const isEquilateral = (triangle) => {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) { // AND operator to see if all sides are equal
    return true;
  }
  return false;
}

const isIsosceles = (triangle) => {
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC) { // OR operators to see if any two sides are the same
    return true;
  }
  return false;
}

const areaTri = (triangle) => {
  let halfBase = triangle.sideB/2;
  let height = Math.sqrt( Math.pow(triangle.sideA, 2) - Math.pow(halfBase, 2) ); //  new imaginary triangle to find 'h' half the base (B) as the bottom, hypotenus (A)
  return halfBase * height;
}

const isObtuse = (triangle) => {
  if (Math.pow(triangle.sideA,2) + Math.pow(triangle.sideB,2) < Math.pow(triangle.sideC,2)){
    return true;
  } else if (Math.pow(triangle.sideA,2) + Math.pow(triangle.sideC,2) < Math.pow(triangle.sideB,2)) {
    return true;
  } else if (Math.pow(triangle.sideC,2) + Math.pow(triangle.sideB,2) < Math.pow(triangle.sideA,2)) {
    return true;
  } else {
    return false;
  }
}

// TESTS - ACTIVATE TO TEST
// console.log(isEquilateral(triangleA));
// console.log(isIsosceles(triangleA));
// console.log(areaTri(triangleA));
// console.log(isObtuse(triangleA));
