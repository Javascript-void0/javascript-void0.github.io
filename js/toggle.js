function toggleMenu(option) {
    root = document.querySelector(':root')
    current = menuIsVisible()
    if (current == false || option == true) {
        root.style.setProperty('--terminal-width', '404px')
        root.style.setProperty('--terminal-visibility', 'visible')
        document.cookie = 'sidebar=true'
    } else {
        root.style.setProperty('--terminal-width', '0px')
        root.style.setProperty('--terminal-visibility', 'hidden')
        document.cookie = 'sidebar=false'
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

function returnMenuToggle() {
    options = document.cookie
    if (options == '') {
        toggleMenu(true)
    } else {
        options = options.split('=')
        if (options[1] == 'true') {
            toggleMenu(true)
        } else if (options[1] == 'false') {
            toggleMenu(false)
        }
    }
}