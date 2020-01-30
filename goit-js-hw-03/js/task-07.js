"Use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    return {
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
      amount: amount,
      type: type
    };
  },
  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
    return `Your balance after transaction ${
      Transaction.DEPOSIT
    } is: ${this.getBalance()}`;
  },
  withdraw(amount) {
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW)
    );
    if (this.balance < amount) {
      return `Impossible transaction. Not enought money. Your balance is: ${this.getBalance()}`;
    }

    this.balance -= amount;
    return `Your balance after transaction ${
      Transaction.WITHDRAW
    } is: ${this.getBalance()}`;
  },
  getBalance() {
    return this.balance;
  },
  getTransactionTotal(type) {
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return `Total transaction amount of transaction type ${type} is: ${total}`;
  },
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  }
};

console.log(account.deposit(700));
console.log(account.deposit(100));
console.log(account.deposit(200));
console.log(account.withdraw(400));

console.log(account.getTransactionTotal("deposit"));

console.log(account.transactions);
