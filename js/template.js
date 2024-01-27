let currentPage = 'awefawef'
let insertTemplate = document.getElementById('insert-template')
const firstLine = document.getElementById('first-line')
let currentContent = null
let animationInProgress = false

currentPage = sessionStorage.getItem('page')
if (currentPage == null) {
    sessionStorage.setItem('page', 'home')
    currentPage = 'home'
}

// back button with bugs :D
window.addEventListener('popstate', function (event) {
    var state = event.state;
    if (state.previousPageTemplate !== currentPage) {
        template(state.previousPageTemplate, pushState = false);
    }
});

// load template
function template(name, pushState = true) {
    if (animationInProgress) {
        errorPageAlreadyLoading()
        return
    }

    if (currentPage == name) { return } // page is already open, ignore
    if (name === undefined) { name = currentPage }

    sessionStorage.setItem('page', name)
    currentPage = name
    
    // get function using name of template
    getTemplate = Function('return ' + name + 'Template')()
    doAnimation = Function('return ' + name + 'Animation')()
    // split string by newlines
    lines = getTemplate.split('<br>')

    // replace old content with new (overlapping old with new)
    currentContent = document.getElementById('insert-template')
    firstLine.scrollIntoView(true)
    let newContent = document.createElement('div')
    newContent.classList.add('insert-template')
    newContent.id = 'insert-template'
    insertTemplateContainer.insertBefore(newContent, currentContent.nextSibling)
    insertTemplate = newContent

    if (name == 'anime') {
        lines = addAnimeData(lines)
    }

    document.title = capitalize(name + ' | Java')
    if (doAnimation) {
        animationInProgress = true;
        docAnimation(lines, lines.length + 1, 0)
    } else {
        for (line of lines) {
            insertTemplate.append(temp = document.createElement('div'))
            temp.innerHTML = temp.innerHTML + line + '<br>'
        }
        currentContent.innerHTML = ''
        insertTemplateContainer.removeChild(currentContent)
        animationInProgress = false;
    }

    if (name == 'apps') {
        loadAppPage()
    }

    if (pushState) {
        history.pushState({previousPageTemplate: name}, '', '/')
    }
}

// recursive... :O
function docAnimation(text, total, i) {
    return setTimeout(function() {
        total--;
        if (total == 0) {
            currentContent.innerHTML = ''
            insertTemplateContainer.removeChild(currentContent)
            animationInProgress = false;
            return;
        }
        insertTemplate.append(temp = document.createElement('div'))
        temp.style.background = '#252423'
        temp.innerHTML = temp.innerHTML + text[i] + '<br>'
        i++
        docAnimation(text, total, i);        
    }, 15);
}

function capitalize(text) {
    words = text.split(' ')
    for (i = 0; i < words.length; i++) {
        lower = words[i].toLowerCase()
        words[i] = words[i].charAt(0).toUpperCase() + lower.slice(1)
    }
    return words.join(' ')
}
