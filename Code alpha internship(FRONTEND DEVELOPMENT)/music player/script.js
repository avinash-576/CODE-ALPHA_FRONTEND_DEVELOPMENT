let audio = document.getElementById("audio");
let progress = document.getElementById("progress");

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function setProgress() {
    let newTime = (progress.value / 100) * audio.duration;
    audio.currentTime = newTime;
}

audio.addEventListener("timeupdate", () => {
    let progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
});