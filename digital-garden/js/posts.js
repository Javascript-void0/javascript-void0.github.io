function loadRecent() {
    recent = document.getElementById('mobile-hide')
    if (posts.length > 10) {
        len = 10
    } else {
        len = posts.length
    }
    for (i = 0; i < len; i++) {
        var link = document.createElement('a')
        link.textContent = posts[i][1].slice(0, -5)
        link.href = '/digital-garden/posts/' + posts[i][1]
        recent.appendChild(link)
        recent.appendChild(document.createElement('br'))
    }
}

function loadPosts() {
    list = document.getElementById('list')

    var years = []

    for (i = 0; i < posts.length; i++) {
        date = posts[i][0].split(' ')
        year = date[1]
        if (!years.includes(year)) {
            years.push(year)
        }
    }

    for (i = 0; i < years.length; i++) {
        var element = document.createElement('div')
        element.textContent = years[i]
        element.id = years[i]
        console.log(i)
        if (i >= 1) {
            list.appendChild(document.createElement('br'))
        }
        list.appendChild(element)
        element.appendChild(document.createElement('hr'))
        
    }

    for (i in posts) {
        year = (posts[i][0].split(' '))[1]
        month = (posts[i][0].split(' '))[0]
        title = posts[i][1]
        var link = document.createElement('a')
        link.textContent = month + ' - ' + title.slice(0, -5)
        link.href = '/digital-garden/posts/' + title
        section = document.getElementById(year)
        section.appendChild(link)
        section.appendChild(document.createElement('br'))
    }
}

const posts = [
    ['August 2022', 'Brydge for Surface.html'],
    ['July 2022', 'Inefficient Coding.html']
]