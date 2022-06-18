'use strict';
const message = document.querySelector('.message');
const checkButton = document.querySelector('.check');
const scoreBox = document.querySelector('.score');
const resetGame = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMesage = message => {
  document.querySelector('.message').textContent = message;
};

checkButton.addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;
  // when there is no input
  if (!guess) {
    // message.textContent = '⛔️ No Number !';
    displayMesage('⛔️ No Number !');
    // when player win
  } else if (guess === secretNumber) {
    // message.textContent = '🎉 Correct Number !';
    displayMesage('🎉 Correct Number !');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMesage(guess > secretNumber ? '📉 Too High!' : '📈 Too Low!');
      score--;
      scoreBox.textContent = score;
    } else {
      // message.textContent = '💥 You Lost The Game!';
      displayMesage('💥 You Lost The Game!');
      scoreBox.textContent = 0;
    }
  }
});

resetGame.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreBox.textContent = score;
  // message.textContent = 'Start Guessing... ';
  displayMesage('Start Guessing... ');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector(' number').textContent = '?';
  secretNumber;
  guess.value = '';
});
console.log(checkButton);
