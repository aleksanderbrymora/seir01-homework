// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array, max= -Infinity){
    // This function returns the largest number in a given array.
    if (array.length == 0){
        return(max);
    }

    currentValue = array.pop();
    if (currentValue> max){
        max= currentValue;
    }
    return( findMax(array, max));
}

function factorial(number){
    // This function returns the factorial of a given number.
    if (number ==0){
        return(1);
    }
    return(number*factorial(number-1));
}

function fibonacci(counter, currentSum=1, previousSum=0){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if (counter ==1){
        return(currentSum);
    }
    return(fibonacci(counter-1, currentSum+previousSum, currentSum))
}   

function coinFlips(flipsLeft, combos=[""]){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    if (flipsLeft == 0){
        return(combos);
    }
    let newCombos = []
    while (combos.length!==0){
        combo = combos.pop();
        newCombos.push(combo+"H");
        newCombos.push(combo+"T");
    }
    return(coinFlips(flipsLeft-1, newCombos));
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

    // want to do that same thing as for coin flip, but want to append elements in the list
    // rather than H or T, also want to pop the element you are considering from the list
    // want to do this for each element in the array. 
    // the return the final master list. This may require a helper function this time. 
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}