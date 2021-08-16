let computerWin = 0;
let playerWin = 0;
let computerChoice = "";
let playerChoice = "";

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];

}

function getPlayerChoice() {
    let choice = prompt("What is your choice?", "Rock");
    return choice.toLowerCase();


}
function playGame(computerChoice, playerChoice) {

    let winner = 0;

    if (computerChoice === "rock" && playerChoice == "scissors") {
        computerWin++;
        winner=2;
        return winner;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        computerWin++;
        winner=2;
        return winner;
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        computerWin++;
        winner=2;
        return winner;
    } else if (computerChoice === playerChoice) {
        return winner;

    } else {
        playerWin++;
        winner= 1;
        return winner;
    }


}
function displayRoundResult(winner, computerChoice, playerChoice) {
    if (winner === 1) {
        alert("You won this round!! " + playerChoice + " beats " + computerChoice);
    } else if (winner === 0) {
        alert("Draw!!")
    } else {
        alert("You lost this round!! " + computerChoice + " beats " + playerChoice);
    }

}


function game() {
    let count = parseInt(prompt("How many games do you want to play? ", 3));
    for (let i = 0; i < count; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        displayRoundResult(playGame(computerChoice, playerChoice), computerChoice, playerChoice);

    }
    if (playerWin > computerWin) {
        alert("You won with " + playerWin + " wins.");
    } else if (playerWin == computerWin) {
        alert("It's a tie");
    } else {
        alert("You lost with " + computerWin + " loses.")
    }
}



