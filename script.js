function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}

let computerSelection = "";
let playerSelection = "";

document.querySelector("#rock").onclick = function() {
    playerSelection = 'rock';
    getComputerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    const roundExplanation = document.createElement("div");
    const mainPage = document.querySelector(".mainPage");
    roundExplanation.classList.add("explain");
    roundExplanation.textContent = `You chose ${playerSelection} and the computer chose
    ${computerSelection}. ${roundOutcome}`;
    mainPage.appendChild(roundExplanation);
}

document.querySelector("#paper").onclick = function() {
    playerSelection = "paper";
    getComputerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    const mainPage = document.querySelector(".mainPage");
    const roundExplanation = document.createElement("div");
    roundExplanation.classList.add("explain");
    roundExplanation.textContent = `You chose ${playerSelection} and the computer chose
    ${computerSelection}. ${roundOutcome}`; 
    mainPage.appendChild(roundExplanation);

}

document.querySelector("#scissors").onclick = function() {
    playerSelection = "scissors";
    getComputerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    const mainPage = document.querySelector(".mainPage");
    const roundExplanation = document.createElement("div");
    roundExplanation.classList.add("explain");
    roundExplanation.textContent = `You chose ${playerSelection} and the computer chose
    ${computerSelection}. ${roundOutcome}`;
    mainPage.appendChild(roundExplanation);

}
let roundOutcome = playRound(playerSelection, computerSelection);

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