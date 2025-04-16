var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play and loop is turned off")
});


document.querySelector("#play").addEventListener("click", function () {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume updated to " + video.volume * 100 + "%");
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("Slow Down: New speed is " + video.playbackRate.toFixed(5));
});
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("Speed Up: New speed is " + video.playbackRate.toFixed(5));
});

document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		console.log("Skipped to the beginning.");
	} else {
		video.currentTime += 10;
		console.log("Skip Ahead: Current time is " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("Unmuted Video");
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Muted Video");
	}
});

document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume updated to " + video.volume * 100 + "%");
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("Applied oldSchool style.");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("Removed oldSchool style.");
});