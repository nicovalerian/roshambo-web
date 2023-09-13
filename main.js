function getComputerChoice() {
    let roshambo = ["Rock", "Paper", "Scissors"];

    return roshambo[Math.floor(Math.random() * roshambo.length)];
}

function mainGame(playerSelection, computerSelection) {

    let announceRoundLose = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    let announceRoundWin = `You Win! ${playerSelection} beats ${computerSelection}!`;
    let announceRoundTie = `It's a tie! Both players went for a ${computerSelection}!`
    
    if (playerSelection === computerSelection.toLowerCase()) {
        return announceRoundTie;
    }
    else if (((computerSelection === "Rock") && (playerSelection === "paper")) || 
    ((computerSelection === "Paper") && (playerSelection === "scissors")) || 
    ((computerSelection === "Scissors") && (playerSelection === "rock"))) {
        playerScore++;
        return announceRoundWin;
    } else {
        computerScore++;
        return announceRoundLose;
    }
}

function game() {

    while (roundsPlayed < 5) {
        let playerPrompt = prompt("Pick! Rock, paper, or scissors?");
        let playerSelection = playerPrompt.toLowerCase();
        let computerSelection = getComputerChoice();
        roundsPlayed++;
        mainGame(playerSelection, computerSelection);
    }
}

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

game();