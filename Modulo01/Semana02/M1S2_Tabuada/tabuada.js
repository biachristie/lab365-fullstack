function generateTable() {
    let answer = document.getElementById("answer");
    answer.innerHTML = "";

    const number = Math.floor(document.getElementById("number").value);
    
    if (number <= 0 || number > 10) {
        alert("Enter a valid number")
    } else {
        answer.innerHTML = `<p>Multiplcation Table of ${number}</p>`
        for (let i = 1; i <= 10; i++) {
            answer.innerHTML += `<p>${i} X ${number} = ${number * i}</p>`;
        }
    }
}
