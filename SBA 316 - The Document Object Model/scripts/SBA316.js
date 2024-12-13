let body = document.body;
let isSelected = false;

function createChessBoard() {
    let board = document.createElement("div");
    board.setAttribute("id", "board");
    let square = null;
    let color = "";

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            square = document.createElement("div");
            square.setAttribute("value", `(${row+1}, ${col+1})`);
            square.style.width = "75px";
            square.style.height = "75px";
            square.style.backgroundColor = color;
            color = (color === "black") ? "white" : "black";
            board.append(square);
        }

        color = (color === "black") ? "white" : "black";
    }

    return board;
}

function createChessPieces(color) {
    let chessPieces = [];
    let chessPiece = null;
    let image = null;
    let source = (color === "black") ? "../images/chess_black_pawn.png" : "../images/chess_white_pawn.png";

    for (let n = 0; n < 8; n++) {
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        chessPiece.setAttribute("defaultPosition", `(${n+1}, 7)`);
        image = document.createElement("img");
        image.setAttribute("src", source);
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "pawn");
        chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
        chessPieces.push(chessPiece);
    }

    return chessPieces;
}

function setChessPiece(board, chessPiece) {
    Array.prototype.forEach.call(board.children, (square) => {
        if (square.getAttribute("value") === chessPiece.getAttribute("defaultPosition")) {
            square.appendChild(chessPiece);
            return;
        }
    });
}

function showMoves() {

}

const movePiece = function(e) {
    e.preventDefault();

    if (isMoving) {
        e.target.style.top = e.clientY + "px";
        e.target.style.left = e.clientX + "px";
    }
};

body.append(createChessBoard());

let chessPieces = createChessPieces("black", movePiece);

setChessPiece(board, chessPieces[0]);



