const rectangleA = {
  length: 4,
  width: 5
};

const isSquare = function(rectangle){
  if (rectangle.length === rectangle.width){
    console.log("Rectangle is a square.");
  } else {console.log("Rectangle is not a square.");}
}

const perimeter = function(rectangle){
  console.log(`Area of the rectangle is ${rectangle.length * rectangle.width}`);
}

const area = function(rectangle){
  console.log(`Area of the rectangle is ${2 * (rectangle.length + rectangle.width)}`);
}

isSquare(rectangleA);
perimeter(rectangleA);
area(rectangleA);


const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 6
};

const isEquilateral = function (triangle){
  if (triangle.sideA === triangle.sideB === triangle.sideC){
    console.log("Triangle is equilateral");
  } else {
    console.log("Triangle is not equilateral ");
  }
}

const isIsosceles = function (triangle){
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC){
    console.log("Triangle is isosceles");
  } else {console.log("Triangle is not isosceles");}
}

const triangleArea = function (triangle){
  const s = (triangle.sideA + triangle.sideB + triangle.sideC)/2
  const a = Math.sqrt(s * (s-triangle.sideA) * (s-triangle.sideB) * (s-triangle.sideC));
  if ( a > 0 ){
  console.log(`Area of the Triangle is ${a}`);
} else {console.log("It is not a triangle");}
}

const isObtuse = function (triangle){
  let flag = true;
    if(triangle.sideA ** 2 > (triangle.sideB ** 2) + (triangle.sideB **2)){
      console.log("The triangle is obtuse");
      flag = false;
    }
    if(triangle.sideB ** 2 > (triangle.sideB ** 2) + (triangle.sideC **2)){
      console.log("The triangle is obtuse");
      flag = false;
    }
    if(triangle.sideC ** 2 > (triangle.sideA ** 2) + (triangle.sideB **2)){
      console.log("The triangle is obtuse");
      flag = false;
    }
  if (flag){console.log("The triangle is not an obtuse");}

}
isEquilateral(triangleA);
isIsosceles(triangleA);
triangleArea(triangleA);
isObtuse(triangleA);
