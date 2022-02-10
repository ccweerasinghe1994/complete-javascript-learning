'use strict';

let score = 20;
let highScore = 0;

const convertToNumber = number => Number(number);
const generateRandomNumber = () => Math.trunc(Math.random() * 20 + 1);

let secretNumber = generateRandomNumber();

// event listener

function getMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  const numberGuess = convertToNumber(guess);

  if (!numberGuess) {
    // document.querySelector('.message').textContent = `⛔ No Number`;
    getMessage('⛔ No Number');
  } else if (numberGuess === secretNumber) {
    document.querySelector('.message').textContent = `🙌 correct answer 🎉🎆`;
    // adding styles
    // always camel case
    // value always a string
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (numberGuess !== secretNumber) {
    if (score > 1) {
      getMessage(numberGuess > secretNumber ? `📈 Too High` : `📉 Too Low`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      getMessage(`🧨you lost`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again functionality

document.querySelector('.again').addEventListener('click', () => {
  console.log('running');
  score = 20;
  secretNumber = generateRandomNumber();
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  getMessage('Start guessing...');
});
