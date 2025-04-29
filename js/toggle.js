let currentMenuState = true;
let menuIsVisible = true;

// update css variables to show/hide sidebar menu
function toggleMenu(option, manualToggle=false) {
    if (currentMenuState == false && option != null) { return; }
    
    root = document.querySelector(':root')
    terminal = document.getElementById('terminal-container')

    let menuJump = 455 / 6;
    let i = 0;

    // open menu
    if (option == true || menuIsVisible == false) {

        let openInterval = setInterval(function() {
            root.style.setProperty('--main-content-width', `calc(100vw - (var(--terminal-width) + 3 * 50px) + ${455 - menuJump * i}px)`)
            i++;
            
            if (menuJump * i > 455) {
                terminal.style.display = ''
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

        terminal.style.display = 'none'
        let closeInterval = setInterval(function() {
            root.style.setProperty('--main-content-width', `calc(100vw - (var(--terminal-width) + 3 * 50px) + ${menuJump * i}px)`)
            i++;

            if (455 - menuJump * i < 0) {
                clearInterval(closeInterval);
            }
        }, 15)

        // idk
        document.querySelector('.main-content-background').style.width = 'calc(100vw - 111px)'
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
        sessionStorage.setItem('sidebar', 'true')
    } else if (options == 'false') {
        toggleMenu(false)
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
