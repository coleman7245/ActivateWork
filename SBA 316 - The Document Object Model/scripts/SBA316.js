let body = document.body;
let isSelected = false;
let title = document.getElementById("title");
title.firstChild.textContent = "Action Figure Blitz";
let playerName = document.getElementById("player-name");
playerName.firstChild.textContent = "Player: "
let moveCount = 0;

function tupleToNumberArray(tuple) {
    let strs = tuple.split(",");
    let posArr = [Number(strs[0][1]), Number(strs[1][0])];
    return posArr;
}

function numberArrayToTuple(array) {
    return `(${array[0]},${array[1]})`;
}

function createChessBoard() {
    let board = document.createElement("div");
    board.setAttribute("id", "board");
    let square = null;
    let color = "brown";

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            square = document.createElement("div");
            square.setAttribute("position", `(${row+1},${col+1})`);
            square.style.width = "75px";
            square.style.height = "75px";
            square.style.backgroundColor = color;
            square.setAttribute("occupied", "false");
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

    function createPawns() {
            chessPiece = document.createElement("div");
            chessPiece.style.zIndex = 10;
            image = document.createElement("img");
            chessPiece.appendChild(image);
            chessPiece.setAttribute("class", "piece");
            chessPiece.setAttribute("rank", "pawn");
            chessPiece.setAttribute("power", "1");
            chessPiece.setAttribute("active", "true");

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

    function createRooks() {
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        image = document.createElement("img");
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("rank", "rook");
        chessPiece.setAttribute("power", "3");
        chessPiece.setAttribute("active", "true");

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

    function createKnights() {
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        image = document.createElement("img");
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("rank", "knight");
        chessPiece.setAttribute("power", "2");
        chessPiece.setAttribute("active", "true");

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

    function createBishops() {
        chessPiece = document.createElement("div");
        chessPiece.style.zIndex = 10;
        image = document.createElement("img");
        chessPiece.appendChild(image);
        chessPiece.setAttribute("class", "piece");
        chessPiece.setAttribute("rank", "bishop");
        chessPiece.setAttribute("power", "2");
        chessPiece.setAttribute("active", "true");

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

    function createKings() {
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
        chessPiece.setAttribute("power", "4");
        chessPiece.setAttribute("active", "true");
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

    function createQueens() {
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
        chessPiece.setAttribute("power", "5");
        chessPiece.setAttribute("active", "true");
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

    createPawns();
    createRooks();
    createKnights();
    createBishops();
    createKings();
    createQueens();

    return chessPieces;
}

function setChessPiece(board, chessPiece) {
    Array.prototype.forEach.call(board.children, (square) => {
        if (square.getAttribute("position") === chessPiece.getAttribute("position")) {
            square.appendChild(chessPiece);
            square.setAttribute("occupied", "true");
            return;
        }
    });
}

function setChessPieces(board, chessPieces) {
    for (piece of chessPieces) {
        setChessPiece(board, piece);
    }
}

/*function findMoves(piece, board) {
    let potentialMoves = null;
    let moves = null;
    let posTuple = piece.getAttribute("position");
    let rank = piece.getAttribute("rank");
    let player = piece.getAttribute("player");

    function isMoveValid(move) {
        return (move[0] >= 1 && move[0] <= 8 && move[1] >= 1 && move[1] <= 8);
    }

    function canCapture(posArr, move, player, rank) {
        if (rank === "pawn")
            if (player === "black") {
                if (posArr[0] + 1 && (posArr[1] - 1 === move[1] || posArr[1] + 1 === move[1]))
                    return true;
                else
                    false;
            }
            else {
                if (posArr[0] - 1 && (posArr[1] - 1 === move[1] || posArr[1] + 1 === move[1]))
                    return true;
                else
                    false;
            }
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
        let moveTuple = "";
        potentialMoves.forEach((move) => {
            moveTuple = numberArrayToTuple(move);

            if (isMoveValid(move) && (!isOccupied(moveTuple, board) || canCapture(posArr, move, player, rank)))
                moves.push(move);
        });
    }
    catch (e) {console.log(e);}

    return moves;
}*/

function findMove(moveTuple, board) {
    let moveInfo = {enemy : null, isOccupied : false, square : null};

    Array.prototype.forEach.call(board.children, (square) => {
        if (square.getAttribute("position") === moveTuple) {
            moveInfo["square"] = square;

            if (square.getAttribute("occupied") === "true") {
                moveInfo["enemy"] = square.firstChild;
                moveInfo["isOccupied"] = true;
            }
        }
    });

    return moveInfo;
}

function battle(piece, moveInfo) {
    if (moveInfo.enemy.getAttribute("player") === piece.getAttribute("player"))
        return;

    let powerDif = 0;

    if (piece.getAttribute("power") > moveInfo["enemy"].getAttribute("power")) {
        powerDif = Number(piece.getAttribute("power")) - Number(moveInfo["enemy"].getAttribute("power"));
        piece.setAttribute("power", powerDif);
        destroy(moveInfo.enemy);
    }
    else if (piece.getAttribute("power") < moveInfo["enemy"].getAttribute("power")) {
        powerDif = Number(moveInfo["enemy"].getAttribute("power")) - Number(piece.getAttribute("power"));
        moveInfo["enemy"].setAttribute("power", powerDif);
        destroy(piece);
    }
    else {
        destroy(piece);
        destroy(moveInfo["enemy"]);
    }
}

function destroy(piece) {
    piece.setAttribute("active", "false");
    piece.parentNode.setAttribute("occupied", "false");
    piece.parentNode.removeChild(piece);
}

function movePiece(board, piece) {
    let posArr = tupleToNumberArray(piece.getAttribute("position"));
    
    if (piece.getAttribute("player") === "black")
        posArr[0] += 1;
    else
        posArr[0] -= 1;

    //console.log(`posArr = ${posArr}`);
    let moveInfo = findMove(numberArrayToTuple(posArr), board);
    
    if (moveInfo["isOccupied"]) {
        battle(piece, moveInfo);
        let str = window.prompt("Play again?");
    }

    if (piece.getAttribute("active") === "true") {
        pickedupPiece = pickupPiece(piece, moveInfo.square);
        placePiece(pickedupPiece, moveInfo["square"]);
    }
}

function pickupPiece(piece, square) {
    piece.setAttribute("position", square.getAttribute("position"));
    piece.parentNode.setAttribute("occupied", "false");

    return piece.parentNode.removeChild(piece);
}

function placePiece(piece, square) {
    if (square.getAttribute("position") === piece.getAttribute("position")) {
            square.appendChild(piece);
            square.setAttribute("occupied", "true");
    }
}

function createPlayerRegisration() {
    let formDiv = document.createElement("div");
    formDiv.setAttribute("id", "player-registration");
    let form = document.createElement("form");
    form.setAttribute("id", "registration");
    let usernameBox = document.createElement("input");
    usernameBox.setAttribute("type", "text");
    usernameBox.setAttribute("name", "username");
    usernameBox.setAttribute("placeholder", "Player");
    usernameBox.required = true;
    let formBtn = document.createElement("input");
    formBtn.setAttribute("type", "submit");
    formBtn.setAttribute("value", "Submit");
    form.appendChild(usernameBox);
    form.appendChild(formBtn);
    formDiv.appendChild(form);

    return formDiv;
}

let chessBoard = createChessBoard();

chessBoard.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.nodeName === "IMG") {
        let board = e.target.parentNode.parentNode.parentNode;
        let square = e.target.parentNode.parentNode;
        let piece = e.target.parentNode;

        movePiece(board, piece);
    }
});

document.body.append(createPlayerRegisration());

let playerReg = body.querySelector("#registration");
let playerRegUsername = playerReg.elements["username"];

const validateUsername = function(username) {
    return username.length > 1; 
};

playerReg.addEventListener("submit", (e) => {
    e.preventDefault();
    let isUsernameValid = validateUsername(playerRegUsername.value);

    if (!isUsernameValid) {
        errorMessage = "Username must have more than 1 letter!";
        window.alert(errorMessage);
    }
    else {
        playerName.textContent += `${playerRegUsername.value}`;
    }
});

body.append(chessBoard);

let chessPieces = createChessPieces();

setChessPieces(board, chessPieces);

//console.log(findMoves(chessPieces[0]));



