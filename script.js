start();

function start() {
  console.log("start");

  getUserSelection();
}

function getUserselection() {
  // add event listeners to buttons, have them call makeRandomComputerChoice()

  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  // random math to determine computer choice

  showAnimations();
}

function showAnimations() {
  // start animations - shake, then end on selected option

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
  // show win text
}

function showLose() {}

function showDraw() {}
