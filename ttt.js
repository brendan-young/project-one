const cellBlocks = document.querySelectorAll('.cell')

const cellClick = () => {
    for (let index = 0; index < cellBlocks.length; index++) {
        cellBlocks[index].addEventListener('click', () => {
            console.log('clicked')
        })
    }
}

cellClick()

const playerPunchClass = 'x'
const playerKickClass = 'cirlce'
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
const winningMessage = document.querySelector('.winningMessage')
const playAgainButton = document.querySelector('.playAgain')


// how to swtich turns between X and circle 
let isPlayerKickTurn = false

const startFight = () => {
    isPlayerKickTurn = false
    cellBlocks.classList
}


//how to put token inside of the div 

//try to figure out how to check winning combination and find winner

// showing winning message 