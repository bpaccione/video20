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

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	console.log("Pause Video");
	video.pause();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Video slowed up");
	document.querySelector('video').playbackRate = .25;
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Video sped up");
	document.querySelector('video').playbackRate = 2;
});



