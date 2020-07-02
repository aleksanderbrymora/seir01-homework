//if/esle statements with functions nested inside.
//objects with individual arrays so you can if
//if starting line and ending line are the same then could use zoni code.if else the starting and ending line do equal.

//Maybe triangle solutions will helo

const n = ['time square', '34th', '28th', '23rd', 'union square', '8th']
const l = ['8th', '6th', 'union square', '3rd', '1st']
const six = ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']


  userSource = '8th'//window.prompt("Enter your source station").toLowerCase()
  userDestination = 'time square' //window.prompt("Your end station please?").toLowerCase()
  userStops = Math.abs(n.indexOf(userSource) - n.indexOf(userDestination));
  userSourceIndex = n.indexOf(userSource)
  userDestinationIndex = n.indexOf(userDestination)
  // if (userSource = userDestination){
  //   alert(`You've entered the same stop. PLease try again!`)
  // window.prompt("Enter your source station")}
  console.log(userSource)
  console.log(userDestination)

const journey = function (){
  let stopsTravelled = userSource + ', ';
  if (userSourceIndex < userDestinationIndex) {
    for (i = 1; i <= userDestinationIndex; i++) { //
  stopsTravelled = stopsTravelled+ n[i] +', ' //+ userDestination
 }

return stopsTravelled
//   stopsTravelled = stopsTravelled + ' and '+userDestination
} else if (i === userSourceIndex[4]) {
  return stopsTravelled
} //else //if going to the left.
    // for (i = 1; i >= userDestinationIndex; i--) {
      // console.log(n[i]);
    }

  console.log(userStops);
  console.log(journey());
