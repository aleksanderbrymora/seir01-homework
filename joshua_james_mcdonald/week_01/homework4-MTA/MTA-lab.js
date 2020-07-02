// create subway lines
/**
 * Takes a name of a line, and an array of the stations to build a new train line
 * @param {string} name 
 * @param {array} stations 
 */
const newLine = function (name, stations) {
    const line = {};
    line.name = name;
    line.stations = stations;
    return (line);
}

const NLine = newLine('N', ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']);
const LLine = newLine('L', ['8th', '6th', 'Union Square', '3rd', '1st']);
const sixLine = newLine('6', ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']);

const getIndex = function (line, stop) {
    let index = line.stations.indexOf(stop);
    if (index != -1) {
        return (index);
    }
}
/**
 *  * takes two stations and returns the names of the stops between them in order
 * must be on same line
 * @param {object} line 
 * @param {string} stop1 
 * @param {string} stop2 
 */
const getStops = function (line, stop1, stop2) {
    if (stop1 !== stop2) {
        let stops = [];
        let stop1Index = getIndex(line, stop1);
        let stop2Index = getIndex(line, stop2);
        let stepper = (stop1Index < stop2Index) ? 1 : -1; // does offset and iterating i in 1 step
        for (i = stop1Index + stepper; i != stop2Index + stepper; i += stepper) {
            stops.push(line.stations[i]);
        }
        return (stops);
    } else {
        return ("ERROR: Already at destination");
    }
}

// calculate the trip
const planTrip = function (line1RAW, stop1, line2RAW, stop2) {
    console.log('\n');
    const trip = {};
    trip.line1Stops = [];
    trip.changes = false;
    trip.line2Stops = [];

    let nameDict = { // allows user to input a string as line name, including '6'. avoids name issues
        '6': sixLine,
        'N': NLine,
        'L': LLine
    };

    let line1 = nameDict[line1RAW];
    let line2 = nameDict[line2RAW];

    // validation
    // check if lines exist
    if (!(line1 && line2)) {
        console.log("ERROR: Line(s) do not exist"); // TODO should change this to some sort of better throw error statement
        return;
    } else if (!line1.stations.includes(stop1) || !line2.stations.includes(stop2)) {
        console.log("ERROR: Station(s) do not exist");
        return;
    } else if (((line1 == line2) && (stop1 == stop2)) || ((stop1 == "Union Square")&&(stop2 == "Union Square"))) {
        console.log("ERROR: Already at destination");
        return;
    }
    // check for unin square start/end conditions
    if (stop1 === "Union Square"){
        line1 = line2;
    }
    if (stop2 ==="Union Square"){
        line2 = line1;
    }

    // check if stops are on lines

    if (line1.name === line2.name) {
        // get index's of stations to determine forward or backward traverse for for loop

        trip.line1Stops = getStops(line1, stop1, stop2);
    } else { // not on the same line
        //check if starting station is union square
        //if us, cgange = false, station1= line2 us, else

            trip.line1Stops = getStops(line1, stop1, "Union Square");
            trip.line2Stops = getStops(line2, "Union Square", stop2);
            trip.changes = true;
        
    }

    console.log(`You must travel through the following stops on the ${line1.name} line: ${trip.line1Stops.join(", ")}`) // could by more DRY to put this in a function
    if (trip.changes) {
        console.log("Change at Union Square");
        console.log(`You must travel through the following stops on the ${line2.name} line: ${trip.line2Stops.join(", ")}`)
    }
    console.log(`${trip.line1Stops.length + trip.line2Stops.length } stops in total.`)
    
}


// testing
planTrip('N', "Times Square", 'L', "8th"); // Good case
planTrip('Gold Coast Line', "Times Square", 'L', "8th"); // Line DNE
planTrip('N', "South Brisbane Station", 'L', "8th"); // station DNE
planTrip('N', "Times Square", 'N', "Times Square"); // already at destination
planTrip('N', "23rd", '6', "23rd"); // Duplicate station name, different lines
planTrip('N', "8th", 'L', "8th"); // Duplicate station name, different lines
planTrip('N', "Union Square", '6', "Grand Central"); // Union square to other
planTrip('N', "Times Square", '6', "Union Square"); // Other to union square
planTrip('N', "Union Square", '6', "Union Square"); // Union square to union square