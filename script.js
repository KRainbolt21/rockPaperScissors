function getComputerChoice(answer) {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}

let playerChoice = prompt("Choose between rock, paper, or scissors", "");
let computerSelection = getComputerChoice();
let playerSelection = playerChoice.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "paper" && computerSelection == "Scissors") {
        alert("You lose. Scissors beat paper");
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        alert("You win! Paper beats rock.");
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        alert("You lose. Rock beats scissors");
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        alert("You win! Rock beats scissors");
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        alert("You lose. Paper beats rock");
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        alert("You win! Scissors beat paper");
    } else {
        alert("Tie! Please try again");
    }
}
