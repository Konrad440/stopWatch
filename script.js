const startButton = document.querySelector(".main");
const resetButton = document.querySelector(".reset");
const timeStart = document.querySelector(".time div");

let time = 0;
let flag = false;
let idInterval;

const start = () => {
  if (!flag) {
    flag = !flag;
    startButton.textContent = "Pauza";
    idInterval = setInterval(() => {
      time++;
      timeStart.textContent = (time / 100).toFixed(2);
    }, 10);
  } else {
    flag = false;
    startButton.textContent = "Start";
    clearInterval(idInterval);
  }
};

const reset = () => {
  clearInterval(idInterval);
  timeStart.textContent = "---";
};

startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);
