let round = 0;
let playerScore = 0;
let computerScore = 0;

let playerChoiceBox = document.querySelector("#player-choice");
let computerChoiceBox = document.querySelector("#computer-choice");
let resultChoiceBox = document.querySelector("#result-choice");

let playerScoreBox = document.querySelector("#player-score-value");
let computerScoreBox = document.querySelector("#computer-score-value");
let roundBox = document.querySelector("#round-value");

function reset() {
  alert("Resetting game");
  playerScore = 0;
  round = 0;
  computerScore = 0;
  playerScoreBox.innerText = playerScore;
  roundBox.innerText = round;
  computerScoreBox.innerText = computerScore;
  playerChoiceBox.innerText = "";
  computerChoiceBox.innerText = "";
  resultChoiceBox.innerText = "";
}

function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function evaluateRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
    return "Win";
  } else {
    return "Lose";
  }
}

function displayResults(playerChoice, computerChoice, result) {
  playerChoiceBox.innerText = playerChoice;
  computerChoiceBox.innerText = computerChoice;
  resultChoiceBox.innerText = result;
}

function updateScoreboard(result) {
  if (result === "Win") {
    playerScore++;
    playerScoreBox.innerText = playerScore;
    round++;
    roundBox.innerText = round;
    result = "";
  } else if (result === "Lose" ) {
    computerScore++;
    computerScoreBox.innerText = computerScore;
    round++;
    roundBox.innerText = round;
  }
}

function checkForWin() {
  if (playerScore === 4) {
    alert("You Win!");
    reset();
  } else if (computerScore === 4) {
    alert("You Lose!");
    reset();
  }
}

function playRound(playerChoice) {
  let computerChoice = computerPlay();
  let result = evaluateRound(playerChoice, computerChoice);
  displayResults(playerChoice, computerChoice, result);
  updateScoreboard(result);
  setTimeout(checkForWin, 1);
}
