// Dr Evil


const drEvil = function(amount) {

  if (amount < 1000000) {
    return amount + "dollars";
  } else {
    return `${ amount } dollars (pinky)`;
  }
}
console.log(drEvil(1000));


const mixUp = function(strOne, strTwo) {
  sliceOne = strOne.slice(1);
  sliceTwo = strTwo.slice(1);
  firstLetterOne = strOne[0];
  firstLetterTwo = strTwo[0];
  outPutOne = firstLetterTwo + sliceOne;
  outPutTwo = firstLetterOne + sliceTwo;
  console.log(outPutTwo);
  console.log(outPutOne);
  return outPutOne, outPutTwo;
}
mixUp("cheese", "pizza");




const fixStart = function(str) {
  let firstLetter = str[0];
  let otherLetters = "";
  let outPut = firstLetter + otherLetters;
  for (i = 1; i < str.length; i++) {
    if (str[i] === firstLetter) {
      otherLetters = otherLetters + "*";
    } else {
      otherLetters = otherLetters + str[i];
    }
  }
  console.log(firstLetter + otherLetters);
  return firstLetter + otherLetters;

}
fixStart("test");


const verbing = function(stringyBoi){
    if (stringyBoi.length >= 3) {
      if (stringyBoi.slice(stringyBoi.length - 3) === "ing"){
        console.log(stringyBoi + "ly");
        return stringyBoi + "ly";
      } else {
        console.log(stringyBoi + "ing");
        return stringyBoi + "ing";
      }
    } else {
      console.log(stringyBoi);
      return stringyBoi;
  }
}
stringyBoi("Testing");


const notBad = function(behd){
  if (behd.indexOf('not') > -1 && behd.indexOf('bad') > -1) {
    const firstCut = behd.indexOf('not');
    const secondCut = behd.indexOf('bad') + 3;
    const halfOne = behd.slice(0, firstCut);
    const halfTwo = behd.slice(behd.indexOf('bad') + 3, behd.length + 1);
    const sentence = halfOne + "good" + halfTwo;
    console.log(sentence);
  } else {
    console.log(behd);
  }

}
notBad("Is not bad da?");
