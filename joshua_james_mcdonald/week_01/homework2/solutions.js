// Array and functions
    // problem 1
const maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return (num1);
    } else {
        return (num2);
    }
}

    // problem 2
const maxOfThree = function (num1, num2, num3) {
    return (Math.max(num1, num2, num3));
}
console.log(maxOfThree(4, 10, 6));

    // problem 4
const vowel = function (char) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return (vowels.includes(char));
}
console.log(vowel('a'));
console.log(vowel('s'));

    // problem 5
const sumArray = function (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum);
}
console.log(sumArray([1, 2, 3, 4]));

const multiplyArray = function (arr) {
    let sum = 1; // needed for initialization
    for (i = 0; i < arr.length; i++) {
        sum = sum*arr[i];
    }
    return (sum);
}
console.log("multiply");
console.log(multiplyArray([1, 2, 3, 4]));




// bonus
    // problem 6
const reverseString = function (string) {
    let output = "";
    for (i = string.length - 1; i != -1; i--) {
        output += string[i];
    }
    return (output);
}
console.log(reverseString("abcdefghijk"));

    // problem 6
const findLongestWord = function (stringArr) {
    let maxIndex = 0;
    let maxLength = 0;
    for (i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length > maxLength) {
            maxLength = stringArr[i].length;
            maxIndex = i;
        }
    }
    return (maxLength);
}
console.log(findLongestWord(["I", "do", "like", "flying", "pigs"]));

    // problem 7
const filterLongWords = function (stringArr, maxLength) {
    let longWords = [];
    for (i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length > maxLength) {
            longWords.push(stringArr[i]);
        }
    }
    return (longWords);
}
console.log(filterLongWords(["I", "do", "like", "flying", "pigs"], 2));