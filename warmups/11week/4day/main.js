// prettier-ignore
const dashatize = (str) => Number.isNaN(str) ? str : str.toString().split('').filter((d) => d !== '-').reduce((acc,curr,i,all) => (acc += parseInt(curr) % 2 !== 0 && i !== 0 && i !== all - 1 ? `-${curr}` : curr)).replace(/--/g,'-');

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
console.log(dashatize(-38369));
