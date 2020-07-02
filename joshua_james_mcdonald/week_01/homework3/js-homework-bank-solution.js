// Bank
var accounts = {};

const addAccount = function (name, amount) {
    accounts[name] = amount;
    return (`Created account ${name}, with starting balance of ${amount}`);
}
const withdraw = function (name, amount) {
    if (accounts[name]) {
        if (accounts[name] > amount) {
            accounts[name] -= amount;
            return (`Successfully withdrew $${amount} from ${name}s account`)
        } else {
            return ("Not enough funds in account");
        }
    } else {
        return (`account ${name} does not exist`);
    }
}

const deposit = function (name, amount) {
    if (accounts[name]) {
        accounts[name] += amount;
        return (`depositied $${amount} into ${name}s account`)
    } else {
        return (`Account ${name} does not exist.`)
    }
}

const getBalance = function (name) {
    return (`$${accounts[name]} currently in ${name}s account account.`);
}

const transfer = function (accountFrom, accountTo, amount) {
    if (accountTo && accountFrom && (accounts[accountFrom] > amount)) { // validation 
        withdraw(accountFrom, amount);
        deposit(accountTo, amount);
        return (`Transferred ${amount} from ${accountFrom} to ${accountTo}.`)

    } else {
        return (`Transfer failed.`)
    }
}

addAccount("josh", 100);
addAccount("lucy", 50);
