const row1Keys = 14;
const row1Codes = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8]
const row1Chars = [' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ' ']
const row2Keys = 14;
const row2Codes = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220]
const row2Chars = [' ', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', ' ']
const row3Keys = 13;
const row3Codes = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13]
const row3Chars = [' ', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", ' ']
const row4Keys = 12;
const row4Codes = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, '16a']
const row4Chars = [' ', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', ' ']
const row5Keys = 8;
const row5Codes = [17, 91, 18, 32, '18a', 92, 93, '17a']
const row5Chars = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
const textbox = document.getElementById('text')
textbox.textContent = ''

for (i = 1; i < 6; i++) {
    var row = document.getElementById('keyboard-row-' + i)
    var rowKeyCount = eval('row' + i + 'Keys')
    row.setAttribute('keys', rowKeyCount)
    for (j = 0; j < rowKeyCount; j++) {
        var key = document.createElement('div')
        key.id = eval(`row${i}Codes[${j}]`)
        key.classList.add('key')
        key.textContent = eval(`row${i}Chars[${j}]`)
        row.append(key)
    }
}

document.addEventListener('keydown', function() {
    if (!event.ctrlKey && event.key.length == 1) {
        event.preventDefault()
        textbox.textContent += event.key
    }

    if (event.ctrlKey && event.keyCode == 80) {
        event.preventDefault()
        // command palette
    }

    if (event.keyCode == 8) { // backspace

        if (textbox.innerHTML.substring(textbox.innerHTML.length - 6) == '&nbsp;') {
            textbox.innerHTML = textbox.innerHTML.slice(0, -6)
        }

        if (event.ctrlKey) {

        } else {
            textbox.textContent = textbox.textContent.slice(0, -1)
        }
    } else if (event.keyCode == 9) { // tab
        event.preventDefault()
    } else if (event.keyCode == 13) { // enter
        textbox.innerHTML += '\n'    
    } else if (event.keyCode == 18) { // alt
        event.preventDefault()
    } else if (event.keyCode == 32) { // space
        textbox.innerHTML += ' '
    }
    var key = document.getElementById(event.keyCode)
    if (key) {
        key.setAttribute('press', 'True')
    }
    var keyAlt = document.getElementById(event.keyCode + 'a')
    if (keyAlt) {
        keyAlt.setAttribute('press', 'True')
    }
})

document.addEventListener('keyup', function() {


    if (event.keyCode == 20) { // caps lock
        console.log(event.getModifierState('CapsLock'))
        if (event.getModifierState('CapsLock')) {
            return
        }
    }

    var key = document.getElementById(event.keyCode)
    if (key) {
        key.setAttribute('press', '')
    }
    var keyAlt = document.getElementById(event.keyCode + 'a')
    if (keyAlt) {
        keyAlt.setAttribute('press', '')
    }
})

var kbVisible = false

function toggleKeyboard() {
    var kb = document.getElementById('keyboard')
    if (kbVisible) {
        kb.style.visibility = ''
        kbVisible = false
    } else {
        kb.style.visibility = 'hidden'
        kbVisible = true
    }
}

function clearTextbox() {
    textbox.textContent = '';
}
