const container = document.querySelector(".container");
const newGrid = document.querySelector(".new-grid");
let squares = null;

makeGrid(10);

function clearBoard() {
    let squaresToRemove = document.querySelectorAll(".gridSquare");
    squaresToRemove.forEach(square => {
        square.parentNode.removeChild(square);
    })
}

function generateGrid(){
    clearBoard();
    let dim = prompt("Please enter the new dimensions:");
    if(dim > 100){
        dim = prompt("Please enter a number less than 100:");
    }
    makeGrid(dim);
}
function hovered(e) {
    this.classList.toggle("hovered");
}
function makeGrid(newSize) {
    container.style.setProperty(`grid-template-columns`, `repeat(${newSize}, 1fr)`);
    container.style.setProperty(`grid-template-rows`, `repeat(${newSize}, 1fr)`);
    for(let i = 0; i < newSize; i++){
        for(let j = 0; j < newSize; j++){
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            container.appendChild(gridSquare);
        }
    }
    squares = null;
    squares = document.querySelectorAll(".gridSquare");
    squares.forEach(square =>{
        square.addEventListener("mouseover", hovered);
    })
}

newGrid.addEventListener("click", generateGrid);