



// RECTANGLE

const rectangleOne = { length: 4, width: 4 };

const isSquare = function(input) {
  return input.length === input.width;
};

const area = function(input) {
  return input.length * input.width;
};

const perimeter = function(input) {
  return (input.length + input.width) * 2;
};






// TRIANGLE


const triangleOne = { sideA: 3, sideB: 4, sideC: 4 };

const isEquilateral = function(input) {
  if (input.sideA === input.sideB && input.sideA === input.sideC) {
  return true;
  } else {
  return false;
  }
}




const isIsosceles = function(input) {
  if (input.sideA === input.sideB || input.sideA === input.sideC) {
  return true;
} else if (input.sideB === input.sideC) {
  return true;
} else {
  return false;
  }
}


const triangleArea = function(input) {
  let perimeterInput = input.sideA + input.sideB + input.sideC;
  let perimeter = perimeterInput / 2;
  console.log(perimeter);

  let areaInput = perimeter * (perimeter - input.sideA) * (perimeter - input.sideB) * (perimeter - input.sideC);
  return Math.sqrt(areaInput)
}



const isObtuse = function(input) {
  if (input.sideA === input.sideB) {
    if (input.sideA > input.sideC) {
      return false;
    } else {
      return true;
    }
  } else if (input.sideB === input.sideC) {
    if (input.sideB > input.sideA) {
      return false;
    } else {
      return true;
    }
  } else if (input.sideA === input.sideC){
    if (input.sideA > input.sideB) {
      return false;
    } else {
      return true;
    }
  }
}



// TESTING
// console.log(isSquare(rectangleOne));
// console.log(area(rectangleOne));
// console.log(isEquilateral(triangleOne));
// console.log(isIsosceles(triangleOne));
// console.log(triangleArea(triangleOne));
console.log(isObtuse(triangleOne));









//
