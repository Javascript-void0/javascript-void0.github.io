let currentTheme = sessionStorage.getItem('theme')

if (currentTheme == null) {
    sessionStorage.setItem('theme', 'dark')
    currentTheme = 'dark'
}

if (currentTheme == 'light') { toggleTheme(true) }

function toggleTheme(lightTheme) {
    root = document.querySelector(':root')
    vars = ['primary', 'secondary', 'accent', 'color', 'main-content-background', 'dot-background']

    if (currentTheme === 'light' && !lightTheme) {
        for (v of vars) {
            root.style.setProperty('--' + v, 'var(--dark-' + v + ')')
        }
        currentTheme = 'dark'
        sessionStorage.setItem('theme', 'dark')
    } else {
        for (v of vars) {
            root.style.setProperty('--' + v, 'var(--light-' + v + ')')
        }
        currentTheme = 'light'
        sessionStorage.setItem('theme', 'light')
    }
}
