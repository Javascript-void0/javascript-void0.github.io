document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37 || event.keyCode == 65) { // Left
        merge('left')
    } else if (event.keyCode == 38 || event.keyCode == 87) { // Up
        merge('up')
    } else if (event.keyCode == 39 || event.keyCode == 68) { // Right
        merge('right')
    } else if (event.keyCode == 40 || event.keyCode == 83) { // Down
        merge('down')
    }
})

function loadNew() {
    score = 0
    addScore(0)
    squares = document.getElementsByClassName('square')
    for (square of squares) {
        square.setAttribute('n', '')
    }
    var notEqual = false
    while (!notEqual) {
        var square1 = Math.floor(Math.random() * 16)
        var square2 = Math.floor(Math.random() * 16)
        if (square1 != square2) {
            notEqual = true
        }
    }
    squares[square1].setAttribute('n', '2')
    squares[square2].setAttribute('n', '2')
}

function merge(dir) {
    switch (dir) {
        case 'up': // stupid loop direction things stuff
            var nextX = 0
            var nextY = 1
            var loopStart = 0
            var loopEnd = '<= 3'
            var step = 1
            break
        case 'down':
            var nextX = 0
            var nextY = -1
            var loopStart = 3
            var loopEnd = '>= 0'
            var step = -1
            break
        case 'left':
            var nextX = 1
            var nextY = 0
            var loopStart = 0
            var loopEnd = '<= 3'
            var step = 1
            break
        case 'right':
            var nextX = -1
            var nextY = 0
            var loopStart = 3
            var loopEnd = '>= 0'
            var step = -1
            break
    }

    var changed = false

    if (nextX == 0) {
        c = closeGapVert(loopStart, loopEnd, step, nextY)
            if (!changed && c) {
                changed = c
            }
        c = closeGapVert(loopStart, loopEnd, step, nextY)
            if (!changed && c) {
                changed = c
            }
    } else if (nextY == 0) {
        c = closeGapHori(loopStart, loopEnd, step, nextX)
            if (!changed && c) {
                changed = c
            }
        c = closeGapHori(loopStart, loopEnd, step, nextX)
            if (!changed && c) {
                changed = c
            }
    }
    for (x = loopStart; eval(x + loopEnd); x += step) {
        for (y = loopStart; eval(y + loopEnd); y += step) {
            element = document.getElementById(`${x}, ${y}`)
            if (element.classList.contains('merge')) {
                element.classList.remove('merge')
            }
            if (element.classList.contains('new')) {
                element.classList.remove('new')
            }
            next = document.getElementById(`${x+nextX}, ${y+nextY}`)
            if (next == null) { break }
            elementValue = element.attributes['n'].value
            nextValue = next.attributes['n'].value
            if (elementValue != NaN && nextValue != NaN) {
                elementValue = parseInt(elementValue)
                nextValue = parseInt(nextValue)
                if (elementValue == nextValue) { // merging
                    element.classList.add('merge')
                    element.setAttribute('n', elementValue * 2)
                    next.setAttribute('n', '')
                    changed = true
                    addScore(elementValue * 2)
                }
            }
        }
    }
    if (nextX == 0) {
        c = closeGapVert(loopStart, loopEnd, step, nextY)
        if (!changed && c) {
            changed = c
        }
        c = closeGapVert(loopStart, loopEnd, step, nextY)
        if (!changed && c) {
            changed = c
        }
    } else if (nextY == 0) {
        c = closeGapHori(loopStart, loopEnd, step, nextX)
        if (!changed && c) {
            changed = c
        }
        c = closeGapHori(loopStart, loopEnd, step, nextX)
        if (!changed && c) {
            changed = c
        }
    }

    if (changed) {
        newRandom()
    } else {
        for (x = loopStart; eval(x + loopEnd); x += step) {
            for (y = loopStart; eval(y + loopEnd); y += step) {
                var element = document.getElementById(`${x}, ${y}`)
                var adjacent = []
                adjacent.push(document.getElementById(`${x}, ${y-1}`))
                adjacent.push(document.getElementById(`${x}, ${y+1}`))
                adjacent.push(document.getElementById(`${x+1}, ${y}`))
                adjacent.push(document.getElementById(`${x-1}, ${y}`))
                for (square of adjacent) {
                    if (square != null) {
                        if (element.attributes['n'].value == square.attributes['n'].value) {
                            return
                        }
                    }
                }
            }
        }
        gameOver()
    }
}

function closeGapVert(loopStart, loopEnd, step, nextY) {
    var changed = false
    for (x = loopStart; eval(x + loopEnd); x += step) {
        for (y = loopStart; eval(y + loopEnd); y += step) {
            element = document.getElementById(`${x}, ${y}`)
            next = document.getElementById(`${x}, ${y+nextY}`)
            if (next == null) { break }
            elementValue = element.attributes['n'].value
            nextValue = next.attributes['n'].value
            if (elementValue == '' && nextValue != '') { //gap
                element.setAttribute('n', nextValue)
                next.setAttribute('n', '')
                changed = true
            }
        }
    }
    return changed
}

function closeGapHori(loopStart, loopEnd, step, nextX) {
    var changed = false
    for (y = loopStart; eval(y + loopEnd); y += step) {
        for (x = loopStart; eval(x + loopEnd); x += step) {
            element = document.getElementById(`${x}, ${y}`)
            next = document.getElementById(`${x+nextX}, ${y}`)
            if (next == null) { break }
            elementValue = element.attributes['n'].value
            nextValue = next.attributes['n'].value
            if (elementValue == '' && nextValue != '') { //gap
                element.setAttribute('n', nextValue)
                next.setAttribute('n', '')
                changed = true
            }
        }
    }
    return changed
}

function newRandom() {
    n = Math.random()
    if (n < 0.05) {
        n = 4
    } else {
        n = 2
    }
    var empty = false
    while (!empty) {
        var x = Math.floor(Math.random() * 4)
        var y = Math.floor(Math.random() * 4)
        var ele = document.getElementById(`${x}, ${y}`)
        if (ele.attributes['n'].value == '') {
            empty = true
        }
    }
    ele.classList.add('new')
    ele.setAttribute('n', n)
}

var score = 0
var best = 0
best = sessionStorage.getItem('best')
if (best == null) {
    best = 0
} else {
    best = parseInt(best)
}

function addScore(add) {
    score += add
    ele = document.getElementById('score')
    if (ele == null) { return }
    if (score > best) {
        best = score
    }
    sessionStorage.setItem('best', best)
    ele.innerHTML = `Score: ${score}<br><br>Best: ${best}`
}

function gameOver() {
    if (score > best) {
        best = score
    }
    sessionStorage.setItem('best', best)
    ele = document.getElementById('score')
    ele.innerHTML = `Score: ${score}<br><br>Best: ${best}<br><br>GAME OVER!`
}