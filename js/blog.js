function loadBlogPage() {
    page = document.getElementById('page')
    page.scrollTop = 0;

    insert = document.getElementById('insert-template')
    div = document.createElement('div')
    div.id = 'blog-container'
    insert.append(div)

    left = document.createElement('div')
    left.id = 'blog-left'
    div.append(left)

    left.innerHTML= `<span style="margin-right: 20%">Java's 'blog'</span>

<img src="assets/images/mio-circle.png" style="width: 8rem; margin-right: 2.3rem">

<a onclick="blogOpenPost('welcome')" href="javascript:void(0);">Welcome</a> -
<a onclick="blogOpenPost('about')" href="javascript:void(0);">About</a> -
<a onclick="blogOpenPost('posts')" href="javascript:void(0);">Posts</a> -

Go: <a onclick="template('home'); return false;" href="javascript:void(0);">Home</a> / <a onclick="history.back()" href="javascript:void(0);">Back</a>

- - - - - - - - - - - - -

Recent:

`

    border = document.createElement('div')
    border.id = 'blog-border'
    border.classList.add('border')
    border.innerHTML= leftBorder.innerHTML.slice(0, -1)
    div.append(border)

    right = document.createElement('div')
    right.id = 'blog-right'
    rightContainer = document.createElement('div')
    rightContainer.id = 'blog-right-container'
    right.append(rightContainer);
    div.append(right)

    if (Object.keys(byYear).length === 0) {
        blogSortByYear()
    }
        
    blogLoadRecent()
    blogOpenPost(sessionStorage.getItem('blog-page'))
}

function blogSortByYear() {
    for (i = 1; i <= numPosts; i++) {
        post = posts.get('' + i)
        postYear = post.postYear
        if (postYear in byYear) {
            byYear[postYear].push(post)
        } else {
            byYear[postYear] = [post]
        }
    }
    years = Object.keys(byYear)
}

function blogLoadRecent() {
    let count = 0;
    ret = ''
    for (i = years.length - 1; i >= 0; i--) {
        let year = years[i]
        let postsInYear = byYear[year]
        for (post of postsInYear) {
            ret += `<a onclick="blogOpenPost(${post.postID})" href="javascript:void(0)">${post.postTitle}</a>
`
            count++
            if (count == 5) { i = -1; break; }
        }
    }
    let blogLeft = document.getElementById('blog-left')
    blogLeft.innerHTML += ret
}

let numPosts = 6; // this website is static :(
let posts = new Map()
let byYear = {}
let years = []
let extraPages = ['posts', 'welcome', 'about']
// load all pages
for (i = 1; i <= numPosts; i++) {
    import(`/posts/${i}.js`).then(post => {
        posts.set(post.postID, Object.assign({}, post))
    })
}
for (page of extraPages) {
    import(`/posts/${page}.js`).then(post => {
        posts.set(post.postID, Object.assign({}, post))
    })
}

function blogOpenPost(postID) {
    postID = '' + postID
    let blogRight = document.getElementById('blog-right-container')
    let post = posts.get(postID)
    let postContent = post.postContent
    if (postID == 'posts') { postContent = listOfPosts() }
    blogRight.innerHTML = `<h1 class="post-title">${post.postTitle}</h1>
<p class="post-date">${post.postDate}</p>
<hr>

<div class="post-content">${postContent}</div>
`
    sessionStorage.setItem('blog-page', postID)
}

function listOfPosts() {
    let ret = ''
    for (i = years.length - 1; i >= 0; i--) {
        let year = years[i]
        ret += `<h4>${year}</h4><ul>
`
        let postsInYear = byYear[year]
        for (post of postsInYear) {
            ret += `<li>${post.postDate} - <a onclick="blogOpenPost(${post.postID})" href="javascript:void(0)">${post.postTitle}</a></li>
`
        }
        ret += '</ul>'
    }
    return ret;
}