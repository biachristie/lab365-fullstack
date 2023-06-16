function generateTable() {
    const price = document.getElementById("price").value.replace("," , ".");
    const answer = document.getElementById("answer");

    if (!Number(price)) {
        alert("Insert a valid number!");
    } else {
        if (price <= 0) {
            alert("Insert a valid number!");
        } else {
            let hasTwoDecimalPlaces = price.split(".")[1].length === 2;
            
            if (!hasTwoDecimalPlaces) {
                alert("Insert a valid number!");
            } else {
                answer.innerHTML = "";
                answer.innerHTML = `
                        <p>Preço do pão: R$ ${price}</p>
                        <p>Panificadora Pão de Ontem - Tabela de Preços</p>
                        <br>
                    `;
            
                for (let i = 1; i <= 50; i++) {
                    answer.innerHTML += `<p>${i} - R$ ${(price * i).toFixed(2)}</p>`;
                }
            }
        }
    }
}