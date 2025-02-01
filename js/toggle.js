let currentMenuState = true;
let menuIsVisible = true;

// update css variables to show/hide sidebar menu
function toggleMenu(option, manualToggle=false) {
    if (currentMenuState == false && option != null) { return; }
    
    root = document.querySelector(':root')

    if (option == true || menuIsVisible == false) {
        root.style.setProperty('--terminal-width', '405px')
        root.style.setProperty('--terminal-display', '')
        root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 50px))')

        // idk
        document.querySelector('.main-content-background').style.width = 'calc(100vw - 161px - var(--terminal-width))'
        menuIsVisible = true

        if (manualToggle) {
            currentMenuState = true;
            sessionStorage.setItem('sidebar', 'true')
        }

    } else if (option == false || menuIsVisible == true) {
        root.style.setProperty('--terminal-width', '0px')
        root.style.setProperty('--terminal-display', 'none')
        root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 30px))')

        // idk
        document.querySelector('.main-content-background').style.width = 'calc(100vw - 101px - var(--terminal-width))'
        menuIsVisible = false

        if (manualToggle) {
            currentMenuState = false
            sessionStorage.setItem('sidebar', 'false')
        }
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

function returnMenuToggle() {
    options = sessionStorage.getItem('sidebar')
    if (options == null) {
        toggleMenu(true)
        sessionStorage.setItem('sidebar', 'true')
    } else {
        if (options == 'true') {
            toggleMenu(true, true)
        } else if (options == 'false') {
            toggleMenu(false, true)
        }
    }
}

// const initialContentThreshold = 1050
const onlyContentThreshold = 1055
const onlySidebarThreshold = 567

function manageLayoutByWidth() {
    if (currentPage == 'blog') {
        // do stuff
        // else?
    }


    // <567, only show terminal
    if (window.innerWidth < onlySidebarThreshold) {
        if (!menuIsVisible) {
            toggleMenu()
        }

    // <1055, only show content
    } else if (window.innerWidth < onlyContentThreshold) {
        if (menuIsVisible) {
            toggleMenu()
            toggleContent(true)
        }

    // normal return state
    } else {
        if (!menuIsVisible) {
            toggleMenu(currentMenuState)
        }

        toggleContent(true)
    }
}

// function manageInitialLayout() {
//     if (window.innerWidth < initialContentThreshold) {
//         toggleMenu(false)
//     }
// }
