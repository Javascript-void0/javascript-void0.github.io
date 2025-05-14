let currentPage = 'awefawef'
let insertTemplate = document.getElementById('insert-template')
const firstLine = document.getElementById('first-line')
let currentContent = null
let newContent = null
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

    if (name != 'blog') { // reset blog page when exit
        sessionStorage.setItem('blog-page', 'welcome')
    }
    
    // get function using name of template
    getTemplate = Function('return ' + name + 'Template')()
    pageRun = Function('return ' + name + 'Run')()
    pageRunPost = Function('return ' + name + 'RunPost')()
    doAnimation = Function('return ' + name + 'Animation')()
    
    // split string by newlines
    lines = getTemplate.split('<br>')

    // replace old content with new (overlapping old with new)
    currentContent = document.getElementById('insert-template')
    newContent = document.createElement('div')
    newContent.classList.add('insert-template')
    newContent.id = 'insert-template'
    newContent.style.zIndex = 1000
    insertTemplateContainer.insertBefore(newContent, currentContent.nextSibling)
    insertTemplate = newContent

    if (name == 'anime') {
        lines = addAnimeData(lines)
    }

    document.title = capitalize(name + ' | Java')
    if (doAnimation) {
        animationInProgress = true;
        firstLine.scrollIntoView()
        docAnimation(lines, lines.length + 1, 0)
    } else {
        for (line of lines) {
            insertTemplate.append(temp = document.createElement('div'))
            temp.innerHTML = temp.innerHTML + line + '<br>'
        }
        currentContent.innerHTML = ''
        insertTemplateContainer.removeChild(currentContent)
        animationInProgress = false;
        newContent.style.zIndex = ''
    }

    if (pageRun) {
        eval(pageRun)
    }

    if (pushState) {
        history.pushState({previousPageTemplate: name}, '', '/')
    }
}

// recursive... :O
function docAnimation(text, total, i) {
    setTimeout(function() {
        total--;
        if (total == 0) {
            let newContentHeight = insertTemplate.clientHeight
            let currentContentHeight = currentContent.clientHeight

            let continueAnimation = document.createElement('div')
            insertTemplate.appendChild(continueAnimation)

            // continue covering up old content
            let filler = setInterval(function() {
                if (newContentHeight > currentContentHeight) {


                    // FINISHED LOADING BODY
                    currentContent.innerHTML = ''
                    insertTemplateContainer.removeChild(currentContent)
                    animationInProgress = false;

                    // add extra padding on bottom
                    for (i = 0; i < 3; i++) {
                        insertTemplate.append(temp = document.createElement('br'))
                    }

                    if (pageRunPost) {
                        eval(pageRunPost)
                    }

                    // scroll up
                    let unfiller = setInterval(function() {
                        continueAnimation.removeChild(continueAnimation.lastChild)
                        if (!continueAnimation.hasChildNodes()) {
                            clearInterval(unfiller)
                            insertTemplate.removeChild(continueAnimation)
                        }
                    }, 15);

                    clearInterval(filler)


                }
                newContentHeight = insertTemplate.clientHeight
                currentContentHeight = currentContent.clientHeight

                continueAnimation.append(temp = document.createElement('div'))
                temp.style.background = 'var(--main-content-background)'
                temp.innerHTML = '<br>'

            }, 15);
            // firstLine.scrollIntoView()
            return;
        }
        insertTemplate.append(temp = document.createElement('div'))
        temp.style.background = 'var(--main-content-background)'
        temp.innerHTML = temp.innerHTML + text[i] + '<br>'

        docAnimation(text, total, i + 1);        
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
