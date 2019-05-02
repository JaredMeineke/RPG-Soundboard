function getVideo(video) {
  document.getElementById("videoPlayer").src = "https://www.youtube.com/embed/" + video + "?autoplay=1&loop=1";
}

function getAudio(audio) {
  document.getElementById("audioPlayer").src = "https://www.youtube.com/embed/" + audio + "?autoplay=1";
}

function getAmbience(ambience) {
  document.getElementById("ambiencePlayer").src = "https://www.youtube.com/embed/" + ambience + "?autoplay=1&loop=1";
}
