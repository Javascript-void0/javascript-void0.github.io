const textbox = document.getElementById('text')
textbox.textContent = ''

const keyboardLayout = {
    "row1": [
        {
            "keyCode": "192",
            "lowercase": ' ',
            "uppercase": ' '
        },
        {
            "keyCode": "49",
            "lowercase": '1',
            'uppercase': '!'
        },
        {
            "keyCode": "50",
            "lowercase": '2',
            'uppercase': '@'
        },
        {
            "keyCode": "51",
            "lowercase": '3',
            'uppercase': '#'
        },
        {
            "keyCode": "52",
            "lowercase": '4',
            'uppercase': '$'
        },
        {
            "keyCode": "53",
            "lowercase": '5',
            'uppercase': '%'
        },
        {
            "keyCode": "54",
            "lowercase": '6',
            'uppercase': '^'
        },
        {
            "keyCode": "55",
            "lowercase": '7',
            'uppercase': '&'
        },
        {
            "keyCode": "56",
            "lowercase": '8',
            'uppercase': '*'
        },
        {
            "keyCode": "57",
            "lowercase": '9',
            'uppercase': '('
        },
        {
            "keyCode": "48",
            "lowercase": '0',
            'uppercase': ')'
        },
        {
            "keyCode": "189",
            "lowercase": '-',
            'uppercase': '_'
        },
        {
            "keyCode": "187",
            "lowercase": '=',
            'uppercase': '+'
        },
        {
            "keyCode": "8",
            "lowercase": ' ',
            'uppercase': ' '
        }
    ],
    "row2": [
        {
            "keyCode": "9",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "81",
            "lowercase": 'q',
            'uppercase': 'Q'
        },
        {
            "keyCode": "87",
            "lowercase": 'w',
            'uppercase': 'W'
        },
        {
            "keyCode": "69",
            "lowercase": 'e',
            'uppercase': 'E'
        },
        {
            "keyCode": "82",
            "lowercase": 'r',
            'uppercase': 'R'
        },
        {
            "keyCode": "84",
            "lowercase": 't',
            'uppercase': 'T'
        },
        {
            "keyCode": "89",
            "lowercase": 'y',
            'uppercase': 'Y'
        },
        {
            "keyCode": "85",
            "lowercase": 'u',
            'uppercase': 'U'
        },
        {
            "keyCode": "73",
            "lowercase": 'i',
            'uppercase': 'I'
        },
        {
            "keyCode": "79",
            "lowercase": 'o',
            'uppercase': 'O'
        },
        {
            "keyCode": "80",
            "lowercase": 'p',
            'uppercase': 'P'
        },
        {
            "keyCode": "219",
            "lowercase": '[',
            'uppercase': '{'
        },
        {
            "keyCode": "221",
            "lowercase": ']',
            'uppercase': '}'
        },
        {
            "keyCode": "220",
            "lowercase": ' ',
            'uppercase': ' '
        }
    ],
    "row3": [
        {
            "keyCode": "20",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "65",
            "lowercase": 'a',
            'uppercase': 'A'
        },
        {
            "keyCode": "83",
            "lowercase": 's',
            'uppercase': 'S'
        },
        {
            "keyCode": "68",
            "lowercase": 'd',
            'uppercase': 'D'
        },
        {
            "keyCode": "70",
            "lowercase": 'f',
            'uppercase': 'F'
        },
        {
            "keyCode": "71",
            "lowercase": 'g',
            'uppercase': 'G'
        },
        {
            "keyCode": "72",
            "lowercase": 'h',
            'uppercase': 'H'
        },
        {
            "keyCode": "74",
            "lowercase": 'j',
            'uppercase': 'J'
        },
        {
            "keyCode": "75",
            "lowercase": 'k',
            'uppercase': 'K'
        },
        {
            "keyCode": "76",
            "lowercase": 'l',
            'uppercase': 'L'
        },
        {
            "keyCode": "59",
            "lowercase": ';',
            'uppercase': ':'
        },
        {
            "keyCode": "222",
            "lowercase": "'",
            'uppercase': '"'
        },
        {
            "keyCode": "13",
            "lowercase": ' ',
            'uppercase': ' '
        }
    ],
    "row4": [
        {
            "keyCode": "16",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "90",
            "lowercase": 'z',
            'uppercase': 'Z'
        },
        {
            "keyCode": "88",
            "lowercase": 'x',
            'uppercase': 'X'
        },
        {
            "keyCode": "67",
            "lowercase": 'c',
            'uppercase': 'C'
        },
        {
            "keyCode": "86",
            "lowercase": 'v',
            'uppercase': 'V'
        },
        {
            "keyCode": "66",
            "lowercase": 'b',
            'uppercase': 'B'
        },
        {
            "keyCode": "78",
            "lowercase": 'n',
            'uppercase': 'N'
        },
        {
            "keyCode": "77",
            "lowercase": 'm',
            'uppercase': 'M'
        },
        {
            "keyCode": "188",
            "lowercase": ',',
            'uppercase': '<'
        },
        {
            "keyCode": "190",
            "lowercase": '.',
            'uppercase': '>'
        },
        {
            "keyCode": "191",
            "lowercase": '/',
            'uppercase': '?'
        },
        {
            "keyCode": "16a",
            "lowercase": ' ',
            'uppercase': ' '
        }
    ],
    "row5": [
        {
            "keyCode": "17",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "91",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "18",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "32",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "18a",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "92",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "93",
            "lowercase": ' ',
            'uppercase': ' '
        },
        {
            "keyCode": "17a",
            "lowercase": ' ',
            'uppercase': ' '
        }
    ]
}

keyElements = []

// initialize keyboard elements
for (i = 1; i < 6; i++) {
    var row = document.getElementById('keyboard-row-' + i)
    var rowKeyCount = Object.keys(keyboardLayout['row' + i]).length
    row.setAttribute('keys', rowKeyCount)
    for (j = 0; j < rowKeyCount; j++) {
        var key = document.createElement('div')
        key.id = keyboardLayout[`row${i}`][j]['keyCode']
        key.classList.add('key')
        key.textContent = keyboardLayout[`row${i}`][j]['lowercase']
        key.setAttribute('lowercase', keyboardLayout[`row${i}`][j]['lowercase'])
        key.setAttribute('uppercase', keyboardLayout[`row${i}`][j]['uppercase'])
        row.append(key)
        keyElements.push(key)
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
    } else if (event.keyCode == 16) { // shift
        uppercase()
    } else if (event.keyCode == 20) { // capslock
        uppercase()
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

function lowercase() {
    for (key of keyElements) {
        key.textContent = key.getAttribute('lowercase')
    }
}
function uppercase() {
    for (key of keyElements) {
        key.textContent = key.getAttribute('uppercase')
    }
}

document.addEventListener('keyup', function() {

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
