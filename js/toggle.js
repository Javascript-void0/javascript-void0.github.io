function toggleMenu() {
    root = document.querySelector(':root')
    current = menuIsVisible()
    if (current == false) {
        root.style.setProperty('--terminal-width', '404px')
        root.style.setProperty('--terminal-visibility', 'visible')
    } else {
        root.style.setProperty('--terminal-width', '0px')
        root.style.setProperty('--terminal-visibility', 'hidden')
    }
}

function menuIsVisible() {
    root = document.querySelector(':root')
    current = getComputedStyle(root).getPropertyValue('--terminal-visibility')
    if (current == 'hidden') {
        return false
    } else {
        return true
    }
}