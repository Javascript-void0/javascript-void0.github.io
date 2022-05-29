const windowHeader = [' _____________________________________________________________________ ',
                      '|[] Untitled - Notepad                                        |-]|n]|*|',
                      '|File Edit View """"""""""""""""""""""""""""""""""""""""""""""""""""|"|']
const windowFooter = ['|___________________________________________________________________|/|']

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
    width = document.getElementById('main-content').offsetWidth
    height  = window.innerHeight
    if (width > 400) {
        for (i = 0; i < 3; i++) {
            updateWidth(width, document.getElementById(`header-${i}`))
        }
        updateWidth(width, document.getElementById('footer'))
        updateWidth(width, document.getElementById('first-line'), 4)
    }
    updateHeight(height)
}, 10);

editPosition = 24
charWidth = (611 / 71)
charHeight = (1054.55 / 58)

function updateWidth(width, element, diff=0) {
    totalFit = Math.floor(width / charWidth)
    while (element.textContent.length < (totalFit - diff)) {
        element.textContent = addChar(element.textContent, element.textContent.charAt(editPosition))
    }
    while (element.textContent.length > (totalFit - diff)) {
        element.textContent = removeChar(element.textContent)
    }
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