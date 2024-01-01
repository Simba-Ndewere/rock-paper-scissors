let answerArray = ["ROCK", "PAPER", "SCISSORS"];
let gameScore = [0,0];


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return answerArray[randomNumber];
}

function playSingeRound(playerChoice, computerChoice){

    if(playerChoice=='ROCK' && computerChoice=='SCISSORS'){
        gameScore[0] = gameScore[0] + 1;
        return 'YOU WIN! ROCK BEATS SCISSORS'
    }else if(computerChoice=='ROCK' && playerChoice=='SCISSORS'){
        gameScore[1] = gameScore[1] + 1;
        return 'YOU LOSE! ROCK BEATS SCISSORS'
    }

    if(playerChoice=='PAPER' && computerChoice=='ROCK'){
        gameScore[0] = gameScore[0] + 1;
        return 'YOU WIN! PAPER BEATS ROCK'
    }else if(computerChoice=='PAPER' && playerChoice=='ROCK'){
        gameScore[1] = gameScore[1] + 1;
        return 'YOU LOSE! PAPER BEATS ROCK'
    }

    if(playerChoice=='SCISSORS' && computerChoice=='PAPER'){
        gameScore[0] = gameScore[0] + 1;
        return 'YOU WIN! SCISSORS BEATS PAPER'
    }else if(computerChoice=='SCISSORS' && playerChoice=='PAPER'){
        gameScore[1] = gameScore[1] + 1;
        return 'YOU LOSE! SCISSORS BEATS PAPER'
    }

    if(playerChoice==computerChoice){
        return 'DRAW!';
    }
}

function game(){
    for(let a = 0; a < 5; a++){
        let result = playSingeRound(getComputerChoice(),getComputerChoice());
        console.log(result);
    }
}

function winner(){
    let playerScore = gameScore[0];
    let computerChoice = gameScore[1];

    if(playerScore < computerChoice){
        return 'COMPUTER WINS!';
    }else if(computerChoice < playerScore){
        return 'PLAYER WWINS!';
    }else{
        return 'DRAW!';
    }
}

console.log(game());
console.log(gameScore);
console.log(winner());