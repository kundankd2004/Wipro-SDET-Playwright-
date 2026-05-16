class BankAccount {
    #balance=0 ; // Private field
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Withdrew amount must be positive and less than or equal to current balance.");
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.withdraw(30);
console.log(`Current Balance: $${myAccount.getBalance()}`);

const anotherAccount = new BankAccount();
anotherAccount.deposit(200);
anotherAccount.withdraw(50);
console.log(`Current Balance: $${anotherAccount.getBalance()}`);