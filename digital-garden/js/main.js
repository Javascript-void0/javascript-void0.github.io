window.onresize = sidebarSize
var menu = true;

function sidebarSize() {
    width = document.getElementById('sidebar').offsetWidth
    content = document.getElementById('content')
    content.style.left = width + 'px'
    if (window.innerWidth < 666) {
        if (menu == true) {
            toggleMenu()
        }
    } else {
        if (menu == false) {
            toggleMenu()
        }
    }
}

function toggleMenu() {
    hiddenMenu = document.getElementById('mobile-hide')
    button = document.getElementById('menu-button')
    if (menu == false) {
        menu = true
        hiddenMenu.style.display = ''
        button.setAttribute("style", "transform: rotate(" + 180 + "deg)");
    } else {
        menu = false
        hiddenMenu.style.display = 'none'
        button.setAttribute("style", "transform: rotate(" + 0 + "deg)");
    }
}