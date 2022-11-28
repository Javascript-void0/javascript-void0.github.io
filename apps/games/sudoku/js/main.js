const board = document.getElementById('board')
var sudoku = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0]]

function drawBoard() {
    var thickBorder = '3px solid rgb(var(--c1))'
    for (i = 0; i < 81; i++) {
        board.append(box = document.createElement('div'))
        box.classList.add('square')
        box.setAttribute('id', i)
        // box.textContent = i
        if ((i + 1) % 9 == 0) { // Right
            box.style.borderRight = thickBorder
        }
        if (i >= 72) { // Bottom
            box.style.borderBottom = thickBorder
        }
        if  ((i % 9 == 0) ||
            ((i + 3) % 9 == 0) ||
            ((i + 6) % 9 == 0)) {
            box.style.borderLeft = thickBorder
        }
        if  ((i <= 8) ||
            (i >= 27 && i <= 35) ||
            (i >= 54 && i <= 62)) {
            box.style.borderTop = thickBorder
        }
        box.addEventListener('mousedown', squareSelect)
    }
}

function setup() {
    drawBoard()
    newGame()
    holdPunch()
    enterBoard()
}

function newGame() { // https://gamedev.stackexchange.com/a/138228
    firstRow = []
    available = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (i = 0; i < 9; i++) {
        box = document.getElementById(i)
        num = available[n = Math.floor(Math.random()*available.length)]
        box.textContent = num
        available.splice(n, 1)
        box.textContent = num
        firstRow.push(num)
    }
    for (r = 0; r < 9; r++) {
        for (i = 0; i < 9; i++) {
            n = i - (3 * (r % 3))
            if (n < 0) {
                n += 9
            }
            num = firstRow[n]
            box = document.getElementById(i + r * 9)
            box.textContent = num
        }
        if ((r + 1) % 3 == 0) {
            firstRow.unshift(firstRow.pop())
        }
    }

    i = 0
    for (y = 0; y < 9; y++) {
        for (x = 0; x < 9; x++) {
            element = document.getElementById(i)
            sudoku[y][x] = element.textContent
            i++
        }
    }
    sudoku = sudoku[0].map((_, colIndex) => sudoku.map(row => row[colIndex]))
    
    shuffleTimes = Math.floor(Math.random() * 2)
    for (i = 0; i < shuffleTimes; i++) { // idk...
        shuffleArray(sudoku)
        sudoku = sudoku[0].map((_, colIndex) => sudoku.map(row => row[colIndex]))
        transpose(sudoku)
        sudoku = sudoku[0].map((_, colIndex) => sudoku.map(row => row[colIndex]))
        shuffleArray(sudoku)
        sudoku = sudoku[0].map((_, colIndex) => sudoku.map(row => row[colIndex]))
        transpose(sudoku)
    }

    function shuffleArray(array) {
        array.push(array.shift())
    }
    
    function transpose(matrix) {
        return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
    }

    enterBoard()
}

function enterBoard() {
    for (y = 0; y < 9; y++) {
        for (x = 0; x < 9; x++) {
            box = document.getElementById(y + x * 9)
            box.textContent = sudoku[x][y]
        }
    }
}

function holdPunch() {
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            randint = Math.floor(Math.random() * 9)
            if (randint % 2 == 0 || randint % 3 == 0) {
                sudoku[i][j] = ' '
            }
        }
    }
}