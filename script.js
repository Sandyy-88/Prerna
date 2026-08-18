const song = document.getElementById("song");
const button = document.getElementById("playBtn");
const status = document.getElementById("musicStatus");

button.addEventListener("click", async () => {
  if (song.paused) {
    try {
      await song.play();
      button.textContent = "❚❚ Pause song";
      status.textContent = "♪ playing in the background";
    } catch (e) {
      status.textContent = "Your browser blocked playback — tap again.";
    }
  } else {
    song.pause();
    button.textContent = "▶ Play your song";
    status.textContent = "♪ background music";
  }
});

// Small floating heart particles
for (let i = 0; i < 28; i++) {
  const s = document.createElement("span");
  s.textContent = Math.random() > .5 ? "·" : "♥";
  s.style.position = "fixed";
  s.style.left = Math.random()*100 + "vw";
  s.style.top = Math.random()*100 + "vh";
  s.style.color = "#ff6688";
  s.style.opacity = Math.random()*.35;
  s.style.fontSize = (8 + Math.random()*14) + "px";
  s.style.pointerEvents = "none";
  s.style.zIndex = "1";
  document.body.appendChild(s);
}
