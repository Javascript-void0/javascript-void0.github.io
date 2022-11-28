function insertSidebar() {
    s = document.createElement('div')
    s.id = 'sidebar'
    s.classList.add('sidebar')
    s.innerHTML = sidebar
    document.body.prepend(s)
}

const sidebar = `
<a href='/digital-garden'>Digital Garden</a>
<span id="mobile-hide">
    <br>
    <br><a href="/digital-garden/">Welcome</a><span class="mobile-hide"> -</span>
    <br><a href="/digital-garden/about/">About</a><span class="mobile-hide"> -</span>
    <br><a href="/digital-garden/posts/">Posts</a><span class="mobile-hide"> -</span>
    <br>
    <br><a href="/">Home</a><span class="mobile-hide"></span> / <a href="https://github.com/Javascript-void0/javascript-void0.github.io/tree/main/digital-garden">Source</a><span class="mobile-hide"></span>
    <br>
    <br>
    <hr>
    <br>Recent:
    <br>
    <br>
</span>
<div class="menu-button" id="menu-button" onclick="toggleMenu()">a</div>
`
