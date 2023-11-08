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
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip 10 Seconds");
	document.querySelector('video').currentTime += 10;
});


document.querySelector("#mute").addEventListener("click", function(){
	console.log("video muted");
	document.querySelector('#mute').textContent = "Unmute"
	if (document.querySelector('video').muted === false){
			document.querySelector('video').muted = true;
	}
	else {
		document.querySelector('video').muted = false;
	}
});

document.querySelector("#orig").addEventListener("click", function(){
	document.querySelector('video').classList.add('video')
	console.log("Original Style");
});

document.querySelector("#vintage").addEventListener("click", function(){
	document.querySelector('video').classList.add('oldSchool')
	console.log("Old School Style");
});

document.querySelector("#orig").addEventListener("click", function(){
	document.querySelector('video').classList.remove('oldSchool')
	console.log("Original Style");
});



