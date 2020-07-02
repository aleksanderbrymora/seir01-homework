// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."


const lineDetails = {
  lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
  line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}


const planTrip = function (lineOn, stopOn, lineOff, stopOff) {
  const onIndex = lineDetails[lineOn].indexOf(stopOn);
  const offIndex = lineDetails[lineOff].indexOf(stopOff);
  const usIndex1 = lineDetails[lineOn].indexOf('Union Square');
  const usIndex2 = lineDetails[lineOff].indexOf('Union Square');

  let totalStops = [];
  let stops1 = [];
  let stops2 = [];

  let numOfStops = 0;
  let numOfStops1 = 0;
  let numOfStops2 =0;

  //same line, forwards
  if (lineOn === lineOff && onIndex < offIndex) {
    for (let i=onIndex; i<=offIndex; i++) {
      totalStops.push(lineDetails[lineOn][i]);
      numOfStops = offIndex - onIndex + 1;
    }
  } else if (lineOn === lineOff && onIndex > offIndex) { //same line, backwards
    for (let i=onIndex; i>=offIndex; i--) {
      totalStops.push(lineDetails[lineOn][i]);
    } numOfStops = onIndex - offIndex + 1;
  } else {
    if (onIndex < usIndex1) { // 1st line, forwards
      for (let i=onIndex; i<=usIndex1; i++) {
        stops1.push(lineDetails[lineOn][i]);
      }
    }  if (onIndex > usIndex1) { //1st line, backwards
      for (let i=onIndex; i>=usIndex1; i--) {
        stops1.push(lineDetails[lineOn][i]);
      }
    } if (usIndex2 < offIndex) { //2nd line, forwards
      for (let i=usIndex2+1; i<offIndex+1; i++) {
        stops2.push(lineDetails[lineOff][i]);
      }
    } if (usIndex2 > offIndex)  { //2nd line, backwards
      for (let i=usIndex2-1; i>=offIndex; i--) {
        stops2.push(lineDetails[lineOff][i]);
      }
    }
  }
  numOfStops1 = Math.abs(usIndex1 - onIndex);
  numOfStops2 = Math.abs(usIndex2 - offIndex);
  if (totalStops.length === 0) {
    totalStops = stops1.concat(stops2);
    numOfStops = numOfStops1 + numOfStops2 +1;
  }
  const message = `Your journey continues through the following stops: ${ totalStops.join(', ') }.\n${ numOfStops } stops in total.`;

  return message;
};




console.log(planTrip('lineN', '8th', 'lineN', '34th'));
console.log(planTrip('lineN', '34th', 'lineN', '8th'));
console.log(planTrip('lineL', '3rd', 'lineN', '8th'));
console.log(planTrip('lineN', '34th', 'line6', 'Grand Central'));
