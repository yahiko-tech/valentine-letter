const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");

function moveNoButton() {
  const container = document.querySelector(".buttons");

  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Desktop (mouse)
noButton.addEventListener("mouseenter", moveNoButton);

// Mobile (touch)
noButton.addEventListener("touchstart", moveNoButton);

function handleYesClick() {
  window.location.href = "yes.html";
}