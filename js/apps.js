apps = [
    ['square-2', '2048'],
    ['grid', 'game-of-life'],
    ['keyboard', 'keyboard-layout'],
    ['apple-arcade', 'snake']
]

function loadAppPage() {
    insert = document.getElementById('insert-template')
    div = document.createElement('div')
    div.id = 'app-container'
    insert.append(div)
    loadApps();
}

function loadApps() {
    container = document.getElementById('app-container')
    for (app of apps) {
        icon = app[0]
        title = app[1]
        buttonTemplate = `
		    <a class="app-button" href="/apps/${title}/">
			    <div class="icon" id="${icon}">a</div>
			    <div class="title">${title}</div>
		    </a>
        `
        container.innerHTML += buttonTemplate
    }
}