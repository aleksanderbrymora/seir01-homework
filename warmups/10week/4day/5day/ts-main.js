"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var happyNumberz = function (amount, numbers, current) {
    if (numbers === void 0) { numbers = []; }
    if (current === void 0) { current = 1; }
    var isHappy = function (num, cycle) {
        if (cycle === void 0) { cycle = []; }
        var potentiallyHappyNumber = num
            .toString()
            .split('')
            .map(function (n) { return parseInt(n); })
            .reduce(function (acc, num) { return acc + num * num; }, 0);
        if (potentiallyHappyNumber === 1)
            return true;
        if (cycle.includes(potentiallyHappyNumber))
            return false;
        return isHappy(potentiallyHappyNumber, __spreadArrays(cycle, [potentiallyHappyNumber]));
    };
    if (numbers.length === amount)
        return numbers;
    return isHappy(current)
        ? happyNumberz(amount, __spreadArrays(numbers, [current]), current + 1)
        : happyNumberz(amount, numbers, current + 1);
};
console.log(happyNumberz(10));
