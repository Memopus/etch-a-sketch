const container = document.querySelector(".container");
const eraser = document.querySelector(".eraser");
const rgbButton = document.querySelector(".rgb");
const palette = document.querySelector("#palette");
const input = document.querySelector("#squares");
const label = document.querySelector("#squaresNumber");
let refresh = false;

createGrid(6);

input.addEventListener("change", (e) => {
  label.textContent = input.value;

  document.getElementsByClassName("container")[0].innerHTML = "";

  createGrid(e.target.value);
});

function createGrid(value) {
  let divs = "";

  for (let i = 0; i < value ** 2; i++) {
    const div = document.createElement("div");

    div.style.width = `${container.offsetWidth / value}px`;

    div.classList.add("square");

    divs += div.outerHTML;
  }

  container.innerHTML = divs;
}

eraser.addEventListener("click", () => {
  window.addEventListener("mouseover", (e) => {
    if (e.target.className === "square") {
      const div = e.target;
      div.style.backgroundColor = "white";
    }
  });
});

window.addEventListener("mouseover", (e) => {
  if (e.target.className === "square") {
    const div = e.target;
    div.style.backgroundColor = palette.value;
  }
});

document.querySelector(".color").addEventListener("click", () => {
  window.addEventListener("mouseover", () => {
    if (e.target.className === "square") {
      const div = e.target;
      div.style.backgroundColor = palette.value;
    }
  });
});

rgbButton.addEventListener("click", () => {
  rgbMode();
});

function rgbMode() {
  window.addEventListener("mouseover", (e) => {
    if (e.target.className === "square") {
      const div = e.target;
      const r = Math.floor(Math.random() * 255) + 1;
      const g = Math.floor(Math.random() * 255) + 1;
      const b = Math.floor(Math.random() * 255) + 1;
      div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
  });
}
