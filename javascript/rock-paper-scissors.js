let gameScore = [0, 0];
let handsDiv = document.getElementById("hands");
let numToString = ['ROCK', 'PAPER', 'SCISSORS'];
const game = document.querySelector("#game");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    return randomNumber;
}

function playSingleRound(playerChoice, computerChoice) {

    if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS') {
        gameScore[0] = gameScore[0] + 1;
        return 'YOU WIN!'
    } else if (computerChoice == 'ROCK' && playerChoice == 'SCISSORS') {
        gameScore[1] = gameScore[1] + 1;
        return 'YOU LOSE!'
    }

    if (playerChoice == 'PAPER' && computerChoice == 'ROCK') {
        gameScore[0] = gameScore[0] + 1;
        return 'YOU WIN!'
    } else if (computerChoice == 'PAPER' && playerChoice == 'ROCK') {
        gameScore[1] = gameScore[1] + 1;
        return 'YOU LOSE!'
    }

    if (playerChoice == 'SCISSORS' && computerChoice == 'PAPER') {
        gameScore[0] = gameScore[0] + 1;
        return 'YOU WIN!'
    } else if (computerChoice == 'SCISSORS' && playerChoice == 'PAPER') {
        gameScore[1] = gameScore[1] + 1;
        return 'YOU LOSE!'
    }

    if (playerChoice == computerChoice) {
        return 'DRAW!';
    }
}

function gamePlay() {
    for (let a = 0; a < 5; a++) {
        //let result = playSingeRound(getComputerChoice(), getComputerChoice());
        console.log(result);
    }
}

function winner() {
    let playerScore = gameScore[0];
    let computerChoice = gameScore[1];

    if (playerScore < computerChoice) {
        return 'COMPUTER WINS!';
    } else if (computerChoice < playerScore) {
        return 'PLAYER WWINS!';
    } else {
        return 'DRAW!';
    }
}

function gameStart(choice) {
    handsDiv.style.display = "none";
    showComputerChoice(choice);
}

function showComputerChoice(userChoice) {
    console.log("score");
    console.log(gameScore);
    let num = 0;
    const results = document.createElement("div");
    results.classList.add("results");

    const resultsTop = document.createElement("div");
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
    result.classList.add("result");

    game.appendChild(results);

    results.appendChild(resultsTop);
    results.appendChild(handsShow);

    resultsTop.appendChild(youPicked);
    resultsTop.appendChild(housePicked);

    handsShow.appendChild(firstPick);
    firstPick.appendChild(firstPickImage);

    handsShow.appendChild(result);
    
    switch (userChoice) {
        case 0: firstPickImage.src = "icons/rock.jpeg";
            break;
        case 1: firstPickImage.src = "icons/paper.jpeg";
            break;
        case 2: firstPickImage.src = "icons/scissors.jpeg";
            break;
    }
    countDown(userChoice);
}

function countDown(userChoice){
    let computerChoice = getComputerChoice();
    const result = document.querySelector(".result");
    const compScore = document.querySelector("#num2");
    const handsShow = document.querySelector(".handsShow");
    const secondPick = document.createElement("div");
    const secondPickImage = document.createElement('img');
    const results = document.querySelector(".results");
    const userScore = document.querySelector("#num1");
    const countDownDiv = document.createElement("div");

    countDownDiv.classList.add("countDownDiv");
    handsShow.appendChild(countDownDiv);
    secondPick.appendChild(secondPickImage);
    
    let count = 3;
    const timer = setInterval(function() {

        countDownDiv.textContent = count;
        count--;
        if (count === -1) {
          clearInterval(timer);
          console.log(computerChoice);
          handsShow.removeChild(countDownDiv);
          handsShow.appendChild(secondPick);
          result.textContent = playSingleRound(numToString[userChoice],numToString[computerChoice]);
          userScore.textContent = gameScore[0];
          compScore.textContent = gameScore[1];
          const continueButton = document.createElement("button");
          continueButton.textContent = "CONTINUE";
          continueButton.addEventListener("click", continueClicked);
          results.appendChild(continueButton);
        }
        
      }, 1000);
    
      switch (computerChoice) {
        case 0: secondPickImage.src = "icons/rock.jpeg";
            break;
        case 1: secondPickImage.src = "icons/paper.jpeg";
            break;
        case 2: secondPickImage.src = "icons/scissors.jpeg";
            break;
    }
   
}

function continueClicked() {
    //alert("Button clicked!");
    const results = document.querySelector(".results");
    game.removeChild(results);
    handsDiv.style.display = "block";
  }
  



