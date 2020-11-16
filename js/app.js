/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let circleTurn;
/*------------------------ Cached Element References ------------------------*/
const cellEl = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const oClass = "o";
const xClass = "x";
const restartButton = document.getElementById("restartButton");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const restartBtn = document.getElementById("restartButton");
const winningMessageElement = document.getElementById("winningMessage");
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*----------------------------- Event Listeners -----------------------------*/
// starts game
init();

restartBtn.addEventListener("click", init);

function init() {
  circleTurn = false;
  // Using for Each to loop through every cell and add an event click and reseting board
  cellEl.forEach((cell) => {
    cell.classList.remove(xClass);
    cell.classList.remove(oClass);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove("show");
}
/*-------------------------------- Functions --------------------------------*/
// Decides who's turn it is
function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? oClass : xClass;
  placeMark(cell, currentClass);
  //Winner Check!
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}
// display's the text for if it's a draw, X wins, or O Wins
function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageElement.classList.add("show");
}
// Checks if it's a draw
function isDraw() {
  return [...cellEl].every((cell) => {
    return cell.classList.contains(xClass) || cell.classList.contains(oClass);
  });
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
// checks winner
function checkWin(currentClass) {
  return winningCombos.some((combo) => {
    return combo.every((index) => {
      return cellEl[index].classList.contains(currentClass);
    });
  });
}
