function getComputerChoice(answer) {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}
let computerSelection = getComputerChoice();

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

const outcome = playRound(playerSelection, computerSelection);
let playerScore = 0;
let computerScore = 0;

function playerScoring(outcome) {
    if(outcome == "You win!") {
        return ++playerScore;
    }else {
        return playerScore;
    }
};

function computerScoring(outcome) {
    if (outcome == "You lose.") {
        return ++computerScore
    }else {
        return computerScore;
    }
}

setInterval(getComputerChoice, 5000);

console.log(playerScoring(outcome), computerScoring(outcome));

function game(playerScore, computerScore) {
    if(playerScore == 5) {
        alert("Congratulations, you've won! You scored `${playerScore}` and the computer scored `${computerScore}`. ")
    }else if(computerScore == 5) {
        alert("Sorry, you've lost. You scored `${playerScore}` and the computer scored `${computerScore}`. ")
    }
}

const sumAll = function(num, num2) {
    let sumValue = [];
    let sum = 0;

    for(let i=num; i<=num2; i++) {
        sumValue.push(i);
    }

    for(let i=0; i<sumValue.length; i++) {
        sum += sumValue[i];
    }
};