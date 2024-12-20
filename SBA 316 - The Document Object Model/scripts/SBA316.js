let body = document.body;
let isSelected = false;
let title = document.getElementById("title");
title.firstChild.textContent = "Chess or Some Such Nonsense"

function createChessBoard() {
    let board = document.createElement("div");
    board.setAttribute("id", "board");
    let square = null;
    let color = "brown";

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            square = document.createElement("div");
            square.setAttribute("value", `(${row+1},${col+1})`);
            square.style.width = "75px";
            square.style.height = "75px";
            square.style.backgroundColor = color;
            color = (color === "brown") ? "burlywood" : "brown";
            board.append(square);
        }

        color = (color === "brown") ? "burlywood" : "brown";
    }

    return board;
}

function createChessPieces() {
    let chessPieces = [];
    let chessPiece = null;
    let chessPieceClone = null;
    let image = null;
    let source = "";
    let position = "";

    /*function setPawns() {
        for (let n = 0; n < 8; n++) {
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            chessPiece.setAttribute("position", `(2,${n+1})`);
            image = document.createElement("img");
            source = "../images/chess_black_pawn.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("rank", "pawn");
            chessPiece.setAttribute("player", "black");
            chessPieces.push(chessPiece);
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            chessPiece.setAttribute("position", `(7,${n+1})`);
            image = document.createElement("img");
            source = "../images/chess_white_pawn.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("rank", "pawn");
            chessPiece.setAttribute("player", "white");
            chessPieces.push(chessPiece);
        }   
    }*/

    function setPawns() {
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            image = document.createElement("img");
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("rank", "pawn");

        for (let n = 0; n < 8; n++) {
            chessPieceClone = chessPiece.cloneNode(true);
            chessPieceClone.setAttribute("position", `(2,${n+1})`);
            image = chessPieceClone.querySelector("img");
            source = "../images/chess_black_pawn.png";
            image.setAttribute("src", source);
            chessPieceClone.setAttribute("player", "black");
            chessPieces.push(chessPieceClone);
            chessPieceClone = chessPiece.cloneNode(true);
            chessPieceClone.setAttribute("position", `(7,${n+1})`);
            image = chessPieceClone.querySelector("img");
            source = "../images/chess_white_pawn.png";
            image.setAttribute("src", source);
            chessPieceClone.setAttribute("player", "white");
            chessPieces.push(chessPieceClone);
        }   
    }

    function setRooks() {
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        image = document.createElement("img");
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("rank", "rook");

        for (let n = 0; n < 2; n++) {
            chessPieceClone = chessPiece.cloneNode(true);
            position = (n === 0) ? `(1,1)` : `(1,8)`;
            chessPieceClone.setAttribute("position", position);
            image = chessPieceClone.querySelector("img");
            source = "../images/chess_black_rook.png";
            image.setAttribute("src", source);
            chessPieceClone.setAttribute("player", "black");
            chessPieces.push(chessPieceClone);
            chessPieceClone = chessPiece.cloneNode(true);
            position = (n === 0) ? `(8,1)` : `(8,8)`;
            chessPieceClone.setAttribute("position", position);
            image = chessPieceClone.querySelector("img");
            source = "../images/chess_white_rook.png";
            image.setAttribute("src", source);
            chessPieceClone.setAttribute("player", "white");
            chessPieces.push(chessPieceClone);
        }
    }

    function setKnights() {
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        image = document.createElement("img");
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("rank", "knight");

        for (let n = 0; n < 2; n++) {
            chessPieceClone = chessPiece.cloneNode(true);
            position = (n === 0) ? `(1,2)` : `(1,7)`;
            chessPieceClone.setAttribute("position", position);
            image = chessPieceClone.querySelector("img");
            source = "../images/chess_black_knight.png";
            image.setAttribute("src", source);
            chessPieceClone.setAttribute("player", "black");
            chessPieces.push(chessPieceClone);
            chessPieceClone = chessPiece.cloneNode(true);
            position = (n === 0) ? `(8,2)` : `(8,7)`;
            chessPieceClone.setAttribute("position", position);
            image = chessPieceClone.querySelector("img");
            source = "../images/chess_white_knight.png";
            image.setAttribute("src", source);
            chessPieceClone.setAttribute("player", "white");
            chessPieces.push(chessPieceClone);
        }
    }

    function setBishops() {
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        image = document.createElement("img");
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("rank", "bishop");

        for (let n = 0; n < 2; n++) {
            chessPieceClone = chessPiece.cloneNode(true);
            position = (n === 0) ? `(1,3)` : `(1,6)`;
            chessPieceClone.setAttribute("position", position);
            image = chessPieceClone.querySelector("img");
            source = "../images/chess_black_bishop.png";
            image.setAttribute("src", source);
            chessPieceClone.setAttribute("player", "black");
            chessPieces.push(chessPieceClone);
            chessPieceClone = chessPiece.cloneNode(true);
            position = (n === 0) ? `(8,3)` : `(8,6)`;
            chessPieceClone.setAttribute("position", position);
            image = chessPieceClone.querySelector("img");
            source = "../images/chess_white_bishop.png";
            image.setAttribute("src", source);
            chessPieceClone.setAttribute("player", "white");
            chessPieces.push(chessPieceClone);
        }
    }

    function setKings() {
        chessPiece = document.createElement("div");
        position = `(1,5)`;
        chessPiece.style.zIndex = 10;
        chessPiece.setAttribute("position", position);
        image = document.createElement("img");
        source = "../images/chess_black_king.png";
        image.setAttribute("src", source);
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("rank", "king");
        chessPiece.setAttribute("player", "black");
        chessPieces.push(chessPiece);
        chessPieceClone = chessPiece.cloneNode(true);
        position = `(8,5)`;
        chessPieceClone.setAttribute("position", position);
        image = chessPieceClone.querySelector("img");
        source = "../images/chess_white_king.png";
        image.setAttribute("src", source);
        chessPieceClone.setAttribute("player", "white");
        chessPieces.push(chessPieceClone);
    }

    function setQueens() {
        chessPiece = document.createElement("div");
        position = `(1,4)`;
        chessPiece.style.zIndex = 10;
        chessPiece.setAttribute("position", position);
        image = document.createElement("img");
        source = "../images/chess_black_queen.png";
        image.setAttribute("src", source);
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("rank", "queen");
        chessPiece.setAttribute("player", "black");
        chessPieces.push(chessPiece);
        chessPieceClone = chessPiece.cloneNode(true);
        position = `(8,4)`;
        chessPieceClone.setAttribute("position", position);
        image = chessPieceClone.querySelector("img");
        source = "../images/chess_white_queen.png";
        image.setAttribute("src", source);
        chessPieceClone.setAttribute("player", "white");
        chessPieces.push(chessPieceClone);
    }

    setPawns();
    setRooks();
    setKnights();
    setBishops();
    setKings();
    setQueens();

    return chessPieces;
}

