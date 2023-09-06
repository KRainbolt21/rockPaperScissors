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

console.log(playRound(playerSelection, computerSelection));

const outcome = playRound(playerSelection, computerSelection);

function game(outcome, computerScore, playerScore) {
  if(outcome == "You lose.") {
       return ++computerScore;
    } else if(outcome == "You win!") {
        return ++playerScore;
    }
}

let computerScore = 0;
let playerScore = 0;