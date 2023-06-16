// --------------------------------------------------------------------------------------------
// Exercício 03

import { BankAccount } from "./bankAccount.js";

export class SavingAccount extends BankAccount {
    constructor(balance, password) {
        super(balance, password);
    }

    updateInterest() {
        this.balance += (this.balance * 0.007);
        console.log(Number(this.balance.toFixed(2)));
    }
}