const buttons = document.querySelectorAll('.choice-btn');
const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('game-result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const result = getResult(playerChoice, computerChoice);
        
        playerDisplay.textContent = Player: ${playerChoice};
        computerDisplay.textContent = Computer: ${computerChoice};
        resultDisplay.textContent = 
        result;

        


