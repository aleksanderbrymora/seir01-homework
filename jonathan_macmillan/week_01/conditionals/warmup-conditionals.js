// # Exercises: if/else statements
//
// ## What number's bigger?
//
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
//
const greaterNum = function(num1, num2){
  if (num1 > num2){
    console.log(`The greater number of ${num1} and ${num2} is ${num1}`);
    return num1;
  } else {
    console.log(`The greater number of ${num1} and ${num2} is ${num2}`);
    return num2;
  }
};
greaterNum(1, 5);
greaterNum(111, 5);

// ## The World Translator
//
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.
//
const helloWorld = function(languageCode){
  if (languageCode === "es"){
    console.log('Hola El Mundo');
    return "Hola El Mundo";
  } else if (languageCode === "fr"){
    console.log('Bonjour Tous Le Monde');
    return "Bonjour Tous Le Monde";
  } else {
    console.log('Hello World');
    return "Hello World";
  }
};

helloWorld("es");
helloWorld("fr");
helloWorld("en");

// ## The Grade Assigner
//
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.
//
const assignGrade = function(num){
  if (num > 100 || num < 0){
    console.log("What world do you live on?")
  } else if (num >= 90){
    console.log("You got an A");
    return "A";
  } else if (num >= 80){
    console.log("You got an B");
    return "B";
  } else if (num >= 70){
    console.log("You got an C");
    return "C";
  } else if (num >= 60){
    console.log("You got an D");
    return "D";
  } else {console.log("You got an F");
    return "F";
  }
};

assignGrade(40);
assignGrade(75);
assignGrade(4011);

// ## The Pluralizer
//
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function(singularNoun, number){
  if (number <= 0){
    console.log("get out of town");
    return "get out of town";
  } else if (number === 1){
    console.log(number + " " + singularNoun);
    return number + " " + singularNoun;
  } else if (number > 1){
    if (singularNoun === " sheep"){
      console.log(number + " " + singularNoun);
      return number + singularNoun;
    } else if (singularNoun === " mouse"){
      console.log(number + " mice");
      return number + " mice";
    } else if (singularNoun === " goose"){
      console.log(number + " geese");
      return number + " geese";
    } else {
      console.log(number + " " + singularNoun + "s");
      return number + " " + singularNoun + "s"
    }
  }
}

pluralize("dog", 2);
pluralize("goose", 1);
pluralize("kangaroos", -2);
pluralize("your mom", 2);
