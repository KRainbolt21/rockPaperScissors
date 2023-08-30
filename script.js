function getComputerChoice(answer) {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}

let playerSelection = prompt("Choose between rock, paper, or scissors", "");
let computerSelection = getComputerChoice();

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "Rock") {
        alert ("Tie! Please play again.");
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        alert ("You win! Paper beats rock.");
    }
}