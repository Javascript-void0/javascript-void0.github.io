const textbox = document.getElementById('textbox')
clearTextbox();



var keyElements = []
var keyTranslate = {}
var nowUppercase = false

// initialize keyboard elements
for (i = 1; i < 6; i++) {

    // {{
    var row = document.getElementById('keyboard-row-' + i)
    var rowKeyCount = Object.keys(keyboardLayout['row' + i]).length
    row.setAttribute('keys', rowKeyCount)
    var rowNum = `row${i}`

    for (j = 0; j < rowKeyCount; j++) {
        var key = document.createElement('div')
        key.id = keyboardLayout[rowNum][j]['keyCode']
        key.classList.add('key')
        key.textContent = keyboardLayout[rowNum][j]['lowercase']

        // default
        key.setAttribute('lowercase', keyboardLayout[rowNum][j]['lowercase'])
        key.setAttribute('uppercase', keyboardLayout[rowNum][j]['uppercase'])

        keyTranslate[key.id] = {}

        // dvorak
        if (keyboardLayout[rowNum][j]['dvorakLower']) {
            key.setAttribute('dvorakLower', keyboardLayout[rowNum][j]['dvorakLower'])
            key.setAttribute('dvorakUpper', keyboardLayout[rowNum][j]['dvorakUpper'])
            keyTranslate[key.id]['dvorakLower'] = keyboardLayout[rowNum][j]['dvorakLower']
            keyTranslate[key.id]['dvorakUpper'] = keyboardLayout[rowNum][j]['dvorakUpper']
        }

        // colemak
        if (keyboardLayout[rowNum][j]['colemakLower']) {
            key.setAttribute('colemakLower', keyboardLayout[rowNum][j]['colemakLower'])
            key.setAttribute('colemakUpper', keyboardLayout[rowNum][j]['colemakUpper'])
            keyTranslate[key.id]['colemakLower'] = keyboardLayout[rowNum][j]['colemakLower']
            keyTranslate[key.id]['colemakUpper'] = keyboardLayout[rowNum][j]['colemakUpper']
        }

        row.append(key)
        keyElements.push(key)
    }
    // }}}

    // console.log(keyTranslate)

}




// window.addEventListener('focus', function() {
//     console.log("IN");
//     textbox.focus()
// }, false)

setInterval(function() {
    if (unfocus) {
        textbox.blur();
    } else {
        textbox.focus()
    }
})

// focus leave clear keys
window.addEventListener('blur', function() {
    console.log("OUT");
    for (key of keyElements) {
        key.setAttribute('press', '')
    }
    lowercase()
})


document.addEventListener('keydown', function() {

    // {{{

    // if (!event.ctrlKey && event.key.length == 1) {
    //     // event.preventDefault()
    //     textbox.textContent += event.key
    // }
    
    // change key with layout
    if (keyTranslate[event.keyCode]) {

        var layout;
        if (currentLayoutLower == 'dvorakLower' && keyTranslate[event.keyCode]['dvorakLower']) {
            if (nowUppercase) {
                layout = 'dvorakUpper'
            } else {
                layout = 'dvorakLower'
            }
        } else if (currentLayoutLower == 'colemakLower' && keyTranslate[event.keyCode]['colemakLower']) {
            if (nowUppercase) {
                layout = 'colemakUpper'
            } else {
                layout = 'colemakLower'
            }
        }

        if (layout) {
            cursorPos = textbox.selectionStart;
            translatedKey = keyTranslate[event.keyCode][layout]
            // textbox.value += translatedKey
            textbox.value = textbox.value.slice(0, cursorPos) + translatedKey + textbox.value.slice(cursorPos)
            textbox.selectionStart = cursorPos + 1
            textbox.selectionEnd = cursorPos + 1
            event.preventDefault()

        }

    }

    if (event.ctrlKey && event.keyCode == 80) {
        event.preventDefault()
        // command palette
        openLayoutSwitcher()
    }

    // console.log(event.keyCode)

    if (unfocus) {
        event.preventDefault()
        // close
        if (event.keyCode == 27) {
            closeLayoutSwitcher();

        // enter
        } else if (event.keyCode == 13) {
            // changeLayout(layoutSelector.children[currentPosition].getAttribute('layout-name'))
            eval(activeCommands[currentPosition].getAttribute('onclick'))
            closeLayoutSwitcher()

        // next - n, j, down
        } else if (event.keyCode == 78 || event.keyCode == 74 || event.keyCode == 40) {
            console.log('test')
            commandNext();

        // prev - p, k, up
        } else if (event.keyCode == 80 || event.keyCode == 75 || event.keyCode == 38) {
            commandPrev();
        }
        return;
    }



    if (event.keyCode == 8) { // backspace

    } else if (event.keyCode == 9) { // tab
        event.preventDefault()
    } else if (event.keyCode == 13) { // enter
        // event.preventDefault()
    } else if (event.keyCode == 18) { // alt
        event.preventDefault()
    } else if (event.keyCode == 32) { // space
        // textbox.innerHTML += ' '
    } else if (event.keyCode == 16) { // shift
        uppercase()
    // } else if (event.keyCode == 20) { // capslock
    //     uppercase()
    }
    
    var key = document.getElementById(event.keyCode)
    if (key) {
        key.setAttribute('press', 'True')
    }
    var keyAlt = document.getElementById(event.keyCode + 'a')
    if (keyAlt) {
        keyAlt.setAttribute('press', 'True')
    }
    // }}}

})

