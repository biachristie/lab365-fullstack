// --------------------------------------------------------------------------------------------
// Exercício 04

import { SavingAccount } from "./savingAccount.js";

export class PremiumSavingAccount extends SavingAccount {
    constructor(balance, password) {
        super(balance, password);
    }

    updateInterest() {
        this.balance += (this.balance * 0.012);
        console.log(Number(this.balance.toFixed(2)));
    }
}