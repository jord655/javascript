let computerMove = '';

const score = {
    wins: 0,
    loss: 0,
    ties: 0
}
let resultOutput= document.getElementById('result-output')

function pickComputerMove() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function playGame(playerMove) {
    computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
            score.ties++;
        } else if (computerMove === 'paper') {
            result = 'You lose';
            score.loss++;
        } else if (computerMove === 'scissors') {
            result = 'You win';
            score.wins++;
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
            score.wins++;
        } else if (computerMove === 'paper') {
            result = 'Tie';
            score.ties++;
        } else if (computerMove === 'scissors') {
            result = 'You lose';
            score.loss++;
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
            score.loss++;
        } else if (computerMove === 'paper') {
            result = 'You win';
            score.wins++;
        } else if (computerMove === 'scissors') {
            result = 'Tie';
            score.ties++;
        }
    }

    resultOutput.innerHTML=`You picked ${playerMove} and the computer picked ${computerMove}. ${result}
    Score - Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}`;

    resultOutput.style.color="white"
}
