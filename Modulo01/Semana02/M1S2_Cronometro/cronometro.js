const message = document.getElementById("message");
const timerText = document.getElementById("timer-text");

let myInterval;
let count = 10;

function startTimer() {
    count = 10;
    message.textContent = "";
    myInterval = setInterval(timer, 1000);
}

function timer() {
    count--;

    if (count < 10) {
        timerText.textContent = `00:0${count}`;
    } else {
        timerText.textContent = `00:${count}`;
    }
    
    if (count == 0) {
        clearInterval(myInterval);
        message.textContent = "Time is over! Try again!";
    }
}
