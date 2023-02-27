import { BankAccount } from "./classes/bankAccount.js";
import { SavingAccount } from "./classes/savingAccount.js";
import { PremiumSavingAccount } from "./classes/premiumSavingAccount.js";

const checkingAccount = new BankAccount(100.00, "Lab365");
checkingAccount.makeDeposit(10, "Lab365");
checkingAccount.makeWithdraw(10, "Lab365");

const savingAccountA = new SavingAccount(100.00, "Lab365");
savingAccountA.updateInterest();
savingAccountA.updateInterest();
savingAccountA.updateInterest();

const premiumSavingAccountA = new PremiumSavingAccount(100.00, "Lab365");
premiumSavingAccountA.updateInterest();
premiumSavingAccountA.updateInterest();
premiumSavingAccountA.updateInterest();