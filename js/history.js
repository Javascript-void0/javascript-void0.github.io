var commandHistory = sessionStorage.getItem('command-history')
if (commandHistory == null || commandHistory === 'undefined') {
    commandHistory = []
} else {
    commandHistory = JSON.parse(commandHistory)
}
var commandCurrent = commandHistory.length
var tempCommandHistoryPosition = commandCurrent - 1

function addCommandHistory(history) {
    commandHistory.push(history)
    tempCommandHistoryPosition += 1
    sessionStorage.setItem('command-history', JSON.stringify(commandHistory))
}

function backwardCommandHistory() {
    input = document.getElementById('input')
    inputAfterCursor = document.getElementById('input-after-cursor')
    if (tempCommandHistoryPosition == commandHistory.length - 1) {
        tempCommandCurrent = input.textContent + inputAfterCursor.textContent
    }
    input.textContent = commandHistory[tempCommandHistoryPosition]
    if (tempCommandHistoryPosition != 0) {
        tempCommandHistoryPosition -= 1
    }
    inputAfterCursor.textContent = ''
    return
}

function forwardCommandHistory() {
    input = document.getElementById('input')
    inputAfterCursor = document.getElementById('input-after-cursor')
    if (tempCommandHistoryPosition < commandHistory.length - 1) {
        tempCommandHistoryPosition += 1
    } else if (tempCommandHistoryPosition == commandHistory.length - 1) {
        input.textContent = tempCommandCurrent
        return
    }
    input.textContent = commandHistory[tempCommandHistoryPosition]
    inputAfterCursor.textContent = ''
}

// ============

var terminalHistory = sessionStorage.getItem('terminal-history')
if (terminalHistory == null) {
    sessionStorage.setItem('terminal-history', '')
    terminalHistory = ''
}

function loadTerminalHistory() {
    sessionStorage.getItem('terminal-history')
    if (terminalHistory != '') {
        var userCommands = document.getElementById('user-commands')
        userCommands.innerHTML = terminalHistory
    }
}

function saveTerminalHistory() {
    var userCommands = document.getElementById('user-commands')
    sessionStorage.setItem('terminal-history', userCommands.innerHTML)
}