// DOM Variables
let userScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const scoreboard = document.getElementById("scoreboard");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const results = document.querySelector(".result");

// Computer's Choice
function getComputerChoice() {
    let random = ['Rock', 'Paper', 'Scissors'];
    return random[Math.floor(Math.random() * 3)];
}

// Winning Function
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    results.innerHTML = "You win! " + userChoice + " defeats " + computerChoice;
}

// Losing Function
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    results.innerHTML = "You lost! " + computerChoice + " defeats " + userChoice;
}

// Draw Function
function draw(userChoice, computerChoice) {
    results.innerHTML = "Draw! You both chose " + userChoice;
}

// Game Logic
function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        return win(userChoice, computerChoice);
    } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
        return win(userChoice, computerChoice);
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
        return win(userChoice, computerChoice);
    } else if (userChoice === 'Rock' && computerChoice === 'Paper') {
        return lose(userChoice, computerChoice);
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
        return lose(userChoice, computerChoice);
    } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
        return lose(userChoice, computerChoice);
    } else if (userChoice === computerChoice) {
        return draw(userChoice, computerChoice);
    };
    /* switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorrock":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    } */
}

function main() {
    rock.addEventListener('click', function() {
        game("Rock");
    })
    paper.addEventListener('click', function() {
        game("Paper");
    })
    scissors.addEventListener('click', function() {
        game("Scissors");
    })
}

main();

// Player's Choice Prompt
/* function playerChoice() {
    let weapon = prompt("Choose your weapon: Rock, Paper, or Scissors?");
    return weapon.toLowerCase();
} */
