const cesar = function (message, key) {
  message = message.toLowerCase()
  let out = '';

  for (let i = 0; i < message.length; i++) {
    if (/[a-z]/.test(message[i])) {
      let ascii = message.charCodeAt(i)

      if (ascii + key > 'z'.charCodeAt(0)) {
        ascii -= 26;
      }

      out += String.fromCharCode(ascii + key)
    } else {
      out += message[i]
    }
  }

  return out
}

console.log(cesar('Omg this is so amazing!@($%{})', 1));
