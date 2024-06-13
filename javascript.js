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

function getHumanChoice() {
    return choice = prompt("Ingrese 'piedra', 'papel' o 'tijera'").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    i++;
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === "piedra" && computerChoice === "papel") {
        computerScore++;
        return console.log("¡Pierdes! El papel vence a la piedra");
    }
    else if (humanChoice === "papel" && computerChoice === "tijera") {
        computerScore++;
        return console.log("¡Pierdes! La tijera vence al papel")
    }
    else if (humanChoice === "tijera" && computerChoice === "piedra") {
        computerScore++;
        return console.log("¡Pierdes! La piedra vence a la tijera");
    }
    else if (humanChoice === computerChoice) {
        return console.log("Empate !");
    }
    else
        humanScore++;
        return console.log("Ganaste !");
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

while (i <= 4)
    playGame();

console.log("Puntaje: "+humanScore);
console.log("Puntaje computadora: "+computerScore);