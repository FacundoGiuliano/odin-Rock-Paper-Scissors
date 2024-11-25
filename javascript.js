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
    while (computerScore <= 5 && humanScore <= 5) {
        juego.textContent = `Seleccion jugador: ${playerSelection}

Seleccion computadora: ${computerChoice}

`;

        content.textContent = `Puntaje jugador: ${humanScore}

Puntaje computadora: ${computerScore}

`;

        if (playerSelection === "piedra" && computerChoice === "papel") {
            computerScore++;
            return presultados.textContent = "Resultado: ¡Pierdes! El papel vence a la piedra";
        }
        else if (playerSelection === "papel" && computerChoice === "tijera") {
            computerScore++;
            return presultados.textContent = "Resultado: ¡Pierdes! La tijera vence al papel"
        }
        else if (playerSelection === "tijera" && computerChoice === "piedra") {
            computerScore++;
            return presultados.textContent = "Resultado: ¡Pierdes! La piedra vence a la tijera";
        }
        else if (playerSelection === computerChoice) {
            return presultados.textContent = "Resultado: Empate !";
        }
        else
            humanScore++;
        return presultados.textContent = "Resultado: Ganaste !";
    } if (humanScore == 5) {
        presultados.textContent = `GANADOR: Player`;
    }
    else
        presultados.textContent = `GANADOR: Computer`;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

let humanScore = 0;
let computerScore = 0;
let playerSelection = "--";
let computerChoice = "--";

const resultados = document.querySelector("#resultados");

const presultados = document.createElement("h2");
presultados.textContent = "Resultado: "

const content = document.createElement("div");

content.classList.add("content");

content.textContent = `Puntaje jugador: ${humanScore}

Puntaje computadora: ${computerScore}

`;

const juego = document.createElement("div");

juego.classList.add("juego");

juego.textContent = `Seleccion jugador: ${playerSelection}

Seleccion computadora: ${computerChoice}

`;

resultados.appendChild(presultados);
resultados.appendChild(juego);
resultados.appendChild(content);