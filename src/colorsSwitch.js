import colors from './colorsItems.js';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId;

refs.startBtn.addEventListener('click', startButtonClicker);
refs.stopBtn.addEventListener('click', stopButtonClicker);

function changeBackgroundColor(arrayColors) {
  const randomColor = randomIntegerFromInterval(0, arrayColors.length - 1);
  refs.body.style.backgroundColor = arrayColors[randomColor];
}

function startButtonClicker() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(() => {
    changeBackgroundColor(colors);
    console.log(3);
  }, 1000);
  console.log(1);
}

function stopButtonClicker() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
  console.log(2);
}
