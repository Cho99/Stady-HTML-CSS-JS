var slideIndex = 1 ;
var myModal = document.getElementById('Modal-box');

function openModal() {
	myModal.style.display = "block";
}

function plusSlide(n) {
	showSlide(slideIndex += n);
}

function currentSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {
	var slides = document.getElementsByClassName('mySlide');
	var alt = document.getElementsByClassName('alt');
	console.log(alt)
	var caption = document.getElementById('caption');
	if(n > slides.length){slideIndex = 1};
	if(n < 1){slideIndex = slides.length};
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
	caption.innerHTML = alt[slideIndex - 1].alt;
}

function closeModal() {
	myModal.style.display = "none";
}