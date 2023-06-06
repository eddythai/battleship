const Game = require('../Game')

test("player1's turn", () => {
    expect(Game.turn).toBe("player1")
})

test("player2's turn", () => {
    Game.playTurn("player1", "bot", 5, 5)

    expect(Game.turn).toBe("bot")
})