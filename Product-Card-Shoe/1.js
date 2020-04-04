const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes =  document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');

function changeSize() {
	sizes.forEach(size => size.classList.remove('active'));
	this.classList.add('active');
}

function changeColor() {
	let primary = this.getAttribute('primary');
	let color = this.getAttribute('color');
	let shoe = document.querySelector(`.shoe[color="${color}"]`);
	let gradient = document.querySelector(`.gradient[color="${color}"]`);

	colors.forEach(color => color.classList.remove('active'));
	this.classList.add('active');

	shoes.forEach(s => s.classList.remove('show'));
	shoe.classList.add('show');
	document.documentElement.style.setProperty('--primary',primary);

	gradients.forEach(g => g.classList.remove('frist'));
	gradient.classList.add('frist');
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(color => color.addEventListener('click',changeColor));