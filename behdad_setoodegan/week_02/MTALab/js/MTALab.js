//Global variable
const lines ={
  lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
  line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
let distance; 

const planTrip = function (startLane, startSatation, destLane, destStation){
  startLane = "line" + startLane;
  destLane = "line" + destLane;
  distance = 0;

  //Evaluating the input.
  if(lines[startLane] === undefined || lines[destLane] === undefined) {
    console.warn("Wrong Line name.");
    return;
  }
  if(lines[startLane].indexOf(startSatation) < 0 || lines[destLane].indexOf(destStation) < 0) {
    console.warn("Wrong station name.");
    return;
  }

  //Travel in the same line.
  if(startLane === destLane){
    travel (startLane, startSatation, destStation);
    console.log(`${distance} stops in total.`);
  } else { //Travel from one line to other line.
    travel (startLane, startSatation, "Union Square");
    console.log("Change at Union Square.");
    travel (destLane, "Union Square", destStation);
    console.log(`${distance} stops in total.`);
  }
}

//Traveling function.
const travel = function (lane, startSatation, destStation){
  let startIndex = lines[lane].indexOf(startSatation);
  let stopIndex = lines[lane].indexOf(destStation);
  let txt = `You must travel through the following stops on the ${lane} line: `
  if (startIndex < stopIndex){
    while (startIndex < stopIndex){
      startIndex++;
      txt = txt + lines[lane][startIndex] + `, `;
    }
    console.log(txt);
  }
  else {
    while (stopIndex < startIndex){
      startIndex--;
      txt = txt + lines[lane][startIndex] + `, `;
    }
    console.log(txt);
  }
  distance = distance + Math.abs(lines[lane].indexOf(startSatation) - lines[lane].indexOf(destStation));
}

planTrip('N', '23rd', 'N', 'Times Square');
planTrip('N', 'Times Square', '6', '33rd');
