var currentPage = 'home'

currentPage = sessionStorage.getItem('page')
if (currentPage == null) {
    sessionStorage.setItem('page', 'home')
    currentPage = 'home'
}

window.addEventListener('popstate', function (event) {
    var state = event.state;
    if (state.previousPageTemplate !== currentPage) {
        template(state.previousPageTemplate, pushState = false);
    }
});

function template(name = currentPage, pushState = true) {
    sessionStorage.setItem('page', name)
    currentPage = name
    
    getTemplate = Function('return ' + name + 'Template')()
    // lines = chunkSubstr(getTemplate.innerHTML, 50)
    lines = getTemplate.split('<br>')
    document.getElementById('insert-template').innerHTML = ''
    // document.getElementById('insert-template').innerHTML = getTemplate.innerHTML
    if (name == 'anime') {
        lines = addAnimeData(lines)
    }
    document.title = capitalize(name + ' | Java')
    docAnimation(lines, lines.length + 1, 0)

    if (pushState) {
        history.pushState({previousPageTemplate: name}, '', '/')
    }
}

// function chunkSubstr(str, size) {
//     const numChunks = Math.ceil(str.length / size)
//     const chunks = new Array(numChunks)
//     for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
//         chunks[i] = str.substr(o, size)
//     }
//     return chunks
// }

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