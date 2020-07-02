// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4,
};

const rectangleB = {
  length: 7,
  width: 10,
};


const isSquare = function (rectangle){
  if (rectangle.length === rectangle.width){
    return('The rectangle is a square');
  } return('The rectangle is not a square');
};

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));

const area = function( rectangle){
  return (rectangle.length * rectangle.width);
};
console.log(area(rectangleA));
console.log(area(rectangleB));

const perimeter = function( rectangle){
  return ((rectangle.length + rectangle.width) * 2);
};

console.log(perimeter(rectangleA));
console.log(perimeter(rectangleB));


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};
const triangleB = {
  sideA: 5,
  sideB: 5,
  sideC: 5,
};

const isEquilateral = function (triangle){
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC){
    return 'the triangle is equilateral';
  }return `The triangle is not equilateral`;
}
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));

const isIsosceles = function (triangle) {
  const isosceles = triangle.sideA === triangle.side || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC ;
  if (isosceles === true){
    return `The triangle is isosceles`;
  } return `The triangle is not isosceles`;
}
console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));

//area Triangle = s (s-sideA) (s-sideB) (s-sideC)
// s = 1/2 and p = side + side B + side C

const areaTriangle = function (triangle){
  const perimeter = triangle.sideA + triangle.sideB + triangle.sideB;
  const s = perimeter/2;
  const area = s * (s-triangle.sideA) * (s-triangle.sideB) * (s-triangle.sideC);
  return (area.toFixed(2)); // or return (Math.round(area *100)/100); gives 2 number after the ., 1000 / 1000 gives 3 numbers
}

console.log(areaTriangle(triangleA));
console.log(areaTriangle(triangleB));


//Square the length of both sides of the triangle that intersect to create the obtuse angle(the 2 smallest sides), and add the squares together.
// obtusTriangle = angle > 90degre
// angle =

const isObtuse = function (triangle) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;
  const sideArray = [a, b, c];
  sideArray.sort(function(a, b) {
    return a-b;        //a is smallest, c is largest.
  })
