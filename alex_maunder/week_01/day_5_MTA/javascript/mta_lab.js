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
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

const nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const sixLine = ['Grand Line', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
const lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];



const planTrip = function (startLine, startStation, endLine, endStation) {
  let switchLines = false;
  // If you have to change lines
  if (!(startLine === endLine)) {
    changeUnionSq (startLine, startStation, endLine, endStation);
    switchLines = true;
  };

  // Set up start index
  let indexStart = null;
  if (startLine === 'N') {
    indexStart += nLine.indexOf(startStation);
    indexStart += 1
  } else if (startLine === '6') {
    indexStart += sixLine.indexOf(startStation);
    indexStart += 1
  } else {
    indexStart += lLine.indexOf(startStation);
    indexStart += 1
  };

  // Set up end index
  let indexEnd = null
  if (endLine === 'N') {
    indexEnd += nLine.indexOf(endStation);
    indexEnd += 1
  } else if (endLine === '6') {
    indexEnd += sixLine.indexOf(endStation);
    indexEnd += 1
  } else {
    indexEnd += lLine.indexOf(endStation);
    indexEnd += 1
  };

  // Amount of stops
  let amountOfStops = indexStart - indexEnd;

  // going from left to right (negative val) OR if right to left (positive val)
  let direction = ''
  if (Math.sign(amountOfStops) === -1) {
      direction = 'negative' // right to left
  } else {
      direction = 'positive' // left to right
  };

  // Stations you will go through
  let stations = []
  if (startLine === 'N') {
    if (direction === 'negative') {
      let x = nLine.slice(indexStart, indexEnd)
      stations.push(x)
    } else {
      let x = nLine.slice(indexEnd, indexStart)
      x.reverse() // reverses direction of stations
      stations.push(x)
    }
  } else if (startLine === '6') {
     if (direction === 'negative') {
        let x = sixLine.slice(indexStart, indexEnd)
        stations.push(x)
      } else {
        let x = sixLine.slice(indexStart, indexEnd)
        x.reverse()
        stations.push(x)
      }
  } else {
    if (direction === 'negative') {
      let x = lLine.slice(indexStart, indexEnd)
      stations.push(x)
    } else {
      let x = lLine.slice(indexStart, indexEnd)
      x.reverse()
      stations.push(x)
    }
  };

  // Output strings
  let finalOutput = '';
  // // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
  let stops1 = `You must travel through the following stop on the ${startLine} line:\n${stations.join(", ")}.`;
  finalOutput += stops1;
  // // "Change at Union Square."
  if (switchLines === true) {
    finalOutput += `\nChange at Union Square`
  };
  // // "Your journey continues through the following stops: 23rd, 28th, 33rd."
  if (switchLines === true) {
    finalOutput += `\nYour journey continues through the following stops:\n` // add stops after switch
  };
  // // "7 stops in total."
  if (switchLines === false) {
    let stopAmount = `\n${Math.abs(amountOfStops)} stops in total.`;
    finalOutput += stopAmount;
  };

  return  finalOutput

};

const changeUnionSq = function (startLine, startStation, endLine, endStation) {

  let startPoint = []
  let endIndex = []

  // find index of Union Square for each line
  if (endLine === 'N') {
    startPoint = nLine.indexOf('Union Square')
    startPoint += 1
    endIndex = nLine.indexOf(endStation)
  }
  if (endLine === '6') {
    startPoint = sixLine.indexOf('Union Square')
    startPoint += 1
    endIndex = sixLine.indexOf(endStation)
  }
  if (endLine === 'L') {
    startPoint = lLine.indexOf('Union Square')
    startPoint += 1
    endIndex = lLine.indexOf(endStation)
  };

  let amountOfStops = startPoint - endIndex;

  // going from left to right (negative val) OR if right to left (positive val)
  let direction = ''
  if (Math.sign(amountOfStops) === -1) {
      direction = 'negative' // right to left
  } else {
      direction = 'positive' // left to right
  };

  // Stations you will go through
  let stations = []
  if (endLine === 'N') {
    if (direction === 'negative') {
      let x = nLine.slice(startPoint, endIndex)
      stations.push(x)
    } else {
      let x = nLine.slice(endIndex, startPoint)
      x.reverse() // reverses direction of stations
      stations.push(x)
    }
  } else if (endLine === '6') {
     if (direction === 'negative') {
        let x = sixLine.slice(startPoint, endIndex)
        stations.push(x)
      } else {
        let x = sixLine.slice(endIndex, startPoint)
        x.reverse()
        stations.push(x)
      }
  } else {
    if (direction === 'negative') {
      let x = lLine.slice(startPoint, endIndex)
      stations.push(x)
    } else {
      let x = lLine.slice(endIndex, startPoint)
      x.reverse()
      stations.push(x)
    }
  };

  outputInfoSwitch(amountOfStops, stations)

};


let outputInfoSwitch = function (amountOfStops, stations) {
  console.log(amountOfStops)
  console.log(stations)
}
