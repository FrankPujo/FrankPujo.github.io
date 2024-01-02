clicksN = 0
document.getElementById("clickBtn").onclick = function() {
	if ( clicksN == 0 ) {
		startTime = Date.now();
		clicksN = 1
	} else {
		timeElapsed = (Date.now() - startTime) / 1000 / 60;
		clicksN = clicksN + 1;
		console.log( clicksN / timeElapsed );
	}
	console.log(clicksN);
}