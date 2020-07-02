// # Exercises: for loops
//
// ## The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//
for (let i = 0; i < 21; i++){
  if (i % 2 === 0){
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
// ## Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
//
for (let i = 0; i < 11; i++){
  for (let j = 0; j < 11; j++){
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
// ## The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const assignGrade = function(num){
  if (num > 100 || num < 0){
    console.log("What world do you live on?")
  } else if (num >= 90){
    return "A";
  } else if (num >= 80){
    return "B";
  } else if (num >= 70){
    return "C";
  } else if (num >= 60){
    return "D";
  } else {console.log("You got an F");
    return "F";
  }
};

for (let grade = 60; grade < 101; grade ++){
  assignGrade(grade);
  console.log(`For ${grade} you got a ${assignGrade(grade)}.`)
}

//
// ## Exercises: Arrays
//
// # Your top choices
//
// - Create an array to hold your top choices (colors, presidents, whatever).
// - For each choice, log to the screen a string like: "My #1 choice is blue."
// - Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
//
//
//
let colorChoices = ["blue", "white", "cardinal", "gold", "mauve", "teal"];

for (let i = 0; i < colorChoices.length; i++){
  if (i === 0){
    console.log(`My ${i + 1}st choice is ${colorChoices[i]}`);
  } else if (i === 1){
    console.log(`My ${i + 1}nd choice is ${colorChoices[i]}`);
  } else if (i === 2){
    console.log(`My ${i + 1}rd choice is ${colorChoices[i]}`);
  } else {
    console.log(`My ${i +1}th choice is ${colorChoices[i]}`);}
}
