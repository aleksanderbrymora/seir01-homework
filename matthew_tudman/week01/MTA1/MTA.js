
//
// const lineHorizon = { {name: "Station 1", line: "Horizon" }, {name: "Station 2", line: "Horizon"},
// { name: "Union Square", line: "Horizon"}, {name: "Station 4",line: "Horizon"}, {name: "Station 5", line: "Horizon"},
// }
// const lineVertica = { {name: "Station 1", line: "Vertica" }, {name: "Station 2", line: "Vertica"},
// { name: "Union Square", line: "Vertica"}, {name: "Station 4",line: "Vertica"}, {name: "Station 5", line: "Vertica"},
// }
// const lineDiagon = { {name: "Station 1", line: "Diagon" }, {name: "Station 2", line: "Diagon"},
// { name: "Union Square", line: "Diagon"}, {name: "Station 4",line: "Diagon"}, {name: "Station 5", line: "Diagon"},
// }

const network = [];
let stopCount = 0;


const travel = function(on, lineOn, off, lineOff) {
  //console.log("Station " + [on] + " " + lineOn); // Always console.logs the station you get on at.
  if (lineOn === lineOff) {
    oneLineTravel(on, off, lineOn);
  } else {
    for (i = 0; i < network.length; i++) {
      if (network[i][0].line === lineOn) { // goes through and matches which line you are on.
    // countdown from station to unionsquare
        if (on > 3) {
          for (x = 0; x < difference(on, 3); x++) {
            console.log(network[i][(on - x) - 1]);
            stopCount += 1;
          }
        } else if (on < 3) {
          for (x = 0; x < difference(on, 3); x++) {
            console.log(network[i][(on + x) - 1]);
            stopCount += 1;

          }
        }
        console.log(network[i][2]) // unionsquare
        stopCount += 1;
      }
        }
      for (i = 0; i < network.length; i++) {
        if (network[i][0].line === lineOff) {
          if (off < 3) {
            for (x = 0; x < difference(off, 3); x++) {
              console.log(network[i][off - x]);
              stopCount += 1;
            }
          } else if (off > 3) {
            for (x = 0; x < difference(off, 3); x++) {
              console.log(network[i][(off + x) - 2]);
              stopCount += 1;
            }
          }
        }
      }
    }
    console.log(`You have made ${stopCount} stops`);
    stopCount = 0;
  }


const difference = function(numOne, numTwo) {
  if (numOne > numTwo) {
    return numOne - numTwo;
  } else {
    return numTwo - numOne;
  }
};



const lineFactory = function(input, num) {
  network.push([]);
  for (i = 1; i < 6; i++) {
    if (i === 3) {
      network[num].push({name: "Union Square", line: input}, );
    } else {
      network[num].push({ name: "Station " + i, line: input},);
    }
  }
};

lineFactory("Line A", 0);
lineFactory("Line B", 1);
lineFactory("Line C", 2);
lineFactory("Line D", 3);
//


const oneLineTravel = function(on, off, lineInput) {
let numStops = difference(on, off);
  for (i = 0; i < (numStops + 1); i++) {

// when the journey gets to union square ie. station 3 on any line we then need to start this if sequence again.
    if (on > off) {
      console.log(`Station ${((on - i))} ${lineInput}`);
      stopCount += 1;
    } else {
      console.log(`Station ${(on + i) + " " +  lineInput}`);
      stopCount += 1;
    }
  }
}




//
// const oneLineTravel = function(on, lineOn, off, lineOff) {
//   let numStops = difference(on, off); //  the number of stops
//   console.log(`The Number of stops is `);
//   console.log(network[on - 1] + lineOn); // Always console.logs the station you get on at.
//   for (i = 0; i < numStops; i++) {
// // when the journey gets to union square ie. station 3 on any line we then need to start this if sequence again.
//
//     if (on > off) {
//       console.log(lineTemplate[(on - i) - 2]);
//     } else {
//       console.log(lineTemplate[on + i]);
//     }
//   }
// }
//
