var commandHistory = []
var commandCurrent = 0
var tempCommandHistoryPosition = -1
var tempCommandCurrent = ''

function addCommandHistory( history) {
    commandHistory.push(history)
    tempCommandHistoryPosition += 1
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