// get history from session storage
var commandHistory = sessionStorage.getItem('command-history')

// if history doesn't exist, commandHistory is empty/new
if (commandHistory == null || commandHistory === 'undefined') {
    commandHistory = []
} else {
    commandHistory = JSON.parse(commandHistory)
}

var commandCurrent = commandHistory.length
var tempCommandHistoryPosition = commandCurrent - 1

// add command to history
function addCommandHistory(history) {
    commandHistory.push(history)
    tempCommandHistoryPosition += 1
    // save history again
    sessionStorage.setItem('command-history', JSON.stringify(commandHistory))
}

// go back/up a history
function backwardCommandHistory() {
    input = document.getElementById('input')
    inputAfterCursor = document.getElementById('input-after-cursor')

    // last in history
    if (tempCommandHistoryPosition == commandHistory.length - 1) {
        tempCommandCurrent = input.textContent + inputAfterCursor.textContent // tempCommandCurrent is current, unsent text
    }
    
    // move position unless is first
    if (tempCommandHistoryPosition != 0) {
        tempCommandHistoryPosition -= 1
    }

    input.textContent = commandHistory[tempCommandHistoryPosition]
    inputAfterCursor.textContent = ''
}

// go forward/down a history
function forwardCommandHistory() {
    input = document.getElementById('input')
    inputAfterCursor = document.getElementById('input-after-cursor')

    // last in history
    if (tempCommandHistoryPosition == commandHistory.length - 1) {
        input.textContent = tempCommandCurrent
    }

    // move position unless last
    if (tempCommandHistoryPosition < commandHistory.length - 1) {
        tempCommandHistoryPosition += 1
    }

    input.textContent = commandHistory[tempCommandHistoryPosition]
    inputAfterCursor.textContent = ''
}



// get history from session storage
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

function clearTerminalHistory() {
    var userCommands = document.getElementById('user-commands')
    userCommands.innerHTML = 'C:\\WINDOWS&gt; <span id="input" style="color: var(--color);"></span><span id="cursor" style="background: transparent;">&nbsp;</span><span id="input-after-cursor"></span><span></span>'
}