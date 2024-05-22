const projectsAnimation = true
const projectsTemplate = `
	<style>
		hr {
			--margin: 1rem;
			border: 1px solid var(--accent);
			filter: brightness(0.6);
			margin-left: var(--margin);
			margin-right: var(--margin);
		}

		img {
			max-height: 8rem;
			border-radius: 10px;
		}
	</style>
	<div style="position: fixed; width: var(--page-width); background: var(--main-content-background); white-space: pre-wrap;">
  <a onclick="template('home');return false" href="javascript:void(0);">Home</a>&nbsp>&nbspProjects
<br></div> 
	<br>
	<br>
	<br>## <span class="secondary">al-utils</span>
	<br>
	<br>&nbsp&nbsp&nbsp<img src="/assets/images/project-banners/al-utils-banner.png">
	<br>
	<br>&nbsp&nbsp&nbsp&nbsp&nbspSmall utilities for <a href="https://anilist.co" target="_blank" rel="noopener nonreferrer">AniList</a>. 
	<br>
	<br>&nbsp&nbsp&nbsp-&nbsp[<a href="https://github.com/al-utils" target="_blank" rel="noopener nonreferrer"><span class="secondary">GitHub</span></a>] [<a href="https://al-utils.github.io" target="_blank" rel="noopener nonreferrer"><span class="secondary">Website</span></a>]
	<br>
	<br>
	<hr>
	<br>## <span class="secondary">batch</span>
	<br>
	<br>&nbsp&nbsp&nbsp<img src="/assets/images/project-banners/batch-banner.png">
	<br>
	<br>&nbsp&nbsp&nbsp&nbsp&nbspFlashcard App for Android, using Xamarin.Forms
	<br>
	<br>&nbsp&nbsp&nbsp-&nbsp[<a href="https://github.com/javascript-void0/batch" target="_blank" rel="noopener nonreferrer"><span class="secondary">GitHub</span></a>]
	<br>
	<br>
	<hr>
	<br>## <span class="secondary">Umoria</span> (Oct 2021 - gave up)
	<br>
	<br>&nbsp&nbsp&nbsp<img src="/assets/images/project-banners/umoria-banner.png">
	<br>
	<br>&nbsp&nbsp&nbspMinecraft RPG server hosted on <a href="https://minehut.com" target="_blank" rel="noopener nonreferrer">Minehut</a>. 
	<br>
	<br>&nbsp&nbsp&nbsp[<a href="https://github.com/umoria" target="_blank" rel="noopener nonreferrer"><span class="secondary">GitHub</span></a>] [<a href='https://discord.gg/y333BGhxFP' target='_blank' rel='noopener nonreferrer'><span class="secondary">Discord</span></a>]
	<br>
	<br>
	<hr>
	<br>## <span class="secondary">Around the Clock</span> (Jan 2021 - Dec 2021)
	<br>
	<br>&nbsp&nbsp&nbsp<img src="/assets/images/project-banners/atc-banner.png">
	<br>
	<br>&nbsp&nbsp&nbsp&nbsp&nbspDiscord study server
	<br>
	<br>&nbsp&nbsp&nbsp-&nbsp[<a href="https://github.com/Javascript-void0/Around-the-Clock" target="_blank" rel="noopener nonreferrer"><span class="secondary">GitHub</span></a>] [<a href='https://discord.gg/nk69jVbJMP' target='_blank' rel='noopener nonreferrer'><span class="secondary">Discord</span></a>]
	<br>
	<br>
	<hr>
	<br>## <span class="secondary">FarminFarm</span> (Sep 2020 - Jul 2021)
	<br>
	<br>&nbsp&nbsp&nbsp<img src="/assets/images/project-banners/farminfarm-banner.png">
	<br>
	<br>&nbsp&nbsp&nbsp&nbsp&nbspMinecraft farming server hosted on <a href="https://minehut.com" target="_blank" rel="noopener nonreferrer">Minehut</a>. 
	<br>
	<br>&nbsp&nbsp&nbsp-&nbsp[<a href="https://github.com/Javascript-void0/Minehut/tree/main/farminfarm" target="_blank" rel="noopener nonreferrer"><span class="secondary">GitHub</span></a>]
	<br>
	<br>
	<hr>
`