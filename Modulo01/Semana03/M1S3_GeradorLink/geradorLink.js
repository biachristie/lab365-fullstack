function generateLink() {
    const phoneNumber = document.getElementById("phoneNumber");
    const message = document.getElementById("message").value.replaceAll(" ", "%20");
    const link = document.getElementById("divLink");

    link.innerHTML = `
        <a href="https://api.whatsapp.com/send?phone=${phoneNumber.value}&text=${message}">
            api.whatsapp.com/send?phone=${phoneNumber.value}&text=${message}
        </a>
    `;
}

function cleanInput() {
    document.getElementById("phoneNumber").value = "";
    document.getElementById("message").value = "";
    document.getElementById("divLink").innerHTML = "";
}