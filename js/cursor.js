var cursor = true;

// text cursor blinking
setInterval(() => {
    if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    } else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, 500);

// add string to cursor position (used for html click shortcut)
function insert(str) {
    input = document.getElementById('input')
    input.textContent = input.textContent + str
    return
}
