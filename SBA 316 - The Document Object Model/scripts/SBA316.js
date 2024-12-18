let body = document.body;

function createChessBoard(body) {
    let board = document.createElement("div");
    board.setAttribute("id", "board");
    board.style.margin = "25% 50% 0 50%";
    let square = null;
    let color = "";

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            square = document.createElement("div");
            square.style.width = "25px";
            square.style.height = "25px";
            square.style.backgroundColor = color;
            color = (color === "rgb(0, 0, 0)") ? "rgb(255, 255, 255)" : color;
            board.append(square);
        }
    }

    body.append(board);
}

createChessBoard(body);