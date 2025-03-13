const homeAnimation = true
const homeRun = null
const homeRunPost = null
const homeTemplate = `
	<div class="breadcrumb">
Home
	</div>
	<link rel="stylesheet" href="pages/home.css">
	<br>
	<br>
	<br># <span class="secondary">Welcome <span lang="zh">欢迎</span>
	<br>
	<br>
	<br><div class="center" style="max-width: var(--content-max-width)">welcome to my corner of the internet <span class="secondary">:3</span></div>
	<br>
	<div class="center" style="max-width: var(--content-max-width)">
====================== <span class="secondary">***</span> ======================
......
You might need a <a href='https://en.wikipedia.org/wiki/Pleiades_(supercomputer)' target='_blank' rel='noopener nonreferrer'>NASA supercomputer</a> to 
load this stupid website...

I appologize in advance if your computer
<div style="text-align: left; display: inline-block; margin-left: -40px;">
a). blows up
b). starts doing backflips
c). yeets itself out the window

</div>
====================== <span class="secondary">=.=</span> ======================
	</div>
	<br> ## <span class="secondary">Navigation</span>
	<hr style="width: calc(100% - 130px); max-width: calc(var(--content-max-width) - 120px)">
    <br>
	<br>&nbsp&nbspType <insert onclick="ableType('help')">'help'</insert> for a list of commands.
	<br>&nbsp&nbspType <insert onclick="ableType('pages')">'pages'</insert> for list of pages. 
	<br>&nbsp&nbspDo <span class="secondary pointer no-sel" onclick="ctrlSToggle()" style="cursor: pointer;">'ctrl + s'</span> to toggle side panel. 
	<br>
	<br>&nbsp&nbsp<span class="secondary">*</span> Side panel is unavailable if window too narrow. 
	<br>
	<br><img src="assets/images/ina.gif">
	<br>
	<br># <span class="secondary">Menu</span>
	<hr style="width: calc(100% - 70px); max-width: calc(var(--content-max-width) - 60px)">
	<br>
	<br>
	<div id="home-menu">
		<div class="home-menu-category">
			> <a onclick="template('about');return false" href="javascript:void(0);">About</a>
			<br class="ignore">&nbsp&nbsp> <a onclick="template('anime');return false" href="javascript:void(0);">Anime</a>
			<br class="ignore">&nbsp&nbsp> <a onclick="template('setup');return false" href="javascript:void(0);">Setup</a>
			<br class="ignore">> <a onclick="template('projects');return false" href="javascript:void(0);">Projects</a>
			<br class="ignore">&nbsp&nbsp> <a onclick="template('gallery');return false" href="javascript:void(0);">Gallery</a>
		</div>
		<div class="home-menu-category home-menu-left">
			> <a onclick="template('resources');return false" href="javascript:void(0);">Resources</a>
			<br class="ignore">> <a onclick="template('apps');return false" href="javascript:void(0);">Apps</a>
			<br class="ignore">> <a onclick="template('blog');return false" href="javascript:void(0);">Blog</a>
		</div>
	</div>
	<br>## <span class="secondary">Subpages</span>
	<br>
	<br>&nbsp&nbsp> None
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>&nbsp❤ <span class="secondary">Brought to you by my awful web development skills</span>
	<br>
	<br>&nbsp&nbsp&nbsp (c) 2022-2025 Java
	<br>
	<br>
`
