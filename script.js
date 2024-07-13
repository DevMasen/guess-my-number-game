'use strict';

//* Initialize
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Math.random() => [0,1) * 20 = [0,20) => trunc = [0,19] +1 = [1,20];
let score = 10;
let highScore = 0;

//* HTML Elements
let body = document.querySelector('body');

let againButton = document.querySelector('.again');

let number = document.querySelector('.number');

let userGuess = document.querySelector('.guess');

let checkButton = document.querySelector('.check');

let message = document.querySelector('.message');

let userScore = document.querySelector('.score');

let userHighScore = document.querySelector('.highscore');

//* Check if the score still positive and if not shoe Game Over Message.
function checkScore(massage = '') {
  if (score > 1) {
    score--;
    userScore.textContent = score;
    showMessage(massage);
  }
  //When Scores reach zero
  else {
    userScore.textContent = 0;
    showMessage('💀 You Lost The Game!');
    body.style.backgroundColor = '#c90000';
  }
}

//* Show User The Appropriate message in defferent situations.
function showMessage(shownMessage=''){
  message.textContent  = shownMessage;
}

//* On Check! Button Click Action : Check the Answer
checkButton.addEventListener('click', function () {
  const guess = +userGuess.value;

  // When User Input is Empty
  if (!userGuess.value) {
    showMessage('❌ Invalid Input!');
  }
  // When The Guess is Correct
  else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      userHighScore.textContent = highScore;
    }
    showMessage('✅ Currect Number!');
    number.textContent = secretNumber;
    number.style.width = '30rem';
    body.style.backgroundColor = '#60b347';
  }
  // When The Guess is Too Low
  else if (guess < secretNumber) {
    checkScore('📉 To Low!');
  }
  // When the Guess is Too High
  else if (guess > secretNumber) {
    checkScore('📈 To High!');
  }
});

//*On Again! Button Click :  Reset The Setting
againButton.addEventListener('click', function () {
  body.style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  number.style.width = '15rem';
  score = 10;
  userScore.textContent = score;
  showMessage('Start guessing...');
  userGuess.value = '';
});