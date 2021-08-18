//@ts-check
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(human, robot, answer){
    let hDistance = getAbsoluteDistance(answer, human);
    let rDistance = getAbsoluteDistance(answer, robot);

    if (hDistance < rDistance) {
        return true;
    } else if (rDistance < hDistance) {
        return false;
    } else {
        return true;
    } 
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

function getAbsoluteDistance(x, y) {
    return Math.abs(x - y);
}
    