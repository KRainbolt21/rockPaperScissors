function getComputerChoice(answer) {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}

let playerChoice = prompt("Choose between rock, paper, or scissors", "");
let computerSelection = getComputerChoice();
let playerSelection = playerChoice.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "paper" && computerSelection == "Scissors" || playerSelection == "scissors" && computerSelection == "Rock" ||playerSelection == "rock" && computerSelection == "Paper") {
        return "You lose.";
    } else if (playerSelection == "paper" && computerSelection == "Rock" || playerSelection == "rock" && computerSelection == "Scissors" || layerSelection == "scissors" && computerSelection == "Paper") {
        return "You win!";
    } else {
        return "It's a tie!";
    }
}

const outcome = playRound(playerSelection, computerSelection);
let playerScore = 0;
let computerScore = 0;