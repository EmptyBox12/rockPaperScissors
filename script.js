let computerWin = 0;
let playerWin = 0;
let computerChoice = "";
let playerChoice="";


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];

}
const choices = document.querySelectorAll(".choice");
choices.forEach(choice => choice.addEventListener("click", function() {
    let pChoice = this.value;
    playerChoice = pChoice;
    computerChoice= getComputerChoice();
    playGame(computerChoice , playerChoice);
    
    
}));


function playGame(computerChoice, playerChoice) {

    let winner = 0;

    if (computerChoice === "rock" && playerChoice == "scissors") {
        computerWin++;
        winner=2;
        alert("You lost");
        return winner;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        computerWin++;
        winner=2;
        alert("Lost")
        return winner;
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        computerWin++;
        winner=2;
        alert("Lost");
        return winner;
    } else if (computerChoice === playerChoice) {
        alert("Tie");
        return winner;
        

    } else {
        playerWin++;
        winner= 1;
        alert("Win");
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
    for (let i = 0; i < 5; i++) {
       
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




