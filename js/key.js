kb = document.getElementById('ascii-keyboard')
opacity = 'opacity(75%)'
document.onkeyup = removeKey;

function Key(e) {

    // console.log(e.keyCode)

    if (e.keyCode == 16) {
        if (e.code == 'ShiftLeft') {
            letters = document.getElementsByClassName('16a')
        } else if (e.code == 'ShiftRight') {
            letters = document.getElementsByClassName('16b')
        } else {
            letters = document.getElementsByClassName('16')
        }
    } else if (e.keyCode == 17) {
        if (e.code == 'ControlLeft') {
            letters = document.getElementsByClassName('17a')
        } else if (e.code == 'ControlRight') {
            letters = document.getElementsByClassName('17b')
        } else {
            letters = document.getElementsByClassName('17')
        }
    } else if (e.keyCode == 18) {
        if (e.code == 'AltLeft') {
            letters = document.getElementsByClassName('18a')
        } else {
            letters = document.getElementsByClassName('18')
        }
    } else {
        letters = document.getElementsByClassName(e.keyCode)
    }
    if (letters.length == 0) {
        return
    }

    for (letter in letters) {
        try {
            letters[letter].style.color = 'transparent'
        } catch (e) {
            return
        }
    }
}

function removeKey(e) {
    letters = document.getElementsByClassName(e.keyCode)
    if (letters.length == 0) {
        return
    }

    if (e.keyCode == 20) {
        if (e.getModifierState('CapsLock')) {
            return
        }
    }

    for (letter in letters) {
        try {
            letters[letter].style.color = 'var(--secondary)'
        } catch (e) {
            return
        }
    }
}
