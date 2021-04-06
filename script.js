'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const showScore = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const highscoreEl = document.querySelector('.highscore');

document.querySelector('.guess').focus();

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    message.textContent = '🌽 Correct number';
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    number.style.fontSize = '80px';
    number.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? '📈 Too high' : '📉 Too low';
      score--;
      showScore.textContent = score;
    } else {
      message.textContent = '😭 You lost the game';
      showScore.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  document.querySelector('.guess').focus();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = 'Start guessing...';
  showScore.textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.fontSize = '60px';
  number.style.width = '15rem';
});
