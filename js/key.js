kb = document.getElementById('ascii-keyboard')
opacity = 'opacity(75%)'
document.onkeyup = removeKey;

function Key(e) {

    // console.log(e.keyCode)

    letters = document.getElementsByClassName(e.keyCode)
    if (letters.length == 0) {
        return
    }
    for (letter in letters) {
        try {
            letters[letter].style.color = 'var(--accent)'
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
    for (letter in letters) {
        try {
            letters[letter].style.color = 'var(--secondary)'
        } catch (e) {
            return
        }
    }
}