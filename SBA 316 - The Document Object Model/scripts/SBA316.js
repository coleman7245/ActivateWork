let body = document.body;
let isSelected = false;

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
    let image = null;
    let source = "";

    function setPawns() {
        for (let n = 0; n < 8; n++) {
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            chessPiece.setAttribute("defaultPosition", `(2,${n+1})`);
            image = document.createElement("img");
            source = "../images/chess_black_pawn.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("id", "pawn");
            chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
            chessPieces.push(chessPiece);
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            chessPiece.setAttribute("defaultPosition", `(7,${n+1})`);
            image = document.createElement("img");
            source = "../images/chess_white_pawn.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("id", "pawn");
            chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
            chessPieces.push(chessPiece);
        }   
    }

    function setRooks() {
        let position = "";

        for (let n = 0; n < 2; n++) {
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            position = (n === 0) ? `(1,1)` : `(1,8)`;
            chessPiece.setAttribute("defaultPosition", position);
            image = document.createElement("img");
            source = "../images/chess_black_rook.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("id", "rook");
            chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
            chessPieces.push(chessPiece);
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            position = (n === 0) ? `(8,1)` : `(8,8)`;
            chessPiece.setAttribute("defaultPosition", position);
            image = document.createElement("img");
            source = "../images/chess_white_rook.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("id", "rook");
            chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
            chessPieces.push(chessPiece);
        }
    }

    function setKnights() {
        let position = "";

        for (let n = 0; n < 2; n++) {
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            position = (n === 0) ? `(1,2)` : `(1,7)`;
            chessPiece.setAttribute("defaultPosition", position);
            image = document.createElement("img");
            source = "../images/chess_black_knight.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("id", "knight");
            chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
            chessPieces.push(chessPiece);
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            position = (n === 0) ? `(8,2)` : `(8,7)`;
            chessPiece.setAttribute("defaultPosition", position);
            image = document.createElement("img");
            source = "../images/chess_white_knight.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("id", "knight");
            chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
            chessPieces.push(chessPiece);
        }
    }

    function setBishops() {
        let position = "";

        for (let n = 0; n < 2; n++) {
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            position = (n === 0) ? `(1,3)` : `(1,6)`;
            chessPiece.setAttribute("defaultPosition", position);
            image = document.createElement("img");
            source = "../images/chess_black_bishop.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("id", "bishop");
            chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
            chessPieces.push(chessPiece);
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            position = (n === 0) ? `(8,3)` : `(8,6)`;
            chessPiece.setAttribute("defaultPosition", position);
            image = document.createElement("img");
            source = "../images/chess_white_bishop.png";
            image.setAttribute("src", source);
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("id", "bishop");
            chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
            chessPieces.push(chessPiece);
        }
    }

    function setKings() {
        let position = `(1,5)`;
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        chessPiece.setAttribute("defaultPosition", position);
        image = document.createElement("img");
        source = "../images/chess_black_king.png";
        image.setAttribute("src", source);
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("id", "king");
        chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
        chessPieces.push(chessPiece);
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        position = `(8,5)`;
        chessPiece.setAttribute("defaultPosition", position);
        image = document.createElement("img");
        source = "../images/chess_white_king.png";
        image.setAttribute("src", source);
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("id", "king");
        chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
        chessPieces.push(chessPiece);
    }

    function setQueens() {
        let position = `(1,4)`;
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        chessPiece.setAttribute("defaultPosition", position);
        image = document.createElement("img");
        source = "../images/chess_black_queen.png";
        image.setAttribute("src", source);
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("id", "queen");
        chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
        chessPieces.push(chessPiece);
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        position = `(8,4)`;
        chessPiece.setAttribute("defaultPosition", position);
        image = document.createElement("img");
        source = "../images/chess_white_queen.png";
        image.setAttribute("src", source);
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("id", "queen");
        chessPiece.addEventListener("click", () => {isSelected = !isSelected;});
        chessPieces.push(chessPiece);
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
        if (square.getAttribute("value") === chessPiece.getAttribute("defaultPosition")) {
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

function showMoves(piece) {
    function getPosArray(tuple) {
        let strs = tuple.split(",");
        posArr = [Number(strs[0][1]), Number(strs[1][0])];
        return posArr;
    }

    if (isSelected) {
    let board = document.getElementById("board");
    
        if (piece.id === "pawn") {
            
        }
    }
}

body.append(createChessBoard());

let chessPieces = createChessPieces();

setChessPieces(board, chessPieces);



