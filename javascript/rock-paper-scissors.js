let gameScore = [0, 0];
let handsDiv = document.getElementById("hands");
let numToString = ['ROCK', 'PAPER', 'SCISSORS'];

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

function game() {
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

function imageClicked(choice) {
    handsDiv.style.display = "none";
    showComputerChoice(choice);
}

function showComputerChoice(userChoice) {

    let computerChoice = getComputerChoice();
    const game = document.querySelector("#game");

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
    
    switch (userChoice) {
        case 0: firstPickImage.src = "icons/rock.jpeg";
            break;
        case 1: firstPickImage.src = "icons/paper.jpeg";
            break;
        case 2: firstPickImage.src = "icons/scissors.jpeg";
            break;
    }

    switch (computerChoice) {
        case 0: secondPickImage.src = "icons/rock.jpeg";
            break;
        case 1: secondPickImage.src = "icons/paper.jpeg";
            break;
        case 2: secondPickImage.src = "icons/scissors.jpeg";
            break;
    }

    result.textContent = playSingleRound(numToString[userChoice],numToString[computerChoice]);
    
}
