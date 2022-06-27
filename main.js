const result = document.querySelector("#result");
const roundResults = document.querySelector("#roundResults")
const gameWinner = document.querySelector("#winner");

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener('click', () => playRound('Rock', computerPlay()));
btnPaper.addEventListener('click', () => playRound('Paper', computerPlay()));
btnScissors.addEventListener('click', () => playRound('Scissors', computerPlay()));

let playerWins = 0;
let computerWins = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    }

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        result.textContent = "You Lose! Paper beats Rock!";
        updateScore("Computer");
        checkWinner();

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result.textContent = "You Win! Rock beats Scissors!";
        updateScore("Player");
        checkWinner();

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result.textContent = "You Win! Paper beats Rock!";
        updateScore("Player");
        checkWinner();

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result.textContent = "You Lose! Scissors beats Paper!";
        updateScore("Computer");
        checkWinner();

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result.textContent = "You Lose! Rock beats Scissors!";
        updateScore("Computer");
        checkWinner();

    } else {
        result.textContent = "You Win! Scissors beats Paper!";
        updateScore("Player");
        checkWinner();
    }
}


function updateScore(roundWinner) {
    if (roundWinner === "Player") {
        playerWins++;
        updateScoreDisplay();
    } else if (roundWinner === "Computer") {
        computerWins++;
        updateScoreDisplay();
    }
}


function updateScoreDisplay() {
    roundResults.textContent = `Your score: ${playerWins}\n 
                    Computers score: ${computerWins}`;
}


function computerPlay() {
    let randomNum = Math.floor( Math.random() * 3 );

    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function checkWinner() {
    if (playerWins === 5) {
        gameWinner.textContent = "Player Wins!";
    } else if (coputerWins === 5) {
        gameWinner.textContent = "Computer Wins!";
    }
}