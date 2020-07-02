// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };


//functions
const isSquare = function (rectangle) {
  return (rectangle.length === rectangle.width)
}

const area = function(rectangle) {
  return rectangle.length*rectangle.width;
}

const perimeter = function(rectangle) {
  return (rectangle.length*2) + (rectangle.width*2);
}

//rectangles
const recA = {
  length: 4,
  width: 4
};
const recb = {
  length: 10,
  width: 4
};
//function call
console.log(isSquare(recA));
console.log(isSquare(recb));

console.log(area(recA));
console.log(area(recb));

console.log(perimeter(recA));
console.log(perimeter(recb));


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const isEquilateral = function (triangle) {
    return (triangle.sideA === triangle.sideB) && (triangle.sideA === triangle.sideC);
}

const isIsosceles = function(triangle) {// Returns whether the triangle is isosceles or not
  return triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideC === triangle.sideA;
}

const triArea = function (triangle){
  const p = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
  const calculation =  Math.sqrt(p*(p-triangle.sideA)*(p-triangle.sideB)*(p-triangle.sideC))
  return Math.round(calculation * 1000) / 1000;
}

const isObtuse = function(triangle) {
  const max = Math.max(triangle.sideA, triangle.sideB, triangle.sideC) / 2;
  if (triangle.sideA == max) {
        return triangle.sideA > Math.sqrt(triangle.sideB * triangle.sideB + triangle.sideC * triangle.sideC);
      }
      else if (triangle.sideB == max) {
        return triangle.sideB > Math.sqrt(triangle.sideA * triangle.sideA + triangle.sideC * triangle.sideC);
      }
      else {
        return triangle.sideC > Math.sqrt(triangle.sideB * triangle.sideB + triangle.sideA * triangle.sideA);
      }
    }

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 10
};

const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

const triangleC = {
  sideA: 4,
  sideB: 5,
  sideC: 6
};

console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log(isEquilateral(triangleC));


console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));
console.log(isIsosceles(triangleC));


console.log(triArea(triangleA));
console.log(triArea(triangleB));
console.log(triArea(triangleC));

console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

const cashRegister = function (cart) {
  let total = 0;
  const arrayCart = Object.values(cart);
   for (let i=0; i<arrayCart.length; i++) {
     total += Number(arrayCart[i]);
   } return total;
};

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const partyCart = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
  dragonshake: "10",
  tv: "1000"
};

console.log(cashRegister(cartForParty));
console.log(cashRegister(partyCart));


//You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

//cesars --- for some reason it won't work for me still

const validateCreditCard = function (cc) { // creating a function
    let card = cc.substr(0,4) + cc.substr(5,4) + cc.substr(10,4) + cc.substr(15,4); // this removes the  -
        if (card.length !== 0) {
          return false;
        // this was my initial attempt at removed "-" } let newCreditNumber = creditNumber.replace(/-/g, ""); //// tried to replace all dashes with nothing so that we can check the length of the string
          for (let i = 1; i < 15; i++)  { // as per cesar - 15 because we need 16 digits
            if (card [0] === card [i]){
              return false
            }
          }
        }
      }

const creditCards = {
  card1: '9999-9999-8888-0000'
}

console.log(validateCreditCard(creditCards));

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // this is what carol posted for checking double digits.
              for (let index=0; index<numbers.length; index++) {
              cardNoDashed !== numbers[index].repeat(16);)

const creditCards = {
    card1: '9999-9999-8888-0000'
}

console.log(validateCreditCard(creditCards));
