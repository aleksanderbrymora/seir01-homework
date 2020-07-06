
const bank = [
  { name: "Sam",
    balance: 1500 },
  { name: "Matt",
    balance: 1000 },
]

// const accountTemplate = {
//   name: "Matt",
//   balance: 1000,
// }
//

const countAllMoney = function() {
  let total = 0;
  for (i = 0; i < bank.length; i++) {
    total += bank[i].balance;
  }
  return `The total balance of the bank is $${total}.`;
}

const createAccount = function(inputName, inputBalance) {
  bank.push({ name: inputName, balance: inputBalance },)
  console.log(`Congratulations ${inputName} for creating your account. Your current balance is $${inputBalance}`)
}

const deposit = function(inputName, inputNum) {
  for (i = 0; i < bank.length; i++) {
    if (bank[i].name === inputName) {
      bank[i].balance = bank[i].balance + inputNum;
    }
  }
  console.log(`Thank you ${inputName} for your deposit of $${inputNum}.`);
}

const withdraw = function(inputName, inputNum) {
  for (i = 0; i < bank.length; i++) {
    if (bank[i].name === inputName) {
      bank[i].balance = bank[i].balance - inputNum;
    }
  }
  console.log(`Thank you ${inputName} for your withdrawal of $${inputNum}.`);

}

console.log(countAllMoney());

createAccount("Samantha", 1750);
deposit("Samantha", 300);
withdraw("Samantha", 500);

console.log(countAllMoney());

createAccount("Bartholomew", 100);
deposit("Bartholomew", 50);
withdraw("Bartholomew", 75);

console.log(countAllMoney());
