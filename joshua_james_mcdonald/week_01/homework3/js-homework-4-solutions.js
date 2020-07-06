// part 1
const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (object) {
  if (object.length == object.width) {
    return (true);
  } else {
    return (false);
  }
}

const area = function (object) {
  return (object.length * object.width);
}

const perimeter = function (object) {
  return (2 * object.length + 2 * object.width);
}

console.log(isSquare(rectangleA), area(rectangleA), perimeter(rectangleA));

// part 2


// const triangleA = {
//   sideA: 4,
//   sideB: 4,
//   sideC: 4
// };
const triangleA = { //obtuse triangle
  sideA: 5,
  sideB: 10,
  sideC: 14
};

const isEquilateral = function (object) {
  if ((object.sideA == object.sideB) && (object.sideA == object.sideB)) {
    return (true);
  } else {
    return (false);
  }
}

const isIsosceles = function (object) {
  if ((object.sideA == object.sideB) || (object.sideA == object.sideC) || (object.sideC == object.sideB)) {
    return (true);
  } else {
    return (false);
  }
}

const triArea = function(object){
  let perimeter = (object.sideA+object.sideB+object.sideC)/2;
  let area = Math.sqrt(perimeter*(perimeter-object.sideA)*(perimeter-object.sideB)*(perimeter-object.sideC)) //Heron's formula
  return(area);
}

const isObtuse = function(object){
    let arr = [object.sideA,object.sideB,object.sideC];
    let i = arr.indexOf(Math.max(object.sideA,object.sideB,object.sideC)); // get index of largest side
    let indexArr = [0,1,2];
    indexArr.pop(indexArr.indexOf(i)); // remove the largest sides index
    if (arr[indexArr[0]]**2 + arr[indexArr[1]]**2 < arr[i]**2 ){
      return(true);
    } else {
      return(false);
    }
}
console.log(isEquilateral(triangleA) ,isIsosceles(triangleA) ,triArea(triangleA) ,isObtuse(triangleA));