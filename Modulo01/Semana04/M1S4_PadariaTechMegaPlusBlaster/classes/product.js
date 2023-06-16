export class Product {
    #barcode;
    #price;
    #name;
    #quantity;

    constructor(barcode, price, name, quantity) {
        this.#barcode = barcode;
        this.#price = Number(price);
        this.#name = name;
        this.#quantity = Number(quantity);
    }

    updateQuantity(barcode, quantity) {
        if (barcode === this.#barcode) {
            this.#quantity += quantity;
        }
    }

    get barcode() {
        return this.#barcode;
    }

    set barcode(barcode) {
        this.#barcode = barcode;
    }
    
    get price() {
        return this.#price;
    }
    
    set price(price) {
        this.#price = price;
    }
    
    get name() {
        return this.#name;
    }
    
    set name(name) {
        this.#name = name;
    }

    get quantity() {
        return this.#quantity;
    }
    
    set quantity(quantity) {
        this.#quantity = quantity;
    }
}

