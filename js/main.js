/*----- constants -----*/

//This lookup will be used to populate the board with the corresponding color
const lookup = {
    '1': 'purple',
    '-1': 'green',
    null: 'white'
    }

const winningCombinations = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6]
]

/*----- app's state (variables) -----*/

//Board constant represents our gameboard, with each element representing a cell on the board
//Winner value will dictate whether there is a winner or not
//Turn value determines who's turn it is
let board, winner, turn;

/*----- cached element references -----*/
const tableEl = document.querySelector('table')

const headerEl = document.querySelector('h1')

const squares = document.querySelectorAll('td div')

const buttonEl = document.querySelector('button')

/*----- event listeners -----*/

buttonEl.addEventListener('click', init)

/*----- functions -----*/
//Calling init function will start our game 
init()  
function init() {
    board = [null, null, null, null, null, null, null, null, null]
    tableEl.addEventListener('click', handleTurn)
    turn = 1;
    winner = null;
    render()
}

function render() {
    headerEl.innerText = lookup[turn] + "'s turn"

    //forEach has access to the index number of the current element in the iteration
    board.forEach(function(tile, idx)
    {
        squares[idx].style.background = lookup[tile]
    })
    // Check if a winning message needs to be displayed
    if(winner === "tie"){
        headerEl.innerText = "It's a tie"
    } else if(winner) {
        headerEl.innerText = lookup[winner] + " has won this game"
    }
}

//This function will use the winning combinations to check if either player has made a winning combo
function checkWin() {
    winningCombinations.forEach(function(combo){
        // if (board[combo[0]] + board[combo[1]] + board[combo[2]] === 3) 
        // {
        //     winner = turn
        // }
        // else if (board[combo[0]] + board[combo[1]] + board[combo[2]] === -3)
        // {
        //     winner = turn
        // }
        // Shorter way of writing the above code
        if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]] === 3))
        {
            winner = turn
            tableEl.removeEventListener('click', handleTurn)
        }
        if(!winner && !board.includes(null))
        {
            winner = 'tie'
        }
})}

function handleTurn(evt) {
    const idx = evt.target.id.replace('sq', '')
    if(!board[idx])
    {
    board[idx] = turn
    checkWin()
    turn *= -1
    render()
    }
}

