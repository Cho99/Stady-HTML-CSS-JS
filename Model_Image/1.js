var modal = document.getElementById('myModal');

var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var caption = document.getElementById('caption');

img.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	caption.innerHTML = this.alt;
}

var exit = document.getElementsByClassName("close")[0];
exit.onclick = function() {
	modal.style.display = "none";
}

modal.onclick = function() {
	modal.style.display = "none";
}
