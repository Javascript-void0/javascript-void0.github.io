const setupAnimation = true
const setupRun = null 
const setupRunPost = 'addImageZoom()'
const setupTemplate = `
	<style>
	hr {
		padding: 0;
		margin: 8px 0px 8px -10px;
		max-width: 350px;
    border: 1px solid #414141;
	}
	</style>

  <div class="breadcrumb">
<a onclick="template('home');return false" href="javascript:void(0)">Home</a>&nbsp>&nbsp<a onclick="template('about');return false" href="javascript:void(0)">About</a>&nbsp>&nbspSetup
  </div>
	<br>
	<br>
	<br><img src="/assets/images/setup.gif" style="width: 200px; margin-left: 30px">
	<br>
	<br>## <span class="secondary">Software <3</span>
	<br>

<div style="white-space: pre; margin-left: 40px">
<span class="secondary">Windows: </span>

Note-taking: 
  <a href="https://obsidian.md" target="_blank" rel="noopener nonreferrer">Obsidian</a>
<hr>Drawing: 
  <a href="https://firealpaca.com/" target="_blank" rel="noopener nonreferrer">FireAlpaca</a>
  OpenCanvas1.1
<hr>Tools: 
  <a href="https://github.com/microsoft/PowerToys" target="_blank" rel="noopener nonreferrer">Microsoft PowerToys</a>
  <a href="https://github.com/xournalpp/xournalpp" target="_blank" rel="noopener nonreferrer">Xournal++</a> for handwritten notes
  <a href="https://github.com/glzr-io/glazewm" target="_blank" rel="noopener nonreferrer">GlazeWM</a> tiling window manager
<hr>Dev: 
  <a href="https://github.com/microsoft/vscode" target="_blank" rel="noopener nonreferrer">VSCode</a>
  <a href="https://neovim.io/" target="_blank" rel="noopener nonreferrer">Neovim</a> (<a href="https://github.com/Javascript-void0/dotfiles" target="_blank" rel="noopener nonreferrer">dotfiles</a>)



<span class="secondary">Android: </span>

Anime/Manga: <a href="https://github.com/jmir1/aniyomi" target="_blank" rel="noopener nonreferrer">Aniyomi</a>
AniList Client: <a href="https://play.google.com/store/apps/details?id=com.otraku.app&hl=en_US&gl=US" target="_blank" rel="noopener nonreferrer">Otraku</a>
TFA: <a href="https://github.com/beemdevelopment/Aegis" target="_blank" rel="noopener nonreferrer">Aegis</a>
YouTube ReVanced
</div>

	<br>
	<br>## <span class="secondary">Hardware</span>
	<br>
	<br><img src="/assets/images/setup.jpg" style="width: 500px; margin-left: 20px" class="zoom">
	<br>

<div style="white-space: pre; margin-left: 40px">
Laptop: 
  <span class="color">Framework Laptop 13</span>
  Microsoft Surface Pro 6
<hr>Phone: 
  <span class="color">Sony Xperia 5 iii</span>
<hr>Audio: 
  Microsoft Surface Headphones 2
  <span class="color">Truthear Hexa</span>
  Moondrop SSP
  Moondrop CHU II
  Sony WF-1000XM3
  <span class="color">Sony MDR-7506</span>
<hr>Monitor: 
  <span class="color">LG Dualup</span>
<hr>Keyboard: 
  <span class="color">Moondrop Dash75</span>
  Libra Mini 40%
  <span class="color">SayoDevice O3C++</span>
</div>
`
