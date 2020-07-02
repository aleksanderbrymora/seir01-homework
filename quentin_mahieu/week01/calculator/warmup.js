// Warmup - Raindrops
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

//The short version

const raindrops = function (num){
  let output1 = '';

  if (num % 3 === 0){
    output1 = output1 + 'Pling'; //(grab previous value and assign Plang)
  }if (num % 5 === 0){
    output1 += 'Plang';  //same as the 1st if but short version (grab previous value and assign Plang)
  }if (num % 7 === 0){
    output1 = output1 + 'Plong';
  }if (output1 === ''){
    return num.toString();
  }else{
    return(output1);
  }
}
console.log(raindrops(34));
console.log(raindrops(1755));
console.log(raindrops(28));




//My first version (long)

//const raindrops = function (num){
//   if (num %3 ===0 & num %5 ===0 & num%7===0){
//   return('PlingPlangPlong');
// } else if (num %5 ===0 & num %7 ===0){
//   return ('PlangPlong');
// } else if (num %3 ===0 & num %5 ===0){
//   return ('PlingPLang');
// } else if (num %3 ===0 & num %7 ===0){
//   return ('PlingPLong');
// } else if (num %3 ===0 ){
//   return (`Pling`);
// } else if (num %5 ===0 ){
//   return ('Plang');
// } else if (num %7 ===0){
//   return (`Plong`);
// } else {
//   return (`"${num}"`);
//   }
// }
//
// console.log(raindrops(28));
// console.log(raindrops(1755));
// console.log(raindrops(34));
