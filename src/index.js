import colors from './js/library.js';
import colorsArr from './js/library.js';
import fnRandom from './js/randomizer.js';

const startBtn = document.querySelector('[data-action=start]');
const stopBtn = document.querySelector('[data-action=stop]');
const bodyRef = document.querySelector('body');
let setColor = null;

const handleTheme = function (e) {
  startBtn.removeEventListener('click', handleTheme);
  console.log('Start');
  setColor = setInterval(() => {
    bodyRef.style.backgroundColor = colorsArr[fnRandom(0, colorsArr.length)];
  }, 1000);
};
startBtn.addEventListener('click', handleTheme);

const handleStopTheme = function () {
  console.log('Stop');
  clearInterval(setColor);
  startBtn.addEventListener('click', handleTheme);
};
stopBtn.addEventListener('click', handleStopTheme);
