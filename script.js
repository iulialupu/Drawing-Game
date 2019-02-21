const colorClasses = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "black",
  "brown"
];

//  Color
document
  .querySelector(".color-palette")
  .addEventListener("click", e => doColor(e.target.classList.value));

function doColor(choosenColor) {
  document.querySelector(".color-grid").addEventListener("click", e => {
    e.target.classList.remove(...colorClasses);
    e.target.classList.add(choosenColor);
  });
  console.log(choosenColor);
}

//  Clear All Grid
function clearAllGrid() {
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove(...colorClasses);
  }
}
document
  .querySelector(".reset-btn")
  .addEventListener("click", () => clearAllGrid());

//  Clear One Cell
function clearOneCell() {
  document.querySelector(".color-grid").addEventListener("click", e => {
    e.target.classList.remove(...colorClasses);
  });
}
document
  .querySelector(".clear-btn")
  .addEventListener("click", () => clearOneCell());
