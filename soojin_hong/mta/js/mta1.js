const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];

const showStops = function(onLine, onStop, offStop) {
  let stops = '';

  if( lineL.indexOf( onStop ) < lineL.indexOf( offStop ) ) {
    for ( let s = lineL.indexOf( onStop )+1; s <= lineL.indexOf( offStop ); s++ ) {
        stops += lineL[s] + ', '; // where to add split().join(', ')?
    }
    return `You must travel through the following stops on the line ${ onLine }: ${ stops }.`;
  }

  if( lineL.indexOf( onStop ) > lineL.indexOf( offStop ) ) { // 4 > 1
    for ( let t = lineL.indexOf( onStop )-1; t >= lineL.indexOf( offStop ); t-- ) { //321
        stops += lineL[t] + ', ';
    }
  }
  return `You must travel through the following stops on the line ${ onLine }: ${ stops }.`;
}

console.log( showStops("L", "8th", "3rd") );
// "You must travel through the following stops on the L line: 6th, Union Square, 3rd."
console.log( showStops("L", "1st", "6th") );
// "You must travel through the following stops on the L line: 3rd, Union Square, 6th."

//////////////////////////////////////////////////////////////////////////////////////////////
const planTrip = function(onLine, onStop, offLine, offStop) {
  if ( lineL.includes( onStop ) && lineL.includes( offStop ) ) {
    const howManyStops = Math.abs( lineL.indexOf( onStop ) - lineL.indexOf( offStop ) );
    return `${ howManyStops } stops in total.` ;
  }
}
console.log( planTrip("L", "8th", "L", "3rd") ); // "3 stops in total."
console.log( planTrip("L", "1st", "L", "3rd") ); // "1 stops in total."
////////////////////////////////////////////////////////////////////////////////////////////
