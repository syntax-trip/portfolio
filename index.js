const song = document.getElementById("mysong");
const playbtn = document.getElementById("playbtn");
const icen = document.getElementById("icen");

playbtn.onclick = function() {
  if (song.paused) {
    song.play();
    icen.innerHTML = " ♫ ◼• ılıılıılılılıılııılı. 0"; // Changes to Pause icon
  } else {
    song.pause();
    icen.innerHTML = " ♫ ▶• ılıılıılılılıılııılı. 0"; // Changes back to Play icon
  }
}