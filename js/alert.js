toastWidthChars = Math.floor(396 / charWidth);
toastInsert = document.getElementById('insert-toast')
toastBorder = '_'.repeat(toastWidthChars-2)

// holy moly
function alert(text) {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toastId = Math.floor(100000 + Math.random() * 900000);
    toast.id = 'toast' + toastId
    buildBody = ''
    for (i = 0; i < text.length; i++) {
        if (i == 0) {
            maxChars = 32
            buildBody += '</br>|&nbsp&nbsp[@]&nbsp' + text[i] + '&nbsp'.repeat(maxChars - text[i].length + 1) + '<span style="float: right;"><span style="cursor: pointer" onclick="deleteToast(' + toastId + ')">[*]</span>&nbsp&nbsp|</span>\n'
        } else {
            maxChars = 37
            slice = Math.min(text.length, maxChars)
            buildBody += '</br>|' + '&nbsp'.repeat(6) + text[i] + '&nbsp'.repeat(maxChars - text[i].length + 1) + '<span style="float: right;">|</span>\n'
        }
    }
    toast.innerHTML = `&nbsp${toastBorder}
<br>|${"&nbsp".repeat(toastWidthChars-2)}|
${buildBody}
<br>|${toastBorder}|`
    toastInsert.appendChild(toast)

    // set timer auto delete
    setTimeout(function() {
        try {
            toastInsert.removeChild(toast)
        } catch (DOMException) {
            // toast already deleted (by user)
            return
        }
    }, 3500);
}

function deleteToast(id) {
    toast = document.getElementById('toast' + id)
    if (toast) {
        toastInsert.removeChild(toast)
    }
}

// able to if terminal/sidebar is visible
function ableType(text) {
    if (menuIsVisible) {
        document.getElementById('input').textContent = text
        // send/enter command automatically
        RunCommand(text)
    } else {
        alert(['sidebar not visible: ', '', "do 'ctrl-s' to open sidebar"])
    }
}

// able to if window width is within range
function ableToggle(option, manualToggle=false) {
    if (window.innerWidth > onlyContentThreshold || 
        window.innerWidth < onlySidebarThreshold) {
        toggleMenu(option, manualToggle)
    } else {
        alert(['window too narrow, sidebar', 'is unavailable'])
    }
}

function errorLoadAnilist() {
    alert(['unable to retrieve data from', 'anilist'])
}

function errorPageAlreadyLoading() {
    alert(['slow down!', '', 'another page is still being loaded'])
}
