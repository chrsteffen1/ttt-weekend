/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, sqIdx, totalTurns

/*------------------------ Cached Element References ------------------------*/
let squareEl = document.querySelectorAll('.board-square')
let messageEl = document.querySelector('#message')
let boardSquare = document.querySelector('section.board')
let resetBtn = document.querySelector('#reset-button')
let boxEL = document.querySelector('section')
let backC = document.querySelector('body')
let titleEl = document.querySelector('h1')
let winnerEmoji = document.querySelector('#winner')


/*----------------------------- Event Listeners -----------------------------*/
boardSquare.addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  totalTurns = 0
  resetBtn.setAttribute("hidden", true)
  messageEl.className = ''
  backC.className = ''
  titleEl.className = ''
  render()
}

function render() {
  board.forEach((squ, idx) => {
    if (squ === 1) {
      squareEl[idx].textContent = '👽';
      squareEl.className ='animate__animated animate__zoomInDown' 
    } 
    if (squ === -1) {
      squareEl[idx].textContent = '🛸'
    }
    if (squ === null) {
      squareEl[idx].textContent = ""
    }
    })
    if (winner === null) {
      messageEl.textContent = `${turn === 1 ? "👽" : "🛸"}! It's your turn`
    } 
    if (winner === 'T') {
      messageEl.textContent = 'You both tied'}
      if (totalTurns !== 0){
        resetBtn.removeAttribute('hidden')
      }
  
}



function handleClick(evt) {
  sqIdx = parseInt(evt.target.id.replace('sq', ''))
    if (board[sqIdx] !== null || winner !== null){
      return
    } else {
      board[sqIdx] = turn
    }
    turn *= -1
    totalTurns += 1
    
    getWinner()
    render()  
    winnerBoard() 
}

function getWinner() {
  if (board[0] + board[1] + board[2] === 3 || board[3] + board[4] + board[5] === 3 || board[6] + board[7] + board[8] === 3 || board[0] + board[3] + board[6] === 3 || board[1] + board[4] + board[7] === 3 || board[2] + board[5] + board[8] === 3 || board[0] + board[4] + board[8] === 3 || board[2] + board[4] + board[6] === 3){
    messageEl.textContent = "👽 wins our highest honor"
    winnerEmoji.textContent = "👽"
    winner = true
  }
  if (board[0] + board[1] + board[2] === -3 || board[3] + board[4] + board[5] === -3 || board[6] + board[7] + board[8] === -3 || board[0] + board[3] + board[6] === -3 || board[1] + board[4] + board[7] === -3 || board[2] + board[5] + board[8] === -3 || board[0] + board[4] + board[8] === -3 || board[2] + board[4] + board[6] === -3){
    messageEl.textContent = "🛸 wins our highest honor"
    winnerEmoji.textContent = "🛸"
    winner = true
  }
  if (totalTurns === 9 && winner === null){
    winner = 'T'
  }
}

function winnerBoard() {
  if (winner === true){
    messageEl.className = 'animate__animated animate__flash animate__infinite'
    backC.className = 'animate-animated animate__pulse animate__duration-5s' 
    titleEl.className = 'animate__animated animate__heartBeat animate__infinite'
    boxEL.style.visibility = 'hidden'
    winnerEmoji.className = 'animate__animated animate__bounceOutUp animate__slow '
  } 

}
