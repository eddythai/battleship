const Ship = require('../Ship')

let ship;

beforeEach(() => {
    ship = Ship(3)
})

test('create ship of size 3', () => {
    expect(ship.size).toBe(3)
})

test('ship is hit 2 times', () => {
    ship.hit()
    ship.hit()
    expect(ship.hitCount).toBe(2)
})

test('ship is sunk', () => {
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBeTruthy()
})