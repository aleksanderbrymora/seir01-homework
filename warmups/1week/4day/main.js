// const sarge = function(message) {
//   if (message[message.length - 1] === '?') {
//     return 'Sure.'
//   }
//   if (message === '') {
//     return 'Fine. Be that way!'
//   }
//   if (message.toUpperCase() === message) {
//     return 'Woah, chill out!'
//   }
//   return 'Whatever.'
// }

const sarge = function(message) {
  if (message.endsWith('?')) {
    return 'Sure.'
  } else if (message === '') {
    return 'Fine. Be that way!'
  } else if (message.toUpperCase() === message) {
    return 'Woah, chill out!'
  } else {
    return 'Whatever.'
  }
}

console.log(sarge('Whats the meaning of life?'))
console.log(sarge('GIVE ME ALL OF YOUR MONEY'))
console.log(sarge('GIVE ME ALL OF YOUR MONEY?'))
console.log(sarge(''))
console.log(sarge('Whatever.'))
