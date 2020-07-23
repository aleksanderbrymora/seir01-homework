"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var allPrimeFactors = function (num) {
    var factors = [];
    for (var i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num = num / i;
        }
    }
    return factors;
};
console.log('normie', allPrimeFactors(60));
var someFunc = function (num) { return num; };
var recPrimeFactors = function (num, factor, allFactors) {
    if (factor === void 0) { factor = 2; }
    if (allFactors === void 0) { allFactors = []; }
    if (num === 1)
        return allFactors;
    return num % factor === 0
        ? recPrimeFactors(num / factor, factor, __spreadArrays(allFactors, [factor]))
        : recPrimeFactors(num, factor + 1, allFactors);
};
console.log('recursive mmmm', recPrimeFactors(19272));
// shortest way to check for a prime, probably commit this to memory
var isPrime = function (num) {
    for (var i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
};
//# sourceMappingURL=main.js.map