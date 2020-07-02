// # Warmup - Serge Says
//
// Give Sarge appropriate answer by writing a function.
//
// ## Examples
//
// - Serge answers 'Sure.' if you ask him a question.
//
// # He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// # He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// # He answers 'Whatever.' to anything else.
//
// # Create a function that takes an input and returns Serge's response.


const sergeSays = function(string){
  let sergeResponse = "Whatever.";
  if (string.length === 0){
    sergeResponse = "Fine, be that way!";
  } else if (string === string.toUpperCase()){
    sergeResponse = "Woah, chill out!";
  } else if (string[string.length -1] === "?"){
    sergeResponse = "Sure.";
  }
  return sergeResponse;
}

console.log(sergeSays("Are cookies good?"));
console.log(sergeSays("FUCK YOU!"));
console.log(sergeSays(""));
console.log(sergeSays("I'm tired"));
console.log(sergeSays("FUCK YOU?"));
