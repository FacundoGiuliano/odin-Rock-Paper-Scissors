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
    i = i +1;
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === "piedra" && computerChoice === "papel") {
        computerScore += 1;
        return console.log("¡Pierdes! El papel vence a la piedra");
    }
    else if (humanChoice === "papel" && computerChoice === "tijera") {
        computerScore += 1;
        return console.log("¡Pierdes! La tijera vence al papel")
    }
    else if (humanChoice === "tijera" && computerChoice === "piedra") {
        computerScore += 1;
        return console.log("¡Pierdes! La piedra vence a la tijera");
    }
    else if (humanChoice === computerChoice) {
        return console.log("Empate !");
    }
    else
        humanScore += 1;
        return console.log("Ganaste !");
}

// playRound(humanSelection, computerSelection);

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

while (i <= 4)
    playGame();

console.log(humanScore);
console.log(computerScore);

// console.log(getComputerChoice());


// console.log(getHumanChoice());