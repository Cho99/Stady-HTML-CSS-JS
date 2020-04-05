var btnClose = document.querySelector('.closebtn');
var bigImage = document.querySelector('.bigImage');
var imgs = document.querySelectorAll('.col img');
var imgZoom = document.querySelector('.imgZoom');

function closeTab() {
	bigImage.style.display = "none";
}

function openTab() {
	bigImage.style.display = "block";
	imgZoom.src = this.src;
}

btnClose.addEventListener('click',closeTab);
imgs.forEach(img => img.addEventListener('click', openTab));