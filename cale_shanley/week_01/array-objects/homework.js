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
  width: 4
}

const rectangleB = {
  length: 4,
  width: 4
}

const isSquare = function (rectangle) {
  return rectangle.length === rectangle.width
}

const area = function (rectangle) {
  return rectangle.length * rectangle.width
}

const perimeter = function (rectangle) {
  const calculation = rectangle.length * 2 + rectangle.width * 2
}

console.log(isSquare(rectangleA))
console.log(area(rectangleA))
console.log(perimeter(rectangleA))

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}

const isEquilateral = function (triangle) {
  // Returns whether the triangle is equilateral or not
  return triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC
}

const isIsosceles = function (triangle) {
  // Returns whether the triangle is isosceles or not
  return (
    triangle.sideA === triangle.sideB ||
    triangle.sideB === triangle.sideC ||
    triangle.sideC === triangle.sideA
  )
}

const tarea = function (triangle) {
  const p = triangle.sideA + triangle.sideB + triangle.sideC
  return Math.sqrt(
    p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC)
  )
}

const isObtuse = function (triangle) {
  const max = Math.max(triangle.sideA, triangle.sideB, triangle.sideC) / 2
  if (triangle.sideA === max) {
    return (
      triangle.sideA >
      Math.sqrt(
        triangle.sideB * triangle.sideB + triangle.sideC * triangle.sideC
      )
    )
  } else if (triangle.sideB === max) {
    return (
      triangle.sideB >
      Math.sqrt(
        triangle.sideA * triangle.sideA + triangle.sideC * triangle.sideC
      )
    )
  } else {
    return (
      triangle.sideC >
      Math.sqrt(
        triangle.sideB * triangle.sideB + triangle.sideA * triangle.sideA
      )
    )
  }
}

// function logs
console.log(isEquilateral(triangleA))
console.log(isIsosceles(triangleA))
console.log(tarea(triangleA))
console.log(isObtuse(triangleA))

// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// Input
const cartForParty = {
  banana: '1.25',
  handkerchief: '.99',
  Tshirt: '25.01',
  apple: '0.60',
  nalgene: '10.34',
  proteinShake: '22.36'
}
const cashRegister = function (cartTotal) {
  let sum = 0
  Object.keys(cartForParty).map((key) => {
    sum += Number.parseFloat(cartForParty[key])
  })
  return sum
}
console.log(cashRegister(cartForParty))

// Output // 60.55
