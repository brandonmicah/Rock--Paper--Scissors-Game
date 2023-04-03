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
let playing = true;

// Storing score in array
let playerScore = scoreArr[0];
let computerScore = scoreArr[1];

// Deciding winner function
const isWinner = function () {
  if (playerScore === 3) {
    document.querySelector(".play-again-btn").classList.remove("hidden");
    playing = false;
    result.classList.add("hidden");
    document.querySelector(".winner").classList.remove("hidden");
  } else if (computerScore === 3) {
    document.querySelector(".play-again-btn").classList.remove("hidden");
    playing = false;
    result.classList.add("hidden");
    document.querySelector(".loser").classList.remove("hidden");
  }
};
// function is the random number and user decisin match
const isDraw = function () {
  result.classList.remove("hidden");
  result.textContent = "DRAW!";
};

// function when computer hand beats user hand
const pointComputer = function () {
  result.classList.remove("hidden");
  result.textContent = "Computer Wins!";
  document.querySelector(".computer-score").textContent = computerScore += 1;
};

// function when user hand beats computer hand
const pointPlayer = function () {
  result.classList.remove("hidden");
  result.textContent = "You Win!";
  document.querySelector(".player-score").textContent = playerScore += 1;
};

// reset the game function
function reset() {
  document.querySelector(".play-again-btn").classList.add("hidden");
  playing = true;
  document.querySelector(".player-score").textContent = 0;
  document.querySelector(".computer-score").textContent = 0;
  document.querySelector(".winner").classList.add("hidden");
  document.querySelector(".loser").classList.add("hidden");
  playerScore = 0;
  computerScore = 0;
}

document.querySelector(".paper-btn").addEventListener("click", function () {
  if (playing) {
    //   Random number generator between 1-3
    const randomNumber = Math.trunc(Math.random() * 3) + 1;

    // If paper vs paper
    if (randomNumber === 1) {
      isDraw();
    }

    //   Paper loses to Scissors
    else if (randomNumber === 2) {
      pointComputer();
      isWinner();
    }

    //   Paper beats Rock
    else {
      pointPlayer();
      isWinner();
    }
  }
});

document.querySelector(".scissors-btn").addEventListener("click", function () {
  if (playing) {
    //   Random number generator between 1-3
    const randomNumber = Math.trunc(Math.random() * 3) + 1;
    //   If scissors vs scissors
    if (randomNumber === 2) {
      isDraw();
    }
    //  Scissors loses to rock
    else if (randomNumber === 3) {
      pointComputer();
      isWinner();
    }
    //   Scissors beats paper
    else {
      pointPlayer();
      isWinner();
    }
  }
});

document.querySelector(".rock-btn").addEventListener("click", function () {
  if (playing) {
    //   Random number generator between 1-3
    const randomNumber = Math.trunc(Math.random() * 3) + 1;
    //   If rock vs rock
    if (randomNumber === 3) {
      isDraw();
    }
    //  Rock loses to paper
    else if (randomNumber === 1) {
      pointComputer();
      isWinner();
    }
    //   Rock beats scissors
    else {
      pointPlayer();
      isWinner();
    }
  }
});

document
  .querySelector(".play-again-btn")
  .addEventListener("click", function () {
    reset();
  });
