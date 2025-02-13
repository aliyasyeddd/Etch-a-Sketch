const squareGrid = document.querySelector(".container");
let gridSize = 16 ** 2;

for (let i = 0; i < gridSize; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");
  squareGrid.appendChild(div);
}

const gridHover = document.querySelectorAll(".grid");
gridHover.forEach((div) => {
  div.addEventListener("mouseover", function () {
    div.classList.add("changeColor");
  });
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let userInput = prompt("Enter the number of squares per side?");
  if (userInput > 100) {
    alert(
      "Please enter a number between 1 and 100, A larger number of squares results in causing delays"
    );
  } else if (userInput > 0 && userInput <= 100) {
    let newGridSize = 250 / userInput;
    gridSize = userInput ** 2;
    document.querySelector(".container").innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
      const nthDiv = document.createElement("div");
      nthDiv.classList.add("nthGrid");
      nthDiv.style.width = `${newGridSize}px`;
      nthDiv.style.height = `${newGridSize}px`;
      squareGrid.appendChild(nthDiv);
    }
    const nthGridHover = document.querySelectorAll(".nthGrid");
    nthGridHover.forEach((nthDiv) => {
      nthDiv.addEventListener("mouseover", function () {
        nthDiv.classList.add("nthChangeColor");
      });
    });
  }
});

