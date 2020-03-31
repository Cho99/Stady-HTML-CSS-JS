var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}


function showSlides(n) {
	var slides = document.getElementsByClassName("myslide");
	var dots = document.getElementsByClassName("dot");
	if(n > slides.length){ slideIndex = 1};
	if (n < 1) { slideIndex = slides.length};
	for (var i = slides.length - 1; i >= 0; i--) {
		slides[i].style.display = "none";
		dots[i].className = dots[i].className.replace("active", "");; 
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}