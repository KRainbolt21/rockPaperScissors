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
  if(playRound == "You lose.") {
       return ++computerScore;
    } else if(playRound == "You win!") {
        return ++playerScore;
    }
}

console.log(computerScore);