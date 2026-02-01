function openLetter() {
  document.body.classList.add("opening");
  createHearts();

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 2500);
}

function createHearts() {
  const heartsContainer = document.querySelector(".hearts");

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}
