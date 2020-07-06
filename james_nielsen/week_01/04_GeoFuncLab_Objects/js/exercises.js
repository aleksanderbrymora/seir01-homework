// //Geometry Functions alb
// //part one
//
//
// //pass constant into the function
// const isSquare = function (rectangle) {
//   if (rectangle.length === rectangle.width) {
//     return true;
//   } else {
//     return false
//   }
// }
//
// const rectangleA = {       //this is the object
//   length: 4,
//   width: 4
// };
//
// const rectangleB = {       //this is the object
//   length: 4,
//   width: 5
// };
//
// console.log(isSquare(rectangleA))
// console.log(isSquare(rectangleB))

//rectangles
const rectangleA = {       //this is the object
  length: 4,
  width: 4
};

const rectangleB = {       //this is the object
  length: 4,
  width: 5
};

//fucntions
const isSquare = function (rectangle) {
  return rectangle.length === rectangle.width
}
const area = function(rectangle) {
  return rectangle.length * rectangle.width
  //return calc
}
const perimeter = function(rectangle) {
  return (rectangle.length*2)+(rectangle.width*2)
  //const caclulation = rectangle.length*2 + rectangle.width*2
}
//fucntion calls
console.log(isSquare(rectangleA))
console.log(isSquare(rectangleB))

console.log(area(rectangleA))
console.log(area(rectangleB))

console.log(perimeter(rectangleA))
console.log(perimeter(rectangleB))

console.log("====================sqrend=============================")
//object

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

const triangleC = {
  sideA: 2,
  sideB: 3,
  sideC: 4
};

//Functions
const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB) {
     if (triangle.sideC === triangle.sideA) {
  return true
  }
}
  return false
}

const isIsosceles = function (triangle){
    if (triangle.sideA === triangle.sideB){
      return true
    }
    if (triangle.sideB === triangle.sideC){
      return true
    }
    if (triangle.sideC === triangle.sideA){
      return true
    }
return false
}

const tarea = function (triangle){
  const p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  const calculation = Math.sqrt(p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC))
//could remove above const and just return
return calculation;
}
 //const areaT = function (triangle) {
   //return Math.sqrt(3)
 //}

//function calls
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log(isEquilateral(triangleC));
console.log('==========================')

console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));
console.log(isIsosceles(triangleC));
console.log('==========================')

console.log(tarea(triangleA));
console.log(tarea(triangleB));
console.log(tarea(triangleC));
console.log('==========================')


//The Cash Register

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (cart) {
    let total = 0;
    const arrayCart = Object.values(cart); //turn object in array of values
    for (let i=0; i < arrayCart.length; i++){
      total += Number(arrayCart[i]);
    }

    return total;
  }
  const gst = ((cashRegister(cartForParty))/11) //whats Scomos cut?.


console.log("your total is $ " + cashRegister(cartForParty) + ' including $' + gst.toFixed(2) + ' gst');






//cashRegister();
