const squareGrid = document.querySelector(".container")
const gridSize = 16 ** 2;


for (let i = 0; i < gridSize ; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    squareGrid.appendChild(div);
}


const gridHover = document.querySelectorAll('.grid');
gridHover.forEach((div) => {
    div.addEventListener('mouseover', function () {
        div.classList.add('changeColor');
    })
})