CreateBoard(25);

function CreateBoard(size) {

let board = document.querySelector('.box').querySelector(".board");

board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let countDiv = size * size;

for (let i = 0; i < countDiv; i++) {
    let div = document.createElement ("div");
    div.style.backgroundColor = ("pink");
    board.insertAdjacentElement ("beforeend", div);
}
}