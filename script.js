start();

function start() {
  console.log("start");

  getUserSelection();
}

function getUserSelection() {
  // add event listeners to buttons
  document.querySelector(".rock").addEventListener("click", makeRandomComputerChoice);
  document.querySelector(".paper").addEventListener("click", makeRandomComputerChoice);
  document.querySelector(".scissors").addEventListener("click", makeRandomComputerChoice);
}

const computerChoice = "";

function makeRandomComputerChoice() {
  // random math to determine computer choice
  let textArray = ["rock", "paper", "scissors"];

  let randomOption = Math.floor(Math.random() * textArray.length);

  let computerChoice = textArray[randomOption];

  console.log("makerandomcomputerchoice", randomOption);

  showAnimations();
}

function showAnimations() {
  // start animation shake
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  // show selected option
  //   document.querySelector("#player1").classList.remove("player");
  //   document.querySelector("#player1").classList.add("paper");

  determineWinner();
}

let winner = "";

function determineWinner() {
  // fake winner, temporary
  winner = "computer";

  // if player won
  showWin();
}

function showWin() {
  console.log("Show Win!");
  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  document.querySelector("#draw").classList.remove("hidden");
}
