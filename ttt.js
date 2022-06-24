/////////////////////
//Elements
///////////////////

const cellBlocks = document.querySelectorAll('.cell')
const playerPunchClass = 'x'
const playerKickClass = 'cirlce'
const winningMessage = document.querySelector('.winningMessage')
const fightAgainButton = document.querySelector('.playAgain')
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let currentPlayer = playerPunchClass



/////////////////
// Functions
/////////////////

// Switching Turns

let isPlayerKickTurn = false
let gameOver = false

const switchTurns = (event) => {
    console.log(event.target)
    const currentDiv = event.target
    if (gameOver) {
        return 
    }
    if(isPlayerKickTurn === false) {
        currentDiv.classList.add('PlayerX') 
        isPlayerKickTurn = true

    } else if (isPlayerKickTurn === true){
        currentDiv.classList.add('PlayerO')
        isPlayerKickTurn = false
    }
    const winnerHasBeenSelected = checkWinner()
    if (winnerHasBeenSelected) {
        gameOver = true
    } else {
        if (checkDraw()) {
            gameOver = true
        }
    }
}

// Check draw function
const checkDraw = () => {
    for (let block of cellBlocks) {
        if  (!block.classList.contains('PlayerX') && !block.classList.contains('PlayerO')) {
            return
        }
    }
    showMessage('It is a draw! Fight again!')
    return true
}

//Event Listener 'click' for cellBlocks
const cellClick = () => {
    for (let index = 0; index < cellBlocks.length; index++) {
        cellBlocks[index].addEventListener('click', switchTurns, 
        // {once : true},
        )
    }
}

cellClick()

//Checking winner and showing message

const checkWinner = () => {
    for (let combination of winningCombinations){
       const index0 = combination[0]
       const index1 = combination[1]
       const index2 = combination[2]
       const block0 = cellBlocks[index0]
       const block1 = cellBlocks[index1]
       const block2 = cellBlocks[index2]
       console.log(block0, block1, block2)
       if (block0.classList.contains('PlayerX') && block1.classList.contains('PlayerX') && block2.classList.contains('PlayerX')) {
            showMessage('Puncher Wins')
            return true
       } else if (block0.classList.contains('PlayerO') && block1.classList.contains('PlayerO') && block2.classList.contains('PlayerO')) {
            showMessage('Kicker Wins')
            return true
        }
    }
    return false
}
const youWin = winningMessage.querySelector('p')

const showMessage = (winner) => {
    winningMessage.style.display = 'block'
    youWin.textContent = winner
}

//Board reset for new round

const resetBoard = () => {
    for (let block of cellBlocks) {
       block.classList.remove('PlayerX', 'PlayerO') 
    }
    winningMessage.style.display = 'none'
    gameOver = false
    isPlayerKickTurn = false

}
fightAgainButton.addEventListener('click', resetBoard)




