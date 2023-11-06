video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// initialize video element 
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

