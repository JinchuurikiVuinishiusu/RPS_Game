



function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice]  
} 
function getHumanChoice () {
    const choice = prompt("rock, paper or scissors?");
    return (newChoice.toLowerCase())  
}


var humanScore = 0;
var computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice ) {
        return (alert("TIE"))
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return ("You win");
    } else {
        computerScore++;
        return ("You lost")
    }
}

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    





