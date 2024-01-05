let answerArray = ["ROCK", "PAPER", "SCISSORS"];
let gameScore = [0,0];
let handsDiv = document.getElementById("hands");

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return answerArray[randomNumber];
}

function playSingleRound(playerChoice, computerChoice){

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

function imageClicked(choice){
    handsDiv.style.display = "none";
    switch(choice){
        case 1: console.log("rock played");
        break;
        case 2: console.log("paper played");
        break;
        case 3: console.log("scissors played");
        break;
    }
    showComputerChoice(choice);
}

function showComputerChoice(userChoice){
    const game = document.querySelector("#game");

    const results = document.createElement("div");
    results.classList.add("results");

    const resultsTop= document.createElement("div");
    resultsTop.classList.add("resultsTop");

    const handsShow = document.createElement("div");
    handsShow.classList.add("handsShow");

    const youPicked = document.createElement("div");
    youPicked.textContent = "YOU";

    const housePicked = document.createElement("div");
    housePicked.textContent = "COMPUTER";

    const firstPick = document.createElement("div");
    const firstPickImage = document.createElement('img');    

    const result = document.createElement("div");
    result.textContent = 'YOU LOSE';
    result.classList.add("result");

    const secondPick = document.createElement("div");
    const secondPickImage = document.createElement('img'); 

    game.appendChild(results);

    results.appendChild(resultsTop);
    results.appendChild(handsShow);

    resultsTop.appendChild(youPicked);
    resultsTop.appendChild(housePicked);

    handsShow.appendChild(firstPick);
    firstPick.appendChild(firstPickImage);

    handsShow.appendChild(result);

    handsShow.appendChild(secondPick);
    secondPick.appendChild(secondPickImage);

    secondPickImage.src = "icons/rock.jpeg";

   // var imgElement = document.createElement('img');
   // const div = document.createElement("div");
   // const hands = document.querySelector("#game");
   // div.classList.add("results");
    
   // const youPicked = document.createElement();


    switch(userChoice){
        case 1: firstPickImage.src = "icons/rock.jpeg";
        break;
        case 2: firstPickImage.src = "icons/paper.jpeg";
        break;
        case 3: firstPickImage.src = "icons/scissors.jpeg";
        break;
    }
   

   // imgElement.width = 300;
   // imgElement.height = 300;
    //div.appendChild(imgElement);
    //hands.appendChild(div);
}
