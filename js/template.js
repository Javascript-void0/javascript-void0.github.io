var currentPage = 'home'

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
function template(name = currentPage, pushState = true) {
    sessionStorage.setItem('page', name)
    currentPage = name
    
    // get function using name of template
    getTemplate = Function('return ' + name + 'Template')()
    // split string by newlines
    lines = getTemplate.split('<br>')
    // clear existing content
    document.getElementById('insert-template').innerHTML = ''

    if (name == 'anime') {
        lines = addAnimeData(lines)
    }

    document.title = capitalize(name + ' | Java')
    docAnimation(lines, lines.length + 1, 0)

    if (pushState) {
        history.pushState({previousPageTemplate: name}, '', '/')
    }
}

// recursive... :O
function docAnimation(text, total, i) {
    var insertTemplate = document.getElementById('insert-template')
    setTimeout(function() {
        total--;
        if (total == 0) {
            return true;
        }
        insertTemplate.append(temp = document.createElement('div'))
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
