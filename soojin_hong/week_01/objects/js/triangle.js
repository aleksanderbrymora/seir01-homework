// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
const triangleA = {
  sideA: 2,
  sideB: 5,
  sideC: 6,
};
////////////////////////////////////////////////////////////////////////////////
const isEquilateral = function () {
  if ( triangleA.sideA === triangleA.sideB === triangleA.sideC ) {
    // this is actually wrong code. should be two condition like
    // a===b&&b===c or a===b , b===c
    return 'equilateral';
  } else {
    return 'not equilateral';
  }
};
console.log( isEquilateral () );
////////////////////////////////////////////////////////////////////////////////
const isIsosceles = function () {
  if ( triangleA.sideA === triangleA.sideB || triangleA.sideB === triangleA.sideC || triangleA.sideC === triangleA.sideA ) {
    return 'isosceles';
  } else {
    return 'not isosceles';
  }
};
console.log ( isEquilateral () );
////////////////////////////////////////////////////////////////////////////////
const area2 = function () {
  const halfPerimeter = ( triangleA.sideA + triangleA.sideB + triangleA.sideC ) / 2
  return ( Math.sqrt ( halfPerimeter * ( halfPerimeter - triangleA.sideA ) * ( halfPerimeter - triangleA.sideB ) * ( halfPerimeter - triangleA.sideC ) ) );
};
console.log( area2 () );
////////////////////////////////////////////////////////////////////////////////
const isObtuse = function () {
  const maxSide = Math.max( triangleA.sideA, triangleA.sideB, triangleA.sideC );
  const minSide = Math.min( triangleA.sideA, triangleA.sideB, triangleA.sideC );
  const restSide = function () {
    for( let r = 0; r < triangleA.length; r++) {
      return ( triangleA[r] !== maxSide && triangleA[r] !== minSide );
    };}

  const squareSideA = Math.pow( maxSide, 2 );
  const squareSideB = Math.pow( minSide, 2 );
  const squareSideC = Math.pow( restSide, 2 );

  return squareSideA > squareSideB + squareSideC;
  };
console.log ( isObtuse () );
////////////////////////////////////////////////////////////////////////////////
console.log ('--------------------------------------------');
