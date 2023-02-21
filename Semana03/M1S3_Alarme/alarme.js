let idInterval = 0;
document.querySelector("#inputButton").addEventListener("click", calculateDays);

function calculateDays() {
    if (idInterval !== 0) { stopAlarm(); }

    const birthday = new Date(document.querySelector("#inputBirthday").value);
    const today = new Date();

    const differenceInMs = birthday - today;
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    displayAlarm(differenceInDays);
}

function displayAlarm(differenceInDays) {
    idInterval = setInterval(() => {
        if (differenceInDays < 0) {
            document.querySelector("#alarmText").innerText = `Seu aniversário já passou.`;
        } else if (differenceInDays === 0) {
            document.querySelector("#alarmText").innerText = `🎉🎉 Feliz aniversário!!! 🎉🎉`;
        } else if (differenceInDays === 1) {
            document.querySelector("#alarmText").innerText = `Falta ${differenceInDays} dia para seu aniversário.`;
        } else if (differenceInDays > 1) {
            document.querySelector("#alarmText").innerText = `Faltam ${differenceInDays} dias para o aniversário!`;
        }
    }, 1000);
}

function stopAlarm() { clearInterval(idInterval); }