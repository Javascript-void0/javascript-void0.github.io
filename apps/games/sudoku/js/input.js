var selected;

function squareSelect() {
    if (selected) {
        selected.classList.remove('selected')
        event.target.classList.add('selected')
        selected = event.target
    } else {
        event.target.classList.add('selected')
        selected = event.target
    }
}