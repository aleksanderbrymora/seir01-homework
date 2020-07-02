//PART ONE

/*
Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
*/

const squareNumber = (num) => {
    let squ = num * num;
    console.log(`The result of squaring the number ${num} is ${squ.toFixed(2)}.`);
    return squ; //left without decimal rounding to allow for accurate testing in function 4.
}

/*
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
*/

const halfNumber = (num) => {
    let half = num / 2;
    console.log(`Half of ${num} is ${half.toFixed(2)}.`);
    return half.toFixed(2);
}

/*
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
*/

const percentOf = (num, num2) => {
    let percent = (num / num2) * 100;
    console.log(`${num} is ${percent.toFixed(2)}% of ${num2}`);
    return percent.toFixed(2);
}

/*
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
*/

const areaOfCircle = (rad) => {
    let area = Math.PI * squareNumber(rad);
    console.log(`The area for a circle with radius ${rad} is ${area.toFixed(2)}.`);
    return area.toFixed(2);
}

//PART TWO

/*
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/

const coolFunction = (num) => {
    half = halfNumber(num);
    square = squareNumber(half);
    area = areaOfCircle(square);
    percent = percentOf(area, square);
    console.log(`${half} half, ${square} square, ${area} area, and ${percent} percent`);
    return {half, square, area, percent}
}
