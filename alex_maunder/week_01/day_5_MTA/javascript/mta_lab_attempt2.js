
const lines = {
  nLine: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  sixLine: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  lLine: ['8th', '6th', 'Union Square', '3rd', '1st']
};

let totalStops = null

const firstTrip = function (startLine, startStation, endLine, endStation) {
  // set startLine to object key
  let objStartLine = '';
  if (startLine === 'N') {
      objStartLine = 'nLine';
  } else if (startLine === '6') {
    objStartLine = 'sixLine';
  } else {
    objStartLine = 'lLine';
  }

  // set endLine to object key
  let objEndLine = '';
  if (endLine === 'N') {
      objEndLine = 'nLine';
  } else if (endLine === '6') {
    objEndLine = 'sixLine';
  } else {
    objEndLine = 'lLine';
  }

  // if user needs to change line
  if (startLine !== endLine) {
    let indexUnion = lines[objStartLine].indexOf('Union Square'); //gets index of Union Square for selected line
    let startIndex = lines[objStartLine].indexOf(startStation);

    let numStops = startIndex - indexUnion // number of stops

    totalStops += Math.abs(numStops) // convert number of stops to positive integer

    firstTripStationList = []
    if (Math.sign(numStops) === -1) { // if negative, left to right. if positive, right to left
      let x = lines[objStartLine].slice(startIndex, indexUnion)
      firstTripStationList.push(x)
    } else {
      let x = lines[objStartLine].slice(indexUnion, startIndex)
      x.reverse() // reverses string for going from right to left stations
      firstTripStationList.push(x)
    };

    console.log(`You must travel through the following stops on the ${startLine} line:\n${firstTripStationList}`)

    let indexUnionEnd = lines[objEndLine].indexOf('Union Square');  // index of Union Square for the next train line
    secondTrip(indexUnionEnd, endStation, objEndLine, endLine);
  };

  // from here on, don't need to change lines, so calculate as though single line
  if (startLine === endLine) {
    let startIndex = lines[objStartLine].indexOf(startStation);
    let endIndex = lines[objEndLine].indexOf(endStation);

    let numStops = startIndex - endIndex

    totalStops += Math.abs(numStops)

    firstTripStationList = []
    if (Math.sign(numStops) === -1) { // if negative, left to right. if positive, right to left
      let x = lines[objEndLine].slice((startIndex + 1), (endIndex + 1))
      firstTripStationList.push(x)
    } else {
      let x = lines[objEndLine].slice(endIndex, startIndex)
      x.reverse()
      firstTripStationList.push(x)
    };
    console.log(`You must travel through the following stops on the ${startLine} line:\n${firstTripStationList}`);
    console.log(`${totalStops} stops in total.`);
    refreshCount();
  };

};

const secondTrip = function (index, endStation, objEndLine, endLine) {
  secondTripStationList = []
  endStationIndex = lines[objEndLine].indexOf(endStation)
  secondTripStopCount = (index - endStationIndex);
  if (Math.sign(secondTripStopCount) === -1) { // if negative, left to right. if positive, right to left
    let x = lines[objEndLine].slice((index + 1), (endStationIndex + 1))
    secondTripStationList.push(x)
  } else {
    let x = lines[objEndLine].slice(endStationIndex, index)
    x.reverse()
    secondTripStationList.push(x)
  };
  totalStops += Math.abs(secondTripStopCount)
  console.log(`Change at Union Square.`)
  console.log(`You must travel through the following stops on the ${endLine} line:\n${secondTripStationList}`)

  finalStopCount();
};

const finalStopCount = function () { // console logs the final stop count
  console.log(`${totalStops} stops in total.`);
  refreshCount();
};

const refreshCount = function () { // refreshes the stop count
  totalStops = null
};
