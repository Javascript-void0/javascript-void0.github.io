const animeTemplate = `
	&nbsp&nbsp<a onclick="template('home');return false" href="javascript:void(0)">Home</a>&nbsp>&nbsp<a onclick="template('about');return false" href="javascript:void(0)">About</a>&nbsp>&nbspAnime
	<br>
	<br># <span class="secondary">Anime</span>
	<br>
	<br>&nbsp> Anilist: <a href='https://anilist.co/user/5641461'target='_blank' rel='noopener nonreferrer'>@Java</a>&nbsp// main
	<br>&nbsp> MyAnimeList: <a href='https://myanimelist.net/profile/vlucent'target='_blank' rel='noopener nonreferrer'>@vlucent</a>
	<br>&nbsp> Kitsu: <a href='https://kitsu.io/users/java'target='_blank' rel='noopener nonreferrer'>@Java</a>
	<br>
	<br>
	<img src="assets/mugi.png" style="width: 200px;">
	<br>
	<br>## <span class="secondary">Statistics (via <a href='https://anilist.co'target='_blank' rel='noopener nonreferrer'>Anilist</a>)</span>
	<br>
	<div id="anime-data"></div>
	<script type="text/javascript">loadAnimeData()</script>
`