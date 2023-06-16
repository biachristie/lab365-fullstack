// --------------------------------------------------------------------------------------------
// Exercício 02

export class BankAccount {
    balance;
    #password;

    constructor(balance, password) {
        this.balance = Number(balance);
        this.#password = password;
    }

    get password() {
        return this.#password;
    }

    set password(newPassword) {
        this.#password = newPassword;
    }

    makeDeposit(deposit, password) {
        if (password !== this.#password) throw new Error("Invalid password");
        if (!Number(deposit)) throw new Error("Invalid value.");
        if (deposit <= 0) throw new Error("Invalid value");

        this.balance += deposit;
        console.log(Number(this.balance.toFixed(2)));
    }

    makeWithdraw(withdraw, password) {
        if (password !== this.#password) throw new Error("Invalid password");
        if (!Number(withdraw)) throw new Error ("Invalid value.");
        if (withdraw === 0) throw new Error("Invalid value.");
        if (withdraw > this.balance) throw new Error("Insuficient balance.");

        this.balance -= withdraw;
        console.log(Number(this.balance.toFixed(2)));
    }
}