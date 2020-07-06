
const validateCreditCard = function (cardNo) {
    // input validation
    let error = "";
    let cardRaw = cardNo;
    cardNo = cardNo.split('-').join(""); // clean the string inputs
    if (cardNo.length != 16) {
        return ({valid: false, number: cardRaw, error: `Too short, current card length is ${cardNo.length}`});
    }
    cardNo = cardNo.split(""); // convert to array
    let set = new Set(cardNo); // sets are like arrays where all the entries must be unique - ie gets rid of duplicates
    if (set.size == 1) {
        return ({valid: false, number: cardRaw, error: `cant be just the same number over and over. current set length is ${set.size}`});
    } else if (cardNo[cardNo.length - 1] % 2 != 0) {
        return ({valid: false, number: cardRaw, error: "Last number must be even"});
    }
    let sum = 0;
    for (let i = 0; i < cardNo.length; i++) {
        if (isNaN(cardNo[i])) {
            return ({valid: false, number: cardRaw, error: `Contains non-number characters`});
        }
        sum += parseInt(cardNo[i]);
    }
    if (sum < 16) {
        return ({valid: false, number: cardRaw, error: "sum of numbers must be larger than 16"});
    }
    return ({valid: true, number: cardRaw});
}

console.log(validateCreditCard('9999-9999-8888-0000')); // Returns: true
console.log(validateCreditCard("a923-3211-9c01-1112")); // invalid characters
console.log(validateCreditCard("4444-4444-4444-4444")); // only one type of number
console.log(validateCreditCard("1111-1111-1111-1110")); // sum less than 16
console.log(validateCreditCard("6666-6666-6666-6661")); // odd final number