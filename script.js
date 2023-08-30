function getComputerChoice(answer) {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor((Math.random()*choice.length))];
}

function playerSelection(response) {
    prompt("Choose between rock, paper, or scissors.");
}