export class CashRegister {
    clientId;
    storage = [{
        barcode: Number,
        price: Number,
        name: String,
        quantity: Number
    }];
    receipt = [{
        id: String,
        barcode: Number,
        quantity: Number,
        price: Number
    }];

    constructor() {
        this.clientId = 0;
        this.storage = [ ];
        this.receipt = [ ];
    }
    
    addItemList(product) {
        this.storage.push(product)
        console.log(this.storage)
    }

    newCustomer(clientId) {
        this.clientId = clientId;
        console.log(
        `                 RECEIPT
            \n          Padaria TechMegaPlusBlaster
            \nSHOPPER MEMBER: # ${this.clientId}
            \n-------------------------------------------
            \nPRODUCT      BARCODE     PRICE       QTY
        `);
    }

    registerItem(barcode, quantity) {
        this.storage.forEach( product => {
            if (barcode === product.barcode && product.quantity === 0) throw new Error ("Product out of stock");
            
            if (barcode === product.barcode && product.quantity != 0) {
                const productBarcode = product.barcode;
                const price = product.price;
                const name = product.name;
                this.receipt.push({productBarcode, price, name, quantity});
                product.quantity -= quantity;

                let receipt = `${name}    #${productBarcode}     $ ${price.toFixed(2)}      ${quantity}`;
                console.log(receipt)
            }
        });
    }

    checkOut() {
        const subtotal = this.receipt.reduce(
            (subtotal, product) => subtotal + (product.price * product.quantity), 0 
        );
        console.log(`Total: $ ${subtotal.toFixed(2)}`);
        return subtotal;
    }

    calculateChange(cash) {
        const total = this.checkOut();
        const change = cash - total;
        this.clientId = 0;
        this.receipt = [ ];
        console.log(`Money: $ ${cash.toFixed(2)} \n\nChange: ${change.toFixed(2)}`);
    }
}