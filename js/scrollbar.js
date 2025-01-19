String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

onScrollBar = false;
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

    if (currentPage == 'blog') {
        page = document.getElementById('blog-right')
    } else {
        page = document.getElementById('page')
    }
    current = page.scrollTop
    max = page.scrollHeight - page.offsetHeight;
    percentScroll = current / max

    numCharHeight = document.getElementById('left-border').textContent.length

    bar = '|▒|<br>'
    barPercent = page.offsetHeight / page.scrollHeight;
    barHeight = Math.max(Math.floor(barPercent * numCharHeight), 1);

    row = Math.max(Math.floor(percentScroll * (numCharHeight - barHeight)), 0);
    
    rowCharLen = 7;
    // reset right border - remove prev bar
    rightBorder.innerHTML = ('| |<br>'.repeat(numCharHeight - 1) + '| |')

    // draw bar
    if (page.scrollHeight > page.clientHeight) { // scrollable
        bar = bar.repeat(barHeight)
        rightBorder.innerHTML = rightBorder.innerHTML.replaceAt(rowCharLen * row, bar)
    }
}

function scrollBar(scrollPos) {
    if (currentPage == 'blog') {
        page = document.getElementById('blog-right')
    } else {
        page = document.getElementById('page')
    }

    page.scrollTop = scrollPos;
}