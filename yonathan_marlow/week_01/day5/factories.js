// // const n = ['times square', '34th', '28th', '23rd', 'union square', '8th']; /// this code is my initial one for the first line + input
//     userSource = window.prompt("Enter your source station").toLowerCase()
//     userDestination = window.prompt("Your end station please?").toLowerCase()
//     userStops = Math.abs(n.indexOf(userSource) - n.indexOf(userDestination));
//     userSourceIndex = n.indexOf(userSource)
//     userDestinationIndex = n.indexOf(userDestination)
//     if (userSource = userDestination){
//       alert(`You've entered the same stop. PLease try again!`)
//     window.prompt("Enter your source station")}
//
// const journey = function (){
//   let stopsTravelled = 'You will have to travel through ';
//     // if (userSource = userDestination){
//     //     return `you've entered the same stop. Please try again!`
//     // }
//     if (userSourceIndex < userDestinationIndex) { //if going to the right
//     for (i = userSourceIndex+1; i < userDestinationIndex; i++) {
//     stopsTravelled = stopsTravelled+ n[i] +', '
//     }
//     stopsTravelled = stopsTravelled + ' and '+userDestination
//   } else { //if going to the left.
//     for (i = userSourceIndex; i > userDestinationIndex; i--) {
//       console.log(n[i]);
//     }
//   }
//   return stopsTravelled
// }
// //
// console.log(userStops);
// console.log(journey());
// //
//
// // // with objects: . I made an object for each line that contained an array with the stops --- this is within any input.
// const n = ['time square', '34th', '28th', '23rd', 'union square', '8th']
// const lineOne = function (line, start, stop) {
//   let stopString = 'You will have to travel through'
//   const startStation = line.indexOf(start)
//   const stopStation = line.indexOf(stop)
//   // takes the starting station and checks to see if its less than the stopStation
//   if (startStation < stopStation) {``
//     for (let i = startStation; i < stopStation; i++) {
//       stopString = `${stopString} ${n[i]}`
//     }
//     stopString = `${stopString} to get to ${stop}`
//   } else {
//     // the same as above its checking to see if the startStation is greater than the stopStation
//     for (let i = startStation; i > stopStation; i--) {
//       stopString = `${stopString} ${n[i]}`
//     }
//     stopString = `${stopString} to get to ${stop}`
//   }
//   return stopString
// }
//
// console.log(lineOne(n, 'time square', '8th'));
// console.log(lineOne(n, 'time square', '8th'));
// console.log(lineOne(n, 'union square', '34th'));


const allLines  = { // this is the attempt at doing the three lines.
  lineN: ['time square', '34th', '28th', '23rd', 'union square', '8th'],
  lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
  line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

const allStops = function (lineOn, onStation, lineOff, offStation) {

  const indexOn = allLines[lineOn].indexOf(onStation);
  const indexOf = allLines[lineOff].indexOf(offStation);
  const usIndexOn = allLines[lineOn].indexOf('union square');
  const usIndexOff = allLines[lineOff].indexOf('union square')

  let totalStops = [];
  let stops1 [];
  let stops1 [];

  let numOfStops = 0;
  let numOfStops1 = 0;
  let numOfStops2 = 0;

  //if on the same line:

  if (lineOn === lineOff && indexOn < indexOff) {
    for (let i=indexOn; i <= indexOff; i++) {
      totalStops.push(lineDetails[lineOn][i]);
      numOfStops = indexOff - indexOn + 1;
    }
  }

}

      // figure out what station the person came on the train and what line.
      // what station he is heading to.
        //if customer is heading to a none-existing station - >
          //go to union square.
          //in union square - find which line has the station you're after.
          //once found - head to that station.


};
console.log(lineOne(n, 'time square', '8th'));
console.log(lineOne(n, 'time square', '8th'));
console.log(lineOne(n, 'union square', '34th'));
