/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let circleTurn;
/*------------------------ Cached Element References ------------------------*/
const cellEl = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const oClass = "o";
const xClass = "x";
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
/*----------------------------- Event Listeners -----------------------------*/
init();

function init() {
  circleTurn = false;
  // Using for Each to loop through every cell and add an event click
  cellEl.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
}
/*-------------------------------- Functions --------------------------------*/

// check  winner
// check for tie

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? oClass : xClass;
  placeMark(cell, currentClass);
  swapTurns();
  setBoardHoverClass();
}
// Place marks
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
// swapping turns
function swapTurns() {
  circleTurn = !circleTurn;
}
// removes the class on X & O until it knows who's turn it is
function setBoardHoverClass() {
  board.classList.remove(xClass);
  board.classList.remove(oClass);
  if (circleTurn) {
    board.classList.add(oClass);
  } else {
    board.classList.add(xClass);
  }
}
