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

    console.log(keyTranslate)

}




// window.addEventListener('focus', function() {
//     console.log("IN");
//     textbox.focus()
// }, false)

setInterval(function() {
    textbox.focus()
})

// focus leave clear keys
window.addEventListener('blur', function() {
    console.log("OUT");
    for (key of keyElements) {
        key.setAttribute('press', '')
    }
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
        } else if (currentLayoutLower == 'colemakLower' && keyTranslate[event.keyCode]['colemakLower'] && !uppercase) {
            if (nowUppercase) {
                layout = 'colemakUpper'
            } else {
                layout = 'colemakLower'
            }
        }

        if (layout) {
            translatedKey = keyTranslate[event.keyCode][layout]
            textbox.value += translatedKey
            event.preventDefault()

        }

    }

    if (event.ctrlKey && event.keyCode == 80) {
        event.preventDefault()
        // command palette
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

function toggleKeyboard() {
    var kb = document.getElementById('keyboard')
    if (!kbVisible) {
        kb.style.height = 'unset';
        kb.style.visibility = ''
        kbVisible = true
    } else {
        kb.style.height = '0';
        kb.style.visibility = 'hidden'
        kbVisible = false
    }
}







function clearTextbox() {
    textbox.value = '';
}

var shade = document.getElementById('shade')
var layoutSelector = document.getElementById('layout-selector')

function openLayoutSwitcher() {
    shade.style.display = ''
    layoutSelector.style.display = ''
}

function closeLayoutSwitcher() {
    shade.style.display = 'none'
    layoutSelector.style.display = 'none'
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











