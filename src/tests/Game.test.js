const Game = require('../Game')

test("player1's turn", () => {
    Game.start()
    expect(Game.turn).toBe("player1")
})