const bodyRef = document.querySelector("body"),
  square = document.createElement("div");
square.classList.add("square");

bodyRef.appendChild(square);

let numLeft = 50;
const maxLeftValue = 100;

window.addEventListener("keydown", (e) => {
  let ts = window
    .getComputedStyle(square, null)
    .getPropertyValue("Left")
    .slice(0, 3);
  square.style.Left = ts;

  if (e.key == "ArrowRight") {
    square.style.left = `${numLeft}%`;
    if (numLeft !== 0) {
      numLeft -= 1;
    }

    console.log("square.clientLeft", square.scrollLeft);
  } else if (e.key == "ArrowLeft") {
    square.style.left = `${numLeft}%`;
    if (numLeft !== 100) {
      numLeft += 1;
    }
  }
});
