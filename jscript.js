function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
} 


/*function getHumanChoice () {
    const choice = prompt("rock, paper or scissors?");
    return (choice.toLowerCase())  
} */


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
        return ("You lose")
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const popUp = document.querySelector("#pop-up");

const humanChoiceImg = document.querySelector("#human-choice img");
const computerChoiceImg = document.querySelector("#computer-choice img");

const round = document.querySelector(".round");
const roundCount = document.querySelector("#round-count");
const message = document.querySelector(".message");
const playButton = document.querySelector(".play-btn")

const humanScoreE1 = document.querySelector("#human-score");
const computerScoreE1 = document.querySelector("#computer-score");

var humanSelection = "";
var computerSelection = "";

rockButton.addEventListener("click", function(){
    humanSelection = "rock";
    humanChoiceImg.src = "rock.png"
    popUp.style.visibility = "hidden";
    playGame(); 
});
paperButton.addEventListener("click", function(){
    humanSelection = "paper";
    humanChoiceImg.src = "paper.png"
    popUp.style.visibility = "hidden";
    playGame(); 
});
scissorsButton.addEventListener("click", function(){
    humanSelection = "scissors";
    humanChoiceImg.src = "scissors.png"
    popUp.style.visibility = "hidden";
    playGame(); 
});

let currentRound = 1;

function playGame () {
    if (currentRound <= roundCount.value) {
        round.textContent = `{currentRound}`;

        computerSelection = getComputerChoice();
        computerChoiceImg.src = `${computerSelection}.png`;

        message.textContent = playRound(humanSelection, computerSelection);
        humanScoreE1.textContent = humanScore;
        computerScoreE1.textContent = computerScore;

        currentRound++;

        if (currentRound <= roundCount.value) {
            setTimeout(() => {
                popUp.style.visibility = "visible";
            }, 3000);
        } else {
            setTimeout(() => {
                message.textContent = `Final Score - Human:${humanScore}, Computer: ${computerScore}`;
                humanScore = 0;
                computerScore = 0;
                currentRound = 1;
            }, 3000);
        }
    }
}
        playButton.addEventListener("click", function() {
            humanScore = 0;
            computerScore = 0;
            currentRound = 1;
            message.textContent = "";
            popUp.style.visibility = "visible";
        });



