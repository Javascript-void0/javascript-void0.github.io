const dramaAnimation = false
const dramaRun = 'dramaFetch()'

async function dramaFetch() {
	const url = "https://mydramalist.com/widgets/ObAlZk/list_updates?status=2&header=Recently Completed&limit=8&rating=0&type=1&seen=1";
	const response = await fetch(url);

	if (!response.ok) {
		widget = document.getElementById('mdl_widget_ObAlZk')
		widget.innerHTML = "out of service :("
		throw new Error(`HTTP error: ${response.status}`);
	}
	return eval(await response.text());
}


const dramaRunPost = null
const dramaTemplate = `
	<div class="breadcrumb">
<a onclick="template('home');return false" href="javascript:void(0)">Home</a>&nbsp>&nbsp<a onclick="template('about');return false" href="javascript:void(0)">About</a>&nbsp>&nbspDrama
	</div>
	<br>
	<br>
	<br>
<style type="text/css" media="screen">
@font-face {
    font-family: Space Grotesk;
    src: url(../assets/fonts/SpaceGrotesk[wght].ttf)
}
.mdlw-container-ObAlZk {
	padding: 12px;
	border-radius: 5px;
	width: 700px;
	margin-left: 12px;
	margin: auto;
	background: #00000040;
    font-family: Space Grotesk, Georgia, 'Times New Roman', Times, serif;
	padding-bottom: 25px;
}
.mdlw-item-ObAlZk {
	display: block;
	position: relative;
	padding: 12px 10px;
	overflow: hidden;
	margin-left: 15px;
}
.mdlw-container-ObAlZk a {
	text-decoration: none;
	cursor: pointer;
	outline: 0;
}
.mdlw-header-ObAlZk {
	font-size: 25px;
	margin: 20px 10px;
	margin-bottom: 20px;
}
.mdlw-title-ObAlZk {
	font-size: 16px;
}
.mdlw-title-ObAlZk .mdlw-ep-seen {
	padding-left: 3px;
}
.mdlw-ctype-ObAlZk {
	color: var(--secondary)
}
.mdlw-status-ObAlZk {
}
.mdlw-cover-ObAlZk {
	width:88px;
	height:122px;
	background-color: #black;
	float: left;
	margin-right: 10px;
	display: block;
}
.mdlw-cover-ObAlZk > a {
	width: 100%;
	display: block;
}
.mdlw-cover-ObAlZk img {
	width: 100%;
	display: block;
}
.mdlw-content-ObAlZk {
	margin-left: 98px;
	min-height: 60px;
}
.mdlw-btn-ObAlZk {
	--width: 120px;
	margin-left: calc(100% - var(--width));
	width: var(--width);
}
.mdlw-time-ObAlZk {
	color: inherit;
	color: var(--accent);
}</style>
<div id="mdl_widget_ObAlZk"></div>

`