function lowercase() {
    nowUppercase = false
    for (key of keyElements) {
        if (key.getAttribute(currentLayoutLower)) {
            key.textContent = key.getAttribute(currentLayoutLower)
        } else {
            key.textContent = key.getAttribute('lowercase')
        }
    }
}
function uppercase() {
    nowUppercase = true
    for (key of keyElements) {
        if (key.getAttribute(currentLayoutUpper)) {
            key.textContent = key.getAttribute(currentLayoutUpper)
        } else {
            key.textContent = key.getAttribute('uppercase')
        }
    }
}

document.addEventListener('keyup', function() {

    // {{{
    if (event.keyCode == 20) { // caps lock
        console.log(event.getModifierState('CapsLock'))
        if (event.getModifierState('CapsLock')) {
            uppercase()
        } else {
            lowercase()
        }
    } else if (event.keyCode == 16) {
        lowercase()
    }

    var key = document.getElementById(event.keyCode)
    if (key) {
        key.setAttribute('press', '')
    }
    var keyAlt = document.getElementById(event.keyCode + 'a')
    if (keyAlt) {
        keyAlt.setAttribute('press', '')
    }
    // }}}

})








var kbVisible = true
// var topContainer = document.getElementById('top-container')
var bottomContainer = document.getElementById('bottom-container')

function toggleKeyboard() {
    var kb = document.getElementById('keyboard')
    if (!kbVisible) {
        kb.style.height = 'unset';
        kb.style.display = ''
        kbVisible = true

        textbox.style.height = 'calc(50vh - 2 * var(--padding))'
        bottomContainer.style.gridTemplateRows = '17rem 5rem'


    } else {
        kb.style.height = '0';
        kb.style.display = 'none'
        kbVisible = false

        textbox.style.height = 'calc(83vh - 2 * var(--padding))'
        bottomContainer.style.gridTemplateRows = '5rem'
    }
}







function clearTextbox() {
    textbox.value = '';
}

var shade = document.getElementById('shade')
var layoutSelector = document.getElementById('layout-selector')
var unfocus = false;
var currentPosition = 0;
var activeCommands = [];

function openLayoutSwitcher(filter=false) {
    commands = layoutSelector.children;
    if (filter) {
        for (command of commands) {
            if (!command.innerHTML.includes(filter)) {
                command.style.display = 'none'
            } else {
                activeCommands.push(command)
            }
            command.setAttribute('focused', '')
        }

    // show all
    } else {
        for (command of commands) {
            command.style.display = ''
            command.setAttribute('focused', '')
        }
        activeCommands = commands
    }
    shade.style.display = ''
    layoutSelector.style.display = ''

    // unfocus
    unfocus = true

    currentPosition = 0
    layoutSelector.children[0].setAttribute('focused', 'True')
}

function commandNext() {
    // commands = layoutSelector.children;
    if (currentPosition < activeCommands.length - 1) {
        focused = activeCommands[currentPosition]
        focused.setAttribute('focused', '')

        currentPosition++;
        newFocused = activeCommands[currentPosition]
        newFocused.setAttribute('focused', 'True')
    }
}

function commandPrev() {
    // commands = layoutSelector.children;
    if (currentPosition > 0) {
        focused = activeCommands[currentPosition]
        focused.setAttribute('focused', '')

        currentPosition--;
        newFocused = activeCommands[currentPosition]
        newFocused.setAttribute('focused', 'True')
    }
}

function closeLayoutSwitcher() {
    shade.style.display = 'none'
    layoutSelector.style.display = 'none'

    unfocus = false;
    currentPosition = 0;
}




var layoutLabel = document.getElementById('layout-label')
var currentLayoutLower = 'lowercase'
var currentLayoutUpper = 'uppercase'

function changeLayout(layout) {
    layoutLabel.textContent = layout
    
    if (layout == 'qwerty') {
        currentLayoutLower = 'lowercase'
        currentLayoutUpper = 'uppercase'
    } else if (layout == 'dvorak') {
        currentLayoutLower = 'dvorakLower'
        currentLayoutUpper = 'dvorakUpper'
    } else if (layout == 'colemak') {
        currentLayoutLower = 'colemakLower'
        currentLayoutUpper = 'colemakUpper'
    } else {
        return;
    }

    lowercase()
}











