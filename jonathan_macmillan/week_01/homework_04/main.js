// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//

// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


const nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "Astor Place"];
const lLine = ["8th", "6th", "Union Square", "3rd", "1st"];
const sixLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

const result = {};

const planTripN = function(startStop, endStop = "Union Square"){
  let travelledArray = [];
  for (let i = 0; i < nLine.length; i++){
    let indexStart = nLine.indexOf(startStop); //this is a number, the index of the entry station
    let indexEnd = nLine.indexOf(endStop);    // this is a number, the index of the exit station
    result.NStops = Math.abs(indexStart - indexEnd); // this is the total number of stops
    if (indexStart < indexEnd){
      travelledArray = nLine.slice(indexStart + 1, indexEnd + 1)
      result.NPath = travelledArray.join(", ");
      return result;
    } else {
      travelledArray = nLine.slice(indexEnd, indexStart);
      travelledArray = travelledArray.reverse();  //this is because they may travel the opposite direction
      result.NPath = travelledArray.join(", ");   // this is saving the path they travel as a string
      return result;
    }
  }
}
// planTripN("Times Square", "Astor Place")
// console.log(result)

const planTripL = function(startStop, endStop = "Union Square"){
  let travelledArray = [];
  for (let i = 0; i < lLine.length; i++){
    let indexStart = lLine.indexOf(startStop); //this is a number
    let indexEnd = lLine.indexOf(endStop);
    result.LStops = Math.abs(indexStart - indexEnd);
    if (indexStart < indexEnd){
      travelledArray = lLine.slice(indexStart + 1, indexEnd + 1)
      result.LPath = travelledArray.join(", ");
      return result;
    } else {
      travelledArray = lLine.slice(indexEnd, indexStart);
      travelledArray = travelledArray.reverse();
      result.LPath = travelledArray.join(", ");
      return result;
    }
  }
}
// planTripL("1st", "8th")
// console.log(result)


const planTripSix = function(startStop, endStop = "Union Square"){
  let travelledArray = [];
  for (let i = 0; i < sixLine.length; i++){
    let indexStart = sixLine.indexOf(startStop); //this is a number
    let indexEnd = sixLine.indexOf(endStop);
    result.SixStops = Math.abs(indexStart - indexEnd);
    if (indexStart < indexEnd){
      travelledArray = sixLine.slice(indexStart + 1, indexEnd + 1)
      result.SixPath = travelledArray.join(", ");
      return result;
    } else {
      travelledArray = sixLine.slice(indexEnd, indexStart);
      travelledArray = travelledArray.reverse();
      result.SixPath = travelledArray.join(", ");
      return result;
    }
  }
}
// planTripSix("Grand Central", "Union Square")
// console.log(result)

let singleTrainMessage = function(trainLine, stopArray, totalStops,){
  if (totalStops < 2){
    return "You sure you shouldn't walk instead?"   //yes, you should.
  }
  return `You must travel through the following stops on the ${trainLine} line: ${stopArray}. ${totalStops} stops in total.`
}

let multipleTrainMessage = function(trainLine, stopArray, stopArray2, totalStops){
  if (stopArray.length === 0){
    return "Just board the train you want, silly!"; // this is for that rare person who boards the wrong train at a transfer station.
  }
  return `You must travel through the following stops on the ${trainLine} line: ${stopArray}. Then change at "Union Square". Your journey continues through the following stops: ${stopArray2}. ${totalStops} stops in total.`
}


const possibleLines = ["N", "L", "6"];

const planTrip = function (startLine, startStop, endLine, endStop){
  const n = possibleLines[0];
  const l = possibleLines[1];
  const six = possibleLines[2];
  if (startLine === endLine){
    if (startLine === n){
      planTripN(startStop, endStop);
      return singleTrainMessage(n, result.NPath, result.NStops)
    } else if (startLine === l){
      planTripL(startStop, endStop);
      return singleTrainMessage(l, result.LPath, result.LStops)
    } else {
      planTripSix(startStop, endStop);
      return singleTrainMessage(six, result.SixPath, result.SixStops)
    }
  }
  if (startLine === n && endLine === l){
    planTripN(startStop);
    planTripL("Union Square", endStop);
    let totalStops = result.NStops + result.LStops;
    return multipleTrainMessage(n, result.NPath, result.LPath, totalStops);
  } else if (startLine === n && endLine === six){
    planTripN(startStop);
    planTripSix("Union Square", endStop);
    let totalStops = result.NStops + result.SixStops;
    return multipleTrainMessage(n, result.NPath, result.SixPath, totalStops);
  }                                           //this covers all scenarios starting on the "N" line.
  if (startLine === l && endLine === n){
    planTripL(startStop);
    planTripN("Union Square", endStop);
    let totalStops = result.LStops + result.NStops;
    return multipleTrainMessage(l, result.LPath, result.NPath, totalStops);
  } else if (startLine === l && endLine === six){
    planTripL(startStop);
    planTripSix("Union Square", endStop);
    let totalStops = result.LStops + result.SixStops;
    return multipleTrainMessage(l, result.LPath, result.SixPath, totalStops);
  }                                           //this covers all scenarios starting on the "L" line.
  if (startLine === six && endLine === n){
    planTripSix(startStop);
    planTripN("Union Square", endStop);
    let totalStops = result.SixStops + result.NStops;
    return multipleTrainMessage(six, result.SixPath, result.NPath, totalStops);
  } else if (startLine === six && endLine === l){
    planTripSix(startStop);
    planTripL("Union Square", endStop);
    let totalStops = result.SixStops + result.LStops;
    return multipleTrainMessage(six, result.SixPath, result.LPath, totalStops);
  }
}



console.log(planTrip("L", "8th", "N", "49th"));

//if (totalStops < 2) change the message for singular stops

//
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
