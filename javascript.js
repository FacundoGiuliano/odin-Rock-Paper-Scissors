
let i = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.3)
        return "piedra";
    else if (choice > 0.3 && choice < 0.6)
        return "papel";
    else
        return "tijera";
}

function playRound(playerSelection, computerChoice) {
    i++;
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerChoice);
    if (playerSelection === "piedra" && computerChoice === "papel") {
        computerScore++;
        return console.log("¡Pierdes! El papel vence a la piedra");
    }
    else if (playerSelection === "papel" && computerChoice === "tijera") {
        computerScore++;
        return console.log("¡Pierdes! La tijera vence al papel")
    }
    else if (playerSelection === "tijera" && computerChoice === "piedra") {
        computerScore++;
        return console.log("¡Pierdes! La piedra vence a la tijera");
    }
    else if (playerSelection === computerChoice) {
        return console.log("Empate !");
    }
    else
        humanScore++;
    return console.log("Ganaste !");
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

console.log("Puntaje: " + humanScore);
console.log("Puntaje computadora: " + computerScore);