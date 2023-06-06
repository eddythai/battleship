const Player = require('./Player')
const DOM = require('../DOM')

const Game = (() => {
    let turn = "player1"
    const players = {"player1": Player(), "bot": Player()}

    function playTurn (attacker, target, x ,y) {
        players[attacker].attack(players[target], x, y)
        this.turn = target
    }

    function start () {
        players["player1"].randomizeBoard()
        console.log(players["player1"].board)
        DOM.createBoard(players["player1"].board, "player1")
        DOM.createBoard(players["player1"].board, "bot")
        DOM.initBoardEvents()
    }
    
    return {turn, playTurn, start}
}) ()

module.exports = Game