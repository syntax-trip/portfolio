const song = document.getElementById("mysong");
const playbtn = document.getElementById("playbtn");
const icen = document.getElementById("icen");

playbtn.onclick = function() {
  if (song.paused) {
    song.play();
    icen.innerHTML = "⏸️"; // Changes to Pause icon
  } else {
    song.pause();
    icen.innerHTML = "▶️"; // Changes back to Play icon
  }
}