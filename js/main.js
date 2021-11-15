/*----- constants -----*/
console.log('the js is loaded')

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

//this board constant represents our gameboard, with each element representing a cell on the board
const board = [null, null, null, null, null, null, null, null, null]

let turn = 1

/*----- cached element references -----*/
const tableEl = document.querySelector('table')
console.log(tableEl)

/*----- event listeners -----*/

/*----- functions -----*/