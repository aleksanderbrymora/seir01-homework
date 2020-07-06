console.log('hello world');

const nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
const the6 = ['Grand Central', '33rd', '28th', '23rd','Union Square', 'Astor Place']

const nLine  = ["time square", "34th", "28th", "23rd", "union square", "8th"];
const lineOne = function(line, start, stop) {
  let stopString = "You will need to go through";
  const startStation = line.indexOf(start);
  const stopStation = line.indexOf(stop);
  if (startStation < stopStation) {
    stopString = stopString + ' ' + start
    for (let i = 0 + 1; i < stopStation; i++) {
      stopString = stopString + ' ' +n[i] + ", ";
    }
    stopString = stopString + " to get to " + stop;
  } else {
    for (let i = startStation; i > stopStation; i--) {
      stopString = stopString + ' ' +n[i-1] + ", "
    }
  }
  return stopString;
};
console.log(lineOne(n, 'time square', '8th'));
console.log(lineOne(n, 'time square', '8th'));
console.log(lineOne(n, 'union square', '34th'));
