const windowHeader = [' _____________________________________________________________________ ',
                      '|[] Untitled - Notepad                                        |-]|n]|*|',
                      '| File Edit View """""""""""""""""""""""""""""""""""""""""""""""""""|"|']
const windowFooter = ['|___________________________________________________________________|⋰|']

header = document.getElementById('header')
for (line in windowHeader) {
    header.append(temp = document.createElement('div'))
    temp.innerHTML = windowHeader[line].replaceAll(' ', '&nbsp')
    temp.setAttribute('id', 'header-' + line)
}

footer = document.getElementById('footer')
footer.append(temp = document.createElement('div'))
temp.innerHTML = windowFooter[0].replaceAll(' ', '&nbsp')
temp.setAttribute('id', 'footer')

setInterval(function() {
    width = document.getElementById('main-content').getBoundingClientRect()
    for (key in width) {
        if (key == 'width') {
            width = width[key]
            break
        }
    }
    height  = window.innerHeight
    if (width > 320) {
        for (i = 0; i < 3; i++) {
            updateWidth(width, document.getElementById(`header-${i}`))
        }
        updateWidth(width, document.getElementById('footer'))
        updateWidth(width, document.getElementById('first-line'), 4)
    }
    if (window.innerWidth < 870) {
        if (menuIsVisible()) {
            toggleMenu(false)
            toggleContent(true)
        }
    } else {
        toggleContent(true)
    }

    if (window.innerWidth < 567) {
        if (!menuIsVisible()) {
            toggleMenu(true)
        }
    }
    updateHeight(height)
}, 1); // idk help

editPosition = 24
charWidth = (612.71 / 71)
// charHeight = (1054.55 / 58)
charHeight = getLineHeight(document.getElementById('page-body'))

function updateWidth(width, element, diff=0) {
    totalFit = Math.floor(width / charWidth)
    while (element.textContent.length < (totalFit - diff)) {
        element.textContent = addChar(element.textContent, element.textContent.charAt(editPosition))
    }
    while (element.textContent.length > (totalFit - diff)) {
        element.textContent = removeChar(element.textContent)
    }
    updatePageWidth(Math.floor(width / charWidth) * charWidth + 3.5)
}

charWidth = (612.71 / 71)

function updatePageWidth(width) {
    r = document.querySelector(':root')
    r.style.setProperty('--page-width', `${(width - (charWidth * 6))}px`)
}

leftBorder = document.getElementById('left-border')
rightBorder = document.getElementById('right-border')

function updateHeight(height) {
    windowHeight = height - 100
    totalFitWindow = Math.floor(windowHeight / charHeight)
    totalFitBody = totalFitWindow - 4
    currentCharCount = leftBorder.textContent.length
    if (totalFitBody < currentCharCount) {
        leftBorder.innerHTML = leftBorder.innerHTML.replace('|<br>', '')
        rightBorder.innerHTML = rightBorder.innerHTML.replace('| |<br>', '')
    } else if (totalFitBody > currentCharCount) {
        leftBorder.innerHTML = leftBorder.innerHTML += '<br>|'
        rightBorder.innerHTML = rightBorder.innerHTML += '<br>| |'
    }
}

function removeChar(str) {
    str = str.slice(0, editPosition) + str.slice(editPosition + 1)
    return str
}

function addChar(str, char) {
    str = str.slice(0, editPosition) + char + str.slice(editPosition)
    return str
}

function getLineHeight(el) { // https://stackoverflow.colm/a/4515470
    var temp = document.createElement(el.nodeName), ret;
    temp.setAttribute("style", "margin:0; pading:0; "
        + "font-family:" + (el.style.fontFamily || "inherit") + "; "
        + "font-size:" + (el.style.fontSize || "inherit"));
    temp.innerHTML = "A";

    el.parentNode.append(temp);
    ret = temp.clientHeight;
    temp.parentNode.removeChild(temp);
    
    return ret;
}