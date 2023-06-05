const Player = require('../Player')

test("player1 places a ship on (5, 5)", () => {
    const player1 = Player()
    player1.placeShip("ship1", 5, 5)
    expect(player1.board.getCoord(5,5)).toBe(player1.ships["ship1"])
})

test("player1 attacks player2", () => {
    const player1 = Player()
    const player2 = Player()

    player2.placeShip("ship1", 5, 5)
    player1.attack(player2, 5, 5)

    expect(player2.board.getCoord(5,5).hitCount).toBe(1)
    
})