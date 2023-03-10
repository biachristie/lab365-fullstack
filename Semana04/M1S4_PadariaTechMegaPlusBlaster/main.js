// --------------------------------------------------------------------------------------------
// Exercício 06

import { Product } from "./classes/product.js";
import { CashRegister } from "./classes/cashRegister.js";

const newService = new CashRegister();

const bun = new Product(112, 1.50, "bun", 10);
const cinnamonRoll = new Product(113, 2.0, "cinnamonRoll", 10);
const croissant = new Product(114, 3.00, "croissant", 10);

newService.addItemList(bun);
newService.addItemList(cinnamonRoll);
newService.addItemList(croissant);

newService.newCustomer(123456);
newService.registerItem(112, 1);
newService.registerItem(113, 1);
newService.checkOut();
newService.calculateChange(4.00);