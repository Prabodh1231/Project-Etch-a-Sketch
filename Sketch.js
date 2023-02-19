CreateBoard(32);
color = black;

let gridSize = document.querySelector("#gridSize");
gridSize.addEventListener ("click", function () {
    let size = getSize();
    CreateBoard(size);
})

function CreateBoard(size) {

let board = document.querySelector(".board");

board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let countDiv = size * size;

for (let i = 0; i < countDiv; i++) {
    let div = document.createElement ("div");
    div.style.backgroundColor = ("white");
    div.addEventListener ("mouseover", colorDiv);
    board.insertAdjacentElement ("beforeend", div);
}
}

function getSize() {
    let input  = prompt ("What will be the size of the board");
    let message = document.querySelector("#message");

    if (input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if (isNaN(input)) {
        message.innerHTML = "Please provide a number";
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Please provide a number between 1 and 100";
    }
    else {
        message.innerHTML = "Now you can play"
        return input;
    }
}

function colorDiv() {
    if (color === "random") {
        this.style.backgroundColor = generateRandomColorRgb();
    }
    else  {
        this.style.backgroundColor = "black";
    }
}

let colorChoice = document.getElementsByClassName("choiceButton");

let buttonPressed = e => {
  color = e.target.id;  // Get ID of Clicked Element
}

for (let choiceButton of colorChoice) {
    choiceButton.addEventListener("click", buttonPressed);
}

function generateRandomColorRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }

