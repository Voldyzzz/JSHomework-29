const bodyRef = document.querySelector("body"),
  square = document.createElement("div"),
  textInSquare = document.createElement("p");

square.classList.add("square");
textInSquare.classList.add("text", "hidden");
textInSquare.innerText = "БЕМС";

bodyRef.appendChild(square);
square.appendChild(textInSquare);

window.addEventListener("keydown", (e) => {
  textInSquare.classList.remove("fade-out");
  square.classList.remove("jump-animation", "ctrl-animation");

  if (e.key == "ArrowRight") {
    square.style.left = `${square.offsetLeft}px`;
    if (square.offsetLeft + 250 < window.innerWidth) {
      square.style.left = `${square.offsetLeft + 10}px`;
    } else {
      square.style.left = `${square.offsetLeft - 20}px`;
      textInSquare.classList.add("fade-out");
    }
  } else if (e.key == "ArrowLeft") {
    square.style.left = `${square.offsetLeft}px`;
    if (square.offsetLeft >= 250) {
      square.style.left = `${square.offsetLeft - 10}px`;
    } else {
      square.style.left = `${square.offsetLeft + 20}px`;
      textInSquare.classList.add("fade-out");
    }
  } else if (e.code == "Space") {
    square.classList.add("jump-animation");
  } else if (e.key == "Control") {
    square.classList.add("ctrl-animation");
  }
});
