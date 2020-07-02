
const drEvil = function (amount) {
  if (amount == 1000000) {
    console.log(`DrEvil(${amount}): ${amount} dollars (pinky)`);
  } else {
    console.log(`DrEvil(${amount}): ${amount} dollars (pinky)`);
  }
}
drEvil(100);
drEvil(1000000);

const mixUp = function (txt1, txt2) {
  console.log(`mixUp (${txt1}, ${txt2}): ${txt2.slice(0, 2) + txt1.slice(2)} ${txt1.slice(0, 2)+ txt2.slice(2)}`);
  //return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
}
mixUp("hot","dog");
mixUp("ham","burger");

const fixStart = function (txt){
  const char = txt.charAt(0);
  // let lastTxt;
  // let i = 1
  // while(i<txt.length){
  //   if(txt.charAt(i) == char){
  //     txt.charAt(i).replace("*");
  //   }
  //   i++;
  //   lastTxt = txt;
  // }

  const resault = char + txt.slice(1).replace(new RegExp(char, 'g'), '*');
  console.log(resault);
}

fixStart("teasttsxt");



const verbing = function (word) {
  let txt;
  if ( word.length < 3 ){
    txt = word;
  };
  if ( word.slice(-3) == 'ing' ) {
    txt = word + 'ly';
  } else {
    txt = word + 'ing';
  }
  console.log(txt);
  return txt;
}

verbing("texting");


const notBad = function (){
  
}
