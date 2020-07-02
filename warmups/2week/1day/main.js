const originalWords = function(words) {
  const splitWords = words.split(' ');
  const originals = [];

  for (let i = 0; i < splitWords.length; i++) {
    if (!originals.includes(splitWords[i])) {
      originals.push(splitWords[i])
    }
  }

  return originals.join(' ')
}

console.log(originalWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

const bonus = function() {
  const out = 'b' + 'a' + +'a' + 'a';
  console.log(out.toLowerCase())
}

bonus()
