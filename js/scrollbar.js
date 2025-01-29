let onScrollBar = false;
function scrollBarMouseDown(event) {
    onScrollBar = true;
    mousePosToScrollPos(event)
}

function scrollBarMouseUp() {
    onScrollBar = false;
}

function scrollBarMouseMove(event) {
    if (!onScrollBar) { return; }
    mousePosToScrollPos(event)
}

function mousePosToScrollPos(event) {

    mouseHeightPx = event.clientY;
    totalHeightPx = rightBorder.clientHeight;
    offset = rightBorder.getBoundingClientRect().top;
    if (mouseHeightPx < offset) {
        mouseHeightPx = 0
    } else if (mouseHeightPx > offset + totalHeightPx) {
        mouseHeightPx = totalHeightPx
    } else {
        mouseHeightPx -= offset
    }

    barHeight = barPercent * totalHeightPx;
    scrollPos = ((mouseHeightPx - barHeight / 2) / totalHeightPx * page.scrollHeight);
    scrollPos = Math.floor(scrollPos)

    scrollBar(scrollPos)
}

let barPercent;
var page;

function updateScrollBar() {

    if (typeof currentPage !== 'undefined' && currentPage == 'blog') {
        page = document.getElementById('blog-right')
    } else {
        page = document.getElementById('page')
    }
    if (page == null) { return; }

    if (page.scrollHeight < page.clientHeight) { // no scroll
        return;
    }

    current = page.scrollTop
    max = page.scrollHeight - page.offsetHeight;
    percentScroll = current / max

    numCharHeight = document.getElementById('left-border').textContent.length

    bar = '|▒|<br>'
    barChar = '▒'
    barPercent = page.offsetHeight / page.scrollHeight;
    barHeight = Math.max(Math.floor(barPercent * numCharHeight), 1);

    row = Math.max(Math.floor(percentScroll * (numCharHeight - barHeight)), 0);
    
    rightBorderString = ''
    for (i = 0; i < numCharHeight; i++) {
        c = ' '
        br = '<br>'
        if (i >= row && i <= row + barHeight) { c = '▒' }
        if (i == numCharHeight - 1) { br = '' }
        rightBorderString += `|${c}|${br}`
    }
    rightBorder.innerHTML = rightBorderString;
}

function scrollBar(scrollPos) {
    if (currentPage == 'blog') {
        page = document.getElementById('blog-right')
    } else {
        page = document.getElementById('page')
    }

    page.scrollTop = scrollPos;
}
