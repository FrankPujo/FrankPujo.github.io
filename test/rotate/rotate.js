function rotForward() {
	var els = document.getElementsByClassName("els");
	for (let i = 0; i < els.length; i++) {
		el = els[i];
		el.style.cssText += "-webkit-transition: -webkit-transform 2s ease; -webkit-transform: rotate(-90deg);"
	}
}

function rotInPlace() {
	var els = document.getElementsByClassName("els");
	for (let i = 0; i < els.length; i++) {
		el = els[i];
		el.style.cssText += "-webkit-transition: -webkit-transform 2s ease; -webkit-transform: rotate(0);"
	}
}