function setChessPiece(board, chessPiece) {
    Array.prototype.forEach.call(board.children, (square) => {
        if (square.getAttribute("value") === chessPiece.getAttribute("position")) {
            square.appendChild(chessPiece);
            return;
        }
    });
}

function setChessPieces(board, chessPieces) {
    for (piece of chessPieces) {
        setChessPiece(board, piece);
    }
}

function findMoves(piece, board) {
    let potentialMoves = null;
    let moves = null;

    function tupleToNumberArray(tuple) {
        let strs = tuple.split(",");
        let posArr = [Number(strs[0][1]), Number(strs[1][0])];
        return posArr;
    }

    function numberArrayToTuple(array) {
        return `(${array[0]},${array[1]})`;
    }

    function isOccupied(position) {
        Array.prototype.forEach.call(board.children, (square) => {
            
        });
    }

    let posArr = tupleToNumberArray(piece.getAttribute("position"));

    if (piece.getAttribute("rank") === "pawn") {
        if (piece.getAttribute("player") === "black") {
            potentialMoves = [
                [posArr[0]+1, posArr[1]-1], [posArr[0]+1, posArr[1]], [posArr[0]+1, posArr[1]+1]
            ];
        }
        else {
            potentialMoves = [
                [posArr[0]-1, posArr[1]-1], [posArr[0]-1, posArr[1]], [posArr[0]-1, posArr[1]+1]
            ];
        }
    }
    else if (piece.getAttribute("rank") === "rook") {
    }

    try {
        moves = [];
        potentialMoves.forEach((move) => {
            if ((move[0] >= 1 && move[0] <= 8 && move[1] >= 1 && move[1] <= 8) &&
                (numberArrayToTuple(move)))
                moves.push(move);
        });
    }
    catch (e) {console.log(e);}

    return moves;
}

let chessBoard = createChessBoard();

chessBoard.addEventListener("click", (e) => {
    e.preventDefault();
});

body.append(chessBoard);

let chessPieces = createChessPieces();

setChessPieces(board, chessPieces);

console.log(findMoves(chessPieces[0]));



