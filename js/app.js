/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEl=document.querySelectorAll('.board-square')
const messageEl = document.querySelector('#message')
console.log(squareEl)
console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, -1, 1, null, null, null, null, null, null,]
  turn = 1
  winner = null
  render()
}

function render() {
  board.forEach((squ, idx) => {
    if (squ === 1) {
      squareEl[idx].textContent = 'X'
    } 
    if (squ === -1) {
      squareEl[idx].textContent = 'O'
    }
    })
    console.log(winner)
  if (winner === null) {
    messageEl.textContent = `Its player ${turn}'s turn`
  } 
  if (winner === 'T') {
    messageEl.textContent = `Its a tie`
  } 
  if (winner === 1) {
    messageEl.textContent = `X wins`
  } 
  if (winner === -1) {
    messageEl.textContent = `O wins`
  } 
}