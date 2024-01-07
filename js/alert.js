function alert(text) {
    console.log(text)
    // TODO: setup alert/notif system
}

// able to if terminal/sidebar is visible
function ableType(text) {
    if (menuIsVisible()) {
        document.getElementById('input').textContent = text
    } else {
        alert('sidebar not visible')
    }
}

// able to if window width is within range
function ableToggle() {
    if (window.innerWidth > onlyContentThreshold || 
        window.innerWidth < onlySidebarThreshold) {
        toggleMenu()
    } else {
        alert('window too narrow, unable to open sidebar')
    }
}