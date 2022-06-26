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

console.log(playRound("Rock", "Rock"));
console.log(playRound("Rock", "Paper"));
console.log(playRound("Rock", "Scissors"));
console.log(playRound("Paper", "Rock"));
console.log(playRound("Paper", "Paper"));
console.log(playRound("Paper", "Scissors"));
console.log(playRound("Scissors", "Rock"));
console.log(playRound("Scissors", "Paper"));
console.log(playRound("Scissors", "Scissors"));