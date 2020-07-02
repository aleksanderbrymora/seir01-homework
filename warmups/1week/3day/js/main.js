const raindrop = function(num) {
  let output = '';

  if (num % 3 === 0) {
    output = output + 'Pling';
  }
  if (num % 5 === 0) {
    output += 'Plang';
  }
  if (num % 7 === 0) {
    output += 'Plong';
  }

  if (output === '') {
    return num.toString();
  } else {
    return output;
  }
}

console.log(raindrop(34))
console.log(raindrop(3 * 5 * 7))
