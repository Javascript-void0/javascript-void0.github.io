var grid = [
    [, , , ],
    [, , , ],
    [, , , ],
    [, , , ]
]

grid = [
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 1]
]

function generateBoard() {

}

var filled = 16
while (filled > 5) {
    var x = Math.floor(Math.random() * 4)
    var y = Math.floor(Math.random() * 4)
    if (grid[y][x] !== '') {
        grid[y][x] = ''
        filled--
    }
}

function drawGrid() {
    for (y = 0; y < grid.length; y++) {
        for (x = 0; x < grid[y].length; x++) {
            var ele = document.getElementById(`${x}, ${y}`)
            ele.setAttribute('binary', grid[y][x])
            if (grid[y][x] !== '') {
                ele.classList.add('locked')
            }
        }
    }
}

function loadNew() {

}

function check() {
    if (boardFull()) {
        // rule 3
        if (checkRowsOrColumnsSame('row') === false) { return }
        else if (checkRowsOrColumnsSame('column') === false) { return}

        // rule 1
        else if (checkRowsOrColumnsEqual('column') === false) { return }
        else if (checkRowsOrColumnsEqual('row') === false) { return }
        
        document.getElementsByClassName('rules')[0].textContent = 'correct'
    }

    function checkHalf(dir) {
        var bin0 = 0
        var bin1 = 0
        for (square of dir) {
            if (`${square.attributes['binary'].value}` == '0') {
                bin0++
            } else if (`${square.attributes['binary'].value}` == '1') {
                bin1++
            }
        }
        if (bin0 == 2) { // half is 0, fill rest with 1
            for (square of dir) {
                if (`${square.attributes['binary'].value}` != '0') {
                    square.setAttribute('binary', 1)
                }
            }
        } else if (bin1 == 2) { // half is 1, fill rest with 0
            for (square of dir) {
                if (`${square.attributes['binary'].value}` != '1') {
                    square.setAttribute('binary', 0)
                }
            }
        }
    }

    function checkRowsOrColumnsSame(rowOrColumn) {
        var rowsOrColumns = getRowsOrColumns(rowOrColumn)
        // https://stackoverflow.com/a/20997744
        const uniquePairs = pairs => [...new Set(pairs.map(pair => JSON.stringify(pair)))].map(pair => JSON.parse(pair))
        if (uniquePairs(rowsOrColumns).length == 3) {
            return false
        }
        return true
    }

    function checkRowsOrColumnsEqual(rowOrColumn) {
        var rowsOrColumns = getRowsOrColumns(rowOrColumn)
        for (i in rowsOrColumns) {
            var bin0 = 0
            var bin1 = 0
            for (j of rowsOrColumns[i]) { // count 1's and 0's
                if (`${j}` === '0') {
                    bin0++
                } else if (`${j}` === '1') {
                    bin1++
                }
            }
            if (bin0 === 3|| bin1 === 3) { // if count of 1's or 0's > 2 (max)
                return false
            }
        }
        return true
    }

    function getRowsOrColumns(rowOrColumn) {
        var rowsOrColumns = []
        for (i = 0; i < 4; i++) {
            eles = document.getElementsByClassName(rowOrColumn + i)
            eles = getBinary(eles)
            rowsOrColumns.push(eles)
        }
        return rowsOrColumns
    }

    function getBinary(eleList) {
        var bin = []
        for (ele of eleList) {
            bin.push(ele.attributes['binary'].value)
        }
        return bin
    }

    function boardFull() {
        squares = document.getElementsByClassName('square')
        for (square of squares) {
            if (square.attributes['binary'].value == '') {
                return false
            }
        }
        return true
    }
}