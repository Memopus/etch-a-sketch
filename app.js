const container = document.querySelector(".container");
const eraser = document.querySelector(".eraser");
const rgbButton = document.querySelector(".rgb");
const palette = document.querySelector("#palette");
const input = document.querySelector("#squares");
const label = document.querySelector("#squaresNumber");
let refresh = false;

createGrid();

input.addEventListener("change", () => {
  label.textContent = input.value;
  createGrid();
});

function createGrid() {
  for (let i = 0; i < input.value ** 2; i++) {
    const div = document.createElement("div");
    div.style.borderColor = "black";
    div.style.width = `${container.offsetWidth / input.value}px`;
    div.style.width = `${container.offsetHeight / input.value}px`;
    div.classList.add("square");
    container.appendChild(div);
    changeColor(div);
    eraser.addEventListener("click", () => {
      div.style.backgroundColor = "white";
    });
    input.addEventListener("change", () => {
      div.remove();
    });
  }

  // rgbButton.addEventListener("click", () => {
  //   rgbMode(div);
  // });
}

function changeColor(div) {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = palette.value;
  });

  document.querySelector(".color").addEventListener("click", () => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = palette.value;
    });
  });

  rgbButton.addEventListener("click", () => {
    rgbMode(div);
  });

  console.log(palette.value);
}
function rgbMode(div) {
  div.addEventListener("mouseover", () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  });
}
