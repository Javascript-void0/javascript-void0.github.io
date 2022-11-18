function toggleMenu(option) {
    root = document.querySelector(':root')
    current = menuIsVisible()
    if (current == false || option == true) {
        root.style.setProperty('--terminal-width', '405px')
        root.style.setProperty('--terminal-display', '')
        root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 50px))')
        sessionStorage.setItem('sidebar', 'true')

        document.querySelector('.main-content-background').style.width = 'calc(100vw - 161px - var(--terminal-width))'

    } else if (current == true || option == false) {
        root.style.setProperty('--terminal-width', '0px')
        root.style.setProperty('--terminal-display', 'none')
        root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 30px))')
        sessionStorage.setItem('sidebar', 'false')

        document.querySelector('.main-content-background').style.width = 'calc(100vw - 101px - var(--terminal-width))'
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
    options = sessionStorage.getItem('sidebar')
    if (options == null) {
        toggleMenu(true)
    } else {
        if (options == 'true') {
            toggleMenu(true)
        } else if (options == 'false') {
            toggleMenu(false)
        }
    }
}
