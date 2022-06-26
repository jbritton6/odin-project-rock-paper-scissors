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

console.log(playerPlay());