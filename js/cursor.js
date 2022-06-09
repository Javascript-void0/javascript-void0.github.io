var cursor = true;

setInterval(() => {
    if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    } else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, 500);

function insert(str) {
    input = document.getElementById('input')
    input.textContent = input.textContent + str
    return
}