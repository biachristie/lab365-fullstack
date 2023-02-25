// --------------------------------------------------------------------------------------------
// Exercício 01

class BankAccount {
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
        return Number(this.balance.toFixed(2));
    }

    makeWithdraw(withdraw, password) {
        if (password !== this.#password) throw new Error("Invalid password");
        if (!Number(withdraw)) throw new Error ("Invalid value.");
        if (withdraw === 0) throw new Error("Invalid value.");
        if (withdraw > this.balance) throw new Error("Insuficient balance.");

        this.balance -= withdraw;
        return Number(this.balance.toFixed(2));
    }
}

const checkingAccount = new BankAccount(100.00, "Lab365");
// checkingAccount.makeDeposit(10, "Lab365");
// checkingAccount.makeWithdraw(10, "Lab365");

// --------------------------------------------------------------------------------------------
// Exercício 02

class savingAccount extends BankAccount {
    constructor(balance, password) {
        super(balance, password);
    }

    updateInterest() {
        this.balance += (this.balance * 0.007);
        return Number(this.balance.toFixed(2));
    }
}

const savingAccountA = new savingAccount(100.00, "Lab365");
// savingAccountA.updateInterest();

// --------------------------------------------------------------------------------------------
// Exercício 03

class premiumSavingAccount extends savingAccount {
    constructor(balance, password) {
        super(balance, password);
    }

    updateInterest() {
        this.balance += (this.balance * 0.012);
        return Number(this.balance.toFixed(2));
    }
}

const premiumSavingAccountA = new premiumSavingAccount(100.00, "Lab365");
// premiumSavingAccountA.updateInterest();