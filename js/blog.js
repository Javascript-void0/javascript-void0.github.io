function loadBlogPage() {
    insert = document.getElementById('insert-template')
    div = document.createElement('div')
    div.id = 'blog-container'
    insert.append(div)

    left = document.createElement('div')
    left.id = 'blog-left'
    div.append(left)

    left.innerHTML= `<span style="margin-right: 20%">Java's 'blog'</span>

<img src="assets/images/mio-circle.png" style="width: 8rem; margin-right: 2rem">

<a onclick="blogOpenPost('welcome')" href="javascript:void(0);">Welcome</a> -
<a onclick="blogOpenPost('about')" href="javascript:void(0);">About</a> -
<a onclick="blogOpenPost('posts')" href="javascript:void(0);">Posts</a> -

Go: <a onclick="template('home'); return false;" href="javascript:void(0);">Home</a> / <a onclick="history.back()" href="javascript:void(0);">Back</a>

- - - - - - - - - - - - -

Recent:




    `

    border = document.createElement('div')
    border.id = 'blog-border'
    border.innerHTML= leftBorder.innerHTML.slice(0, -1)
    div.append(border)

    right = document.createElement('div')
    right.id = 'blog-right'
    div.append(right)

    blogOpenPost('welcome')
    blogLoadPosts()
}

function blogLoadRecent() {

}

let posts = [
    ['August 2022', 'Post 1'], 
    ['July 2023', 'Post 2'], 
    ['September 2023', 'Post 3']
]
function blogLoadPosts() {
    // for (i = 0; i < 10; i++) {
    //     if (test2) {
    //         return
    //     }
    //     console.log('test', i)
    //     import(`/posts/1.js`).then(post => {
    //         if (!post) {
    //             console.log('tosijoawijfoewij')
    //         }
    //         posts.append([posts.postDate, posts.postTitle, posts.postContent])
    //     }).catch((error) => { console.log(test2); test2 = true; return })
    // }
}

function blogOpenPost(post) {
    let blogRight = document.getElementById('blog-right')
    import(`/posts/${post}.js`).then(post => {
        blogRight.innerHTML = `<h1 class="post-title">${post.postTitle}</h1>
<p class="post-date">${post.postDate}</p>
<hr>

${post.postContent}
`
    })
}