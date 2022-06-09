
function template(name) {
    getTemplate = document.getElementById(`template-${name}`)
    // lines = chunkSubstr(getTemplate.innerHTML, 50)
    lines = getTemplate.innerHTML.split('<br>')
    document.getElementById('insert-template').innerHTML = ''
    // document.getElementById('insert-template').innerHTML = getTemplate.innerHTML
    if (name == 'anime') {
        lines = addAnimeData(lines)
    }
    docAnimation(lines, lines.length + 1, 0)
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
        insertTemplate.append(temp = document.createElement('span'))
        temp.innerHTML = temp.innerHTML + text[i] + '<br>'
        i++
        docAnimation(text, total, i);        
    }, 15);
}