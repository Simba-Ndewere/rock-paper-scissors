let answerArray = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return answerArray[randomNumber];
}

function play(playerChoice, computerChoice){
    console.log(playerChoice);
    console.log(computerChoice);
    
    if(playerChoice=='ROCK' && computerChoice=='SCISSORS'){
        return 'YOU WIN! ROCK BEATS SCISSORS'
    }else if(computerChoice=='ROCK' && playerChoice=='SCISSORS'){
        return 'YOU LOSE! ROCK BEATS SCISSORS'
    }

    if(playerChoice=='PAPER' && computerChoice=='ROCK'){
        return 'YOU WIN! PAPER BEATS ROCK'
    }else if(computerChoice=='PAPER' && playerChoice=='ROCK'){
        return 'YOU LOSE! PAPER BEATS ROCK'
    }

    if(playerChoice=='SCISSORS' && computerChoice=='PAPER'){
        return 'YOU WIN! SCISSORS BEATS PAPER'
    }else if(computerChoice=='SCISSORS' && playerChoice=='PAPER'){
        return 'YOU LOSE! SCISSORS BEATS PAPER'
    }

    if(playerChoice==computerChoice){
        return 'DRAW!';
    }

}

console.log(play(getComputerChoice(),getComputerChoice()));