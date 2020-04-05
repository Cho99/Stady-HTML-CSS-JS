var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var slides = document.getElementsByClassName("mySlide");
	var dots = document.getElementsByClassName("demo");
	var caption = document.getElementById("caption");

	if (n > slides.length) {slideIndex = 1;};
	if (n < 1) {slideIndex = slides.length}

	for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
			dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex-1].className += " active";

	caption.innerHTML = dots[slideIndex - 1].alt;
}

