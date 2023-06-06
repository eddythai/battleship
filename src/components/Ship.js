const Ship = (size) => {
    let hitCount = 0

    function hit() {
        this.hitCount += 1
    }

    function isSunk() {
        return this.hitCount == size
    }

    return {size, hitCount, hit, isSunk}
}

module.exports = Ship;