let answerArray = ["ROCK", "PAPER", "SCISSORS"];
let randomNumber = Math.floor(Math.random() * 3);

function getComputerChoice(){
    return answerArray[randomNumber];
}

console.log(getComputerChoice());