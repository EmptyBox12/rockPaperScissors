let computerWin = 0;
let playerWin = 0;
let computerChoice = "";
let playerChoice = "";
let count = 0;


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];

}
const choices = document.querySelectorAll(".choice");

choices.forEach(choice => choice.addEventListener("click", function () {
        let pChoice = this.value;
        playerChoice = pChoice;
        computerChoice = getComputerChoice();
        
        displayRoundResult(playGame(computerChoice, playerChoice), computerChoice, playerChoice);
        
        
        if(playerWin==5 || computerWin==5){
            result();
            playerWin=0;
            computerWin=0;
        }

    }));
    




function playGame(computerChoice, playerChoice) {

    let winner = 0;

    if (computerChoice === "rock" && playerChoice == "scissors") {
        computerWin++;
        winner = 2;

        return winner;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        computerWin++;
        winner = 2;

        return winner;
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        computerWin++;
        winner = 2;

        return winner;
    } else if (computerChoice === playerChoice) {

        return winner;


    } else {
        playerWin++;
        winner = 1;

        return winner;
    }


}
function displayRoundResult(winner, computerChoice, playerChoice) {
    document.querySelector("#scores").textContent = playerWin+" : "+computerWin;
    
    if (winner === 1) {
        document.querySelector("#info").textContent="You won this round!! " + playerChoice + " beats " + computerChoice;
    } else if (winner === 0) {
        document.querySelector("#info").textContent="Draw!!";
    } else {
        document.querySelector("#info").textContent="You lost this round!! " + computerChoice + " beats " + playerChoice;
    }

}


function result() {


    if (playerWin > computerWin) {
        document.querySelector("#info").textContent="You won with " + playerWin + " wins.";
    } else if (playerWin == computerWin) {
        document.querySelector("#info").textContent="It's a tie";
    } else {
        document.querySelector("#info").textContent="You lost with " + computerWin + " loses.";
    }
}




