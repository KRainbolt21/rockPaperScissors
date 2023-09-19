function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}

let computerSelection = "";
let playerSelection = "";

document.querySelector("#rock").onclick = function() {
    playerSelection = 'rock';
    getComputerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log(playerSelection);
    console.log(computerSelection);
}

document.querySelector("#paper").onclick = function() {
    playerSelection = "paper";
    getComputerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log(playerSelection);
    console.log(computerSelection);
}

document.querySelector("#scissors").onclick = function() {
    playerSelection = "scissors";
    getComputerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    console.log(playRound(playerSelection, computerSelection));
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