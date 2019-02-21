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

//  Resize Color grid
handleRangeChange(30);
document
  .querySelector('input[type="range"]')
  .addEventListener("change", e => handleRangeChange(Number(e.target.value)));
function handleRangeChange(num) {
  const numOfCells = num;
  document.querySelector(".num-of-cells-label").innerHTML =
    numOfCells + " x " + numOfCells;
  const gridWidth = 400;
  const cellWidth = Math.floor(gridWidth / numOfCells);
  let renderCells = "";

  for (let i = 0; i < numOfCells * numOfCells; i++) {
    renderCells += `<div class="cell" style="width: ${cellWidth}px; height: ${cellWidth}px;"></div>`;
  }
  document.querySelector(".color-grid").innerHTML = renderCells;
  document.querySelector(
    ".color-grid"
  ).style.gridTemplateRows = `repeat(${numOfCells}, 1fr)`;
  document.querySelector(
    ".color-grid"
  ).style.gridTemplateColumns = `repeat(${numOfCells}, 1fr)`;
}
