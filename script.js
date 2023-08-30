const pianoKeys = document.querySelectorAll(".key");

const volumeSlide = document.querySelector(".volume-slider input");
const KeysCheckbox = document.querySelector(".keys-checkbox input");

let audio = new Audio();
let allKeys = [];

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
  allKeys.push(key.dataset.key);

  key.addEventListener("click", () => playPiano(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playPiano(e.key);
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

KeysCheckbox.addEventListener("click", showHideKeys);
pianoKeys.addEventListener("keydown", pressedKey);
volumeSlide.addEventListener("input", handleVolume);
