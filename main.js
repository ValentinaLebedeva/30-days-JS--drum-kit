const keys = document.querySelectorAll(".key");

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) // fix keyCode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) // fix keyCode

    if (!audio) return; // stop function from running

    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add("playing")
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return; //skip it if its not transform
    this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener("transitionend", removeTransition))