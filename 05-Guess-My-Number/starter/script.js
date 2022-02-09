'use strict';

// this selector argument is same as css selectors

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = `correct answer🎉`;

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;

let score = 20;

const convertToNumber = number => Number(number);
const generateRandomNumber = () => Math.trunc(Math.random() * 20 + 1);

const secretNumber = generateRandomNumber();

document.querySelector('.number').textContent = secretNumber;
// event listener

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  const numberGuess = convertToNumber(guess);
  if (!numberGuess) {
    document.querySelector('.message').textContent = ` ⛔ No Number`;
  } else if (numberGuess === secretNumber) {
    document.querySelector('.message').textContent = `🙌 correct answer 🎉🎆`;
  } else if (numberGuess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📈 Too High`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `🧨you lost`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (numberGuess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📉 Too Low`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `🧨you lost`;
      document.querySelector('.score').textContent = 0;
    }
  }
});
