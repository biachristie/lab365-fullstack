let products = [
    {
        code: "1",
        name: "Product 1",
        price: "1.87"
    },
    {
        code: "2",
        name: "Product 2",
        price: "23.90"
    },
    {
        code: "3",
        name: "Product 3",
        price: "4.90"
    },
    {
        code: "4",
        name: "Product 4",
        price: "6.15"
    },
    {
        code: "5",
        name: "Product 5",
        price: "2.83"
    },
]

let total = 0;

function getInputValue() {
    const code = document.getElementById("productInput").value;
    const receipt = document.getElementById("receipt");

    if (code != 0) {
        products.forEach(element => {
            if (code == element.code) {
                receipt.innerHTML += `
                        <div>
                            <p>${element.name}: R$ ${element.price}</p>
                        </div>
                    ` 
                total += Number(element.price);
            }
        });
    } else {
        receipt.innerHTML += `
                <div class="total">
                    <p>Total: R$ ${total.toFixed(2)}</p>
                </div>
                <div class="moneyInput">
                    <div class="askMoney">
                        <label for="moneyInput">Money Received</label>
                        <input type="number" placeholder="Enter value" id="moneyInput">
                    </div>
                    <button type="submit" onclick="getMoneyValue()">Add Money</button>
                </div>
            `
    }
}

function getMoneyValue() {
    const money = document.getElementById("moneyInput").value;
    
    let change = 0;
    
    const moneyValue = document.getElementsByClassName("moneyInput")
    moneyValue[0].innerHTML = `
            <p>
                Money: R$ ${money}
            </p>
        `;
    
    change = Number(money) - Number(total);
    
    moneyValue[0].innerHTML += `
            <p>
                Change: R$ ${change.toFixed(2)}
            </p>
            <div class="resetBtn">
                <button type="submit" onclick="reset()">Clean Shopping Cart</button>
            </div>
        `;
    
    total = 0;
}


function reset() {
    window.location.reload();
    document.getElementById("productInput").value = "";
}