function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}

let computerSelection = "";
let playerSelection = "";
const roundExplanation = document.createElement("div");
let outcome = "";
const score = document.createElement("div");
const computerScore = document.createElement("p");
const playerScore = document.createElement("p");

document.querySelector("#rock").onclick = function() {
    playerSelection = 'rock';
    getComputerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    const mainPage = document.querySelector(".mainPage");
    roundExplanation.classList.add("explain");
    roundExplanation.textContent = `You chose ${playerSelection} and the computer chose
    ${computerSelection}. ${playRound(playerSelection, computerSelection)}`;
    mainPage.appendChild(roundExplanation);

    outcome = playRound(playerSelection, computerSelection);
    keepScore(outcome);

    score.classList.add("scoring");
    computerScore.textContent = `Computer score: ${computerScoring}`;
    playerScore.textContent = `Player score: ${playerScoring}`
    mainPage.appendChild(score);
    score.appendChild(computerScore);
    score.appendChild(playerScore);
}

document.querySelector("#paper").onclick = function() {
    playerSelection = "paper";
    getComputerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    const mainPage = document.querySelector(".mainPage");
    roundExplanation.classList.add("explain");
    roundExplanation.textContent = `You chose ${playerSelection} and the computer chose
    ${computerSelection}. ${playRound(playerSelection, computerSelection)}`; 
    mainPage.appendChild(roundExplanation);

    outcome = playRound(playerSelection, computerSelection);
    keepScore(outcome);

    score.classList.add("scoring");
    computerScore.textContent = `Computer score: ${computerScoring}`;
    playerScore.textContent = `Player score: ${playerScoring}`
    mainPage.appendChild(score);
    score.appendChild(computerScore);
    score.appendChild(playerScore);
}

document.querySelector("#scissors").onclick = function() {
    playerSelection = "scissors";
    getComputerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    const mainPage = document.querySelector(".mainPage");
    roundExplanation.classList.add("explain");
    roundExplanation.textContent = `You chose ${playerSelection} and the computer chose
    ${computerSelection}. ${playRound(playerSelection,computerSelection)}`;
    mainPage.appendChild(roundExplanation);

    outcome = playRound(playerSelection, computerSelection);
    keepScore(outcome);

    score.classList.add("scoring");
    computerScore.textContent = `Computer score: ${computerScoring}`;
    playerScore.textContent = `Player score: ${playerScoring}`
    mainPage.appendChild(score);
    score.appendChild(computerScore);
    score.appendChild(playerScore);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "paper" && computerSelection == "scissors" || 
       playerSelection == "scissors" && computerSelection == "rock" ||
       playerSelection == "rock" && computerSelection == "paper") {
        return "You lose.";
    } else if (playerSelection == "paper" && computerSelection == "rock" || 
               playerSelection == "rock" && computerSelection == "scissors" || 
               playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    } else {
        return "It's a tie!";
    }
    
}

let playerScoring = 0;
let computerScoring = 0;

function keepScore(outcome) {
    if(outcome == "You win!") {
        return ++playerScoring;
    } else if(outcome == "You lose.") {
        return ++computerScoring;
    }
}

function declareWinner(playerScoring, computerScoring) {
    if(playerScoring == 5) {
        return "Congratulations, you won the game!";
    } else if(computerScoring == 5) {
        return "Sorry, you lost the game. Better luck next time!"
    }
}