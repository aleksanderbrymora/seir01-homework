// The Recipe Card
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

// const recipe = {}; //empty object could be usefull if we don't know what's in the recipe

const favoriteRecipe = {
  title : 'Mole',
  serves : 2 ,
  ingredients : ['cinnamon', 'cumin', 'cocoa'],
}
console.log(favoriteRecipe.title);
console.log(`Serves : ${favoriteRecipe.serves}`);
console.log(favoriteRecipe.ingredients);
console.log( 'Here is your recipe', favoriteRecipe);
console.log(favoriteRecipe.ingredients.join('\n')); // \n is a new line and join is to add something between the ingredients (could be anything)


// The Reading List
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const books = [
  {title : 'a', author : 'b', alreadyRead : true},
  {title : 'c', author : 'd', alreadyRead : false },
  {title : 'e', author : 'f', alreadyRead : false },
  {title : 'g', author : 'h', alreadyRead : true },
];
for (let i=0 ; i< books.length ; i++){
  console.log(`${books[i].title} by ${books[i].author}`);
};
for (let i=0 ; i< books.length ; i++){
  if (books[i].alreadyRead === true){
    console.log(`You already read ${books[i].title} by ${books[i].author}`);
  }else {
    console.log(`You still need to read ${books[i].title} by ${books[i].author}'`);
  }
};

// RETURN is ALWAYS USED IN A FUNCTION!!!!!

// The Movie Database
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const myFavouriteMovie ={
  title : 'a',
  duration : 120,
  stars : ['brad Pitt', 'Tom cruise'],
};

const movieInfo = function() {
  const info = `${myFavouriteMovie.title} lasts for ${myFavouriteMovie.duration} minutes. Stars: ${myFavouriteMovie.stars.join(', ')}`;
  return (info);
};
console.log(movieInfo());
