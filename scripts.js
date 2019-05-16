function computerPlay(){
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getUserInput(){
  let choice = prompt('Rock, Paper, or Scissors?').toLowerCase();
  return choice;
}

function playerPlay(){
  console.log("Welcome to Rock, Paper, Scissors. Choose your weapon.");
  let playerChoice = "";
  let validChoice = false;
  while (validChoice == false){
    if (playerChoice == "paper" || playerChoice == "rock" || playerChoice == "scissors") {
      validChoice = true;
    } else {
      playerChoice = getUserInput();
    }
  }
  return playerChoice;
}

function playRound(pS, cS){
  if (pS === cS) {
    console.log("Tie");
    return "Tie";
  } else if ((pS == "rock" && cS == "scissors") || (pS == "paper" && cS == "rock") || (pS == "scissors" && cS == "paper")) {
    console.log("Win");
    return "Win";
  } else {
    console.log("Lose");
    return "Lose";
  }
};


function game() {
  let rounds = 0;
  let playerScore = 0;
  let computerScore = 0;

  while (rounds < 5) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();

    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);

    let result = playRound(playerSelection, computerSelection);

    if (result == "Win"){
      alert("You won this round");
      playerScore++;
      rounds++;
    } else if (result == "Lose"){
      alert("The computer won this round");
      computerScore++
      rounds++;
    } else {
      alert("You tied");
    }
  }
  
  if (playerScore > computerScore){
    alert("You won the best of 5!");
  } else {
    alert("The computer won the best of 5!");
  }
}

game();