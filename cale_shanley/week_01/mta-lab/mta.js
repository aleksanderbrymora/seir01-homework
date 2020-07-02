// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const lines = {
  N: ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

const findLine = function (startLine, startStation, stopLine, stopStation) {
  const startIndex = lines[startLine].indexOf(startStation)
  const stopIndex = lines[stopLine].indexOf(stopStation)
  const isChanging = startLine !== stopLine

  // If going forwards
  if (startIndex < stopIndex) {
    const line = lines[startLine]

    // Get how many stops we need to travel.
    const firstLineDistance = isChanging
      ? lines[startLine].indexOf('Union Square')
      : stopIndex

    // Travel over each stop on the first line.
    const stops = []
    for (let i = startIndex; i < firstLineDistance; i++) {
      stops.push(line[i])
    }
    console.log(stops.join(', '))
    // If the stopLine is === Union Square
    if (isChanging) {
      const line = lines[stopLine]
      console.log('Change at Union Square.')

      // Get the remaining stops for the second line.
      const secondStartIndex = line.indexOf('Union Square') + 1

      // Travel over each stop on the second line.
      const stops2 = []
      for (let i = secondStartIndex; i <= stopIndex; i++) {
        stops2.push(line[i])
      }
      console.log(stops2.join(', '))
    }
  } else {
    const line = lines[startLine]

    // Get how many stops we need to travel.
    const firstLineDistance = isChanging
      ? lines[startLine].indexOf('Union Square')
      : stopIndex

    // Travel over each stop on the first line.
    for (let i = startIndex; i > firstLineDistance; i--) {
      console.log(line[i])
    }

    if (isChanging) {
      const line = lines[stopLine]
      console.log('Change at Union Square.')

      // Get the remaining stops for the second line.
      const secondStartIndex = line.indexOf('Union Square') - 1

      // Travel over each stop on the second line.
      for (let i = secondStartIndex; i >= stopIndex; i--) {
        console.log(line[i])
      }
    }
  }
}

findLine('N', 'Time Square', 'L', '1st')
