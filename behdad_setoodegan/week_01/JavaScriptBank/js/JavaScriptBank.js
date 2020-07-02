let accounts = [
  {name:"John", balance:10000},
  {name:"Behdad", balance:107600},
  {name:"Amir", balance:4500},
  {name:"Ali", balance:3467.23}
];

// Deposit
//Ali saved $200 this week.
const deposit = function(name, amount){
  let flag = false;
  for(let i = 0; i < accounts.length; i++){
    if(accounts[i].name === name){
      accounts[i].balance = accounts[i].balance + amount;
      flag = true;
      console.log(`Successful transaction. \nNew balance for ${accounts[i].name}'s account is ${accounts[i].balance}`);
      return;
    }
  }
  if (!flag) {
    console.log("There is no account with this information.");
  }
}
deposit("Ali", 200);

//Withdraw
//Behdad spend $400 for rent.
const withdraw = function(name,amount){
  let flag = false;
  for(let i = 0; i < accounts.length; i++){
    if(accounts[i].name === name){
      flag = true;
      if(accounts[i].balance-amount > 0){
        accounts[i].balance = accounts[i].balance - amount;
        console.log(`Successful transaction. \nNew balance for ${accounts[i].name}'s account is ${accounts[i].balance}`);
        return;
      }
      else {
        console.log(`Not enough money in ${accounts[i].name}'s account.`);
      }
    }
  }
  if (!flag) {
    console.log("There is no account with this information.");
  }
}
withdraw("Behdad", 222400);

// add some accounts
//Bank had 3 new customers today.
const pushAcc = function (obj){
  accounts.push(obj);
}
pushAcc({name:"Reza", balance:3000});
pushAcc({name:"Josh", balance:17000});
pushAcc({name:"Feri", balance:31000});

// show the total balanc
//Feri checked her account balance.
const totalBalance = function (name){
  let flag = false;
  for(let i = 0; i < accounts.length; i++){
    if(accounts[i].name === name){
      flag = true;
      console.log(`Total balance for ${accounts[i].name}'s account is ${accounts[i].balance}`);
      return;
    }
  }
  if (!flag) {
    console.log("There is no account with this information.");
  }
}
totalBalance("Feri");

//transfer
const transfer = function (name1, name2, amount){
  let flag = false;
  for(let i = 0; i < accounts.length; i++){
    if(accounts[i].name === name1){
      for(let j = 0; j < accounts.length; j++){
        if(accounts[j].name === name2){
          flag = true;
          if(accounts[i].balance-amount > 0){
            accounts[i].balance = accounts[i].balance - amount;
            accounts[j].balance = accounts[j].balance + amount;
            console.log(`Successful transaction. \n${amount} transferd from ${accounts[i].name}'s account to ${accounts[i].name}'s account`);
            return;
          }
          else {
            console.log(`Not enough money in ${accounts[i].name}'s account.`);
          }
        }
      }
    }
  }
  if (!flag) {
    console.log("There is no account with this information.");
  }
}

transfer("Behdad", "Amir", 1000);
