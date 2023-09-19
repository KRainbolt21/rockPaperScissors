function getComputerChoice(answer) {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}
let computerSelection = getComputerChoice();

const buttons = document.querySelectorAll('button');

let playerSelection = "";

document.querySelector("#rock").onclick = function() {
    playerSelection = 'rock';
    console.log(playerSelection);
    console.log(computerSelection);
}

document.querySelector("#paper").onclick = function() {
    playerSelection = "paper";
    console.log(playerSelection);
    console.log(compuerSelection);
}

document.querySelector("#scissors").onclick = function() {
    playerSelection = "scissors";
    console.log(playerSelection);
    console.log(computerSelection);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "paper" && computerSelection == "Scissors" || 
       playerSelection == "scissors" && computerSelection == "Rock" ||
       playerSelection == "rock" && computerSelection == "Paper") {
        return "You lose.";
    } else if (playerSelection == "paper" && computerSelection == "Rock" || 
               playerSelection == "rock" && computerSelection == "Scissors" || 
               playerSelection == "scissors" && computerSelection == "Paper") {
        return "You win!";
    } else {
        return "It's a tie!";
    }
}