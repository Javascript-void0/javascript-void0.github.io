document.onkeydown = KeyPress;

// prevent middle click on js:void(0)
window.addEventListener("auxclick", (event) => {
    // console.log(event)
    if (event.button === 1) {
        href = event.target.href;
        if (href == 'javascript:void(0);') {
            // console.log(event.target.onclick)
            event.preventDefault();
            // eval(event.target.getAttribute('onclick'))
        }
    }
});

function ctrlSToggle() {
    if (menuIsVisible) {
        toggleMenu(null, true)
    } else {
        ableToggle(null, true)
    }
}

function KeyPress(e) {

    // console.log(e.keyCode)

    // ctrl + s
    if (e.ctrlKey && e.keyCode == 83) {
        e.preventDefault()
        Key(e)
        ctrlSToggle();
    }

    // console is not visible, ignore input
    if (!menuIsVisible) {
        return;
    }

    tempInput = document.getElementById('input').textContent
    tempInputAfterCursor = document.getElementById('input-after-cursor').textContent

    before = document.getElementById('input').textContent;
    beforeAfterCursor = document.getElementById('input-after-cursor').textContent

    if (e.ctrlKey) {

        // backspace
        if (e.keyCode == 8) {
            if (before.charAt(before.length - 1) == ' ') {
                before = before.slice(0, -1)
            }
            split = before.split(' ')
            split.splice(-1)
            document.getElementById('input').textContent = split.join(' ') + ' '
            
            checkValidCommand()

        // delete
        } else if (e.keyCode == 46) {
            if (beforeAfterCursor.charAt(1) == ' ') {
                beforeAfterCursor = beforeAfterCursor.slice(-1, 0)
            }
            split = beforeAfterCursor.split(' ')
            split.splice(0, 1)
            document.getElementById('input-after-cursor').textContent = split.join(' ')

            checkValidCommand()

        // left, right
        } else if (e.keyCode == 37 || e.keyCode == 39) {
            if (e.keyCode == 37) {
                anotherSpace = false
                if (before.charAt(before.length - 1) == ' ') {
                    before = before.slice(0, -1)
                    anotherSpace = true
                }
                nextEmpty = before.split(' ')
                nextEmpty = (nextEmpty[nextEmpty.length - 1].length)
                if (anotherSpace) {
                    nextEmpty++
                }
            } else {
                if (beforeAfterCursor.charAt(0) == ' ') {
                    beforeAfterCursor = beforeAfterCursor.slice(1)
                }
                nextEmpty = beforeAfterCursor.split(' ')
                nextEmpty = nextEmpty[0].length
                nextEmpty++
            }
            MoveCursor(e.keyCode, nextEmpty)
        }

        Key(e)
        return

    } else if (e.altKey) { // alt key
        // e.preventDefault()
        Key(e)
        return
    } else { // default...
        e.preventDefault()
    }

    // alphanumeric keys
    if ((e.keyCode >= 48 && e.keyCode <= 90) || (e.keyCode >= 186) || (e.keyCode == 32)) {
        document.getElementById('input').textContent = before + e.key
        before = document.getElementById('input').textContent;
        checkValidCommand()
    // backspace
    } else if (e.keyCode == 8) {
        document.getElementById('input').textContent = before.slice(0, -1)
        checkValidCommand()
    // delete
    } else if (e.keyCode == 46) {
        document.getElementById('input-after-cursor').textContent = beforeAfterCursor.slice(1)
        checkValidCommand()
    } else if (e.keyCode == 37 || e.keyCode == 39) {
        MoveCursor(e.keyCode)
    } else if (e.keyCode == 38) {
        backwardCommandHistory()
        checkValidCommand()
    } else if (e.keyCode == 40) {
        forwardCommandHistory()
        checkValidCommand()
    // enter
    } else if (e.keyCode == 13) {
        RunCommand(before + beforeAfterCursor)
        // NewLine()
        window.scrollTo(0, document.body.scrollHeight);
        tempFull = tempInput + tempInputAfterCursor
        if (tempFull.replaceAll(' ', '') !== '') {
            addCommandHistory(tempInput + tempInputAfterCursor)
        }
        tempCommandCurrent = null
        tempCommandHistoryPosition = commandHistory.length - 1
    } else if (e.keyCode == 9) {
        tryTabComplete();
    }
    Key(e)
}


function tryTabComplete() {
    str = (before + beforeAfterCursor).trim().toUpperCase()
    if (str.length <= 2) { return }

    for (command of commands) {
        if (command.indexOf(str) == 0) { // starts with
            input = document.getElementById('input')
            inputAfterCursor = document.getElementById('input-after-cursor')
            input.textContent = command.toLowerCase();
            inputAfterCursor.textContent = ''
            checkValidCommand(true)
        }
    }
}

function checkValidCommand(valid=false) {
    input = document.getElementById('input')
    inputAfterCursor = document.getElementById('input-after-cursor')
    if (valid == false)  { // unset, check
        text = input.textContent + inputAfterCursor.textContent

        text = text.trim()
        baseCommand = text.split(' ')[0]
        valid = commands.indexOf(baseCommand.toUpperCase()) != -1
    }
    if (valid) {
        input.style.color = 'var(--color)'
        inputAfterCursor.style.color = 'var(--color)'
    } else {
        input.style.color = 'var(--secondary)'
        inputAfterCursor.style.color = 'var(--secondary)'
    }
}

function MoveCursor(direction, count=1) {
    before = document.getElementById('input').textContent
    beforeAfterCursor = document.getElementById('input-after-cursor').textContent
    if (count < 1) {
        count = 1
    }
    if (direction == 37) { // left
        piece = before.substring(before.length - count)
        document.getElementById('input').textContent = before.slice(0, -count)
        document.getElementById('input-after-cursor').textContent = piece + beforeAfterCursor
    } else { // right
        piece = beforeAfterCursor.slice(0, count)
        document.getElementById('input-after-cursor').textContent = beforeAfterCursor.slice(count)
        document.getElementById('input').textContent = before + piece
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

    header = document.getElementById('user-commands')
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
    cursor.innerHTML = '&nbsp'
    inputAfterCursor = document.createElement('span')
    header.append(inputAfterCursor)
    inputAfterCursor.setAttribute('id', 'input-after-cursor')
    saveTerminalHistory()
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
