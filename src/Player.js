const Board = require('./Board')
const Ship = require('./Ship')

const Player = () => {
    const board = Board()

    const ships = {"ship1": Ship(1)}

    function placeShip (ship, x, y) {
        board.place(ships["ship1"], x, y)
    }

    function attack (player, x, y) {
        player.board.receiveAttack(x, y)
    } 

    return {board, ships, placeShip, attack}
}

module.exports = Player;