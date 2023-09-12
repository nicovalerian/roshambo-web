function getComputerChoice() {
    let roshambo = ["Rock", "Paper", "Scissors"];

    return roshambo[Math.floor(Math.random() * roshambo.length)];
}