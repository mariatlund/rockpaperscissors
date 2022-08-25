start();

function start() {
  console.log("start");
  // add event listeners to buttons
  document.querySelector(".rock").addEventListener("click", userRock);
  document.querySelector(".paper").addEventListener("click", userPaper);
  document.querySelector(".scissors").addEventListener("click", userScissors);
}

let userSelection = "";

function userRock() {
  userSelection = "rock";
  makeRandomComputerChoice();
}

function userPaper() {
  userSelection = "paper";
  makeRandomComputerChoice();
}

function userScissors() {
  userSelection = "scissors";
  makeRandomComputerChoice();
}

let computerChoice = "";

function makeRandomComputerChoice() {
  // random math to determine computer choice
  let textArray = ["rock", "paper", "scissors"];

  let randomOption = Math.floor(Math.random() * textArray.length);

  computerChoice = textArray[randomOption];

  console.log("makerandomcomputerchoice", randomOption);

  showAnimations();
}

function showAnimations() {
  // start animation shake
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  document.querySelector("#player1").addEventListener("animationend", endAnimations);
}

function endAnimations() {
  //   remove shake animations
  document.querySelector("#player1").classList.toggle("shake");
  document.querySelector("#player2").classList.toggle("shake");

  // show selected user option
  if (userSelection === "rock") {
    document.querySelector("#player1").classList.add("rock");
  }

  if (userSelection === "paper") {
    document.querySelector("#player1").classList.add("paper");
  }

  if (userSelection === "scissors") {
    document.querySelector("#player1").classList.add("scissors");
  }

  // show selected computer option
  if (computerChoice === "rock") {
    document.querySelector("#player2").classList.add("rock");
  }

  if (computerChoice === "paper") {
    document.querySelector("#player2").classList.add("paper");
  }

  if (computerChoice === "scissors") {
    document.querySelector("#player2").classList.add("scissors");
  }

  determineWinner();
}

function determineWinner() {
  console.log("determineWinner");

  //   user wins
  if (userSelection === "rock" && computerChoice === "scissors") {
    showWin();
  }
  if (userSelection === "paper" && computerChoice === "rock") {
    showWin();
  }
  if (userSelection === "scissors" && computerChoice === "paper") {
    showWin();
  }

  //   user loses
  if (userSelection === "rock" && computerChoice === "paper") {
    showLose();
  }
  if (userSelection === "paper" && computerChoice === "scissors") {
    showLose();
  }
  if (userSelection === "scissors" && computerChoice === "rock") {
    showLose();
  }

  //   draw
  if (userSelection === "rock" && computerChoice === "rock") {
    showDraw();
  }
  if (userSelection === "paper" && computerChoice === "paper") {
    showDraw();
  }
  if (userSelection === "scissors" && computerChoice === "scissors") {
    showDraw();
  }
}

function showWin() {
  console.log("Show Win!");
  document.querySelector("#win").classList.remove("hidden");
  restart();
}

function showLose() {
  document.querySelector("#lose").classList.remove("hidden");
  restart();
}

function showDraw() {
  document.querySelector("#draw").classList.remove("hidden");
  restart();
}

function restart() {
  //   event listeners on buttons
  document.querySelector(".rock").addEventListener("click", () => {
    clear();
    userRock();
  });
  document.querySelector(".paper").addEventListener("click", () => {
    clear();
    userPaper();
  });
  document.querySelector(".scissors").addEventListener("click", () => {
    clear();
    userScissors();
  });
}

function clear() {
  console.log("clear");
  // clear animations & rock/paper/scissors classes from players
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.remove("scissors");
  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("scissors");

  //   add hidden classes to win/lose/draw
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}
