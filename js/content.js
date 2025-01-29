const windowHeader = [' _____________________________________________________________________ ',
                      '|[] Untitled - Notepad                                        |-]|n]|*|',
                      '| File Edit View """""""""""""""""""""""""""""""""""""""""""""""""""|"|']
const windowFooter = ['|___________________________________________________________________|⋰|']

// replace html header with lines above
header = document.getElementById('header')
for (line in windowHeader) {
    header.append(temp = document.createElement('div'))
    temp.innerHTML = windowHeader[line].replaceAll(' ', '&nbsp')
    temp.setAttribute('id', 'header-' + line)
}

// same with footer
footer = document.getElementById('footer')
footer.append(temp = document.createElement('div'))
temp.innerHTML = windowFooter[0].replaceAll(' ', '&nbsp')
temp.setAttribute('id', 'footer')

// manageInitialLayout()

// loop to resize ascii window, main()
setInterval(function() {

    // get current width and height
    width = document.getElementById('main-content').getBoundingClientRect()
    for (key in width) {
        if (key == 'width') {
            width = width[key]
            break
        }
    }
    height  = window.innerHeight

    // min width is 320?, update width + height
    if (width > 320) {
        for (i = 0; i < 3; i++) {
            updateWidth(width, document.getElementById(`header-${i}`))
        }
        updateWidth(width, document.getElementById('footer'))
        updateWidth(width, document.getElementById('first-line'), 4) // offset of 4 for left and right borders
    }
    updateHeight()

    manageLayoutByWidth()

}, 10);



const editPosition = 24 // position in string where characters are removed/added (to resize)
const charWidth = 8.6
const charHeight = 16
const r = document.querySelector(':root')

function updateWidth(width, element, diff=0) { // diff is offset of left and right?
    totalFit = Math.floor(width / charWidth)

    // more characters can fit, add
    while (element.textContent.length < (totalFit - diff)) {
        // char to add is one at editPosition
        element.textContent = addChar(element.textContent, element.textContent.charAt(editPosition))
    }
    // too many characters, remove
    while (element.textContent.length > (totalFit - diff)) {
        element.textContent = removeChar(element.textContent)
    }

    // update width of content page to match css
    updatePageWidth(Math.floor(width / charWidth) * charWidth + 7)
}

// update --page-width variable in css
function updatePageWidth(width) {
    r.style.setProperty('--page-width', `${(width - (charWidth * 6))}px`)
}



const leftBorder = document.getElementById('left-border')
const rightBorder = document.getElementById('right-border')

function updateHeight() { // height of content, not including header and footer
    let blogBorder = document.getElementById('blog-border')
    windowHeight = window.innerHeight - 100 // without padding

    totalFitWindow = Math.floor(windowHeight / charHeight)
    totalFitBody = totalFitWindow - 4 // not including header and footer
    currentCharCount = leftBorder.textContent.length

    // too many characters, remove
    if (totalFitBody < currentCharCount) {
        leftBorder.innerHTML = leftBorder.innerHTML.replace('|<br>', '')
        rightBorder.innerHTML = rightBorder.innerHTML.replace('| |<br>', '')

        if (typeof(blogBorder) != 'undefined' && blogBorder != null) {
            blogBorder.innerHTML = leftBorder.innerHTML.slice(0, -1)
        }

    // more characters can fit, add
    } else if (totalFitBody > currentCharCount) {
        leftBorder.innerHTML = leftBorder.innerHTML += '<br>|'
        rightBorder.innerHTML = rightBorder.innerHTML += '<br>| |'

        if (typeof(blogBorder) != 'undefined' && blogBorder != null) {
            blogBorder.innerHTML = leftBorder.innerHTML.slice(0, -1)
        }
    }

    updateScrollBar();
}

// remove character at editPosition
function removeChar(str) {
    str = str.slice(0, editPosition) + str.slice(editPosition + 1)
    return str
}

// add character at editPosition
function addChar(str, char) {
    str = str.slice(0, editPosition) + char + str.slice(editPosition)
    return str
}
