/*-------------------------------- Constants --------------------------------*/

const cellEl = document.querySelectorAll("[data-cell]");
const oClass = 'o'
const xClass = 'x'

/*---------------------------- Variables (state) ----------------------------*/


let circleTurn
/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here

/*----------------------------- Event Listeners -----------------------------*/

//Using for Each to loop through every cell and add an event click
cellEl.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

/*-------------------------------- Functions --------------------------------*/

// place mark
// check  winner
// check for tie
// swap turns
function handleClick(e) {
const cell = e.target
const currentClass = circleTurn ? oClass : xClass
placeMark(cell, currentClass)
swapTurns()
}
// Place marks
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}
//swapping turns
function swapTurns() {
  circleTurn = !circleTurn
}


