// ### Part 1, Rectangle

const rectangleA = {
  length: 4,
  width: 4,
};

const rectangleB = {
  length: 4,
  width: 3,
};

const isSquare = function (shape) {
  if (shape.length === shape.length) {
    return true;
  }
  return false;
}

console.log ( isSquare(rectangleA));
console.log ( isSquare(rectangleB));

const area = function (shape) {
  const value = shape.length * shape.width;
  return value;
}

console.log( area( rectangleA ) );
console.log( area( rectangleB ) );

const perimeter = function (shape) {
  const value = ( 2 * shape.length )+ ( 2 * shape.width );
  return value;
}

console.log ( perimeter (rectangleA) );

// Part 2

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

const triangleB = {
  sideA: 3,
  sideB: 3,
  sideC: 3,
};

const triangleC = {
  sideA: 1,
  sideB: 1,
  sideC: 2.009,
};

const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC ) {
    return true;
  }
  return false;
}

console.log ( isEquilateral (triangleA ) );
console.log ( isEquilateral (triangleB ) );

const isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC ) {
    return true;
  }
  return false;
}
 console.log ( isIsosceles ( triangleA ) );
 console.log ( isIsosceles ( triangleB ) );

const isObtuse = function ( triangle ) {
  if ( ((triangle.sideA ** 2) + (triangle.sideB ** 2)) < (triangle.sideC ** 2)) {
    return true;
  }
  return false;
}

console.log ( isObtuse (triangleA) );
console.log ( isObtuse (triangleC) );

const areaTri = function (triangle) {
  const s = ( (triangle.sideA + triangle.sideB + triangle.sideC) / 2); //Heron's Formula
  const area = ( Math.sqrt ( s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC) ) );
  return area;
}

console.log ( areaTri ( triangleA ) );
console.log ( areaTri ( triangleB ) );
console.log ( areaTri ( triangleC ) );
console.log ('================================');

// # The Cash Register

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (cart) {
  const array = Object.keys(cart); // This creates an array with all the keys in the object.
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total = total + Number( cart [ array [i] ]); // Iterates every element in the object storing the price in the total variable.
  }
  return total;
}

console.log ( cashRegister(cartForParty) );
console.log ( '=============================' );

// # Credit Card Validation

const cc1 = `6666-6666-6666-1666`
const cc2 = `a923-3211-9c01-1112`
const cc3 = `4444-4444-4444-4444`
const cc4 = `1111-1111-1111-1110`
const cc5 = `6666-6666-6666-6661`

const validateCreditCard = function (cc) {
  let card = cc.substr(0,4) + cc.substr(5,4) + cc.substr(10,4) + cc.substr(15,4); // Getting rid of the -
  if (card.length !== 16){
    return false;
  }

  for (let i = 1; i <= 15; i++) { // 15 because the card has to have 16 digits.
    if ( card[0] !== card[i] ) { // Checking if it has at least 2 different digits.
      break;
    }
    if ( i === 15){
      return false;
    }
  }

  if (Number(card[15]) % 2 !== 0){ // Checks that the last digit is even.
    return false;
  }
  
  let total = 0;
  for (let i = 0; i < 15; i++) {
    if ( Number.isInteger(Number( card[i] )) === false){ // NaN===NaN is false????? WTF Js?!?!?
      break;
      return false;
    }
    total = total + Number(card[i]);
    }
  if (total < 16) { // Test for the sum of the digits to be > 16, and that all the digits are numbers.
    return false;
  }
  return true;
}

console.log(`cc1 ${validateCreditCard(cc1)}`)
console.log(`cc2 ${validateCreditCard(cc2)}`)
console.log(`cc3 ${validateCreditCard(cc3)}`)
console.log(`cc4 ${validateCreditCard(cc4)}`)
console.log(`cc5 ${validateCreditCard(cc5)}`)
