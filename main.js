// game();

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener('click', () => playRound('Rock', computerPlay()));
btnPaper.addEventListener('click', () => playRound('Paper', computerPlay()));
btnScissors.addEventListener('click', () => playRound('Scissors', computerPlay()));

/*
function game() {
    let playerMove;
    let computerMove;
    let roundResult;
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 1; i < 6; i++) {
        playerMove = playerPlay();
        computerMove = computerPlay();
        roundResult = playRound(playerMove, computerMove);

        console.log(roundResult);

        if (roundResult.includes("Win")) {
            playerWins++;
        } else if (roundResult.includes("Lose")) {
            computerWins++;
        }
    }

    winner(playerWins, computerWins);
}
*/

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


function playerPlay() {
    let userResponse
    
    while(1) {
        userResponse = prompt("Enter your move", "");
    
        if (userResponse === "" || userResponse === null) {
            alert("Invalid response. Please try again.");
        } else {
            userResponse = userResponse[0].toUpperCase() 
                            + userResponse.toLowerCase().slice(1);

            if (userResponse === "Rock") {
                return "Rock";
            } else if (userResponse === "Paper") {
                return "Paper";
            } else if (userResponse === "Scissors") {
                return "Scissors";
            } else {
                alert("Invalid response. Please try again");
            }
        }
    }

}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors!";
    } else {
        return "You Win! Scissors beats Paper!";
    }
}


function winner(numPlayerWins, numComputerWins) {
    if (numPlayerWins === numComputerWins) {
        console.log("It's a tie!");
    } else if (numPlayerWins >= numComputerWins) {
        console.log(`You win! ${numPlayerWins} vs ${numComputerWins}.`);
    } else {
        console.log(`You lose! ${numPlayerWins} vs ${numComputerWins}.`);
    }
}