function createBoard (board, player) {
    const playerBoard = document.querySelector("#player")
    const botBoard = document.querySelector("#bot")
    const cellElem = document.createElement("div")
    for (let row = 1; row < 11; row++) {
        for (let col = 1; col < 11; col++) {
            let cell_clone = cellElem.cloneNode()
            let id = `${player}-${row}-${col}`
            cell_clone.id = id
            if (board.getCoord(row, col) && player != "bot") {
                cell_clone.classList.add("ship")
            } else {
                cell_clone.classList.add("cell")
            }
            if (player != "bot") {
                playerBoard.appendChild(cell_clone)
            } else {
                botBoard.appendChild(cell_clone)
            }
        }
    }
}

function initBoardEvents () {
    const botGrid = document.querySelectorAll("#bot > .cell")
    console.log(botGrid)
    botGrid.forEach(grid => {
        grid.addEventListener("click", e => {
            console.log(e.target.id)
        })
    })
}

module.exports = {createBoard, initBoardEvents}