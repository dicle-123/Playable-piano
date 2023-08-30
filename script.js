const pianoKeys = document.querySelectorAll(".key");

let audio = new Audio();

const playPiano = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key= "${key}"]`);
  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playPiano(key.dataset.key));
});

const pressedKey = (e) => {
  playPiano(e.key);
};

document.addEventListener("keydown", pressedKey);
