function getComputerChoice(answer) {
    const answer = ["Rock", "Paper", "Scissors"];
    return answer[Math.floor((Math.random()*answer.length))];
}

console.log(getComputerChoice());