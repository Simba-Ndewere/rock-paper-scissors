let gameScore = [0, 0];
let handsDiv = document.getElementById("hands");
let numToString = ['ROCK', 'PAPER', 'SCISSORS'];
const game = document.querySelector("#game");
const footer = document.querySelector(".footer");
const middle = document.querySelector(".middle");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    return randomNumber;
}

function playSingleRound(playerChoice, computerChoice) {

    if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS') {
        gameScore[0] = gameScore[0] + 1;
        return 'YOU WIN'
    } else if (computerChoice == 'ROCK' && playerChoice == 'SCISSORS') {
        gameScore[1] = gameScore[1] + 1;
        return 'YOU LOSE'
    }

    if (playerChoice == 'PAPER' && computerChoice == 'ROCK') {
        gameScore[0] = gameScore[0] + 1;
        return 'YOU WIN'
    } else if (computerChoice == 'PAPER' && playerChoice == 'ROCK') {
        gameScore[1] = gameScore[1] + 1;
        return 'YOU LOSE'
    }

    if (playerChoice == 'SCISSORS' && computerChoice == 'PAPER') {
        gameScore[0] = gameScore[0] + 1;
        return 'YOU WIN'
    } else if (computerChoice == 'SCISSORS' && playerChoice == 'PAPER') {
        gameScore[1] = gameScore[1] + 1;
        return 'YOU LOSE'
    }

    if (playerChoice == computerChoice) {
        return 'DRAW';
    }
}

function gameStart(choice) {
    handsDiv.style.display = "none";
    showComputerChoice(choice);
}

function showComputerChoice(userChoice) {

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

    middle.appendChild(results);

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

function countDown(userChoice) {
    let computerChoice = getComputerChoice();
    const result = document.querySelector(".result");
    const compScore = document.querySelector("#num2");
    const handsShow = document.querySelector(".handsShow");
    const secondPick = document.createElement("div");
    const secondPickImage = document.createElement('img');
    const userScore = document.querySelector("#num1");
    const countDownDiv = document.createElement("div");
    const results = document.querySelector(".results");

    countDownDiv.classList.add("countDownDiv");
    handsShow.appendChild(countDownDiv);
    secondPick.appendChild(secondPickImage);

    const continueButton = document.createElement("button");
    continueButton.textContent = "CONTINUE";
    continueButton.addEventListener("click", continueClicked);
    
    const divButton = document.createElement("div");
    results.appendChild(divButton);
    divButton.classList.add("divButton");
    divButton.appendChild(continueButton);
    continueButton.style.display = "none";

    let count = 2;
    const timer = setInterval(function () {

        countDownDiv.textContent = count;
        count--;
        if (count === -1) {
            clearInterval(timer);
            console.log(computerChoice);
            handsShow.removeChild(countDownDiv);
            handsShow.appendChild(secondPick);
            result.textContent = playSingleRound(numToString[userChoice], numToString[computerChoice]);
            userScore.textContent = gameScore[0];
            compScore.textContent = gameScore[1];
            gameDone = checkScores();
            if (!gameDone) {
                continueButton.style.display = "block";
                /*const continueButton = document.createElement("button");
                continueButton.textContent = "CONTINUE";
                continueButton.addEventListener("click", continueClicked);
                results.appendChild(continueButton);*/
            } else {
                gameOverModal();
            }
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
    const results = document.querySelector(".results");
    middle.removeChild(results);
    handsDiv.style.display = "block";
}

function checkScores() {
    for (let a = 0; a < gameScore.length; a++) {
        if (gameScore[a] == 3) {
            return true;
        }
    }
}

function gameOverModal() {

    const modal = document.createElement("div");
    const existingDiv = document.querySelector(".results");
    modal.classList.add("modal");
    const title = document.createElement("div");
    title.classList.add("title");
    modal.appendChild(title);
    title.textContent = "GAME OVER"
    const gameResult = document.createElement("div");
    gameResult.classList.add("gameResult");
    modal.appendChild(gameResult);
    if (gameScore[0] > gameScore[1]) {
        gameResult.textContent = "YOU WON";
    } else {
        gameResult.textContent = "COMPUTER WON";
    }
    const button = document.createElement("button");
    button.textContent = "NEW GAME";
    modal.appendChild(button);
    button.addEventListener("click", restartGame);
    existingDiv.appendChild(modal);

    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.zIndex = "999";
    modal.style.display = "block";
}

function restartGame() {
    location.reload();
}






