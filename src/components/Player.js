const Board = require('./Board')
const Ship = require('./Ship')

const Player = () => {
    const board = Board()

    const ships = {"carrier": Ship(5), "battleship": Ship(4),
     "cruiser": Ship(3), "submarine": Ship(3), "destroyer": Ship(2)}

    function placeShip (ship, x, y) {
        board.place(ships[ship], x, y)
    }

    function attack (player, x, y) {
        player.board.receiveAttack(x, y)
    } 

    function randomizeBoard () {
        placeShip("carrier", 1, 1)
        placeShip("carrier", 1, 2)
        placeShip("carrier", 1, 3)
        placeShip("carrier", 1, 4)
        placeShip("carrier", 1, 5)

        placeShip("battleship", 4, 2)
        placeShip("battleship", 5, 2)
        placeShip("battleship", 6, 2)
        placeShip("battleship", 7, 2)

        placeShip("cruiser", 6, 8)
        placeShip("cruiser", 6, 9)
        placeShip("cruiser", 6, 10)

        placeShip("submarine", 9, 6)
        placeShip("submarine", 8, 6)
        placeShip("submarine", 7, 6)

        placeShip("destroyer", 3, 7)
        placeShip("destroyer", 3, 6)

    }
 
    return {board, ships, placeShip, attack, randomizeBoard}
}

module.exports = Player;