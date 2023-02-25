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

    makeDeposit() {
        const password = prompt("Enter password account:");
        if (password !== this.#password) throw new Error("Invalid password");

        const deposit = Number(prompt("Enter deposit value: "));
        if (typeof withdraw != Number) throw new Error("Invalid value.");
        if (deposit <= 0) throw new Error("Invalid value");

        this.balance += deposit;
        return Number(this.balance.toFixed(2));
    }

    makeWithdraw() {
        const password = prompt("Enter password account:");
        if (password !== this.#password) throw new Error("Invalid password");

        let withdraw;
        do {
            withdraw = Number(prompt("Enter withdraw value: "));
            if (typeof withdraw != Number) throw new Error ("Invalid value.");
            if (withdraw === 0) throw new Error("Invalid value.");

            if (withdraw <= this.balance) {
                this.balance -= withdraw;
                return Number(this.balance.toFixed(2));
            } else {
                console.error("Insufficient balance.")
            }
        } while (withdraw > this.balance);
    }
}

const checkingAccount = new BankAccount(100.00, "Lab365");

// checkingAccount.makeDeposit();
// checkingAccount.makeWithdraw();

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
        console.log(this.balance)
        return Number(this.balance.toFixed(2));
    }
}

const premiumSavingAccountA = new premiumSavingAccount(100.00, "Lab365");

// premiumSavingAccountA.updateInterest();