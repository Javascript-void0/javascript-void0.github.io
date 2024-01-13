toastWidthChars = Math.floor(396 / charWidth);
toastInsert = document.getElementById('insert-toast')
toastBorder = '_'.repeat(toastWidthChars-2)
currentToast = null

// holy moly
function alert(text) {
    deleteToast()
    console.log(`ALERT: ${text}`)
    toast = document.createElement('div')
    toast.classList.add('toast')
    buildBody = ''
    for (i = 0; i < text.length; i++) {
        if (i == 0) {
            maxChars = 32
            buildBody += '</br>|&nbsp&nbsp[@]&nbsp' + text[i] + '&nbsp'.repeat(maxChars - text[i].length) + '<span style="float: right;"><span style="cursor: pointer" onclick="deleteToast()">[*]</span>&nbsp&nbsp|</span>\n'
        } else {
            maxChars = 37
            slice = Math.min(text.length, maxChars)
            buildBody += '</br>|' + '&nbsp'.repeat(6) + text[i] + '&nbsp'.repeat(maxChars - text[i].length) + '<span style="float: right;">|</span>\n'
        }
    }
    toast.innerHTML = `&nbsp${toastBorder}
<br>|${"&nbsp".repeat(toastWidthChars-2)}|
${buildBody}
<br>|${toastBorder}|`
    toastInsert.appendChild(toast)

    // set timer auto delete
    currentToast = setTimeout(function() {
        deleteToast()
    }, 3500);
}

function deleteToast() {
    toastInsert.innerHTML = ''
    clearTimeout(currentToast)
}

// able to if terminal/sidebar is visible
function ableType(text) {
    if (menuIsVisible()) {
        document.getElementById('input').textContent = text
    } else {
        alert(['sidebar not visible: ', '', "do 'ctrl-s' to open sidebar"])
    }
}

// able to if window width is within range
function ableToggle() {
    if (window.innerWidth > onlyContentThreshold || 
        window.innerWidth < onlySidebarThreshold) {
        toggleMenu()
    } else {
        alert(['window too narrow, sidebar', 'is unavailable'])
    }
}

function errorLoadAnilist() {
    alert(['unable to retrieve data from', 'anilist'])
}