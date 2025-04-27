let currentMenuState = true;
let menuIsVisible = true;

// update css variables to show/hide sidebar menu
function toggleMenu(option, manualToggle=false) {
    if (currentMenuState == false && option != null) { return; }
    
    root = document.querySelector(':root')

    let menuJump = 405 / 6;
    let i = 0;

    // open menu
    if (option == true || menuIsVisible == false) {

        let openInterval = setInterval(function() {
            root.style.setProperty('--terminal-width', `${menuJump * i}px`)
            i++;
            
            if (menuJump * i > 405) {
                root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 50px))')
                root.style.setProperty('--terminal-display', '')
                clearInterval(openInterval);
            }
        }, 15)

        // idk
        document.querySelector('.main-content-background').style.width = 'calc(100vw - 161px - var(--terminal-width))'
        menuIsVisible = true

        if (manualToggle) {
            currentMenuState = true;
            sessionStorage.setItem('sidebar', 'true')
        }

    // close menu
    } else if (option == false || menuIsVisible == true) {
        // root.style.setProperty('--terminal-width', '0px')
        // root.style.setProperty('--terminal-display', 'none')
        // root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 30px))')
        
        let closeInterval = setInterval(function() {
            root.style.setProperty('--terminal-width', `${405 - menuJump * i}px`)
            // root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 50px))')
            i++;

            if (405 - menuJump * i < 0) {
                root.style.setProperty('--terminal-display', 'none')
                root.style.setProperty('--main-content-width', 'calc(100vw - (var(--terminal-width) + 3 * 30px))')
                clearInterval(closeInterval);
            }
            // root.style.setProperty('--terminal-display', '')
        }, 15)

        // idk
        document.querySelector('.main-content-background').style.width = 'calc(100vw - 101px - var(--terminal-width))'
        menuIsVisible = false

        if (manualToggle) {
            currentMenuState = false
            sessionStorage.setItem('sidebar', 'false')
        }
    }
}

function flipContent() {
    var mainContent = document.getElementById('main-content-container')
    var terminal = document.getElementById('terminal-container')

    if (mainContent.style.left == '50px') { // on left
        mainContent.style.left = '';
        mainContent.style.right = '50px';
        terminal.style.left = '50px';
        terminal.style.right = '';
        // terminal left, content right
        sessionStorage.setItem('flip', 'true')

    } else {
        mainContent.style.left = '50px';
        mainContent.style.right = '';
        terminal.style.left = '';
        terminal.style.right = '50px';
        // terminal right, content left
        sessionStorage.setItem('flip', 'false')
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

    options = sessionStorage.getItem('flip')
    if (options == null) {
        sessionStorage.setItem('flip', 'false')
    } else if (options == 'true') {
        flipContent();
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
