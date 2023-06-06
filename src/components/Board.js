const Board = () => {
    const board = [...Array(10)].map( x => Array(10).fill(0) );
    const missedArr = []

    function place(ship, x, y) {
        board[x-1][y-1] = ship
    }

    function getCoord(x, y) {
        return board[x-1][y-1]
    }

    function receiveAttack(x, y) {
        const hitCoord = board[x-1][y-1]
        if( hitCoord ) {
            hitCoord.hit()
        } else {
            this.missedArr.push([x-1,y-1])
        }
    }

    function allSunk() {
        let sunk = true
        board.forEach(row => {
            row.forEach(box => {
                if (box != 0) sunk = sunk && box.isSunk()
            })
        })
        return sunk
    }

    return {getCoord, missedArr, receiveAttack, place, allSunk}
}

module.exports = Board