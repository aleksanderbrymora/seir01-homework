console.log('hello world');

const raindrop = function(number) {
  let output = '';

  if (number % 3 === 0) {
    output = output + 'Pling';
  }

  if (number % 5 === 0) {
    output += 'Plang';
  }

  if (number % 7 === 0) {
    output += 'Plong';
  }

  if (output === ''){
    return number.toString();
  } else {
    return output;
  }
}



console.log(raindrop(34));
console.log(raindrop(3 * 5 * 7));
