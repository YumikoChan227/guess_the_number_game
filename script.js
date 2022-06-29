'use strict';

// generate the secrete number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// set the initial score and high score
let score = 20;
let highscore = 0;

// function to change the '.message' content easier
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// reset the game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

// when click the button, a series action will do
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // When there is no input
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    //when guess the correct number
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      displayMessage('📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      displayMessage('📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
    }
  }
});
