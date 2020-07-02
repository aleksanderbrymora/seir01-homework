const isLeapYear = function(year) {
  if (year % 400 === 0) {
    return true
  }
  if (year % 100 === 0) {
    return false
  }
  if (year % 4 === 0) {
    return true
  }
  return false
}

// A bit less of magic
// const isLeapYear = function(year) {
//   if (year % 400 === 0) return true
//   if (year % 100 === 0) return false
//   if (year % 4 === 0) return true
//   return false
// }

// Deep magic
// const isLeapYear = function(year) {
//   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
