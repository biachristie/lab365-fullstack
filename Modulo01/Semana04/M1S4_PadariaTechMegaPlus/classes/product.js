export class Product {
    #barcode;
    #price;
    #name;

    constructor(barcode, price, name) {
        this.#barcode = barcode;
        this.#price = Number(price);
        this.#name = name;
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
}