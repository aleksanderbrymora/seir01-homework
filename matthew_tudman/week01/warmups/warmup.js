const plingPlong = function(number) {
  let outPut = "";
      if (number % 3 === 0) {
        outPut += "Pling";
      }
      if (number % 5 === 0) {
        outPut += "Plang";
      }
      if (number % 7 === 0) {
        outPut += "Plong";
      }
     if (outPut === "") {
      outPut += number;
      }
  console.log(outPut);
  return(outPut);
}
plingPlong(3);
