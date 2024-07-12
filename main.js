$ = (a) => document.querySelector(a);

const audioPlayer = $("#audioPlayer");
const fileInput = $("#fileInput");
const currentTimeDisplay = $("#currentTime");
const totalTimeDisplay = $("#totalTime");

fileInput.addEventListener("change", handleFileSelect);

audioPlayer.addEventListener("loadedmetadata", () => {
  totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener("timeupdate", () => {
  currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    audioPlayer.src = fileURL;
    audioPlayer.load();
  }
}

function playAudio() {
  audioPlayer.play();
}

function pauseAudio() {
  audioPlayer.pause();
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function rewindAudio() {
  audioPlayer.currentTime -= 10;
}

function forwardAudio() {
  audioPlayer.currentTime += 10;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
