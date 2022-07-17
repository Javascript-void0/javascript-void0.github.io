function toggleMenu(option) {
    root = document.querySelector(':root')
    current = menuIsVisible()
    if (current == false || option == true) {
        root.style.setProperty('--terminal-width', '404px')
        root.style.setProperty('--terminal-display', '')
        root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 50px))')

    document.cookie = 'sidebar=true'
    } else if (current == true || option == false) {
        root.style.setProperty('--terminal-width', '0px')
        root.style.setProperty('--terminal-display', 'none')
        root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 30px))')
        document.cookie = 'sidebar=false'
    }
}

function toggleContent(option) {
    container = document.querySelector('.main-content-container')
    if (option == true) {
        container.style.display = ''
    } else if (option == false) {
        container.style.display = 'none'
    }
}

function menuIsVisible() {
    root = document.querySelector(':root')
    current = getComputedStyle(root).getPropertyValue('--terminal-display')
    if (current == 'none') {
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