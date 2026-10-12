const galleryAnimation = true
const galleryRun = null
const galleryRunPost = 'addImageZoom()'
const galleryTemplate = `
	<div class="breadcrumb">
<a onclick="template('home');return false" href="javascript:void(0);">Home</a>&nbsp>&nbsp<a onclick="template('projects');return false" href="javascript:void(0)">Projects</a>&nbsp>&nbspGallery

<div id="gallery-grid">
  <img class="grid-img zoom" src="assets/gallery/1723149904455.jpg">
  <img class="grid-img zoom" src="assets/gallery/1723150454038.jpg">
  <img class="grid-img zoom" src="assets/gallery/1723151376833.jpg">
  <img class="grid-img zoom" src="assets/gallery/20230820_171803.JPG">
  <img class="grid-img zoom" src="assets/gallery/20240728_145819.JPG">
  <img class="grid-img zoom" src="assets/gallery/20250405_210226.JPG">
  <img class="grid-img zoom" src="assets/gallery/original_fba5fa69-12c5-441d-bb79-b38625ba0212_20240808_150336.JPG">
</div>

<style>
  :root {
    --grid-size: 10em;
    --grid-gap: 0.3em;
  }
  #gallery-grid {
    display: grid;
    max-width: calc(var(--grid-size) * 5 + var(--grid-gap) * 4);
    margin: auto;
    grid-template-columns: repeat(auto-fill, minmax(var(--grid-size), max-content));
    grid-gap: var(--grid-gap);
    justify-content: center;
  }
  .grid-img {
    width: var(--grid-size);
    height: var(--grid-size);
    object-fit: cover;
  }
</style>

  </div> 

`
