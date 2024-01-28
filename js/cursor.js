var cursor = true;

// text cursor blinking
setInterval(() => {
    var c = document.getElementById('cursor')
    if(cursor) {
        c.style.background = 'transparent'
        cursor = false;
    } else {
        c.style.background = 'var(--accent)'
        cursor = true;
    }
}, 500);

// add string to cursor position (used for html click shortcut)
function insert(str) {
    input = document.getElementById('input')
    input.textContent = input.textContent + str
    return
}
