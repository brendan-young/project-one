# Tic Tac Smack - Brendan Young 

[Play](https://brendan-young.github.io/project-one/)

This is a simple Tic Tac Toe game with a fighting theme. 

The game incorporates
- HTML
- CSS
- Javascript

# Challenges
One of the largest challenges I encountered was writing the correct syntax for the tie scenario. In order to overcome this I used the following syntax: 

``` const checkDraw = () => {
    for (let block of cellBlocks) {
        if  (!block.classList.contains('PlayerX') && !block.classList.contains('PlayerO')) {
            return
        }
    }
    showMessage('It is a draw! Fight again!')
    return true
} 
```
# Future Functionality


There is a lot of functionality that can be incorporated into the game - some examples listed below:
1. Win count for each player
2. The ability for players to input their own names
3. AI mode for easy and medium difficulty
4. Grid expansion to play 4x4 and 5x5 grids