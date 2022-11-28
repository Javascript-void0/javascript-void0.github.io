// injects header to page
function insertHeader() {
    header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = `
        <div class="header-left">
            <a href='/apps'><div id="icon">a</div></a>
        </div>
        <div class="header-right">
            Generated from <a href='https://github.com/florinpop17/app-ideas 'target='_blank' rel='noopener nonreferrer'>app-ideas</a>
            <br><a id="source" href='https://github.com/Javascript-void0/javascript-void0.github.io/tree/main/apps'>Source</a> / <a href='/'>Home</a>
        </div>
    `

    center = document.getElementsByClassName('center')[0]
    center.prepend(header)

    // update source link of template
    url = window.location.href
    url = url.split('/')
    url = url.slice(-3, -1)
    sourceLink = document.getElementById('source')
    sourceLink.href += "/" + url.join('/')
}

// dynamically creates links to apps under a section
function loadBlocks(apps, id, category) {
    for (i = 0; i < apps.length; i++) {
        appName = apps[i][0]
        icon = apps[i][1]

        var html = `
        <div class="page">
            <div class="page-icon" id="${icon}">a</div>
            ${appName}
        </div>
        `
        link = document.createElement('a')
        link.href = `/apps/${category}/${appName}`
        link.innerHTML = html

        tier = document.getElementById(id)
        tier.append(link)
    }
}
