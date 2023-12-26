const homeTemplate = `
	&nbsp&nbspHome
	<br>
	<br># <span class="secondary">Welcome</span>
	<br>
	<br>&nbsp&nbspwelcome to my corner of the internet <span class="secondary">:3</span>
	<br>
	<br>&nbsp&nbsp======== <span class="secondary">***</span> ========
	<br>&nbsp&nbsp** <span class="secondary">Beware</span>
	<br>&nbsp&nbspYou might need a <a href='https://en.wikipedia.org/wiki/Pleiades_(supercomputer)' target='_blank' rel='noopener nonreferrer'>NASA supercomputer</a> to load this stupid website...
	<br>&nbsp&nbspgood luck <span class="secondary">:I</span>
	<br>&nbsp&nbsp======== <span class="secondary">***</span> ========
	<br>
	<br>
	<br> ## <span class="secondary">Navigation</span>
    <br>
	<br>&nbsp&nbspType <insert onclick="insert('help')">'help'</insert> for a list of commands.
	<br>&nbsp&nbspType <insert onclick="insert('pages')">'pages'</insert> for list of pages. 
	<br>&nbsp&nbspDo <span class="secondary pointer" onclick="toggleMenu()" style="cursor: pointer;">'ctrl + s'</span> to toggle side panel. 
	<br>
	<br><img src="assets/images/ina.gif">
	<br>
	<br># <span class="secondary">Menu</span>
	<br>
	<br>&nbsp&nbsp> <a onclick="template('about');return false" href="javascript:void(0);">About</a>
	<br>&nbsp&nbsp&nbsp&nbsp> <a onclick="template('anime');return false" href="javascript:void(0);">Anime</a>
	<br>&nbsp&nbsp&nbsp&nbsp> <a onclick="template('setup');return false" href="javascript:void(0);">Setup</a>
	<br>&nbsp&nbsp> <a onclick="template('projects');return false" href="javascript:void(0);">Projects</a>
	<br>&nbsp&nbsp> <a onclick="template('resources');return false" href="javascript:void(0);">Resources</a>
	<br>&nbsp&nbsp> <a onclick="template('apps');return false" href="javascript:void(0);">Apps</a>
	<br>
	<br>## <span class="secondary">Subpages</span>
	<br>
	<br>&nbsp&nbsp> <a href="/digital-garden">Digital Garden</a>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>&nbsp❤ <span class="secondary">Brought to you by my awful web development skills</span>
	<br>
	<br>&nbsp&nbsp&nbsp (c) 2023 Java
	<br>
	<br>
`
