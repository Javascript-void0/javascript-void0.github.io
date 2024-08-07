// update css variables to show/hide sidebar menu
function toggleMenu(option) {
    root = document.querySelector(':root')
    current = menuIsVisible()
    if (option == true || current == false) {
        root.style.setProperty('--terminal-width', '405px')
        root.style.setProperty('--terminal-display', '')
        root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 50px))')

        // idk
        document.querySelector('.main-content-background').style.width = 'calc(100vw - 161px - var(--terminal-width))'
        current = true

    } else if (option == false || current == true) {
        root.style.setProperty('--terminal-width', '0px')
        root.style.setProperty('--terminal-display', 'none')
        root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 30px))')

        // idk
        document.querySelector('.main-content-background').style.width = 'calc(100vw - 101px - var(--terminal-width))'
        current = false
    }

    if (current == true) {
        sessionStorage.setItem('sidebar', 'true')
    } else {
        sessionStorage.setItem('sidebar', 'false')
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
        sessionStorage.setItem('sidebar', 'true')
    } else {
        if (options == 'true') {
            toggleMenu(true)
        } else if (options == 'false') {
            toggleMenu(false)
        }
    }
}

const initialContentThreshold = 1050
const onlyContentThreshold = 870
const onlySidebarThreshold = 567

function manageLayoutByWidth() {
    // <870, only show content
    if (window.innerWidth < onlyContentThreshold) {
        if (menuIsVisible()) {
            toggleMenu(false)
            toggleContent(true)
        }
    } else {
        toggleContent(true)
    }

    // <567, only show terminal
    if (window.innerWidth < onlySidebarThreshold) {
        if (!menuIsVisible()) {
            toggleMenu(true)
        }
    }
}

function manageInitialLayout() {
    // if (window.innerWidth < initialContentThreshold) {
    //     toggleMenu(false)
    // }
}