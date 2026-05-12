const buttons = document.querySelectorAll('.choice-btn');
const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('game-result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resetBtn = document.getElementById('reset-btn');

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const choices = ['rock', 'paper', 'scissors'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (gameOver) return;
        
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const result = getResult(playerChoice, computerChoice);
        
        playerDisplay.textContent = `Player: ${playerChoice}`;
        computerDisplay.textContent =` Computer: ${computerChoice}`;
        resultDisplay.textContent = result;
        resultDisplay.style.color = "black";

        if (result === "YOU WIN!") {
            playerScore++;
        } else if (result === "YOU LOSE!") {
            computerScore++;
        }

        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore; 

        checkWinner();
    });
});

function checkWinner() {
    if (playerScore === 10) {
        resultDisplay.textContent = "🏆 VICTORY! You are the champion!";
        resultDisplay.style.color = "#2ecc71";
        gameOver = true;
    } else if (computerScore === 10) {
        resultDisplay.textContent = "💀 GAME OVER! The machine won...";
        resultDisplay.style.color = "#e74c3c";
        gameOver = true;
    }
}
        
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    playerDisplay.textContent = "Player: ";
    computerDisplay.textContent = "Computer: ";
    resultDisplay.textContent = "Choose your weapon!";
    resultDisplay.style.color = "black";
});

function getResult(player, computer) {
    if (player === computer) 
        return "IT'S A TIE!";
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "YOU WIN!";
    } else {
        return "YOU LOSE!";
    }
}



