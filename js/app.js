/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEl=document.querySelector('.board-square')
const messageEl = document.querySelector('#message')
console.log(squareEl)
console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  // render()
}