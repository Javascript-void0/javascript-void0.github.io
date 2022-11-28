document.getElementById('app').addEventListener('touchstart', handleTouchStart, false);
document.getElementById('app').addEventListener('touchmove', handleTouchMove, false);

// https://stackoverflow.com/a/56663695

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches
}

function handleTouchStart(evt) {
    var button = document.getElementsByClassName('new-game').item(0)
    if (evt.target == button) {
        return
    }
    evt.preventDefault()
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            merge('left')
        } else {
            merge('right')
        }
    } else {
        if ( yDiff > 0 ) {
            merge('up')
        } else { 
            merge('down')
        }
    }

    xDown = null;
    yDown = null;
};