function getComputerChoice(answer) {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}

let playerChoice = prompt("Choose between rock, paper, or scissors", "");
let computerSelection = getComputerChoice();
let playerSelection = playerChoice.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "paper" && computerSelection == "Scissors") {
        return "You lose.";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return "You win!";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "You lose.";
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "You win!";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You lose.";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return "You win!";
    } else {
        return "It's a tie!";
    }
}

let computerScore = 0;
let playerScore = 0;

function game(playRound) {
  if(alert == "You lose. Scissors beat paper" || alert == "You lose. Rock beats scissors" || alert == "You lose. Paper beats rock") {
       return computerScore++;
    } else if(alert == "You win! Paper beats rock" || alert == "You win! rock beats scissors" || alert == "You win! Scissors beat paper") {
        return playerScore++;
    }
}

console.log(computerScore);