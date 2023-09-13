function getComputerChoice() {
    let roshambo = ["Rock", "Paper", "Scissors"];

    return roshambo[Math.floor(Math.random() * roshambo.length)];
}

function mainGame(playerSelection, computerSelection) {

    let announceRoundLose = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    let announceRoundWin = `You Win! ${playerSelection} beats ${computerSelection}!`;
    let announceRoundTie = `It's a tie! Both players went for ${computerSelection}!`
    
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
        let roundResult = mainGame(playerSelection, computerSelection);

        console.log(roundResult);
    }

    console.log(`Game ended.`)
    if (playerScore === computerScore) {
        console.log(`It's a tie! Both ended with a score of ${playerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`You win!\nYour score: ${playerScore}\nComputer's score: ${computerScore}`);
    } else {
        console.log(`You lost!\nYour score: ${playerScore}\nComputer's score: ${computerScore}`);
    }
}

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

game();