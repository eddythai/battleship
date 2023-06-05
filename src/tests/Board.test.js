const Board = require('../Board')
const Ship = require('../Ship')
let player;

beforeEach(() => player = Board())

test("create board", () => {
    expect(player.getCoord(10,10)).toBe(0)
})

test("place ship of size 1 at 5,5", () => {
    const ship = Ship(1)
    player.place(ship, 5, 5)
    expect(player.getCoord(5,5)).toBe(ship)
})

test("place ship of size 3 at 5,5 5,4 5,3", () => {
    const ship = Ship(3)
    player.place(ship, 5, 5)
    player.place(ship, 5, 4)
    player.place(ship, 5, 3)
    expect(player.getCoord(5,5)).toBe(ship)
    expect(player.getCoord(5,4)).toBe(ship)
    expect(player.getCoord(5,3)).toBe(ship)
})

test("recieve an attack at 5, 5 and hit", () => {
    const ship = Ship(1)
    player.place(ship, 5, 5)
    player.receiveAttack(5, 5)
    expect(ship.hitCount).toBe(1)
})

test("recieve an attack at 5, 5 and miss", () => {
    player.receiveAttack(5, 5)
    expect(player.missedArr).toStrictEqual([[4,4]])
})

test("all ships are sunk", () => {
    const ship1 = Ship(1)
    const ship2 = Ship(2)
    player.place(ship1, 5, 5)
    player.place(ship2, 2, 2)
    player.place(ship2, 2, 3)

    player.receiveAttack(5,5)
    player.receiveAttack(2,2)
    player.receiveAttack(2,3)
    expect(player.allSunk()).toBeTruthy() 
})

test("not all ships are sunk", () => {
    const ship1 = Ship(1)
    const ship2 = Ship(2)
    player.place(ship1, 5, 5)
    player.place(ship2, 2, 2)
    player.place(ship2, 2, 3)

    player.receiveAttack(5,5)
    player.receiveAttack(2,2)
    expect(player.allSunk()).toBeFalsy() 
})