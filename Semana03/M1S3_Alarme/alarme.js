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
            document.querySelector("#alarmText").innerText = `The birthday has already passed.`;
        } else if (differenceInDays === 0) {
            document.querySelector("#alarmText").innerText = `🎉🎉 Happy birthday!!! 🎉🎉`;
        } else if (differenceInDays === 1) {
            document.querySelector("#alarmText").innerText = `There is only ${differenceInDays} day until the birthday!`;
        } else if (differenceInDays > 1) {
            document.querySelector("#alarmText").innerText = `There are ${differenceInDays} days until the birthday!`;
        }
    }, 1000);
}

function stopAlarm() { clearInterval(idInterval); }