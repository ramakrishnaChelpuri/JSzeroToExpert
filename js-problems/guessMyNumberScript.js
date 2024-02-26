'use strict';

//storing player's guess into a variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`secret number is ${secretNumber}`);
//initializing players score
let playerScore = 20;
let playerHighScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(`Your Guess is ${guess}`);

    //When player did not guess anything
    if (!guess) {
        displayMessage('🚫 No Number!');

        //Whem player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Guess 🍾');
        console.log(document.querySelector('.message').textContent);
        document.querySelector('.number').textContent = secretNumber;
        //css style
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (playerScore > playerHighScore) {
            playerHighScore = playerScore;
            document.querySelector('.highscore').textContent = playerHighScore;
        } else {
            document.querySelector('.highscore').textContent = playerHighScore;
        }

        //When player's guess is wrong
    } else if (guess != secretNumber) {
        if (playerScore >= 1) {
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
            playerScore--;
            document.querySelector('.score').textContent = playerScore;
        } else {
            displayMessage('You Lost! Play again');
            document.querySelector('.score').textContent = playerScore;
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
    playerScore = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = playerScore;

    document.querySelector('.guess').value = '';
    displayMessage('Start guessing.....');

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
