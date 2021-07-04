function computerPlay() {
    let random = ['Rock', 'Paper', 'Scissors'];
    return random[Math.floor(Math.random() * 3)];
}

console.log(computerPlay());