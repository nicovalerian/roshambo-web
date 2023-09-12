function getComputerChoice() {
    let roshambo = ["Rock", "Paper", "Scissors"];

    return roshambo[Math.floor(Math.random() * roshambo.length)];
}

function mainGame() {
    let playerPrompt = prompt("Pick! Rock, paper, or scissors?");
    let playerSelection = playerPrompt.toLowerCase();
    let computerSelection = getComputerChoice();

    let announceRoundLose = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    let announceRoundWin = `You Win! ${playerSelection} beats ${computerSelection}!`;
    

    if ((computerSelection == "Rock") && (playerSelection != "Paper")) {
        return 
    }
}
