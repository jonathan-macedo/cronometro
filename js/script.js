const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtnEl = document.querySelector("#startBtn")
const pauseBtnEl = document.querySelector("#pauseBtn")
const resumeBtnEl = document.querySelector("#resumeBtn")
const resertBtnEl = document.querySelector("#resertBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtnEl.addEventListener("click", startTimer)
pauseBtnEl.addEventListener("click", pauseTimer);
resumeBtnEl.addEventListener("click", resumeTimer);
resertBtnEl.addEventListener("click", resertTimer);

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formartTime(minutes)
            secondsEl.textContent = formartTime(seconds)
            millisecondsEl.textContent = formartMilliseconds(milliseconds)
        }
    }, 10);

    startBtnEl.style.display = "none";
    pauseBtnEl.style.display = "block";
}

function resertTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;


    millisecondsEl.textContent = "000"
    secondsEl.textContent = "00"
    minutesEl.textContent = "00"


    startBtnEl.style.display = "block";
    pauseBtnEl.style.display = "none";
    resumeBtnEl.style.display = "none";
}

function pauseTimer(){
    isPaused = true;
    pauseBtnEl.style.display = "none";
    resumeBtnEl.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    pauseBtnEl.style.display = "block";
    resumeBtnEl.style.display = "none";
}

function formartTime(time) {
    return time < 10 ? `0${time}`: time;
}

function formartMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}