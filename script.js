const container = document.querySelector(".container");

makeGrid();



function hovered(e) {
    this.classList.toggle("hovered");
}
function makeGrid() {
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            let gridPiece = document.createElement("div");
            gridPiece.classList.add("gridSquare");
            container.appendChild(gridPiece);
        }
    }
}

const squares = document.querySelectorAll(".gridSquare");

squares.forEach(square =>{
    square.addEventListener("mouseover", hovered);
})