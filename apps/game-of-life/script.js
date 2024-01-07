var gridSize = 30;
var started = false

function drawGrid() {
    var grid = document.getElementsByClassName('grid')[0]
    width = window.innerWidth
    height = window.innerHeight
    gridX = Math.ceil(width / gridSize)
    gridY = Math.ceil(height / gridSize)
    console.log(gridX, gridY)

    grid.style.gridTemplateColumns = `repeat(${gridX}, ${gridSize}px)`
    grid.style.gridTemplateRows = `repeat(${gridY}, ${gridSize}px)`

    squares = document.getElementsByClassName('square')
    for (square of squares) {
        square.style.display = 'none'
    }

    for (y = 0; y < gridY; y++) {
        for (x = 0; x < gridX; x++) {
            id = `${x}, ${y}`
            square = document.getElementById(id)
            if (square !== null) {
                square.style.display = ''
            } else {
                var square = document.createElement('div')
                square.id = id
                square.classList.add('square')
                square.setAttribute('state', 'dead')
                square.setAttribute('x', x)
                square.setAttribute('y', y)
                grid.insertBefore(square, grid.childNodes[y*gridX+x])
            }
        }
    }
}

function getMouseSquare(e) {
    mouseX = e.clientX
    mouseY = e.clientY
    gridX = (mouseX - (mouseX % gridSize)) / gridSize
    gridY = (mouseY - (mouseY % gridSize)) / gridSize
    return document.getElementById(`${gridX}, ${gridY}`)
}

var holding = false
var holdingLastSquare = null
var holdingLastSquare = null
function mouseDown(e) {

    if (!started) { 
        started = true
        var start = document.getElementById('start')
        start.remove()
        return
    }

    if (playing) {
        return
    }

    element = getMouseSquare(e)
    if (element == holdingLastSquare) { return }
    if (element.attributes['state'].value == 'dead') {
        element.setAttribute('state', 'live')
        push3x3(element, needUpdate)
    } else {
        element.setAttribute('state', 'dead')
    }
    holdingLastSquare = element
    holding = true
}
function mouseUp(e) {
    holding = false
}

function mouseMove(e) {
    if (!started || !holding || playing) {
        return
    }

    element = getMouseSquare(e)
    if (element == holdingLastSquare) { return }
    element.setAttribute('state', 'live')
    push3x3(element, needUpdate)
    holdingLastSquare = element
}

document.addEventListener('mousemove', mouseMove)
document.addEventListener('mousedown', mouseDown)
document.addEventListener('mouseup', mouseUp)

var playing = false;

function playPause() {
    if (!started) { return }
    btn = document.getElementById('playing')
    if (playing) {
        playing = false
        btn.classList.add('play')
        btn.classList.remove('pause')
    } else {
        playing = true
        btn.classList.remove('play')
        btn.classList.add('pause')
        saveGrid()
    }
}

var save;
var saveNeedUpdate = [];

save = sessionStorage.getItem('save')
if (save == null) {
    save = null
}
saveNeedUpdate = sessionStorage.getItem('saveNeedUpdate');
if (saveNeedUpdate == null) {
    saveNeedUpdate = []
} else {
    saveNeedUpdate = JSON.parse(saveNeedUpdate)
    for (id in saveNeedUpdate) {
        x = (saveNeedUpdate[id]).split(', ')[0]
        y = (saveNeedUpdate[id]).split(', ')[1]
        saveNeedUpdate[id] = document.getElementById(`${x}, ${y}`)
    }
}

function resetGrid() {
    if (playing) { playPause() }
    if (typeof save !== 'undefined' && save !== null) {
        grid.innerHTML = save
    }
    drawGrid()
    needUpdate = []
    squares = document.getElementsByClassName('square')
    for (square of squares) {
        if (square.attributes['state'].value == 'live') {
            needUpdate.push(square)
            needUpdate = push3x3(square, needUpdate)
        }
    }
}

function saveGrid() {
    save = grid.innerHTML
    // TODO: only save alive?
    sessionStorage.setItem('save', save)
}

function clearGrid() {
    if (playing) { playPause() }
    squares = document.getElementsByClassName('square')
    for (square of squares) {
        if (square.attributes['state'].value == 'live') {
            square.setAttribute('state', 'dead')
            square.removeAttribute('next-generation')
        }
    }
    needUpdate = []
}

function shuffleGrid() {
    if (playing) { playPause() }
    squares = document.getElementsByClassName('square')
    needUpdate = []
    for (square of squares) {
        if (square.style.display != 'none') {
            if (Math.random() < 0.5) {
                square.setAttribute('state', 'dead')
            } else {
                square.setAttribute('state', 'live')
            }
            needUpdate.push(square)
        }
    }
    saveGrid()
}

var needUpdate = []

function progress() {
    // var squares = document.getElementsByClassName('square')
    for (square of needUpdate) {
        var state = square.attributes['state'].value

        var neighbors = getNeighbors(square)
        var liveNeighbors = 0;
        for (neighbor of neighbors) { // get neighbor states
            if (neighbor !== null) { // wall / offscreen
                if (neighbor.attributes['state'].value == 'live') {
                    liveNeighbors++
                }
            }
        }

        // square.textContent = liveNeighbors
        // console.log(liveNeighbors)

        if (state == 'dead') {
            if (liveNeighbors == 3) {
                square.setAttribute('next-generation', 'live')
            } else {
                square.setAttribute('next-generation', 'dead')
            }
        }

        if (state == 'live') {
            if (liveNeighbors < 2 || liveNeighbors > 3) {
                square.setAttribute('next-generation', 'dead')
            } else {
                square.setAttribute('next-generation', 'live')
            }
        }
    }

    var nextGenerationNeedUpdate = []

    for (square of needUpdate) { // next generation
        if (square.hasAttribute('next-generation')) {
            square.setAttribute('state', square.attributes['next-generation'].value)

            if (square.attributes['state'].value == 'live') {
                nextGenerationNeedUpdate = push3x3(square, nextGenerationNeedUpdate)
            }
        }
    }

    needUpdate = [...nextGenerationNeedUpdate]
}

var play = window.setInterval(function() {
    if (playing) {
        progress()
    }
}, 10);

function getNeighbors(element) {
    var x = parseInt(element.attributes['x'].value)
    var y = parseInt(element.attributes['y'].value)
    var neighbors = []
    neighbors.push(document.getElementById(`${x}, ${y-1}`))
    neighbors.push(document.getElementById(`${x}, ${y+1}`))
    neighbors.push(document.getElementById(`${x-1}, ${y}`))
    neighbors.push(document.getElementById(`${x+1}, ${y}`))
    neighbors.push(document.getElementById(`${x-1}, ${y-1}`))
    neighbors.push(document.getElementById(`${x-1}, ${y+1}`))
    neighbors.push(document.getElementById(`${x+1}, ${y-1}`))
    neighbors.push(document.getElementById(`${x+1}, ${y+1}`))
    return neighbors
}

function push3x3(element, list) {
    var startX = parseInt(element.attributes['x'].value) - 1
    var startY = parseInt(element.attributes['y'].value) - 1
    for (y = 0; y < 3; y++) {
        for (x = 0; x < 3; x++) {
            square = document.getElementById(`${startX + x}, ${startY + y}`)
            if (square !== null) { // wall / offscreen
                if (!list.some(e => e.id === square.id)) {
                    list.push(square)
                }
            }
        }
    }
    return list
}

window.onresize = function(event) {
    drawGrid();
}