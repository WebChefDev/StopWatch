let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  if (!timer) {
    timer = setInterval(updateTime, 1000);
    document.querySelector(".start-btn").textContent = "Stop";
  } else {
    clearInterval(timer);
    timer = null;
    document.querySelector(".start-btn").textContent = "Start";
  }
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.querySelector(".start-btn").textContent = "Start";
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.querySelector(".display");
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}
