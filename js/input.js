document.onkeydown = KeyPress;

function KeyPress(e) {
    // console.log(e.keyCode)
    before = document.getElementById('input').textContent;
    beforeAfterCursor = document.getElementById('input-after-cursor').textContent
    if (e.ctrlKey) {
        if (e.keyCode == 8) {
            if (before.charAt(before.length - 1) == ' ') {
                before = before.slice(0, -1)
            }
            split = before.split(' ')
            split.splice(-1)
            document.getElementById('input').textContent = split.join(' ') + ' '
            return
        } else if (e.keyCode == 46) {
            if (beforeAfterCursor.charAt(1) == ' ') {
                beforeAfterCursor = beforeAfterCursor.slice(-1, 0)
            }
            split = beforeAfterCursor.split(' ')
            split.splice(0, 1)
            document.getElementById('input-after-cursor').textContent = split.join(' ')
            return
        } else if (e.keyCode == 37 || e.keyCode == 39) {
            return //move
        }
        return
    }
    if ((e.keyCode >= 48 && e.keyCode <= 90) || (e.keyCode >= 186) || (e.keyCode == 32)) {
        document.getElementById('input').textContent = before + e.key
    } else if (e.keyCode == 8) {
        document.getElementById('input').textContent = before.slice(0, -1)
    } else if (e.keyCode == 46) {
        document.getElementById('input-after-cursor').textContent = beforeAfterCursor.slice(1)
    } else if (e.keyCode == 37 || e.keyCode == 39) {
        MoveCursor(e.keyCode)
    } else if (e.keyCode == 13) {
        RunCommand(before + beforeAfterCursor)
        // NewLine()
        window.scrollTo(0, document.body.scrollHeight);
    }
}

function MoveCursor(direction) {
    before = document.getElementById('input').textContent
    beforeAfterCursor = document.getElementById('input-after-cursor').textContent
    if (direction == 37) {
        letter = before.charAt(before.length - 1)
        document.getElementById('input').textContent = before.slice(0, -1)
        document.getElementById('input-after-cursor').textContent = letter + beforeAfterCursor
    } else {
        letter = beforeAfterCursor.charAt(0)
        document.getElementById('input-after-cursor').textContent = beforeAfterCursor.slice(1)
        document.getElementById('input').textContent = before + letter
    }
}

function NewLine() {
    before = document.getElementById('input')
    before.removeAttribute('id')
    document.getElementById('cursor').textContent = ''
    document.getElementById('cursor').removeAttribute('id')
    after = document.getElementById('input-after-cursor')
    after.removeAttribute('id')

    before.textContent = `${before.textContent}${after.textContent}`
    after.remove()
    before.innerHTML = inputFillSpace(before.textContent)

    header = document.getElementById('lines')
    header.append(temp = document.createElement('span'))
    lines = ['                                               ']
    temp.innerHTML = lines[0].replaceAll(' ', '&nbsp')
    header.append('C:\\WINDOWS> ')
    input = document.createElement('span')
    header.append(input)
    input.setAttribute('id', 'input')
    cursor = document.createElement('span')
    header.append(cursor)
    cursor.setAttribute('id', 'cursor')
    cursor.textContent = '_'
    inputAfterCursor = document.createElement('span')
    header.append(inputAfterCursor)
    inputAfterCursor.setAttribute('id', 'input-after-cursor')
}

function inputFillSpace(line) {
    if (line.length <= (47-12)) {
        lastLineLength = line.length
        fill = 47 - lastLineLength
    } else {
        lastLineLength = (line.length - 12) % 47
        fill = 47 - lastLineLength + 35
    }
    for (i = 0; i < fill-12; i++) {
        line = `${line} `
    }
    withFillSpace = line.replaceAll(' ', '&nbsp')
    return withFillSpace
}

function fillSpace(line) {
    if (line.length <= (47-12)) {
        lastLineLength = line.length
        fill = 47 - lastLineLength
    } else {
        lastLineLength = line.length % 47
        fill = 47 - lastLineLength
    }
    for (i = 0; i < fill; i++) {
        line = `${line} `
    }
    withFillSpace = line.replaceAll(' ', '&nbsp')
    return withFillSpace
}