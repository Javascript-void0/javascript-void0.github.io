image_zoom = document.getElementById('image-zoom')
image_zoom_image = document.getElementById('image-zoom-image')

function addImageZoom() {
    images = document.getElementsByClassName('zoom')
    for (image of images) {
        image.setAttribute('draggable', false)
        image.onmousedown = function() { imageZoom(this) }
    }
}

function imageZoom(element) {
    image_zoom_image.src = element.src
    image_zoom.style.display = ''
}

image_zoom.onmouseup = function() { closeImageZoom() }

function closeImageZoom() {
    image_zoom.style.display = 'none'
}