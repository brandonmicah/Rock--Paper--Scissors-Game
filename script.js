"use strict";

/*--TODO--
- Add an event handler to each of the 3 buttons.
    - When player one selects a button the computer button randomly generates a response.
        - The chosen button’s style changes on event.
    - If the button clicked and the response are the same the result display will generate a DRAW signal
    - The hierarchy of winning and losing hands are as follows:
        - Rock > Scissors
        - Paper > Rock
        - Scissors > Paper
    - The winning selections player wins one point per round and the score is added to the players accumulating score display
    - The Display options are reset following each round.
- When a player reaches 3 points the display clearly identifies a winner and the buttons are no longer interactive except for the play again BUTTON which reset the scores and the styling to the default style. */

// Button click generates random computer option
// Choices display inplace of question mark
// User choice is compared to random choice
// Victore is awarded point

const result = document.querySelector(".result");

const paper = 1;
const scissors = 2;
const rock = 3;
let scoreArr = [0, 0];

// Storing score in array
let playerScore = scoreArr[0];
let computerScore = scoreArr[1];

document.querySelector(".paper-btn").addEventListener("click", function () {
  //   Random number generator between 1-3
  const randomNumber = Math.trunc(Math.random() * 3) + 1;

  // If paper vs paper
  if (randomNumber === 1) {
    result.classList.remove("hidden");
    result.textContent = "DRAW!";
  }
  //   Paper loses to Scissors
  else if (randomNumber === 2) {
    result.classList.remove("hidden");
    result.textContent = "Computer Wins!";
    document.querySelector(".computer-score").textContent = computerScore += 1;
  }
  //   Paper beats Rock
  else {
    result.classList.remove("hidden");
    result.textContent = "You Win!";
    document.querySelector(".player-score").textContent = playerScore += 1;
  }
  // Winner is decided whena side reaches 3
  if (playerScore === 3) {
    console.log("Congratulation, you won!");
  } else if (computerScore === 3) {
    console.log("You lost to the computer");
  }
});

document.querySelector(".scissors-btn").addEventListener("click", function () {
  //   Random number generator between 1-3
  const randomNumber = Math.trunc(Math.random() * 3) + 1;
  //   If scissors vs scissors
  if (randomNumber === 2) {
    result.classList.remove("hidden");
    result.textContent = "DRAW!";
  }
  //  Scissors loses to rock
  else if (randomNumber === 3) {
    result.classList.remove("hidden");
    result.textContent = "Computer Wins!";
    document.querySelector(".computer-score").textContent = computerScore += 1;
  }
  //   Scissors beats paper
  else {
    result.classList.remove("hidden");
    result.textContent = "You Win!";
    document.querySelector(".player-score").textContent = playerScore += 1;
  }
  // Winner is decided whena side reaches 3
  if (playerScore === 3) {
    console.log("Congratulation, you won!");
  } else if (computerScore === 3) {
    console.log("You lost to the computer");
  }
});

document.querySelector(".rock-btn").addEventListener("click", function () {
  //   Random number generator between 1-3
  const randomNumber = Math.trunc(Math.random() * 3) + 1;
  //   If rock vs rock
  if (randomNumber === 3) {
    result.classList.remove("hidden");
    result.textContent = "DRAW!";
  }
  //  Rock loses to paper
  else if (randomNumber === 1) {
    result.classList.remove("hidden");
    result.textContent = "Computer Wins!";
    document.querySelector(".computer-score").textContent = computerScore += 1;
  }
  //   Rock beats scissors
  else {
    result.classList.remove("hidden");
    result.textContent = "You Win!";
    document.querySelector(".player-score").textContent = playerScore += 1;
  }
  // Winner is decided whena side reaches 3
  if (playerScore === 3) {
    console.log("Congratulation, you won!");
  } else if (computerScore === 3) {
    console.log("You lost to the computer");
  }
});
